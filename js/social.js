// ══════════════════════════════════
// SISTEMA SOCIAL — AMIGOS Y GRUPOS
// ══════════════════════════════════

const SQL_SETUP = `-- =============================================
-- ELDEN GUIDE — SQL para Amigos y Grupos
-- Pega esto en Supabase > SQL Editor > New query
-- =============================================

-- 1. Perfiles de usuario (búsqueda por nombre)
CREATE TABLE IF NOT EXISTS perfiles_usuario (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nombre_usuario TEXT UNIQUE NOT NULL,
  actualizado_en TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE perfiles_usuario ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Perfiles visibles públicamente" ON perfiles_usuario
  FOR SELECT USING (true);
CREATE POLICY "Solo el usuario edita su perfil" ON perfiles_usuario
  FOR ALL USING (auth.uid() = user_id);

-- 2. Amigos
CREATE TABLE IF NOT EXISTS amigos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  solicitante_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  receptor_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  estado TEXT DEFAULT 'pendiente'
    CHECK (estado IN ('pendiente','aceptado','rechazado')),
  creado_en TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(solicitante_id, receptor_id)
);
ALTER TABLE amigos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver amistades propias" ON amigos FOR SELECT
  USING (auth.uid() IN (solicitante_id, receptor_id));
CREATE POLICY "Enviar solicitud" ON amigos FOR INSERT
  WITH CHECK (auth.uid() = solicitante_id);
CREATE POLICY "Responder solicitud" ON amigos FOR UPDATE
  USING (auth.uid() IN (solicitante_id, receptor_id));
CREATE POLICY "Eliminar amistad" ON amigos FOR DELETE
  USING (auth.uid() IN (solicitante_id, receptor_id));

-- 3. Grupos
CREATE TABLE IF NOT EXISTS grupos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  creador_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  codigo_invitacion TEXT UNIQUE
    DEFAULT SUBSTRING(gen_random_uuid()::TEXT, 1, 8),
  creado_en TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE grupos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver mis grupos" ON grupos FOR SELECT USING (
  auth.uid() = creador_id OR
  EXISTS (SELECT 1 FROM grupo_miembros
          WHERE grupo_id = grupos.id AND user_id = auth.uid())
);
CREATE POLICY "Crear grupos" ON grupos FOR INSERT
  WITH CHECK (auth.uid() = creador_id);
CREATE POLICY "Eliminar grupo" ON grupos FOR DELETE
  USING (auth.uid() = creador_id);

-- 4. Miembros de grupo
CREATE TABLE IF NOT EXISTS grupo_miembros (
  grupo_id UUID REFERENCES grupos(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  nombre_usuario TEXT,
  unido_en TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (grupo_id, user_id)
);
ALTER TABLE grupo_miembros ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver miembros de mis grupos" ON grupo_miembros FOR SELECT USING (
  EXISTS (SELECT 1 FROM grupo_miembros gm
          WHERE gm.grupo_id = grupo_miembros.grupo_id
          AND gm.user_id = auth.uid())
);
CREATE POLICY "Unirse a grupo" ON grupo_miembros FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Salir de grupo" ON grupo_miembros FOR DELETE
  USING (auth.uid() = user_id);

-- 5. Permitir que amigos y grupos vean el progreso entre sí
CREATE POLICY "Amigos y grupos pueden ver progreso"
  ON progreso_usuario FOR SELECT USING (
  auth.uid() = user_id OR
  EXISTS (
    SELECT 1 FROM amigos
    WHERE estado = 'aceptado'
    AND ((solicitante_id = progreso_usuario.user_id AND receptor_id = auth.uid())
      OR (receptor_id = progreso_usuario.user_id AND solicitante_id = auth.uid()))
  ) OR
  EXISTS (
    SELECT 1 FROM grupo_miembros gm1
    JOIN grupo_miembros gm2 ON gm1.grupo_id = gm2.grupo_id
    WHERE gm1.user_id = progreso_usuario.user_id
    AND gm2.user_id = auth.uid()
  )
);`;

// ─── Verificar si las tablas sociales existen ───

async function tablasSocialesExisten() {
  if (!supabaseClient) return false;
  try {
    const { error } = await supabaseClient.from("perfiles_usuario").select("user_id").limit(1);
    // 42P01 = tabla no existe; PGRST116 es "no rows" (OK)
    if (error && (error.code === "42P01" || error.message?.includes("does not exist"))) return false;
    return true;
  } catch (_) {
    return false;
  }
}

// ─── Renderizar pestaña Amigos ───

async function renderizarAmigos() {
  const contenido = document.getElementById("perfil-contenido");
  if (!contenido) return;

  if (!usuarioActual) {
    contenido.innerHTML = `<div class="social-setup-msg"><p>Inicia sesión para ver tus amigos.</p></div>`;
    return;
  }

  contenido.innerHTML = `<div class="cargando"><div class="spinner"></div> Cargando amigos...</div>`;

  const tablaOk = await tablasSocialesExisten();
  if (!tablaOk) {
    mostrarBloqueSetupSQL(contenido);
    return;
  }

  // Solicitudes pendientes recibidas
  const { data: solicitudesPend } = await supabaseClient
    .from("amigos")
    .select("id, solicitante_id")
    .eq("receptor_id", usuarioActual.id)
    .eq("estado", "pendiente");

  let solicitudesConNombre = [];
  if (solicitudesPend?.length) {
    const ids = solicitudesPend.map(s => s.solicitante_id);
    const { data: perfs } = await supabaseClient
      .from("perfiles_usuario").select("user_id, nombre_usuario").in("user_id", ids);
    solicitudesConNombre = solicitudesPend.map(s => ({
      ...s,
      nombre: perfs?.find(p => p.user_id === s.solicitante_id)?.nombre_usuario || "Desconocido"
    }));
  }

  // Amigos aceptados
  const { data: amistades } = await supabaseClient
    .from("amigos")
    .select("id, solicitante_id, receptor_id")
    .or(`solicitante_id.eq.${usuarioActual.id},receptor_id.eq.${usuarioActual.id}`)
    .eq("estado", "aceptado");

  let amigosConProgreso = [];
  if (amistades?.length) {
    const amigoIds = amistades.map(a =>
      a.solicitante_id === usuarioActual.id ? a.receptor_id : a.solicitante_id
    );
    const { data: perfs } = await supabaseClient
      .from("perfiles_usuario").select("user_id, nombre_usuario").in("user_id", amigoIds);
    const { data: progresos } = await supabaseClient
      .from("progreso_usuario").select("user_id, objetivo_id")
      .in("user_id", amigoIds).eq("completado", true);

    const totalObjs = contarTotalObjetivos();
    amigosConProgreso = amigoIds.map(amigoId => {
      const completados = progresos
        ?.filter(p => p.user_id === amigoId && !p.objetivo_id.startsWith("PASO_")).length || 0;
      const pct = totalObjs > 0 ? Math.round((completados / totalObjs) * 100) : 0;
      const amistad = amistades.find(a =>
        a.solicitante_id === amigoId || a.receptor_id === amigoId);
      return {
        id: amigoId,
        nombre: perfs?.find(p => p.user_id === amigoId)?.nombre_usuario || "Desconocido",
        completados, pct,
        titulo: calcularTitulo(completados, totalObjs),
        amistadId: amistad?.id
      };
    });
  }

  contenido.innerHTML = `
    <div class="social-seccion">
      <div class="social-buscar">
        <h4 class="social-sub">Añadir amigo por nombre de usuario</h4>
        <div class="social-form-row">
          <input type="text" id="input-buscar-amigo" class="social-input"
            placeholder="Nombre de usuario exacto..." maxlength="50"
            onkeydown="if(event.key==='Enter')enviarSolicitudAmistad()">
          <button class="btn-social" onclick="enviarSolicitudAmistad()">Enviar solicitud</button>
        </div>
        <div id="resultado-buscar-amigo" class="social-feedback"></div>
      </div>

      ${solicitudesConNombre.length ? `
        <div class="social-grupo-bloque">
          <h4 class="social-sub">Solicitudes recibidas (${solicitudesConNombre.length})</h4>
          ${solicitudesConNombre.map(s => `
            <div class="social-card solicitud-card">
              <span class="social-username">⚔ ${s.nombre}</span>
              <div class="social-acciones">
                <button class="btn-social btn-verde" onclick="responderSolicitud('${s.id}', true)">Aceptar</button>
                <button class="btn-social btn-rojo" onclick="responderSolicitud('${s.id}', false)">Rechazar</button>
              </div>
            </div>
          `).join("")}
        </div>
      ` : ""}

      <div class="social-grupo-bloque">
        <h4 class="social-sub">Tus amigos (${amigosConProgreso.length})</h4>
        ${amigosConProgreso.length === 0
          ? `<p class="social-vacio">Aún no tienes amigos. Búscalos por su nombre de usuario.</p>`
          : amigosConProgreso.sort((a,b) => b.pct - a.pct).map(a => `
            <div class="social-card amigo-card">
              <div class="social-amigo-info">
                <span class="social-username">⚔ ${a.nombre}</span>
                <span class="social-titulo-small">${a.titulo}</span>
              </div>
              <div class="social-progreso-mini">
                <div class="social-barra-bg">
                  <div class="social-barra-fill" style="width:${a.pct}%"></div>
                </div>
                <span class="social-pct">${a.pct}%</span>
              </div>
              <button class="btn-social btn-rojo btn-sm" title="Eliminar amigo"
                onclick="eliminarAmigo('${a.amistadId}')">✕</button>
            </div>
          `).join("")}
      </div>
    </div>
  `;
}

// ─── Enviar solicitud de amistad ───

async function enviarSolicitudAmistad() {
  const input = document.getElementById("input-buscar-amigo");
  const feedback = document.getElementById("resultado-buscar-amigo");
  const nombre = input?.value?.trim();
  if (!nombre || !feedback) return;

  feedback.textContent = "Buscando...";
  feedback.className = "social-feedback";

  const { data: perfs } = await supabaseClient
    .from("perfiles_usuario")
    .select("user_id, nombre_usuario")
    .eq("nombre_usuario", nombre)
    .neq("user_id", usuarioActual.id)
    .limit(1);

  if (!perfs?.length) {
    feedback.textContent = "No se encontró ningún usuario con ese nombre.";
    feedback.className = "social-feedback error";
    return;
  }

  const { error } = await supabaseClient.from("amigos").insert({
    solicitante_id: usuarioActual.id,
    receptor_id: perfs[0].user_id,
    estado: "pendiente"
  });

  if (error) {
    feedback.textContent = error.code === "23505"
      ? "Ya existe una solicitud o amistad con ese usuario."
      : "Error enviando la solicitud.";
    feedback.className = "social-feedback error";
    return;
  }

  input.value = "";
  feedback.textContent = `Solicitud enviada a ${perfs[0].nombre_usuario} ✓`;
  feedback.className = "social-feedback exito";
}

// ─── Aceptar / rechazar solicitud ───

async function responderSolicitud(id, aceptar) {
  await supabaseClient.from("amigos")
    .update({ estado: aceptar ? "aceptado" : "rechazado" }).eq("id", id);
  mostrarToast(aceptar ? "Solicitud aceptada ✓" : "Solicitud rechazada", aceptar ? "exito" : "");
  renderizarAmigos();
}

// ─── Eliminar amigo ───

async function eliminarAmigo(amistadId) {
  await supabaseClient.from("amigos").delete().eq("id", amistadId);
  mostrarToast("Amigo eliminado", "");
  renderizarAmigos();
}

// ─── Renderizar pestaña Grupos ───

async function renderizarGrupos() {
  const contenido = document.getElementById("perfil-contenido");
  if (!contenido) return;

  if (!usuarioActual) return;

  contenido.innerHTML = `<div class="cargando"><div class="spinner"></div> Cargando grupos...</div>`;

  const tablaOk = await tablasSocialesExisten();
  if (!tablaOk) {
    mostrarBloqueSetupSQL(contenido);
    return;
  }

  // Grupos donde soy creador
  const { data: grupoCread } = await supabaseClient
    .from("grupos").select("*").eq("creador_id", usuarioActual.id);

  // Grupos donde soy miembro
  const { data: membresias } = await supabaseClient
    .from("grupo_miembros").select("grupo_id").eq("user_id", usuarioActual.id);

  const idsMembresia = (membresias || []).map(m => m.grupo_id);
  let gruposMembresia = [];
  if (idsMembresia.length) {
    const { data: gm } = await supabaseClient
      .from("grupos").select("*").in("id", idsMembresia);
    gruposMembresia = (gm || []).filter(g => g.creador_id !== usuarioActual.id);
  }

  const todosGrupos = [...(grupoCread || []), ...gruposMembresia];

  // Para cada grupo, cargar miembros y su progreso
  const totalObjs = contarTotalObjetivos();
  const gruposConInfo = await Promise.all(todosGrupos.map(async grupo => {
    const { data: miembros } = await supabaseClient
      .from("grupo_miembros").select("user_id, nombre_usuario").eq("grupo_id", grupo.id);

    const miembroIds = (miembros || []).map(m => m.user_id);
    let progresosMiembros = [];

    if (miembroIds.length) {
      const { data: progs } = await supabaseClient
        .from("progreso_usuario").select("user_id, objetivo_id")
        .in("user_id", miembroIds).eq("completado", true);

      progresosMiembros = (miembros || []).map(m => {
        const completados = (progs || [])
          .filter(p => p.user_id === m.user_id && !p.objetivo_id.startsWith("PASO_")).length;
        const pct = totalObjs > 0 ? Math.round((completados / totalObjs) * 100) : 0;
        return {
          userId: m.user_id,
          nombre: m.nombre_usuario || "Desconocido",
          soyYo: m.user_id === usuarioActual.id,
          completados, pct,
          titulo: calcularTitulo(completados, totalObjs)
        };
      });
    }

    return { ...grupo, miembros: progresosMiembros, soyCreador: grupo.creador_id === usuarioActual.id };
  }));

  contenido.innerHTML = `
    <div class="social-seccion">
      <div class="social-grupo-acciones">
        <div class="social-accion-bloque">
          <h4 class="social-sub">Crear grupo</h4>
          <div class="social-form-row">
            <input type="text" id="input-nombre-grupo" class="social-input"
              placeholder="Nombre del grupo..." maxlength="40"
              onkeydown="if(event.key==='Enter')crearGrupo()">
            <button class="btn-social" onclick="crearGrupo()">Crear</button>
          </div>
        </div>
        <div class="social-accion-bloque">
          <h4 class="social-sub">Unirse con código</h4>
          <div class="social-form-row">
            <input type="text" id="input-codigo-grupo" class="social-input"
              placeholder="Código de invitación..." maxlength="8"
              onkeydown="if(event.key==='Enter')unirseAGrupo()">
            <button class="btn-social" onclick="unirseAGrupo()">Unirse</button>
          </div>
          <div id="resultado-grupo" class="social-feedback"></div>
        </div>
      </div>

      <div class="social-grupo-bloque">
        <h4 class="social-sub">Tus grupos (${gruposConInfo.length})</h4>
        ${gruposConInfo.length === 0
          ? `<p class="social-vacio">No perteneces a ningún grupo. Crea uno o únete con un código de invitación.</p>`
          : gruposConInfo.map(g => `
            <div class="grupo-card">
              <div class="grupo-card-header">
                <span class="grupo-nombre">🏰 ${g.nombre}</span>
                <div class="grupo-meta">
                  <span class="grupo-codigo-label">Código:</span>
                  <code class="grupo-codigo">${g.codigo_invitacion}</code>
                  <button class="btn-copiar" title="Copiar código"
                    onclick="copiarCodigo('${g.codigo_invitacion}')">📋</button>
                  ${g.soyCreador
                    ? `<button class="btn-social btn-rojo btn-sm" onclick="eliminarGrupo('${g.id}')">Eliminar</button>`
                    : `<button class="btn-social btn-rojo btn-sm" onclick="salirDeGrupo('${g.id}')">Salir</button>`}
                </div>
              </div>
              <div class="grupo-miembros-lista">
                ${g.miembros.sort((a,b) => b.pct - a.pct).map(m => `
                  <div class="social-card amigo-card${m.soyYo ? " social-yo" : ""}">
                    <div class="social-amigo-info">
                      <span class="social-username">⚔ ${m.nombre}${m.soyYo ? " <em>(tú)</em>" : ""}</span>
                      <span class="social-titulo-small">${m.titulo}</span>
                    </div>
                    <div class="social-progreso-mini">
                      <div class="social-barra-bg">
                        <div class="social-barra-fill" style="width:${m.pct}%"></div>
                      </div>
                      <span class="social-pct">${m.pct}%</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
      </div>
    </div>
  `;
}

// ─── Crear grupo ───

async function crearGrupo() {
  const input = document.getElementById("input-nombre-grupo");
  const nombre = input?.value?.trim();
  if (!nombre) { mostrarToast("Escribe un nombre para el grupo", ""); return; }

  const { data, error } = await supabaseClient
    .from("grupos")
    .insert({ nombre, creador_id: usuarioActual.id })
    .select().single();

  if (error) { mostrarToast("Error creando el grupo", "error"); return; }

  const nombreUsuario = usuarioActual.user_metadata?.nombre_usuario || usuarioActual.email.split("@")[0];
  await supabaseClient.from("grupo_miembros").insert({
    grupo_id: data.id, user_id: usuarioActual.id, nombre_usuario: nombreUsuario
  });

  input.value = "";
  mostrarToast(`Grupo "${nombre}" creado ✓`, "exito");
  renderizarGrupos();
}

// ─── Unirse a grupo ───

async function unirseAGrupo() {
  const input = document.getElementById("input-codigo-grupo");
  const feedback = document.getElementById("resultado-grupo");
  const codigo = input?.value?.trim();
  if (!codigo) return;

  const { data: grupo } = await supabaseClient
    .from("grupos").select("id, nombre").eq("codigo_invitacion", codigo).single();

  if (!grupo) {
    if (feedback) { feedback.textContent = "Código no válido."; feedback.className = "social-feedback error"; }
    return;
  }

  const nombreUsuario = usuarioActual.user_metadata?.nombre_usuario || usuarioActual.email.split("@")[0];
  const { error } = await supabaseClient.from("grupo_miembros").insert({
    grupo_id: grupo.id, user_id: usuarioActual.id, nombre_usuario: nombreUsuario
  });

  if (error) {
    if (feedback) { feedback.textContent = "Ya eres miembro de este grupo."; feedback.className = "social-feedback error"; }
    return;
  }

  input.value = "";
  mostrarToast(`Te has unido a "${grupo.nombre}" ✓`, "exito");
  renderizarGrupos();
}

// ─── Salir / eliminar grupo ───

async function salirDeGrupo(grupoId) {
  await supabaseClient.from("grupo_miembros").delete()
    .eq("grupo_id", grupoId).eq("user_id", usuarioActual.id);
  mostrarToast("Has salido del grupo", "");
  renderizarGrupos();
}

async function eliminarGrupo(grupoId) {
  await supabaseClient.from("grupos").delete().eq("id", grupoId);
  mostrarToast("Grupo eliminado", "");
  renderizarGrupos();
}

// ─── Copiar código ───

function copiarCodigo(codigo) {
  navigator.clipboard?.writeText(codigo).then(() => {
    mostrarToast(`Código "${codigo}" copiado ✓`, "exito");
  });
}

// ─── Bloque de configuración SQL ───

function mostrarBloqueSetupSQL(contenedor) {
  contenedor.innerHTML = `
    <div class="social-setup-msg">
      <h3>⚙ Configuración requerida en Supabase</h3>
      <p>Para usar amigos y grupos necesitas crear las tablas en tu proyecto de Supabase.</p>
      <button class="btn-submit" style="max-width:220px;margin:1rem auto" onclick="mostrarModalSQL()">
        Ver SQL de configuración
      </button>
    </div>
  `;
}

function mostrarModalSQL() {
  document.getElementById("modal-sql-setup").classList.add("abierto");
  document.body.style.overflow = "hidden";
}

function cerrarModalSQL() {
  document.getElementById("modal-sql-setup").classList.remove("abierto");
  document.body.style.overflow = "";
}

function copiarSQL() {
  navigator.clipboard?.writeText(SQL_SETUP).then(() => {
    mostrarToast("SQL copiado al portapapeles ✓", "exito");
  });
}
