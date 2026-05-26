// ══════════════════════════════════════
// GUÍA PASO A PASO — De principio a fin
// ══════════════════════════════════════
var GUIA_PASOS = [

// ══════════════════════════════════════
// FASE 1 — NECROLIMBO (Pasos 1-20)
// ══════════════════════════════════════

{
  id: "paso_01",
  numero: 1,
  fase: "Necrolimbo",
  titulo: "Tutorial — Capilla de la Anticipación",
  area: "Capilla de la Anticipación",
  descripcion: "Despierta como Sin Muerte en la Capilla de la Anticipación. Este breve tutorial te enseña los controles básicos de combate antes de llegar a las Tierras Intermedias.",
  detalle: [
    "Al iniciar, recoge los objetos del suelo: Daga de Destello y vendas curativas.",
    "Aprende los controles básicos: ataque ligero (R1/RB), ataque cargado (R2/RT), esquiva (Círculo/B) y bloqueo (L1/LB).",
    "Avanza por la capilla hasta encontrar la escalera que sube a la zona exterior.",
    "Enfréntate al Vástago Injertado (jefe del tutorial) — si mueres, es intencional y avanzas a las Tierras Intermedias.",
    "Si logras sobrevivir, la puerta al fondo te lleva a una vista del Árbol Áldano y luego caerás de todas formas.",
    "No hay recompensa real por vencer aquí; el objetivo es aprender los controles.",
  ],
  jefe: "Vástago Injertado (tutorial)",
  recompensa: "Aprendizaje de controles básicos",
  es_opcional: false,
  siguiente: "Despertarás en el Cementerio del Inicio en Necrolimbo."
},

{
  id: "paso_02",
  numero: 2,
  fase: "Necrolimbo",
  titulo: "Primer Lugar de Gracia — Cementerio del Inicio",
  area: "Cementerio del Inicio",
  descripcion: "Llegas a las Tierras Intermedias en el Cementerio del Inicio. Activa el primer Lugar de Gracia para anclar tu progreso y explora los alrededores para conseguir equipo inicial.",
  detalle: [
    "Activa el Lugar de Gracia brillante dorado en el suelo — siempre actívalos al encontrarlos.",
    "Recoge los objetos del cementerio: fragmentos de hueso y flechas de hueso entre las lápidas.",
    "Habla con el espíritu de Varre (el NPC de máscara blanca al norte) — él te orienta hacia el Castillo de Velo Tormentoso.",
    "Explora el cementerio con cuidado; los esqueletos pueden reanimarse, dales un segundo golpe al caer.",
    "Sube la colina hacia el norte para encontrar el siguiente Lugar de Gracia: Orilla del Lago.",
    "Recoge la Espada Larga y el Escudo Reforzado de Madera de los cuerpos en el camino si no empezaste con ellos.",
  ],
  jefe: null,
  recompensa: "Orientación inicial, primeros objetos de consumibles",
  es_opcional: false,
  siguiente: "Activa el Lugar de Gracia Orilla del Lago y espera a Melina."
},

{
  id: "paso_03",
  numero: 3,
  fase: "Necrolimbo",
  titulo: "Conocer a Melina — Obtener a Torrente",
  area: "Orilla del Lago / Cualquier Lugar de Gracia",
  descripcion: "Tras activar tres o más Lugares de Gracia, Melina aparece mientras descansas. Ella te ofrece su 'dedo como prenda' y te entrega a Torrente, tu montura espectral.",
  detalle: [
    "Activa al menos los Lugares de Gracia: Cementerio del Inicio, Orilla del Lago y el de la Iglesia de la Elleh.",
    "Descansa en cualquier Lugar de Gracia; Melina aparecerá automáticamente en una cinemática.",
    "Acepta su propuesta — ella actuará como tu dedo de invocación y te permitirá subir de nivel.",
    "Recibes el Silbato de Torrente (Cítara) — úsalo para invocar a tu caballo espectral en exteriores.",
    "Torrente te permite moverte muy rápido, hacer saltos dobles y es esencial para explorar el mapa abierto.",
    "Desde ahora puedes subir de nivel descansando en cualquier Lugar de Gracia.",
  ],
  jefe: null,
  recompensa: "Torrente (montura espectral), capacidad de subir de nivel",
  es_opcional: false,
  siguiente: "Visita la Iglesia de la Elleh de noche para conocer a Renna."
},

{
  id: "paso_04",
  numero: 4,
  fase: "Necrolimbo",
  titulo: "Iglesia de la Elleh — Comerciante Kale y Renna",
  area: "Iglesia de la Elleh",
  descripcion: "La Iglesia de la Elleh contiene al comerciante Kale y, de noche, a la bruja Renna que te da las Campanas de Espíritu para invocar espectrales.",
  detalle: [
    "La Iglesia de la Elleh está al norte del Cementerio del Inicio, pasando el campamento de los soldados.",
    "Habla con Kale (el comerciante con sombrero de piel) — vende flechas, antorchas, el libro de Artes de Ceniza y el cuchillo de artesano.",
    "Compra el libro de Artes de Ceniza a Kale (3.000 runas) para poder comprar y aplicar cenizas de guerra.",
    "Visita la iglesia DE NOCHE (descansa en el Lugar de Gracia y avanza el tiempo) para que aparezca Renna en el techo.",
    "Habla con Renna; si ya tienes a Torrente, ella te dará la Campana de Espíritu y la Ceniza de Espíritu de los Lobos Sepultureros.",
    "La Campana de Espíritu es crucial — permite invocar aliados espectrales en combates contra jefes (dentro de zonas con arco dorado en el suelo).",
  ],
  jefe: null,
  recompensa: "Campana de Espíritu, Ceniza de los Lobos Sepultureros, acceso a comerciante",
  es_opcional: false,
  siguiente: "Sube de nivel varias veces y dirígete al norte, hacia las Ruinas de la Puerta Fronteriza."
},

{
  id: "paso_05",
  numero: 5,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Cueva de los Groveside",
  area: "Cueva de los Groveside",
  descripcion: "Cueva con lobos y un minijefe accesible muy pronto. Buen lugar para runas iniciales y conseguir una ceniza de espíritu de lobo mejorada.",
  detalle: [
    "La entrada está en el acantilado al este de la Iglesia de la Elleh, busca una apertura en la roca cerca de un árbol.",
    "Lleva antorcha o el hechizo Luz — la cueva está muy oscura.",
    "Los enemigos son lobos, que atacan en grupo; usa golpes cargados o esquiva hacia los lados.",
    "El jefe es el Lobo de las Nieves Cementerio — tiene mucha vida pero es lento.",
    "La recompensa es la Ceniza de Espíritu del Lobo Noble, una buena invocación de apoyo.",
  ],
  jefe: "Lobo de las Nieves Cementerio",
  recompensa: "Ceniza del Lobo Noble, runas",
  es_opcional: true,
  siguiente: "Regresa a la exploración de Necrolimbo."
},

{
  id: "paso_06",
  numero: 6,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Catacumbas de la Piedra de Tormenta",
  area: "Catacumbas de la Piedra de Tormenta",
  descripcion: "Catacumbas en la ladera este de la Colina de la Tormenta. Contienen un jefe y buena recompensa para invocaciones.",
  detalle: [
    "Localiza la entrada en la ladera este de la Colina de la Tormenta, al norte de Necrolimbo.",
    "Hay trampas de dardos en los pasillos — avanza con cuidado y activa las palancas para abrir puertas.",
    "Los enemigos son esqueletos; recuerda golpearlos una segunda vez al caer para evitar que se reanimen.",
    "El jefe es el Campeón del Cementerio — usa el pilar central para cubrirte de sus ataques en área.",
    "La recompensa es la Ceniza de Espíritu del Jinete Sepulturero, muy útil para distraer jefes.",
  ],
  jefe: "Campeón del Cementerio",
  recompensa: "Ceniza del Jinete Sepulturero",
  es_opcional: true,
  siguiente: "Continúa explorando Necrolimbo."
},

{
  id: "paso_07",
  numero: 7,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Cueva de Murkwater y Patches",
  area: "Cueva de Murkwater",
  descripcion: "En el río Murkwater al norte de Necrolimbo encontrarás esta cueva con un tesoro trampa y el NPC Patches, un vendedor recurrente de la saga.",
  detalle: [
    "Sigue el río al norte de la Iglesia de la Elleh hasta llegar a la cueva entre acantilados.",
    "Derrota a los bandidos en la entrada y activa el Lugar de Gracia interior.",
    "Abre el cofre trampa del fondo — aparece Patches y te pone en un aprieto.",
    "Cuando Patches pida misericordia, PERDÓNALO (no lo mates) para que se convierta en comerciante.",
    "Patches vende objetos únicos y tiene su propia misión que continúa en otras zonas del juego.",
    "Si lo matas, pierdes acceso a su inventario y su línea de misión.",
  ],
  jefe: "Patches (NPC hostil temporal)",
  recompensa: "Acceso a Patches como comerciante, objetos únicos",
  es_opcional: true,
  siguiente: "Patches puede reaparecer en Liurnia y otras zonas si lo perdonas."
},

{
  id: "paso_08",
  numero: 8,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Lago de Agheel y el Dragón",
  area: "Lago de Agheel",
  descripcion: "En el centro de Necrolimbo hay un gran lago donde vive el Dragón Agheel, una batalla espectacular con buenas recompensas.",
  detalle: [
    "El lago está en el centro de la zona; es fácil de ver desde Torrente.",
    "El Dragón Agheel aparece cuando te acercas al centro del lago — prepárate antes de entrar.",
    "Monta a Torrente para movilidad y ataca las patas traseras o la cola desde el caballo.",
    "Cuando se agacha para escupir fuego, retira a Torrente hacia los lados.",
    "Al morir suelta el Corazón del Dragón (necesario para el altar de dragones) y escalas de Agheel.",
    "Cerca del lago hay las Ruinas de Agheel con runas y objetos adicionales.",
  ],
  jefe: "Dragón Agheel",
  recompensa: "Corazón del Dragón, Escalas del Dragón, runas",
  es_opcional: true,
  siguiente: "Lleva el Corazón del Dragón al Altar de los Dragones al sur de Necrolimbo para aprender el Aliento de Dragón."
},

{
  id: "paso_09",
  numero: 9,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Evergaol de la Colina de la Tormenta",
  area: "Evergaol de la Colina de la Tormenta",
  descripcion: "Los Evergaoles son prisiones mágicas donde se enfrentan jefes especiales. Este contiene al Caballero del Crisol, uno de los más difíciles de Necrolimbo.",
  detalle: [
    "El Evergaol está en lo alto de la Colina de la Tormenta, al norte, cerca del camino al Castillo.",
    "Interactúa con el círculo de runas en el suelo para entrar — no puedes invocar cenizas de espíritu aquí.",
    "El Caballero del Crisol tiene ataques lentos pero potentes; aprende a esquivar hacia su lado izquierdo.",
    "Puedes invocar a otro jugador mediante el signo de invocación fuera del Evergaol.",
    "La recompensa es el Arte de Ceniza Incanto del Crisol: Alas, útil para personajes de magia.",
    "Este enemigo reaparece en versiones más fuertes en otras zonas del juego.",
  ],
  jefe: "Caballero del Crisol",
  recompensa: "Arte de Ceniza: Incanto del Crisol (Alas)",
  es_opcional: true,
  siguiente: "Regresa a la ruta principal hacia el Castillo de Velo Tormentoso."
},

{
  id: "paso_10",
  numero: 10,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Evergaol del Can Abandonado",
  area: "Evergaol del Can Abandonado (sur de Necrolimbo)",
  descripcion: "Este Evergaol al sur de Necrolimbo contiene al Héroe Antiguo de Zamor, un gigante de hielo con ataques de área.",
  detalle: [
    "Está al sur de Necrolimbo, en la orilla del lago.",
    "El Héroe Antiguo de Zamor usa ataques de hielo en área y torbellinos.",
    "Mantente cerca de sus pies para evitar la mayoría de sus ataques.",
    "Esquiva hacia adentro cuando hace el torbellino de hielo para evitar el área de efecto.",
    "La recompensa es el Arte de Ceniza Torbellino Antiguo — útil para armas de Destreza.",
  ],
  jefe: "Héroe Antiguo de Zamor",
  recompensa: "Arte de Ceniza: Torbellino Antiguo",
  es_opcional: true,
  siguiente: "Continúa hacia la Península del Llanto o al Castillo."
},

{
  id: "paso_11",
  numero: 11,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Península del Llanto",
  area: "Península del Llanto",
  descripcion: "La gran península al sur de Necrolimbo tiene múltiples mazmorras, un castillo y la única mazmorra tutorial real del juego.",
  detalle: [
    "Cruza el puente al sur para llegar a la Península del Llanto.",
    "La Cueva del Conocimiento (al norte de la península) actúa como tutorial extendido con texto instructivo en las paredes.",
    "El Castillo Morne al sur contiene al jefe Leonine Misbegotten y la Gran Espada de Morne.",
    "En la playa este hay una tumba con la invocación Latente Fantasma Imperial.",
    "Visita la Torre del Faro al extremo sur para obtener un talisman útil.",
    "Esta zona es opcional pero muy recomendada para principiantes por sus explicaciones en pantalla.",
  ],
  jefe: "Leonine Misbegotten (Castillo Morne)",
  recompensa: "Gran Espada de Morne, Talisman de la Torre, runas",
  es_opcional: true,
  siguiente: "Regresa al norte y prepárate para el Castillo de Velo Tormentoso."
},

{
  id: "paso_12",
  numero: 12,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Mina de Limgrave",
  area: "Mina de Limgrave",
  descripcion: "La primera mina del juego, fuente de Gemas de Afilado para mejorar armas con escalado de Fuerza y Destreza.",
  detalle: [
    "Está al este de la Iglesia de la Elleh, busca la entrada en el acantilado.",
    "Los mineros dentro son lentos pero tienen mucha vida; los ataques a la espalda son muy efectivos.",
    "Recoge todas las Gemas de Afilado (6 caras) del suelo y los cristales brillantes en las paredes.",
    "El minijefe al fondo es el Guardián de la Mina — derrótalo para el cofre con recompensa.",
    "Las gemas se llevan al herrero Hewg en la Mesa Redonda para mejorar armas.",
    "Hay una salida alternativa que lleva a un acantilado con vista a Necrolimbo.",
  ],
  jefe: "Guardián de la Mina",
  recompensa: "Gemas de Afilado x3, runas",
  es_opcional: true,
  siguiente: "Continúa acumulando mejoras antes del Castillo."
},

{
  id: "paso_13",
  numero: 13,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Cueva Costera y Collar de Rya",
  area: "Cueva Costera (costa oeste de Necrolimbo)",
  descripcion: "Esta cueva en la costa oeste esconde un jefe dueto y el collar de Rya, necesario para iniciar su línea de misión que lleva al Castillo del Volcán.",
  detalle: [
    "Está en la costa oeste de Necrolimbo, accesible a pie o con Torrente bajando el acantilado.",
    "Los jefes son dos Jefes Semi-Humanos — uno a la vez si usas el umbral de la puerta.",
    "La recompensa principal es el Collar de Rya que aparece en el botín.",
    "Lleva el collar a Rya (NPC en el Mirador de Liftside, Liurnia) para iniciar su misión.",
    "La misión de Rya eventualmente lleva al Castillo del Volcán (Volcano Manor) en el Monte Gelmir.",
    "Hay objetos adicionales en la cueva como carne curada y piedras de mejora.",
  ],
  jefe: "Jefes Semi-Humanos (dueto)",
  recompensa: "Collar de Rya, runas",
  es_opcional: true,
  siguiente: "Guarda el collar para entregárselo a Rya en Liurnia."
},

{
  id: "paso_14",
  numero: 14,
  fase: "Necrolimbo",
  titulo: "OPCIONAL — Ruinas de la Puerta Fronteriza (Aspid del Árbol)",
  area: "Ruinas de la Puerta Fronteriza",
  descripcion: "Las ruinas al norte de Necrolimbo tienen un Aspid del Árbol Áldano como jefe de zona, dando una Semilla del Árbol muy valiosa.",
  detalle: [
    "Las ruinas están en la transición entre Necrolimbo y la Colina de la Tormenta.",
    "El Aspid del Árbol (Ulcerated Tree Spirit) es un enemigo sinuoso con mucha vida — usa estocadas.",
    "Puede embestir y retorcerse; mantén distancia y ataca cuando esté en el suelo.",
    "La recompensa incluye una Semilla del Árbol Áldano (aumenta el número de usos de tu frasco).",
    "Entrega la Semilla del Árbol en cualquier Lugar de Gracia Menor con frasco para aumentar sus usos.",
    "Las ruinas tienen objetos adicionales repartidos por el área.",
  ],
  jefe: "Aspid del Árbol Áldano",
  recompensa: "Semilla del Árbol Áldano, runas",
  es_opcional: true,
  siguiente: "Con una Semilla más, estarás mejor preparado para el Castillo."
},

{
  id: "paso_15",
  numero: 15,
  fase: "Necrolimbo",
  titulo: "Preparación para el Castillo de Velo Tormentoso",
  area: "Necrolimbo general",
  descripcion: "Antes de intentar el Castillo de Velo Tormentoso, es importante tener un nivel adecuado y el arma mejorada. Dedica tiempo a farmear runas.",
  detalle: [
    "El nivel recomendado para entrar al Castillo es entre 25-35, con el arma al menos en +3.",
    "Farmea runas en el campamento de soldados al norte de la Iglesia de la Elleh (los jinetes a caballo dan muchas runas).",
    "Usa las runas doradas encontradas en el mundo para subir varios niveles de golpe.",
    "Lleva tus armas al herrero Hewg en la Mesa Redonda o usa las piedras de afilado con un kit de herrería portátil.",
    "Elige qué estadísticas subir según tu arma principal: Fuerza para armas pesadas, Destreza para rápidas, Mente/Inteligencia para magia.",
    "Asegúrate de tener varios usos del Frasco Polvo de Lágrimas configurados — tanto curación como mejora de FP según necesites.",
  ],
  jefe: null,
  recompensa: "Mejor preparación, niveles y equipo mejorado",
  es_opcional: false,
  siguiente: "Avanza hacia el Castillo de Velo Tormentoso."
},

{
  id: "paso_16",
  numero: 16,
  fase: "Necrolimbo",
  titulo: "Castillo de Velo Tormentoso — Interior y camino a Margit",
  area: "Castillo de Velo Tormentoso",
  descripcion: "El primer gran castillo del juego. Lleno de soldados, caballeros y trampas que culminan con el jefe Margit, el Augurio Marchito.",
  detalle: [
    "El castillo está en la cima de la Colina de la Tormenta, al norte de Necrolimbo.",
    "Activa todos los Lugares de Gracia dentro: Entrada del Castillo, Capilla del León, etc.",
    "El camino principal sube por la muralla — cuidado con las catapultas y los arqueros.",
    "Atajo importante: sube por la escalera de caracol a la derecha nada más entrar para llegar a la zona de la capilla.",
    "Recoge la llave de la mazmorra para liberar al mago Rogier, que puede ser invocado contra Margit.",
    "Antes del jefe, puedes comprar la Flor Pudiente que debilita a Margit.",
  ],
  jefe: null,
  recompensa: "Exploración del castillo, objetos y runas",
  es_opcional: false,
  siguiente: "Enfrenta a Margit, el Augurio Marchito en la puerta del castillo."
},

{
  id: "paso_17",
  numero: 17,
  fase: "Necrolimbo",
  titulo: "Jefe — Margit, el Augurio Marchito",
  area: "Castillo de Velo Tormentoso — Puerta Principal",
  descripcion: "Margit es el primer gran jefe obligatorio del juego. Un guardián antiguo con ataques rápidos y combinaciones largas que testea tus habilidades de esquiva.",
  detalle: [
    "Invoca al espectro de Rogier (señal dorada frente a la puerta) si tienes la Campana de Espíritu activa.",
    "Usa la Flor Pudiente para invocar a un NPC adicional que distrae a Margit.",
    "Fase 1: Margit usa bastón y espada; esquiva hacia su lado izquierdo (tu derecha) en sus combos.",
    "Fase 2 (mitad de vida): saca un martillo de luz y armas de luz — la combinación final tiene un retraso, no te adelantes al esquivar.",
    "Aprovecha las ventanas de ataque después de sus combos largos — 2-3 golpes máximo y retrocede.",
    "Si mueres, no pierdas las runas — recupéralas antes de intentarlo de nuevo.",
  ],
  jefe: "Margit, el Augurio Marchito",
  recompensa: "8.000 Runas, Talismán de Margit (reduce el requisito de nivel para armas)",
  es_opcional: false,
  siguiente: "Avanza por el interior del castillo hacia Godrick."
},

{
  id: "paso_18",
  numero: 18,
  fase: "Necrolimbo",
  titulo: "Jefe — Godrick el Injertado",
  area: "Castillo de Velo Tormentoso — Sala del Trono",
  descripcion: "Godrick es el primer Semidios obligatorio del juego. Su derrota otorga la Runa Áldana y permite acceder a la Mesa Redonda y a Liurnia.",
  detalle: [
    "Hay una señal de invocación de Nepheli Loux frente a la puerta — úsala, es una excelente aliada.",
    "Fase 1: Godrick lucha con sus múltiples brazos injertados; esquiva sus combos y ataca sus pies.",
    "Fase 2: se injerta el cuello de un dragón en el brazo — ahora escupe fuego en área; corre lateralmente al ver la animación.",
    "El ataque de agarre (cuando abre los brazos ampliamente) te mata de un golpe — esquiva hacia atrás.",
    "Atacar la cabeza del dragón cuando está baja hace daño adicional.",
    "Al vencerlo obtienes la Runa Áldana de Godrick y la Runa Mayor de Godrick (actívala en la Torre de los Dragones Gemelos).",
  ],
  jefe: "Godrick el Injertado",
  recompensa: "20.000 Runas, Runa Mayor de Godrick, Runa Áldana de Godrick",
  es_opcional: false,
  siguiente: "Ve a la Mesa Redonda o avanza a Liurnia de los Lagos."
},

{
  id: "paso_19",
  numero: 19,
  fase: "Necrolimbo",
  titulo: "La Mesa Redonda — Hub del juego",
  area: "Mesa Redonda",
  descripcion: "La Mesa Redonda es el hub central donde están el herrero, la sacerdotisa de los dedos, varios NPCs con misiones y el acceso a mejoras de equipo.",
  detalle: [
    "Llegas automáticamente tras derrotar a Godrick o mediante la invitación de Melina al activar muchos Lugares de Gracia.",
    "Hewg es el herrero — mejora tus armas y escudos aquí con las gemas y piedras encontradas.",
    "Enia es la sacerdotisa de los dedos — intercambia Runas Áldanas por poderes especiales de los Semidioses.",
    "Activa la Runa Mayor de Godrick en el punto de medianoche de la Mesa Redonda.",
    "Habla con todos los NPCs: Diallos, Nepheli Loux, D el cazador, el mago Rogier — todos tienen misiones.",
    "El recinto secreto tras la puerta sellada (requiere dos Runas Áldanas) contiene al Ancestro Putrefacto.",
  ],
  jefe: null,
  recompensa: "Acceso a mejoras, NPCs con misiones, poderes de runas",
  es_opcional: false,
  siguiente: "Activa la Runa Mayor de Godrick en la Torre de los Dragones Gemelos en Necrolimbo."
},

{
  id: "paso_20",
  numero: 20,
  fase: "Necrolimbo",
  titulo: "Torre de los Dragones Gemelos — Activar Runa Mayor",
  area: "Torre de los Dragones Gemelos, Necrolimbo este",
  descripcion: "Para aprovechar la Runa Mayor de Godrick debes activarla en la torre específica ubicada al este de Necrolimbo, custodiada por dragones.",
  detalle: [
    "La torre está en el extremo este de Necrolimbo, accesible cruzando el puente largo al este.",
    "Hay dos dragones custodios en el puente — puedes evitarlos montando a Torrente a máxima velocidad.",
    "Sube la torre (sin enemigos dentro) hasta la cima para activar la Runa Mayor de Godrick.",
    "Una vez activada, la Runa Mayor otorga +5 a todas las estadísticas mientras esté activa.",
    "Para mantener la Runa Mayor activa al morir necesitarás un Arco de la Runa (consumible que se vende en tiendas).",
    "Las runas mayores de otros Semidioses se activan en otras torres distribuidas por el mundo.",
  ],
  jefe: null,
  recompensa: "Runa Mayor de Godrick activada (+5 a todas las estadísticas)",
  es_opcional: false,
  siguiente: "Con la Runa Mayor activa, avanza hacia Liurnia de los Lagos."
},

// ══════════════════════════════════════
// FASE 2 — LIURNIA DE LOS LAGOS (Pasos 21-35)
// ══════════════════════════════════════

{
  id: "paso_21",
  numero: 21,
  fase: "Liurnia de los Lagos",
  titulo: "Llegada a Liurnia de los Lagos",
  area: "Sur de Liurnia",
  descripcion: "Liurnia es una vasta zona pantanosa dominada por un gran lago central. Al sur están las ruinas del ejército derrotado de Godrick y el primer pueblo con NPCs.",
  detalle: [
    "Cruza el paso de montaña al norte del Castillo de Velo Tormentoso (o usa el camino lateral que evita el castillo por completo).",
    "El camino lateral está a la izquierda justo antes del castillo — una senda estrecha entre rocas.",
    "Activa el Lugar de Gracia del Lago de Liurnia para anclar el punto de entrada.",
    "Monta a Torrente para moverse por el lago — andar a pie por el agua es muy lento.",
    "Los enemigos iniciales son soldados derrotados y cangrejos del lago — todos con buenas runas.",
    "El pueblo de Liurnia Sur tiene un comerciante y varios NPCs con misiones.",
  ],
  jefe: null,
  recompensa: "Acceso a Liurnia, nuevas zonas para explorar",
  es_opcional: false,
  siguiente: "Explora Liurnia en sentido horario comenzando por el oeste."
},

{
  id: "paso_22",
  numero: 22,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Iglesia de los Votos y Miriel",
  area: "Iglesia de los Votos (noreste de Liurnia)",
  descripcion: "La Iglesia de los Votos contiene a Miriel, una tortuga gigante sacerdote que puede enseñarte hechizos e incantos y tiene su propia historia.",
  detalle: [
    "La iglesia está al noreste de Liurnia, cerca del muro de piedra en la orilla del lago.",
    "Miriel es un NPC inamovible que actúa como maestro de hechizos e incantos — tráele pergaminos.",
    "Cualquier pergamino de hechizos que le des a Miriel expande su catálogo de enseñanzas.",
    "Tráele los pergaminos de la Academia de Raya Lúcida para desbloquear hechizos avanzados.",
    "Miriel también narra la historia del matrimonio entre Rennala y Radagon — importante para la lore.",
    "No lo ataques — es un NPC inocente y matarlo sería un desperdicio.",
  ],
  jefe: null,
  recompensa: "Acceso a hechizos e incantos adicionales",
  es_opcional: true,
  siguiente: "Visita la Academia de Raya Lúcida para obtener pergaminos que traerle."
},

{
  id: "paso_23",
  numero: 23,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Castillo de Caria y Loretta",
  area: "Castillo de Caria (noroeste de Liurnia)",
  descripcion: "El Castillo de Caria es el hogar abandonado de la familia de Ranni. Contiene excelentes recompensas y abre la misión de Ranni, una de las más importantes del juego.",
  detalle: [
    "Está al noroeste del lago — sigue la costa noroeste hasta ver el castillo en la elevación.",
    "Los enemigos dentro son Mano-Araña (dedos gigantes que corren) — aléjate y usa ataques a distancia.",
    "Recoge el Anillo de Hya y el Libro de Primus Glintstone en las torres laterales.",
    "El jefe es la Caballera Real Loretta — usa hechizos y una lanza; esquiva las flechas de magia.",
    "Al vencerla desbloqueas el Jardín de los Ojos Nocturnos donde vive Ranni.",
    "Ve al Jardín INMEDIATAMENTE tras vencer a Loretta para iniciar la misión de Ranni.",
  ],
  jefe: "Caballera Real Loretta",
  recompensa: "Gran Arco de Loretta, acceso al Jardín de los Ojos Nocturnos",
  es_opcional: true,
  siguiente: "Habla con Ranni en su torre para iniciar su línea de misión."
},

{
  id: "paso_24",
  numero: 24,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Inicio de la Misión de Ranni",
  area: "Torre de Ranni (noroeste de Liurnia)",
  descripcion: "Ranni la Bruja te encomienda encontrar el Cofre de Nokron. Su misión es la más larga del juego y conduce al mejor final alternativo.",
  detalle: [
    "Habla con Ranni en su torre — acepta servirla cuando te lo proponga.",
    "Ella te presenta a sus sirvientes: Iji (herrero), Blaidd (guerrero lobo) y Seluvis (mago).",
    "Habla con todos los sirvientes para obtener pistas sobre los siguientes pasos.",
    "Blaidd te dice que busques en el Río Siofra pistas sobre Nokron.",
    "Seluvis te da una poción para Nepheli Loux — NO se la des (arruina la misión de Nepheli); guárdala o dásela a Gideon.",
    "La misión requiere derrotar a Radahn en Caélida para desbloquear Nokron — planifica tu ruta.",
  ],
  jefe: null,
  recompensa: "Inicio de la misión de Ranni, acceso a sirvientes con misiones propias",
  es_opcional: true,
  siguiente: "Necesitarás derrotar a Radahn para continuar la misión de Ranni."
},

{
  id: "paso_25",
  numero: 25,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Río Siofra (zona subterránea)",
  area: "Río Siofra (acceso desde Necrolimbo este)",
  descripcion: "El Río Siofra es una zona subterránea bajo Necrolimbo accesible desde un pozo al este. Tiene su propia atmósfera y el NPC Blaidd.",
  detalle: [
    "El acceso está en el extremo este de Necrolimbo — busca el pozo con cadena en el suelo.",
    "El río tiene una atmósfera azul etérea con animales gigantes y animatrices antiguas.",
    "Encuentra a Blaidd al fondo del río — dice estar buscando algo para Ranni.",
    "Hay un Ancestro Espíritu como minijefe — derrótalo para runas y para una misión colateral.",
    "Los objetos flotantes de luz en el suelo son Semillas del Árbol Minor — úsalas para mejorar frascos.",
    "Esta zona conecta con Nokron si derrotas a Radahn (meteorito cae y abre el camino).",
  ],
  jefe: "Ancestro Espíritu",
  recompensa: "Semillas del Árbol Minor, runas, progreso misión de Ranni/Blaidd",
  es_opcional: true,
  siguiente: "Blaidd te indica que la clave está en derrotar a Radahn."
},

{
  id: "paso_26",
  numero: 26,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Túnel de Cristal Raya Lúcida",
  area: "Túnel de Cristal de Raya Lúcida",
  descripcion: "Una mina de cristal bajo el lago de Liurnia con abundantes Gemas de Magia para mejorar armas con escalado de Inteligencia.",
  detalle: [
    "El acceso está en las profundidades del lago, cerca del centro — busca el agujero en el suelo.",
    "Los Cristalinos son los enemigos principales — muy resistentes a armas físicas, usa magia o armas mágicas.",
    "Recoge tantas Gemas de Magia como puedas — son esenciales para builds de Inteligencia.",
    "El jefe es el Cristalino de Raya Lúcida — un golem de cristal con ataques en área.",
    "La recompensa incluye la Piedra de Cristal de Mallado, necesaria para ciertos hechizos.",
    "Hay un cofre secreto detrás de una pared falsa en el pasillo central.",
  ],
  jefe: "Cristalino de Raya Lúcida",
  recompensa: "Gemas de Magia x5, Piedra de Cristal Mallada",
  es_opcional: true,
  siguiente: "Dirígete a la Academia de Raya Lúcida."
},

{
  id: "paso_27",
  numero: 27,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Catacumbas de Raya Lúcida",
  area: "Catacumbas de Raya Lúcida",
  descripcion: "Catacumbas al suroeste de la Academia de Raya Lúcida con trampas de ventiladores giratorios y un buen jefe para invocación.",
  detalle: [
    "Están en el acantilado al suroeste de la Academia — busca la entrada en la roca.",
    "El peligro principal son los ventiladores giratorios que te empujan al vacío — cronometra tu avance.",
    "Hay palancas que detienen temporalmente los ventiladores — úsalas para avanzar.",
    "El jefe es el Dueto de Criptoblooms — dos plantas gigantes que se coordinan.",
    "La recompensa es la Ceniza de Espíritu del Jinete del Olvido, una de las mejores invocaciones.",
    "Explorar completamente da acceso a un área secreta con runas adicionales.",
  ],
  jefe: "Dueto de Criptoblooms",
  recompensa: "Ceniza del Jinete del Olvido",
  es_opcional: true,
  siguiente: "Continúa hacia la Academia de Raya Lúcida."
},

{
  id: "paso_28",
  numero: 28,
  fase: "Liurnia de los Lagos",
  titulo: "Academia de Raya Lúcida — Acceso y exploración",
  area: "Academia de Raya Lúcida",
  descripcion: "La gran Academia flotante en el centro del lago es el segundo gran dungeon obligatorio. Llena de magos, hechizos y secretos arquitectónicos.",
  detalle: [
    "Para entrar necesitas la Llave del Sello Áldano — se obtiene derrotando a un dragón al norte del lago o comprándola a un NPC.",
    "Hay un duplicado de la llave en el cofre de las Ruinas Veladas al noreste del lago.",
    "Activa todos los Lugares de Gracia: Puerta de la Academia, Sala del Debate, Biblioteca del Gran Estudio.",
    "Los magos enemigos son muy peligrosos a distancia; acércate rápido o esquiva entre columnas.",
    "Encuentra el Pergamino Primeval de Glintstone en la biblioteca para desbloquear los mejores hechizos.",
    "La llave secreta de la Torre de las Ranas desbloquea la sala del cofre con el Hechizo Cometa de Azur.",
  ],
  jefe: null,
  recompensa: "Hechizos de magia, Cometa de Azur, pergaminos",
  es_opcional: false,
  siguiente: "Encuentra y derrota a Rennala, Reina de la Luna Llena."
},

{
  id: "paso_29",
  numero: 29,
  fase: "Liurnia de los Lagos",
  titulo: "Jefe — Rennala, Reina de la Luna Llena",
  area: "Academia de Raya Lúcida — Gran Biblioteca",
  descripcion: "Rennala es la segunda Semidiosa obligatoria. Una batalla en dos fases radicalmente distintas: primero puzzle, luego combate épico.",
  detalle: [
    "Fase 1: Rennala está levitando mientras sus estudiantes cantan. Mata a los estudiantes con el escudo dorado (los que brillan más) para hacerla caer.",
    "Cuando cae, golpéala rápidamente hasta que vuelva a levitar — repite 3 veces.",
    "Fase 2: Rennala lucha directamente con magia y convoca criaturas — usa la Campana de Espíritu.",
    "Esquiva el Rayo de Luna (haz lateral hacia la derecha) y los proyectiles de magia estándar.",
    "Cuando convoca dragones o bestias, enfócate en esquivar y espera que desaparezcan.",
    "Al vencerla obtienes la Runa Áldana de Rennala — ella no muere y puede reiniciar tus estadísticas.",
  ],
  jefe: "Rennala, Reina de la Luna Llena",
  recompensa: "40.000 Runas, Runa Áldana de Rennala, capacidad de reiniciar estadísticas",
  es_opcional: false,
  siguiente: "Con dos Runas Áldanas, puedes acceder al cofre sellado de la Mesa Redonda."
},

{
  id: "paso_30",
  numero: 30,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Río Ainsel y Nokstella",
  area: "Río Ainsel / Nokstella, Ciudad Eterna",
  descripcion: "El Río Ainsel es una zona subterránea accesible desde un pozo en Liurnia. Conduce a Nokstella, una ciudad de las hormigas plateadas con excelentes objetos.",
  detalle: [
    "El acceso está en un pozo al este de Liurnia — busca la caja con cadena que baja.",
    "El río tiene criaturas de río y las Hormigas Plateadas que sueltan Escamas Plateadas (mejoran armas de magia).",
    "Encuentra el cuerpo pequeño de Miniatura de Ranni en esta zona — es parte de su misión.",
    "Habla con la Miniatura de Ranni varias veces en un Lugar de Gracia para avanzar su misión.",
    "Nokstella tiene cofres con la Campana Lunar y el Talisman de Escorpión de Magia.",
    "Al fondo del río está el Gran Ascensor a la Luna Llena que lleva al Lago Podrido.",
  ],
  jefe: "Ancestro de las Hormigas Plateadas",
  recompensa: "Campana Lunar, Talisman del Escorpión de Magia, Escamas Plateadas",
  es_opcional: true,
  siguiente: "Si sigues la misión de Ranni, avanza al Lago Podrido."
},

{
  id: "paso_31",
  numero: 31,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Rya y Volcano Manor (preparación)",
  area: "Mirador de Liftside, Liurnia norte",
  descripcion: "Rya es una NPC en Liurnia norte que inicia una misión que lleva al Volcano Manor en el Monte Gelmir. Requiere el collar recuperado en la Cueva Costera.",
  detalle: [
    "Rya está en el mirador cerca del Gran Ascensor Dectus, al norte de Liurnia.",
    "Si tienes el collar de la Cueva Costera (paso 13), devuélveselo para completar su petición.",
    "Ella te ofrece llevarla al Volcano Manor — acepta para iniciar su misión.",
    "Más adelante, Rya aparece en el Volcano Manor con una identidad diferente (Zoraya la Serpiente).",
    "Su misión tiene múltiples finales posibles — investiga bien antes de tomar decisiones.",
    "Esta misión es necesaria para desbloquear ciertos contenidos del Monte Gelmir.",
  ],
  jefe: null,
  recompensa: "Inicio de misión de Rya/Zoraya, acceso facilitado al Volcano Manor",
  es_opcional: true,
  siguiente: "Continúa hacia el norte para el Gran Ascensor Dectus."
},

{
  id: "paso_32",
  numero: 32,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Nokron, Ciudad Eterna (requiere Radahn)",
  area: "Nokron, Ciudad Eterna",
  descripcion: "Nokron es una ciudad subterránea accesible solo después de derrotar a Radahn en Caélida. Contiene la recompensa clave de la misión de Ranni.",
  detalle: [
    "Tras derrotar a Radahn, un meteorito cae en Necrolimbo sur — busca el nuevo agujero en el suelo.",
    "Baja por el agujero para llegar a Nokron, Ciudad Eterna.",
    "La ciudad tiene Fantasmas Guerreros y Jinetes Plateados como enemigos principales.",
    "Encuentra el Cofre Sagrado de Nokron en el templo central — contiene la Parte de la Espada de Onyx.",
    "La Parte de la Espada es la recompensa que Ranni necesita — entrégasela para avanzar su misión.",
    "Hay también el Talisman del Gran Árbol y varios objetos de magia ocultos.",
  ],
  jefe: "Ancestro Espíritu Noblísimo",
  recompensa: "Parte de la Espada de Onyx, Talisman del Gran Árbol",
  es_opcional: true,
  siguiente: "Entrega la Parte de la Espada a Ranni para avanzar su misión."
},

{
  id: "paso_33",
  numero: 33,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Cueva Templada de Liurnia",
  area: "Cueva Templada (costa oeste de Liurnia)",
  descripcion: "Una cueva con hechiceros enemigos y recompensas de hechizos útiles para builds de magia.",
  detalle: [
    "Está en la costa oeste de Liurnia, busca la entrada entre las rocas.",
    "Los hechiceros dentro son élite — tienen mucha vida y lanzan poderosos hechizos.",
    "Usa los pilares para cubrirte de los proyectiles de cristal.",
    "El jefe es la Hechicera del Cristal — derrótala para la recompensa principal.",
    "La recompensa es el Hechizo Cristal Torrencial — excelente para builds de mago.",
    "Hay varios pergaminos adicionales en cofres dentro de la cueva.",
  ],
  jefe: "Hechicera del Cristal",
  recompensa: "Hechizo Cristal Torrencial, pergaminos de magia",
  es_opcional: true,
  siguiente: "Con buenos hechizos, la Academia se vuelve más fácil."
},

{
  id: "paso_34",
  numero: 34,
  fase: "Liurnia de los Lagos",
  titulo: "OPCIONAL — Fondo de Raíz Profunda",
  area: "Fondo de Raíz Profunda",
  descripcion: "El Fondo de Raíz Profunda es una zona subterránea bajo las raíces del Árbol Áldano. La misión de Fia culmina aquí con el final de los Muertos que Descansan.",
  detalle: [
    "Accede desde las Alcantarillas de Leyndell (disponibles más tarde) o desde un pozo en el Río Siofra.",
    "Fia es la NPC en la Mesa Redonda que te abraza — sigue su misión dándole el Puñal Bendecido.",
    "En el Fondo de Raíz Profunda, encuentra a Fia con el cuerpo de Godwyn — habla con ella varias veces.",
    "El jefe final es el Dragón Lichdragon Fortissax — invocable si tienes el medallón dorado de Fia.",
    "Tras vencer al jefe, Fia completa su misión y te da objetos necesarios para el final alternativo.",
    "Este es el requisito para el final alternativo de los Muertos que Descansan.",
  ],
  jefe: "Lichdragon Fortissax",
  recompensa: "Incantación Muerte Antigua, medallón de Fia, progreso hacia final alternativo",
  es_opcional: true,
  siguiente: "Con la misión de Fia completada, avanza a las Montañas de los Gigantes."
},

{
  id: "paso_35",
  numero: 35,
  fase: "Liurnia de los Lagos",
  titulo: "Preparación para Caélida y Altus",
  area: "Liurnia norte — Gran Ascensor Dectus",
  descripcion: "Antes de avanzar, consolida tu progreso en Liurnia. Hay dos rutas para llegar a la Meseta de Altus: el Gran Ascensor Dectus o el paso secreto del Túnel de Raya Lúcida.",
  detalle: [
    "El Gran Ascensor Dectus requiere las dos mitades del Medallón de Dectus — una en Fuerte Haight (Necrolimbo este) y otra en Fuerte Faroth (Caélida norte).",
    "La ruta alternativa es el Túnel de Gran Ladera de Raya Lúcida — no requiere medallón pero tiene enemigos difíciles.",
    "Antes de subir a Altus, considera ir primero a Caélida para el Festival de Radahn (necesario para Nokron y la misión de Ranni).",
    "Nivel recomendado para Caélida: 50-60; para Altus: 60-70.",
    "Asegúrate de tener el arma principal al menos en +10 (no ceniza sagrada) o +4 (armas especiales).",
    "Habla con todos los NPCs de la Mesa Redonda antes de avanzar para no perder pasos de misiones.",
  ],
  jefe: null,
  recompensa: "Orientación para la ruta óptima",
  es_opcional: false,
  siguiente: "Dirígete a Caélida para el Festival de Radahn antes de subir a Altus."
},

// ══════════════════════════════════════
// FASE 3 — CAÉLIDA (Pasos 36-43)
// ══════════════════════════════════════

{
  id: "paso_36",
  numero: 36,
  fase: "Caélida",
  titulo: "Llegada a Caélida",
  area: "Sur de Caélida",
  descripcion: "Caélida es una zona árida e infectada de putrefacción escarlata. Es peligrosa desde el principio — sus enemigos son más fuertes que en Liurnia.",
  detalle: [
    "La entrada principal a Caélida es por el este de Necrolimbo, cruzando el río y subiendo la ladera.",
    "CUIDADO: hay un cofre trampa en las Ruinas de la Playa de Necrolimbo que teleporta directamente a Caélida — si caes ahí, escapa hacia el norte.",
    "Los primeros enemigos son los Perros de la Putrefacción y los Soldados Caelidianos — aplican el estado Putrefacción Escarlata.",
    "La Putrefacción Escarlata daña masivamente tu HP durante varios segundos — lleva ungüentos o hechizos de curación de estados.",
    "Activa el Lugar de Gracia de Smoldering Wall al sur como punto de anclaje.",
    "No te adentres demasiado sin equipo adecuado — el centro de Caélida tiene enemigos de nivel 80+.",
  ],
  jefe: null,
  recompensa: "Acceso a Caélida, nuevas zonas",
  es_opcional: false,
  siguiente: "Explora el sur de Caélida y avanza hacia el Castillo Redmane."
},

{
  id: "paso_37",
  numero: 37,
  fase: "Caélida",
  titulo: "OPCIONAL — Gurranq y el Santuario de la Bestia",
  area: "Santuario de la Bestia (norte de Caélida)",
  descripcion: "Gurranq es un NPC bestia que come Huesos de los Muertos a cambio de armas y hechizos únicos. Vive en el Santuario de la Bestia al norte de Caélida.",
  detalle: [
    "El Santuario de la Bestia está al norte de Caélida — sigue el camino principal hacia el norte.",
    "Gurranq quiere Huesos de los Muertos — recógelos de los cadáveres de muertos y en catacumbas.",
    "Cada entrega desbloquea recompensas: incantaciones de Bestia, armas, talismanes.",
    "Tras entregar varios huesos, Gurranq se vuelve hostil momentáneamente — derrótalo sin matarlo.",
    "Eventualmente se calma y continúa como NPC — sus recompensas son las mejores incantaciones bestia del juego.",
    "Las Catacumbas de la Bestia están cerca del santuario y tienen el jefe Bestia de los Huesos.",
  ],
  jefe: "Bestia de los Huesos (Catacumbas de la Bestia)",
  recompensa: "Incantaciones de Bestia, Armas de Bestia, Talisman de la Bestia",
  es_opcional: true,
  siguiente: "Continúa hacia el Castillo Redmane para el Festival de Radahn."
},

{
  id: "paso_38",
  numero: 38,
  fase: "Caélida",
  titulo: "OPCIONAL — Sellia, Ciudad de Hechicería",
  area: "Sellia, Ciudad de Hechicería",
  descripcion: "Una ciudad fantasma llena de magos elfos y barreras mágicas. Contiene varios hechizos únicos y la misión de Millicent.",
  detalle: [
    "Sellia está al noreste de Caélida, en la niebla escarlata.",
    "Las barreras de la ciudad se abren encendiendo las tres hogueras en lo alto de los tejados.",
    "La NPC Millicent aparece en la Iglesia de la Plaga al este — dale el Unguento de la Aguja para curarla.",
    "Millicent tiene una misión larga que culmina en el Campo Sacroníveo con Malenia.",
    "Hay múltiples hechizos de putrefacción en cofres dentro de las casas.",
    "El Árbol Fantasma en el centro de Sellia tiene una invocación y runas escarlata.",
  ],
  jefe: null,
  recompensa: "Hechizos de putrefacción, inicio misión de Millicent",
  es_opcional: true,
  siguiente: "Inicia la misión de Millicent y avanza al Festival de Radahn."
},

{
  id: "paso_39",
  numero: 39,
  fase: "Caélida",
  titulo: "OPCIONAL — Cueva de los Camelios",
  area: "Cueva de los Camelios (Caélida sur)",
  descripcion: "Una cueva con los Dragonhum Camelios como enemigos principales y una jefa dual al final.",
  detalle: [
    "La entrada está en el sur de Caélida, cerca del campamento de las bestias reptiles.",
    "Los Camelios escupen putrefacción escarlata — lleva mucha curación de estado.",
    "El jefe es el Dueto de Reinas de los Camelios — dos hembras con bastones de fuego.",
    "Enfócate en una a la vez, usa un pilar para dividirlas.",
    "La recompensa es la Ceniza de Espíritu de los Reptiles de Batalla, buena distracción.",
  ],
  jefe: "Reinas de los Camelios (dueto)",
  recompensa: "Ceniza de Reptiles de Batalla, runas",
  es_opcional: true,
  siguiente: "Avanza al Castillo Redmane."
},

{
  id: "paso_40",
  numero: 40,
  fase: "Caélida",
  titulo: "Festival de Radahn — Llegada al Castillo Redmane",
  area: "Castillo Redmane (extremo sur de Caélida)",
  descripcion: "El Castillo Redmane celebra el Festival de Radahn, un torneo para intentar derrotar al Semidios que retiene las estrellas. Aquí puedes invocar a múltiples aliados.",
  detalle: [
    "El Castillo Redmane está al extremo sureste de Caélida — sigue el camino costero.",
    "Habla con Jerren dentro del castillo para activar el Festival de Radahn.",
    "Si el festival no está activo, primero ve a conseguir las dos Runas Áldanas (Godrick y Rennala).",
    "El portal al campo de batalla de Radahn está al fondo del castillo — es un teletransporte.",
    "Activa el Lugar de Gracia dentro del castillo y prepárate con consumibles.",
    "Puedes invocar a MÚLTIPLES NPCs para la batalla de Radahn — busca sus signos dorados en el campo.",
  ],
  jefe: null,
  recompensa: "Preparación para la batalla de Radahn",
  es_opcional: false,
  siguiente: "Entra al campo de batalla y derrota a Radahn."
},

{
  id: "paso_41",
  numero: 41,
  fase: "Caélida",
  titulo: "Jefe — Radahn, Conquistador de las Estrellas",
  area: "Campo de Batalla de Radahn (costa de Caélida)",
  descripcion: "Radahn es uno de los jefes más épicos del juego. Una batalla a campo abierto donde puedes invocar múltiples aliados NPC.",
  detalle: [
    "Al entrar al campo de batalla, busca y activa TODOS los signos de invocación de NPCs en el suelo.",
    "Fase 1: Radahn dispara flechas gigantes al inicio — monta a Torrente y zigzaguea para esquivarlas.",
    "Los aliados sirven como distracción — enfócate en atacar las patas y la espalda de Radahn montado.",
    "Cuando cae de su caballo, atácalo a pie con combos completos.",
    "Fase 2 (mitad de vida): cae desde el cielo como un meteorito — CORRE lejos cuando desaparece del campo.",
    "En fase 2 usa más ataques mágicos y añade un segundo combo antes de retroceder.",
  ],
  jefe: "Radahn, Conquistador de las Estrellas",
  recompensa: "70.000 Runas, Runa Mayor de Radahn, Runa Áldana de Radahn, desbloqueo de Nokron",
  es_opcional: false,
  siguiente: "Con Radahn caído, un meteorito abre Nokron en Necrolimbo. Ve a explorar Nokron."
},

{
  id: "paso_42",
  numero: 42,
  fase: "Caélida",
  titulo: "OPCIONAL — Túmulo de los Héroes Sagrados",
  area: "Túmulo de los Héroes Sagrados (norte de Caélida)",
  descripcion: "Un gran túmulo-catacumbas con múltiples salas y el jefe Bestia del Clero Sagrado.",
  detalle: [
    "Está en la elevación norte de Caélida, cerca de la frontera con Altus.",
    "El interior tiene trampas de suelo (espinas) y enemigos esqueleto-sacerdotes.",
    "El jefe es la Bestia del Clero Sagrado — una criatura con ataques de fuego sagrado.",
    "La recompensa incluye el Arte de Ceniza Incantación de la Bestia Sagrada.",
    "Hay un cofre con un Amuleto de Resistencia a la Putrefacción muy útil en este juego.",
  ],
  jefe: "Bestia del Clero Sagrado",
  recompensa: "Arte de Ceniza: Incantación de la Bestia Sagrada, Amuleto de Resistencia",
  es_opcional: true,
  siguiente: "Prepárate para subir a la Meseta de Altus."
},

{
  id: "paso_43",
  numero: 43,
  fase: "Caélida",
  titulo: "OPCIONAL — Torre de Radahn (Runa Mayor)",
  area: "Torre de Radahn (noreste de Caélida)",
  descripcion: "La Torre de Radahn al noreste de Caélida permite activar su Runa Mayor, una de las más poderosas del juego.",
  detalle: [
    "La Torre de Radahn está al noreste de Caélida, en el acantilado — sube sin enemigos.",
    "Activa la Runa Mayor de Radahn en la cima para obtener +15% de HP máximo mientras esté activa.",
    "Esta es una de las runas mayores más fuertes del juego para cualquier build.",
    "Para mantenerla activa al morir necesitas consumir un Arco de la Runa.",
    "Combina con la Runa Mayor de Godrick para obtener tanto HP extra como mejora de estadísticas.",
  ],
  jefe: null,
  recompensa: "Runa Mayor de Radahn activada (+15% HP máximo)",
  es_opcional: true,
  siguiente: "Ahora sube a la Meseta de Altus."
},

// ══════════════════════════════════════
// FASE 4 — MESETA DE ALTUS + MONTE GELMIR (Pasos 44-55)
// ══════════════════════════════════════

{
  id: "paso_44",
  numero: 44,
  fase: "Meseta de Altus",
  titulo: "Ascenso a la Meseta de Altus",
  area: "Gran Ascensor Dectus / Túnel de Gran Ladera",
  descripcion: "La Meseta de Altus es una tierra dorada y fértil que rodea Leyndell, la capital. Puedes subir por el Gran Ascensor Dectus o por el túnel secreto en Liurnia.",
  detalle: [
    "Ruta A — Gran Ascensor Dectus: necesitas las dos mitades del Medallón de Dectus. Media parte en el Fuerte Haight (Necrolimbo este, cofre en la torre) y la otra en el Fuerte Faroth (Caélida norte).",
    "Ruta B — Túnel de Gran Ladera de Raya Lúcida: accesible desde el norte de Liurnia sin medallón; tiene el jefe Magma Wyrm Makar.",
    "Si usas el Ascensor Dectus, activa el Lugar de Gracia de la cima inmediatamente.",
    "La Meseta de Altus tiene enemigos de nivel 60-80 — prepárate con el arma en +15 o superior.",
    "Explora la zona sur de Altus donde hay ruinas doradas con runas abundantes.",
    "El camino a Leyndell está al este de la Meseta — pasa por el Puente de Erdtree.",
  ],
  jefe: "Magma Wyrm Makar (ruta del túnel, opcional)",
  recompensa: "Acceso a la Meseta de Altus",
  es_opcional: false,
  siguiente: "Explora la Meseta de Altus y el Monte Gelmir antes de ir a Leyndell."
},

{
  id: "paso_45",
  numero: 45,
  fase: "Meseta de Altus",
  titulo: "OPCIONAL — Catacumbas del Crisol",
  area: "Catacumbas del Crisol (Meseta de Altus)",
  descripcion: "Catacumbas con los enemigos del Crisol y el jefe Dúo de Caballeros del Crisol, que recompensa con una de las mejores invocaciones del juego.",
  detalle: [
    "Están en el sur de Altus, en las laderas al este del Ascensor Dectus.",
    "Los Caballeros del Crisol son resistentes y usan ataques del Crisol con colas y alas emergentes.",
    "El jefe es el Dúo de Caballeros del Crisol — lucha primero contra el de cola, luego el de alas.",
    "La recompensa es la Ceniza de Espíritu del Caballero del Crisol, una de las más útiles.",
    "Hay incantos del Crisol adicionales en cofres laterales.",
  ],
  jefe: "Dúo de Caballeros del Crisol",
  recompensa: "Ceniza del Caballero del Crisol, Incantos del Crisol",
  es_opcional: true,
  siguiente: "Continúa explorando Altus."
},

{
  id: "paso_46",
  numero: 46,
  fase: "Meseta de Altus",
  titulo: "OPCIONAL — Castillo del Sol de Medianoche",
  area: "Castillo del Sol de Medianoche (este de Altus)",
  descripcion: "Un castillo al este de la Meseta con la misión de Hyetta (dedos fantasma) y acceso a la misión del Frenzied Flame.",
  detalle: [
    "Está en el extremo este de Altus, en la elevación sobre el lago.",
    "Hyetta es una NPC que aparece en varios puntos de Liurnia y Altus — dale uvas de faros para avanzar su misión.",
    "El castillo tiene el NPC Shabriri que te habla de la Llama Frenética.",
    "Hay el hechizo Espada de Noche y Llama en un cofre interior.",
    "El jefe es el Rey Omen Fantasma — derrótalo para el acceso completo.",
    "Esta zona conecta con la misión del final de la Llama Frenética.",
  ],
  jefe: "Rey Fantasma Omen",
  recompensa: "Hechizo Espada de Noche y Llama, progreso misión Hyetta",
  es_opcional: true,
  siguiente: "Visita el Monte Gelmir y el Volcano Manor."
},

{
  id: "paso_47",
  numero: 47,
  fase: "Monte Gelmir",
  titulo: "OPCIONAL — Volcano Manor y misiones de Tanith",
  area: "Monte Gelmir / Volcano Manor",
  descripcion: "El Volcano Manor al noroeste de Altus es el hogar de la organización asesina de Tanith. Contiene misiones únicas y buenas recompensas.",
  detalle: [
    "El acceso principal al Monte Gelmir es por el camino al noroeste de Altus o con Rya desde Liurnia.",
    "El Volcano Manor es la mansión de Tanith — habla con ella para unirte a los Asesinos del Credo.",
    "Las misiones de asesinato de Tanith (3 en total) te llevan a invadir a NPCs en otros mundos.",
    "Cada asesinato recompensa con armas o armaduras únicas.",
    "La NPC Rya/Zoraya está aquí — su misión se resuelve aquí de múltiples maneras.",
    "El jefe principal del Volcano Manor es Rykard, Señor de la Blasfemia — en la sala del volcán interior.",
  ],
  jefe: null,
  recompensa: "Armas únicas de asesino, progreso misión de Rya/Zoraya",
  es_opcional: true,
  siguiente: "Completa las misiones de Tanith y enfréntate a Rykard."
},

{
  id: "paso_48",
  numero: 48,
  fase: "Monte Gelmir",
  titulo: "OPCIONAL — Rykard, Señor de la Blasfemia",
  area: "Volcano Manor — Sala del Volcán",
  descripcion: "Rykard es un Semidios opcional que fusionó su cuerpo con una serpiente gigante del volcán. Su batalla requiere una lanza especial.",
  detalle: [
    "Dentro de la sala del volcán encontrarás la Lanza Dios-Devorador en el suelo — equípala ANTES de la pelea.",
    "Fase 1: Rykard está en forma de serpiente — usa el Arte de Ceniza de la Lanza Dios-Devorador (L2/LT) repetidamente.",
    "Mantente a distancia media y usa el arte de ceniza cuando esté quieto.",
    "Fase 2: emerge del magma en forma humana con una espada gigante — sigue usando el arte de ceniza.",
    "Esquiva las lluvias de fuego alejándote rápidamente.",
    "La recompensa incluye su Runa Áldana y la Runa Mayor de Rykard (+3% HP por kill).",
  ],
  jefe: "Rykard, Señor de la Blasfemia",
  recompensa: "Runa Áldana de Rykard, Runa Mayor de Rykard, Lanza Dios-Devorador (si la recoges)",
  es_opcional: true,
  siguiente: "Con Rykard derrotado, avanza hacia Leyndell."
},

{
  id: "paso_49",
  numero: 49,
  fase: "Meseta de Altus",
  titulo: "OPCIONAL — Catacumbas de la Ciudad de Atlus",
  area: "Catacumbas de la Ciudad de Atlus",
  descripcion: "Catacumbas bajo la Meseta de Altus con el jefe Ancestro Putrefacto mejorado y buenas recompensas de invocación.",
  detalle: [
    "Están en el norte de Altus, busca la entrada en las laderas cerca de Leyndell.",
    "El camino tiene trampas de dardos y muertos vivientes en grupos.",
    "El jefe es el Ancestro Putrefacto — versión más fuerte que la de la Mesa Redonda.",
    "La recompensa es la Ceniza de Espíritu de los Jinetes del Árbol, muy útil para distracción.",
    "Hay un pasaje secreto que lleva a un cofre con una Semilla del Árbol.",
  ],
  jefe: "Ancestro Putrefacto",
  recompensa: "Ceniza de los Jinetes del Árbol, Semilla del Árbol",
  es_opcional: true,
  siguiente: "Avanza hacia Leyndell."
},

{
  id: "paso_50",
  numero: 50,
  fase: "Meseta de Altus",
  titulo: "Leyndell, Capital Real — Entrada y exploración",
  area: "Leyndell, Capital Real",
  descripcion: "Leyndell es la gran ciudad capital custodiada por los caballeros del Árbol. Es una de las zonas más grandes y elaboradas del juego.",
  detalle: [
    "La entrada principal está por las Puertas Exteriores al este de la Meseta de Altus.",
    "Para entrar necesitas al menos dos Runas Áldanas — las guardias lo exigen.",
    "Activa todos los Lugares de Gracia: Puertas Exteriores, Avenida Capital, Palacio Este, etc.",
    "Los Caballeros del Árbol Dorado son los enemigos estándar — resistentes y coordinados.",
    "Hay múltiples NPCs con misiones en la ciudad: D hermano, Dung Eater, Goldmask, Corhyn.",
    "La ciudad tiene múltiples niveles — explora cada rincón para no perderte objetos clave.",
  ],
  jefe: null,
  recompensa: "Exploración de Leyndell, objetos únicos, progreso de misiones",
  es_opcional: false,
  siguiente: "Localiza al Godfrey Espectral y a Morgott."
},

{
  id: "paso_51",
  numero: 51,
  fase: "Meseta de Altus",
  titulo: "Jefe — Godfrey Espectral (Leyndell)",
  area: "Leyndell — Sala del Trono Exterior",
  descripcion: "La imagen espectral de Godfrey, el Primer Lord Áldano, custodia la entrada a la sala del trono. Es un jefe de habilidad, sin mecánicas complicadas.",
  detalle: [
    "Godfrey Espectral está en la gran sala ante el árbol — es una sombra dorada, no el jefe real.",
    "Sus ataques son directos: hacha y pisotón; aprende el ritmo de sus combos.",
    "El pisotón crea ondas de tierra — salta cuando el suelo ondula para evitar el daño.",
    "No hay fase 2 especial — es un enemigo lineal pero con mucha vida.",
    "Puedes usar la Campana de Espíritu aquí.",
    "Al vencerlo se abre el paso a Morgott.",
  ],
  jefe: "Godfrey, Primer Lord Áldano (espectral)",
  recompensa: "Acceso al interior del árbol y a Morgott",
  es_opcional: false,
  siguiente: "Avanza hasta la sala de Morgott."
},

{
  id: "paso_52",
  numero: 52,
  fase: "Meseta de Altus",
  titulo: "Jefe — Morgott, el Rey Augur",
  area: "Leyndell — Sala del Trono",
  descripcion: "Morgott es el Semidios que protege Leyndell. Es la versión completa de Margit y uno de los jefes más complejos de la historia principal.",
  detalle: [
    "Morgott recuerda a Margit pero con más ataques: añade espada sagrada, lanza de luz y lluvia de dagas.",
    "Invoca al espectro de Melina si tienes la Campana de Espíritu — ella puede usarse aquí.",
    "El ataque de la lanza de lluvia tiene un retraso grande — espera a que todas las lanzas caigan antes de moverte.",
    "La espada sagrada aparece en fase 2 — tarda en materializarse, aprovecha ese tiempo para atacar.",
    "Mantente cerca de él para evitar los ataques a distancia y aprovecha las ventanas de 2-3 golpes.",
    "Al vencerlo, Melina te dice que hay que ir a las Montañas de los Gigantes para quemar el Árbol.",
  ],
  jefe: "Morgott, el Rey Augur",
  recompensa: "80.000 Runas, Runa Mayor de Morgott, Runa Áldana de Morgott",
  es_opcional: false,
  siguiente: "Morgott caído — el camino hacia las Montañas de los Gigantes se abre. Pero antes, explora las zonas opcionales."
},

{
  id: "paso_53",
  numero: 53,
  fase: "Meseta de Altus",
  titulo: "OPCIONAL — Alcantarillas de Leyndell",
  area: "Alcantarillas de Leyndell",
  descripcion: "Bajo Leyndell hay un laberinto de alcantarillas con el acceso al Fondo de Raíz Profunda y la Llama Frenética.",
  detalle: [
    "Accede por el agujero en el suelo en el este de Leyndell, cerca del árbol gigante.",
    "Las alcantarillas tienen los Tentáculos (Fingercreepers) y los Hombres de las Alcantarillas.",
    "Encuentra el Lugar de Gracia de las Alcantarillas y explora los pasajes.",
    "El cofre trampa de las alcantarillas teletransporta al Fondo de Raíz Profunda — importante para la misión de Fia.",
    "Hay el hechizo Pest Threads en las alcantarillas.",
    "El camino al final de la Llama Frenética pasa por las Catacumbas de la Llama más al fondo.",
  ],
  jefe: "Watchdog Doblado",
  recompensa: "Hechizo Pest Threads, acceso al Fondo de Raíz Profunda y Llama Frenética",
  es_opcional: true,
  siguiente: "El Fondo de Raíz Profunda tiene la misión de Fia y el final de los Muertos."
},

{
  id: "paso_54",
  numero: 54,
  fase: "Zonas Subterráneas",
  titulo: "OPCIONAL — Palacio de Mohgwyn",
  area: "Palacio de Mohgwyn",
  descripcion: "El Palacio de Mohgwyn es una zona oculta de sangre eterna donde vive Mohg, Señor de la Sangre, el padre adoptivo de Miquella.",
  detalle: [
    "Acceso A: completar la misión de Varre (el NPC de la máscara blanca) — te teletransporta directamente.",
    "Acceso B: encontrar el portal en el Campo Sacroníveo (requiere Haligtree abierto).",
    "El palacio está bañado en sangre — los enemigos Albinauric son abundantes y fáciles de farmear runas.",
    "El jefe es Mohg, Señor de la Sangre — tiene un ritual de sangre en fase 2 que reduce tu HP máximo.",
    "Para contrarrestar el ritual, usa el Ungüento Purificador justo cuando dice '¡Nihil!' por tercera vez.",
    "Mohg recompensa con la Runa Áldana de Mohg y su arma única, el Tridente de Mohg.",
  ],
  jefe: "Mohg, Señor de la Sangre",
  recompensa: "Runa Áldana de Mohg, Tridente de Mohg, acceso al DLC Shadow of the Erdtree",
  es_opcional: true,
  siguiente: "Con Mohg derrotado, el camino al DLC Shadow of the Erdtree queda abierto."
},

{
  id: "paso_55",
  numero: 55,
  fase: "Meseta de Altus",
  titulo: "Recolectar el Medallón de Rold antes de avanzar",
  area: "Leyndell, Capital Real",
  descripcion: "Tras vencer a Morgott, obtén el Medallón de Rold de su cuerpo — es obligatorio para subir a las Montañas de los Gigantes.",
  detalle: [
    "El Medallón de Rold aparece en el inventario automáticamente tras derrotar a Morgott.",
    "También puedes usar el Medallón Secreto dividido en dos mitades para ir al Campo Sacroníveo (ruta alternativa).",
    "La mitad sur del Medallón Secreto está en las manos de Albus, un anciano disfrazado en el pueblo de Albinaurics en Liurnia.",
    "La mitad norte está en el Castillo Sol en las Montañas de los Gigantes (paso 57).",
    "Con ambas mitades combinadas, el Gran Ascensor Rold permite ir al Campo Sacroníveo en lugar de las Montañas.",
    "Asegúrate de tener el arma en +20 o superior y el nivel 70+ antes de avanzar.",
  ],
  jefe: null,
  recompensa: "Medallón de Rold, preparación completa",
  es_opcional: false,
  siguiente: "Ve al Gran Ascensor de Rold para subir a las Montañas de los Gigantes."
},

// ══════════════════════════════════════
// FASE 5 — MONTAÑAS DE LOS GIGANTES (Pasos 56-62)
// ══════════════════════════════════════

{
  id: "paso_56",
  numero: 56,
  fase: "Montañas de los Gigantes",
  titulo: "Gran Ascensor de Rold — Subida a las Montañas",
  area: "Gran Ascensor de Rold",
  descripcion: "El Gran Ascensor de Rold lleva desde Leyndell hasta las heladas Montañas de los Gigantes. Para activarlo necesitas el Medallón de Rold que deja caer Morgott.",
  detalle: [
    "El ascensor está al este de Leyndell, pasando el puente del árbol — activa el Lugar de Gracia de Rold.",
    "Usa el Medallón de Rold en el punto indicado del ascensor para subirlo.",
    "Alternativamente, hay un medallón secreto dividido en dos mitades que abre una ruta diferente al Campo Sacroníveo.",
    "Las Montañas de los Gigantes tienen una atmósfera nevada e inhóspita.",
    "Los enemigos son los Gigantes de las Nieves, Perros de las Nieves y los Troll del Hielo.",
    "Activa el Lugar de Gracia de Zamor Ruins nada más llegar.",
  ],
  jefe: null,
  recompensa: "Acceso a las Montañas de los Gigantes",
  es_opcional: false,
  siguiente: "Explora las Montañas de los Gigantes hacia el norte y el Castillo Sol."
},

{
  id: "paso_57",
  numero: 57,
  fase: "Montañas de los Gigantes",
  titulo: "OPCIONAL — Castillo Sol",
  area: "Castillo Sol (norte de las Montañas de los Gigantes)",
  descripcion: "Un castillo en ruinas custodiado por soldados de las Montañas y el jefe Comandante Niall. Contiene la mitad norte del Medallón Secreto del Campo Sacroníveo.",
  detalle: [
    "El Castillo Sol está en el norte de las Montañas — sigue el camino nevado hacia el norte.",
    "El interior tiene soldados de élite y trampas con los Caballeros Fantasma de Niall.",
    "El jefe es el Comandante Niall — convoca dos caballeros fantasma que debes eliminar primero.",
    "Elimina ambos caballeros fantasma antes de enfocarte en Niall.",
    "En la torre detrás del jefe hay la mitad norte del Medallón Secreto del Campo Sacroníveo.",
    "El medallón completo (combinado con la mitad sur de Liurnia) permite acceder al Campo Sacroníveo donde está Malenia.",
  ],
  jefe: "Comandante Niall",
  recompensa: "Mitad norte del Medallón Secreto, acceso potencial al Campo Sacroníveo",
  es_opcional: true,
  siguiente: "Con el medallón completo, podrás acceder al Campo Sacroníveo desde el Ascensor Rold."
},

{
  id: "paso_58",
  numero: 58,
  fase: "Montañas de los Gigantes",
  titulo: "OPCIONAL — Campo Sacroníveo y Malenia",
  area: "Campo Sacroníveo / Árbol Hierático de Miquella",
  descripcion: "El Campo Sacroníveo es una zona oculta accesible con el Medallón Secreto. Contiene el Árbol Hierático de Miquella y la jefa más difícil del juego: Malenia.",
  detalle: [
    "Usa el Medallón Secreto completo en el Gran Ascensor Rold — selecciona la opción de 'elevar con el poder secreto'.",
    "El Campo Sacroníveo está cubierto de flores doradas infectadas de putrefacción escarlata.",
    "El Árbol Hierático de Miquella es una mazmorra de varios pisos con Caballeros de Miquella como enemigos.",
    "El jefe es Malenia, Hoja de Miquella — la jefa más difícil del juego base.",
    "Malenia SE CURA con cada golpe que aterriza en ti, incluso si bloqueas. No hay excepción.",
    "Fase 2: se transforma en la Diosa de la Putrefacción y añade ataques de flores de putrefacción en área.",
  ],
  jefe: "Malenia, Hoja de Miquella / Diosa de la Putrefacción",
  recompensa: "Runa Áldana de Malenia, Alma de Malenia (para crear su espada), Runa Mayor de Malenia",
  es_opcional: true,
  siguiente: "Con Malenia derrotada, regresa a las Montañas de los Gigantes para la Forja."
},

{
  id: "paso_59",
  numero: 59,
  fase: "Montañas de los Gigantes",
  titulo: "Lago de los Lamentos y camino a la Forja",
  area: "Lago de los Lamentos / Cimas de los Gigantes",
  descripcion: "El lago helado al norte de las Montañas tiene ruinas antiguas. Debes cruzarlo para llegar a la Forja de los Gigantes.",
  detalle: [
    "El lago tiene los Gigantes de Hielo — muy lentos pero enormes; rodéalos con Torrente.",
    "Las Ruinas de las Cimas tienen el Incanto Rugido de los Dragones en un cofre.",
    "La Iglesia de las Nieves en el norte tiene un Lugar de Gracia y un NPC con información sobre el fuego.",
    "Hay una bestia-jefe de nivel avanzado en las cimas — opcional pero con buena recompensa.",
    "Activa todos los Lugares de Gracia del área para facilitarte el regreso.",
    "El camino a la Forja está en el extremo norte — sube por el camino helado.",
  ],
  jefe: null,
  recompensa: "Incanto Rugido de Dragones, exploración de lore",
  es_opcional: false,
  siguiente: "Avanza hacia la Forja de los Gigantes."
},

{
  id: "paso_60",
  numero: 60,
  fase: "Montañas de los Gigantes",
  titulo: "La Forja de los Gigantes — Quemar el Árbol Áldano",
  area: "Forja de los Gigantes",
  descripcion: "La Forja de los Gigantes es el objetivo final de las Montañas. Aquí Melina pide que quemes el Árbol Áldano para abrir el camino a Farum Azula.",
  detalle: [
    "La Forja está en el extremo norte de las Montañas — pasa por los Gigantes dormidos en el camino.",
    "En la Forja hay un Gigante de las Llamas dormido — para avanzar debes llegar a su cabeza.",
    "Activa el Lugar de Gracia dentro de la Forja antes de cualquier decisión.",
    "DECISIÓN IMPORTANTE: Si quieres el final de la Llama Frenética, aquí debes liberarla ANTES de quemar el árbol.",
    "Si quemas el árbol normalmente, Melina se sacrifica para iniciar el fuego.",
    "Al quemar el árbol, el tiempo salta y te despiertas en Farum Azula en Desmoronamiento.",
  ],
  jefe: null,
  recompensa: "Acceso a Farum Azula, avance en la historia principal",
  es_opcional: false,
  siguiente: "Despertarás en Farum Azula en Desmoronamiento. La parte final del juego comienza."
},

// ══════════════════════════════════════
// FASE 6 — FARUM AZULA EN DESMORONAMIENTO (Pasos 61-65)
// ══════════════════════════════════════

{
  id: "paso_61",
  numero: 61,
  fase: "Farum Azula en Desmoronamiento",
  titulo: "Llegada a Farum Azula",
  area: "Farum Azula en Desmoronamiento",
  descripcion: "Farum Azula es una ciudad ancestral que se desmorona en el vacío. Es la zona final antes de los jefes del endgame.",
  detalle: [
    "Despiertas en el Lugar de Gracia de Templo Mayor al inicio de Farum Azula.",
    "La zona tiene Bestias-Caballero (Beastmen) como enemigos principales — son agresivos y rápidos.",
    "Hay dragones volando por las plataformas — pueden escupir fuego en área desde el aire.",
    "Activa todos los Lugares de Gracia en orden: Templo Mayor, Capilla del Dios-Bestia, Pasaje de los Sacerdotes.",
    "El NPC Gurranq aparece al inicio con su historia final — habla con él.",
    "Hay buenas armas de Bestia en cofres a lo largo de la zona.",
  ],
  jefe: null,
  recompensa: "Exploración, armas de Bestia, preparación para jefes finales",
  es_opcional: false,
  siguiente: "Avanza hacia el jefe Bestia Ancestral y luego Maliketh."
},

{
  id: "paso_62",
  numero: 62,
  fase: "Farum Azula en Desmoronamiento",
  titulo: "OPCIONAL — Bestia Ancestral",
  area: "Farum Azula — Arena de la Bestia Ancestral",
  descripcion: "La Bestia Ancestral es el fin de la línea de misión de Gurranq y un jefe brutal con ataques de trueno.",
  detalle: [
    "La arena está en el sur de Farum Azula — accede por el puente de piedra flotante.",
    "La Bestia Ancestral ataca con energía de trueno y golpes físicos masivos.",
    "Sus ataques de trueno dejan marcas en el suelo — aléjate de ellas antes de que exploten.",
    "El salto con aplastamiento es su ataque más poderoso — esquiva hacia los lados.",
    "Esta es la conclusión de la misión de Gurranq/Marika.",
    "La recompensa es el Incanto Rugido Ancestral, uno de los mejores del juego.",
  ],
  jefe: "Bestia Ancestral",
  recompensa: "Incanto Rugido Ancestral",
  es_opcional: true,
  siguiente: "Avanza hacia Maliketh."
},

{
  id: "paso_63",
  numero: 63,
  fase: "Farum Azula en Desmoronamiento",
  titulo: "Jefe — Maliketh, la Bestia de la Noche",
  area: "Farum Azula — Cúpula del Templo",
  descripcion: "Maliketh es uno de los jefes más difíciles y espectaculares del juego. Guarda la Runa de la Muerte y su derrota transforma Leyndell en Capital de Cenizas.",
  detalle: [
    "Fase 1: Maliketh aparece como el Can Bestia — usa un hacha enorme y es muy agresivo.",
    "En fase 1, usa los pilares de la arena para cubrirte y ataca después de sus grandes combos.",
    "Fase 2 (mitad de vida): revela su forma real con espada negra — ataques más variados y rápidos.",
    "Sus ataques de la espada negra aplican Muerte — el efecto te mata instantáneamente al llenarse la barra.",
    "Esquiva HACIA DENTRO de sus combos largos para evitar los últimos golpes.",
    "Al vencerlo, Leyndell se transforma en Capital de Cenizas — ya no podrás acceder a zonas previas de Leyndell.",
  ],
  jefe: "Maliketh, la Bestia de la Noche",
  recompensa: "120.000 Runas, Runa de la Muerte, acceso a Capital de Cenizas",
  es_opcional: false,
  siguiente: "Regresa a Leyndell, ahora Capital de Cenizas, para los jefes finales."
},

// ══════════════════════════════════════
// FASE 7 — CAPITAL DE CENIZAS + JEFES FINALES (Pasos 64-70)
// ══════════════════════════════════════

{
  id: "paso_64",
  numero: 64,
  fase: "Capital de Cenizas",
  titulo: "Leyndell, Capital de Cenizas — Nueva exploración",
  area: "Leyndell, Capital de Cenizas",
  descripcion: "Leyndell ha sido destruida por las cenizas tras la quema del Árbol. Los Caballeros del Árbol son sustituidos por los Guerreros de Cenizas.",
  detalle: [
    "Llegas a la Capital de Cenizas desde Farum Azula vía la Mesa Redonda o avanzando.",
    "El ambiente es completamente diferente: cenizas, colores apagados y nuevos enemigos.",
    "Los NPCs con misiones en Leyndell (Dung Eater, Goldmask) tienen sus etapas finales aquí.",
    "Habla con todos los NPCs antes de avanzar — algunas misiones se completan definitivamente aquí.",
    "La ruta a los jefes pasa por el árbol caído en el centro de la ciudad.",
    "Activa el Lugar de Gracia del Árbol en la Capital de Cenizas.",
  ],
  jefe: null,
  recompensa: "Objetos únicos de Capital de Cenizas, conclusión de misiones",
  es_opcional: false,
  siguiente: "Avanza hacia Sir Gideon Ofnir."
},

{
  id: "paso_65",
  numero: 65,
  fase: "Capital de Cenizas",
  titulo: "Jefe — Sir Gideon Ofnir, el Todovidente",
  area: "Capital de Cenizas — Ante-sala del Elden Trono",
  descripcion: "Gideon Ofnir, el líder de los Sin Muerte, te bloquea el paso al trono. Es un jefe de hechizos que refleja tus propios poderes.",
  detalle: [
    "Gideon usa todos los hechizos e incantos de los Semidioses que has derrotado — los conoce por su magia.",
    "Si derrotaste a Malenia, usará la lluvia de flores de putrefacción — prepara curación de estado.",
    "Si derrotaste a Mohg, usará el ritual de sangre — lleva el Ungüento Purificador.",
    "El truco: es un humano con mucha vida pero sin mecánicas especiales de jefe. La agresividad directa funciona.",
    "Sus hechizos tienen animaciones largas — cierra distancia mientras lanza.",
    "Al vencerlo, da su discurso final y abre el acceso al Godfrey real.",
  ],
  jefe: "Sir Gideon Ofnir, el Todovidente",
  recompensa: "Armadura de All-Knowing, progreso hacia el final",
  es_opcional: false,
  siguiente: "El Primer Lord Áldano, Godfrey, te espera."
},

{
  id: "paso_66",
  numero: 66,
  fase: "Capital de Cenizas",
  titulo: "Jefe — Godfrey, el Primer Lord Áldano (forma real)",
  area: "Capital de Cenizas — Sala del Elden Trono",
  descripcion: "Godfrey en su forma real es un guerrero colosal con su hacha legendaria. Completamente diferente a su versión espectral.",
  detalle: [
    "Godfrey real tiene más vida, más daño y patrones de ataque distintos al espectral.",
    "Fase 1: Godfrey usa el hacha y pisotones con ondas sísmicas — salta las ondas o esquívalas.",
    "Fase 2 (mitad de vida): abandona el hacha, se transforma en Hoarah Loux y lucha cuerpo a cuerpo.",
    "Como Hoarah Loux es MUCHO más rápido y agresivo — es la fase más difícil.",
    "Sus agarres en fase 2 hacen daño masivo — aprende la animación y esquiva a los lados.",
    "Al vencerlo se abre el acceso al interior del Árbol Áldano donde está el jefe final.",
  ],
  jefe: "Godfrey, Primer Lord Áldano / Hoarah Loux, Guerrero",
  recompensa: "Acceso al interior del Árbol Áldano, Hacha de Godfrey",
  es_opcional: false,
  siguiente: "Entra al interior del Árbol Áldano para el jefe final."
},

{
  id: "paso_67",
  numero: 67,
  fase: "Interior del Árbol Áldano",
  titulo: "Jefe Final — Radagon de la Luna Dorada",
  area: "Interior del Árbol Áldano",
  descripcion: "Radagon es la primera fase del jefe final. El marido de Marika en una forma que lucha con incantaciones y ataques sagrados de martillo.",
  detalle: [
    "NO puedes invocar cenizas de espíritu en esta batalla — es solo tú contra los jefes finales.",
    "Radagon usa ataques sagrados (martillo, runas sagradas) — la resistencia sagrada ayuda mucho.",
    "Sus combos son rápidos; esquiva hacia su izquierda (tu derecha) para evitar la mayoría.",
    "El martillo grande con el que golpea el suelo crea ondas sísmicas — salta para evitarlas.",
    "No hay descanso entre Radagon y la Bestia Áurea — son una sola batalla continua.",
    "Gestiona tu vida y frascos durante Radagon para llegar con recursos a la Bestia.",
  ],
  jefe: "Radagon de la Luna Dorada",
  recompensa: "(continúa con la Bestia Áurea sin interrupción)",
  es_opcional: false,
  siguiente: "Inmediatamente después de Radagon aparece la Bestia Áurea Áldana."
},

{
  id: "paso_68",
  numero: 68,
  fase: "Interior del Árbol Áldano",
  titulo: "Jefe Final — La Bestia Áurea Áldana",
  area: "Interior del Árbol Áldano",
  descripcion: "La Bestia Áurea Áldana es la encarnación del Elden Ring mismo. Un coloso de luz dorada que es el verdadero jefe final del juego.",
  detalle: [
    "La Bestia es enorme — sus pies y piernas son los puntos de ataque más accesibles.",
    "Sus ataques principales: barrido de patas, espada de luz, impacto de cabeza y rayo dorado.",
    "El rayo dorado crea una zona de daño persistente en el suelo — aléjate de las manchas brillantes.",
    "La mejor estrategia es pegarse a sus patas traseras izquierdas y atacar constantemente.",
    "Cuando se sienta, es una oportunidad de daño masivo — ataca la cabeza.",
    "Al derrotarla, el juego termina y puedes elegir tu final.",
  ],
  jefe: "La Bestia Áurea Áldana",
  recompensa: "Fin del juego, selección de final",
  es_opcional: false,
  siguiente: "Elige tu final. Puedes cargar el guardado para ver otros finales."
},

// ══════════════════════════════════════
// FASE 8 — LOS FINALES (Pasos 69-74)
// ══════════════════════════════════════

{
  id: "paso_69",
  numero: 69,
  fase: "Finales",
  titulo: "Final 1 — La Restauración Áldana (final por defecto)",
  area: "Interior del Árbol Áldano",
  descripcion: "El final más sencillo: usa la Gracia Mayor para reparar el Elden Ring y restaurar el Árbol Áldano. El jugador se convierte en el nuevo Señor Áldano.",
  detalle: [
    "Tras derrotar a la Bestia Áurea, interactúa con el cuerpo de Marika/Radagon.",
    "Elige 'Reparar el Elden Ring' para este final.",
    "Tu personaje se convierte en el nuevo Lord Áldano junto a Marika.",
    "Es el final neutral — no requiere ningún paso especial previo.",
    "La cinemática muestra el árbol restaurado y el mundo en calma.",
    "Este final es el más accesible para cualquier jugador.",
  ],
  jefe: null,
  recompensa: "Final de la Restauración Áldana completado",
  es_opcional: false,
  siguiente: "Carga la partida para intentar otros finales."
},

{
  id: "paso_70",
  numero: 70,
  fase: "Finales",
  titulo: "Final 2 — El Señor de la Edad de las Estrellas (misión de Ranni)",
  area: "Interior del Árbol Áldano",
  descripcion: "Completar la misión de Ranni permite elegir este final donde ella y tu personaje juntos llevan el mundo a una nueva era de las estrellas.",
  detalle: [
    "Requiere completar TODA la misión de Ranni: Loretta → Ranni → Blaidd → Nokron → Cofre → Río Ainsel → Lago Podrido → Anillo de Oscuridad → Ranni en el Faro.",
    "Tras derrotar a la Bestia Áurea, verás el dedal azul de Ranni en el suelo — recógelo.",
    "El dedal invoca a Ranni para que complete el ritual.",
    "Este es considerado el mejor final por la comunidad — un verdadero romance épico.",
    "La cinemática muestra a Ranni y tu personaje partiendo hacia las estrellas.",
    "Desbloquea el trofeo/logro del final de Ranni.",
  ],
  jefe: null,
  recompensa: "Final del Señor de las Estrellas completado",
  es_opcional: true,
  siguiente: "Otros finales requieren condiciones específicas cumplidas antes del jefe final."
},

{
  id: "paso_71",
  numero: 71,
  fase: "Finales",
  titulo: "Final 3 — El Señor del Frenzied Flame (Llama Frenética)",
  area: "Interior del Árbol Áldano / Catacumbas de la Llama Frenética",
  descripcion: "El final más oscuro: el jugador se convierte en portador de la Llama Frenética y quema todo en una conflagración universal.",
  detalle: [
    "Requiere acceder a las Catacumbas de la Llama Frenética bajo las Alcantarillas de Leyndell.",
    "Desvístete por completo (sin nada equipado) para pasar por la puerta estrecha.",
    "El Dios de los Tres Dedos (Three Fingers) te marca con la Llama Frenética.",
    "IMPORTANTE: este final es irreversible en esa partida salvo que uses el Unguento de Miquella.",
    "En la Forja de los Gigantes, elige liberar la Llama Frenética en lugar del sacrificio normal.",
    "La cinemática final muestra al personaje quemando literalmente todo el mundo.",
  ],
  jefe: null,
  recompensa: "Final de la Llama Frenética completado",
  es_opcional: true,
  siguiente: "Puedes revertir con el Unguento de Miquella obtenido en el Campo Sacroníveo."
},

{
  id: "paso_72",
  numero: 72,
  fase: "Finales",
  titulo: "Final 4 — Señor del Árbol Desnudo (misión de Fia)",
  area: "Interior del Árbol Áldano",
  descripcion: "Completar la misión de Fia y obtener el medallón del Príncipe de la Muerte permite elegir un final donde el Árbol Áldano se convierte en árbol de los muertos.",
  detalle: [
    "Requiere completar la misión de Fia hasta obtener el Medallón del Príncipe de la Muerte.",
    "Tras vencer a la Bestia Áurea, interactúa con Marika.",
    "Elige la opción relacionada con el Medallón de la Muerte.",
    "Este final libera la Runa de la Muerte al mundo, permitiendo que los mortales mueran de verdad.",
    "La cinemática muestra un Árbol Áldano oscuro y el mundo cambiando radicalmente.",
    "Es el final de Fia: un final alternativo menos conocido pero muy elaborado en lore.",
  ],
  jefe: null,
  recompensa: "Final del Árbol Desnudo completado",
  es_opcional: true,
  siguiente: "Explora los otros dos finales alternativos con cargas de guardado anteriores."
},

{
  id: "paso_73",
  numero: 73,
  fase: "Finales",
  titulo: "Final 5 — Señor del Orden Perfecto (misión de Goldmask/Corhyn)",
  area: "Interior del Árbol Áldano",
  descripcion: "Completar la misión de Goldmask y Corhyn permite un final donde se restaura el Elden Ring con un Orden Perfecto sin ninguna impureza.",
  detalle: [
    "Requiere seguir la misión de Corhyn (incantador en la Mesa Redonda) y Goldmask (el filósofo mudo).",
    "Encuentra a Goldmask en el Puente de las Inquisidoras en Altus y lleva los mensajes de Corhyn.",
    "La misión culmina en las ruinas doradas de la Capital de Cenizas — necesitas descifrar la fórmula de Goldmask.",
    "Para descifrar la fórmula necesitas el hechizo Runica — apréndeselo a Corhyn.",
    "Tras completar la misión, el final de Orden Perfecto requiere elegir la opción correcta con Marika.",
    "La cinemática muestra el Árbol Áldano restaurado en la forma más pura según la ley áldana.",
  ],
  jefe: null,
  recompensa: "Final del Orden Perfecto completado",
  es_opcional: true,
  siguiente: "Todos los finales explorados — el juego ha sido completado al máximo."
},

{
  id: "paso_74",
  numero: 74,
  fase: "Postgame",
  titulo: "New Game+ y trofeos",
  area: "Todo el mundo",
  descripcion: "Tras cualquier final, puedes iniciar el New Game+ para repetir el juego con mejores estadísticas y runas. Varios trofeos/logros requieren múltiples partidas.",
  detalle: [
    "El New Game+ mantiene tu nivel, armas, objetos y hechizos; resetea jefes, NPCs y puertas.",
    "Los enemigos son más fuertes en cada NG+ (hasta NG+7 como máximo en dificultad).",
    "Algunos objetos únicos solo se obtienen una vez por partida — planifica qué coleccionar cada vez.",
    "El trofeo de platino/100% requiere obtener las 6 terminaciones (finales) — usa cargas de guardado o múltiples NG+.",
    "Las armas especiales de Semidioses (creadas con Runas Áldanas) solo pueden hacerse una por partida.",
    "El trofeo del Elden Ring requiere coleccionar todas las Runas Mayores activas.",
  ],
  jefe: null,
  recompensa: "Trofeo de platino, dominio completo del juego",
  es_opcional: true,
  siguiente: "Felicidades por completar Elden Ring."
},

{
  id: "paso_75",
  numero: 75,
  fase: "DLC",
  titulo: "DLC — Shadow of the Erdtree",
  area: "Tierra de las Sombras",
  descripcion: "El DLC Shadow of the Erdtree añade una zona enorme con nuevos jefes, armas, hechizos y la historia de Miquella. Accesible tras derrotar a Mohg.",
  detalle: [
    "Requisitos: derrotar a Mohg, Señor de la Sangre en el Palacio de Mohgwyn.",
    "Interactúa con el cuerpo de Miquella en el altar del Palacio de Mohg para entrar al DLC.",
    "La Tierra de las Sombras tiene su propio sistema de mejora: Bendiciones de Miquella para resistencia.",
    "Hay nuevos tipos de armas, hechizos, incantos y mecánicas de combate exclusivas del DLC.",
    "El jefe final del DLC es Radahn Consort of Miquella, una versión de Radahn con dos espadas enormes.",
    "La historia explora la obsesión de Miquella y su manipulación emocional de todos a su alrededor.",
  ],
  jefe: "Messmer el Empalador, Radahn Consort of Miquella (jefe final DLC)",
  recompensa: "Historia completa, armas únicas del DLC, hechizos exclusivos",
  es_opcional: true,
  siguiente: "Con el DLC completado, has experimentado la historia completa de Elden Ring."
},

];
