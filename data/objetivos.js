// Todos los objetivos de Elden Ring en español castellano
const OBJETIVOS = {

  // ═══════════════════════════════════════
  // MISIÓN PRINCIPAL (obligatoria)
  // ═══════════════════════════════════════
  principales: [
    {
      id: "MAIN_01",
      titulo: "Prólogo: La Capilla de la Anticipación",
      descripcion: "Despierta en la Capilla de la Anticipación. Encuentra el portal al exterior. Opcionalmente, derrota al Vástago Injertado (jefe opcional muy difícil para el inicio).",
      recompensa: "Inicio del juego, Joya Espiritual de Miembros (si derrotas al Vástago)",
      consejos: "Se recomienda morir aquí para avanzar. Puedes volver más tarde cuando seas más fuerte.",
      region: "Capilla de la Anticipación",
      obligatorio: true
    },
    {
      id: "MAIN_02",
      titulo: "Despertar en las Tierras Intermedias",
      descripcion: "Despierta en el Cementerio del Inicio. Sube la escalera y llega a la superficie del Necrolimbo. Explora los alrededores básicos.",
      recompensa: "Acceso a Las Tierras Intermedias",
      consejos: "El Jinete Necrológico del puente cercano está pensado para evitarse al principio.",
      region: "Necrolimbo",
      obligatorio: true
    },
    {
      id: "MAIN_03",
      titulo: "Conocer a Melina",
      descripcion: "Descansa en tres Lugares de Gracia en el exterior para que Melina te visite. Acepta su trato para recibir a Torrente y poder gastar runas en niveles.",
      recompensa: "Torrente (destrero espectral), capacidad de subir de nivel",
      consejos: "Sin este paso no puedes subir de nivel. Busca los Lugares de Gracia de la zona inicial.",
      region: "Necrolimbo",
      obligatorio: true
    },
    {
      id: "MAIN_04",
      titulo: "Obtener al menos dos Grandes Runas",
      descripcion: "Derrota a dos semidioses portadores de Gran Runa para poder acceder a Leyndell, Capital Real. Los más accesibles al principio son Godrick (Castillo de Velo Tormentoso) y Rennala (Academia de Raya Lúcida).",
      recompensa: "Dos Grandes Runas, acceso a Leyndell",
      consejos: "No es necesario que sean los mismos dos semidioses; cualquier combinación de dos de los siete vale.",
      region: "Varias",
      obligatorio: true
    },
    {
      id: "MAIN_05",
      titulo: "Llegar a la Meseta de Altus",
      descripcion: "Sube a la Meseta de Altus mediante el Gran Ascensor Dectus (necesitas los dos fragmentos del Medallón Dectus) o ascendiendo por el Camino del Arroyo de Raya Lúcida.",
      recompensa: "Acceso a la Meseta de Altus y a Leyndell",
      consejos: "El Camino del Arroyo es más accesible si no tienes el Medallón. Tiene varios jefes intermedios.",
      region: "Liurnia de los Lagos / Meseta de Altus",
      obligatorio: true
    },
    {
      id: "MAIN_06",
      titulo: "Leyndell, Capital Real: Godfrey el Espectro Áureo",
      descripcion: "Entra en Leyndell, Capital Real. Atraviesa la ciudad y derrota a Godfrey, Primer Señor Áldano (forma espectral áurea) en el Gran Vestíbulo de la Capital.",
      recompensa: "Fragmento de Gran Runa, acceso al trono interior",
      consejos: "Godfrey en esta forma es relativamente manejable. Busca los atajos por los tejados de Leyndell.",
      region: "Leyndell, Capital Real",
      obligatorio: true
    },
    {
      id: "MAIN_07",
      titulo: "Leyndell: Derrotar a Morgott, el Rey Presagio",
      descripcion: "Asciende al Trono Áldano de Leyndell y derrota a Morgott, el Rey Presagio. Es el guardián de la Capital Real y custodio del Árbol Áldano.",
      recompensa: "Gran Runa de Morgott, Recuerdo de Morgott, Gran Medallón de Rold",
      consejos: "Morgott tiene dos fases. En la segunda invoca armas sagradas. Los espíritus de ceniza son muy útiles aquí.",
      region: "Leyndell, Capital Real",
      obligatorio: true,
      combate: {
        debilidades: {
          dano: ["Cortante (+10% de daño extra)"],
          estados: ["Veneno", "Podredumbre Carmesí", "Sangrado", "Escarcha"]
        },
        resistencias: {
          dano: ["Sagrado (40%)"],
          estados: ["Locura (Inmune)"]
        }
      }
    },
    {
      id: "MAIN_08",
      titulo: "Los Picos de los Gigantes",
      descripcion: "Usa el Gran Medallón de Rold en el Gran Ascensor de Rold para ascender a los Picos de los Gigantes. Explora y avanza hacia la Fragua de los Gigantes.",
      recompensa: "Acceso a los Picos de los Gigantes",
      consejos: "La zona es muy fría. Ten cuidado con el Gigante de Hielo del inicio. El Campo Sacroníveo está oculto tras el Medallón de Haligtree.",
      region: "Picos de los Gigantes",
      obligatorio: true
    },
    {
      id: "MAIN_09",
      titulo: "Derrotar al Gigante de Fuego",
      descripcion: "Derrota al enorme Gigante de Fuego que custodia el acceso a la Fragua de los Gigantes.",
      recompensa: "Recuerdo del Gigante de Fuego, acceso a la Fragua",
      consejos: "Ataca su pie izquierdo (donde tiene el ojo) para hacerle mucho daño. A caballo es mucho más fácil. En su segunda fase se arranca la cabeza.",
      region: "Picos de los Gigantes",
      obligatorio: true,
      combate: {
        debilidades: {
          dano: ["Cortante (+10% de daño extra)", "Físico estándar, contundente, perforante", "Magia", "Rayo", "Sagrado"],
          estados: ["Veneno", "Podredumbre Carmesí", "Sangrado", "Sueño"]
        },
        resistencias: {
          dano: ["Fuego (50% — muy resistente)", "Sagrado (20%)"],
          estados: ["Escarcha (muy resistente)", "Locura (Inmune)"]
        }
      }
    },
    {
      id: "MAIN_10",
      titulo: "Quemar el Árbol Áldano en la Fragua de los Gigantes",
      descripcion: "Llega a la Fragua de los Gigantes y toma la decisión de quemar el Árbol Áldano. Melina se sacrificará para encender la llama (a menos que hayas obtenido la Señal de los Tres Dedos).",
      recompensa: "Apertura del camino a Fárum Azula. Si elegiste la Llama Frenética, Melina se convierte en enemiga.",
      consejos: "Este es un punto de no retorno. La decisión no afecta al resto del juego hasta el final.",
      region: "Picos de los Gigantes",
      obligatorio: true
    },
    {
      id: "MAIN_11",
      titulo: "Fárum Azula en Desmoronamiento",
      descripcion: "Eres transportado automáticamente a Fárum Azula en Desmoronamiento, una ciudad flotante en ruinas. Atraviésala y llega al Templo de las Bestias Draconicas.",
      recompensa: "Acceso a Maliketh",
      consejos: "Zona muy difícil. Los Guerreros Bestia son peligrosos. Hay un jefe opcional muy poderoso: el Señor Dragón Placidusax.",
      region: "Fárum Azula en Desmoronamiento",
      obligatorio: true
    },
    {
      id: "MAIN_12",
      titulo: "Derrotar a Maliketh, la Hoja Negra",
      descripcion: "Derrota al Guardián de la Bestia en su primera fase, y luego a Maliketh, la Hoja Negra, en su verdadera forma. Esto quema el Árbol Áldano y convierte Leyndell en Capital de Cenizas.",
      recompensa: "Recuerdo de la Hoja Negra, acceso a Leyndell Capital de Cenizas",
      consejos: "La segunda fase es muy agresiva. La Hoja Negra reduce tu barra de salud máxima temporalmente. Mantente activo y agresivo.",
      region: "Fárum Azula en Desmoronamiento",
      obligatorio: true,
      combate: {
        debilidades: {
          dano: ["Veneno y Podredumbre Carmesí (umbral bajo ~351)"],
          estados: ["Veneno", "Podredumbre Carmesí"]
        },
        resistencias: {
          dano: ["Sagrado (80% — MUY resistente)", "Magia (40%)", "Fuego (40%)", "Rayo (40%)", "Físico (35% todos los tipos)"],
          estados: ["Locura (Inmune)", "Sueño (casi inmune, umbral 2277)"]
        }
      }
    },
    {
      id: "MAIN_13",
      titulo: "Leyndell, Capital de Cenizas: Sir Gideon Ofnir",
      descripcion: "Regresa a Leyndell (ahora convertida en Capital de Cenizas) y derrota a Sir Gideon Ofnir, el Omnisciente, en la sala del trono de la Capital de Cenizas.",
      recompensa: "Runas, acceso al jefe final de Leyndell",
      consejos: "Gideon usa todos los hechizos e incantaciones del juego. Puede ser interrumpido fácilmente. El ataque del Fuego de Marika lo anula temporalmente.",
      region: "Leyndell, Capital de Cenizas",
      obligatorio: true
    },
    {
      id: "MAIN_14",
      titulo: "Derrotar a Godfrey, Primer Señor Áldano / Hoarah Loux, Guerrero",
      descripcion: "Derrota a Godfrey, Primer Señor Áldano en su forma real. En la segunda fase se convierte en Hoarah Loux, Guerrero, revelando su naturaleza original.",
      recompensa: "Recuerdo del Primer Señor, acceso al Árbol Áldano",
      consejos: "La segunda fase como Hoarah Loux es extremadamente agresiva con combate cuerpo a cuerpo puro. Los trucos de su primera fase no funcionan igual.",
      region: "Leyndell, Capital de Cenizas",
      obligatorio: true,
      combate: {
        debilidades: {
          dano: ["Fase 1: Rayo (sin resistencia), Perforante (sin resistencia)", "Fase 2: Cortante (+10%), todos los tipos físicos y elementales"],
          estados: ["Veneno", "Podredumbre Carmesí", "Sangrado", "Escarcha"]
        },
        resistencias: {
          dano: ["Sagrado (40% ambas fases)", "Fase 1: Magia/Fuego (20%)"],
          estados: ["Locura (Inmune)"]
        }
      }
    },
    {
      id: "MAIN_15",
      titulo: "Ascender al Árbol Áldano",
      descripcion: "Usa el ascensor al interior del Árbol Áldano y asciende hasta el Trono Áldano para el enfrentamiento final.",
      recompensa: "Acceso al jefe final",
      consejos: "Hay un Lugar de Gracia justo antes del jefe final. Asegúrate de tener consumibles.",
      region: "Árbol Áldano",
      obligatorio: true
    },
    {
      id: "MAIN_16",
      titulo: "El Jefe Final: Radagón del Orden Áureo / Bestia Áldana",
      descripcion: "Derrota a Radagón del Orden Áureo en la primera fase, y luego a la Bestia Áldana que emerge de él en la segunda fase. Esta es la batalla final del juego.",
      recompensa: "Créditos del juego, acceso al final seleccionado",
      consejos: "Radagón es muy agresivo con combos rápidos. La Bestia Áldana lucha en un espacio sagrado. Los ataques de la Bestia pueden absorberse usando ciertos hechizos de Marika. Radagón es débil al daño Relámago.",
      region: "Árbol Áldano",
      obligatorio: true,
      combate: {
        debilidades: {
          dano: ["Radagón: Fuego (sin resistencia — muy vulnerable)", "Radagón: Contundente (10% vs 35% del resto)", "Bestia Áldana: Físico (10% resistencia baja)"],
          estados: ["Radagón: Veneno, Podredumbre Carmesí, Escarcha"]
        },
        resistencias: {
          dano: ["Radagón: Sagrado (80% — casi inmune)", "Bestia Áldana: Sagrado (80%)", "Bestia Áldana: Magia/Fuego/Rayo (40%)"],
          estados: ["Radagón: Sangrado/Sueño/Locura (Inmune)", "Bestia Áldana: TODOS los estados (Inmune)"]
        }
      }
    },
    {
      id: "MAIN_17",
      titulo: "Elegir tu destino: Los seis finales",
      descripcion: "Al derrotar a la Bestia Áldana, interactúa con el Anillo Áldano roto para elegir el destino de Las Tierras Intermedias. Hay seis finales posibles según las misiones que hayas completado.",
      recompensa: "Fin del juego y créditos",
      consejos: "Puedes ver todos los finales en diferentes partidas de NG+. El final de Ranni requiere su misión completa. El de la Llama Frenética requiere la Señal de los Tres Dedos.",
      region: "Árbol Áldano",
      obligatorio: true
    }
  ],

  // ═══════════════════════════════════════
  // SEMIDIOSES (mínimo 2 obligatorios)
  // ═══════════════════════════════════════
  semidioses: [
    {
      id: "SEMI_01",
      titulo: "Derrotar a Godrick el Injertado",
      descripcion: "Atraviesa el Castillo de Velo Tormentoso, derrota a Margit el Presagio Maldito en la entrada, y luego enfrenta a Godrick el Injertado en el patio del castillo. Es el señor del Necrolimbo.",
      recompensa: "Gran Runa de Godrick, Recuerdo del Injertado, Runas (20.000)",
      consejos: "En su segunda fase se injerta el brazo de un dragón y usa ataques de fuego. Rueda bajo el aliento de fuego. Nellie (NPC invocable) ayuda mucho.",
      region: "Necrolimbo — Castillo de Velo Tormentoso",
      obligatorio: false,
      minimo_requerido: true,
      combate: {
        debilidades: {
          dano: ["Físico (todos los tipos)"],
          estados: ["Veneno", "Podredumbre Carmesí", "Sangrado", "Escarcha"]
        },
        resistencias: {
          dano: ["Magia (20%)", "Fuego (20%)", "Rayo (20%)", "Sagrado (40%)"],
          estados: ["Locura (Inmune)"]
        }
      }
    },
    {
      id: "SEMI_02",
      titulo: "Derrotar a Rennala, Reina de la Luna Llena",
      descripcion: "Accede a la Academia de Raya Lúcida con la Llave de la Academia. Derrota al Lobo Rojo de Radagón y luego asciende hasta la Gran Biblioteca donde espera Rennala.",
      recompensa: "Gran Runa de Rennala, Recuerdo de la Luna Llena, capacidad de reencarnación (cambio de atributos)",
      consejos: "Primera fase: destruye las llamas doradas de los estudiantes que la rodean para hacerla caer. Segunda fase: ataca mientras está recuperándose de sus hechizos. Inmune durante sus invocaciones.",
      region: "Liurnia de los Lagos — Academia de Raya Lúcida",
      obligatorio: false,
      minimo_requerido: true,
      combate: {
        debilidades: {
          dano: ["Físico (todos los tipos)", "Fuego", "Rayo", "Sagrado"],
          estados: ["Veneno", "Podredumbre Carmesí", "Sangrado", "Escarcha"]
        },
        resistencias: {
          dano: ["Magia (80% — MUY resistente)"],
          estados: ["Sueño (Inmune)", "Locura (Inmune)"]
        }
      }
    },
    {
      id: "SEMI_03",
      titulo: "Derrotar a Radahn, Azote de Estrellas",
      descripcion: "Viaja a Caélida y llega al Castillo Redmane durante el Festival de Radahn. Invoca a todos los aliados disponibles y derrota al Conquistador de las Estrellas en su batalla campal.",
      recompensa: "Gran Runa de Radahn, Recuerdo del Conquistador de las Estrellas, apertura de Nokron (Ciudad Eterna)",
      consejos: "Usa los estandartes del campo de batalla para reinvocar aliados. A caballo puedes esquivar sus flechas gigantes. En su segunda fase hace una carga desde el cielo.",
      region: "Caélida — Castillo Redmane",
      obligatorio: false,
      minimo_requerido: true,
      combate: {
        debilidades: {
          dano: ["Perforante (sin resistencia)", "Físico estándar y cortante (10%)"],
          estados: ["Podredumbre Carmesí (muy susceptible, umbral bajo)"]
        },
        resistencias: {
          dano: ["Magia (20%)", "Fuego (20%)", "Rayo (20%)", "Sagrado (40%)"],
          estados: ["Locura (Inmune)"]
        }
      }
    },
    {
      id: "SEMI_04",
      titulo: "Derrotar a Rykard, Señor de la Blasfemia",
      descripcion: "Llega a la Mansión del Volcán en Monte Gelmir. Encuentra la Lanza del Dios Serpiente en la sala del jefe y úsala contra el Adorador de Dioses Serpiente y luego contra Rykard.",
      recompensa: "Gran Runa de Rykard, Recuerdo del Señor de la Blasfemia",
      consejos: "La Lanza del Dios Serpiente hace el combate mucho más manejable. Sin ella es extremadamente difícil. Mantén distancia del llanto de fuego.",
      region: "Monte Gelmir — Mansión del Volcán",
      obligatorio: false,
      minimo_requerido: true,
      combate: {
        debilidades: {
          dano: ["Lanza del Dios Serpiente (arma especial en sala del jefe)", "Escarcha (umbral bajo)", "Rayo (20%)"],
          estados: ["Escarcha"]
        },
        resistencias: {
          dano: ["Fuego (80% — casi inmune)", "Magia (40%)", "Sagrado (40%)", "Contundente (35%)"],
          estados: ["Locura (Inmune)"]
        }
      }
    },
    {
      id: "SEMI_05",
      titulo: "Derrotar a Morgott, el Rey Presagio (OBLIGATORIO)",
      descripcion: "El guardián de Leyndell. Aparece también como Margit el Presagio Maldito antes de Castillo de Velo Tormentoso. En Leyndell muestra su verdadera identidad como el Oculto de la Nobleza.",
      recompensa: "Gran Runa de Morgott, Recuerdo de Morgott, Gran Medallón de Rold",
      consejos: "Tiene muchos de los mismos ataques que Margit pero más poderosos y más rápidos. Los espíritus de ceniza son esenciales. El Espectro de la Espada de Sangre de Jellyfish ralentiza sus ataques.",
      region: "Leyndell, Capital Real",
      obligatorio: true,
      minimo_requerido: false,
      combate: {
        debilidades: {
          dano: ["Cortante (+10% de daño extra)", "Físico estándar, contundente, perforante"],
          estados: ["Veneno", "Podredumbre Carmesí", "Sangrado", "Escarcha"]
        },
        resistencias: {
          dano: ["Sagrado (40%)", "Magia (sin resistencia)", "Fuego (sin resistencia)", "Rayo (sin resistencia)"],
          estados: ["Locura (Inmune)"]
        }
      }
    },
    {
      id: "SEMI_06",
      titulo: "Derrotar a Malenia, Cuchilla de Miquella (OPCIONAL)",
      descripcion: "El jefe más difícil del juego. Encuéntrate con ella en lo profundo del Árbol Hierático de Miquella tras descender por toda la estructura. Requiere el Medallón de Haligtree completo.",
      recompensa: "Gran Runa de Malenia, Recuerdo de la Diosa de la Podredumbre, Flor de la Podredumbre",
      consejos: "SE CURA con cada golpe que conecta, incluso si bloqueas. Su Floración de la Diosa en la segunda fase infesta la arena de flores. Las invocaciones son esenciales. Aprende a esquivar su Danza de la Espada.",
      region: "Campo Sacroníveo — Árbol Hierático de Miquella",
      obligatorio: false,
      minimo_requerido: false,
      combate: {
        debilidades: {
          dano: ["Fuego (sin resistencia — muy vulnerable)", "Físico (10% resistencia, relativamente bajo)"],
          estados: ["Sangrado (umbral 421)", "Escarcha (umbral 306)"]
        },
        resistencias: {
          dano: ["Sagrado (40%)", "Magia (20%)", "Rayo (20%)"],
          estados: ["Locura (Inmune)"]
        }
      }
    },
    {
      id: "SEMI_07",
      titulo: "Derrotar a Mohg, Señor de la Sangre (OPCIONAL)",
      descripcion: "Encuéntrate con Mohg en su Palacio de Mohgwyn, accesible mediante el portal de Varre o el portal del Campo Sacroníveo. Es el señor de la magia de sangre.",
      recompensa: "Gran Runa de Mohg, Recuerdo del Señor de la Sangre",
      consejos: "Tiene una fase de bendición de sangre que puede matarte al inicio de su segunda fase. La Unción Pura de Mohg la anula. Las Flechas Sagradas son muy efectivas contra él.",
      region: "Palacio de Mohgwyn",
      obligatorio: false,
      minimo_requerido: false,
      combate: {
        debilidades: {
          dano: ["Físico (10% resistencia, relativamente bajo)"],
          estados: ["Sangrado (umbral bajo 290 — muy susceptible)"]
        },
        resistencias: {
          dano: ["Fuego (80% — casi inmune)", "Magia (40%)", "Rayo (40%)", "Sagrado (40%)"],
          estados: ["Locura (Inmune)"]
        }
      }
    }
  ],

  // ═══════════════════════════════════════
  // OBJETIVOS OPCIONALES POR REGIÓN
  // ═══════════════════════════════════════
  opcionales: {

    // ─── PÁRAMO DE LOS MIEMBROS ───
    paramo_miembros: [
      {
        id: "PARAMO_01",
        titulo: "Margit, el Presagio Maldito",
        descripcion: "Derrota al guardián del Castillo de Velo Tormentoso en el Paso de la Tempestad. Es el primer gran obstáculo del juego.",
        recompensa: "Piedra Marciana (ítem especial), runas",
        consejos: "Usa las Cadenas de Margit (compradas a Patches o a Altus) para inmovilizarlo brevemente. El bastón que lanza en su segunda fase es muy peligroso.",
        region: "Necrolimbo",
        combate: {
          debilidades: {
            dano: ["Cortante (+10% de daño extra)", "Físico estándar, contundente, perforante", "Magia", "Fuego", "Rayo"],
            estados: ["Veneno", "Podredumbre Carmesí", "Sangrado", "Escarcha"]
          },
          resistencias: {
            dano: ["Sagrado (40%)"],
            estados: ["Sueño (Inmune)", "Locura (Inmune)"]
          }
        }
      },
      {
        id: "PARAMO_02",
        titulo: "Dragón Agheel (Lago Agheel)",
        descripcion: "Derrota al dragón que habita en el Lago Agheel al oeste del Necrolimbo.",
        recompensa: "Corazón de Dragón (para incantaciones de dragón), runas",
        consejos: "Mantente bajo su vientre o junto a su cola para evitar el fuego. A caballo es mucho más fácil. Un buen combate de entrenamiento temprano.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_03",
        titulo: "Catacumbas de Paso de la Tempestad",
        descripcion: "Explora estas catacumbas al norte del Necrolimbo y derrota al Jinete Necrológico del Caballo de las Tormentas.",
        recompensa: "Cenizas de espíritu: Jinete Necrológico del Caballo de las Tormentas",
        consejos: "Busca la palanca oculta para abrir el acceso al jefe. El Jinete usa ataques de rayos.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_04",
        titulo: "Catacumbas de la Costa",
        descripcion: "Explora las catacumbas cerca de la costa sur del Necrolimbo y derrota al Jinete Necrológico de la Garra de Dragón.",
        recompensa: "Cenizas de espíritu: Jinete Necrológico de la Garra de Dragón",
        consejos: "Hay trampas de flechas. Busca la palanca detrás de una ilusión (golpea la pared).",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_05",
        titulo: "Cueva Costera (Cueva del Destrero)",
        descripcion: "Explora la Cueva Costera en la costa occidental. Derrota a las dos Crisálidas Demi-Humanas y regresa a la Capilla de la Anticipación.",
        recompensa: "Acceso de vuelta a la Capilla de la Anticipación, Ropas de Marinero, posibilidad de derrotar al Vástago Injertado",
        consejos: "Al final de la cueva hay un portal que te lleva de vuelta al inicio del juego. Ahora puedes derrotar al Vástago Injertado para conseguir la Joya Espiritual de Miembros.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_06",
        titulo: "Cueva Pirática de Murkwater (Encuentro con Patches)",
        descripcion: "Encuentra esta cueva y enfrenta una trampa de Patches (Remiendos). Decide si perdonarlo o matarlo para iniciar su misión.",
        recompensa: "Inicio de la Misión de Remiendos, Monedero de los Tacaños",
        consejos: "Recomendado perdonarlo: se convierte en mercader con objetos únicos. Si lo matas, obtienes su equipo pero pierdes su inventario.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_07",
        titulo: "Cueva Musgosa de Murkwater",
        descripcion: "Explora esta cueva cerca del río Murkwater y derrota a la Crisálida de Miembros guardada por enemigos.",
        recompensa: "Cenizas de espíritu: Crisálida de Miembros",
        consejos: "La ilusión de Margit al final es un truco; no es el jefe real. Busca las paredes falsas.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_08",
        titulo: "Fosa de Groveside",
        descripcion: "Desciende a esta fosa al norte y derrota a la Gran Araña Tierra.",
        recompensa: "Guantes de Suave Algodón, runas",
        consejos: "La araña se ententierra. Observa dónde sale para atacar desde detrás.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_09",
        titulo: "Fosa de Summonwater Village",
        descripcion: "Desciende a la fosa del pueblo sumergido en la zona este del Necrolimbo y derrota al Antiguo Héroe de Zamor.",
        recompensa: "Piedra Marciana Brillante [5], runas",
        consejos: "Este jefe congela el suelo y usa técnicas de budo. Ataca desde su espalda.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_10",
        titulo: "Gruta de las Bestias Guía",
        descripcion: "Encuentra y entra en la Gruta de las Bestias Guía al norte del Necrolimbo y derrota al Piloto de las Bestias Guía.",
        recompensa: "Cenizas de espíritu: Bestia Guía",
        consejos: "El jefe montado puede derribarte. Usa ataques de salto para interrumpir sus cargas.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_11",
        titulo: "Túmulo del Dragón Sellado",
        descripcion: "Explora el Túmulo del Dragón Sellado al norte del Necrolimbo y derrota al Jinete Necrológico del Jinete del Dragón.",
        recompensa: "Cenizas de espíritu: Jinete Necrológico del Jinete del Dragón",
        consejos: "Jefe a distancia con magia. Acércate rápido para interrumpir sus hechizos.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_12",
        titulo: "Ermita del Árbol Tempestoso",
        descripcion: "Sube a la Ermita en la cima de la Colina de las Tormentas y derrota al Avatar del Árbol Áldano que la custodia.",
        recompensa: "Granos de Ofrenda (para mejorar cántaro de gracia), runas",
        consejos: "El Avatar usa ataques de agua sagrada. Ataca sus pies para hacer daño crítico. Vuelve cuando seas más fuerte si te resulta difícil.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_13",
        titulo: "El Árbol que Habla (Boc el Costurero)",
        descripcion: "Escucha el árbol que habla en los Bosques del Necrolimbo y golpéalo. Libera a Boc el Costurero, que está atrapado dentro.",
        recompensa: "Inicio de la Misión de Boc, Agujas de Costurero x10",
        consejos: "Boc reaparece en la Cueva Costera. Su misión completa te permite modificar equipo especial.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_14",
        titulo: "Jinete Necrológico del Puente del Inicio",
        descripcion: "Derrota al intimidante Jinete Necrológico del puente cerca del inicio del juego, que inicialmente aparece de noche.",
        recompensa: "Mandoble de Caballo de Muerte, runas considerables",
        consejos: "Solo aparece de noche. A caballo puedes huir de sus cargas. Intenta derribarlo con ataques pesados.",
        region: "Necrolimbo"
      },
      {
        id: "PARAMO_15",
        titulo: "Catacumbas del Héroe del Necrolimbo",
        descripcion: "Explora las catacumbas y derrota al Doble Jinete Necrológico (dos jinetes simultáneamente).",
        recompensa: "Cenizas de espíritu: Lobo de Sangre",
        consejos: "Concentra el daño en uno primero para reducir la presión. El espacio es limitado.",
        region: "Necrolimbo"
      }
    ],

    // ─── PENÍNSULA LLOROSA ───
    peninsula_llorosa: [
      {
        id: "PENIN_01",
        titulo: "Castillo Morne: Leonino Aberrante",
        descripcion: "Explora el Castillo Morne en el extremo sur de la Península del Llanto y derrota al Leonino Aberrante en el patio interior.",
        recompensa: "Recuerdo de la Aberración Leonina, Runas (7.000)",
        consejos: "Usa la invocación de Miquella (NPC) disponible en la entrada del jefe. El Leonino usa garras y acróbacia.",
        region: "Península del Llanto"
      },
      {
        id: "PENIN_02",
        titulo: "Catacumbas de Impwynn",
        descripcion: "Explora estas catacumbas y derrota al jefe Dúo de Jinetes Necrológicos.",
        recompensa: "Cenizas de espíritu: Momia del Héroe",
        consejos: "Combina enfrentarte a uno mientras el otro está lejos. Palanca oculta detrás de un muro falso.",
        region: "Península del Llanto"
      },
      {
        id: "PENIN_03",
        titulo: "Catacumbas de la Costa Sur",
        descripcion: "Explora y derrota al Aristócrata Enterrado.",
        recompensa: "Cenizas de espíritu: Esqueleto Noble",
        consejos: "El Aristócrata usa magia. Acércate para interrumpirlo.",
        region: "Península del Llanto"
      },
      {
        id: "PENIN_04",
        titulo: "Torre de Morne Moangrave (Irina y Edgar)",
        descripcion: "Encuentra a Irina en el camino y lleva su carta a su padre Edgar en el Castillo Morne. Sigue su trágica historia.",
        recompensa: "Arco de Irina, inicio de una sub-misión de luto",
        consejos: "Esta cadena de eventos tiene un final muy triste. Visita a Edgar después de completar el castillo.",
        region: "Península del Llanto"
      },
      {
        id: "PENIN_05",
        titulo: "Avatar del Árbol Áldano (Puente de la Promesa de Sacrificio)",
        descripcion: "Derrota al enorme Avatar del Árbol Áldano junto al Puente de la Promesa de Sacrificio.",
        recompensa: "Granos de Ofrenda (x3)",
        consejos: "Mismo esquema que el del Necrolimbo. A caballo y atacando sus pies.",
        region: "Península del Llanto"
      },
      {
        id: "PENIN_06",
        titulo: "Fosa de la Guarida del Lince",
        descripcion: "Derrota al Espíritu de Grafito en esta fosa al sur de la Península.",
        recompensa: "Ceniza de Grafito, runas",
        consejos: "Jefe pequeño pero ágil. Usa ataques horizontales para alcanzarlo.",
        region: "Península del Llanto"
      },
      {
        id: "PENIN_07",
        titulo: "Ruinas del Pueblo de los Cuatro Cruceros de Caminos",
        descripcion: "Explora estas ruinas infestadas de no-muertos y encuentra el tesoro oculto en el sótano.",
        recompensa: "Llave del Medallón de Haligtree (mitad izquierda)",
        consejos: "Este ítem es esencial para llegar al Campo Sacroníveo y al Árbol Hierático de Miquella más adelante.",
        region: "Península del Llanto"
      }
    ],

    // ─── LIURNIA DE LOS LAGOS ───
    liurnia_lagos: [
      {
        id: "LIURNIA_01",
        titulo: "Lobo Rojo de Radagón (Academia de Raya Lúcida)",
        descripcion: "Derrota al Lobo Rojo de Radagón en la Sala del Consejo de la Academia, guardián del acceso a Rennala.",
        recompensa: "Recuerdo del Lobo Rojo, runas",
        consejos: "Muy ágil y agresivo. Espera sus pausas para contraatacar. Puede invocar copias de sí mismo.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_02",
        titulo: "Dragón Glintstone de Smarag",
        descripcion: "Derrota al dragón de piedra mágica que custodia el Portal del Sur de Raya Lúcida.",
        recompensa: "Corazón de Dragón, runas",
        consejos: "Guardado por muchos soldados de la Academia. Atácalo al amanecer cuando los guardias son menos.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_03",
        titulo: "Dragón Borealis de los Cielos Congelados",
        descripcion: "Derrota a este dragón que congela el lago en el norte de Liurnia.",
        recompensa: "Corazón de Dragón, runas",
        consejos: "Resiste el frío. Su aliento congela en un radio amplio. Atácalo a caballo.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_04",
        titulo: "Catacumbas de la Carretera de Raya Lúcida",
        descripcion: "Explora y derrota al Jinete Necrológico de las Grandes Hachas.",
        recompensa: "Cenizas de espíritu: Jinete Necrológico de las Grandes Hachas",
        consejos: "Palanca bien escondida. Jefe usa hachas dobles muy peligrosas.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_05",
        titulo: "Catacumbas del Discípulo",
        descripcion: "Explora y derrota al Jefe de la Bestia del Discípulo.",
        recompensa: "Cenizas de espíritu: Bestia del Discípulo",
        consejos: "Patrón de movimiento repetitivo; aprende su cadencia.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_06",
        titulo: "Castillo de Caria (Praetor Rykard Fantasma)",
        descripcion: "Explora el Castillo de Caria, hogar de la familia real de Caria. Derrota al jefe de cada sección: primero la Araña Real, luego a Loretta, Caballera de Caria.",
        recompensa: "Recuerdo de la Caballera Real, acceso a las Torres de las Tres Hermanas (donde está Ranni)",
        consejos: "Las arañas del castillo son muy peligrosas en grupos. Loretta usa magia y una lanza. Aprende a esquivar su Lluvia de Flechas Mágicas.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_07",
        titulo: "Torre de Ranni (Inicio Misión de Ranni)",
        descripcion: "Visita a Ranni la Bruja en la Torre de Ranni (Torres de las Tres Hermanas) y ofrécete a servirla para iniciar su extensa misión.",
        recompensa: "Inicio de la Misión de Ranni (da acceso al Final de la Era de las Estrellas)",
        consejos: "Esta es una de las misiones más largas y complejas del juego. Ofrece el mejor final alternativo.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_08",
        titulo: "Torre del Mago (Puerta de los Maestros)",
        descripcion: "Descifra el acertijo frente a la Torre del Mago: derrota a todos los arañoides de cristal del campo. La puerta se abrirá.",
        recompensa: "Piedra de Bella Llama Azul, Hechizo: Terreno de Estrellas",
        consejos: "Hay tres arañoides pequeños escondidos en el campo. Busca uno en el techo de la torre.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_09",
        titulo: "Raya Lúcida: Tesoros Ocultos de la Academia",
        descripcion: "Explora todos los rincones de la Academia de Raya Lúcida: la biblioteca secreta, el invernadero, los tejados y el sótano.",
        recompensa: "Múltiples hechizos raros, equipo mágico, Llave de la Academia adicional",
        consejos: "Hay un Lobo Rojo de Cristal en el sótano, mucho más peligroso que el principal. El techo tiene jefes únicos.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_10",
        titulo: "Ruinas del Anfiteatro de Liurnia",
        descripcion: "Visita el anfiteatro de Liurnia y derrota al Gladiador Golem que custodia un tesoro.",
        recompensa: "Espada Gruesa Adamantina",
        consejos: "El Golem es enorme pero lento. Evita sus pisadas y ataca sus tobillos.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_11",
        titulo: "Ruinas del Palacio de Liurnia",
        descripcion: "Explora el palacio hundido en el lago y encuentra el Hechizo Oculto de las Ruinas.",
        recompensa: "Hechizo: Ola de Espada Mágica, equipo de la nobleza de Caria",
        consejos: "Zona accesible solo a caballo sobre el agua. Hay enemigos en el fondo del lago.",
        region: "Liurnia de los Lagos"
      },
      {
        id: "LIURNIA_12",
        titulo: "Gran Ascensor Dectus (Medallón Dectus)",
        descripcion: "Reúne los dos fragmentos del Medallón Dectus (uno en el Fuerte Haight del Necrolimbo, otro en el Fuerte Faroth de Caélida) para activar el Gran Ascensor Dectus.",
        recompensa: "Acceso a la Meseta de Altus",
        consejos: "El Fuerte Faroth de Caélida es muy peligroso. Hay dragones. Corre directamente al fuerte.",
        region: "Liurnia de los Lagos"
      }
    ],

    // ─── CAÉLIDA ───
    caelida: [
      {
        id: "CAELIDA_01",
        titulo: "Fortaleza de Redmane",
        descripcion: "Llega al Castillo Redmane, fortaleza en el sur de Caélida, y habla con Jerren o los presentes para iniciar el Festival de Radahn.",
        recompensa: "Acceso al Festival de Radahn, inicio de la batalla contra Radahn",
        consejos: "Antes del festival, el castillo está lleno de enemigos. Durante el festival están todos en paz.",
        region: "Caélida"
      },
      {
        id: "CAELIDA_02",
        titulo: "Dragón Decrepito de la Podredumbre",
        descripcion: "Derrota al enorme Dragon Greyll que vive en los Barrancos del Dragón Greyll, al norte de Caélida.",
        recompensa: "Corazón de Dragón, runas abundantes",
        consejos: "Este dragón tiene la enfermedad scarlet rot (podredumbre escarlata). Evita su aliento a toda costa. Atácalo a caballo.",
        region: "Caélida"
      },
      {
        id: "CAELIDA_03",
        titulo: "Sellia, Ciudad de la Hechicería",
        descripcion: "Rompe los tres sellos que cierran las puertas de la ciudad encendiendo las tres hogueras en los tejados. Accede a los tesoros interiores.",
        recompensa: "Múltiples hechizos únicos, Incantación de los No Muertos, equipo raro",
        consejos: "Las puertas ocultan los mejores tesoros. Busca los arañoides de cristal en los techos para los accesos.",
        region: "Caélida"
      },
      {
        id: "CAELIDA_04",
        titulo: "Catacumbas de los Guerreros de Caélida",
        descripcion: "Explora y derrota al Imitador (Mimicry Tear) en estas catacumbas.",
        recompensa: "Cenizas de espíritu: Imitador (uno de los mejores espíritus del juego)",
        consejos: "El Imitador copia tu personaje exactamente: tu equipo, habilidades y todo. Muy peligroso. Cambia tu equipo antes de entrar.",
        region: "Caélida"
      },
      {
        id: "CAELIDA_05",
        titulo: "Catacumbas del Acantilado de Caélida",
        descripcion: "Explora y derrota al Cementerio de Guerreros Espectral.",
        recompensa: "Cenizas de espíritu: Doble Guerrero",
        consejos: "Palanca en zona con trampas de suelo. Jefe usa ataques cuerpo a cuerpo básicos.",
        region: "Caélida"
      },
      {
        id: "CAELIDA_06",
        titulo: "Torre del Soldado de Caélida",
        descripcion: "Descifra el acertijo de la Torre del Mago: derrota a los tres chivos arañoides que rodean la torre.",
        recompensa: "Hechizo: Chasquido Místico de la Piedra de Ámbar",
        consejos: "Uno de los chivos está en el techo de la torre. Búscalo usando Torrente.",
        region: "Caélida"
      },
      {
        id: "CAELIDA_07",
        titulo: "General Radahn: Nokron el Eterno",
        descripcion: "Al derrotar a Radahn, una estrella cae al sur de Tierra de Sepultura de los Miembros, abriendo el acceso subterráneo a Nokron, Ciudad Eterna. Esto es esencial para la misión de Ranni.",
        recompensa: "Acceso a Nokron, Ciudad Eterna (zona subterránea)",
        consejos: "Busca el cráter donde cayó la estrella al sureste del Necrolimbo. Salta por los acantilados.",
        region: "Caélida"
      },
      {
        id: "CAELIDA_08",
        titulo: "Misión de Millicent (Inicio en Caélida)",
        descripcion: "Habla con Gowry en su cabaña en Caélida. Resuelve su acertijo obteniendo el Pedazo de Unalloyed Gold. Luego lleva el Aguijón a Millicent en el Sanatorio de Sellia.",
        recompensa: "Inicio de la Misión de Millicent, Incantación de Gowry (si resuelves el acertijo)",
        consejos: "El Pedazo de Unalloyed Gold lo suelta un enemigo en las ruinas del sur de Caélida. El Sanatorio de Sellia requiere completar los sellos de la ciudad.",
        region: "Caélida"
      }
    ],

    // ─── MESETA DE ALTUS ───
    meseta_altus: [
      {
        id: "ALTUS_01",
        titulo: "Castillo de la Tormenta Roja (acceso a Mansión del Volcán)",
        descripcion: "Explora el Castillo de la Tormenta Roja en la Meseta de Altus y obtén el acceso a Monte Gelmir.",
        recompensa: "Acceso a Monte Gelmir y a la Mansión del Volcán",
        consejos: "Hay varias rutas hacia Monte Gelmir. La más directa pasa por este castillo.",
        region: "Meseta de Altus"
      },
      {
        id: "ALTUS_02",
        titulo: "Catacumbas del Camino Real de Altus",
        descripcion: "Explora y derrota al Jinete Necrológico del Espada y Escudo.",
        recompensa: "Cenizas de espíritu: Jinete Necrológico del Espada y Escudo",
        consejos: "Palanca bien escondida tras una pared de ilusión. Jefe usa escudo y espada combinados.",
        region: "Meseta de Altus"
      },
      {
        id: "ALTUS_03",
        titulo: "Catacumbas de Falo de Altus",
        descripcion: "Explora y derrota al Avatar del Árbol Áldano Podrido.",
        recompensa: "Granos de Ofrenda (x5), runas",
        consejos: "El Avatar Podrido usa podredumbre escarlata. Resiste la podredumbre con el antídoto o el tónico.",
        region: "Meseta de Altus"
      },
      {
        id: "ALTUS_04",
        titulo: "Goldmask y Corhyn (Meseta de Altus)",
        descripcion: "Encuentra a Corhyn vagando en la Meseta de Altus. Luego encuentra a Goldmask meditando sobre el Puente del Inquisidor. Habla con ambos.",
        recompensa: "Inicio de la misión del Orden Áureo, Incantaciones de Corhyn",
        consejos: "Goldmask está sobre el puente destruido. Habla primero con Corhyn para que te explique la misión.",
        region: "Meseta de Altus"
      },
      {
        id: "ALTUS_05",
        titulo: "Torre de los Altus (Acertijo de la Bruja Dorada)",
        descripcion: "Resuelve el acertijo de la Torre de los Altus: derrota a todos los Chivos Dorantes del campo.",
        recompensa: "Fragmento Dragón de la Escama Áurea, runas",
        consejos: "Hay varios Chivos ocultos en la zona. Explora a fondo el campo alrededor de la torre.",
        region: "Meseta de Altus"
      },
      {
        id: "ALTUS_06",
        titulo: "Árbol de las Garras (Fosa de los Hermanos de la Mirra)",
        descripcion: "Derrota a los dos Jinetes Necrológicos de los Mirros (dúo de hermanos) en esta fosa especial.",
        recompensa: "Cenizas de espíritu: Dúo de los Mirros",
        consejos: "Uno usa arco y otro usa espada. Mantén a ambos en tu campo visual.",
        region: "Meseta de Altus"
      },
      {
        id: "ALTUS_07",
        titulo: "Guardián del Árbol de las Alturas (Avatar del Puente Caído)",
        descripcion: "Derrota al Avatar del Árbol Áldano en el puente destruido al norte de la Meseta de Altus.",
        recompensa: "Granos de Ofrenda (x5)",
        consejos: "Mismo esquema que otros avatares. Ataca sus raíces.",
        region: "Meseta de Altus"
      }
    ],

    // ─── MONTE GELMIR ───
    monte_gelmir: [
      {
        id: "GELMIR_01",
        titulo: "Misión de la Mansión del Volcán",
        descripcion: "Llega a la Mansión del Volcán en Monte Gelmir. Habla con la señora Tanith y acepta convertirte en residente. Completa las tres misiones de asesinato que te encargue.",
        recompensa: "Runa de Rykard (si derrotas a Rykard como parte de la misión), equipo único de la Mansión, acceso a Knight Bernahl",
        consejos: "Las tres misiones te llevan por zonas avanzadas. La última puede ser traicionera con Bernahl.",
        region: "Monte Gelmir"
      },
      {
        id: "GELMIR_02",
        titulo: "Catacumbas del Héroe de Gelmir",
        descripcion: "Explora y derrota al Crematorio Real (Crematorio del Suelo).",
        recompensa: "Cenizas de espíritu: Crematorio del Suelo",
        consejos: "Los crematorios se encienden y explotan. Atácalos cuando están apagados o desde lejos.",
        region: "Monte Gelmir"
      },
      {
        id: "GELMIR_03",
        titulo: "Monte Gelmir: Dragón de la Lava",
        descripcion: "Derrota al Dragón de Lava que reside en el lago de lava cerca del cráter del volcán.",
        recompensa: "Corazón de Dragón, runas",
        consejos: "Terreno extremadamente peligroso. A caballo es esencial. Mueve constantemente para evitar hundirte en lava.",
        region: "Monte Gelmir"
      },
      {
        id: "GELMIR_04",
        titulo: "Torres del Primer Hechicero",
        descripcion: "Explora las torres del Primer Hechicero en las alturas de Gelmir y derrota al Hechicero Autómata.",
        recompensa: "Hechizo: Llamarada Carmesí",
        consejos: "El hechicero tiene un escudo de magia. Usa ataques de fuego para romperlo.",
        region: "Monte Gelmir"
      }
    ],

    // ─── LEYNDELL CAPITAL REAL ───
    leyndell: [
      {
        id: "LEYNDELL_01",
        titulo: "Torres de los Caballeros de Leyndell",
        descripcion: "Explora las torres de los Caballeros Cruciformes en los tejados de Leyndell y derrota a los dos Caballeros Cruciformes.",
        recompensa: "Equipo de los Caballeros de Leyndell, acceso a zonas superiores",
        consejos: "Los Caballeros Cruciformes son sumamente resistentes. Usa magia sagrada o fuego.",
        region: "Leyndell, Capital Real"
      },
      {
        id: "LEYNDELL_02",
        titulo: "Catacumbas de las Vísceras de Leyndell",
        descripcion: "Accede a las catacumbas bajo Leyndell y encuentra al Devorador de Estiércol en su celda. Parte de su misión.",
        recompensa: "Avance en la Misión del Devorador de Estiércol",
        consejos: "El acceso está en las alcantarillas bajo Leyndell. Hay muchos Aberrantes que te atacarán.",
        region: "Leyndell, Capital Real"
      },
      {
        id: "LEYNDELL_03",
        titulo: "Catacumbas de las Raíces Leyndellianas",
        descripcion: "Explora las catacumbas de raíces en las profundidades de Leyndell y derrota al Ulcerado Espíritu del Árbol.",
        recompensa: "Cenizas de espíritu: Espíritu Ulcerado del Árbol, runas",
        consejos: "El Espíritu Ulcerado tiene alto alcance. Mantén distancia y atácalo cuando termina sus embestidas.",
        region: "Leyndell, Capital Real"
      },
      {
        id: "LEYNDELL_04",
        titulo: "Dragón Fortissax (Fondo de Raíz Profunda)",
        descripcion: "Completa la misión de Fía para llegar al Sueño de las Fondo de Raíz Profunda y derrotar al Licosauro Fortissax.",
        recompensa: "Recuerdo del Licosauro Fortissax (para el final de Fía), runas",
        consejos: "Fortissax usa rayos y ataques de agarre. Su Relámpago de Muerte es devastador. Mantente moviendo.",
        region: "Fondo de Raíz Profunda"
      },
      {
        id: "LEYNDELL_05",
        titulo: "Acceso a las Tres Llamas (La Señal Frenética)",
        descripcion: "Para el Final de la Llama Frenética: quítate TODA la armadura y equipo, y accede al acceso secreto bajo las catacumbas de Leyndell para recibir la Señal de los Tres Dedos.",
        recompensa: "Señal de la Llama Frenética (permite el final alternativo)",
        consejos: "Debes estar completamente desnudo para que los Tres Dedos te acepten. Puedes cancelar este final usando la Aguja de Miquella antes del jefe final.",
        region: "Leyndell, Capital Real"
      }
    ],

    // ─── CIMAS DE LOS GIGANTES ───
    cimas_gigantes: [
      {
        id: "GIGANTES_01",
        titulo: "Apóstol del Dragón (Catacumbas de los Gigantes)",
        descripcion: "Explora las Catacumbas de los Gigantes y derrota al Apóstol del Dragón dentro.",
        recompensa: "Cenizas de espíritu: Apóstol del Dragón",
        consejos: "Usa ataques de fuego. El apóstol tiene alto alcance con su cola.",
        region: "Picos de los Gigantes"
      },
      {
        id: "GIGANTES_02",
        titulo: "Catacumbas de la Cima Sacra",
        descripcion: "Explora y derrota al Jinete Necrológico de la Espada de Gran Tamaño.",
        recompensa: "Cenizas de espíritu: Jinete Necrológico de la Espada de Gran Tamaño",
        consejos: "El jinete carga en línea recta. Rueda a los lados para evitarlo.",
        region: "Picos de los Gigantes"
      },
      {
        id: "GIGANTES_03",
        titulo: "Alexander, Guerrero de Hierro (Picos de los Gigantes)",
        descripcion: "Encuentra a Alexander de nuevo en los Picos de los Gigantes. Habla con él para continuar su misión.",
        recompensa: "Avance en la Misión de Alexander",
        consejos: "Alexander aparece varias veces a lo largo del juego. Su misión finaliza en Fárum Azula.",
        region: "Picos de los Gigantes"
      },
      {
        id: "GIGANTES_04",
        titulo: "Misión de Corhyn y Goldmask (Picos de los Gigantes)",
        descripcion: "Encuentra a Corhyn y Goldmask meditando en los Picos de los Gigantes. Habla con ellos y resuelve el enigma del Dios Árdano para avanzar en la misión del Orden Áureo.",
        recompensa: "Avance en el Final del Orden Áureo",
        consejos: "Goldmask está frente al puente de la Fragua. Corhyn te dará el Hechizo de los Árdanos para resolver el acertijo.",
        region: "Picos de los Gigantes"
      },
      {
        id: "GIGANTES_05",
        titulo: "Dragonlord Placidusax (Fárum Azula)",
        descripcion: "Encuentra el área secreta de Fárum Azula y derrota al poderoso Señor Dragón Placidusax, el dios de la era anterior al Árbol Áldano.",
        recompensa: "Recuerdo del Señor Dragón Placidusax (arma especial)",
        consejos: "Acceso: en el área de la cima de Fárum Azula, hay una plataforma donde hay que tumbarse (usa el botón de interactuar). Placidusax tiene dos fases y usa magia temporal. Mantente pegado a él.",
        region: "Fárum Azula en Desmoronamiento"
      }
    ],

    // ─── CAMPO SAGRADO NEVADO Y HALIGTREE ───
    campo_sagrado_haligtree: [
      {
        id: "CAMPO_01",
        titulo: "Acceso al Campo Sacroníveo",
        descripcion: "Reúne los dos fragmentos del Medallón de Haligtree (uno en Aldea de los Albináuricos en Liurnia, otro en los Corrales al inicio del juego) para activar el ascensor oculto en el Gran Ascensor de Rold.",
        recompensa: "Acceso al Campo Sacroníveo",
        consejos: "La mitad del aldea de los Albináuricos requiere hacer rodar la parte superior de un hongo gigante para acceder al área.",
        region: "Campo Sacroníveo"
      },
      {
        id: "CAMPO_02",
        titulo: "Misión de Millicent (Campo Sacroníveo)",
        descripcion: "Encuentra a Millicent en el Campo Sacroníveo. Sigue ayudándola en su viaje hacia el Árbol Hierático de Miquella.",
        recompensa: "Avance en la misión de Millicent",
        consejos: "Es importante haber seguido su misión desde Caélida para que aparezca aquí.",
        region: "Campo Sacroníveo"
      },
      {
        id: "CAMPO_03",
        titulo: "Portal al Palacio de Mohgwyn",
        descripcion: "Encuentra el portal escondido en el Campo Sacroníveo que da acceso al Palacio de Mohgwyn (donde está Mohg).",
        recompensa: "Acceso alternativo al Palacio de Mohgwyn (sin hacer la misión de Varre)",
        consejos: "El portal está en el extremo oeste del Campo Sagrado, cerca del acantilado.",
        region: "Campo Sacroníveo"
      },
      {
        id: "HALI_01",
        titulo: "Árbol Hierático de Miquella: Loretta, Caballera del Haligtree",
        descripcion: "Desciende por el Árbol Hierático de Miquella y derrota a Loretta, Caballera del Haligtree (versión mejorada de la Loretta del Castillo de Caria).",
        recompensa: "Recuerdo de la Caballera del Haligtree, acceso a la Ciudad de Elphael",
        consejos: "Mucho más poderosa que la versión original. Sus flechas mágicas tienen alcance muy alto. Usa un escudo de alto deflexión mágica.",
        region: "Árbol Hierático de Miquella"
      },
      {
        id: "HALI_02",
        titulo: "Elphael, Baluarte del Haligtree",
        descripcion: "Desciende por la ciudadela de Elphael, llena de podredumbre escarlata y enemigos avanzados. Llega hasta Malenia en las profundidades.",
        recompensa: "Acceso a Malenia, Cuchilla de Miquella",
        consejos: "Lleva muchos Frascos de Tónico. La podredumbre se acumula rápido en casi todas las zonas de Elphael.",
        region: "Árbol Hierático de Miquella"
      },
      {
        id: "HALI_03",
        titulo: "Decisión Final de Millicent",
        descripcion: "Tras derrotar a Malenia, encuentra a Millicent con los Cuatro Guerreros Hermanos en Elphael. Elige: ayudar a Millicent (matar a los hermanos) o traicionarla (atacar a Millicent).",
        recompensa: "Si la ayudas: Aguijón de Unalloyed Gold (para la Aguja de Miquella). Si la traicionas: Prótesis de Millicent.",
        consejos: "Ayudar a Millicent es el camino canónico y te da el objeto para cancelar el final de la Llama Frenética.",
        region: "Árbol Hierático de Miquella"
      }
    ],

    // ─── ZONAS SUBTERRÁNEAS ───
    subterraneas: [
      {
        id: "SUBTE_01",
        titulo: "Río Siofra",
        descripcion: "Accede al Río Siofra mediante el pozo de Las Tierras Intermedias. Explora esta vasta zona subterránea y encuentra los tesoros del pueblo de Siofra.",
        recompensa: "Tesoros únicos del mundo subterráneo, inicio del Río Ainsel",
        consejos: "Hay un avatar de árbol especial aquí que requiere encender antorchas del pueblo primero.",
        region: "Río Siofra"
      },
      {
        id: "SUBTE_02",
        titulo: "Nokron, Ciudad Eterna",
        descripcion: "Accede a Nokron tras derrotar a Radahn. Explora la ciudad y derrota al General Radahn... wait, derrota al Jefe Ancestral del Espíritu en el anfiteatro de Nokron.",
        recompensa: "Punzón de Nokron (esencial para misión de Ranni), Centinela Mimic (miniboss con drop de ashes)",
        consejos: "El Jefe Ancestral del Espíritu usa invocaciones. Los espíritus de ceniza son muy útiles aquí.",
        region: "Nokron, Ciudad Eterna"
      },
      {
        id: "SUBTE_03",
        titulo: "Río Ainsel",
        descripcion: "Accede al Río Ainsel desde el Río Siofra o la Torre de Ranni. Encuentra la muñeca pequeña de Ranni y habla con ella.",
        recompensa: "Avance en la Misión de Ranni, Amuleto del Cenizal",
        consejos: "La muñeca de Ranni es pequeña y está en un cofre en un lugar de gracia. Debes llevarla contigo.",
        region: "Río Ainsel"
      },
      {
        id: "SUBTE_04",
        titulo: "Nokstella, Ciudad Eterna",
        descripcion: "Explora la segunda ciudad subterránea de Nokstella, más profunda y peligrosa que Nokron. Derrota al Cazador de la Luna Plata.",
        recompensa: "Amuleto de las Piedras de Luna Plateadas, tesoros únicos",
        consejos: "El Cazador de la Luna es un jefe de campo. Muy agresivo con ataques rápidos.",
        region: "Río Ainsel"
      },
      {
        id: "SUBTE_05",
        titulo: "Lago de la Podredumbre",
        descripcion: "Atraviesa el peligroso Lago de la Podredumbre, completamente bañado en podredumbre escarlata. Avanza hacia la salida.",
        recompensa: "Acceso al Gran Cañón del Lago, acceso a Astel",
        consejos: "Lleva muchos frascos de tónico. Corre en línea recta y minimiza el tiempo en el lago.",
        region: "Lago de la Podredumbre"
      },
      {
        id: "SUBTE_06",
        titulo: "Astel, Nacido del Vacío (Misión de Ranni)",
        descripcion: "Derrota a Astel, Nacido del Vacío, en el Gran Cañón del Lago para completar la parte principal de la misión de Ranni.",
        recompensa: "Recuerdo de Astel, acceso al Gran Elevador Cario (misión Ranni)",
        consejos: "Astel es una enorme criatura cósmica. Ataca su cabeza para críticos. Muévete mucho para evitar sus rayos.",
        region: "Lago de la Podredumbre"
      },
      {
        id: "SUBTE_07",
        titulo: "Fondo de Raíz Profunda",
        descripcion: "Accede a las Fondo de Raíz Profunda bajo Leyndell (desde las catacumbas de las vísceras). Habla con Fía y sigue su misión.",
        recompensa: "Avance en la Misión de Fía, acceso al Sueño de las Profundidades",
        consejos: "Las profundidades tienen muchos Hombres de Agua no-muertos. Son resistentes pero lentos.",
        region: "Fondo de Raíz Profunda"
      },
      {
        id: "SUBTE_08",
        titulo: "Arca de la Noche Eterna (Misión Ranni)",
        descripcion: "Encuentra el Arca de la Noche Eterna en las Fondo de Raíz Profunda. Requiere el Punzón de Nokron para abrirla.",
        recompensa: "Puñal de la Noche de la Espada Negra (esencial para la misión de Ranni)",
        consejos: "El arca está custodiada por un enemigo especial. El Punzón de Nokron la abre.",
        region: "Fondo de Raíz Profunda"
      }
    ],

    // ─── MISIONES DE PERSONAJES NPC ───
    misiones_npc: [
      {
        id: "NPC_01",
        titulo: "Misión Completa de Ranni la Bruja (Final: Era de las Estrellas)",
        pasos: [
          "Hablar con Ranni en la Torre de Ranni (Torres de las Tres Hermanas, Liurnia)",
          "Jurar lealtad a Ranni",
          "Hablar con Blaidd, Iji y Seluvis en las torres cercanas",
          "Derrotar a Radahn para que caiga la estrella y abra Nokron",
          "Obtener el Punzón de Siofra en Nokron",
          "Llevar el Punzón a Ranni",
          "Encontrar el Arca de la Noche Eterna en Fondo de Raíz Profunda",
          "Obtener el Puñal de la Noche dentro del Arca",
          "Llevar el Puñal a Ranni en el Río Ainsel",
          "Derrotar a Astel, Nacido del Vacío",
          "Subir al Gran Ascensor Cario y llegar a la Catedral de Manus Celes",
          "Colocar el Puñal de la Noche en el dedo de Ranni",
          "Obtener el Fragmento de Luna Fría para el final"
        ],
        recompensa: "Fragmento de Luna Fría, Final de la Era de las Estrellas, Ring de Ranni",
        region: "Múltiples (Liurnia → Nokron → Profundidades → Río Ainsel → Catedral Manus Celes)"
      },
      {
        id: "NPC_02",
        titulo: "Misión de Fía, Compañera del Lecho (Final: Era del Crepúsculo)",
        pasos: [
          "Abrazar a Fía en la Mesa Redonda (recibir el Bendición Corruptora)",
          "Hablar con ella repetidamente hasta que mencione una misión",
          "Obtener el Puñal Maldito de Rowa (de D al principio, o buscarlo tú)",
          "Mostrarle el Puñal a Fía",
          "Recibir instrucciones sobre los Cuchillos",
          "Encontrar a D muerto en la Mesa Redonda (Fía lo mató)",
          "Llegar a las Fondo de Raíz Profunda",
          "Hablar con Fía en las Profundidades",
          "Completar misión de la hermana de D si quieres",
          "Derrotar a Lichosaurio Fortissax",
          "Recibir el Amanecer Putrefacto de Fía"
        ],
        recompensa: "Amanecer Putrefacto (para el final), Maravilla del Abrazo de Fía",
        region: "Mesa Redonda → Fondo de Raíz Profunda"
      },
      {
        id: "NPC_03",
        titulo: "Misión del Devorador de Estiércol (Final: Maldición del Estiércol)",
        pasos: [
          "Encontrar al Devorador en la Mesa Redonda",
          "Hablar con él y leer su nota",
          "Encontrar 5 Semillas Pudridas de Prófugo en mazmorras específicas",
          "Dárselas al Devorador en su celda",
          "Seguirle el rastro por Leyndell (varios encuentros)",
          "Encontrarle en las catacumbas bajo Leyndell",
          "Derrotar al Devorador en las catacumbas",
          "Obtener su Espectro para el final"
        ],
        recompensa: "Espectro del Devorador (para el final de la Maldición)",
        region: "Mesa Redonda → Leyndell (catacumbas)"
      },
      {
        id: "NPC_04",
        titulo: "Misión de Goldmask y Corhyn (Final: Orden Áureo)",
        pasos: [
          "Encontrar a Corhyn en la Mesa Redonda",
          "Seguirlo a la Meseta de Altus (aparece en el Camino Real de Altus)",
          "Encontrar a Goldmask meditando en el Puente del Inquisidor",
          "Hablar con Corhyn sobre Goldmask",
          "Resolver el acertijo: usar el Hechizo de los Árdanos en la estatua correcta en la Capilla del Erdtree",
          "Seguirlos a los Picos de los Gigantes",
          "Encontrarlos en el Fuerte de los Picos de los Gigantes",
          "Conseguir la Incantación del Orden Perfecto (de Corhyn en las Cimas)",
          "Usar la incantación frente a Goldmask"
        ],
        recompensa: "Incantación del Orden Perfecto, Final del Orden Áureo",
        region: "Mesa Redonda → Meseta de Altus → Picos de los Gigantes"
      },
      {
        id: "NPC_05",
        titulo: "Misión de la Llama Frenética (Final: Llama Frenética)",
        pasos: [
          "Llegar a Leyndell y bajar a las catacumbas de las vísceras",
          "Encontrar la puerta de las Tres Llamas bajo Leyndell",
          "Quitarse TODA la armadura, armas y equipo",
          "Entrar y recibir la Señal de los Tres Dedos",
          "Opcionalmente: usar la Aguja de Miquella (obtenida tras derrotar a Malenia) para cancelar el final antes del jefe final"
        ],
        recompensa: "Señal de la Llama Frenética, Final de la Llama Frenética",
        region: "Leyndell (catacumbas)"
      },
      {
        id: "NPC_06",
        titulo: "Misión Completa de Millicent",
        pasos: [
          "Hablar con Gowry en Caélida",
          "Encontrar el Pedazo de Unalloyed Gold (suelta un monstruo al sur de Caélida)",
          "Llevarle el Pedazo a Gowry y recibir la Incantación",
          "Llevar el Aguijón de Unalloyed Gold a Millicent en el Sanatorio de Sellia",
          "Hablar con Millicent varias veces",
          "Encontrar a Millicent en las Ruinas del Río de las Tormentas (Meseta de Altus)",
          "Ayudarla como summon invitada contra el Jefe del Puente de la Meseta",
          "Encontrarla en el Campo Sacroníveo",
          "Encontrarla en el Árbol Hierático de Miquella",
          "Decisión final: ayudarla o traicionarla (matar a sus hermanos o atacarla)"
        ],
        recompensa: "Aguijón de Unalloyed Gold (si la ayudas, para cancelar el final de la Llama Frenética después de Malenia)",
        region: "Caélida → Meseta de Altus → Campo Sagrado → Haligtree"
      },
      {
        id: "NPC_07",
        titulo: "Misión de Blaidd",
        pasos: [
          "Escuchar el aullido en el Necrolimbo y hablar con el aullador",
          "Encontrar a Blaidd en la zona del río Murkwater",
          "Hablar con él sobre su misión de buscar a Darriwil",
          "Derrotar a Farrum Azula Darriwil (jefe de fosa en el Necrolimbo)",
          "Hablar con Blaidd de nuevo",
          "Unirse a la misión de Ranni (Blaidd está en su servicio)",
          "Encontrar a Blaidd en Nokron tras derrotar a Radahn",
          "Encontrar su trágico final frente al Castillo de Caria"
        ],
        recompensa: "Armadura de Blaidd, Espada de la Media Noche de Blaidd",
        region: "Necrolimbo → Nokron → Castillo de Caria"
      },
      {
        id: "NPC_08",
        titulo: "Misión de Patches (Remiendos)",
        pasos: [
          "Encontrar a Patches en la Cueva Pirática de Murkwater (trampa del cofre)",
          "Decidir si perdonarlo (recomendado) o matarlo",
          "Si lo perdonas: encontrarlo como mercader en los Corrales al norte del Necrolimbo",
          "Seguir sus encuentros en Liurnia (Cueva Musgosa)",
          "Encontrarlo en Monte Gelmir",
          "Encontrarlo en Elphael (misión de la Mansión del Volcán)"
        ],
        recompensa: "Acceso a su inventario de mercader (objetos únicos), Lazo de Patches, historia cómica",
        region: "Páramo → Liurnia → Monte Gelmir"
      },
      {
        id: "NPC_09",
        titulo: "Misión de Alexander, Guerrero de Hierro",
        pasos: [
          "Encontrarlo atascado en un hoyo en el norte del Necrolimbo. Ayudarle golpeando su olla.",
          "Reencontrarlo en Liurnia (atascado de nuevo en un pantano)",
          "Encontrarlo en el Festival de Radahn",
          "Reencontrarlo al norte de los Picos de los Gigantes (cerca de la fragua)",
          "Encontrar su conclusión final en Fárum Azula: reta a un duelo de honor",
          "Decidir: luchar con él o dejar pasar"
        ],
        recompensa: "Esencia del Guerrero de Hierro (si lo derrotas en el duelo final), historia épica",
        region: "Páramo → Liurnia → Caélida → Picos de los Gigantes → Fárum Azula"
      },
      {
        id: "NPC_10",
        titulo: "Misión de Varre, Rostro Blanquecino",
        pasos: [
          "Hablar con Varre en los Corrales al inicio del juego",
          "Encontrarle en la Iglesia de la Rosa en Liurnia",
          "Hablar con él y recibir la misión de demostrar tu valía",
          "Invadir y derrotar a 3 jugadores en línea (o usar el Dedo de Sangre Blanca tres veces)",
          "Regresar y ser bendecido con el aceite de los infieles",
          "Recibir el Medallón de Mohgwyn",
          "Teletransportarse al Palacio de Mohgwyn"
        ],
        recompensa: "Medallón de Mohgwyn (acceso temprano al Palacio de Mohgwyn), Flor de Varre",
        region: "Páramo → Liurnia → Palacio de Mohgwyn"
      },
      {
        id: "NPC_11",
        titulo: "Misión de Roderika",
        pasos: [
          "Encontrar a Roderika en los Corrales del Necrolimbo",
          "Hablar con ella y encontrar los Fragmentos de Mente Arañosa (en los Corrales)",
          "Llevárselos",
          "Encontrarla en la Mesa Redonda",
          "Hablar con Cristian (el herrador de espíritus)",
          "Convencerle de que entrene a Roderika",
          "Hablar con Roderika hasta que se convierta en Herradora de Espíritu"
        ],
        recompensa: "Segunda herradora de espíritus en la Mesa Redonda, Historia de Roderika",
        region: "Páramo → Mesa Redonda"
      },
      {
        id: "NPC_12",
        titulo: "Misión de Néfeli Loux",
        pasos: [
          "Encontrarla en la Mesa Redonda (sala lateral)",
          "Encontrarla como invocada en el Castillo de Velo Tormentoso",
          "Hablar con ella después de derrotar a Godrick",
          "Hablar con el Señor Fraternales en la Mesa Redonda sobre ella",
          "Darle el Ungüento de Dios o el Fragmento de Shabriri (elige bien: uno la beneficia)",
          "Verla eventualmente como nueva gobernante del Castillo de Velo Tormentoso"
        ],
        recompensa: "Hacha de los Campeones (si le das el objeto correcto), finaliza la historia de Castillo de Velo Tormentoso",
        region: "Mesa Redonda → Castillo de Velo Tormentoso"
      },
      {
        id: "NPC_13",
        titulo: "Misión de Boc el Costurero",
        pasos: [
          "Liberar a Boc del árbol que habla (Bosques del Necrolimbo)",
          "Encontrarle en la Cueva Costera",
          "Hablar con él repetidamente mientras avanza el juego",
          "Encontrarle en la Meseta de Altus (junto al gran árbol)",
          "Darle los Hilos de Sastrería que encuentres",
          "Decidir: darle la Gracia del Sitio Dorado (se mata satisfecho) o el Hechizo de Raya Lúcida (altera su memoria)"
        ],
        recompensa: "Permite personalizar armaduras especiales (quitar peso sin afectar stats)",
        region: "Páramo → Meseta de Altus"
      },
      {
        id: "NPC_14",
        titulo: "Misión de D, Cazador de los Muertos",
        pasos: [
          "Encontrar a D en el Camino de la Sepultura (Necrolimbo)",
          "Hablar con él sobre los no-muertos",
          "Obtener la Bestia Guía y dársela",
          "Seguirle hasta la Mesa Redonda",
          "Encontrar a D muerto en la Mesa Redonda (Fía lo mata)",
          "Opcionalmente: conocer a su hermano gemelo más adelante"
        ],
        recompensa: "Armadura de D, Hechizo de los Muertos",
        region: "Páramo → Mesa Redonda"
      },
      {
        id: "NPC_15",
        titulo: "Misión de Thops",
        pasos: [
          "Encontrar a Thops fuera de la Academia de Raya Lúcida",
          "Darle una Llave de la Academia (necesitas dos: una para entrar y otra para él)",
          "Encontrarlo dentro de la Academia más adelante... en un estado triste",
          "Recoger sus notas y pertenencias"
        ],
        recompensa: "Sombrero de Thops, Libro de Hechizos de Thops (hechizo especial)",
        region: "Liurnia de los Lagos → Academia de Raya Lúcida"
      }
    ]
  },

  // ═══════════════════════════════════════
  // FINALES
  // ═══════════════════════════════════════
  finales: [
    {
      id: "FINAL_01",
      titulo: "Final Predeterminado: Fractura del Anillo Áldano",
      descripcion: "El final más accesible. Tras derrotar a la Bestia Áldana, interactúa con el Anillo Áldano roto. Ascenderás como el nuevo Señor Áldano y reconstruirás el Orden Áureo tal y como era.",
      requisito: "Solo derrotar a la Bestia Áldana. Sin misiones adicionales.",
      dificultad: "Sin requisitos adicionales"
    },
    {
      id: "FINAL_02",
      titulo: "Final de Ranni: Era de las Estrellas",
      descripcion: "El final más elaborado. Tras derrotar a la Bestia Áldana, usa el Fragmento de Luna Fría (obtenido de la misión de Ranni) en el Trono Áldano en lugar de interactuar con el Anillo. Ranni llegará y guiará el mundo hacia un orden divino distante.",
      requisito: "Completar toda la Misión de Ranni (ver NPC_01). Obtener el Fragmento de Luna Fría.",
      dificultad: "Requiere misión muy larga"
    },
    {
      id: "FINAL_03",
      titulo: "Final del Orden Áureo: Mending Rune del Perfecto Orden",
      descripcion: "Tras derrotar a la Bestia Áldana, usa la Runa Restauradora del Orden Perfecto (obtenida de Goldmask) para remendar el Anillo Áldano. El mundo sigue el Orden Áureo pero con sus contradicciones resueltas.",
      requisito: "Completar la misión de Goldmask y Corhyn (ver NPC_04). Obtener la Runa del Perfecto Orden.",
      dificultad: "Requiere misión de mediana longitud"
    },
    {
      id: "FINAL_04",
      titulo: "Final de Fía: Era del Crepúsculo (Mending Rune de la Muerte)",
      descripcion: "Tras derrotar a la Bestia Áldana, usa la Runa Restauradora de la Muerte (Amanecer Putrefacto de Fía) para remendar el Anillo. El ciclo natural de la muerte regresa a Las Tierras Intermedias.",
      requisito: "Completar la misión de Fía (ver NPC_02). Obtener el Amanecer Putrefacto.",
      dificultad: "Requiere misión mediana-larga"
    },
    {
      id: "FINAL_05",
      titulo: "Final del Devorador: Maldición del Estiércol",
      descripcion: "Tras derrotar a la Bestia Áldana, usa la Runa Restauradora de la Maldición del Estiércol para maldecir a toda la humanidad con la marca del Devorador. El final más oscuro.",
      requisito: "Completar la misión del Devorador de Estiércol (ver NPC_03). Obtener la Runa de la Maldición.",
      dificultad: "Requiere misión mediana"
    },
    {
      id: "FINAL_06",
      titulo: "Final de la Llama Frenética: El Señor de la Llama Frenética",
      descripcion: "Haber recibido la Señal de los Tres Dedos y no haber completado el final de Ranni. Tras derrotar a la Bestia Áldana, tu personaje quema el Árbol Áldano con la Llama Frenética. Melina —si sobrevivió— jura venganza.",
      requisito: "Recibir la Señal de los Tres Dedos (quítate todo el equipo y entra en el sótano bajo Leyndell). No haber usado la Aguja de Miquella para cancelarla.",
      dificultad: "Requiere pasos específicos (quitarte todo el equipo)"
    }
  ]
};

// Función helper para obtener todos los objetivos planos
function getTodosLosObjetivos() {
  const todos = [];
  todos.push(...OBJETIVOS.principales);
  todos.push(...OBJETIVOS.semidioses);
  Object.values(OBJETIVOS.opcionales).forEach(region => {
    if (Array.isArray(region)) todos.push(...region);
  });
  todos.push(...OBJETIVOS.finales);
  return todos;
}
