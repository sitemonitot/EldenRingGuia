// ══════════════════════════════════════════
// ITEMS DE ELDEN RING — Guía completa
// ══════════════════════════════════════════

const ITEMS = {

  // ═══════════════════════════════════════════
  // ARMAS
  // ═══════════════════════════════════════════
  armas: [
    {
      id: "arma_001",
      nombre: "Velo de Luna",
      nombre_en: "Moonveil",
      tipo: "Katana",
      escala: "Des / Int",
      descripcion: "Katana forjada con piedra Glintstone. Su habilidad Luz Transitoria dispara un haz de energía mágica que puede atravesar defensas.",
      como_obtener: "Derrota al Wyrm de Magma en el Túnel de Gael, en la frontera entre Caélida y el Páramo de los Miembros. El acceso está desde la entrada este de Caélida.",
      requisitos: "Des 18, Int 23",
      notas: "Una de las mejores armas para builds de magia cuerpo a cuerpo (DexInt). Su habilidad puede cancelarse rápidamente y genera mucha presión."
    },
    {
      id: "arma_002",
      nombre: "Ríos de Sangre",
      nombre_en: "Rivers of Blood",
      tipo: "Katana",
      escala: "Des / Arc",
      descripcion: "Katana de hoja ondulante que inflige podredumbre de sangre de manera devastadora. Habilidad: Destello de Fuego y Sangre.",
      como_obtener: "El invasor Okina del Dedo Ensangrentado aparece en las Cimas de los Gigantes, al este de la Iglesia de Reyes. Te la suelta al derrotarlo.",
      requisitos: "Des 12, Arc 18",
      notas: "La habilidad dispara tres ataques de sangrado en cadena. Con alta Arcana, el sangrado se acumula extremadamente rápido. Imprescindible para builds de sangrado."
    },
    {
      id: "arma_003",
      nombre: "Mandoble de la Luna Oscura",
      nombre_en: "Dark Moon Greatsword",
      tipo: "Gran Espada",
      escala: "Des / Int",
      descripcion: "La espada legendaria de Ranni, imbuida con la luna oscura. Cargada de magia de hielo. Habilidad: Espada Lunar.",
      como_obtener: "Recompensa final de la Misión de Ranni la Bruja. Después de colocar el Puñal de la Noche en el dedo de Ranni, su espectro la entrega en Ainsel River Main.",
      requisitos: "Fue 16, Des 11, Int 38",
      notas: "Requiere completar toda la misión de Ranni. Una de las mejores armas del juego para builds de Inteligencia. Su infusión de hielo se activa con la habilidad."
    },
    {
      id: "arma_004",
      nombre: "Hoja Blasfema",
      nombre_en: "Blasphemous Blade",
      tipo: "Gran Espada",
      escala: "Fue / Fe",
      descripcion: "La espada del dios serpiente Rykard, que consume almas. Su habilidad Llama Taritta lanza una explosión de llamas que recupera vida.",
      como_obtener: "Intercambia el Recuerdo del Señor de la Blasfemia con Enia en la Mesa Redonda, tras derrotar a Rykard en la Mansión del Volcán.",
      requisitos: "Fue 22, Des 15, Fe 21",
      notas: "Recupera vida con cada muerte en el área y con la habilidad. Muy buena para builds de Fe con componente de combate cuerpo a cuerpo."
    },
    {
      id: "arma_005",
      nombre: "Mandoble del Azote de Estrellas",
      nombre_en: "Starscourge Greatsword",
      tipo: "Par de Espadas",
      escala: "Fue",
      descripcion: "Las enormes espadas de Radahn, infundidas con gravedad. Se usan en par. Su habilidad lanza fragmentos de meteorito que causan explosiones gravitacionales.",
      como_obtener: "Intercambia el Recuerdo del Conquistador de las Estrellas con Enia en la Mesa Redonda, tras derrotar a Radahn.",
      requisitos: "Fue 38, Des 12, Int 15",
      notas: "Una de las mejores armas de Fuerza del juego. La habilidad es devastadora en PvP y PvE. Se puede usar solo un arma o las dos a la vez."
    },
    {
      id: "arma_006",
      nombre: "Espada de Noche y Llama",
      nombre_en: "Sword of Night and Flame",
      tipo: "Espada Larga",
      escala: "Des / Int / Fe",
      descripcion: "Espada legendaria que puede emitir un haz de magia o una ola de llamas. Su habilidad alterna entre los dos modos.",
      como_obtener: "Se encuentra en un cofre en el Castillo de Caria, en Liurnia. Ve al edificio central, sube por las ramas del árbol y cruza al tejado para llegar al cofre.",
      requisitos: "Fue 12, Des 12, Int 24, Fe 24",
      notas: "Antes del parche 1.03 era la más fuerte del juego. Sigue siendo excelente para builds mixtas de Inteligencia y Fe."
    },
    {
      id: "arma_007",
      nombre: "Mandoble Injertado",
      nombre_en: "Grafted Blade Greatsword",
      tipo: "Gran Espada",
      escala: "Fue",
      descripcion: "Enorme espada forjada con cientos de espadas soldadas juntas. El jefe más difícil del Castillo Morne la porta.",
      como_obtener: "Derrota al Leonino Aberrante, jefe del Castillo Morne en la Península Llorosa.",
      requisitos: "Fue 40, Des 14",
      notas: "La habilidad Promesa Jurada otorga un buff temporal a todos los atributos. Ideal para builds de Fuerza pura."
    },
    {
      id: "arma_008",
      nombre: "Nagakiba",
      nombre_en: "Nagakiba",
      tipo: "Katana",
      escala: "Des",
      descripcion: "Katana de hoja extremadamente larga, portada por Yura el cazador. Su longitud le da un alcance excepcional para una katana.",
      como_obtener: "Sigue la misión de Yura cazador de Dracones. Tras varios encuentros, obtendrás su katana. También puede aparecer en su cuerpo si es invadido y muere.",
      requisitos: "Fue 18, Des 22",
      notas: "El katana de mayor alcance del juego. Excelente con infusiones de sangrado o veneno por su mayor área de aplicación."
    },
    {
      id: "arma_009",
      nombre: "Mano de Malenia",
      nombre_en: "Hand of Malenia",
      tipo: "Katana",
      escala: "Des",
      descripcion: "La prótesis de Malenia convertida en arma. Su habilidad Flor de la Podredumbre imita el icónico ataque de la Danza de la Espada.",
      como_obtener: "Intercambia el Recuerdo de la Diosa de la Podredumbre con Enia en la Mesa Redonda, tras derrotar a Malenia.",
      requisitos: "Des 48",
      notas: "Requiere destreza muy alta. La habilidad es devastadora pero difícil de dominar. Exclusiva para builds de Destreza pura."
    },
    {
      id: "arma_010",
      nombre: "Ala de Astel",
      nombre_en: "Wing of Astel",
      tipo: "Espada Curva",
      escala: "Des / Int",
      descripcion: "El ala de un ser cósmico convertida en espada. Puede lanzar un rayo de energía cósmica que inflige daño en área.",
      como_obtener: "Se encuentra en un cofre en Nokstella, Ciudad Eterna (parte de las zonas subterráneas). Acceso desde el Pozo del Siofra o el lago de Ainsel.",
      requisitos: "Des 17, Int 20",
      notas: "Una de las pocas espadas curvas con escalado mágico. Su habilidad tiene buen alcance y hace daño decente."
    },
    {
      id: "arma_011",
      nombre: "Hacha de Dos Filos de Eleonora",
      nombre_en: "Eleonora's Poleblade",
      tipo: "Hacha de Dos Hojas",
      escala: "Des / Arc",
      descripcion: "El arma de la guerrera Eleonora. Ataques gemelos de media luna que infligen sangrado. Habilidad: Danza Sagrada de la Sangre.",
      como_obtener: "Derrota a la invasora Eleonora, Espadachina Poliada, que invade en el Segundo Tabernáculo de Marika (cerca del Río de Siofra, Meseta de Altus).",
      requisitos: "Des 21, Arc 19",
      notas: "Excelente arma de sangrado para builds de Arcana o Destreza. La habilidad aplica sangrado muy rápido con su baile de ataques."
    },
    {
      id: "arma_012",
      nombre: "Cazadora de Serpientes",
      nombre_en: "Serpent-Hunter",
      tipo: "Lanza Grande",
      escala: "Fue / Des",
      descripcion: "Lanza diseñada específicamente para matar al dios serpiente Rykard. Inflige daño masivo al jefe de la Mansión del Volcán.",
      como_obtener: "Se encuentra en el suelo justo al entrar en la sala del jefe de Rykard en la Mansión del Volcán. Es imposible perdérsela.",
      requisitos: "Fue 11, Des 22",
      notas: "Solo es especialmente poderosa contra Rykard; su daño en otros contextos es normal. No hace falta mejorarla para la pelea."
    },
    {
      id: "arma_013",
      nombre: "Misericordia",
      nombre_en: "Miséricorde",
      tipo: "Daga",
      escala: "Des",
      descripcion: "Daga de hoja dentada con daño crítico excepcional. El multiplicador de golpes críticos más alto de todas las dagas.",
      como_obtener: "Se encuentra en un cofre en el Castillo Ventisquero, en la sala de celdas de la mazmorra.",
      requisitos: "Des 11",
      notas: "Imprescindible para builds de golpes críticos. El multiplicador de crítico de 140 es el mayor de cualquier arma tipo daga."
    },
    {
      id: "arma_014",
      nombre: "Hacha Doble de Cimitarra Escarlata",
      nombre_en: "Eclipse Shotel",
      tipo: "Espada Curva",
      escala: "Des / Fe",
      descripcion: "Espada curva plateada que inflige maldición de muerte escarlata. Su habilidad puede reducir permanentemente la barra de vida del enemigo.",
      como_obtener: "Se encuentra en un cofre en el Castillo de la Sombra del Sol (Ciudad de las Sombras), en Leyndell.",
      requisitos: "Des 25, Fe 30",
      notas: "La Maldición de la Muerte Escarlata es un estado alterado raro que reduce la vida máxima del objetivo."
    },
    {
      id: "arma_015",
      nombre: "Báculo de Meteorito",
      nombre_en: "Meteorite Staff",
      tipo: "Báculo",
      escala: "Int (S)",
      descripcion: "Báculo cubierto de meteorito con escalado S en Inteligencia. No se puede mejorar, pero tiene el mejor escalado base de la categoría.",
      como_obtener: "Se encuentra en la Torre de la Hechicería del Pantano, en el suroeste de Caélida. Está en un cadáver colgado fuera de la ventana del segundo piso.",
      requisitos: "Int 18",
      notas: "El mejor báculo para hechizos de gravedad y para el inicio del juego. Al no poder mejorarse, queda obsoleto en niveles muy altos. Incluye el hechizo Lluvia de Meteoritos."
    },
    {
      id: "arma_016",
      nombre: "Cetro Real de Caria",
      nombre_en: "Carian Regal Scepter",
      tipo: "Báculo",
      escala: "Int (S)",
      descripcion: "El báculo personal de Rennala, reina de la Academia. Potencia especialmente los hechizos de la luna y las estrellas.",
      como_obtener: "Intercambia el Recuerdo de la Luna Llena con Enia en la Mesa Redonda, tras derrotar a Rennala.",
      requisitos: "Int 60",
      notas: "Uno de los mejores báculos del juego tardío. El bonus del 15% a hechizos de luna/estrellas lo hace imprescindible para hechiceros especializados."
    },
    {
      id: "arma_017",
      nombre: "Sello del Árbol Áldano",
      nombre_en: "Erdtree Seal",
      tipo: "Sello Sagrado",
      escala: "Fe (S)",
      descripcion: "El sello sagrado con mejor escalado de Fe del juego. No potencia ninguna categoría específica de incantaciones.",
      como_obtener: "Se encuentra en Volcán Manor, en una mazmorra lateral. También puede comprarse a ciertos vendedores de incantaciones.",
      requisitos: "Fe 40",
      notas: "El mejor sello para builds de Fe pura con incantaciones genéricas. Requiere Fe alta para superar otros sellos."
    },
    {
      id: "arma_018",
      nombre: "Sello del Orden Áureo",
      nombre_en: "Golden Order Seal",
      tipo: "Sello Sagrado",
      escala: "Int / Fe",
      descripcion: "Sello que potencia las incantaciones fundamentales del Orden Áureo. Escala con Inteligencia y Fe.",
      como_obtener: "Se encuentra en un cofre en las mazmorras de Leyndell, Capital Real.",
      requisitos: "Int 17, Fe 17",
      notas: "Perfecto para builds mixtas de Inteligencia y Fe que usen incantaciones del Orden Áureo como Ley de la Regresión."
    },
    {
      id: "arma_019",
      nombre: "Guadaña Halo",
      nombre_en: "Halo Scythe",
      tipo: "Guadaña",
      escala: "Des / Fe",
      descripcion: "Guadaña sagrada usada por los Caballeros Limpios de Malenia. Inflige sagrado y podredumbre carmesí.",
      como_obtener: "Suelta (con baja probabilidad) por los Caballeros Cleanrot en Caélida, cerca del Castillo Redmane.",
      requisitos: "Des 13, Fe 15",
      notas: "Inflige podredumbre escarlata pasivamente con sus ataques. Útil para builds de Fe que quieran también acumular podredumbre."
    },
    {
      id: "arma_020",
      nombre: "Katana de la Hoja de la Luna de Meteorito",
      nombre_en: "Meteoric Ore Blade",
      tipo: "Katana",
      escala: "Fue / Int",
      descripcion: "Katana forjada con meteorito que inflige daño físico y gravitacional. Buena para builds de Fuerza/Inteligencia.",
      como_obtener: "Se encuentra en un cofre en las Catacumbas de los Guerreros de Caélida (la misma mazmorra del Imitador).",
      requisitos: "Fue 15, Des 14, Int 18",
      notas: "Una de las pocas katanas con escalado en Fuerza e Inteligencia. Habilidad Vórtice de la Gravedad muy poderosa a corto alcance."
    }
  ],

  // ═══════════════════════════════════════════
  // ARMADURAS
  // ═══════════════════════════════════════════
  armaduras: [
    {
      id: "arm_001",
      nombre: "Conjunto del Veterano",
      nombre_en: "Veteran's Set",
      tipo: "Armadura pesada",
      descripcion: "La armadura pesada de los Veteranos de la Mesa Redonda. Excelente equilibrio entre peso y protección física.",
      como_obtener: "Se compra a Enia en la Mesa Redonda después de derrotar a Malenia (conjunto pesado de la soldado de Áldano).",
      notas: "Uno de los mejores conjuntos pesados por relación peso/protección. Muy popular para builds de Fuerza."
    },
    {
      id: "arm_002",
      nombre: "Conjunto de la Diosa de la Podredumbre",
      nombre_en: "Malenia's Set",
      tipo: "Armadura media",
      descripcion: "La vestimenta de Malenia, Cuchilla de Miquella, incluida su prótesis. Diseño icónico con las flores de la podredumbre.",
      como_obtener: "Se compra a Enia en la Mesa Redonda después de derrotar a Malenia. Cuesta Runas.",
      notas: "Armadura de aspecto imponente. Estadísticamente es de nivel medio pero tiene gran reconocimiento visual."
    },
    {
      id: "arm_003",
      nombre: "Conjunto del Conquistador de las Estrellas",
      nombre_en: "Radahn's Set",
      tipo: "Armadura pesada",
      descripcion: "La enorme armadura de Radahn, decorada con estrellas y calaveras. Protección excepcional.",
      como_obtener: "Se compra a Enia en la Mesa Redonda después de derrotar a Radahn.",
      notas: "Uno de los conjuntos más pesados del juego pero con protección acorde. Necesitas alta Resistencia para cargarlo."
    },
    {
      id: "arm_004",
      nombre: "Conjunto del Caballero de la Mesa Redonda",
      nombre_en: "Crucible Knight Set",
      tipo: "Armadura pesada",
      descripcion: "La armadura dorada de los Caballeros Cruciformes, servidores del Orden Áureo.",
      como_obtener: "Suelta por los Caballeros Cruciformes en la Meseta de Altus, Leyndell, y otras zonas. También vendible tras derrotar al líder.",
      notas: "Buena protección física y mágica. El aspecto dorado y la resistencia la hacen popular entre builds de Fe."
    },
    {
      id: "arm_005",
      nombre: "Conjunto del Árbol Áldano (Árbol de la Noche)",
      nombre_en: "Night's Cavalry Set",
      tipo: "Armadura media",
      descripcion: "La oscura armadura montada de los Jinetes Necrológicos que patrullan de noche.",
      como_obtener: "Suelta (con baja probabilidad) por los Jinetes Necrológicos nocturnos. Se puede farmear en varios puntos del mapa.",
      notas: "Estética oscura y amenazante. Protección media equilibrada."
    },
    {
      id: "arm_006",
      nombre: "Conjunto del Estudiante de la Academia",
      nombre_en: "Raya Lucaria Set",
      tipo: "Armadura ligera",
      descripcion: "La túnica azul de los estudiantes de la Academia de Raya Lúcida. Ligera con algo de resistencia mágica.",
      como_obtener: "Suelta por los estudiantes y soldados de la Academia. Muy común en Liurnia.",
      notas: "Buen conjunto ligero para hechiceros que quieran estética académica. Mínima carga de peso."
    },
    {
      id: "arm_007",
      nombre: "Conjunto del No Muerto",
      nombre_en: "Fingerprint Set",
      tipo: "Armadura media/pesada",
      descripcion: "Armadura de piedra cubierta de huellas de la Llama Frenética. Altísima resistencia al daño físico.",
      como_obtener: "Suelta por los Penitentes de Piedra (Stone Diggers) en las mazmorras de Leyndell y Fárum Azula.",
      notas: "La protección física es excepcional pero el peso es elevado. Muy popular en el meta de PvP para tanques."
    },
    {
      id: "arm_008",
      nombre: "Conjunto del Ermitaño Sabio",
      nombre_en: "Spellblade Set",
      tipo: "Armadura ligera",
      descripcion: "La ropa ligera de los hechiceros Spellblade. Incluye un sobrero con forma de copa alta.",
      como_obtener: "Suelta por los Spellblade (Hechiceros) en la Mansión del Volcán y zonas adyacentes.",
      notas: "El sombrero (Sombrero del Hechicero) aumenta el daño de algunas habilidades de armas."
    },
    {
      id: "arm_009",
      nombre: "Conjunto del Caballero Negro",
      nombre_en: "Black Knife Set",
      tipo: "Armadura ligera",
      descripcion: "La ropa negra de las asesinas del Cuchillo Negro. El capó silencia los pasos del portador.",
      como_obtener: "El capó Capucha de la Asesina del Cuchillo Negro se compra a Rogier, o se encuentra en las Catacumbas del Cuchillo Negro.",
      notas: "El capó hace al personaje completamente silencioso. Muy útil para sigilosos y buscadores de runas."
    },
    {
      id: "arm_010",
      nombre: "Conjunto del Sepulcro Dorado",
      nombre_en: "Tree Sentinel Set",
      tipo: "Armadura pesada",
      descripcion: "La armadura dorada de los Centinelas del Árbol, guardianes del Árbol Áldano.",
      como_obtener: "Derrota al Centinela del Árbol Dorado, el jefe montado en la entrada de Leyndell. Suelta piezas del conjunto.",
      notas: "Magnífico aspecto dorado. Protección alta con diseño propio de los protectores del Árbol."
    },
    {
      id: "arm_011",
      nombre: "Conjunto de Millicent",
      nombre_en: "Millicent's Set",
      tipo: "Armadura ligera",
      descripcion: "La ropa verde de Millicent, la joven infectada de podredumbre que ayudaste en tu viaje.",
      como_obtener: "Recompensa al completar la misión de Millicent (opción de ayudarla al final).",
      notas: "Conjunto de recuerdo de uno de los personajes más queridos. Estadísticamente ligero pero simbólicamente valioso."
    },
    {
      id: "arm_012",
      nombre: "Conjunto de Blaidd el Medio Lobo",
      nombre_en: "Blaidd's Set",
      tipo: "Armadura media",
      descripcion: "La armadura negra del caballero lobo Blaidd, el fiel compañero de Ranni.",
      como_obtener: "Suelta por Blaidd después de su trágico final en la misión de Ranni (aparece como jefe en su última localización).",
      notas: "Armadura de aspecto único y memorable. Protección media con un diseño de lobo icónico."
    }
  ],

  // ═══════════════════════════════════════════
  // TALISMANES
  // ═══════════════════════════════════════════
  talismanes: [
    {
      id: "tal_001",
      nombre: "Favor del Árbol Áldano +2",
      nombre_en: "Erdtree's Favor +2",
      tipo: "Talisman",
      descripcion: "El talisman más codiciado del juego. Aumenta la vida máxima, la resistencia y la carga de equipo simultáneamente.",
      como_obtener: "Se encuentra en Fárum Azula en Desmoronamiento, en el área del Templo de los Dragones, sobre una plataforma elevada.",
      notas: "El talisman más valioso para casi cualquier build. La versión +2 da los mejores bonificadores. Muy difícil de obtener temprano."
    },
    {
      id: "tal_002",
      nombre: "Sello Doloroso de Radagón",
      nombre_en: "Radagon's Soreseal",
      tipo: "Talisman",
      descripcion: "Aumenta Vigor, Resistencia, Fuerza y Destreza en 5 puntos cada uno, pero incrementa el daño recibido en un 15%.",
      como_obtener: "Se encuentra en la Fortaleza del Soldado (Caélida), en un cofre protegido por trampas.",
      notas: "El intercambio de más daño recibido puede ser aceptable en fases iniciales. Excelente para requisitos de armas sin subirlos."
    },
    {
      id: "tal_003",
      nombre: "Fragmento de Alexander",
      nombre_en: "Shard of Alexander",
      tipo: "Talisman",
      descripcion: "Un fragmento del guerrero de hierro Alexander. Aumenta el daño de las habilidades en un 15%.",
      como_obtener: "Recompensa al completar la misión de Alexander el Guerrero de Hierro. Se obtiene tras el combate final en Fárum Azula.",
      notas: "Imprescindible para builds que dependan de la habilidad de su arma. El +15% se aplica a cualquier habilidad de arma."
    },
    {
      id: "tal_004",
      nombre: "Ícono de Godfrey",
      nombre_en: "Godfrey Icon",
      tipo: "Talisman",
      descripcion: "Aumenta el daño de los ataques cargados de hechizos, incantaciones y habilidades en un 15%.",
      como_obtener: "Se encuentra en las Catacumbas Subterráneas de Altus, en la zona de los acantilados debajo de la Meseta de Altus.",
      notas: "Muy bueno para hechiceros que cargan sus conjuros. Combina bien con el Talismán de la Espada Ritual para builds de carga."
    },
    {
      id: "tal_005",
      nombre: "Prótesis de Millicent",
      nombre_en: "Millicent's Prosthesis",
      tipo: "Talisman",
      descripcion: "La prótesis de Millicent convertida en talisman. Sube la Destreza en 5 y aumenta el ataque un 4% con cada golpe consecutivo (hasta 5 cargas).",
      como_obtener: "Recompensa de la misión de Millicent, al completarla en el Árbol de Haligtree ayudándola.",
      notas: "Muy poderoso para builds de Destreza. El bonus de golpes consecutivos puede alcanzar un +20% si se mantienen 5 cargas."
    },
    {
      id: "tal_006",
      nombre: "Exaltación del Señor de la Sangre",
      nombre_en: "Lord of Blood's Exultation",
      tipo: "Talisman",
      descripcion: "Aumenta el ataque un 20% cuando se activa sangrado en las cercanías (propio o del enemigo).",
      como_obtener: "Se obtiene en las Catacumbas de Vísceras de Leyndell, accesibles desde las alcantarillas bajo la capital.",
      notas: "Fundamental para builds de sangrado. Puede activarse con el sangrado de espíritus de ceniza o del propio jugador."
    },
    {
      id: "tal_007",
      nombre: "Talismán de la Tortuga Verde",
      nombre_en: "Green Turtle Talisman",
      tipo: "Talisman",
      descripcion: "Aumenta significativamente la velocidad de recuperación de resistencia.",
      como_obtener: "Se encuentra en las Catacumbas del Corredor (Summonwater Village), en el Páramo de los Miembros. La palanca está escondida.",
      notas: "Imprescindible para builds que hacen muchos ataques seguidos. La resistencia se recupera mucho más rápido al esquivar y atacar."
    },
    {
      id: "tal_008",
      nombre: "Luna de Nokstella",
      nombre_en: "Moon of Nokstella",
      tipo: "Talisman",
      descripcion: "Añade dos espacios de memoria adicionales para hechizos e incantaciones.",
      como_obtener: "Se encuentra en Nokstella, Ciudad Eterna (bajo el lago de Liurnia). Busca en el edificio principal de la ciudad.",
      notas: "Vital para hechiceros que quieren muchos hechizos. Combina con el anillo de memoria del árbol para maximizar slots."
    },
    {
      id: "tal_009",
      nombre: "Talismán del Gran Escudo Dracónico",
      nombre_en: "Dragoncrest Greatshield Talisman",
      tipo: "Talisman",
      descripcion: "Reduce el daño físico recibido en un 20%.",
      como_obtener: "Se encuentra en Fárum Azula en Desmoronamiento, en una zona profunda del templo.",
      notas: "El mejor talisman defensivo del juego para reducir daño físico. Ideal para tanques o jugadores que reciben mucho daño."
    },
    {
      id: "tal_010",
      nombre: "Reliquia de los Dos Dedos",
      nombre_en: "Two Fingers Heirloom",
      tipo: "Talisman",
      descripcion: "Aumenta la Fe en 5 puntos.",
      como_obtener: "Se encuentra en la Torre de Pureza (Liurnia), una de las torres selladas que requiere resolver el acertijo de los enemigos del campo.",
      notas: "Permite usar armas o hechizos que requieren más Fe de la que tienes. Intercambia por un talisman mejor cuando subas el stat."
    },
    {
      id: "tal_011",
      nombre: "Reliquia del Astrónomo",
      nombre_en: "Stargazer Heirloom",
      tipo: "Talisman",
      descripcion: "Aumenta la Inteligencia en 5 puntos.",
      como_obtener: "Se encuentra en la Torre de Tetsu (Liurnia), otra torre sellada en la zona norte del lago.",
      notas: "Permite cumplir requisitos de Inteligencia. Útil para el acceso al Cometa de Azur si no tienes suficiente Int."
    },
    {
      id: "tal_012",
      nombre: "Amuleto del Escorpión de Fuego",
      nombre_en: "Fire Scorpion Charm",
      tipo: "Talisman",
      descripcion: "Aumenta el daño de fuego en un 12% pero también el daño físico recibido en un 10%.",
      como_obtener: "Se encuentra en la Fortaleza del Soldado (Caélida), en una sala lateral.",
      notas: "Bueno para builds de fuego o incantaciones de llama. El incremento de daño recibido es manejable si tienes buena Vigor."
    },
    {
      id: "tal_013",
      nombre: "Amuleto del Escorpión de Rayo",
      nombre_en: "Lightning Scorpion Charm",
      tipo: "Talisman",
      descripcion: "Aumenta el daño de rayo en un 12% pero también el daño físico recibido en un 10%.",
      como_obtener: "Se encuentra en las Catacumbas del Descenso Seco (Páramo), escondido tras una pared falsa.",
      notas: "Ideal para builds de Rayo/Fe usando incantaciones de trueno o armas infundidas con Rayo."
    },
    {
      id: "tal_014",
      nombre: "Cresta Filigrana de Caria",
      nombre_en: "Carian Filigreed Crest",
      tipo: "Talisman",
      descripcion: "Reduce el coste de FP de las habilidades de arma en un 25%.",
      como_obtener: "Se compra a Iji, el herrero de Caria, en las Torres de las Tres Hermanas (Liurnia), después de hablar con Blaidd.",
      notas: "Imprescindible para cualquier build que use mucho las habilidades de arma. Ahorra muchísimo FP a largo plazo."
    },
    {
      id: "tal_015",
      nombre: "Arsenal de la Gran Jarra",
      nombre_en: "Great-Jar's Arsenal",
      tipo: "Talisman",
      descripcion: "Aumenta la carga máxima de equipo en un 19%.",
      como_obtener: "Recompensa de los tres Duelistas en el Gran Jarro de Caélida (norte de Caélida, al borde del acantilado). Debes derrotar tres invasores consecutivos.",
      notas: "Mejor talisman de carga del juego. Permite cargar equipo más pesado sin perder el rodar ágil (menos del 25% de carga)."
    },
    {
      id: "tal_016",
      nombre: "Talismán de la Espada Ritual",
      nombre_en: "Ritual Sword Talisman",
      tipo: "Talisman",
      descripcion: "Aumenta el ataque en un 10% cuando tienes la vida al máximo.",
      como_obtener: "Se encuentra en las Catacumbas de Lux (Meseta de Altus), al final de la mazmorra.",
      notas: "Activa un juego de 'no recibir daño' que puede ser desafiante pero muy recompensante con un escudo sólido."
    },
    {
      id: "tal_017",
      nombre: "Exaltación del Parentesco de la Podredumbre",
      nombre_en: "Kindred of Rot's Exultation",
      tipo: "Talisman",
      descripcion: "Aumenta el ataque un 20% cuando se activa podredumbre escarlata o veneno en las cercanías.",
      como_obtener: "Se encuentra en las Catacumbas de Ainsel River (zona subterránea), en las profundidades de Ainsel.",
      notas: "Versión del Señor de la Sangre pero para podredumbre. Combina muy bien con armas que infligen podredumbre."
    },
    {
      id: "tal_018",
      nombre: "Talismán de la Masa Grabada",
      nombre_en: "Graven-Mass Talisman",
      tipo: "Talisman",
      descripcion: "Aumenta el poder de los hechizos de sorcería en un 8%.",
      como_obtener: "Se encuentra en Elphael, Brazo del Árbol de Haligtree (zona final del Árbol de Haligtree).",
      notas: "Mejor que el Talismán de Escolar. Si usas hechizos de forma regular, es una mejora directa del daño."
    },
    {
      id: "tal_019",
      nombre: "Talismán del Señor Antiguo",
      nombre_en: "Old Lord's Talisman",
      tipo: "Talisman",
      descripcion: "Extiende la duración de los efectos de hechizos e incantaciones en un 30%.",
      como_obtener: "Se encuentra en Fárum Azula en Desmoronamiento, en el área del cementerio de los guerreros bestia.",
      notas: "Muy bueno para buffs de larga duración como Voto Dorado o Vigor de Llama. Reduce la necesidad de reactivarlos."
    },
    {
      id: "tal_020",
      nombre: "Talismán de Daga",
      nombre_en: "Dagger Talisman",
      tipo: "Talisman",
      descripcion: "Aumenta el daño de golpe crítico en un 17%.",
      como_obtener: "Se obtiene de un cofre en el Castillo Ventisquero (zona del primer gran jefe).",
      notas: "Fundamental para builds de golpe crítico junto con Misericordia. Los parries se convierten en golpes devastadores."
    }
  ],

  // ═══════════════════════════════════════════
  // OBJETOS CLAVE
  // ═══════════════════════════════════════════
  objetos_clave: [
    {
      id: "obj_001",
      nombre: "Medallón Dectus (Mitad Izquierda)",
      nombre_en: "Dectus Medallion (Left)",
      tipo: "Objeto clave",
      descripcion: "Una mitad del Medallón Dectus. Junto con la otra mitad, activa el Gran Ascensor Dectus para subir a la Meseta de Altus.",
      como_obtener: "Se encuentra en el Fuerte Haight, en el extremo este del Páramo de los Miembros. Está en la torre más alta del fuerte.",
      notas: "Necesitas ambas mitades para activar el ascensor. Sin ellas, debes escalar por el Camino del Arroyo de Raya Lúcida."
    },
    {
      id: "obj_002",
      nombre: "Medallón Dectus (Mitad Derecha)",
      nombre_en: "Dectus Medallion (Right)",
      tipo: "Objeto clave",
      descripcion: "La segunda mitad del Medallón Dectus, custodiada en Caélida.",
      como_obtener: "Se encuentra en el Fuerte Faroth, en el norte de Caélida. El fuerte está infestado de murciélagos y hay un dragón cerca. Corre directamente al interior.",
      notas: "El Fuerte Faroth es peligroso. No necesitas matar nada; corre al cofre del piso superior y regresa."
    },
    {
      id: "obj_003",
      nombre: "Medallón de Haligtree (Mitad Izquierda)",
      nombre_en: "Haligtree Secret Medallion (Left)",
      tipo: "Objeto clave",
      descripcion: "Una mitad del medallón secreto que accede al ascensor oculto del Gran Ascensor de Rold, que lleva al Campo Sagrado Nevado.",
      como_obtener: "Se encuentra en el sótano de las Ruinas del Pueblo de los Cuatro Cruceros de Caminos (Península Llorosa). Baja al sótano con no-muertos.",
      notas: "Necesaria para acceder a Malenia. La Península Llorosa es una zona opcional del inicio del juego."
    },
    {
      id: "obj_004",
      nombre: "Medallón de Haligtree (Mitad Derecha)",
      nombre_en: "Haligtree Secret Medallion (Right)",
      tipo: "Objeto clave",
      descripcion: "La segunda mitad del medallón secreto, guardada por los Albináuricos.",
      como_obtener: "En la Aldea de los Albináuricos (Liurnia norte). Hay que hacer rodar el hongo gigante de la colina para alcanzar la aldea superior. Una anciana Albináurica te la da.",
      notas: "La aldea está en una colina con un hongo gigante bloqueando el camino. Empuja el hongo haciéndolo rodar."
    },
    {
      id: "obj_005",
      nombre: "Llave de la Academia de Raya Lúcida",
      nombre_en: "Academy Glintstone Key",
      tipo: "Objeto clave",
      descripcion: "La llave para entrar en la Academia de Raya Lúcida, donde espera Rennala.",
      como_obtener: "La llave está en el Puente del Dragón Durmiente (al sur de Liurnia). Un dragón duerme sobre ella. Puedes robarla o matar al dragón.",
      notas: "No es necesario matar al dragón. Solo acércate con cuidado desde un lado y coge la llave del cadáver bajo él."
    },
    {
      id: "obj_006",
      nombre: "Gran Medallón de Rold",
      nombre_en: "Great Rune of Rold",
      tipo: "Objeto clave",
      descripcion: "El medallón que activa el Gran Ascensor de Rold, que sube a las Cimas de los Gigantes.",
      como_obtener: "Recompensa obligatoria por derrotar a Morgott, el Rey Presagio en Leyndell.",
      notas: "Sin este medallón no puedes avanzar en la historia principal. Morgott lo entrega automáticamente al morir."
    },
    {
      id: "obj_007",
      nombre: "Cadenas de Margit",
      nombre_en: "Margit's Shackle",
      tipo: "Objeto consumible",
      descripcion: "Al usarlas cerca de Margit o Morgott, los inmoviliza brevemente en el suelo. Solo funciona antes de que entren en su segunda fase.",
      como_obtener: "Se compran a Patches en su tienda de la Cueva Pirática de Murkwater (Páramo), o en el Palacio de la Mesa Redonda más tarde. También en comerciantes de Altus.",
      notas: "Muy útil para los primeros enfrentamientos con Margit. Úsalas cuando estén en medio de un combo largo."
    },
    {
      id: "obj_008",
      nombre: "Unción Pura de Mohg",
      nombre_en: "Mohg's Shackle",
      tipo: "Objeto consumible",
      descripcion: "Neutraliza la Bendición de Tres de la Sangre de Mohg, evitando la muerte automática al inicio de su segunda fase.",
      como_obtener: "Se encuentra en las alcantarillas bajo el Palacio de Mohgwyn. También puede obtenerse en las catacumbas de Mohgwyn.",
      notas: "Imprescindible para enfrentarte a Mohg sin que te mate instantáneamente en la transición de fases. Úsala cuando active la bendición."
    },
    {
      id: "obj_009",
      nombre: "Punzón de Siofra",
      nombre_en: "Fingerslayer Blade",
      tipo: "Objeto de misión",
      descripcion: "El arma que Ranni te pide buscar en Nokron, Ciudad Eterna. Esencial para su misión.",
      como_obtener: "Se encuentra en Nokron, Ciudad Eterna, en una cofre en el Santuario del Nómada (acceso tras derrotar a Radahn que hace caer la estrella).",
      notas: "Sin este objeto no puedes completar la misión de Ranni y obtener el Final de la Era de las Estrellas."
    },
    {
      id: "obj_010",
      nombre: "Aguja de Miquella (Sin Aleación)",
      nombre_en: "Unalloyed Gold Needle",
      tipo: "Objeto de misión",
      descripcion: "La aguja que sirve para cancelar la Llama Frenética si has recibido su señal, sin perder el final alternativo.",
      como_obtener: "Recompensa por derrotar a Malenia en el Árbol de Haligtree y entregar la Flor de la Podredumbre. Se obtiene de forma transformada.",
      notas: "Úsala en el Sitio de Gracia de la Llama Frenética ANTES del jefe final para cancelarla si has recibido la señal de los Tres Dedos pero quieres otro final."
    }
  ],

  // ═══════════════════════════════════════════
  // CENIZAS DE ESPÍRITU
  // ═══════════════════════════════════════════
  cenizas: [
    {
      id: "cen_001",
      nombre: "Cenizas de espíritu: Imitador",
      nombre_en: "Mimic Tear Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Invoca una copia exacta de tu personaje con todo tu equipo y habilidades. El espíritu más imitado de Elden Ring.",
      como_obtener: "En las Catacumbas de los Guerreros de Caélida (norte de Caélida). Acceso desde la zona del festival de Radahn.",
      notas: "Drena tu vida en lugar de FP al invocarse. Cámbiete a equipo basura antes de invocar para optimizar su armamento. Se puede actualizar."
    },
    {
      id: "cen_002",
      nombre: "Cenizas de espíritu: Tiche, Asesina del Cuchillo Negro",
      nombre_en: "Black Knife Tiche Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Ágil asesina fantasma que lanza cuchillos de la muerte, reduciendo la vida máxima del enemigo y haciendo daño pasivo.",
      como_obtener: "En las Catacumbas del Cuchillo Negro de Altus (Meseta de Altus). Debes derrotar al jefe en la mazmorra.",
      notas: "Una de las mejores cenizas del juego. Extremadamente ágil, difícil de golpear, y la reducción de vida máxima del enemigo es devastadora."
    },
    {
      id: "cen_003",
      nombre: "Cenizas de espíritu: Medusa Umbría",
      nombre_en: "Jellyfish Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Una gran medusa fantasma flotante que envenena a los enemigos y tiene mucha vida. Antes de morir, da un grito que potencia tu ataque.",
      como_obtener: "La entrega Roderika en el Refugio de los Peregrinos (Páramo de los Miembros). Habla con ella antes de que se vaya a la Mesa Redonda.",
      notas: "Perfecta para principiantes por su facilidad de uso. El buff de ataque al morir es muy valioso en luchas largas."
    },
    {
      id: "cen_004",
      nombre: "Cenizas de espíritu: Jinete Necrológico del Caballo de las Tormentas",
      nombre_en: "Skeletal Horseman Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Un jinete espectral a caballo que usa ataques de rayos. Tiene una carga de caballería devastadora.",
      como_obtener: "En las Catacumbas del Paso de la Tempestad (al norte del Páramo). La palanca está oculta en la zona de celdas.",
      notas: "Buena ceniza para distraer jefes grandes que son débiles al rayo. Tiene alcance de carga impresionante."
    },
    {
      id: "cen_005",
      nombre: "Cenizas de espíritu: Lobo Sangriento",
      nombre_en: "Bloodhound Knight Floh Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Un veloz caballero bestia que ataca con rapidez extrema y aplica sangrado.",
      como_obtener: "En las Catacumbas del Héroe del Páramo (norte del Páramo de los Miembros). Derrota al jefe Doble Jinete Necrológico.",
      notas: "Excelente para aplicar sangrado sobre jefes. La velocidad de ataque es alta y el sangrado se acumula rápido."
    },
    {
      id: "cen_006",
      nombre: "Cenizas de espíritu: Espíritu Ulcerado del Árbol",
      nombre_en: "Ulcerated Tree Spirit Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Un enorme espíritu de raíz corrupta. Tiene mucha vida y hace daño en área, pero también aplica podredumbre a aliados y enemigos.",
      como_obtener: "En las Catacumbas de las Raíces Leyndellianas (bajo Leyndell). Derrota al jefe del mismo nombre.",
      notas: "Útil por la cantidad de vida y el caos que genera. Cuidado: también puede infectarte a ti con podredumbre."
    },
    {
      id: "cen_007",
      nombre: "Cenizas de espíritu: Noctámobula y Espadachina",
      nombre_en: "Nightmaiden & Swordstress Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Dos fantasmas gemelos que atacan en tándem. Una usa arcos de hielo y la otra espadas veloces.",
      como_obtener: "Se encuentran en Nokron, Ciudad Eterna, en el Santuario del Nómada (zona después de la caída de la estrella por Radahn).",
      notas: "Excelentes para dividir la atención de jefes. Las dos atacando por separado generan mucha presión."
    },
    {
      id: "cen_008",
      nombre: "Cenizas de espíritu: Seguidor Ancestral",
      nombre_en: "Ancestral Follower Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Un espíritu arquero ancestral que dispara flechas desde la distancia, manteniendo siempre una posición segura.",
      como_obtener: "En las Catacumbas del Nómada de Siofra (bajo el Pozo del Siofra, en las zonas subterráneas del Páramo).",
      notas: "Muy bueno para distraer mientras el espíritu hace daño continuo desde atrás. No arriesga mucho."
    },
    {
      id: "cen_009",
      nombre: "Cenizas de espíritu: Apóstol del Dragón",
      nombre_en: "Dragonkin Soldier Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Un soldado draconiano masivo que usa ataques de rayo glacial. Tiene vida altísima y daño considerable.",
      como_obtener: "En las Catacumbas de los Gigantes (Cimas de los Gigantes). Al final de la mazmorra.",
      notas: "Uno de los espíritus más grandes y robustos. Excelente para mantener ocupados a jefes físicos grandes."
    },
    {
      id: "cen_010",
      nombre: "Cenizas de espíritu: Bestia Guía Solitaria",
      nombre_en: "Lone Wolf Ashes",
      tipo: "Cenizas de espíritu",
      descripcion: "Invoca tres lobos fantasma que atacan en manada. Aunque tienen poca vida individual, la presión que generan es alta.",
      como_obtener: "Te las regala Ranni la Bruja la primera vez que la visitas en la Torre de Ranni (Torres de las Tres Hermanas, Liurnia).",
      notas: "Perfectas para el inicio del juego. Tres objetivos distintos complican mucho el pathfinding de los jefes."
    }
  ],

  // ═══════════════════════════════════════════
  // HECHIZOS (SORCERIES)
  // ═══════════════════════════════════════════
  hechizos: [
    {
      id: "hech_001",
      nombre: "Cometa de Azur",
      nombre_en: "Comet Azur",
      tipo: "Hechizo (Sorcería)",
      descripcion: "Lanza un enorme rayo de energía mágica continuo que causa daño masivo mientras se mantiene. Un canal devastador.",
      como_obtener: "Visita al Mago Primordial Azur en Monte Gelmir (requiere escalar por la ruta secundaria de Gelmir). Está sentado en el campo.",
      requisitos: "Int 60",
      notas: "El hechizo de mayor daño bruto del juego. Combínalo con Terra Magica y el Ícono de Godfrey para daño máximo. Consume FP muy rápido."
    },
    {
      id: "hech_002",
      nombre: "Lluvia de Meteoritos",
      nombre_en: "Rock Sling",
      tipo: "Hechizo (Sorcería)",
      descripcion: "Lanza tres fragmentos de roca desde el suelo que causan daño físico. Puede romper la postura de los enemigos.",
      como_obtener: "Se encuentra cerca de la Torre de la Hechicería del Pantano en Caélida, en unas ruinas al sur de la zona.",
      requisitos: "Int 18",
      notas: "Daño físico, por lo que evita las resistencias mágicas. Excelente contra Radahn y otros jefes que resisten la magia. Se incluye con el Báculo de Meteorito."
    },
    {
      id: "hech_003",
      nombre: "Corte Cariánico",
      nombre_en: "Carian Slicer",
      tipo: "Hechizo (Sorcería)",
      descripcion: "Conjura una espada de magia para un ataque cuerpo a cuerpo instantáneo. El hechizo de melee más rápido y eficiente en FP.",
      como_obtener: "Se compra a Miriel, Pastor de los Votos (Iglesia de los Votos, Liurnia), o a Sellen.",
      requisitos: "Int 14",
      notas: "El mejor hechizo cuerpo a cuerpo de toda la categoría. Coste de FP muy bajo y daño excelente. Imprescindible para builds de Int con melee."
    },
    {
      id: "hech_004",
      nombre: "Regla de Caria",
      nombre_en: "Carian Phalanx",
      tipo: "Hechizo (Sorcería)",
      descripcion: "Conjura una lluvia de espadas flotantes sobre el caster que se disparan al contacto con enemigos.",
      como_obtener: "Se compra a Preceptor Seluvis en la Torre de Seluvis (Torres de las Tres Hermanas, Liurnia), después de avanzar en la misión de Ranni.",
      requisitos: "Int 32",
      notas: "Bueno para el combate PvP y contra grupos de enemigos. Las espadas flotan varios segundos antes de dispararse."
    },
    {
      id: "hech_005",
      nombre: "Luna Llena de Rennala",
      nombre_en: "Rennala's Full Moon",
      tipo: "Hechizo (Sorcería)",
      descripcion: "Lanza una gran luna mágica que debilita la resistencia mágica del objetivo en un 30% al impactar.",
      como_obtener: "Intercambia el Recuerdo de la Luna Llena con Enia en la Mesa Redonda, tras derrotar a Rennala.",
      requisitos: "Int 70",
      notas: "El debuff de resistencia mágica es devastador. Lanza la luna y luego ataca con Cometa de Azur para daño masivo."
    },
    {
      id: "hech_006",
      nombre: "Terra Magica",
      nombre_en: "Terra Magica",
      tipo: "Hechizo (Sorcería)",
      descripcion: "Crea un círculo mágico en el suelo que aumenta el poder de todos los hechizos en un 35% mientras estés dentro.",
      como_obtener: "Se encuentra en la Academia de Raya Lúcida, en el ala del techo (acceso por las ramas del árbol interno).",
      requisitos: "Int 20",
      notas: "Prepara siempre Terra Magica antes de usar Cometa de Azur. La combinación es devastadora contra cualquier jefe."
    },
    {
      id: "hech_007",
      nombre: "Estrellas de la Ruina",
      nombre_en: "Stars of Ruin",
      tipo: "Hechizo (Sorcería)",
      descripcion: "Dispara 12 fragmentos de estrellas que persiguen al objetivo. Daño total muy alto y difícil de esquivar.",
      como_obtener: "Recompensa de la misión de Sellen la Hechicera, en su conclusión en la Academia de Raya Lúcida.",
      requisitos: "Int 43",
      notas: "Los proyectiles siguen al enemigo. Excelente contra objetivos que se mueven mucho. Completa la misión de Sellen para obtenerlo."
    },
    {
      id: "hech_008",
      nombre: "Comet",
      nombre_en: "Comet",
      tipo: "Hechizo (Sorcería)",
      descripcion: "El hechizo de proyectil mágico estándar pero muy potente. Carga para duplicar el daño.",
      como_obtener: "Se compra a Sellen en la Ruina Cayda (Páramo de los Miembros). Es uno de los primeros hechizos disponibles.",
      requisitos: "Int 36",
      notas: "La versión cargada hace el doble de daño. Buen equilibrio entre coste de FP y daño. Muy versátil."
    }
  ],

  // ═══════════════════════════════════════════
  // INCANTACIONES
  // ═══════════════════════════════════════════
  incantaciones: [
    {
      id: "inc_001",
      nombre: "Vigor de Llama, Concédeme Fuerza",
      nombre_en: "Flame, Grant Me Strength",
      tipo: "Incantación",
      descripcion: "Aumenta el daño físico y de fuego en un 20% durante 30 segundos. Buff esencial para casi cualquier build.",
      como_obtener: "Se encuentra en el Fuerte Gael, en el extremo este del Páramo de los Miembros. Está en un cadáver junto a dos perros.",
      requisitos: "Fe 15",
      notas: "Uno de los mejores buffs del juego. No necesitas Fe alta para usarlo. Combinado con Voto Dorado, el daño es devastador."
    },
    {
      id: "inc_002",
      nombre: "Voto Dorado",
      nombre_en: "Golden Vow",
      tipo: "Incantación",
      descripcion: "Aumenta el ataque y la defensa en un 15% para el jugador y aliados cercanos durante 80 segundos.",
      como_obtener: "Se encuentra en las Ruinas del Castillo (Meseta de Altus), específicamente en la zona principal del castillo.",
      requisitos: "Fe 25",
      notas: "El mejor buff general de Fe. Dura 80 segundos y mejora ataque Y defensa. Obligatorio para cualquier build de Fe."
    },
    {
      id: "inc_003",
      nombre: "Podredumbre de la Diosa",
      nombre_en: "Scarlet Aeonia",
      tipo: "Incantación",
      descripcion: "Salta al aire y cae creando una explosión de podredumbre carmesí que infesta el área con flores.",
      como_obtener: "Intercambia el Recuerdo de la Diosa de la Podredumbre con Enia en la Mesa Redonda, tras derrotar a Malenia.",
      requisitos: "Fe 43",
      notas: "La icónica habilidad de Malenia convertida en incantación. Las flores que crecen aplican podredumbre pasivamente."
    },
    {
      id: "inc_004",
      nombre: "Hoja Negra de Maliketh",
      nombre_en: "Black Blade",
      tipo: "Incantación",
      descripcion: "Replica el ataque de la Hoja Negra de Maliketh: lanza un filo de energía oscura que reduce la vida máxima del objetivo.",
      como_obtener: "Intercambia el Recuerdo de la Hoja Negra con Enia en la Mesa Redonda, tras derrotar a Maliketh.",
      requisitos: "Fe 46",
      notas: "La reducción de vida máxima es muy poderosa contra jefes con mucha vida. Difícil de obtener pero efectiva."
    },
    {
      id: "inc_005",
      nombre: "Ley de la Regresión",
      nombre_en: "Law of Regression",
      tipo: "Incantación",
      descripcion: "Elimina todos los estados negativos y buffs activos en el área. También revela ilusiones específicas en Leyndell.",
      como_obtener: "Se encuentra en Leyndell, Capital Real, en la Sala del Evangelio (requiere completar el desafío de los soldados de piedra).",
      requisitos: "Int 37",
      notas: "Usa esta incantación frente a la estatua de Elden Ring en Leyndell para revelar un secreto crucial de la historia."
    },
    {
      id: "inc_006",
      nombre: "Orden de las Estrellas Árdanas",
      nombre_en: "Elden Stars",
      tipo: "Incantación",
      descripcion: "Una lluvia de estrellas sagradas que caen sobre el área del objetivo. Una de las incantaciones más poderosas del Orden Áureo.",
      como_obtener: "Se encuentra en las Catacumbas de las Raíces Leyndellianas (zonas subterráneas bajo Leyndell).",
      requisitos: "Fe 50",
      notas: "Excelente contra grupos de enemigos. Las estrellas buscan al objetivo principal. El coste de FP es muy alto."
    },
    {
      id: "inc_007",
      nombre: "Cazar Llama",
      nombre_en: "Catch Flame",
      tipo: "Incantación",
      descripcion: "Lanza una pequeña llama instantánea hacia adelante. El hechizo de fuego más básico pero muy rápido y barato.",
      como_obtener: "Se compra a Corhyn en la Mesa Redonda desde el principio del juego.",
      requisitos: "Fe 8",
      notas: "El 'hechizo básico' de Fe. Coste mínimo de FP y daño sorprendentemente bueno para el coste. Muy útil en combo."
    },
    {
      id: "inc_008",
      nombre: "Relámpago de Marika",
      nombre_en: "Lightning of Marika",
      tipo: "Incantación",
      descripcion: "Lanza un poderoso rayo desde el cielo que hace daño en área. Una de las incantaciones de rayo más devastadoras.",
      como_obtener: "Se encuentra en las Catacumbas de las Raíces de Siofra (zona subterránea bajo el Pozo del Siofra).",
      requisitos: "Fe 31",
      notas: "Muy buen daño en área para grupos de enemigos. Los rayos de las incantaciones son especialmente buenos contra Radagón."
    }
  ]
};
