// Builds adicionales (se añaden al array BUILDS)
(function () {
  if (typeof BUILDS === "undefined") return;

  var buildsExtra = [
    {
      id: "BUILD_09",
      nombre: "Espadachín de Destreza Pura",
      descripcion: "Build especializada en Destreza con armas rápidas. Altísima cadencia de golpes, movilidad máxima y posibilidad de acumular hemorragia con las armas correctas.",
      dificultad: "Principiante",
      estilo: "Combate ágil, contragolpes, velocidad",
      stats_objetivo: {
        nivel: 150,
        vigor: 45,
        mente: 15,
        resistencia: 25,
        fuerza: 12,
        destreza: 80,
        inteligencia: 9,
        fe: 9,
        arcana: 9
      },
      armas_principales: [
        {
          nombre: "Nagakiba",
          ubicacion: "Yura el Cazador de Sangre — o en su campamento tras ciertos eventos",
          notas: "La katana más larga del juego. Escalado A en Destreza. Acumula hemorragia."
        },
        {
          nombre: "Espada Curva de Godskin",
          ubicacion: "Caída de Godskin Apostle en Spiritcaller's Cave o Farum Azula",
          notas: "Excelente DPS con alta Destreza. Skill de remolino muy útil."
        },
        {
          nombre: "Espadas Gemelas de Malenia",
          ubicacion: "Intercambio del Recuerdo de Malenia",
          notas: "Dos armas únicas con skill de danza de 1000 cortes. Destreza pura."
        }
      ],
      armadura: {
        conjunto: "Armadura de los Cazadores de la Noche",
        alternativas: ["Equipo del Vagabundo", "Equipo ligero para máxima movilidad"]
      },
      talismanes: [
        "Piedra Afilada del Cuchillero (aumenta daño de armas de destreza)",
        "Colgante de la Danza Sangrienta (más daño a hemorragia)",
        "Talismán de Ataque Rápido (acelera las animaciones)",
        "Emblema de la Destreza del Cazador"
      ],
      guia_nivel: [
        { nivel: "1-30", descripcion: "Sube Destreza a 40. Usa cualquier arma rápida (espada corta, daga, katana básica)." },
        { nivel: "30-60", descripcion: "Consigue la Nagakiba o una buena katana. Sube Destreza a 60 y Vigor a 40." },
        { nivel: "60-100", descripcion: "Maximiza Destreza a 80. Aprende el sistema de contragolpes." },
        { nivel: "100-150", descripcion: "Perfecciona la Resistencia y el equipo. Busca los mejores talismanes de Destreza." }
      ],
      puntos_fuertes: ["Máxima velocidad de ataque", "Muy seguro con buenos reflejos", "Daño consistente", "Fácil de entender"],
      puntos_debiles: ["Daño por golpe bajo", "Dependiente de acertar muchos ataques", "Puede ser lento contra jefes muy agresivos"]
    },

    {
      id: "BUILD_10",
      nombre: "Mago de Fuego (Piromante)",
      descripcion: "Build híbrida de Fe e Inteligencia especializada en magia de fuego. Usa tanto hechizos de fuego como incantaciones llameantes para un daño de área devastador.",
      dificultad: "Intermedio",
      estilo: "Combate a media distancia, daño de área con fuego",
      stats_objetivo: {
        nivel: 150,
        vigor: 40,
        mente: 35,
        resistencia: 15,
        fuerza: 10,
        destreza: 12,
        inteligencia: 40,
        fe: 40,
        arcana: 12
      },
      armas_principales: [
        {
          nombre: "Bastón de la Bruja del Volcán",
          ubicacion: "Zona del Monte Gelmir / Palácio de Rykard",
          notas: "Escala con Inteligencia Y Fe. El mejor catalizador para magia de fuego mixta."
        },
        {
          nombre: "Sello de los Profetas (Seal of Prophets)",
          ubicacion: "Clase Profeta de inicio o comprado a comerciantes",
          notas: "Para lanzar incantaciones de fuego. Alternativa: Sello Áldano."
        }
      ],
      armadura: {
        conjunto: "Ropas de Bruja del Volcán",
        alternativas: ["Equipo de Confesor", "Cualquier equipo de peso medio"]
      },
      talismanes: [
        "Colgante del Fuego Ardiente (más daño de fuego)",
        "Emblema de Azur (para hechizos de fuego de máximo daño)",
        "Talismán del Vigor de Fuego",
        "Colgante de la Quema Llameante"
      ],
      hechizos_recomendados: [
        "Cañón de Fuego (gran bola de fuego lenta)",
        "Tormenta de Fuego",
        "Bola de Fuego Grande",
        "Explosión de Piedra de Fuego"
      ],
      incantaciones_recomendadas: [
        "Ola de Fuego Áldano (área masiva de fuego)",
        "Gran Ola de Fuego",
        "Llama de los Ancestros",
        "Fuego Carmesí Áldano",
        "Curación (respaldo)"
      ],
      guia_nivel: [
        { nivel: "1-40", descripcion: "Sube Inteligencia y Fe igualmente. Usa bolas de fuego básicas." },
        { nivel: "40-70", descripcion: "Consigue el Bastón de la Bruja del Volcán. Aprende la sinergia entre hechizos e incantaciones de fuego." },
        { nivel: "70-120", descripcion: "Equilibra Inteligencia y Fe a 40 cada uno. Maximiza Mente para más FP." },
        { nivel: "120-150", descripcion: "Perfecciona los talismanes de fuego. Aprende a rotar entre hechizos e incantaciones." }
      ],
      puntos_fuertes: ["Gran daño de área", "Muy versátil", "Acceso a dos escuelas de magia de fuego", "Autohealing posible"],
      puntos_debiles: ["Ineficaz contra enemigos resistentes al fuego", "Requiere mucho FP", "Build de inversión alta"]
    },

    {
      id: "BUILD_11",
      nombre: "Espadachín Mágico (Int + Des)",
      descripcion: "Build híbrida de Inteligencia y Destreza. Usa armas con infusión mágica y hechizos de respaldo. Gran flexibilidad entre el cuerpo a cuerpo y el combate mágico.",
      dificultad: "Intermedio",
      estilo: "Cuerpo a cuerpo mágico, versatilidad",
      stats_objetivo: {
        nivel: 150,
        vigor: 40,
        mente: 30,
        resistencia: 20,
        fuerza: 12,
        destreza: 50,
        inteligencia: 60,
        fe: 9,
        arcana: 9
      },
      armas_principales: [
        {
          nombre: "Espada de Rueda de la Luna",
          ubicacion: "Intercambio del Recuerdo de Rennala",
          notas: "La mejor arma híbrida Int/Des del juego. Skill de luna única."
        },
        {
          nombre: "Cimitarra de los Meteoros de Caria",
          ubicacion: "Zona del Castillo de Caria — Liurnia",
          notas: "Arma rápida con escalado en Inteligencia. Altísimo DPS."
        },
        {
          nombre: "Bastón Oscuro de Raya Lúcida (respaldo)",
          ubicacion: "Academia de Raya Lúcida",
          notas: "Para lanzar hechizos de respaldo entre combos de cuerpo a cuerpo."
        }
      ],
      armadura: {
        conjunto: "Equipo del Maestro del Crisol",
        alternativas: ["Equipo del Hechicero Vagabundo", "Armadura ligera para movilidad"]
      },
      talismanes: [
        "Colgante de la Piedra Mágica (más daño mágico)",
        "Talismán de la Destreza del Cazador",
        "Emblema de Azur (para hechizos ofensivos)",
        "Talismán del Movimiento del Guerrero"
      ],
      hechizos_recomendados: [
        "Estela de Cristal (proyectil rápido de seguimiento)",
        "Espada Lunar (conjura una espada de luna)",
        "Lluvia de Cristal",
        "Armadura de Roca (escudo mágico)"
      ],
      guia_nivel: [
        { nivel: "1-40", descripcion: "Sube Destreza e Inteligencia igualmente. Usa infusiones mágicas en armas de Destreza." },
        { nivel: "40-70", descripcion: "Consigue la Espada de Rueda de la Luna. Llega a Inteligencia 40 y Destreza 40." },
        { nivel: "70-120", descripcion: "Sube Inteligencia a 60. Maximiza la Destreza a 50. Aprende los mejores hechizos híbridos." },
        { nivel: "120-150", descripcion: "Refina los talismanes. Domina la rotación entre ataques físicos y hechizos." }
      ],
      puntos_fuertes: ["Muy versátil", "Buena movilidad", "Efectivo a distancia y en cuerpo a cuerpo", "Muchas opciones de daño"],
      puntos_debiles: ["Requiere aprender dos sistemas distintos", "Peor en cada área que builds especializadas", "Necesita mucha inversión"]
    },

    {
      id: "BUILD_12",
      nombre: "Tanque de Postura (Poise Build)",
      descripcion: "Build extrema de tanque con máxima postura. Absorbe golpes sin interrumpir tus ataques. Armas de dos manos pesadas y armadura de máximo peso.",
      dificultad: "Principiante",
      estilo: "Combate lento y devastador, máxima defensa",
      stats_objetivo: {
        nivel: 150,
        vigor: 60,
        mente: 10,
        resistencia: 60,
        fuerza: 70,
        destreza: 12,
        inteligencia: 9,
        fe: 9,
        arcana: 9
      },
      armas_principales: [
        {
          nombre: "Gran Martillo de los Gigantes",
          ubicacion: "Intercambio del Recuerdo del Gigante de Fuego",
          notas: "Daño físico enorme. Rompe la postura de cualquier enemigo con 2-3 golpes."
        },
        {
          nombre: "Gran Maza del Dragón (Dragon Greatclaw)",
          ubicacion: "Zona de los Dragones — Farum Azula",
          notas: "Arma de dos manos con daño de bestia. Alta postura al usarla."
        }
      ],
      armadura: {
        conjunto: "Armadura del General de Godfrey (máxima defensa)",
        alternativas: ["Armadura de los Caballeros Áldanos", "Armadura del Troll para más peso y postura"]
      },
      talismanes: [
        "Gran Escudo de los Guerreros (maximiza postura)",
        "Talismán del Árbol Áldano Mayor (más vida)",
        "Sello del Círculo de la Piedra (reduce daño recibido)",
        "Talismán de Carga de la Gran Espada (más daño con armas pesadas)"
      ],
      guia_nivel: [
        { nivel: "1-40", descripcion: "Sube Vigor y Resistencia. Usa las armas más pesadas disponibles, siempre a dos manos." },
        { nivel: "40-80", descripcion: "Sube Fuerza a 50. Busca armadura de máximo peso. Aprende a gestionar el equip load." },
        { nivel: "80-120", descripcion: "Maximiza Fuerza a 70. Consigue los mejores grandes martillos." },
        { nivel: "120-150", descripcion: "Sube Resistencia a 60 para máxima carga de equipo. Optimiza los talismanes de postura." }
      ],
      puntos_fuertes: ["Casi imposible de matar", "No te interrumpen los ataques enemigos", "Daño devastador por golpe", "Simple de jugar"],
      puntos_debiles: ["Muy lento", "Problemas contra jefes con muchos ataques rápidos", "Sin FP ni habilidades especiales"]
    },

    {
      id: "BUILD_13",
      nombre: "Duelista de Espada y Escudo",
      descripcion: "Build clásica de Fuerza/Destreza con espada y escudo. Máxima defensa de bloqueo, contragolpes perfectos y contra-ataques. Estilo de juego técnico.",
      dificultad: "Intermedio-Avanzado",
      estilo: "Combate técnico, bloqueos y contraataques",
      stats_objetivo: {
        nivel: 150,
        vigor: 50,
        mente: 20,
        resistencia: 35,
        fuerza: 40,
        destreza: 40,
        inteligencia: 9,
        fe: 9,
        arcana: 9
      },
      armas_principales: [
        {
          nombre: "Espada Áldana de Caballería",
          ubicacion: "Caída de Caballeros Áldanos a caballo en Necrolimbo y otras zonas",
          notas: "La mejor espada de inicio. Buen escalado en Fuerza y Destreza. Versátil."
        },
        {
          nombre: "Escudo del Árbol Áldano (o Escudo del Castillo)",
          ubicacion: "Varias zonas de Necrolimbo / Castillo Tempestoso",
          notas: "100% de reducción de daño físico bloqueando. Esencial para la build."
        },
        {
          nombre: "Espadón de la Guarda Real (respaldo sin escudo)",
          ubicacion: "Caída de Guardias Reales",
          notas: "Alternativa para más daño al empuñar a dos manos."
        }
      ],
      armadura: {
        conjunto: "Armadura del Caballero Áldano",
        alternativas: ["Armadura del Caballero de Hierro", "Equipo de peso medio equilibrado"]
      },
      talismanes: [
        "Gran Amuleto de Escudo (máxima estabilidad de escudo)",
        "Colgante de la Guardia del Guerrero (menos estamina al bloquear)",
        "Talismán del Contraataque Preciso (más daño en contraataques)",
        "Talismán del Vigor Físico"
      ],
      guia_nivel: [
        { nivel: "1-40", descripcion: "Sube Vigor. Practica el parry (deflexión perfecta) con escudo pequeño. Usa espada y escudo desde el inicio." },
        { nivel: "40-80", descripcion: "Equilibra Fuerza y Destreza a 30 cada uno. Consigue un escudo con 100% bloqueo físico." },
        { nivel: "80-120", descripcion: "Sube Fuerza y Destreza a 40. Domina los contraataques y el sistema de postura." },
        { nivel: "120-150", descripcion: "Maximiza Resistencia para más estamina. Perfecciona los talismanes de defensa." }
      ],
      puntos_fuertes: ["Muy técnico y satisfactorio", "Máxima seguridad con buen escudo", "Efectivo contra la mayoría de enemigos", "Estilo de combate clásico"],
      puntos_debiles: ["Requiere aprender el timing del parry", "Más lento que builds ofensivas", "Algunos jefes tienen ataques que no se pueden bloquear"]
    }
  ];

  buildsExtra.forEach(function (b) {
    if (!BUILDS.find(function (x) { return x.id === b.id; })) {
      BUILDS.push(b);
    }
  });
})();
