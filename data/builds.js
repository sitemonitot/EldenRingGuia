// Guías de builds en español castellano
const BUILDS = [
  {
    id: "BUILD_01",
    nombre: "Paladín Sagrado",
    descripcion: "Build centrada en Fe y Fuerza. Usa armas sagradas, incantaciones curativas y ofensivas. Alta resistencia y daño sagrado.",
    dificultad: "Principiante",
    estilo: "Combate cuerpo a cuerpo con apoyo mágico",
    stats_objetivo: {
      nivel: 150,
      vigor: 50,
      mente: 25,
      resistencia: 30,
      fuerza: 50,
      destreza: 12,
      inteligencia: 9,
      fe: 60,
      arcana: 9
    },
    armas_principales: [
      {
        nombre: "Espada Sagrada de la Orden",
        ubicacion: "Crafted con los recuerdos de ciertos jefes sagrados",
        notas: "Alta escalado en Fe. Skill de Incantación de Ola Sagrada."
      },
      {
        nombre: "Escudo de la Sagrada Marika",
        ubicacion: "Zona avanzada de Leyndell",
        notas: "Altísimo deflexión sagrado. Esencial para la build."
      },
      {
        nombre: "Hacha de los Caballeros Sagrados",
        ubicacion: "Caída de caballeros sagrados en Leyndell",
        notas: "Alternativa para más daño físico."
      }
    ],
    armadura: {
      conjunto: "Armadura del Caballero Sagrado",
      alternativas: ["Armadura de los Caminantes Dorados", "Equipo de Confesor (inicio)"]
    },
    talismanes: [
      "Escapulario del Inquisidor Sagrado (aumenta daño sagrado)",
      "Gran Amuleto de Escudo (aumento de bloqueo)",
      "Talismán del Árbol Áldano Sagrado",
      "Talismán del Vigor Sagrado"
    ],
    incantaciones_recomendadas: [
      "Tormenta de Espadas Sagradas",
      "Fuego de Marika",
      "Ola de Fuego Áldano",
      "Gran Oleada de la Bestia Áldana",
      "Gran Curación",
      "Escudo de Luz Dorada"
    ],
    guia_nivel: [
      { nivel: "1-30", descripcion: "Sube Fe y Vigor. Usa el Bastón Sagrado de inicio." },
      { nivel: "30-60", descripcion: "Consigue armas con escalado en Fe. Sube Fuerza para equipo pesado." },
      { nivel: "60-100", descripcion: "Maximiza Fe a 60. Busca los mejores catalizadores sagrados." },
      { nivel: "100-150", descripcion: "Refina talismanes y armadura. Sube Vigor a 50." }
    ],
    puntos_fuertes: ["Muy versátil", "Curación propia", "Alto daño contra no-muertos y demonios", "Buena defensa"],
    puntos_debiles: ["Maná limitado al principio", "Lento contra jefes ágiles", "Alto consumo de FP en incantaciones"]
  },

  {
    id: "BUILD_02",
    nombre: "Hechicero de Cristal",
    descripcion: "Build de Inteligencia pura. Máximo daño mágico a distancia. Una de las builds más poderosas pero requiere conocer los patrones de los jefes.",
    dificultad: "Intermedio",
    estilo: "Combate a distancia, daño ráfaga",
    stats_objetivo: {
      nivel: 150,
      vigor: 40,
      mente: 40,
      resistencia: 15,
      fuerza: 8,
      destreza: 12,
      inteligencia: 80,
      fe: 7,
      arcana: 9
    },
    armas_principales: [
      {
        nombre: "Bastón de los Astros (Bastón de Raya Lúcida)",
        ubicacion: "Academia de Raya Lúcida — zona del laboratorio",
        notas: "El mejor bastón del juego en Inteligencia alta. Pasiva de daño mágico."
      },
      {
        nombre: "Espada de Rueda de la Luna",
        ubicacion: "Intercambio del Recuerdo de Rennala",
        notas: "Arma cuerpo a cuerpo de respaldo con alto escalado en Inteligencia."
      }
    ],
    armadura: {
      conjunto: "Túnica del Mago de Raya Lúcida",
      alternativas: ["Túnica del Hechicero Oscuro", "Equipo ligero de cualquier tipo (para movilidad)"]
    },
    talismanes: [
      "Colgante de la Piedra Mágica (aumenta hechizos de conjuro de cristal)",
      "Emblema de Azur (aumenta potencia de hechizos a costa de FP)",
      "Pergamino del Erudito (más slots de hechizo)",
      "Talismán del Vigor Mágico"
    ],
    hechizos_recomendados: [
      "Rocío de Luna (hechizo de área masivo)",
      "Cometazul Azur (máximo daño de hechizo del juego)",
      "Gran Estela de Cristal",
      "Cuerda de Cristal",
      "Rueda de Cometa",
      "Lluvia de Cristal",
      "Armadura de Roca"
    ],
    guia_nivel: [
      { nivel: "1-40", descripcion: "Sube Inteligencia rápidamente. Usa Hechizos de Bola de Piedra." },
      { nivel: "40-70", descripcion: "Consigue el Bastón de los Astros. Aprende Rocío de Luna." },
      { nivel: "70-120", descripcion: "Sube Inteligencia a 80. Consigue Cometazul Azur." },
      { nivel: "120-150", descripcion: "Maximiza Mente y Vigor. Perfecciona rotación de hechizos." }
    ],
    puntos_fuertes: ["Daño masivo", "Seguridad en combate a distancia", "Muy efectivo contra jefes grandes"],
    puntos_debiles: ["Vulnerable en cuerpo a cuerpo", "Necesita mucho FP", "Difícil contra jefes ágiles o que se teletransportan"]
  },

  {
    id: "BUILD_03",
    nombre: "Nigromante de Sangre",
    descripcion: "Build de Arcana y Destreza. Usa la magia de sangre para infligir hemorragia masiva. Una de las builds más poderosas del juego.",
    dificultad: "Principiante-Intermedio",
    estilo: "Combate ágil cuerpo a cuerpo, hemorragia",
    stats_objetivo: {
      nivel: 150,
      vigor: 45,
      mente: 20,
      resistencia: 20,
      fuerza: 12,
      destreza: 50,
      inteligencia: 9,
      fe: 9,
      arcana: 55
    },
    armas_principales: [
      {
        nombre: "Río de Sangre",
        ubicacion: "Forjado: Armamento + Piedra Elden + Ceniza de Sangre Fría de la Sangre",
        notas: "La mejor arma de hemorragia. Skill: Filo de la Sangre (dispara proyectiles de sangre)."
      },
      {
        nombre: "Katana del Mohg (Nagakiba de Sangre)",
        ubicacion: "Infusión: Nagakiba + infusión de sangre",
        notas: "Alternativa accesible. Alta hemorragia acumulada."
      }
    ],
    armadura: {
      conjunto: "Equipo de los Caballeros Blancos de Mohg",
      alternativas: ["Equipo ligero para movilidad máxima", "Armadura del Vagabundo (inicio)"]
    },
    talismanes: [
      "Lord de la Sangre Talismán (aumenta daño tras hemorragia)",
      "Garra de Miquella (aumenta daño de armas de sangre)",
      "Anillo de la Hemorragia Blanca",
      "Talismán de Carga de Envenamiento (para builds mixtas)"
    ],
    incantaciones_sangre: [
      "Flecha de Sangre Fantasmal (dispara proyectiles de sangre)",
      "Ola Carmesí (gran incantación de sangre)",
      "Cuchillo de Sangre Voladora",
      "Explosión de Sangre"
    ],
    guia_nivel: [
      { nivel: "1-30", descripcion: "Sube Destreza. Usa katana básica. Busca armamento con hemorragia natural." },
      { nivel: "30-60", descripcion: "Sube Arcana a 30+. Consigue infusiones de sangre." },
      { nivel: "60-100", descripcion: "Consigue el Río de Sangre. Maximiza Arcana a 55." },
      { nivel: "100-150", descripcion: "Equilibra Vigor y Destreza. Consigue los mejores talismanes de hemorragia." }
    ],
    puntos_fuertes: ["Daño masivo con hemorragia", "Muy efectivo contra casi todos los jefes", "Ágil y rápido", "Fácil de jugar"],
    puntos_debiles: ["Ineficaz contra enemigos inmunes a hemorragia (como los no-muertos)", "Poca defensa", "Dependiente del acúmulo de hemorragia"]
  },

  {
    id: "BUILD_04",
    nombre: "Caballero de Fuerza Pura",
    descripcion: "Build clásica de Fuerza. Armas enormes de dos manos, golpes demoledores, alta vida. La build más directa del juego.",
    dificultad: "Principiante",
    estilo: "Combate pesado cuerpo a cuerpo",
    stats_objetivo: {
      nivel: 150,
      vigor: 60,
      mente: 15,
      resistencia: 40,
      fuerza: 80,
      destreza: 14,
      inteligencia: 9,
      fe: 9,
      arcana: 9
    },
    armas_principales: [
      {
        nombre: "Gran Hacha de los Gigantes",
        ubicacion: "Intercambio del Recuerdo del Gigante de Fuego",
        notas: "Daño físico masivo. Skill de área que siembra el caos."
      },
      {
        nombre: "Puño de Marika (Martillo Grande)",
        ubicacion: "Leyndell, Capital de Cenizas",
        notas: "El arma con mayor daño físico por golpe del juego."
      },
      {
        nombre: "Aullado de los Lobos Grises",
        ubicacion: "Forja de ciertos jefes de lobos",
        notas: "Arma de Fuerza/Destreza alternativa con buen alcance."
      }
    ],
    armadura: {
      conjunto: "Armadura de los Caballeros Áldanos (equipamiento pesado)",
      alternativas: ["Armadura del General de Godfrey", "Cualquier equipo pesado con alta defensa"]
    },
    talismanes: [
      "Talismán del Árbol Áldano Mayor (mayor barra de vida)",
      "Talismán de Fuerza del Guerrero",
      "Talismán del Escudo de Piedra (más postura/poise)",
      "Colgante de Rasgan (más daño al embestir postura)"
    ],
    guia_nivel: [
      { nivel: "1-40", descripcion: "Sube Fuerza y Vigor. Usa cualquier arma de Fuerza grande. Empuña a dos manos para 50% más de Fuerza efectiva." },
      { nivel: "40-80", descripcion: "Busca armas con alto escalado en Fuerza. Sube Resistencia para llevar armadura pesada." },
      { nivel: "80-120", descripcion: "Maximiza Fuerza a 80. Consigue las mejores armas de Fuerza." },
      { nivel: "120-150", descripcion: "Sube Vigor a 60. Perfecciona los talismanes de Postura." }
    ],
    puntos_fuertes: ["Daño devastador por golpe", "Alta vida y defensa", "Rompe la postura de casi todo", "Simple de jugar"],
    puntos_debiles: ["Lento", "Vulnerable durante animaciones largas", "Difícil contra jefes muy rápidos"]
  },

  {
    id: "BUILD_05",
    nombre: "Heraldo de la Llama Frenética",
    descripcion: "Build de Fe y Arcana. Usa las incantaciones de la Llama Frenética, el fuego más poderoso del juego. Daño masivo pero muy difícil de dominar.",
    dificultad: "Avanzado",
    estilo: "Cuerpo a cuerpo mágico con explosiones de fuego",
    stats_objetivo: {
      nivel: 150,
      vigor: 45,
      mente: 30,
      resistencia: 20,
      fuerza: 15,
      destreza: 15,
      inteligencia: 15,
      fe: 45,
      arcana: 45
    },
    armas_principales: [
      {
        nombre: "Antorcha de los Tres Dedos",
        ubicacion: "Inicio con clase Heraldo o comprado más adelante",
        notas: "El catalizador de Fe de la Llama Frenética."
      },
      {
        nombre: "Katana de la Llama Oscura",
        ubicacion: "Enemigos del Lago de la Podredumbre o zonas de la Llama Frenética",
        notas: "Arma cuerpo a cuerpo que inflige daño de Llama Frenética."
      }
    ],
    armadura: {
      conjunto: "Vestiduras de los Tres Dedos",
      alternativas: ["Cualquier equipo ligero para movilidad"]
    },
    talismanes: [
      "Talismán de la Llama Frenética (aumenta daño frenético)",
      "Colgante del Fuego Maldito",
      "Sello del Ojo de la Llama",
      "Talismán del Arcano Mayor"
    ],
    incantaciones_recomendadas: [
      "Llama de la Agonía (incantación de área devastadora)",
      "Ofrenda a los Tres Dedos",
      "Ola de la Llama Frenética",
      "Adiós a las Llamas (auto-explosión poderosa)",
      "Crepitar Carmesí",
      "Boca Ardiente"
    ],
    guia_nivel: [
      { nivel: "1-40", descripcion: "Sube Fe y Arcana igualmente. Usa incantaciones de fuego básicas." },
      { nivel: "40-80", descripcion: "Obtén la Señal de los Tres Dedos para desbloquear incantaciones de Llama Frenética." },
      { nivel: "80-120", descripcion: "Maximiza Fe y Arcana a 45 cada uno. Consigue todas las incantaciones de Llama Frenética." },
      { nivel: "120-150", descripcion: "Perfecciona talismanes y aprende los patrones para usar Adiós a las Llamas de forma efectiva." }
    ],
    puntos_fuertes: ["Daño masivo de área", "Muy único y espectacular", "Incantaciones inusuales que sorprenden"],
    puntos_debiles: ["Difícil de ejecutar", "Requiere obtener la Señal de los Tres Dedos", "Algunas incantaciones son muy arriesgadas"]
  },

  {
    id: "BUILD_06",
    nombre: "Arquero Sombra",
    descripcion: "Build de Destreza pura centrada en arcos. Alta movilidad, daño a distancia, combate sigilo. Ideal para jugadores pacientes.",
    dificultad: "Intermedio",
    estilo: "Combate a distancia, sigilo",
    stats_objetivo: {
      nivel: 150,
      vigor: 40,
      mente: 20,
      resistencia: 20,
      fuerza: 14,
      destreza: 80,
      inteligencia: 9,
      fe: 9,
      arcana: 20
    },
    armas_principales: [
      {
        nombre: "Arco de la Luna de Caria",
        ubicacion: "Ruinas del Castillo de Caria o intercambio con mercader",
        notas: "El mejor arco del juego. Alto escalado en Destreza."
      },
      {
        nombre: "Hacha de la Guardia Montada",
        ubicacion: "Caída de guardias montados en varias zonas",
        notas: "Arma cuerpo a cuerpo de respaldo ligera y ágil."
      }
    ],
    armadura: {
      conjunto: "Equipo de los Cazadores de la Luna",
      alternativas: ["Cualquier equipo ligero", "Capa del Vagabundo"]
    },
    talismanes: [
      "Talismán del Arquero (aumenta daño de arco)",
      "Colgante de la Flecha Sagrada",
      "Anillo de la Destreza del Cazador",
      "Talismán del Movimiento Rápido"
    ],
    flechas_recomendadas: [
      "Flechas de Fuego (gran daño adicional)",
      "Flechas de Veneno (acumulan veneno)",
      "Flechas Sagradas (efectivas contra no-muertos y demonios)",
      "Flechas de Hemorragia (acumulan hemorragia)",
      "Flechas de Precisión (máximo daño en tiro preciso)"
    ],
    guia_nivel: [
      { nivel: "1-40", descripcion: "Sube Destreza. Usa cualquier arco. Aprende a usar el aiming manual." },
      { nivel: "40-80", descripcion: "Consigue el Arco de la Luna. Sube Destreza a 60." },
      { nivel: "80-120", descripcion: "Maximiza Destreza a 80. Aprende las flechas especiales." },
      { nivel: "120-150", descripcion: "Perfecciona para builds combinadas con magia de veneno o hemorragia." }
    ],
    puntos_fuertes: ["Seguridad total (atacas desde lejos)", "Efectivo en sigilo", "Muy útil contra jefes grandes"],
    puntos_debiles: ["Daño individual bajo comparado con otras builds", "Los arcos tienen munición limitada", "Ineficaz en espacios pequeños"]
  },

  {
    id: "BUILD_07",
    nombre: "Caballero del Dragón (Arcana)",
    descripcion: "Build de Arcana con escalado en incantaciones dracónicas. Usa poderes de dragón obtenidos con Corazones de Dragón. Visualmente impactante.",
    dificultad: "Intermedio-Avanzado",
    estilo: "Cuerpo a cuerpo con magias dracónicas de área",
    stats_objetivo: {
      nivel: 150,
      vigor: 45,
      mente: 25,
      resistencia: 25,
      fuerza: 30,
      destreza: 14,
      inteligencia: 14,
      fe: 14,
      arcana: 60
    },
    armas_principales: [
      {
        nombre: "Sello del Dragón de Piedra",
        ubicacion: "Zona del Río Siofra (subterráneo)",
        notas: "El mejor catalizador para incantaciones dracónicas. Escala con Arcana."
      },
      {
        nombre: "Colmillo del Dragón",
        ubicacion: "Zona del Río Siofra",
        notas: "Arma que inflige daño de podredumbre y veneno. Escalado en Arcana."
      }
    ],
    armadura: {
      conjunto: "Armadura de los Caballeros del Dragón",
      alternativas: ["Escamas del Dragón (si las encuentras)", "Armadura pesada estándar"]
    },
    talismanes: [
      "Talismán de la Comunión del Dragón (más incantaciones dracónicas)",
      "Garra de la Comunión del Dragón",
      "Talismán de Arcana Mayor",
      "Colgante del Escupefuego"
    ],
    incantaciones_dracon: [
      "Escupida de Fuego del Dragón (respira fuego como un dragón)",
      "Aliento de Rayo del Dragón",
      "Aliento Helado del Dragón",
      "Escupida Carmesí (podredumbre escarlata)",
      "Giro del Dragón Tornado",
      "Gran Escupida de Fuego del Dragón"
    ],
    donde_obtener_incantaciones: "En el Altar de los Murmullos del Dragón en el Río Siofra (usa los Corazones de Dragón que obtienes derrotando dragones).",
    guia_nivel: [
      { nivel: "1-40", descripcion: "Sube Arcana. Usa incantaciones básicas. Derrota dragones para obtener Corazones." },
      { nivel: "40-80", descripcion: "Consigue el Sello del Dragón de Piedra. Aprende las incantaciones básicas de dragón." },
      { nivel: "80-120", descripcion: "Maximiza Arcana a 60. Aprende las incantaciones más poderosas." },
      { nivel: "120-150", descripcion: "Equilibra resistencias. Consigue el mejor equipo de dragón." }
    ],
    puntos_fuertes: ["Muy espectacular visualmente", "Gran variedad de elementos (fuego, rayo, hielo, podredumbre)", "Efectivo en área"],
    puntos_debiles: ["Los Corazones de Dragón son recursos limitados", "Algunas incantaciones son lentas", "Requiere mucho FP"]
  },

  {
    id: "BUILD_08",
    nombre: "Heraldo de la Muerte (Inteligencia + Fe)",
    descripcion: "Build mixta de Inteligencia y Fe usando la Magia de Muerte y los hechizos de los Dedos. Muy única y con incantaciones exclusivas.",
    dificultad: "Avanzado",
    estilo: "Distancia media, daño de muerte mágico",
    stats_objetivo: {
      nivel: 150,
      vigor: 40,
      mente: 35,
      resistencia: 15,
      fuerza: 10,
      destreza: 12,
      inteligencia: 45,
      fe: 45,
      arcana: 12
    },
    armas_principales: [
      {
        nombre: "Sello de la Espada Negra",
        ubicacion: "Intercambio del Recuerdo de la Hoja Negra (Maliketh)",
        notas: "El mejor catalizador para incantaciones de la Hoja Negra y muerte."
      },
      {
        nombre: "Espada de la Hoja Negra",
        ubicacion: "Intercambio del Recuerdo de la Hoja Negra",
        notas: "Reducde la barra de salud máxima del enemigo igual que Maliketh."
      }
    ],
    armadura: {
      conjunto: "Ropas de la Hoja Negra",
      alternativas: ["Equipo de los Profetas", "Cualquier equipo ligero"]
    },
    talismanes: [
      "Talismán de la Muerte (aumenta daño de muerte)",
      "Talismán de la Espada Negra",
      "Emblema de la Fe Oscura",
      "Talismán del Mago"
    ],
    incantaciones_muerte: [
      "Hoja Negra (la incantación de Maliketh)",
      "Llama de la Muerte",
      "Ola Fantasmal de los Dedos",
      "Canto de la Muerte de los Dedos",
      "Destello de la Muerte"
    ],
    guia_nivel: [
      { nivel: "1-40", descripcion: "Sube Inteligencia y Fe igualmente. Usa incantaciones básicas de ambas escuelas." },
      { nivel: "40-80", descripcion: "Busca el catalizador de doble escalado. Consigue hechizos de muerte." },
      { nivel: "80-120", descripcion: "Equilibra Inteligencia y Fe en 45. Consigue el Sello de la Espada Negra." },
      { nivel: "120-150", descripcion: "Maximiza Mente. Aprende la rotación óptima de hechizos de muerte." }
    ],
    puntos_fuertes: ["Build muy única y de rol", "Acceso a incantaciones exclusivas", "Buen daño con reducción de salud máxima"],
    puntos_debiles: ["Difícil de conseguir todos los materiales", "Requiere terminar el juego para el Sello", "Menor daño bruto que builds especializadas"]
  }
];
