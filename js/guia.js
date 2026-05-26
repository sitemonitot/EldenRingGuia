// ══════════════════════════════════
// RENDERIZADO DE LA GUÍA
// ══════════════════════════════════

// ─── Renderizar todos los objetivos ───

function renderizarGuia(filtro = "todos", busqueda = "") {
  const contenedor = document.getElementById("contenedor-objetivos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const grupos = [];

  // Misión principal
  if (filtro === "todos" || filtro === "principal") {
    grupos.push({
      titulo: "⚔ Misión Principal (Obligatoria)",
      icono: "⚔",
      items: OBJETIVOS.principales
    });
  }

  // Semidioses
  if (filtro === "todos" || filtro === "semidioses") {
    grupos.push({
      titulo: "👑 Semidioses y Portadores de Gran Runa",
      icono: "👑",
      items: OBJETIVOS.semidioses
    });
  }

  // Opcionales por región
  if (filtro === "todos" || filtro === "opcionales") {
    const regionesLabels = {
      paramo_miembros: "🌾 Necrolimbo",
      peninsula_llorosa: "🌧 Península del Llanto",
      liurnia_lagos: "🌊 Liurnia de los Lagos",
      caelida: "☠ Caélida",
      meseta_altus: "🏔 Meseta de Altus",
      monte_gelmir: "🌋 Monte Gelmir",
      leyndell: "🏛 Leyndell, Capital Real / Profundidades",
      cimas_gigantes: "❄ Picos de los Gigantes / Fárum Azula",
      campo_sagrado_haligtree: "❄ Campo Sacroníveo y Árbol Hierático de Miquella",
      subterraneas: "🕳 Zonas Subterráneas",
      misiones_npc: "👤 Misiones de Personajes"
    };

    Object.entries(OBJETIVOS.opcionales).forEach(([key, arr]) => {
      if (!Array.isArray(arr)) return;
      grupos.push({
        titulo: regionesLabels[key] || key,
        icono: "◆",
        items: arr
      });
    });
  }

  // Finales
  if (filtro === "todos" || filtro === "finales") {
    grupos.push({
      titulo: "🌙 Los Seis Finales",
      icono: "🌙",
      items: OBJETIVOS.finales
    });
  }

  // Aplicar búsqueda
  const terminoBusqueda = busqueda.toLowerCase().trim();

  grupos.forEach(grupo => {
    const itemsFiltrados = grupo.items.filter(item => {
      if (!terminoBusqueda) return true;
      return (
        item.titulo?.toLowerCase().includes(terminoBusqueda) ||
        item.descripcion?.toLowerCase().includes(terminoBusqueda) ||
        item.region?.toLowerCase().includes(terminoBusqueda) ||
        item.nombre?.toLowerCase().includes(terminoBusqueda)
      );
    });

    if (itemsFiltrados.length === 0) return;

    const grupoEl = document.createElement("div");
    grupoEl.className = "grupo-objetivos";
    grupoEl.innerHTML = `
      <div class="grupo-titulo">${grupo.titulo} <span style="color:var(--texto-suave);font-size:0.8rem;font-family:'Crimson Text',serif;font-weight:400">(${itemsFiltrados.length})</span></div>
      <div class="grupo-items"></div>
    `;

    const itemsContainer = grupoEl.querySelector(".grupo-items");
    itemsFiltrados.forEach(item => {
      itemsContainer.appendChild(crearCardObjetivo(item));
    });

    contenedor.appendChild(grupoEl);
  });

  if (contenedor.children.length === 0) {
    contenedor.innerHTML = `<div class="sin-resultados">No se encontraron objetivos para "<em>${busqueda}</em>"</div>`;
  }

  // Re-aplicar progreso
  cargarProgreso().then(progreso => {
    document.querySelectorAll(".objetivo-check").forEach(check => {
      if (progreso[check.dataset.id]) {
        check.classList.add("marcado");
        check.closest(".objetivo-card").classList.add("completado");
      }
    });
    const total = document.querySelectorAll(".objetivo-check.marcado").length;
    actualizarContadorProgreso(total);
  });
}

// ─── Crear card de objetivo ───

function crearCardObjetivo(objetivo) {
  const card = document.createElement("div");
  card.className = "objetivo-card";
  card.dataset.id = objetivo.id;

  const tipo = obtenerTipoObjetivo(objetivo);
  const esObligatorio = objetivo.obligatorio === true || objetivo.id?.startsWith("MAIN_");
  const esSemidios = objetivo.id?.startsWith("SEMI_");

  let etiquetas = "";
  if (objetivo.region) {
    etiquetas += `<span class="etiqueta etiqueta-region">${objetivo.region.split("—")[0].trim()}</span>`;
  }
  if (esObligatorio) {
    etiquetas += `<span class="etiqueta etiqueta-obligatorio">Obligatorio</span>`;
  } else if (esSemidios) {
    etiquetas += `<span class="etiqueta etiqueta-semidios">Semidiós</span>`;
  } else {
    etiquetas += `<span class="etiqueta etiqueta-opcional">Opcional</span>`;
  }

  const titulo = objetivo.titulo || objetivo.nombre;

  card.innerHTML = `
    <div class="objetivo-cabeza" onclick="toggleObjetivo(this)">
      <div class="objetivo-check" data-id="${objetivo.id}" onclick="event.stopPropagation(); alternarObjetivo('${objetivo.id}', this)"></div>
      <div class="objetivo-info">
        <div class="objetivo-titulo">${titulo}</div>
        <div class="objetivo-meta">${etiquetas}</div>
      </div>
      <div class="objetivo-expandir">▾</div>
    </div>
    <div class="objetivo-detalles">
      ${renderizarDetalles(objetivo)}
    </div>
  `;

  return card;
}

// ─── Renderizar detalles según tipo ───

function renderizarDetalles(objetivo) {
  let html = "";

  if (objetivo.descripcion) {
    html += `
      <div class="detalle-item">
        <div class="detalle-label">Descripción</div>
        <div class="detalle-texto">${objetivo.descripcion}</div>
      </div>`;
  }

  if (objetivo.recompensa) {
    html += `
      <div class="detalle-item">
        <div class="detalle-label">🏆 Recompensa</div>
        <div class="detalle-texto">${objetivo.recompensa}</div>
      </div>`;
  }

  if (objetivo.consejos) {
    html += `
      <div class="detalle-item">
        <div class="detalle-label">💡 Consejos</div>
        <div class="consejo-box">${objetivo.consejos}</div>
      </div>`;
  }

  if (objetivo.requisito) {
    html += `
      <div class="detalle-item">
        <div class="detalle-label">📋 Requisito</div>
        <div class="detalle-texto">${objetivo.requisito}</div>
      </div>`;
  }

  if (objetivo.region) {
    html += `
      <div class="detalle-item">
        <div class="detalle-label">📍 Ubicación</div>
        <div class="detalle-texto">${objetivo.region}</div>
      </div>`;
  }

  if (objetivo.pasos && Array.isArray(objetivo.pasos)) {
    html += `
      <div class="detalle-item">
        <div class="detalle-label">📜 Pasos de la misión</div>
        <ol class="pasos-lista">${objetivo.pasos.map(p => `<li>${p}</li>`).join("")}</ol>
      </div>`;
  }

  if (objetivo.minimo_requerido) {
    html += `
      <div class="detalle-item">
        <div class="consejo-box" style="border-left-color:var(--oro)">
          ⚠ Necesitas derrotar al menos 2 semidioses para acceder a Leyndell. Este es uno de los elegibles.
        </div>
      </div>`;
  }

  if (objetivo.combate) {
    html += renderizarCombate(objetivo.combate);
  }

  return html || '<div class="detalle-texto" style="color:var(--texto-suave)">Sin información adicional.</div>';
}

// ─── Renderizar datos de combate (resistencias/debilidades) ───

const BADGE_MAP = {
  "Fuego":              "fuego",
  "Rayo":               "rayo",
  "Magia":              "magia",
  "Sagrado":            "sagrado",
  "Sangrado":           "sangrado",
  "Escarcha":           "escarcha",
  "Veneno":             "veneno",
  "Podredumbre Carmesí":"podredumbre",
  "Podredumbre":        "podredumbre",
  "Locura":             "locura",
  "Sueño":              "inmune",
  "Cortante":           "fisico",
  "Contundente":        "fisico",
  "Perforante":         "fisico",
  "Físico":             "fisico",
};

function detectarClaseBadge(texto) {
  const t = texto.toLowerCase();
  if (t.includes("inmune")) return "inmune";
  if (t.includes("fuego")) return "fuego";
  if (t.includes("rayo") || t.includes("relámpago")) return "rayo";
  if (t.includes("magia") || t.includes("mágic")) return "magia";
  if (t.includes("sagrado")) return "sagrado";
  if (t.includes("sangrado") || t.includes("hemorra")) return "sangrado";
  if (t.includes("escarcha") || t.includes("hielo") || t.includes("frost")) return "escarcha";
  if (t.includes("veneno")) return "veneno";
  if (t.includes("podredumbre") || t.includes("carmesí") || t.includes("scarlet")) return "podredumbre";
  if (t.includes("locura") || t.includes("madness")) return "locura";
  if (t.includes("sueño") || t.includes("sleep")) return "inmune";
  return "fisico";
}

function renderizarCombate(combate) {
  const { debilidades, resistencias } = combate;

  const renderBadges = (arr) => arr.map(item => {
    const cls = detectarClaseBadge(item);
    return `<span class="badge badge-${cls}">${item}</span>`;
  }).join("");

  let html = `
    <div class="detalle-item">
      <div class="detalle-label">⚔ Resistencias y Debilidades</div>
      <div class="combate-seccion">`;

  if (debilidades) {
    const todosDebiles = [
      ...(debilidades.dano || []),
      ...(debilidades.estados || [])
    ];
    if (todosDebiles.length > 0) {
      html += `
        <div class="combate-grupo debilidades">
          <div class="combate-grupo-titulo">↓ Débil a</div>
          <div class="badges-row">${renderBadges(todosDebiles)}</div>
        </div>`;
    }
  }

  if (resistencias) {
    const todosResist = [
      ...(resistencias.dano || []),
      ...(resistencias.estados || [])
    ];
    if (todosResist.length > 0) {
      html += `
        <div class="combate-grupo resistencias">
          <div class="combate-grupo-titulo">↑ Resistente a</div>
          <div class="badges-row">${renderBadges(todosResist)}</div>
        </div>`;
    }
  }

  html += `</div></div>`;
  return html;
}

// ─── Toggle expandir/colapsar ───

function toggleObjetivo(cabeza) {
  const card = cabeza.closest(".objetivo-card");
  card.classList.toggle("expandido");
}

// ─── Tipo de objetivo ───

function obtenerTipoObjetivo(objetivo) {
  if (objetivo.id?.startsWith("MAIN_")) return "principal";
  if (objetivo.id?.startsWith("SEMI_")) return "semidios";
  if (objetivo.id?.startsWith("FINAL_")) return "final";
  if (objetivo.id?.startsWith("NPC_")) return "npc";
  return "opcional";
}

// ══════════════════════════════════
// RENDERIZADO DE BUILDS
// ══════════════════════════════════

function renderizarBuilds() {
  const grid = document.getElementById("builds-grid");
  if (!grid) return;

  grid.innerHTML = BUILDS.map(build => `
    <div class="build-card" onclick="abrirBuild('${build.id}')">
      <div class="build-header">
        <div class="build-nombre">${build.nombre}</div>
        <span class="build-dificultad dificultad-${build.dificultad.toLowerCase().split("-")[0]}">
          ${build.dificultad}
        </span>
      </div>
      <div class="build-body">
        <div class="build-descripcion">${build.descripcion}</div>
        <div class="build-estilo">▶ ${build.estilo}</div>
        <div class="build-stats-mini">
          ${build.stats_objetivo ? `
            <span class="stat-mini">Niv. ${build.stats_objetivo.nivel}</span>
            <span class="stat-mini">VIG ${build.stats_objetivo.vigor}</span>
            <span class="stat-mini">FUE ${build.stats_objetivo.fuerza}</span>
            <span class="stat-mini">FE ${build.stats_objetivo.fe}</span>
            <span class="stat-mini">INT ${build.stats_objetivo.inteligencia}</span>
            <span class="stat-mini">ARC ${build.stats_objetivo.arcana}</span>
          ` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

function abrirBuild(id) {
  const build = BUILDS.find(b => b.id === id);
  if (!build) return;

  const modal = document.getElementById("modal-build");
  const contenido = document.getElementById("modal-build-contenido");

  contenido.innerHTML = `
    <div class="modal-header">
      <div>
        <div class="build-nombre" style="font-family:'Cinzel',serif;font-size:1.5rem;color:var(--oro-claro);margin-bottom:0.5rem">${build.nombre}</div>
        <span class="build-dificultad dificultad-${build.dificultad.toLowerCase().split("-")[0]}">${build.dificultad}</span>
        <span style="color:var(--texto-suave);margin-left:1rem;font-size:0.9rem">▶ ${build.estilo}</span>
      </div>
      <button class="modal-close" onclick="cerrarBuild()">✕</button>
    </div>
    <div class="modal-body">
      <p style="font-style:italic;color:var(--texto-suave);margin-bottom:1.5rem">${build.descripcion}</p>

      ${build.stats_objetivo ? `
        <div class="modal-section">
          <div class="modal-section-title">Estadísticas objetivo (Nivel ${build.stats_objetivo.nivel})</div>
          <div class="stats-grid">
            ${Object.entries(build.stats_objetivo).filter(([k]) => k !== 'nivel').map(([stat, val]) => `
              <div class="stat-item">
                <div class="stat-nombre">${nombreStat(stat)}</div>
                <div class="stat-valor">${val}</div>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}

      ${build.armas_principales ? `
        <div class="modal-section">
          <div class="modal-section-title">Armas principales</div>
          <ul class="lista-items">
            ${build.armas_principales.map(a => `
              <li><div><strong style="color:var(--texto-titulo)">${a.nombre}</strong><br>
              <span style="font-size:0.85rem;color:var(--texto-suave)">📍 ${a.ubicacion}</span><br>
              <span style="font-size:0.85rem">${a.notas}</span></div></li>
            `).join("")}
          </ul>
        </div>
      ` : ""}

      ${build.armadura ? `
        <div class="modal-section">
          <div class="modal-section-title">Armadura recomendada</div>
          <div style="color:var(--texto-suave)">
            <strong style="color:var(--texto-titulo)">Principal:</strong> ${build.armadura.conjunto}<br>
            <strong>Alternativas:</strong> ${build.armadura.alternativas.join(", ")}
          </div>
        </div>
      ` : ""}

      ${build.talismanes ? `
        <div class="modal-section">
          <div class="modal-section-title">Talismanes</div>
          <ul class="lista-items">${build.talismanes.map(t => `<li>${t}</li>`).join("")}</ul>
        </div>
      ` : ""}

      ${renderizarHabilidadesBuild(build)}

      ${build.guia_nivel ? `
        <div class="modal-section">
          <div class="modal-section-title">Guía de progresión por niveles</div>
          <div class="nivel-steps">
            ${build.guia_nivel.map(g => `
              <div class="nivel-step">
                <span class="nivel-badge">${g.nivel}</span>
                <span style="color:var(--texto-suave)">${g.descripcion}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}

      ${build.puntos_fuertes ? `
        <div class="modal-section" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
          <div>
            <div class="modal-section-title">✓ Puntos fuertes</div>
            <ul class="lista-items">${build.puntos_fuertes.map(p => `<li style="color:#88c088">${p}</li>`).join("")}</ul>
          </div>
          <div>
            <div class="modal-section-title">✗ Puntos débiles</div>
            <ul class="lista-items">${build.puntos_debiles.map(p => `<li style="color:#c08888">${p}</li>`).join("")}</ul>
          </div>
        </div>
      ` : ""}
    </div>
  `;

  modal.classList.add("abierto");
  document.body.style.overflow = "hidden";
}

function renderizarHabilidadesBuild(build) {
  const listas = [
    { key: "incantaciones_recomendadas", label: "Incantaciones recomendadas" },
    { key: "hechizos_recomendados", label: "Hechizos recomendados" },
    { key: "incantaciones_sangre", label: "Incantaciones de sangre" },
    { key: "flechas_recomendadas", label: "Tipos de flechas" },
    { key: "incantaciones_dracon", label: "Incantaciones dracónicas" },
    { key: "incantaciones_muerte", label: "Incantaciones de muerte" }
  ];

  return listas.map(({ key, label }) => {
    if (!build[key]) return "";
    return `
      <div class="modal-section">
        <div class="modal-section-title">${label}</div>
        <ul class="lista-items">${build[key].map(h => `<li>${h}</li>`).join("")}</ul>
        ${build.donde_obtener_incantaciones ? `<div class="consejo-box">${build.donde_obtener_incantaciones}</div>` : ""}
      </div>
    `;
  }).join("");
}

function cerrarBuild() {
  document.getElementById("modal-build").classList.remove("abierto");
  document.body.style.overflow = "";
}

// ─── Nombres de stats en español ───

function nombreStat(stat) {
  const nombres = {
    vigor: "Vigor",
    mente: "Mente",
    resistencia: "Resistencia",
    fuerza: "Fuerza",
    destreza: "Destreza",
    inteligencia: "Inteligencia",
    fe: "Fe",
    arcana: "Arcana"
  };
  return nombres[stat] || stat;
}

// ══════════════════════════════════
// RENDERIZADO DEL PERFIL
// ══════════════════════════════════

async function renderizarPerfil() {
  const perfil = document.getElementById("seccion-perfil");
  if (!perfil) return;

  if (!usuarioActual) {
    perfil.querySelector("#perfil-contenido").innerHTML = `
      <div style="text-align:center;padding:3rem">
        <p style="color:var(--texto-suave);font-style:italic;margin-bottom:1rem">Inicia sesión para ver tu perfil y guardar tu progreso en la nube.</p>
        <button class="btn-submit" style="max-width:200px;margin:0 auto" onclick="navegarA('login')">Iniciar sesión</button>
      </div>
    `;
    return;
  }

  const stats = await obtenerEstadisticas();
  const nombre = usuarioActual.user_metadata?.nombre_usuario || usuarioActual.email.split("@")[0];

  perfil.querySelector("#perfil-contenido").innerHTML = `
    <div class="perfil-header">
      <div class="perfil-avatar">⚔</div>
      <div class="perfil-info">
        <h3>${nombre}</h3>
        <p>${usuarioActual.email}</p>
        <p style="margin-top:0.3rem;color:var(--oro);font-size:0.9rem">Empañado</p>
      </div>
    </div>

    <div class="estadisticas-grid">
      <div class="estadistica-card">
        <div class="estadistica-numero">${stats.completados}</div>
        <div class="estadistica-label">Objetivos completados</div>
      </div>
      <div class="estadistica-card">
        <div class="estadistica-numero">${stats.principales.completados}/${stats.principales.total}</div>
        <div class="estadistica-label">Misión principal</div>
      </div>
      <div class="estadistica-card">
        <div class="estadistica-numero">${stats.semidioses.completados}/${stats.semidioses.total}</div>
        <div class="estadistica-label">Semidioses</div>
      </div>
      <div class="estadistica-card">
        <div class="estadistica-numero">${stats.opcionales.completados}/${stats.opcionales.total}</div>
        <div class="estadistica-label">Objetivos opcionales</div>
      </div>
      <div class="estadistica-card">
        <div class="estadistica-numero">${stats.npcs.completados}/${stats.npcs.total}</div>
        <div class="estadistica-label">Misiones de NPC</div>
      </div>
      <div class="estadistica-card">
        <div class="estadistica-numero">${stats.finales.completados}/${stats.finales.total}</div>
        <div class="estadistica-label">Finales vistos</div>
      </div>
    </div>

    <div style="margin-top:1rem;text-align:center">
      <button class="btn-submit" style="max-width:200px;margin:0 auto;background:var(--rojo);border-color:#8b2020" onclick="cerrarSesion()">
        Cerrar sesión
      </button>
    </div>
  `;
}

// ══════════════════════════════════
// SECCIÓN DE ITEMS
// ══════════════════════════════════

const ITEMS_META = {
  armas:        { icono: "⚔",  label: "Armas",               css: "cat-armas" },
  armaduras:    { icono: "🛡",  label: "Armaduras",            css: "cat-armaduras" },
  talismanes:   { icono: "💎",  label: "Talismanes",           css: "cat-talismanes" },
  objetos_clave:{ icono: "🔑",  label: "Objeto Clave",         css: "cat-objetos" },
  cenizas:      { icono: "👻",  label: "Cenizas de espíritu",  css: "cat-cenizas" },
  hechizos:     { icono: "✨",  label: "Hechizo",              css: "cat-hechizos" },
  incantaciones:{ icono: "🔱",  label: "Incantación",          css: "cat-incantaciones" },
  consumibles:  { icono: "🧪",  label: "Consumible",           css: "cat-consumibles" },
};

function filtrarItems(cat) {
  filtroItemsActivo = cat;
  document.querySelectorAll(".items-cat-btn").forEach(b => {
    b.classList.toggle("activo", b.dataset.cat === cat);
  });
  const busqueda = document.getElementById("buscador-items")?.value || "";
  renderizarItems(cat, busqueda);
}

function renderizarItems(cat = "todos", busqueda = "") {
  const grid = document.getElementById("items-grid");
  if (!grid) return;

  if (typeof ITEMS === "undefined") {
    grid.innerHTML = `<div class="items-vacio">Error cargando items. Recarga la página.</div>`;
    return;
  }

  try {
    const termino = busqueda.toLowerCase().trim();

    const categorias = cat === "todos"
      ? Object.keys(ITEMS_META)
      : [cat];

    let tarjetas = [];

    categorias.forEach(clave => {
      const lista = ITEMS[clave];
      if (!Array.isArray(lista)) return;
      lista.forEach(item => {
        if (termino && !(
          item.nombre?.toLowerCase().includes(termino) ||
          item.nombre_en?.toLowerCase().includes(termino) ||
          item.descripcion?.toLowerCase().includes(termino) ||
          item.como_obtener?.toLowerCase().includes(termino) ||
          item.tipo?.toLowerCase().includes(termino)
        )) return;
        tarjetas.push({ ...item, _cat: clave });
      });
    });

    if (tarjetas.length === 0) {
      grid.innerHTML = `<div class="items-vacio">No se encontraron items${busqueda ? ` para "<em>${busqueda}</em>"` : ""}.</div>`;
      return;
    }

    grid.innerHTML = "";
    tarjetas.forEach(item => {
      grid.appendChild(crearCardItem(item));
    });
  } catch (e) {
    console.error("renderizarItems error:", e);
    grid.innerHTML = `<div class="items-vacio">Error mostrando items: ${e.message}</div>`;
  }
}

function crearCardItem(item) {
  const meta = ITEMS_META[item._cat] || { icono: "📦", label: item._cat, css: "" };
  const card = document.createElement("div");
  card.className = `item-card ${meta.css}`;

  card.innerHTML = `
    <div class="item-cabeza" onclick="toggleItem(this)">
      ${item.imagen
        ? `<img src="${item.imagen}" alt="${item.nombre}" class="item-img-icon" loading="lazy" onerror="this.outerHTML='<div class=\\'item-icono-cat\\'>${meta.icono}</div>'">`
        : `<div class="item-icono-cat">${meta.icono}</div>`}
      <div class="item-info-head">
        <div class="item-nombre">${item.nombre}</div>
        ${item.nombre_en ? `<div class="item-nombre-en">${item.nombre_en}</div>` : ""}
        <div class="item-badges">
          <span class="item-tipo-badge">${meta.label}</span>
          ${item.tipo && item.tipo !== meta.label ? `<span class="item-tipo-badge">${item.tipo}</span>` : ""}
          ${item.escala ? `<span class="item-tipo-badge" style="color:var(--oro);border-color:var(--borde-oro)">Escala: ${item.escala}</span>` : ""}
        </div>
      </div>
      <div class="item-expandir">▾</div>
    </div>
    <div class="item-detalles">
      ${item.descripcion ? `
        <div class="item-detalle-row">
          <div class="item-detalle-label">Descripción</div>
          <div class="item-detalle-texto">${item.descripcion}</div>
        </div>` : ""}
      ${item.como_obtener ? `
        <div class="item-detalle-row">
          <div class="item-detalle-label">📍 Cómo obtenerlo</div>
          <div class="item-obtener-box">${item.como_obtener}</div>
        </div>` : ""}
      ${item.requisitos ? `
        <div class="item-detalle-row">
          <div class="item-detalle-label">📋 Requisitos</div>
          <div class="item-detalle-texto" style="color:var(--col-rayo)">${item.requisitos}</div>
        </div>` : ""}
      ${item.notas ? `
        <div class="item-detalle-row">
          <div class="item-detalle-label">💡 Notas</div>
          <div class="item-notas-box">${item.notas}</div>
        </div>` : ""}
    </div>
  `;

  return card;
}

function toggleItem(cabeza) {
  const card = cabeza.closest(".item-card");
  card.classList.toggle("expandido");
}
