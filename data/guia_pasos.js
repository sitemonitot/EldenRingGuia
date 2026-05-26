// ══════════════════════════════════════════════════════════
// GUÍA PASO A PASO — De principio a fin, todo el contenido
// ══════════════════════════════════════════════════════════
var GUIA_PASOS = [

  // ═══════════════════════════════════════════════════════
  // FASE 1 — NECROLIMBO
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_01", numero:1, fase:"Necrolimbo",
    titulo:"Tutorial: Capilla de la Anticipación",
    area:"Capilla de la Anticipación",
    descripcion:"Primer contacto con el mundo. Se recomienda morir al Vástago Injertado para avanzar al Cementerio del Inicio.",
    detalle:[
      "Al despertar, explora la capilla y coge el Escudo de Cuero del cadáver cercano.",
      "Sube las escaleras y sal al exterior por la puerta dorada.",
      "Encuentra al Vástago Injertado — es un jefe opcional muy difícil para el nivel 1. Puedes intentarlo o simplemente morir para avanzar.",
      "Si mueres, reapareces en el Cementerio del Inicio. Si ganas, obtienes la Joya Espiritual de Miembros.",
      "Puedes volver aquí más adelante cuando seas más fuerte para recoger los objetos del área."
    ],
    jefe:"Vástago Injertado (opcional, muy difícil al inicio)",
    recompensa:"Joya Espiritual de Miembros (si derrotas al jefe). Inicio del juego.",
    es_opcional:false,
    siguiente:"Despertar en el Cementerio del Inicio"
  },
  {
    id:"paso_02", numero:2, fase:"Necrolimbo",
    titulo:"Primer amanecer en Las Tierras Intermedias",
    area:"Cementerio del Inicio — Necrolimbo",
    descripcion:"Explora los alrededores del Cementerio del Inicio y llega a la Iglesia de la Elleh para encontrar al comerciante Kale.",
    detalle:[
      "Sube la escalera del cementerio hasta la superficie de Necrolimbo.",
      "Descansa en el Lugar de Gracia del exterior para activar el mapa.",
      "Dirígete al norte siguiendo el camino dorado de la Gracia.",
      "Llega a la Iglesia de la Elleh — hay un Lugar de Gracia y el comerciante Kale.",
      "Compra OBLIGATORIAMENTE el Kit de Elaboración (para craftear) y el Libro de Cocina del Camino [1] a Kale. Son muy baratos y esenciales.",
      "Habla con Kale repetidamente para conocer el mundo y obtener pistas.",
      "Coge el mapa de Necrolimbo del pilar de piedra junto al camino principal."
    ],
    jefe:null,
    recompensa:"Kit de Elaboración, acceso al crafting, Mapa de Necrolimbo",
    es_opcional:false,
    siguiente:"Descansar en 3 Lugares de Gracia para conocer a Melina"
  },
  {
    id:"paso_03", numero:3, fase:"Necrolimbo",
    titulo:"Conocer a Melina — Obtener a Torrente",
    area:"Necrolimbo — Lugares de Gracia",
    descripcion:"Descansa en tres Lugares de Gracia distintos en el exterior para que Melina te visite y acepte darte a Torrente, tu destrero espectral.",
    detalle:[
      "Descansa en el Lugar de Gracia de la Capilla de Gracia del Inicio, en la Iglesia de la Elleh y en las Ruinas de la Puerta Fronteriza.",
      "Tras el tercer descanso, Melina aparecerá. Acepta su trato para recibir a Torrente.",
      "Torrente te permite moverse mucho más rápido y escalar salientes.",
      "A partir de ahora, cuando descanses en un Lugar de Gracia podrás gastar runas para subir de nivel.",
      "IMPORTANTE: sin el trato de Melina no puedes subir de nivel. Si rechazas su trato, puedes aceptarlo más adelante en los Lugares de Gracia."
    ],
    jefe:null,
    recompensa:"Torrente (destrero espectral), capacidad de subir de nivel con runas",
    es_opcional:false,
    siguiente:"Explorar Necrolimbo — Ruinas de la Puerta Fronteriza"
  },
  {
    id:"paso_04", numero:4, fase:"Necrolimbo",
    titulo:"Ruinas de la Puerta Fronteriza — Aspid del Árbol",
    area:"Ruinas de la Puerta Fronteriza — Necrolimbo",
    descripcion:"Las Ruinas de la Puerta Fronteriza son el primer gran obstáculo narrativo. El Aspid del Árbol Áldano custodia la entrada al Castillo de Velo Tormentoso.",
    detalle:[
      "Sigue el camino principal al norte desde la Iglesia de la Elleh.",
      "Llega a las Ruinas de la Puerta Fronteriza. Aquí encuentras guardias y el camino al castillo.",
      "El Aspid del Árbol Áldano (jefe de campo) bloquea el puente principal. Rodéalo usando Torrente o el camino lateral.",
      "Explora las ruinas para encontrar objetos y cofres con equipo temprano.",
      "Opcional: en la parte posterior de las ruinas hay un soldado de fuego con buenas runas.",
      "Desde aquí, el camino al norte lleva al Castillo de Velo Tormentoso (guárdate para más adelante)."
    ],
    jefe:"Aspid del Árbol Áldano (jefe de campo, esquivable con Torrente)",
    recompensa:"Acceso al camino al Castillo, atajos por los laterales",
    es_opcional:false,
    siguiente:"Explorar Necrolimbo — mazmorras opcionales antes del Castillo"
  },
  {
    id:"paso_05", numero:5, fase:"Necrolimbo",
    titulo:"Cueva de Murkwater — Patches el Traicionero",
    area:"Cueva de Murkwater — Necrolimbo",
    descripcion:"Cueva junto al río al norte del lago Agheel. Aquí vive Patches, un PNJ que te tenderá una trampa y luego se convertirá en comerciante.",
    detalle:[
      "La cueva está al norte del lago Agheel, junto al río. Entra con cuidado.",
      "Al fondo hay un cofre trampa. Si lo abres, Patches cierra la reja.",
      "Cuando Patches te habla desde arriba, responde como quieras — al salir te perdonará.",
      "Perdónale (no ataques) para que se convierta en comerciante. Tiene items únicos.",
      "Sus objetos de venta incluyen el Bolsillo de Ladrón (Stonesword Key) y otros consumibles útiles.",
      "Si le matas pierde el acceso permanente a su tienda."
    ],
    jefe:"Jefe del Calamar Fantasma (al entrar, antes de llegar a Patches)",
    recompensa:"Acceso a la tienda de Patches con objetos únicos",
    es_opcional:true,
    siguiente:"Catacumbas de Tormenta o Mina de Limgrave"
  },
  {
    id:"paso_06", numero:6, fase:"Necrolimbo",
    titulo:"Mina de Limgrave — Primeras piedras de forja",
    area:"Mina de Limgrave — Necrolimbo",
    descripcion:"Mina al este del lago Agheel repleta de mineros. Excelente fuente de piedras de forja tempranas para mejorar tus armas.",
    detalle:[
      "La mina está al este del lago Agheel, en el acantilado.",
      "Los mineros dejan caer Piedras de Forja [1] y [2]. Fármealas aquí.",
      "El jefe al final es el Troll de Piedra — fácil si puedes rodear sus ataques.",
      "Derrótalo para las Cenizas Espirituales del Troll y muchas runas.",
      "Consejo: mejora tu arma principal a +3 antes de intentar el Castillo de Velo Tormentoso."
    ],
    jefe:"Troll de Piedra",
    recompensa:"Piedras de Forja [1-2], Cenizas del Troll, runas",
    es_opcional:true,
    siguiente:"Catacumbas de la Piedra de Tormenta para más Cenizas de Espíritu"
  },
  {
    id:"paso_07", numero:7, fase:"Necrolimbo",
    titulo:"Catacumbas de la Piedra de Tormenta",
    area:"Acantilado norte — Necrolimbo",
    descripcion:"Primera catacumba del juego. Repleta de trampas y esqueletos. Contiene las Cenizas Espirituales del Pámpano.",
    detalle:[
      "En los acantilados al norte del camino principal, cerca del área de tormenta.",
      "Hay muchas trampas de flechas — avanza despacio y observa el suelo.",
      "Los esqueletos se levantan a menos que los golpees mientras brillan o uses daño sagrado.",
      "El jefe Impulsador de Fantasmas es débil al fuego y al daño físico.",
      "Las Cenizas del Pámpano (invocación) son útiles para distraer a los jefes."
    ],
    jefe:"Impulsador de Fantasmas",
    recompensa:"Cenizas Espirituales del Pámpano",
    es_opcional:true,
    siguiente:"Explorar el lago Agheel y Stormhill antes del Castillo"
  },
  {
    id:"paso_08", numero:8, fase:"Necrolimbo",
    titulo:"Dragon Agheel — Lago de Agheel",
    area:"Lago de Agheel — Necrolimbo",
    descripcion:"El dragón Agheel habita el lago principal de Necrolimbo. Opcional pero da el primer Corazón de Dragón para la Comunión.",
    detalle:[
      "Entra al lago en Torrente para que Agheel aparezca y aterrice.",
      "Sus ataques de fuego son devastadores. Mantente en Torrente para la movilidad.",
      "Apunta a la cabeza para máximo daño. El fuego le hace poco daño — usa físico o relámpago.",
      "Al derrotarlo obtienes un Corazón de Dragón. Llévalo a la Iglesia de la Comunión de Dragones en Caelid.",
      "NIVEL RECOMENDADO: 20-30 para este jefe."
    ],
    jefe:"Flying Dragon Agheel",
    recompensa:"Corazón de Dragón (para incantaciones de dragón)",
    es_opcional:true,
    siguiente:"Evergaol de Stormhill o Cueva Costera"
  },
  {
    id:"paso_09", numero:9, fase:"Necrolimbo",
    titulo:"Cueva Costera — El Collar de Rya",
    area:"Acantilados de Stormhill — Necrolimbo",
    descripcion:"Cueva en los acantilados de Stormhill. Tiene dos jefes y un collar que pertenece a Rya, la dama del Volcán Manor.",
    detalle:[
      "La cueva está en los acantilados del lado occidental de Stormhill, accesible con Torrente.",
      "Los dos jefes (Jefes Semihumanos) son difíciles juntos — usa Cenizas de Espíritu.",
      "Al derrotarlos, en el cofre final está el Collar de Rya.",
      "Lleva el collar a Rya, que está en una de las ruinas cercanas al noroeste de Necrolimbo.",
      "Esto inicia la cadena de misiones de Rya que lleva eventualmente al Volcán Manor."
    ],
    jefe:"Dúo de Jefes Semihumanos",
    recompensa:"Collar de Rya (inicio de su misión), posible acceso al atajo de Liurnia",
    es_opcional:true,
    siguiente:"Prepararse para el Castillo de Velo Tormentoso"
  },
  {
    id:"paso_10", numero:10, fase:"Necrolimbo",
    titulo:"Evergaol de Stormhill — Caballero del Crisol",
    area:"Stormhill — Necrolimbo",
    descripcion:"Prisión eterna en lo alto de Stormhill con un Caballero del Crisol encerrado. Difícil pero da una buena Ceniza de Guerra.",
    detalle:[
      "El Evergaol está en la colina al norte del camino hacia el Castillo de Velo Tormentoso.",
      "Activa la prisión para luchar contra el Caballero del Crisol solo (sin invocaciones de Ceniza).",
      "El Caballero tiene ataques de cola y colas de dragón en la segunda fase.",
      "Usa el espacio del Evergaol para esquivar en círculo.",
      "Recompensa: Ceniza de Guerra del Crisol o incantación única."
    ],
    jefe:"Crucible Knight",
    recompensa:"Ceniza de Guerra: Aplastamiento del Crisol",
    es_opcional:true,
    siguiente:"Castillo de Velo Tormentoso — Margit y Godrick"
  },
  {
    id:"paso_11", numero:11, fase:"Necrolimbo",
    titulo:"Castillo de Velo Tormentoso — Margit el Presagio",
    area:"Castillo de Velo Tormentoso — Necrolimbo",
    descripcion:"El primer gran jefe obligatorio del juego. Margit el Presagio guarda la entrada al castillo. NIVEL RECOMENDADO: 25-35.",
    detalle:[
      "Para alcanzar el castillo, pasa el puente al norte del camino principal.",
      "Antes de Margit, explora el campamento y habla con Roderika (lado oeste) para obtener las Cenizas de Espíritu del Crisantemo.",
      "Margit tiene ataques con martillo de luz sagrada — difíciles de predecir. Aprende sus animaciones.",
      "Puedes comprar el Ungüento Restrictivo del Harapo de Magrite (NPC junto al Lugar de Gracia antes del boss) para infligirle debilidad.",
      "Las Cenizas del Lobo son excelentes para distraerle en esta pelea.",
      "En la segunda fase aparece un martillo grande de luz. Sigue siendo manejable con paciencia.",
      "Al derrotarlo, el castillo se abre. Explora TODOS los rincones — hay mucho botín dentro."
    ],
    jefe:"Margit, el Presagio Funesto",
    recompensa:"Cenizas Espirituales del Crisantemo, acceso al Castillo de Velo Tormentoso",
    es_opcional:false,
    siguiente:"Explorar el interior del Castillo de Velo Tormentoso"
  },
  {
    id:"paso_12", numero:12, fase:"Necrolimbo",
    titulo:"Castillo de Velo Tormentoso — Interior y Godrick",
    area:"Castillo de Velo Tormentoso — Necrolimbo",
    descripcion:"Explora el castillo por completo antes de enfrentar a Godrick. Hay objetos, NPCs y atajos valiosos.",
    detalle:[
      "Explora los tejados y torres del castillo — contienen cofres con armaduras y armas únicas.",
      "Encuentra a Nepheli Loux (guerrera del norte) que puede ayudarte como aliada en la pelea de Godrick.",
      "Busca a Rogier el hechicero herido — en una sala inferior del castillo. Da pistas sobre el misterio de las raíces.",
      "El atajos por los elevadores y puertas ahorra mucho tiempo en los respawns.",
      "Godrick el Injerto es el primer semidiós. Primera fase con hacha, segunda fase injerta un brazo de dragón.",
      "En la segunda fase cuidado con el aliento de fuego del brazo.",
      "Al derrotarlo obtienes la Gran Runa de Godrick y su Remembranza."
    ],
    jefe:"Godrick el Injerto",
    recompensa:"Gran Runa de Godrick, Remembranza del Injerto (intercambia por arma o sello en la Mesa Fragmentada)",
    es_opcional:false,
    siguiente:"Ir a la Mesa Redonda y luego a Liurnia de los Lagos"
  },
  {
    id:"paso_13", numero:13, fase:"Necrolimbo",
    titulo:"Península del Llanto — Contenido opcional completo",
    area:"Península del Llanto",
    descripcion:"La Península del Llanto al sur de Necrolimbo es zona opcional con jefes únicos, un castillo y misiones de NPC importantes.",
    detalle:[
      "Cruza el puente al sur de Necrolimbo hacia la Península del Llanto.",
      "Visita el Puente del Cuarto de la Bruja para encontrar a Irina — ella pide que rescates a su padre Edgar en Castillo Morne.",
      "Castillo Morne está al sur. Jefe: Misbegotten Leónico. Libera a Edgar en la parte superior.",
      "Derrota al Leónico para obtener la Gran Runa de Morne (necesaria para el Gran Ascensor sur de Liurnia).",
      "Hay una Cueva del Conocimiento con tutorial completo de mecánicas — útil para principiantes.",
      "Al norte, el Caballero de la Noche aparece solo de noche en el puente — buen botín de runas.",
      "NIVEL RECOMENDADO: 20-30 para el Castillo Morne."
    ],
    jefe:"Misbegotten Leonino (Castillo Morne)",
    recompensa:"Gran Runa de Morne, inicio misión Edgar/Irina, exploración completa",
    es_opcional:true,
    siguiente:"Mesa Redonda y luego a Liurnia de los Lagos"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 2 — LIURNIA DE LOS LAGOS
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_14", numero:14, fase:"Liurnia de los Lagos",
    titulo:"Llegada a Liurnia — Exploración inicial",
    area:"Liurnia de los Lagos",
    descripcion:"Liurnia es una enorme zona inundada con la Academia de Raya Lúcida flotando al norte. Explora el área suroeste primero.",
    detalle:[
      "Sal del Castillo de Velo Tormentoso por la puerta trasera o rodea por el oeste.",
      "Baja a Liurnia desde el norte del castillo. Hay una bajada oculta entre los acantilados.",
      "Activa el Lugar de Gracia al llegar a la orilla del lago.",
      "Ve hacia el este para encontrar el mapa de Liurnia en un pilar de piedra.",
      "El Comerciante de las Orillas del Lago tiene objetos útiles — visítalo.",
      "Explora las ruinas del lago con Torrente — hay objetos en las ruinas sumergidas.",
      "Nivel recomendado para Liurnia: 35-50."
    ],
    jefe:null,
    recompensa:"Mapa de Liurnia, acceso a la zona, nuevos comerciantes",
    es_opcional:false,
    siguiente:"Misión de Ranni — Castillo de Caria"
  },
  {
    id:"paso_15", numero:15, fase:"Liurnia de los Lagos",
    titulo:"Castillo de Caria — Loretta y misión de Ranni",
    area:"Castillo de Caria — noroeste de Liurnia",
    descripcion:"El Castillo de Caria está al noroeste. La Caballera Loretta lo guarda. Al derrotarla, accedes a las tres torres de Ranni.",
    detalle:[
      "El castillo está en el extremo noroeste de Liurnia — sigue el camino por el borde del mapa.",
      "Los Dedos Mágicos en el patio del castillo son peligrosos. Usa Torrente para esquivarlos.",
      "La jefa Loretta es una caballera mágica a caballo. Esquiva sus flechas y golpéala de cerca.",
      "Al derrotarla, el camino a las tres torres se abre.",
      "Visita la Torre de Ranni al noroeste y habla con ella — es fundamental para el final de las Estrellas.",
      "Acepta servirla para desbloquear la misión de Ranni (una de las mejores del juego).",
      "Blaidd el Medio Lobo y otros NPCs también están en esta zona."
    ],
    jefe:"Royal Knight Loretta",
    recompensa:"Cenizas de los Arbustos, hechizo Gran Arco de Loretta, inicio misión de Ranni",
    es_opcional:true,
    siguiente:"Continuar la misión de Ranni o ir a la Academia de Raya Lúcida"
  },
  {
    id:"paso_16", numero:16, fase:"Liurnia de los Lagos",
    titulo:"Misión de Ranni — Camino a las Estrellas",
    area:"Múltiples (Liurnia → Nokron → Río Ainsel → Lago de Rot)",
    descripcion:"La misión más larga y épica del juego. Siguiéndola obtienes el final de la Edad de las Estrellas y el arma más poderosa del juego.",
    detalle:[
      "Tras hablar con Ranni, ve al Pozo de Siofra (bajo Necrolimbo) para encontrar a Blaidd.",
      "Derrota a Radahn en el Festival de Radahn (zona de Caelid) — esto abre Nokron.",
      "Entra a Nokron, Ciudad Eterna (bajo las ruinas al sur de Necrolimbo) tras Radahn.",
      "En Nokron encuentra la Hoja Decapitadora en las Catacumbas de la Ciudad.",
      "Navega hasta el Pozo de Ainsel mediante la Cofra del Ataúd en Nokron.",
      "Activa la Miniatura de Ranni en el Río Ainsel y completa Nokstella.",
      "Derrota a Astel en el Lago de la Podredumbre.",
      "Obtén el Anillo de la Luna Oscura y activa el ritual final."
    ],
    jefe:"Astel, Nacido de la Nada (Lago de Rot) + varios intermedios",
    recompensa:"Gran Espada de la Luna Oscura, final de la Edad de las Estrellas (el más complejo del juego)",
    es_opcional:true,
    siguiente:"Academia de Raya Lúcida — Rennala"
  },
  {
    id:"paso_17", numero:17, fase:"Liurnia de los Lagos",
    titulo:"Mazmorras de Liurnia — Catacumbas y cuevas",
    area:"Liurnia de los Lagos",
    descripcion:"Liurnia tiene varias mazmorras opcionales con Cenizas de Espíritu valiosas y equipo.",
    detalle:[
      "Catacumbas de Summonwater: al este del lago. Jefe: Ancestro Espíritu. Sus Cenizas son excelentes — las mejores para nivel medio.",
      "Catacombas de Cristal: al norte. Jefe: Colosal Mago Cristal.",
      "Túnel de Cristal de Raya Lúcida: mina al este de la Academia. Jefe: Troll de Cristal. Muchas Piedras Sombrías.",
      "Evergaol de la Colina de los Hechiceros: al norte. Jefe: Hechicero Ancestral con hechizo único.",
      "Iglesia de los Votos: Miriel la tortuga pastora vende hechizos únicos de Rennala y de la Fe.",
      "Cuatro Campanarios: torres con portales — uno te lleva a Farum Azula preview, otro a una zona nocturna."
    ],
    jefe:"Ancestro Espíritu (Catacumbas de Summonwater)",
    recompensa:"Cenizas del Ancestro Espíritu, Piedras Sombrías, hechizos únicos",
    es_opcional:true,
    siguiente:"Academia de Raya Lúcida — Rennala"
  },
  {
    id:"paso_18", numero:18, fase:"Liurnia de los Lagos",
    titulo:"Academia de Raya Lúcida — Rennala",
    area:"Academia de Raya Lúcida — Liurnia central",
    descripcion:"La Academia flota al norte de Liurnia. Rennala, Reina de la Luna Llena, es el segundo semidiós y una de las peleas más espectaculares del juego.",
    detalle:[
      "Para entrar a la Academia necesitas una Glintstone Key — hay una en la Tierra de los Dragones (mapa de Liurnia) o Thops te da pistas.",
      "Dentro de la Academia hay muchos magos peligrosos. Usa el escudo y las Cenizas de Espíritu.",
      "Antes de la primera fase de Rennala, destruye los estudiantes con libros dorados que forman el escudo.",
      "Segunda fase: Rennala invoca criaturas gigantes. Aprende el patrón de sus invocaciones.",
      "Al derrotarla NO muere — solo queda inerte. Puedes hablar con ella para redistribuir tus niveles usando Lágrimas Larvales.",
      "Obtén la Remembranza de Rennala para el bastón o el hechizo de la Luna Llena en la Mesa Fragmentada."
    ],
    jefe:"Rennala, Reina de la Luna Llena",
    recompensa:"Gran Runa de Rennala, Remembranza de Rennala, acceso a redistribuir niveles",
    es_opcional:false,
    siguiente:"Meseta de Altus (necesitas 2 Gran Runas) o explorar Caelid primero"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 3 — CAÉLIDA
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_19", numero:19, fase:"Caélida",
    titulo:"Llegada a Caélida — La tierra de la podredumbre",
    area:"Caélida — zona occidental",
    descripcion:"Caélida es una zona de dificultad alta con enemigos muy agresivos. Ir antes de nivel 50 es arriesgado. NIVEL RECOMENDADO: 45-60.",
    detalle:[
      "Entra a Caelid por el este de Necrolimbo o por el portal en la zona de las Ruinas Selladas por Arena (cuidado — te teletransporta directamente al interior de Caelid).",
      "Los enemigos de Caelid infligen Podredumbre Escarlata — ten siempre medicina del estado.",
      "La Calle de la Arena tiene el mejor bastón temprano del juego: Bastón de Meteorito (en un cadáver en el sur).",
      "La Sorcerer Sellen está encadenada en una celda en la Calle de la Arena — inicia su misión.",
      "El Gran Dragón Ancestral Greoll puede matarse atacando su cola repetidamente desde Torrente para 250.000 runas.",
      "Gurranq en las Catacumbas de la Bestia da incantaciones únicas a cambio de Huesos de Muerte."
    ],
    jefe:"Múltiples opcionales",
    recompensa:"Bastón de Meteorito, incantaciones bestiales, corazones de dragón",
    es_opcional:true,
    siguiente:"Festival de Radahn — Castillo Redmane"
  },
  {
    id:"paso_20", numero:20, fase:"Caélida",
    titulo:"Festival de Radahn — La Batalla de Starscourge",
    area:"Castillo Redmane — Caélida",
    descripcion:"El Festival de Radahn es un evento masivo de PvE donde varios NPCs te ayudan a derrotar a Radahn. Necesario para abrir Nokron.",
    detalle:[
      "Llega al Castillo Redmane en el sur de Caelid y habla con el heraldo para activar el festival.",
      "En el festival puedes invocar a múltiples NPCs: Alexander el Jarro, Blaidd, Millicent, Patches y otros.",
      "Radahn es un combate de arena abierta. Invoca TODOS los aliados disponibles usando los estandartes en el campo.",
      "En la segunda fase Radahn cae del cielo como un meteorito — corre en círculo para evitar el impacto.",
      "Al derrotarlo se abre Nokron bajo Necrolimbo — un estrella cae creando un cráter.",
      "Visita a los NPCs supervivientes después: Alexander está justo al norte con daño de hombro."
    ],
    jefe:"Radahn, Azote de las Estrellas",
    recompensa:"Gran Runa de Radahn, Remembranza del Azote, apertura de Nokron Ciudad Eterna",
    es_opcional:true,
    siguiente:"Nokron Ciudad Eterna (bajo Necrolimbo) para la misión de Ranni"
  },
  {
    id:"paso_21", numero:21, fase:"Caélida",
    titulo:"Mazmorras de Caélida",
    area:"Caélida",
    descripcion:"Caelid tiene mazmorras únicas con objetos imposibles de conseguir en otro lugar.",
    detalle:[
      "Cueva de los Camelios: al centro. Al fondo hay la Hoja de Mineral Meteórico (katana mágica-gravitacional, excelente).",
      "Cueva de Sellia: jefe Araña Progenitora. Da el Talismán de la Exaltación del Descendiente de la Podredumbre.",
      "Sellia, Ciudad de Hechicería: enciende las 3 antorchas de las torres para abrir cofres sellados con hechizos únicos: Cometa de Noche.",
      "Mina de Gael: muchas Piedras Sombrías [1-4] para mejorar armas especiales.",
      "Evergaol de la Oscuridad: armadura del Caballero de Seda.",
      "Las Catacumbas Bestiales de Farum: drogas con incantaciones de dragón y acceso a portal a Farum Azula."
    ],
    jefe:"Araña Progenitora (Cueva Sellia)",
    recompensa:"Hoja Meteórica, Cometa de Noche, Talismán Kindred of Rot",
    es_opcional:true,
    siguiente:"Meseta de Altus — Gran Ascensor Dectus"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 4 — MESETA DE ALTUS Y MONTE GELMIR
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_22", numero:22, fase:"Meseta de Altus",
    titulo:"Subir a la Meseta de Altus",
    area:"Gran Ascensor Dectus o Ruta del Arroyo",
    descripcion:"Para entrar a Altus necesitas los dos fragmentos del Medallón Dectus o subir por el Camino del Arroyo de Raya Lúcida.",
    detalle:[
      "OPCIÓN A: Medallón Dectus — mitad superior en Fuerte Haight (Necrolimbo), mitad inferior en Fuerte Faroth (Caelid). Con ambos usa el Gran Ascensor Dectus.",
      "OPCIÓN B: Camino del Arroyo — al este de Liurnia. Una serie de cuevas y el jefe Magma Wyrm Makar al final. Más difícil pero no requiere el medallón.",
      "Al llegar a Altus, activa los Lugares de Gracia y obtén el mapa.",
      "El vendedor de la primera área tiene items útiles para la segunda mitad del juego.",
      "Nivel recomendado para Altus: 60-80."
    ],
    jefe:"Magma Wyrm Makar (si subes por el arroyo)",
    recompensa:"Acceso a la Meseta de Altus y Leyndell",
    es_opcional:false,
    siguiente:"Explorar Altus — Volcán Manor — Leyndell"
  },
  {
    id:"paso_23", numero:23, fase:"Meseta de Altus",
    titulo:"Volcán Manor — Rykard y misiones",
    area:"Monte Gelmir — Volcán Manor",
    descripcion:"El Volcán Manor en Monte Gelmir contiene a Rykard, Señor de la Blasfemia. Las misiones de Tanith y Rya llevan aquí.",
    detalle:[
      "Llega al Volcán Manor por el noroeste de Altus — sigue la ruta de los muertos.",
      "Habla con Tanith (la señora) para iniciar las misiones de asesinato: tres cartas que llevan a matar a invasores del mundo.",
      "Completa al menos las dos primeras cartas para conseguir el Set del Lobo Enfurecido.",
      "Para la misión de Rya: devuelve su collar (de la Cueva Costera de Necrolimbo) y luego habla con ella repetidamente en el Manor.",
      "El acceso a Rykard está al final del Manor, por la sala del altar — necesitas el ascensor secreto.",
      "OBLIGATORIO para matar a Rykard: usar la Lanza de Caza de Serpientes que está justo antes del boss.",
      "La Lanza hace que la pelea sea manejable. Sin ella es casi imposible."
    ],
    jefe:"Rykard, Señor de la Blasfemia",
    recompensa:"Gran Runa de Rykard, Remembranza de Rykard, Set del Lobo Enfurecido",
    es_opcional:true,
    siguiente:"Leyndell, Capital Real — Godfrey Espectral"
  },
  {
    id:"paso_24", numero:24, fase:"Meseta de Altus",
    titulo:"Mazmorras de Altus — Lo que no te puedes perder",
    area:"Meseta de Altus",
    descripcion:"Altus tiene mazmorras con algunos de los mejores talismanes y armas del juego.",
    detalle:[
      "Catacumbas del Crisol: jefe dúo de Caballeros del Crisol — muy difíciles pero dan Cenizas únicas.",
      "Cueva del Tigre de la Llama: jefe Magma Wyrm. Da el Talismán del Escorpión de Llamas.",
      "Castillo de la Media Noche Sol: jefe Marica. Da el Shotel del Eclipse y el Amuleto de Mediana Noche.",
      "Evergaol de la Conspiración: armadura y cenizas únicas.",
      "Gran Talismán: busca la Cresta Filigranada de Caria (comprada a War Counselor Iji en Liurnia) — reduce el FP de los AoW.",
      "Mina de Altus: buenas Piedras Sombrías [3-6] para mejorar tus armas especiales al máximo."
    ],
    jefe:"Varios opcionales",
    recompensa:"Talismán Escorpión de Llamas, Cenizas dúo Crisol, Shotel del Eclipse",
    es_opcional:true,
    siguiente:"Leyndell — la Capital Real"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 5 — LEYNDELL, CAPITAL REAL
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_25", numero:25, fase:"Leyndell, Capital Real",
    titulo:"Entrar en Leyndell — La Capital Real",
    area:"Leyndell, Capital Real",
    descripcion:"Leyndell requiere haber obtenido al menos dos Gran Runas. La capital es enorme con muchos secretos y atajos.",
    detalle:[
      "Con dos Gran Runas, el Gran Ascensor de Rold está bloqueado — necesitas el Gran Medallón de Rold (obtenido de Morgott más adelante... o accede por las Catacumbas de las Alcantarillas).",
      "Entra por la puerta oeste o por las catacumbas subterráneas.",
      "Activa todos los Lugares de Gracia — hay muchos y están estratégicamente colocados.",
      "Godfrey el Espectro Áureo guarda el Gran Vestíbulo. Es la versión espectral (forma áurea) — más fácil que la final.",
      "Explora los tejados de la capital para encontrar atajos y cofres con buenas armas.",
      "Las Catacumbas de las Alcantarillas tienen el acceso a Deeproot Depths (misión de Fia).",
      "Nivel recomendado: 80-100."
    ],
    jefe:"Godfrey, Primer Señor Áldano (forma espectral)",
    recompensa:"Fragmento de Gran Runa, acceso al trono interior",
    es_opcional:false,
    siguiente:"Morgott, el Rey Presagio"
  },
  {
    id:"paso_26", numero:26, fase:"Leyndell, Capital Real",
    titulo:"Morgott, el Rey Presagio — El Guardián del Árbol",
    area:"Trono Áldano — Leyndell",
    descripcion:"Morgott es el jefe obligatorio de Leyndell y el guardián del Árbol Áldano. Una de las peleas más épicas del juego.",
    detalle:[
      "Para llegar al trono, sube desde el Gran Vestíbulo por las escaleras doradas.",
      "Morgott tiene dos fases: la primera con espada y jabalinas sagradas; la segunda con un martillo y armas sagradas adicionales.",
      "Es débil al Sangrado, Veneno y Podredumbre — los estados le afectan bien.",
      "En la segunda fase invoca armas sagradas de luz — muy rápidas. Aprende las animaciones.",
      "Al derrotarlo, obtén el Gran Medallón de Rold y ve al Gran Ascensor de Rold.",
      "Habla con Melina aquí — ella te dará el próximo objetivo: quemar el Árbol Áldano en las Montañas de los Gigantes.",
      "Antes de subir, explora los subterráneos de Leyndell para la misión de Fia."
    ],
    jefe:"Morgott, el Rey Presagio",
    recompensa:"Gran Runa de Morgott, Remembranza de Morgott, Gran Medallón de Rold",
    es_opcional:false,
    siguiente:"Zonas subterráneas y/o Montañas de los Gigantes"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 6 — ZONAS SUBTERRÁNEAS
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_27", numero:27, fase:"Zonas Subterráneas",
    titulo:"Nokron, Ciudad Eterna — Tras la caída de Radahn",
    area:"Nokron, Ciudad Eterna",
    descripcion:"Nokron es una ciudad subterránea que se abre tras derrotar a Radahn. Necesario para la misión de Ranni.",
    detalle:[
      "El cráter donde cayó Radahn está al sur de Necrolimbo. Desciende por los salientes dentro del cráter.",
      "Nokron es una ciudad plateada bajo tierra con una Gracia especial y enemigos plateados.",
      "El Ancestro Espíritu aquí da Cenizas mejoradas (versión completa, mucho más poderosa).",
      "Los Gargoyles Gemelos cuidan la Cofra del Ataúd — derrótales para la misión de Fia.",
      "Dentro de la ciudad está el Tesoro de los Mimic: la Hoja Decapitadora para la misión de Ranni.",
      "Explora las ruinas plateadas — hay objetos únicos y una zona que se conecta con el Río Siofra."
    ],
    jefe:"Ancestro Espíritu + Gargoyles Gemelos (para misión de Fia)",
    recompensa:"Hoja Decapitadora (misión Ranni), Cenizas del Ancestro Espíritu mejoradas",
    es_opcional:true,
    siguiente:"Deeproot Depths (misión Fia) o Palacio de Mohgwyn"
  },
  {
    id:"paso_28", numero:28, fase:"Zonas Subterráneas",
    titulo:"Fondo de Raíz Profunda — Misión de Fia",
    area:"Fondo de Raíz Profunda",
    descripcion:"Bajo Leyndell, en las raíces del Árbol Áldano. El final de la misión de Fia lleva al dragón Lich Fortissax y a un final alternativo.",
    detalle:[
      "Accede por la Cofra del Ataúd en Nokron tras derrotar a los Gargoyles.",
      "Fia está aquí en su forma final. Si tienes el Medallón de la Muerte, puedes hablar con ella.",
      "El jefe Fortissax está en sueños — acepta yacer con Fia y lucha con el dragón en el mundo de los sueños.",
      "Al derrotarlo, Fia completa su misión y obtienes el objeto para el Final de Fia.",
      "Explora los árboles de raíces gigantes — hay escalada hasta el jefe del Árbol Áldano.",
      "El Avatar del Árbol Áldano aquí da una Lágrima de Cristal única."
    ],
    jefe:"Lichdragon Fortissax",
    recompensa:"Incantación de Fortissax, objeto para el Final de Fia",
    es_opcional:true,
    siguiente:"Palacio de Mohgwyn (opcional) o Montañas de los Gigantes"
  },
  {
    id:"paso_29", numero:29, fase:"Zonas Subterráneas",
    titulo:"Palacio de Mohgwyn — Mohg Señor de la Sangre",
    area:"Palacio de Mohgwyn",
    descripcion:"Zona de sangre oculta bajo el mundo. Accesible por el portal de Varre o por las Montañas de los Gigantes. Necesario para el Final de Mohg.",
    detalle:[
      "ACCESO FÁCIL: completa la misión de Varre hasta el final — él te da el portal directo.",
      "ACCESO ALTERNATIVO: portal en las Montañas de los Gigantes (zona más avanzada).",
      "El palacio está bañado en sangre. Los enemigos son vampíricos y regeneran HP si les dejas.",
      "Mohg, Señor de la Sangre tiene dos fases. En la segunda invoca una maldición de tres fases de Nihil.",
      "Para eliminar la maldición Nihil, usa la Purissage — obtenida del comerciante de Mohg.",
      "Al derrotarlo, el capullo de Miquella está detrás. Interactúa para contexto del lore.",
      "El DLC Shadow of the Erdtree empieza aquí."
    ],
    jefe:"Mohg, Señor de la Sangre",
    recompensa:"Gran Runa de Mohg, Remembranza de Mohg, acceso al DLC",
    es_opcional:true,
    siguiente:"Montañas de los Gigantes"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 7 — MONTAÑAS DE LOS GIGANTES Y HALIGTREE
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_30", numero:30, fase:"Picos de los Gigantes",
    titulo:"Montañas de los Gigantes — El Camino al Norte",
    area:"Picos de los Gigantes",
    descripcion:"Usa el Gran Medallón de Rold para subir al Gran Ascensor de Rold. Las Montañas de los Gigantes son la zona más fría del juego.",
    detalle:[
      "Usa el Gran Medallón de Rold en el Gran Ascensor de Rold (al este de Leyndell).",
      "Al llegar, activa los Lugares de Gracia y obtén el mapa de las Montañas.",
      "El Castillo Sol al norte tiene el Comandante Niall — derrótalo para el fragmento derecho del Medallón del Haligtree.",
      "El Dragón Borealis vive en el lago congelado — da el Corazón del Dragón de Hielo.",
      "Las catacumbas de la zona dan incantaciones de muerte únicas.",
      "Al norte, la Forja de los Gigantes es donde debes tomar la decisión de quemar el Árbol.",
      "Nivel recomendado: 100-120."
    ],
    jefe:"Commander Niall (Castillo Sol) + Borealis (dragón)",
    recompensa:"Fragmento del Medallón de Haligtree (derecho), Corazón de Borealis",
    es_opcional:false,
    siguiente:"Árbol Hierático de Miquella (opcional) o Quemar el Árbol"
  },
  {
    id:"paso_31", numero:31, fase:"Picos de los Gigantes",
    titulo:"Campo Sacroníveo y Árbol Hierático de Miquella",
    area:"Campo Sacroníveo — Árbol Hierático de Miquella",
    descripcion:"El Árbol Hierático de Miquella es la zona más difícil del juego base. Malenia aquí es el jefe más duro del juego.",
    detalle:[
      "Con los DOS fragmentos del Medallón del Haligtree, usa el Gran Ascensor Oculto (en el norte de las Montañas).",
      "El Campo Sacroníveo es una zona nevada con enemigos de hielo y bandidos albinauricos.",
      "En el Campo Sacroníveo entrega a Latenna a los albinauricos — te da el fragmento izquierdo del medallón.",
      "Loretta del Árbol Hierático guarda la entrada — versión mejorada de la Loretta de Caria.",
      "Elphael, el Regazo del Árbol, está dentro. Navega por las zonas con árbol putrefacto.",
      "Malenia está al fondo de Elphael. Su mecánica más peligrosa: SE CURA con cada golpe que conecta, incluso bloqueados.",
      "Para derrotarla: aprende a esquivar (no bloquear), ataca agresivo entre sus combos."
    ],
    jefe:"Malenia, Semidiosa + Malenia, Diosa del Rotten (2 fases)",
    recompensa:"Gran Runa de Malenia, Mano de Malenia (arma), Remembranza de Malenia",
    es_opcional:true,
    siguiente:"Quemar el Árbol Áldano"
  },
  {
    id:"paso_32", numero:32, fase:"Picos de los Gigantes",
    titulo:"La Forja de los Gigantes — Quemar el Árbol",
    area:"Forja de los Gigantes — Picos de los Gigantes",
    descripcion:"La decisión más importante del juego. En la Forja de los Gigantes, el fuego de los Gigantes quemará el Árbol Áldano.",
    detalle:[
      "Sube a la Forja de los Gigantes al norte de las Montañas siguiendo el camino principal.",
      "Hay un combate contra el Giant Ancestral antes de la forja — usa relámpago o físico.",
      "Melina te pedirá que enciendas la forja para quemar el Árbol. Acepta.",
      "ALTERNATIVA: si tienes la Llama del Frénesis (los Tres Dedos en el subsuelo de Leyndell), puedes usar esa llama en lugar de sacrificar a Melina.",
      "Tras quemar el Árbol, el juego avanza automáticamente a Farum Azula.",
      "Esta decisión es IRREVERSIBLE — guarda primero.",
      "Melina puede morir aquí si eliges quemar el árbol con su sacrificio."
    ],
    jefe:"Fire Giant (jefe de la zona antes de la forja)",
    recompensa:"Avance a Farum Azula, posible supervivencia de Melina (si usas los Tres Dedos)",
    es_opcional:false,
    siguiente:"Farum Azula en Desmoronamiento"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 8 — FARUM AZULA EN DESMORONAMIENTO
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_33", numero:33, fase:"Farum Azula en Desmoronamiento",
    titulo:"Llegada a Farum Azula",
    area:"Farum Azula en Desmoronamiento",
    descripcion:"Farum Azula es una ciudad flotante en el tiempo que se desmorona eternamente. Zona final del juego antes del Árbol Áldano.",
    detalle:[
      "Tras quemar el Árbol, apareces directamente en Farum Azula.",
      "La zona tiene tormentas de relámpago constantes y plataformas que se derrumban.",
      "Los Dracónidos son los principales enemigos — resistentes y con daño de relámpago.",
      "El dragón Placidusax está aquí (opcional) — uno de los dragones más épicos del juego.",
      "La Bestia Ancestral (versión final de Gurranq) aparece aquí si completaste su misión.",
      "Activa todos los Lugares de Gracia — hay varios caminos alternativos.",
      "Nivel recomendado: 120-150."
    ],
    jefe:"Varios Dracónidos + Dragón Placidusax (opcional)",
    recompensa:"Remembranza de Placidusax (arma o incantación únicos)",
    es_opcional:false,
    siguiente:"Maliketh, la Bestia de la Noche"
  },
  {
    id:"paso_34", numero:34, fase:"Farum Azula en Desmoronamiento",
    titulo:"Maliketh, la Bestia de la Noche",
    area:"Farum Azula en Desmoronamiento",
    descripcion:"Maliketh es el penúltimo jefe de Farum Azula. Dos fases radicalmente diferentes: primero como Bestia Encadenada, luego como Maliketh.",
    detalle:[
      "Accede al coliseo de Farum Azula — hay varios pasillos antes del boss.",
      "Primera fase: Bestia Encadenada. Ágil y con ataques rápidos. Aprende el patrón y ataca en sus pausas.",
      "Segunda fase: se transforma en Maliketh con la Hoja Negra. Ataques de muerte que reducen el HP máximo.",
      "La Hoja Negra drena permanentemente el HP máximo — mata a Maliketh rápido antes de que te reduzca demasiado.",
      "Usa Cenizas de Espíritu para distraerle durante los ataques más peligrosos.",
      "Al derrotarlo, el juego corta a Leyndell convertida en Capital de Cenizas."
    ],
    jefe:"Maliketh, la Bestia de la Noche",
    recompensa:"Remembranza de la Bestia de la Noche",
    es_opcional:false,
    siguiente:"Leyndell, Capital de Cenizas"
  },

  // ═══════════════════════════════════════════════════════
  // FASE 9 — LEYNDELL CAPITAL DE CENIZAS Y FINAL
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_35", numero:35, fase:"Leyndell, Capital de Cenizas",
    titulo:"Leyndell en Ruinas — La Capital de Cenizas",
    area:"Leyndell, Capital de Cenizas",
    descripcion:"Después de Maliketh, Leyndell ha sido quemada y cubierta de cenizas. El final se acerca.",
    detalle:[
      "Leyndell transformada — los mismos lugares pero con cenizas y enemigos muertos vivientes.",
      "Sir Gideon Ofnir el Omnisciente está en el Gran Vestíbulo — él es un jefe.",
      "Gideon usa todos los hechizos del juego. Es fuerte pero manejable si presionas.",
      "Godfrey, el Primer Señor Áldano (su forma REAL) está en el Trono — mucho más difícil que la forma espectral.",
      "Godfrey real tiene dos fases — la segunda con mazo de tierra es devastadora.",
      "Tras Godfrey, el camino al Árbol Áldano quemado está abierto.",
      "Nivel recomendado: 130-150."
    ],
    jefe:"Gideon Ofnir + Godfrey, Primer Señor Áldano (real)",
    recompensa:"Acceso al Árbol Áldano final y al jefe final",
    es_opcional:false,
    siguiente:"Radagon y la Bestia Áurea — El Jefe Final"
  },
  {
    id:"paso_36", numero:36, fase:"El Final",
    titulo:"Radagon de la Luna Dorada y la Bestia Áurea",
    area:"Árbol Áldano — Cima del Mundo",
    descripcion:"El jefe final del juego son dos peleas consecutivas sin descanso: Radagon, el marido de Marika, y luego la Bestia Áurea, el Orden Áldano encarnado.",
    detalle:[
      "Radagon es el alter ego de Marika. Lucha con martillo de oro y runas sagradas.",
      "Es vulnerable a daño físico y magia. El Rayo le hace moderado daño.",
      "Segunda fase sin transición: Radagon desemboca en la Bestia Áurea.",
      "La Bestia Áurea tiene múltiples ataques de área sagrada y un rayo dorado devastador.",
      "Usa la Espada de la Reliquia Sagrada (AoW: Ola de Gracia) para infligir gran daño en sus patas.",
      "Al derrotarla, el juego llega a su clímax y debes elegir el FINAL.",
      "Guarda la partida ANTES del jefe final para poder volver y elegir otro final."
    ],
    jefe:"Radagon de la Luna Dorada + Bestia Áurea (Elden Beast)",
    recompensa:"Fin del juego — uno de los seis finales se activa según tus elecciones previas",
    es_opcional:false,
    siguiente:"Elige tu final — ver sección de Finales"
  },

  // ═══════════════════════════════════════════════════════
  // MISIONES NPC CLAVE
  // ═══════════════════════════════════════════════════════
  {
    id:"paso_37", numero:37, fase:"Misiones NPC",
    titulo:"Misión de Ranni — La Bruja de la Luna Azul",
    area:"Múltiples zonas",
    descripcion:"La misión de Ranni es la más compleja y recompensante del juego. Desbloquea el mejor final alternativo.",
    detalle:[
      "Paso 1: Ve al Castillo de Caria (noroeste de Liurnia) y derrota a Loretta.",
      "Paso 2: En la Torre de Ranni, acéptala como tu señora.",
      "Paso 3: Encuentra a Blaidd en el Pozo de Siofra (bajo Necrolimbo) y habla con él.",
      "Paso 4: Derrota a Radahn para abrir Nokron.",
      "Paso 5: En Nokron, consigue la Hoja Decapitadora.",
      "Paso 6: Dala a Ranni en su torre. Ella desaparece.",
      "Paso 7: En el Río Ainsel, activa la Miniatura de Ranni.",
      "Paso 8: Completa Nokstella → derrota a Astel en el Lago de Rot → obtén el Anillo de la Luna Oscura.",
      "Paso 9: Úsalo en la Gran Biblioteca de la Academia para el ritual final con Ranni."
    ],
    jefe:"Loretta + Radahn + Gargoyles + Astel",
    recompensa:"Gran Espada de la Luna Oscura (mejor arma del juego para Int), Final de la Edad de las Estrellas",
    es_opcional:true,
    siguiente:"Completa el juego para activar el final de Ranni"
  },
  {
    id:"paso_38", numero:38, fase:"Misiones NPC",
    titulo:"Misión de Millicent — Hija de Malenia",
    area:"Caelid → Altus → Haligtree",
    descripcion:"Millicent es hija de Malenia y tiene la Podredumbre Escarlata. Su misión recorre el mundo y da el mejor talismán del juego para builds de múltiple golpe.",
    detalle:[
      "Paso 1: Habla con Gowry en Caelid. Te pide la Flor de Gracia de Sellia.",
      "Paso 2: Consigue la flor en Sellia, Ciudad de Hechicería. Dásela a Gowry.",
      "Paso 3: Gowry crea una cura. Llévala a Millicent en la Iglesia de la Plaga, Caelid.",
      "Paso 4: Habla con Millicent varias veces hasta que se vaya. La encuentras después en Altus.",
      "Paso 5: Visítala en las Ruinas del Árbol de Altus, luego en las Montañas de los Gigantes, luego en el Haligtree.",
      "Paso 6: En el Haligtree, antes del boss final, hay un evento: elige AYUDARLA contra las hermanas.",
      "Paso 7: Al ayudarla y volver, ella ha avanzado hacia Malenia. Vuelve al sitio y activa el objeto brillante.",
      "RECOMPENSA: Talismán Prótesis de Millicent (excelente) + Cenizas del Aguijón de la Espada Alada Podrida."
    ],
    jefe:"Cuatro hermanas de Millicent (si eliges ayudarla)",
    recompensa:"Talismán Prótesis de Millicent, Cenizas del Aguijón de la Espada Alada Podrida",
    es_opcional:true,
    siguiente:"Completa el juego o continúa otras misiones"
  },
  {
    id:"paso_39", numero:39, fase:"Misiones NPC",
    titulo:"Misión de Alexander — El Jarro de Hierro",
    area:"Necrolimbo → Caelid → Altus → Farum Azula",
    descripcion:"Alexander es un jarro de guerra gigante que aparece en múltiples puntos del juego. Su misión da uno de los mejores talismanes del juego.",
    detalle:[
      "Paso 1: Encuentra a Alexander atascado en un hoyo en Necrolimbo, cerca de las Ruinas de Saintsbridge. Golpéale para liberarle.",
      "Paso 2: Habla con él junto al festival de Radahn. Participa en el festival con él.",
      "Paso 3: Tras el festival, encuentra a Alexander dañado al norte del campo de batalla. Usa un aceite en él.",
      "Paso 4: Encuéntralo en Farum Azula — ha llegado para su batalla final.",
      "Paso 5: En Farum Azula, él te reta a un duelo. Acéptalo.",
      "Paso 6: Al derrotarle, obtienes el Fragmento de Alexander.",
      "El Fragmento de Alexander (talismán) es uno de los mejores para builds de AoW."
    ],
    jefe:"Alexander, el Jarro de Hierro (duelo final)",
    recompensa:"Fragmento de Alexander (talismán — aumenta daño de AoW en 15%)",
    es_opcional:true,
    siguiente:"Completa el juego o continúa otras misiones"
  },
  {
    id:"paso_40", numero:40, fase:"Misiones NPC",
    titulo:"Misión de Corhyn y Goldmask — La Verdad Dorada",
    area:"Mesa Redonda → Altus → Leyndell → Montañas",
    descripcion:"Goldmask busca la forma verdadera del Orden Áldano. Su misión es necesaria para el final del Lord Áldano del Orden.",
    detalle:[
      "Paso 1: Habla con Corhyn en la Mesa Redonda — él menciona a Goldmask.",
      "Paso 2: Encuentra a Goldmask en el puente de Altus, mirando al horizonte. No habla.",
      "Paso 3: Habla con Corhyn junto a Goldmask. Goldmask quiere 'la forma de los Dos Dedos'.",
      "Paso 4: Para resolver el enigma, aprende la incantación Ley de la Regresión (en la Academia o comprándola).",
      "Paso 5: Activa Ley de la Regresión frente a la estatua correcta en Leyndell — reveals a message.",
      "Paso 6: Dile la respuesta a Corhyn — 'Lo mismo'.",
      "Paso 7: Encuéntralos en las Montañas de los Gigantes para el desenlace.",
      "RECOMPENSA: Incantación del Orden Áldano + posibilidad del final del Lord Áldano."
    ],
    jefe:null,
    recompensa:"Incantación del Orden Áldano, desbloqueo del Final del Lord Áldano",
    es_opcional:true,
    siguiente:"Completa el juego eligiendo el Final del Lord Áldano del Orden"
  }
];
