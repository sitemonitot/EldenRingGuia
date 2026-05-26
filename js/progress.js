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
  let completados = 0;

  document.querySelectorAll(".objetivo-check").forEach(check => {
    const id = check.dataset.id;
    if (progreso[id]) {
      check.classList.add("marcado");
      check.closest(".objetivo-card").classList.add("completado");
      completados++;
    }
  });

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

  // Actualizar contador
  const totalCompletados = document.querySelectorAll(".objetivo-check.marcado").length;
  actualizarContadorProgreso(totalCompletados);

  // Toast
  if (nuevoEstado) {
    mostrarToast("Objetivo completado ✓", "exito");
  }
}

// ─── Actualizar barra de progreso ───

function actualizarContadorProgreso(completados) {
  const total = document.querySelectorAll(".objetivo-check").length;
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
