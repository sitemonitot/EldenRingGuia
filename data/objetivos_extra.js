// ══════════════════════════════════════════════════════════
// OBJETIVOS EXTRA — Expansión masiva de contenido opcional
// Fusiona con OBJETIVOS.opcionales al cargar
// ══════════════════════════════════════════════════════════
(function () {
  if (typeof OBJETIVOS === "undefined") return;

  var extra = {

    // ═══ NECROLIMBO — CATACUMBAS Y CUEVAS ═══
    paramo_miembros: [
      { id:"OPT_NEC_C01", titulo:"Catacumbas de la Piedra de Tormenta", descripcion:"Catacumbas en el acantilado norte de Necrolimbo. Repletas de trampas y esqueletos. Jefe: Impulsador de Fantasmas.", recompensa:"Invocación de las Cenizas Espirituales del Pámpano", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_C02", titulo:"Catacumbas del Túmulo", descripcion:"Al sur del puente de Necrolimbo. Jefe: Demonio Semihumano.", recompensa:"Ceniza Espiritual de los Troll de Piedra", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_C03", titulo:"Catacumbas del Impalador", descripcion:"Al nordeste del lago Agheel. Jefe: Vástago Injertado (versión débil).", recompensa:"Cenizas Espirituales del Escudero Injertado", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_C04", titulo:"Catacumbas del Cementerio Deslumbrante", descripcion:"Al sur de la Necrópolis del Hechicero. Jefe: Villano del Fantasma.", recompensa:"Cenizas Espirituales del Villano Fantasma", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_C05", titulo:"Catacumbas del Hechicero Muerto", descripcion:"Cerca de la Necrópolis del Hechicero. Plataformas peligrosas. Jefe: Colosal Zombie.", recompensa:"Cenizas Espirituales del Colosal Zombie", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_V01", titulo:"Cueva de los Árboles de Agheel", descripcion:"Cueva al sur del lago Agheel. Jefe: Semijefe Humano.", recompensa:"Buen botín de runas y objetos", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_V02", titulo:"Cueva de Murkwater", descripcion:"Cueva fluvial al norte del río. Contiene a Patches — comerciante y tramposo.", recompensa:"Acceso a Patches como comerciante", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_V03", titulo:"Cueva de Groveside", descripcion:"Cueva en los acantilados al este de la Iglesia de la Elleh. Jefe: Jefe Lobo.", recompensa:"Cenizas Espirituales del Lobo Espectral", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_V04", titulo:"Cueva Costera (misión de Rya)", descripcion:"En los acantilados de Stormhill. Jefe: Dos Jefes Semijefes. Encuentras el collar de Rya.", recompensa:"Collar de Rya, apertura del camino a Liurnia occidental", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_V05", titulo:"Cueva de los Piratas del Lago", descripcion:"Al sur del lago Agheel. Jefe: Pirata Líder. Buenas runas.", recompensa:"Runas y botín de los piratas", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_T01", titulo:"Mina de Limgrave", descripcion:"Mina al este del lago Agheel. Jefe: Troll de Piedra. Buen lugar para obtener piedras de forja tempranas.", recompensa:"Piedras de Forja Llenas [1-3], Cenizas del Troll Piedra", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_T02", titulo:"Mina de Farum (Antigua)", descripcion:"Mina en el sur de Necrolimbo. Jefe: Dragonkin Soldado (versión débil).", recompensa:"Piedras de Forja y runas de dragón", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_E01", titulo:"Evergaol de Stormhill", descripcion:"Prisión eterna en Stormhill. Jefe: Caballero del Crisol.", recompensa:"Ceniza de Guerra: Primeval Current o Incantación del Crisol", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_E02", titulo:"Evergaol del Perro Desamparado", descripcion:"En el sur de Necrolimbo, cerca del Ojo Perpetuo. Jefe: Héroe Ancestral del Zamor.", recompensa:"Ceniza de Guerra de Tormenta o Incantación del Viento", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_E03", titulo:"Evergaol de la Fortaleza de la Tormenta", descripcion:"En las colinas de la tormenta. Jefe: Perfumista Anastasia.", recompensa:"Ceniza de Guerra: Destierro del Perfumista", region:"Necrolimbo", obligatorio:false },
      { id:"OPT_NEC_D01", titulo:"Dragón Agheel — Lago de Agheel", descripcion:"Dragon opcional temprano. Difícil para nivel bajo. Recompensa única.", recompensa:"Corazón de Dragón (para la Comunión de Dragones)", region:"Necrolimbo", obligatorio:false,
        combate:{ debilidades:{ dano:["Relámpago", "Daño físico a las patas"], estados:["Escarcha"] }, resistencias:{ dano:["Fuego (casi inmune)"], estados:[] } } },
      { id:"OPT_NEC_D02", titulo:"Caballero Necrológico del Puente", descripcion:"Jefe opcional al inicio. Muy difícil al nivel 1-5 pero manejable a nivel 20+.", recompensa:"Runas + botín del jinete", region:"Necrolimbo", obligatorio:false },
    ],

    // ═══ PENÍNSULA DEL LLANTO ═══
    peninsula_llorosa: [
      { id:"OPT_PEN_C01", titulo:"Catacumbas de la Tumba (Peninsula)", descripcion:"Al norte de Castillo Morne. Jefe: Árbol Centinela Menor.", recompensa:"Cenizas del Árbol Centinela", region:"Península del Llanto", obligatorio:false },
      { id:"OPT_PEN_C02", titulo:"Catacumbas del Buitre (Peninsula)", descripcion:"Catacumbas con trampas de flechas. Jefe: Buitre Demonio.", recompensa:"Cenizas Espirituales del Buitre", region:"Península del Llanto", obligatorio:false },
      { id:"OPT_PEN_V01", titulo:"Cueva del Conocimiento (tutorial completo)", descripcion:"Cueva tutorial completa con toda la mecánica de Cenizas de Guerra explicada.", recompensa:"Equipamiento inicial y runas tutorial", region:"Península del Llanto", obligatorio:false },
      { id:"OPT_PEN_V02", titulo:"Cueva de la Bestia Marina", descripcion:"Cueva costera con enemigos acuáticos. Jefe: Bestia Marina.", recompensa:"Piedras de forja y runas", region:"Península del Llanto", obligatorio:false },
      { id:"OPT_PEN_M01", titulo:"Castillo Morne — Edgar e Irina", descripcion:"Castillo ocupado por Soldados Amotinados. Jefe: Leonine Misbegotten. Misión de Irina y Edgar.", recompensa:"Gran Runa de Morne (para ascensor), inicio de misión de Edgar/Irina", region:"Península del Llanto", obligatorio:false,
        combate:{ debilidades:{ dano:["Sangrado", "Cortante"], estados:["Sangrado"] }, resistencias:{ dano:[], estados:[] } } },
      { id:"OPT_PEN_E01", titulo:"Evergaol de Ailing Village", descripcion:"Prisión con Caballero del Crisol de Cola. Buen botín.", recompensa:"Ceniza de Guerra: Cola de Dragón o hechizo", region:"Península del Llanto", obligatorio:false },
      { id:"OPT_PEN_T01", titulo:"Mina de la Península del Llanto", descripcion:"Mina costera con piedras de forja. Jefe: Troll de Piedra.", recompensa:"Piedras de Forja [1-3]", region:"Península del Llanto", obligatorio:false },
    ],

    // ═══ LIURNIA ═══
    liurnia_lagos: [
      { id:"OPT_LIU_C01", titulo:"Catacumbas de Summonwater", descripcion:"Al este del Lago de Liurnia. Jefe: Ancestro Espíritu. Primera catacumba con secreto oculto.", recompensa:"Cenizas Espirituales del Ancestro Espíritu (excelentes)", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_C02", titulo:"Catacumbas de los Cristales", descripcion:"Al norte de Liurnia. Jefe: Colosal Mago Cristal.", recompensa:"Cenizas Espirituales del Mago Cristal", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_C03", titulo:"Catacumbas de la Cantera de Cristal", descripcion:"Catacumbas con muchos mineros de cristal. Jefe: Troll de Cantera.", recompensa:"Piedras de Forja de Cristal y Cenizas", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_V01", titulo:"Cueva Templada", descripcion:"Cueva al sur de la orilla de Liurnia. Jefe: Jefe Lobo Anciano.", recompensa:"Cenizas del Lobo Anciano y botín", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_V02", titulo:"Cueva de las Piedras Multicolores", descripcion:"Cueva con pueblos de semijefes humanos. Jefe: Dúo de semijefes.", recompensa:"Botín variado de los humanos", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_V03", titulo:"Cueva de los Magos de Liurnia", descripcion:"Cueva al este de la Academia. Jefe: Mago de Cristal.", recompensa:"Fragmento de Glintstone y hechizos", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_T01", titulo:"Túnel de Cristal de Raya Lúcida", descripcion:"Mina de cristal al este de la Academia. Jefe: Troll de Cristal.", recompensa:"Piedras de Forja Llenas y Piedras Cristalinas", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_E01", titulo:"Evergaol de la Colina de los Hechiceros", descripcion:"Prisión en el norte de Liurnia. Jefe: Hechicero Ancestral.", recompensa:"Hechizo único de los ancestros", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_E02", titulo:"Evergaol de la Gran Biblioteca", descripcion:"Prisión cerca de la Academia. Jefe: Ringleader Evergaol.", recompensa:"Ceniza de Guerra o hechizo de academia", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_R01", titulo:"Castillo de Caria — Royal Knight Loretta", descripcion:"Palacio de Caria al norte de Liurnia. Jefe: Caballera Real Loretta. Inicia la misión de Ranni.", recompensa:"Cenizas del Caballero de los Arbustos, Gran Arco de Loretta (hechizo)", region:"Liurnia de los Lagos", obligatorio:false,
        combate:{ debilidades:{ dano:["Físico", "Fuego"], estados:["Sangrado"] }, resistencias:{ dano:["Magia"], estados:[] } } },
      { id:"OPT_LIU_R02", titulo:"Iglesia de los Votos — Miriel", descripcion:"Tortuga pastor en la Iglesia de los Votos. Vende hechizos e incantaciones valiosas.", recompensa:"Acceso a hechizos de Rennala y Goldmask", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_R03", titulo:"Cuatro Campanarios — Portales mágicos", descripcion:"Cuatro torres con portales que teletransportan a zonas únicas del juego.", recompensa:"Acceso a zonas secretas: Crumbling Farum Azula preview, Noche Lunar, etc.", region:"Liurnia de los Lagos", obligatorio:false },
      { id:"OPT_LIU_D01", titulo:"Dragon Glintstone — Lago de Liurnia", descripcion:"Dragón durmiente sobre una roca en el lago. Difícil. Gran recompensa.", recompensa:"Corazón de Dragón de Glintstone", region:"Liurnia de los Lagos", obligatorio:false },
    ],

    // ═══ CAÉLIDA ═══
    caelida: [
      { id:"OPT_CAE_C01", titulo:"Catacumbas de la Bestia (Gurranq)", descripcion:"Al norte de Caelid. Contiene el portal a las Catacumbas de la Bestia donde vive Gurranq.", recompensa:"Acceso a Gurranq + incantaciones bestiales únicas", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_C02", titulo:"Catacumbas de la Tumba de los Héroes Santificados", descripcion:"Al sudeste de Caelid. Jefe: Héroe Santificado.", recompensa:"Cenizas Espirituales valiosas", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_C03", titulo:"Catacumbas Bestiales de Farum", descripcion:"Catacumbas con el lore de los dragones farum. Jefe: Dragones de Piedra.", recompensa:"Incantaciones de dragón y runas", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_V01", titulo:"Cueva de la Sellia", descripcion:"Cueva en Sellia. Jefe: Araña Progenitora Sanguinaria.", recompensa:"Talismán de la Exaltación del Descendiente de la Podredumbre", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_V02", titulo:"Cueva de los Camelios", descripcion:"Cueva en el centro de Caelid. Contiene la Hoja de Mineral Meteórico al fondo.", recompensa:"Hoja de Mineral Meteórico (katana mágica-gravitacional)", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_T01", titulo:"Mina de Gael (Caelid)", descripcion:"Mina con esclavos de Radahn. Jefe: Caballero de Gael.", recompensa:"Piedras Sombrías de Forja [1-4], armadura de Gael", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_T02", titulo:"Mina de la Harapienta", descripcion:"Mina en la costa este de Caelid. Jefe: Imitador de Sombras.", recompensa:"Piedras Sombrías [1-5] y objetos únicos", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_E01", titulo:"Evergaol de la Oscuridad de Caelid", descripcion:"Prisión con Caballero de Seda. Buen equipo al derrotarlo.", recompensa:"Armadura del Caballero de Seda", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_D01", titulo:"Dragon Greoll — Greyoll's Dragonbarrow", descripcion:"El dragón más grande del juego (puede ser matado sin combate dañando la cola). Enorme cantidad de runas.", recompensa:"250.000 runas + Corazón de Dragón Ancestral", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_D02", titulo:"Ekzykes — Dragon Communion Church", descripcion:"Dragón podrido en la Iglesia de la Comunión de Dragones.", recompensa:"Corazón de Dragón de Ekzykes, Incantación Aliento de Ekzykes", region:"Caélida", obligatorio:false },
      { id:"OPT_CAE_S01", titulo:"Sellia, Ciudad de Hechicería", descripcion:"Ciudad puzzle con antorchas que desbloquean cofres sellados. Jefe: Sombra de Millicent (inversión).", recompensa:"Hechizos únicos de Sellia: Cometa de Noche, Lluvia de Runas...", region:"Caélida", obligatorio:false },
    ],

    // ═══ MESETA DE ALTUS ═══
    meseta_altus: [
      { id:"OPT_ALT_C01", titulo:"Catacumbas del Crisol", descripcion:"Al sur de Altus. Jefe: Duo de Caballeros del Crisol (dificilísimo).", recompensa:"Cenizas Espirituales del Dúo de Caballeros — muy poderosas", region:"Meseta de Altus", obligatorio:false },
      { id:"OPT_ALT_C02", titulo:"Catacumbas del Árbol Estéril", descripcion:"Catacumbas con árbol Áldano corrupto. Jefe: Avatar del Árbol.", recompensa:"Cenizas del Avatar y lágrima de cristal", region:"Meseta de Altus", obligatorio:false },
      { id:"OPT_ALT_C03", titulo:"Catacumbas Selladas", descripcion:"Catacumbas selladas accesibles con la Llave del Sepulcro. Jefe: Dúo de Dragones.", recompensa:"Ceniza de Dragón y objetos únicos", region:"Meseta de Altus", obligatorio:false },
      { id:"OPT_ALT_C04", titulo:"Catacumbas de los Héroes Santificados de Sainted", descripcion:"Catacombas con guerreros de fuego. Jefe: Ancestro Espíritu (versión flamígera).", recompensa:"Cenizas del Ancestro de Fuego", region:"Meseta de Altus", obligatorio:false },
      { id:"OPT_ALT_V01", titulo:"Cueva del Tigre de la Llama", descripcion:"Cueva en el sur de Altus. Jefe: Magma Wyrm.", recompensa:"Talismán del Escorpión de las Llamas, Corazón de Magma Wyrm", region:"Meseta de Altus", obligatorio:false },
      { id:"OPT_ALT_V02", titulo:"Cueva de las Arañas de Seethewater", descripcion:"Cueva en el río Seethewater. Jefe: Araña Progenitora.", recompensa:"Talismán de la Exaltación del Descendiente de la Podredumbre", region:"Meseta de Altus", obligatorio:false },
      { id:"OPT_ALT_T01", titulo:"Mina de Altus (Tunnel)", descripcion:"Mina con esclavos en Altus. Jefe: Colosal Minero.", recompensa:"Piedras Sombrías [3-6]", region:"Meseta de Altus", obligatorio:false },
      { id:"OPT_ALT_E01", titulo:"Castillo de la Media Noche Sol", descripcion:"Castillo del Sol de Media Noche en el este de Altus. Jefe: Marica, Décima de los Dedos.", recompensa:"Amuleto de Mediana Noche, Shotel del Eclipse", region:"Meseta de Altus", obligatorio:false,
        combate:{ debilidades:{ dano:["Físico", "Fuego"], estados:["Sangrado"] }, resistencias:{ dano:["Sagrado"], estados:[] } } },
      { id:"OPT_ALT_E02", titulo:"Evergaol de la Conspiración de Altus", descripcion:"Prisión con Caballero Perfumista de Altus.", recompensa:"Ceniza de Guerra o hechizo élite", region:"Meseta de Altus", obligatorio:false },
    ],

    // ═══ MONTE GELMIR ═══
    monte_gelmir: [
      { id:"OPT_GEL_C01", titulo:"Catacumbas del Camino de la Espada", descripcion:"Catacumbas con guerreros de espada. Jefe: Jefe Swordsmaster.", recompensa:"Cenizas Espirituales del Swordsmaster", region:"Monte Gelmir", obligatorio:false },
      { id:"OPT_GEL_C02", titulo:"Catacumbas de la Magma Wyrm", descripcion:"Catacumbas volcánicas con Magma Wyrm. Jefe: Magma Wyrm Makar.", recompensa:"Corazón de Magma Wyrm, acceso al Río de Ainsel", region:"Monte Gelmir", obligatorio:false,
        combate:{ debilidades:{ dano:["Agua/Hielo", "Relámpago"], estados:["Escarcha"] }, resistencias:{ dano:["Fuego (inmune)"], estados:[] } } },
      { id:"OPT_GEL_D01", titulo:"Dragon Rykard en el Volcán Manor", descripcion:"Jefe principal del Volcán Manor. Jefe colosal con mecánica única: usar la Lanza de Caza de Serpientes.", recompensa:"Remembranza de Rykard, Gran Runa de Rykard", region:"Monte Gelmir", obligatorio:false,
        combate:{ debilidades:{ dano:["Lanza de Caza de Serpientes (obligatorio para hacerlo viable)", "Daño físico"], estados:["Sangrado"] }, resistencias:{ dano:["Fuego (casi inmune)"], estados:[] } } },
      { id:"OPT_GEL_V01", titulo:"Primer Cráter de Gelmir", descripcion:"Zona de lava con enemigos de fuego. Cofres con objetos únicos del Volcán Manor.", recompensa:"Objetos únicos del Volcán", region:"Monte Gelmir", obligatorio:false },
      { id:"OPT_GEL_V02", titulo:"Mansión del Volcán — Misiones de Tanith y Rya", descripcion:"Completar las misiones de la Mansión: cuatro cartas de eliminación + misión de Rya para revelar su forma verdadera.", recompensa:"Set del Lobo Enfurecido, Cenizas Espirituales de Bernahl, historia de Rya/Zorayas", region:"Monte Gelmir", obligatorio:false },
    ],

    // ═══ LEYNDELL Y SUBTERRÁNEAS ═══
    leyndell: [
      { id:"OPT_LEY_C01", titulo:"Catacumbas de la Ciudad Sellada", descripcion:"Bajo las alcantarillas de Leyndell. Jefe: Espada de la Ciudad Sellada.", recompensa:"Cenizas de la Espada", region:"Leyndell, Capital Real", obligatorio:false },
      { id:"OPT_LEY_C02", titulo:"Alcantarillas de Leyndell — Dung Eater", descripcion:"Bajo Leyndell se encuentran las alcantarillas con Dung Eater encadenado. Parte de su misión.", recompensa:"Inicio/avance de la misión de Dung Eater", region:"Leyndell, Capital Real", obligatorio:false },
      { id:"OPT_LEY_C03", titulo:"Árbol Áldano — Fondo de Raíz Profunda", descripcion:"Bajo Leyndell, el Fondo de Raíz Profunda. Acceso por las alcantarillas o desde la Cofra del Ataúd. Jefes: Gargoyle Dúo.", recompensa:"Acceso a Deeproot Depths, Fia questline", region:"Fondo de Raíz Profunda", obligatorio:false,
        combate:{ debilidades:{ dano:["Fuego", "Relámpago"], estados:["Podredumbre"] }, resistencias:{ dano:["Sagrado"], estados:[] } } },
      { id:"OPT_LEY_R01", titulo:"Erdtree Avatar — Puerta de Leyndell", descripcion:"Avatar del Árbol Gracia guardando la entrada a Leyndell. Jefe de campo con gran botín.", recompensa:"Lágrima de Cristal de Erdtree, runas", region:"Leyndell, Capital Real", obligatorio:false },
    ],

    // ═══ ZONAS SUBTERRÁNEAS ═══
    subterraneas: [
      { id:"OPT_SUB_C01", titulo:"Nokron, Ciudad Eterna — Ancestro Espíritu", descripcion:"Ciudad bajo tierra accesible tras derrotar a Radahn. Jefe: Ancestro Espíritu.", recompensa:"Cenizas Espirituales del Ancestro Espíritu (versión completa, muy poderosas)", region:"Nokron, Ciudad Eterna", obligatorio:false },
      { id:"OPT_SUB_C02", titulo:"Nokron — Gargoyle de Piedra de Cieno", descripcion:"Jefe en Nokron: Dos Gargoyles. Necesario para la misión de Fia (cofra del ataúd).", recompensa:"Acceso al Fondo de Raíz Profunda (misión Fia)", region:"Nokron, Ciudad Eterna", obligatorio:false,
        combate:{ debilidades:{ dano:["Fuego", "Daño físico"], estados:["Podredumbre"] }, resistencias:{ dano:["Sagrado", "Relámpago"], estados:[] } } },
      { id:"OPT_SUB_C03", titulo:"Fondo de Raíz Profunda — Fia y el Príncipe de la Muerte", descripcion:"Final de la misión de Fia. Jefe: Lichdragon Fortissax.", recompensa:"Incantación Lanza de Relámpago de Fortissax, objeto para el final de Fia", region:"Fondo de Raíz Profunda", obligatorio:false,
        combate:{ debilidades:{ dano:["Sagrado", "Físico"], estados:["Podredumbre"] }, resistencias:{ dano:["Relámpago (resistente)"], estados:[] } } },
      { id:"OPT_SUB_C04", titulo:"Palacio de Mohgwyn — Mohg, Señor de la Sangre", descripcion:"Acceso por el portal de Varre o Mountaintops. Jefe: Mohg, Señor de la Sangre.", recompensa:"Gran Runa de Mohg, Remembranza de Mohg, acceso a la subregión de sangre", region:"Palacio de Mohgwyn", obligatorio:false,
        combate:{ debilidades:{ dano:["Físico (segunda fase)", "Escarcha antes de la segunda fase"], estados:["Escarcha"] }, resistencias:{ dano:["Sagrado", "Fuego"], estados:["Podredumbre"] } } },
      { id:"OPT_SUB_C05", titulo:"Río Ainsel — Miniatura de Ranni", descripcion:"Río subterráneo con la Miniatura de Ranni que da acceso a la conversación con Ranni pequeña.", recompensa:"Avance de la misión de Ranni, acceso a Nokstella", region:"Río Ainsel", obligatorio:false },
      { id:"OPT_SUB_C06", titulo:"Nokstella, Ciudad Eterna — Luna de Nokstella", descripcion:"Ciudad eterna bajo el lago. Jefe: Mimicry Tear (segunda fase). Cofres con talismanes únicos.", recompensa:"Luna de Nokstella (talismán), Piedras de Forja Áureas", region:"Río Ainsel", obligatorio:false },
      { id:"OPT_SUB_C07", titulo:"Lago de la Podredumbre — Final misión de Ranni", descripcion:"Lago de Podredumbre Carmesí. Jefe: Astel, Engendrado de los Vacíos.", recompensa:"Clave de la Gran Biblioteca Lunar, avance de la misión de Ranni", region:"Lago de la Podredumbre", obligatorio:false,
        combate:{ debilidades:{ dano:["Físico", "Relámpago"], estados:["Sangrado"] }, resistencias:{ dano:["Magia"], estados:["Podredumbre (inmune)"] } } },
      { id:"OPT_SUB_C08", titulo:"Río Siofra — Ancestros Espirituales", descripcion:"Río subterráneo bajo Necrolimbo. Jefe: Ancestro Espíritu del Río.", recompensa:"Acceso a la misión de Sellen y hechizos únicos", region:"Río Siofra", obligatorio:false },
    ],

    // ═══ PICOS DE LOS GIGANTES / FARUM AZULA ═══
    cimas_gigantes: [
      { id:"OPT_GIG_C01", titulo:"Catacumbas de Farum Azula — Dragones Antiguos", descripcion:"Catacumbas con dragones. Jefe: Dúo de Dragones Antiguos.", recompensa:"Incantaciones de Dragón Antiguo", region:"Fárum Azula en Desmoronamiento", obligatorio:false },
      { id:"OPT_GIG_C02", titulo:"Catacumbas de la Muerte (Giants)", descripcion:"Catacumbas en las Montañas. Jefe: Jefe de la Muerte.", recompensa:"Ceniza de Guerra de la Muerte e incantaciones de muerte", region:"Picos de los Gigantes", obligatorio:false },
      { id:"OPT_GIG_E01", titulo:"Castillo Sol — Commander Niall", descripcion:"Castillo al norte de las Montañas de los Gigantes. Jefe: Comandante Niall.", recompensa:"Fragmento del Medallón de Haligtree (derecho), acceso al Haligtree", region:"Picos de los Gigantes", obligatorio:false,
        combate:{ debilidades:{ dano:["Fuego", "Físico"], estados:["Escarcha"] }, resistencias:{ dano:["Relámpago"], estados:[] } } },
      { id:"OPT_GIG_D01", titulo:"Borealis — Dragon de Hielo", descripcion:"Dragón de hielo en las Montañas de los Gigantes.", recompensa:"Corazón del Dragón Borealis, Incantación Niebla de Borealis", region:"Picos de los Gigantes", obligatorio:false },
    ],

    // ═══ CAMPO SACRONÍVEO Y ÁRBOL HIERÁTICO ═══
    campo_sagrado_haligtree: [
      { id:"OPT_HAL_C01", titulo:"Campo Sacroníveo — Loretta del Árbol Hierático", descripcion:"Jefe de campo al entrar al Árbol Hierático. Versión mejorada de Loretta.", recompensa:"Cenizas del Caballero Real Loretta (muy poderosas), hechizo Maestría de Loretta", region:"Campo Sacroníveo", obligatorio:false,
        combate:{ debilidades:{ dano:["Fuego", "Físico"], estados:["Sangrado"] }, resistencias:{ dano:["Magia"], estados:[] } } },
      { id:"OPT_HAL_C02", titulo:"Elphael, Regazo del Árbol — Malenia", descripcion:"El combate opcional más difícil del juego. Malenia, Semidiosa y Dios del Rotten. Dos fases.", recompensa:"Gran Runa de Malenia, Remembranza de Malenia, armadura y arma únicas", region:"Árbol Hierático de Miquella", obligatorio:false,
        combate:{ debilidades:{ dano:["Daño físico (especialmente Hemorragia)", "Escarcha"], estados:["Sangrado (build up)", "Escarcha"] }, resistencias:{ dano:["Sagrado (alta resistencia)"], estados:["Podredumbre (inmune)", "Envenenamiento"] } } },
      { id:"OPT_HAL_C03", titulo:"Miquella Cocoon — Mohg (Armadura de Sangre)", descripcion:"En la cima del Árbol Hierático. Aquí está el capullo de Miquella custodiado por Mohg de Sangre (versión previa).", recompensa:"Contexto de lore esencial para el DLC Shadow of the Erdtree", region:"Árbol Hierático de Miquella", obligatorio:false },
    ],

    // ═══ MISIONES NPC ═══
    misiones_npc: [
      { id:"NPC_HYETTA", titulo:"Misión de Hyetta — La Buscadora de la Llama del Frénesis", descripcion:"Hyetta sigue al jugador por las Tierras Intermedias buscando la Llama del Frénesis. Requiere 4 uvas de Hyetta y llegar a los Tres Dedos.", recompensa:"Incantación Bendición de las Tres Sangres, necesaria para el final de la Llama del Frénesis", region:"Múltiples (Liurnia → Leyndell → Capilla de la Anticipación)", obligatorio:false },
      { id:"NPC_IRINA", titulo:"Misión de Irina y Edgar — Castillo Morne", descripcion:"Irina busca a su padre Edgar en Castillo Morne. Tras liberarlo, Edgar irá a vengar a Irina.", recompensa:"Espada Sacrificial de Irina, objeto de lore, Edgar como comerciante e invasor", region:"Península del Llanto → Altus", obligatorio:false },
      { id:"NPC_KENNETH", titulo:"Misión de Kenneth Haight — Señor de las Tierras", descripcion:"Kenneth quiere recuperar el Fuerte Haight y reclamar su derecho al trono. Requiere limpiar el Fuerte Haight.", recompensa:"Llaves de la Piedra Fundacional, Nepheli como compañera", region:"Necrolimbo", obligatorio:false },
      { id:"NPC_BOC", titulo:"Misión de Boc, el Costurero", descripcion:"Boc, un semijefe transformado en hombre, quiere convertirse en sastre de élite. Requiere encontrarlo varias veces y darle materiales.", recompensa:"Servicio de alterar armaduras, lore sobre Ranni y los semijefes", region:"Múltiples (Necrolimbo → Liurnia → Altus)", obligatorio:false },
      { id:"NPC_D_HUNTER", titulo:"Misión de D, Cazador de Muertos", descripcion:"D ayuda a matar non-deads y tiene conflicto con Fia. Muere a manos de Fia si avanzas su misión.", recompensa:"Espada de D, arma única de dos D (si hay dos hermanos)", region:"Mesa Redonda → Nokron → Deeproot", obligatorio:false },
      { id:"NPC_ROGIER", titulo:"Misión de Rogier — El Hechicero Herido", descripcion:"Rogier investiga las raíces negras bajo Leyndell. Conectado con el misterio de los Dos Dedos y la Gran Runa Rota.", recompensa:"Rapier de Rogier (+8), información sobre el Dios de la Muerte y la Gran Runa", region:"Castillo de Velo Tormentoso → Mesa Redonda → Deeproot Depths", obligatorio:false },
      { id:"NPC_THOPS", titulo:"Misión de Thops — El Mago Expulsado", descripcion:"Thops fue expulsado de la Academia y necesita una Glintstone Key adicional para volver.", recompensa:"Hechizo único de Thops: Barrera de Thops, Ballesta de Thops", region:"Liurnia → Academia de Raya Lúcida", obligatorio:false },
      { id:"NPC_LATENNA", titulo:"Misión de Latenna — La Arquera Espectral", descripcion:"Latenna es un espíritu de ceniza que pide ser llevada a las ruinas del pueblo de los albinauricos para encontrar su 'lobezno'.", recompensa:"Fragmento del Medallón de Haligtree (izquierdo)", region:"Liurnia → Campo Sacroníveo", obligatorio:false },
      { id:"NPC_PATCHES2", titulo:"Misión completa de Patches — El Tramposo", descripcion:"Patches engaña al jugador múltiples veces, pero siempre hay forma de perdonarle. Se convierte en comerciante.", recompensa:"Acceso a tienda de Patches con items únicos, Armadura del Ladrón", region:"Necrolimbo → Liurnia → Altus → Farum Azula", obligatorio:false },
      { id:"NPC_RYA", titulo:"Misión de Rya — La Dama de la Mansión", descripcion:"Rya busca su collar en la Cueva Costera. Luego en el Volcán Manor revela ser una serpiente.", recompensa:"Amuleto del Volcán, lore de la mansión, Zorayas Key", region:"Necrolimbo → Altus → Volcán Manor", obligatorio:false },
      { id:"NPC_TANITH", titulo:"Misión de Tanith — Señora del Volcán Manor", descripcion:"Tanith lidera el Volcán Manor y da misiones de asesinato. Tras derrotar a Rykard, tiene un rol final perturbador.", recompensa:"Set del Lobo Enfurecido (última recompensa), lore de Rykard", region:"Monte Gelmir — Mansión del Volcán", obligatorio:false },
      { id:"NPC_CORHYN", titulo:"Misión de Corhyn y Goldmask — La Verdad Dorada", descripcion:"Corhyn sigue a Goldmask por todo el mapa. Goldmask está buscando la forma de reparar el Anillo del Áldano.", recompensa:"Incantación Ley de la Regresión, el final del Señor del Orden Áldano (requiere esta misión)", region:"Mesa Redonda → Altus → Leyndell → Picos de los Gigantes", obligatorio:false },
      { id:"NPC_GOWRY", titulo:"Misión de Gowry y Millicent", descripcion:"Gowry (en realidad Malenia) pide curar a Millicent de la Podredumbre. Millicent viaja por el mundo.", recompensa:"Prótesis de Millicent (talismán), Aguijón de la Espada Alada Podrida, lore de Malenia", region:"Caélida → Altus → Picos de los Gigantes → Haligtree", obligatorio:false },
      { id:"NPC_DUNG_EATER2", titulo:"Misión del Comedor de Excrementos — La Maldición Implacable", descripcion:"Dung Eater quiere maldecir a todos los seres vivos. Requiere semillas de Seedbed y una difícil elección moral.", recompensa:"Olla del Comedor de Excrementos (arma), final de la Gran Runa Rota (requiere esta misión)", region:"Mesa Redonda → Leyndell → Alcantarillas", obligatorio:false },
      { id:"NPC_NEPHELI", titulo:"Misión de Nepheli Loux — La Guerrera del Norte", descripcion:"Hija adoptiva de Gideon Ofnir. Sigue su propio camino como guerrera. Se puede convertir en gobernante.", recompensa:"Hacha de Nepheli, arma de Ancestro Espíritu, puede convertirse en gobernante de Velo Tormentoso", region:"Mesa Redonda → Nekron → Castillo de Velo Tormentoso", obligatorio:false },
    ],
  };

  // Fusionar en OBJETIVOS.opcionales
  for (var clave in extra) {
    if (!OBJETIVOS.opcionales[clave]) {
      OBJETIVOS.opcionales[clave] = [];
    }
    for (var i = 0; i < extra[clave].length; i++) {
      // Evitar duplicados por id
      var existe = OBJETIVOS.opcionales[clave].some(function(o) { return o.id === extra[clave][i].id; });
      if (!existe) OBJETIVOS.opcionales[clave].push(extra[clave][i]);
    }
  }
})();
