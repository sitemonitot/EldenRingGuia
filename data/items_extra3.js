// ══════════════════════════════════════════════════════════
// ITEMS EXTRA 3 — Expansión adicional con más items e imágenes
// ══════════════════════════════════════════════════════════
(function () {
  var W = "https://eldenring.wiki.fextralife.com/file/Elden-Ring/";
  var S = "_elden_ring_wiki_guide_200px.png";

  var extra3 = {

    // ═══ ARMAS ═══
    armas: [
      { id:"arma_081", nombre:"Dragonscale Blade", nombre_en:"Dragonscale Blade", tipo:"Katana", escala:"Des/Int", imagen:W+"dragonscale_blade"+S,
        descripcion:"Katana de escamas de dragón. El AoW Ice Lightning Sword dispara un rayo helado.", como_obtener:"En el cofre al fondo de la mazmorra bajo el Lago de Rot, Sílfide.", requisitos:"Des 17, Int 10" },
      { id:"arma_082", nombre:"Katana del Discípulo", nombre_en:"Serpentbone Blade", tipo:"Katana", escala:"Des/Arc", imagen:W+"serpentbone_blade"+S,
        descripcion:"Katana de hueso de serpiente de la Volcán Manor.", como_obtener:"Recompensa completar misiones del Volcán Manor.", requisitos:"Des 21" },
      { id:"arma_083", nombre:"Naginata de Caballero Cleanrot", nombre_en:"Cleanrot Knight's Sword", tipo:"Lanza espada", escala:"Des/Fe", imagen:W+"cleanrot_knight%27s_sword"+S,
        descripcion:"Arma de las Caballeras Cleanrot. Alcance largo e inflige Podredumbre.", como_obtener:"Dropeada por las Caballeras Cleanrot en las Ruinas de Miquella.", requisitos:"Fue 16, Des 14, Fe 12" },
      { id:"arma_084", nombre:"Espada del Consejero de Guerra", nombre_en:"Azur's Glintstone Staff", tipo:"Bastón", escala:"Int", imagen:W+"azur%27s_glintstone_staff"+S,
        descripcion:"Bastón de Azur con el mayor potenciador de hechizos del juego. Velocidad de lanzamiento reducida.", como_obtener:"En el cadáver de Azur cerca de las Cataratas Hermit en Altus.", requisitos:"Int 52" },
      { id:"arma_085", nombre:"Bastón Lunar de Caria", nombre_en:"Carian Regal Scepter", tipo:"Bastón", escala:"Int", imagen:W+"carian_regal_scepter"+S,
        descripcion:"Bastón real de Caria. Potencia las hechicerías lunares: Cometa, Comet Azur, Full Moon.", como_obtener:"Remembranza de Rennala, Reina de la Luna Llena. Mesa Fragmentada.", requisitos:"Int 60" },
      { id:"arma_086", nombre:"Sello de la Corona del Espino", nombre_en:"Dragon Communion Seal", tipo:"Sello Sagrado", escala:"Fe/Arc", imagen:W+"dragon_communion_seal"+S,
        descripcion:"Sello que potencia las incantaciones de la Comunión de Dragones.", como_obtener:"En el Sepulcro del Dragón de la Capilla de la Anticipación.", requisitos:"Fe 10, Arc 10" },
      { id:"arma_087", nombre:"Sello de los Ancianos", nombre_en:"Godslayer's Seal", tipo:"Sello Sagrado", escala:"Fe/Des", imagen:W+"godslayer%27s_seal"+S,
        descripcion:"Sello de los Matadragones que potencia las incantaciones negras.", como_obtener:"En las Catacumbas Selladas al Final del Mundo, sur de Liurnia.", requisitos:"Des 4, Fe 27" },
      { id:"arma_088", nombre:"Gran Sello de Erdtree", nombre_en:"Erdtree Seal", tipo:"Sello Sagrado", escala:"Fe", imagen:W+"erdtree_seal"+S,
        descripcion:"El sello con mayor escalada de Fe del juego. Ideal para builds puras de Fe.", como_obtener:"En un cofre en las Ruinas del Pabellón del Árbol, Necrolimbo.", requisitos:"Fe 40" },
      { id:"arma_089", nombre:"Bastón de Demi-Human Queen", nombre_en:"Demi-Human Queen's Staff", tipo:"Bastón", escala:"Int", imagen:W+"demi-human_queen%27s_staff"+S,
        descripcion:"Bastón de las reinas semijefes. Alto escalado para bajo nivel de Int.", como_obtener:"Dropeado por las Reinas Semijefe en Necrolimbo y Liurnia.", requisitos:"Int 10" },
      { id:"arma_090", nombre:"Bastón de Piedra Meteorito", nombre_en:"Meteorite Staff", tipo:"Bastón", escala:"Int", imagen:W+"meteorite_staff"+S,
        descripcion:"El mejor bastón del juego temprano. No se puede mejorar pero escala masivamente con Int.", como_obtener:"En un cadáver en la Calle de la Arena de Caelid, en un cofre pegado a un cadáver.", requisitos:"Int 18" },
      { id:"arma_091", nombre:"Arco de Cuerno", nombre_en:"Horn Bow", tipo:"Arco", escala:"Des/Int", imagen:W+"horn_bow"+S,
        descripcion:"Arco mágico. Añade daño mágico a todas las flechas.",
        como_obtener:"Dropeado por soldados espectro en Nokron, Ciudad Eterna.", requisitos:"Fue 10, Des 14, Int 12" },
      { id:"arma_092", nombre:"Arco de Radahn", nombre_en:"Radahn's Spear", tipo:"Lanza colosal", escala:"Fue/Des", imagen:W+"radahn%27s_spear"+S,
        descripcion:"Lanza gigante de Radahn. Se puede arrojar como proyectil usando el AoW.", como_obtener:"Remembranza del Azote de las Estrellas. Mesa Fragmentada (segunda opción).", requisitos:"Fue 45, Des 14" },
      { id:"arma_093", nombre:"Espada del Señor del Árbol", nombre_en:"Grafted Dragon", tipo:"Puño/Garra", escala:"Fue/Fe", imagen:W+"grafted_dragon"+S,
        descripcion:"Cabeza de dragón injertada en el brazo. AoW: Aullido del Dragón Injertado.", como_obtener:"Remembranza del Injerto (segunda opción). Mesa Fragmentada.", requisitos:"Fue 20, Des 14, Fe 16" },
      { id:"arma_094", nombre:"Gran Hacha Rúnica", nombre_en:"Ruins Greatsword", tipo:"Espadón colosal", escala:"Fue/Int", imagen:W+"ruins_greatsword"+S,
        descripcion:"Espada gigante de las Ruinas. AoW Gravitas crea un campo gravitacional devastador.",
        como_obtener:"Dropeada por el Jefe del Guardián en las Ruinas del Lago de Caelid o en Altus.", requisitos:"Fue 50, Int 16" },
      { id:"arma_095", nombre:"Gran Espada de Rennala", nombre_en:"Rennala's Staff", tipo:"Bastón", escala:"Int", imagen:W+"rennala%27s_full_moon"+S,
        descripcion:"El bastón de Rennala. Añade un uso extra al hechizo Luna Llena de Rennala.", como_obtener:"Remembranza de Rennala (opción alternativa al sello).", requisitos:"Int 36" },
      { id:"arma_096", nombre:"Puño de los Gigantes", nombre_en:"Giant-Crusher", tipo:"Martillo colosal", escala:"Fue", imagen:W+"giant-crusher"+S,
        descripcion:"Martillo colosal con el mayor daño puro de Fuerza del juego. Muy pesado.", como_obtener:"En un cofre en el Camino de los Gigantes, al norte de las Montañas.", requisitos:"Fue 60" },
      { id:"arma_097", nombre:"Alabarda del Elegido", nombre_en:"Commander's Standard", tipo:"Alabarda", escala:"Fue/Fe", imagen:W+"commander%27s_standard"+S,
        descripcion:"Estandarte del Comandante que buffea a las invocaciones aliadas.", como_obtener:"Dropeado por el Comandante Niall en Castillo Sol.", requisitos:"Fue 24, Des 14, Fe 18" },
      { id:"arma_098", nombre:"Espada Sagrada", nombre_en:"Sacred Relic Sword", tipo:"Espada colosal", escala:"Fue/Des/Fe", imagen:W+"sacred_relic_sword"+S,
        descripcion:"Espada de la Bestia Áurea que causa lluvia de runas al activar el AoW.", como_obtener:"Remembranza de la Bestia Áurea. Mesa Fragmentada (segunda opción).", requisitos:"Fue 14, Des 24, Fe 22" },
      { id:"arma_099", nombre:"Gran Cimitarra del Dragón", nombre_en:"Magma Blade", tipo:"Cimitarra", escala:"Des/Fe", imagen:W+"magma_blade"+S,
        descripcion:"Cimitarra volcánica del Volcán Manor. AoW dispara magma fundido.", como_obtener:"Dropeada por los Caballeros Serpiente del Volcán Manor.", requisitos:"Des 14, Fe 21" },
      { id:"arma_100", nombre:"Espada de Millicent", nombre_en:"Millicent's Prosthesis", tipo:"Hoja de brazo", escala:"Des", imagen:W+"millicent%27s_prosthesis"+S,
        descripcion:"La prótesis de Millicent convertida en arma de ataque rápido multi-hit.", como_obtener:"Obtenida al derrotar a Millicent (si eliges la opción traidora en su misión).", requisitos:"Des 24" }
    ],

    // ═══ ARMADURAS ═══
    armaduras: [
      { id:"arm_049", nombre:"Casco de los Tres Dedos", nombre_en:"Deathbed Dress", tipo:"Cabeza", imagen:W+"deathbed_dress"+S,
        descripcion:"Vestido fúnebre de Fia. Baja defensa pero parte del lore del Abrazador de la Muerte.", como_obtener:"Obtenido completando la misión de Fia en Deeproot Depths.", notas:"" },
      { id:"arm_050", nombre:"Casco del Caballero Necrológico", nombre_en:"Night's Cavalry Helm", tipo:"Casco", imagen:W+"night%27s_cavalry_helm"+S,
        descripcion:"Casco del Jinete de la Noche. Evocador y muy estético.", como_obtener:"Dropeado por los Jinetes de la Noche (aparecen solo de noche). Baja probabilidad.", notas:"" },
      { id:"arm_051", nombre:"Armadura del Caballero Necrológico", nombre_en:"Night's Cavalry Armor", tipo:"Peto", imagen:W+"night%27s_cavalry_armor"+S,
        descripcion:"Peto del Jinete de la Noche. Estético y con buena resistencia.", como_obtener:"Dropeada por los Jinetes de la Noche.", notas:"" },
      { id:"arm_052", nombre:"Casco del Guerrero de Radahn", nombre_en:"Radahn's Lion Helm", tipo:"Casco", imagen:W+"radahn%27s_lion_helm"+S,
        descripcion:"El casco del León de Radahn. Icónico y muy reconocible.", como_obtener:"Comprado a Enia en la Mesa Fragmentada tras derrotar a Radahn.", notas:"El set completo de Radahn es uno de los mejores para builds de Fuerza." },
      { id:"arm_053", nombre:"Armadura de León de Radahn", nombre_en:"Radahn's Lion Armor", tipo:"Peto", imagen:W+"radahn%27s_lion_armor"+S,
        descripcion:"Pesado peto de León de Radahn. Altísima defensa física.", como_obtener:"Comprado a Enia tras derrotar a Radahn.", notas:"" },
      { id:"arm_054", nombre:"Casco Antiguo de los Dragoneros", nombre_en:"Drake Knight Helm", tipo:"Casco", imagen:W+"drake_knight_helm"+S,
        descripcion:"Casco de los Dragoneros con cabeza de dragón. Estético y resistente.", como_obtener:"Dropeado por los Caballeros Dragón en el Castillo de Morne y en Leyndell.", notas:"" },
      { id:"arm_055", nombre:"Armadura Dragón de los Dragoneros", nombre_en:"Drake Knight Armor", tipo:"Peto", imagen:W+"drake_knight_armor"+S,
        descripcion:"Peto de los Caballeros Dragón. Media-pesada con buen aspecto.", como_obtener:"Dropeado por los Caballeros Dragón.", notas:"" },
      { id:"arm_056", nombre:"Casco del Confesor del Árbol", nombre_en:"Confessor Helm", tipo:"Casco", imagen:W+"confessor_helm"+S,
        descripcion:"Casco del Confesor, clase inicial de Fe.", como_obtener:"Equipo inicial del Confesor. Vendido en la Mesa Redonda.", notas:"" },
      { id:"arm_057", nombre:"Capa del Vagabundo", nombre_en:"Vagabond Knight Armor", tipo:"Peto", imagen:W+"vagabond_knight_armor"+S,
        descripcion:"Armadura pesada del Vagabundo. Buena defensa para el inicio.", como_obtener:"Equipo inicial del Vagabundo. Vendida en algunos comerciantes.", notas:"" },
      { id:"arm_058", nombre:"Manto del Astrólogo", nombre_en:"Astrologer Robe", tipo:"Peto", imagen:W+"astrologer_robe"+S,
        descripcion:"Túnica del Astrólogo. Ligera, para builds de Int.", como_obtener:"Equipo inicial del Astrólogo. Vendida por comerciantes.", notas:"" },
      { id:"arm_059", nombre:"Sombrero del Astrólogo", nombre_en:"Astrologer Hood", tipo:"Casco", imagen:W+"astrologer_hood"+S,
        descripcion:"Sombrero del Astrólogo. Ligero y con buena protección mágica.", como_obtener:"Equipo inicial del Astrólogo.", notas:"" },
      { id:"arm_060", nombre:"Manto del Profeta", nombre_en:"Prophet Robe", tipo:"Peto", imagen:W+"prophet_robe"+S,
        descripcion:"Túnica del Profeta. Clase inicial de Fe con poco Vigor. Ligera.", como_obtener:"Equipo inicial del Profeta.", notas:"" },
      { id:"arm_061", nombre:"Capucha del Prisionero", nombre_en:"Prisoner Iron Mask", tipo:"Casco", imagen:W+"prisoner_iron_mask"+S,
        descripcion:"La famosa máscara de hierro del Prisionero. Icónica en el marketing.", como_obtener:"Equipo inicial del Prisionero.", notas:"Icónica en el PvP y en builds de Int." },
      { id:"arm_062", nombre:"Armadura del Guerrero de la Sangre", nombre_en:"Bloodhound's Armor", tipo:"Peto", imagen:W+"bloodhound_knight_armor"+S,
        descripcion:"Armadura del Caballero Sabueso de Sangre. Ligera y oscura.", como_obtener:"Dropeada por los Caballeros Sabueso de Sangre en varias ubicaciones.", notas:"" },
      { id:"arm_063", nombre:"Casco de Caballero Sagrado del Árbol", nombre_en:"Erdtree Knight Helm", tipo:"Casco", imagen:W+"erdtree_knight_helm"+S,
        descripcion:"Casco dorado de los Caballeros del Árbol Gracia. Alta resistencia sagrada.", como_obtener:"Dropeado por los Caballeros del Árbol en Leyndell y en el Haligtree.", notas:"" },
      { id:"arm_064", nombre:"Armadura de Caballero Sagrado del Árbol", nombre_en:"Erdtree Knight Armor", tipo:"Peto", imagen:W+"erdtree_knight_armor"+S,
        descripcion:"Peto dorado de los Caballeros del Árbol. Excelente para builds de Fe.", como_obtener:"Dropeado por los Caballeros del Árbol.", notas:"" },
    ],

    // ═══ TALISMANES ═══
    talismanes: [
      { id:"tal_056", nombre:"Talismán Escorpión de Relámpago", nombre_en:"Lightning Scorpion Charm", tipo:"Talismán", imagen:W+"lightning_scorpion_charm"+S,
        descripcion:"Aumenta el daño de relámpago pero aumenta el daño físico recibido.", como_obtener:"En la Tumba de los Héroes de Sainted, Altus.", notas:"" },
      { id:"tal_057", nombre:"Talismán Escorpión de Hielo", nombre_en:"Frostbite Scorpion Charm", tipo:"Talismán", imagen:W+"frostbite_scorpion_charm"+S,
        descripcion:"Aumenta el daño de Escarcha pero aumenta daño físico recibido.", como_obtener:"En la Cueva de las Piedras de Hielo, Montañas de los Gigantes.", notas:"" },
      { id:"tal_058", nombre:"Emblema de Escudo Ritual", nombre_en:"Ritual Shield Talisman", tipo:"Talismán", imagen:W+"ritual_shield_talisman"+S,
        descripcion:"Aumenta la absorción cuando el HP está al máximo. Opuesto al Ritual Sword.", como_obtener:"En la Catedral de los Espectros Sangrientos, Altus.", notas:"" },
      { id:"tal_059", nombre:"Talismán de Acero Dragoncrest", nombre_en:"Dragoncrest Shield Talisman +2", tipo:"Talismán", imagen:W+"dragoncrest_shield_talisman_%2B2"+S,
        descripcion:"Versión +2. Gran aumento de absorción física.", como_obtener:"En las Catacumbas del Crisol, Altus (mapa avanzado).", notas:"" },
      { id:"tal_060", nombre:"Talismán de la Cabeza de Dragón Colosal", nombre_en:"Crucible Scale Talisman", tipo:"Talismán", imagen:W+"crucible_scale_talisman"+S,
        descripcion:"Reduce el daño recibido de los AoW de los enemigos.", como_obtener:"En las Catacumbas del Crisol, Altus.", notas:"" },
      { id:"tal_061", nombre:"Talismán de la Escama del Crisol", nombre_en:"Pearldrake Talisman +2", tipo:"Talismán", imagen:W+"pearldrake_talisman_%2B2"+S,
        descripcion:"Aumenta la absorción de todos los tipos de daño no-físico.", como_obtener:"En el Árbol Hierático de Miquella, en un cofre en Elphael.", notas:"" },
      { id:"tal_062", nombre:"Talismán del Anciano Señor", nombre_en:"Old Lord's Talisman", tipo:"Talismán", imagen:W+"old_lord%27s_talisman"+S,
        descripcion:"Extiende la duración de los efectos de hechizos e incantaciones.", como_obtener:"En las Catacumbas del Final del Farum Azula.", notas:"Combinado con Cerulean Hidden Tear en el Frasco es devastador." },
      { id:"tal_063", nombre:"Talismán del Ladrón de Vida", nombre_en:"Taker's Cameo", tipo:"Talismán", imagen:W+"taker%27s_cameo"+S,
        descripcion:"Restaura HP al matar enemigos. Excelente para ataques rápidos.", como_obtener:"Recompensa de la primera misión de asesinato del Volcán Manor.", notas:"" },
      { id:"tal_064", nombre:"Talismán de la Pieza del Escudo", nombre_en:"Arrow's Sting Talisman", tipo:"Talismán", imagen:W+"arrow%27s_sting_talisman"+S,
        descripcion:"Aumenta el daño de los proyectiles (flechas y balas).", como_obtener:"En la Fortaleza de Stormveil, en un cofre oculto.", notas:"" },
      { id:"tal_065", nombre:"Talismán Cuchilla de Viento", nombre_en:"Winged Sword Insignia", tipo:"Talismán", imagen:W+"winged_sword_insignia"+S,
        descripcion:"Aumenta el daño de ataque al encadenar combos rápidos.", como_obtener:"Obtenido del cadáver de Millicent al resolver su misión (opción honrosa).", notas:"Combinado con Rotten Winged Sword Insignia es devastador." },
    ],

    // ═══ HECHIZOS ═══
    hechizos: [
      { id:"hec_041", nombre:"Piedra Deslizante de Carian", nombre_en:"Carian Slicer", tipo:"Hechizo", imagen:W+"carian_slicer"+S,
        descripcion:"Crea una hoja de glintstone como arma cuerpo a cuerpo. La mejor relación FP/daño de todos los hechizos.", como_obtener:"Comprado a Sellen en la Calle de la Arena, Caelid.", requisitos:"Int 14" },
      { id:"hec_042", nombre:"Granizo de Espadas de Carian", nombre_en:"Carian Phalanx", tipo:"Hechizo", imagen:W+"carian_phalanx"+S,
        descripcion:"Crea una cúpula de espadas de glintstone que atacan a los enemigos cercanos.", como_obtener:"Comprado a Sellen tras avanzar su misión.", requisitos:"Int 34" },
      { id:"hec_043", nombre:"Caminante Estelar de Carian", nombre_en:"Carian Greatsword", tipo:"Hechizo", imagen:W+"carian_greatsword"+S,
        descripcion:"Invoca un espadón enorme de glintstone para golpear. Muy alto daño.", como_obtener:"Comprado a Sellen.", requisitos:"Int 24" },
      { id:"hec_044", nombre:"Espada Lunar Nocturna de Adula", nombre_en:"Adula's Moonblade", tipo:"Hechizo", imagen:W+"adula%27s_moonblade"+S,
        descripcion:"Hoja de luna que atraviesa enemigos y aplica Escarcha. Imprescindible para Int.", como_obtener:"Dropeado por el Dragón Luna Adula en las Cataratas de la Luna, Liurnia.", requisitos:"Int 32" },
      { id:"hec_045", nombre:"Glintstone Estrellas", nombre_en:"Star Shower", tipo:"Hechizo", imagen:W+"star_shower"+S,
        descripcion:"Lanza múltiples pequeños proyectiles de glintstone. Buen daño total.", como_obtener:"Comprado a Sellen.", requisitos:"Int 24" },
      { id:"hec_046", nombre:"Glintstone Lluvia", nombre_en:"Glintstone Rain", tipo:"Hechizo", imagen:W+"glintstone_rain"+S,
        descripcion:"Lluvia de pequeños proyectiles de glintstone. Gran área.",
        como_obtener:"Comprado a Sellen o encontrado en la Academia.", requisitos:"Int 14" },
      { id:"hec_047", nombre:"Escudo Mágico de Carian", nombre_en:"Carian Retaliation", tipo:"Hechizo", imagen:W+"carian_retaliation"+S,
        descripcion:"Contraataque mágico con el escudo. Refleja los hechizos del oponente.", como_obtener:"Comprado a War Counselor Iji en el Camino de Caria.", requisitos:"Int 18" },
      { id:"hec_048", nombre:"Lluvia de Destierro Estelar", nombre_en:"Stars of Ruin", tipo:"Hechizo", imagen:W+"stars_of_ruin"+S,
        descripcion:"Doce asteroides de ruinas que persiguen al objetivo. Devastador en PvP.", como_obtener:"Obtenido al completar la misión de Sellen.", requisitos:"Int 43" },
      { id:"hec_049", nombre:"Camino de la Tierra Mágica", nombre_en:"Terra Magicus", tipo:"Hechizo", imagen:W+"terra_magicus"+S,
        descripcion:"Crea una zona en el suelo que aumenta masivamente el daño de magia.", como_obtener:"Comprado a Primeval Sorcerer Azur en las Cataratas Hermit.", requisitos:"Int 20" },
      { id:"hec_050", nombre:"Guante de Glintstone", nombre_en:"Glintstone Cometshard", tipo:"Hechizo", imagen:W+"glintstone_cometshard"+S,
        descripcion:"Versión reducida de Comet Azur. Menos FP, disparo continuo de glintstone.", como_obtener:"Encontrado en las Ruinas del Lago de Caelid.", requisitos:"Int 36" },
    ],

    // ═══ INCANTACIONES ═══
    incantaciones: [
      { id:"inc_041", nombre:"Guirnaldas del Árbol", nombre_en:"Erdtree Greatshield", tipo:"Incantación", imagen:W+"barrier_of_gold"+S,
        descripcion:"Crea un muro dorado que absorbe el daño mágico. Excelente barrera.", como_obtener:"Dropeada por los Caballeros del Árbol en Leyndell.", requisitos:"Fe 47" },
      { id:"inc_042", nombre:"Barrera de Oro", nombre_en:"Barrier of Gold", tipo:"Incantación", imagen:W+"barrier_of_gold"+S,
        descripcion:"Crea un escudo dorado masivo que reduce enormemente el daño mágico recibido.", como_obtener:"Comprado a Corhyn o encontrado en Leyndell.", requisitos:"Fe 47" },
      { id:"inc_043", nombre:"Cura de la Llaga", nombre_en:"Cure Poison", tipo:"Incantación", imagen:W+"cure_poison"+S,
        descripcion:"Cura el envenenamiento del jugador.", como_obtener:"Comprado a Corhyn o Miriel al inicio del juego.", requisitos:"Fe 10" },
      { id:"inc_044", nombre:"Absolver los Males", nombre_en:"Lord's Heal", tipo:"Incantación", imagen:W+"lord%27s_heal"+S,
        descripcion:"Restaura HP del jugador y de aliados cercanos de forma masiva.", como_obtener:"Comprado a Corhyn tras avanzar su misión en Altus.", requisitos:"Fe 58" },
      { id:"inc_045", nombre:"Luz del Sol del Fundador", nombre_en:"Founding Rain of Stars", tipo:"Incantación", imagen:W+"founding_rain_of_stars"+S,
        descripcion:"Versión de Fe de la lluvia de estrellas. Rayos sagrados del cielo.", como_obtener:"En el Templo de Eiglay, Volcán Manor.", requisitos:"Fe 35" },
      { id:"inc_046", nombre:"Aura de los Ancestros", nombre_en:"Bestial Constitution", tipo:"Incantación", imagen:W+"bestial_constitution"+S,
        descripcion:"Cura el Sangrado y la Escarcha del jugador.", como_obtener:"Comprado a Gurranq tras entregarle varios Huesos de Muerte.", requisitos:"Fe 14" },
      { id:"inc_047", nombre:"Aliento Carmesí de Dragón", nombre_en:"Dragonfire", tipo:"Incantación", imagen:W+"dragonfire"+S,
        descripcion:"Aliento de fuego básico de la Comunión de Dragones. El más accesible.", como_obtener:"Comprado a la Sacerdotisa del Dragón en Caelid con 1 Lagrimona de Dragón.", requisitos:"Fe 15, Arc 10" },
      { id:"inc_048", nombre:"Aliento de Hielo de Dragón", nombre_en:"Dragonice", tipo:"Incantación", imagen:W+"dragonice"+S,
        descripcion:"Aliento de hielo de la Comunión de Dragones. Aplica Escarcha.", como_obtener:"Comprado a la Sacerdotisa del Dragón con 1 Lagrimona.", requisitos:"Fe 15, Arc 10" },
      { id:"inc_049", nombre:"Aliento de Rayo de Dragón", nombre_en:"Dragon Maw", tipo:"Incantación", imagen:W+"dragon_maw"+S,
        descripcion:"El aliento de dragón más poderoso. Enorme daño relámpago.", como_obtener:"Comprado a la Sacerdotisa del Dragón con 2 Lagromonas.", requisitos:"Fe 23, Arc 15" },
      { id:"inc_050", nombre:"Sello de la Maledición Divina", nombre_en:"Pest Threads", tipo:"Incantación", imagen:W+"pest_threads"+S,
        descripcion:"Dispara hilos de plaga que aplican varios estados negativos. Excelente para acumular enfermedades.", como_obtener:"Recompensa de derrotar al Espíritu Gurranq en las Catacumbas de la Bestia.", requisitos:"Fe 11" }
    ],

    // ═══ CONSUMIBLES ═══
    consumibles: [
      { id:"con_031", nombre:"Polvillo de Glintstone", nombre_en:"Glintstone Dust", tipo:"Consumible", imagen:W+"glintstone_dust"+S,
        descripcion:"Polvo mágico. Se puede arrojar para crear destellos de glintstone.", como_obtener:"Crafteable y encontrado en la Academia.", notas:"" },
      { id:"con_032", nombre:"Piedra de Afilar Portátil", nombre_en:"Whetstone Knife", tipo:"Herramienta", imagen:W+"whetstone_knife"+S,
        descripcion:"Permite cambiar las Cenizas de Guerra de los equipos en cualquier momento.", como_obtener:"En un cofre en las Ruinas de la Puerta Fronteriza, Necrolimbo.", notas:"Item esencial — nunca podrás cambiar AoW sin este objeto." },
      { id:"con_033", nombre:"Recuerdos de los Muertos", nombre_en:"Phantom Bloody Finger", tipo:"Herramienta PvP", imagen:W+"phantom_bloody_finger"+S,
        descripcion:"Invade el mundo de otro jugador como fantasma. PvP.", como_obtener:"Dropeado por jugadores en modalidad PvP o encontrado en el mundo.", notas:"" },
      { id:"con_034", nombre:"Dedo Ensangrentado", nombre_en:"Bloody Finger", tipo:"Herramienta PvP", imagen:W+"bloody_finger"+S,
        descripcion:"Permite invadir el mundo de otro jugador infinitamente (versión reutilizable).", como_obtener:"Obtenido completando la misión de Varre.", notas:"" },
      { id:"con_035", nombre:"Piedra del Pálido Oro", nombre_en:"Golden Rune [1]", tipo:"Consumible runas", imagen:W+"golden_rune_1"+S,
        descripcion:"Objeto consumible que otorga runas al usarse.", como_obtener:"Encontrada en todo el mundo. La más básica.", notas:"" },
      { id:"con_036", nombre:"Gran Piedra del Pálido Oro", nombre_en:"Hero's Rune [5]", tipo:"Consumible runas", imagen:W+"hero%27s_rune_5"+S,
        descripcion:"Runa consumible de un héroe. Otorga muchas runas.", como_obtener:"Encontrada en zonas avanzadas del juego.", notas:"" },
      { id:"con_037", nombre:"Remembranza de Rennala", nombre_en:"Remembrance of the Full Moon Queen", tipo:"Recordatorio", imagen:W+"remembrance_of_the_full_moon_queen"+S,
        descripcion:"Remembranza de Rennala. Se puede duplicar en las Cúpulas de los Muertos del Perdedizo.", como_obtener:"Al derrotar a Rennala, Reina de la Luna Llena.", notas:"" },
      { id:"con_038", nombre:"Remembranza de Maliketh", nombre_en:"Remembrance of the Black Blade", tipo:"Recordatorio", imagen:W+"remembrance_of_the_black_blade"+S,
        descripcion:"Recordatorio de la Bestia de la Noche. Intercambia por la Hoja Negra de Maliketh o la Incantación Hoja Negra.", como_obtener:"Al derrotar a Máliketh en Farum Azula.", notas:"" },
      { id:"con_039", nombre:"Remembranza de Malenia", nombre_en:"Remembrance of the Rot Goddess", tipo:"Recordatorio", imagen:W+"remembrance_of_the_rot_goddess"+S,
        descripcion:"Recordatorio de Malenia. Intercambia por la Mano de Malenia o la Incantación.", como_obtener:"Al derrotar a Malenia en el Árbol Hierático.", notas:"" },
      { id:"con_040", nombre:"Remembranza de Rykard", nombre_en:"Remembrance of the Blasphemous", tipo:"Recordatorio", imagen:W+"remembrance_of_the_blasphemous"+S,
        descripcion:"Recordatorio de Rykard. Intercambia por la Hoja Blasfema o el Sello del Señor del Volcán.", como_obtener:"Al derrotar a Rykard en el Volcán Manor.", notas:"" }
    ],

    // ═══ OBJETOS CLAVE ═══
    objetos_clave: [
      { id:"obj_033", nombre:"Fragmento del Medallón de Haligtree (Izquierda)", nombre_en:"Haligtree Secret Medallion (Left)", tipo:"Medallón", imagen:W+"haligtree_secret_medallion_left"+S,
        descripcion:"La mitad izquierda del Medallón Secreto del Haligtree. Necesario para usar el Gran Ascensor Oculto.", como_obtener:"Recompensa de la misión de Latenna — llevarla al pueblo de los albinauricos en el Campo Sacroníveo.", notas:"" },
      { id:"obj_034", nombre:"Fragmento del Medallón de Haligtree (Derecha)", nombre_en:"Haligtree Secret Medallion (Right)", tipo:"Medallón", imagen:W+"haligtree_secret_medallion_right"+S,
        descripcion:"La mitad derecha del Medallón Secreto del Haligtree. Obtenida en Castillo Sol.", como_obtener:"Al derrotar al Comandante Niall en el Castillo Sol, Montañas de los Gigantes.", notas:"" },
      { id:"obj_035", nombre:"Medallón Dectus (Mitad Superior)", nombre_en:"Dectus Medallion (Left)", tipo:"Medallón", imagen:W+"dectus_medallion_left"+S,
        descripcion:"Mitad superior del Medallón Dectus. Necesario para el Gran Ascensor Dectus.", como_obtener:"En un cofre en la Fortaleza Haight, Necrolimbo.", notas:"" },
      { id:"obj_036", nombre:"Medallón Dectus (Mitad Inferior)", nombre_en:"Dectus Medallion (Right)", tipo:"Medallón", imagen:W+"dectus_medallion_right"+S,
        descripcion:"Mitad inferior del Medallón Dectus.", como_obtener:"En un cofre en la Fortaleza Faroth, Caelid.", notas:"" },
      { id:"obj_037", nombre:"Clave de la Gran Biblioteca", nombre_en:"Dark Moon Ring", tipo:"Llave", imagen:W+"dark_moon_ring"+S,
        descripcion:"Anillo de la Luna Oscura que abre la bóveda de la Gran Biblioteca. Necesario para la misión de Ranni.", como_obtener:"En la cima del Río Ainsel, tras Astel, Nacido de la Nada.", notas:"" },
      { id:"obj_038", nombre:"Clave de la Fortaleza de Murkwater", nombre_en:"Stonesword Key", tipo:"Llave de Piedra", imagen:W+"stonesword_key"+S,
        descripcion:"Llave de espada de piedra. Desbloquea estatuas de velo de niebla en mazmorras.", como_obtener:"Comprada a varios comerciantes. Encontrada en cofres. Hay ~50 en el juego.", notas:"Úsalas con cuidado — hay más mazmorras selladas que llaves disponibles." },
      { id:"obj_039", nombre:"Vasija de Porcelana", nombre_en:"Crafting Kit", tipo:"Herramienta", imagen:W+"crafting_kit"+S,
        descripcion:"Kit de elaboración de objetos. Permite craftear consumibles con los libros de cocina.", como_obtener:"Comprado a Merchant Kale en la Iglesia de la Elleh, Necrolimbo. Muy barato.", notas:"Item esencial — comprarlo es lo primero que debes hacer al llegar a Necrolimbo." },
      { id:"obj_040", nombre:"Libro de Cocina del Camino", nombre_en:"Nomadic Warrior's Cookbook", tipo:"Recetario", imagen:W+"nomadic_warrior%27s_cookbook_1"+S,
        descripcion:"Libro de recetas del Guerrero Nómada. Desbloquea recetas de consumibles de combate básicos.", como_obtener:"Comprado a Merchant Kale en Necrolimbo.", notas:"" }
    ]
  };

  for (var cat in extra3) {
    if (ITEMS[cat]) {
      for (var i = 0; i < extra3[cat].length; i++) {
        ITEMS[cat].push(extra3[cat][i]);
      }
    } else {
      ITEMS[cat] = extra3[cat];
    }
  }
})();
