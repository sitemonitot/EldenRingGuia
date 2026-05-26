// ══════════════════════════════════
// GESTIÓN DE PROGRESO DEL JUGADOR
// ══════════════════════════════════

// Clave para almacenamiento local (sin cuenta)
const CLAVE_LOCAL = "eldenguide_progreso";

// ─── Guardar progreso (local o Supabase) ───

async function guardarProgreso(objetivoId, completado) {
  if (usuarioActual && supabaseClient) {
    return await guardarProgresoSupabase(objetivoId, completado);
  } else {
    return guardarProgresoLocal(objetivoId, completado);
  }
}

async function guardarProgresoSupabase(objetivoId, completado) {
  const { error } = await supabaseClient
    .from("progreso_usuario")
    .upsert({
      user_id: usuarioActual.id,
      objetivo_id: objetivoId,
      completado: completado,
      fecha_actualizacion: new Date().toISOString()
    }, { onConflict: "user_id,objetivo_id" });

  if (error) {
    console.error("Error guardando en Supabase:", error);
    // Fallback a local
    guardarProgresoLocal(objetivoId, completado);
  }
}

function guardarProgresoLocal(objetivoId, completado) {
  const progreso = obtenerProgresoLocal();
  if (completado) {
    progreso[objetivoId] = true;
  } else {
    delete progreso[objetivoId];
  }
  localStorage.setItem(CLAVE_LOCAL, JSON.stringify(progreso));
}

// ─── Cargar progreso ───

async function cargarProgreso() {
  if (usuarioActual && supabaseClient) {
    return await cargarProgresoSupabase();
  } else {
    return obtenerProgresoLocal();
  }
}

async function cargarProgresoSupabase() {
  const { data, error } = await supabaseClient
    .from("progreso_usuario")
    .select("objetivo_id, completado")
    .eq("user_id", usuarioActual.id)
    .eq("completado", true);

  if (error) {
    console.error("Error cargando de Supabase:", error);
    return obtenerProgresoLocal();
  }

  const mapa = {};
  if (data) data.forEach(item => { mapa[item.objetivo_id] = true; });
  return mapa;
}

function obtenerProgresoLocal() {
  try {
    const guardado = localStorage.getItem(CLAVE_LOCAL);
    return guardado ? JSON.parse(guardado) : {};
  } catch {
    return {};
  }
}

// ─── Aplicar progreso a la UI ───

async function aplicarProgresoUI() {
  const progreso = await cargarProgreso();

  document.querySelectorAll(".objetivo-check").forEach(check => {
    const id = check.dataset.id;
    if (progreso[id]) {
      check.classList.add("marcado");
      const card = check.closest(".objetivo-card") || check.closest(".paso-card");
      if (card) card.classList.add("completado");
    }
  });

  // Contar solo objetivos reales (sin prefijo PASO_)
  const completados = Object.keys(progreso).filter(k => !k.startsWith("PASO_")).length;
  actualizarContadorProgreso(completados);
  return { progreso, completados };
}

// ─── Alternar estado de objetivo ───

async function alternarObjetivo(id, checkElement) {
  const estaCompleto = checkElement.classList.contains("marcado");
  const nuevoEstado = !estaCompleto;

  // Actualizar UI inmediatamente
  if (nuevoEstado) {
    checkElement.classList.add("marcado");
    checkElement.closest(".objetivo-card").classList.add("completado");
  } else {
    checkElement.classList.remove("marcado");
    checkElement.closest(".objetivo-card").classList.remove("completado");
  }

  // Guardar
  await guardarProgreso(id, nuevoEstado);

  // Actualizar contador contando desde los datos guardados (no el DOM)
  const progreso = await cargarProgreso();
  const totalCompletados = Object.keys(progreso).filter(k => !k.startsWith("PASO_")).length;
  actualizarContadorProgreso(totalCompletados);

  // Toast
  if (nuevoEstado) {
    mostrarToast("Objetivo completado ✓", "exito");
  }
}

// ─── Actualizar barra de progreso ───

function contarTotalObjetivos() {
  if (typeof OBJETIVOS === "undefined") return 0;
  let total = 0;
  total += (OBJETIVOS.principales || []).length;
  total += (OBJETIVOS.semidioses || []).length;
  Object.values(OBJETIVOS.opcionales || {}).forEach(arr => {
    if (Array.isArray(arr)) total += arr.length;
  });
  total += (OBJETIVOS.finales || []).length;
  return total;
}

function actualizarContadorProgreso(completados) {
  const total = contarTotalObjetivos();
  const porcentaje = total > 0 ? Math.round((completados / total) * 100) : 0;

  const barra = document.getElementById("barra-relleno");
  const texto = document.getElementById("texto-progreso");
  const barraMain = document.getElementById("barra-relleno-main");
  const textoMain = document.getElementById("texto-progreso-main");

  if (barra) barra.style.width = `${porcentaje}%`;
  if (texto) texto.textContent = `${completados} / ${total}`;
  if (barraMain) barraMain.style.width = `${porcentaje}%`;
  if (textoMain) textoMain.textContent = `${porcentaje}% completado — ${completados} de ${total} objetivos`;
}

// ─── Obtener estadísticas de progreso ───

async function obtenerEstadisticas() {
  const progreso = await cargarProgreso();
  const completados = Object.keys(progreso).length;

  const principales = OBJETIVOS.principales.filter(o => progreso[o.id]).length;
  const semidioses = OBJETIVOS.semidioses.filter(o => progreso[o.id]).length;
  const npcs = (OBJETIVOS.opcionales.misiones_npc || []).filter(o => progreso[o.id]).length;
  const finalesComp = OBJETIVOS.finales.filter(o => progreso[o.id]).length;

  let totalOpcionales = 0;
  let opcionalesComp = 0;
  Object.entries(OBJETIVOS.opcionales).forEach(([key, arr]) => {
    if (Array.isArray(arr)) {
      totalOpcionales += arr.length;
      opcionalesComp += arr.filter(o => progreso[o.id]).length;
    }
  });

  return {
    completados,
    principales: { completados: principales, total: OBJETIVOS.principales.length },
    semidioses: { completados: semidioses, total: OBJETIVOS.semidioses.length },
    opcionales: { completados: opcionalesComp, total: totalOpcionales },
    npcs: { completados: npcs, total: (OBJETIVOS.opcionales.misiones_npc || []).length },
    finales: { completados: finalesComp, total: OBJETIVOS.finales.length }
  };
}

// ─── Sistema de títulos por progreso ───

function calcularTitulo(completados, total) {
  if (total === 0) return "Empañado";
  const pct = (completados / total) * 100;
  if (pct >= 100) return "Elden Lord";
  if (pct >= 90)  return "Señor de las Ruinas";
  if (pct >= 75)  return "Heredero de la Gracia Mayor";
  if (pct >= 50)  return "Guardián de la Gran Runa";
  if (pct >= 25)  return "Caballero Áldano";
  if (pct >= 10)  return "Peregrino de las Tierras Intermedias";
  return "Empañado";
}

// ─── Foto de perfil (localStorage) ───

const CLAVE_FOTO = "eldenguide_foto_perfil";

function guardarFotoLocal(dataUrl) {
  try { localStorage.setItem(CLAVE_FOTO, dataUrl); } catch(e) { console.warn("No se pudo guardar la foto:", e); }
}

function obtenerFotoLocal() {
  try { return localStorage.getItem(CLAVE_FOTO); } catch { return null; }
}

// ─── Reiniciar todo el progreso ───

async function reiniciarProgreso() {
  // Borrar localStorage
  localStorage.removeItem(CLAVE_LOCAL);

  // Borrar en Supabase si hay sesión
  if (usuarioActual && supabaseClient) {
    await supabaseClient
      .from("progreso_usuario")
      .delete()
      .eq("user_id", usuarioActual.id);
  }

  // Desmarcar todos los checkboxes en el DOM
  document.querySelectorAll(".objetivo-check.marcado").forEach(el => {
    el.classList.remove("marcado");
    el.closest(".objetivo-card")?.classList.remove("completado");
  });

  // Desmarcar pasos
  document.querySelectorAll(".paso-check.marcado").forEach(el => {
    el.classList.remove("marcado");
    el.closest(".paso-card")?.classList.remove("completado");
  });

  actualizarContadorProgreso(0);
  mostrarToast("Progreso reiniciado", "exito");
}

// ─── Migrar progreso local a Supabase tras login ───

async function migrarProgresoLocal() {
  if (!usuarioActual || !supabaseClient) return;
  const progresoLocal = obtenerProgresoLocal();
  if (Object.keys(progresoLocal).length === 0) return;

  const inserciones = Object.keys(progresoLocal).map(id => ({
    user_id: usuarioActual.id,
    objetivo_id: id,
    completado: true,
    fecha_actualizacion: new Date().toISOString()
  }));

  const { error } = await supabaseClient
    .from("progreso_usuario")
    .upsert(inserciones, { onConflict: "user_id,objetivo_id" });

  if (!error) {
    localStorage.removeItem(CLAVE_LOCAL);
    mostrarToast(`Se migró tu progreso local (${inserciones.length} objetivos)`, "exito");
  }
}
