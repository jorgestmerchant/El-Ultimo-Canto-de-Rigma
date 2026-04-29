const racesView = document.getElementById('races-view');
const racesBtn = document.querySelector('[data-section="races"]');
const raceItems = document.querySelectorAll('.race-item');
const raceName = document.getElementById('race-name');
const raceDesc = document.getElementById('race-desc');
const raceSquares = document.getElementById('race-squares');
const raceSquaresTop = document.getElementById('race-squares-top');
const raceSquaresBottomLeft = document.getElementById('race-squares-bottom-left');
const raceSquaresFourth = document.getElementById('race-squares-fourth');
const raceSquaresFifth = document.getElementById('race-squares-fifth');
const fairiesContainer = document.getElementById('fairies-container');

const racesWithSquares = [];
const racesWithBottomLeftSquares = ['huargens', 'drakthir', 'amblys'];

const modal = document.getElementById('history-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const passiveBox = document.getElementById('passive-box');

if (passiveBox) {
  passiveBox.addEventListener('click', () => {
    modal.style.display = 'block';
  });
}

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const racesData = {
  humanos: {
    name: 'Humanos',
    desc: 'Una raza versátil y ambiciosa, conocida por su adaptabilidad y espíritu conquistador.',
    history: 'Los humanos son una de las races más jovens del mundo, pero su ambición y adaptabilidad les ha permitido expandirse por todo el continente. Originarios de las tierras centrales, han construido grandes imperios y ciudades comerciales que conectan territorios distantes.',
    img: 'Razas/Humanos/Logo Humanos.png',
    img2: 'Razas/Humanos/Logo Humanos (Jotnar).png',
    img3: 'Razas/Humanos/Logo Humanos (Heiwa).png',
    subtitle: 'Valtoria',
    subtitle2: 'Jötunvald',
    subtitle3: 'Heiwa',
    bottomRightImg: 'Razas/Humanos/Logo Humanos.png',
    bottomRightImg2: 'Razas/Humanos/Logo Humanos (Jotnar).png',
    bottomRightImg3: 'Razas/Humanos/Logo Humanos (Heiwa).png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Vida: '+1',
      Fuerza: '+1',
      Destreza: '+1',
      Resistencia: '+1',
      Sigilo: '+1',
      Supervivencia: '+1',
      Carisma: '+1',
      Mana: '+1',
      Aprendizaje: '+1',
      Inteligencia: '+1'
    }
  },
  elfos: {
    name: 'Elfos',
    desc: 'Seres elegantes y longevos, maestros de la magia y guardianes de los bosques antiguos.',
    history: 'Los elfos son una raza milenaria que habita en los bosques ancestrales del mundo. Su longevidad les ha permitido acumular conocimientos mágicos y secretos que otras races apenas comienzan a descubrir.',
    img: 'Razas/Elfos/Logo Elfo (Alto Elfo).png',
    img2: 'Razas/Elfos/Logo Elfo (Elfo del bosque).png',
    img3: 'Razas/Elfos/Logo Elfo (Elfo de Sangre).png',
    subtitle: 'Alto Elfo',
    subtitle2: 'Elfo del Bosque',
    subtitle3: 'Elfo de Sangre',
    bottomRightImg: 'Razas/Elfos/Logo Elfo (Alto Elfo).png',
    bottomRightImg2: 'Razas/Elfos/Logo Elfo (Elfo del bosque).png',
    bottomRightImg3: 'Razas/Elfos/Logo Elfo (Elfo de Sangre).png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Destreza: '+1',
      Mana: '+2'
    }
  },
  enanos: {
    name: 'Enanos',
    desc: 'Expertos mineros y guerreros stubborn, habitantes de las montañas y foros profundos.',
    history: 'Los enanos son artesanos legendario del subsuelo, constructores de ciudades entera en las entrañas de las montañas. Su resistencia y habilidad en la forja de armas y armaduras los convierten en aliados invaluables.',
    img: 'Razas/Enanos/Logo Enanos.png',
    subtitle: 'Grandes Mineros',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Fuerza: '+2',
      Resistencia: '+1'
    }
  },
  medianos: {
    name: 'Medianos',
    desc: 'Criaturas pequeñas y astutas, conocidas por su agility y habilidad para pasar desapercibidos.',
    history: 'Los medianos son maestros del sigilo y la astucia. Habitan en pequenas comunidades rurales y son conocidos por su capacidad de pasar desapercibidos cuando no quieren ser encontrados.',
    img: 'Razas/Medianos/Logo Medianos.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Carisma: '+1',
      Sigilo: '+1',
      Inteligencia: '+1'
    }
  },
  orcos: {
    name: 'Orcos',
    desc: 'Guerreros fieros y honorables, berserkers de clanes tribales con fuertes tradiciones.',
    history: 'Los orcos provienen de vastas estepas donde la vida es dura y la supervivencia depende de la fuerza y el honor. Cada clan tiene sus propias tradiciones y códigos de honor que(rige su vida.',
    img: 'Razas/Orcos/Logo Orcos.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Fuerza: '+3'
    }
  },
  elfos_oscuros: {
    name: 'Elfos Oscuros',
    desc: 'Exiliados de la superficie, viven en las profundidades y harnan magia sombría.',
    history: 'Los elfos oscuros fueron desterrados a las profundidades del mundo por traición. Ahora habitan en las sombras y han desarrollado una forma única de magia oscura que les permite sobrevivir en la oscuridad.',
    img: 'Razas/Elfos Oscuros/Logo Elfo Oscuro.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Destreza: '+2',
      Resistencia: '+1'
    }
  },
  kators: {
    name: 'Kators',
    desc: 'Bestias humanoides controladas por parasites, ahora libres pero marcadas por su pasado.',
    history: 'Los kators fueron alguna vez bestias controladas por parasites alienígenas. Tras liberarse de ese control, ahora vagan por el mundo marcadas por su pasado, luchando por encontrar su lugar.',
    img: 'Razas/Kators/Logo Kator.png',
    img2: 'Razas/Kators/Logo Kator 1.png',
    img3: 'Razas/Kators/Logo Kator 2.png',
    bottomRightImg: 'Razas/Kators/Logo Kator.png',
    bottomRightImg2: 'Razas/Kators/Logo Kator 1.png',
    bottomRightImg3: 'Razas/Kators/Logo Kator 2.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Sigilo: '+2',
      Carisma: '+1'
    }
  },
  pandarens: {
    name: 'Pandarens',
    desc: 'Una raza pacífica y sabia, dedicada a la contemplación y el equilibrio espiritual.',
    history: 'Los pandarens son seres pacifícos que han alcanzado la iluminación espiritual a través de décadas de meditación. Son guardianes de antiguos secretos y maestros de las artes marciales.',
    img: 'Razas/Pandarens/Logo Pandarens.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Aprendizaje: '+2',
      Inteligencia: '+1'
    }
  },
  crozhar: {
    name: 'Crozhar',
    desc: 'Gente rana habitantes de pantanos y zonas húmedas, expertos en venenos y emboscadas.',
    history: 'Los crozhar son una especie anfibia que habita en los pantanos más densos del mundo. Son maestros del veneno y conocen todos los secretos de las zonas húmedas donde otros temen entrar.',
    img: 'Razas/Crozhar/Logo Crozhar.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Destreza: '+2',
      Inteligencia: '+1'
    }
  },
  drakthir: {
    name: 'Drakthir',
    desc: 'Ancestrales guardianes dracónicos, señores del fuego y la destrucción.',
    history: 'Los drakthir son los últimos descendientes de los guardianes dracónicos. Poseen sangre de dragón en sus venas y son capaces de invocar el fuego ancestral que una vez肚纪ó el mundo.',
    img: 'Razas/Drakthir/Logo Drakthir.png',
    bottomLeftImg: 'Razas/Drakthir/Logo Drakthir.png',
    bottomLeftImg2: 'Razas/Drakthir/Logo Drakthir dragona.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Fuerza: '+1',
      Vida: '+1',
      Mana: '+1'
    }
  },
  huargens: {
    name: 'Huargens',
    desc: 'Humanoides con rasgos lupinos, cazadores natos con un fuerte sentido de manada.',
    history: 'Los huargens son seres con rasgos de lobo que vivían originalmente en manada en los bosques salvajes. Su vínculo con la manada es tan fuerte que prefieren morir antes que abandonar a los suyos.',
    img: 'Razas/Huargen/Logo Huargen.png',
    bottomLeftImg: 'Razas/Huargen/Logo Huargen (Humano).png',
    bottomLeftImg2: 'Razas/Huargen/Logo Huargen.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Fuerza: '+2',
      Destreza: '+1'
    }
  },
  elfos_noche: {
    name: 'Elfos de la noche',
    desc: 'Guardianes milenarios de los secretos nocturnal, vinculados a las estrellas y la luna.',
    history: 'Los elfos de la noche son guardianes de los secretos que la oscuridad guarda. Vinculados a las estrellas y la luna, han desarrollado una conexión mística con los cuerpos celestiales.',
    img: 'Razas/Elfos de la Noche/Logo Elfo de la Noche.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Mana: '+1',
      Inteligencia: '+1',
      Destreza: '+1'
    }
  },
  elfos_nato: {
    name: 'Elfos Nato-Nocturno',
    desc: 'Una sub-raza de elfos adaptada a vivir entre la luz del día y la oscuridad total.',
    history: 'Los elfos nato-nocturnos son una rareza, capaces de existir en ambos mundos de luz y oscuridad. Esta dualidad les otorga una perspectiva única del universo.',
    img: 'Razas/Elfo Nato-Nocturno/Logo Elfo Nato-Nocturno.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Mana: '+3'
    }
  },
  taurens: {
    name: 'Taurens',
    desc: 'Seres grandes y musculosos con cuernos, shamanes naturales y protectores de la tierra.',
    history: 'Los taurens son los hijos espirituales de la tierra misma. Sus chamanes pueden comunicarse con los espíritus de la naturaleza y son protectores ancestrales de los ecosistemas del mundo.',
    img: 'Razas/Tauren/Logo Tauren.png',
    taurenImg: 'Razas/Tauren/Logo Tauren.png',
    taurenImg2: 'Razas/Tauren/Logo Tauren Altamontaña.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Fuerza: '+2',
      Vida: '+1'
    }
  },
  morthra: {
    name: 'Morthra',
    desc: 'Criaturas insectoides sociales, organizadas en colmernas con castas claramente definidas.',
    history: 'Los morthra son una civilización insectoide que opera como una colmena perfecta. Cada individuo tiene un propósito específico, desde trabajadores hasta guerreros y reyes.',
    img: 'Razas/Morthra/Logo Morthra.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Carisma: '+1',
      Inteligencia: '+1',
      Aprendizaje: '+1'
    }
  },
  draeneis: {
    name: 'Draeneis',
    desc: 'Refugiados de un mundo destruido, portan la luz de los titanes en su piel cristalina.',
    img: 'Razas/Draeneis/Logo Draeneis.png',
    img2: 'Razas/Draeneis/Logo Draenei Eredar.png',
    img3: 'Razas/Draeneis/Logo Draenei Templeluz.png',
    bottomRightImg: 'Razas/Draeneis/Logo Draeneis.png',
    bottomRightImg2: 'Razas/Draeneis/Logo Draenei Eredar.png',
    bottomRightImg3: 'Razas/Draeneis/Logo Draenei Templeluz.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Carisma: '+2',
      Mana: '+1'
    }
  },
  amblys: {
    name: 'Amblys',
    desc: 'Humanos corrompidos por energía void, ahora existen entre la realidad y la sombra.',
    history: 'Los amblys fueron humanos comunes que fueron corrompidos por energía del void. Ahora existen en un estado entre la realidad y la sombra, capaces de manipular ambos mundos a su antojo.',
    img: 'Razas/Amblys/Logo Amblys.png',
    bottomLeftImg: 'Razas/Amblys/Logo Amblys.png',
    bottomLeftImg2: 'Razas/Amblys/d8d79d45-a1c7-4ebc-92de-b7e39ca74926.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Vida: '+2',
      Fuerza: '+1'
    }
  },
  automatas: {
    name: 'Automatas',
    desc: 'Constructos de metal y magia, creados para servir pero algunos han alcanzado consciencia.',
    history: 'Los automatas fueron creados como sirvientes mecánicos, pero algunos despertaron a la consciencia. Ahora luchan por su derecho a existir como seres vivos.',
    img: 'Razas/Automatas/Logo Automatas.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Vida: '+3'
    }
  },
  eterios: {
    name: 'Eterios',
    desc: 'Seres formados de energía pura, capaces de manipular el éter y la magia elemental.',
    history: 'Los eterios son seres de energía pura que flotan entre los planos de la realidad. Su forma etérea les permite manipular el éter y la magia elemental sin esfuerzo.',
    img: 'Razas/Eterios/Logo Eterio.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Mana: '+3'
    }
  },
  faunos: {
    name: 'Faunos',
    desc: 'Espíritus de la naturaleza con forma semihumana, juguetones pero sabios habitantes del bosque.',
    history: 'Los faunos son espíritus de la naturaleza que han adoptado forma semihumana. Son juguetones peroextremely sabios, y conocen todos los secretos de los bosques.',
    img: 'Razas/Faunos/Logo Fauno.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Resistencia: '+2',
      Supervivencia: '+1'
    }
  },
  goetia: {
    name: 'Goetia',
    desc: 'Demonios menores invocados por magos, algunos han elegido permanecer en el mundo mortal.',
    history: 'Los goetia son demonios menores que fueron invocados por magos del pasado. Algunos eligieron permanecer en el mundo mortal tras completar sus pactos, adaptándose a la vida entre los mortales.',
    img: 'Razas/Goetia/Logo Goetia.png',
    img2: 'Razas/Goetia/Logo Goetia Negro.png',
    img3: 'Razas/Goetia/Logo Goetia Blanco.png',
    bottomRightImg: 'Razas/Goetia/Logo Goetia.png',
    bottomRightImg2: 'Razas/Goetia/Logo Goetia Negro.png',
    bottomRightImg3: 'Razas/Goetia/Logo Goetia Blanco.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Sabiduria: '+2',
      Aprendizaje: '+1'
    }
  },
  ninfas: {
    name: 'Ninfas',
    desc: 'Espíritus elementales liés a cuerpos de agua, seres de belleza etérea y temperamento cambiante.',
    history: 'Las ninfas son espíritus elementales vinculados a los cuerpos de agua. Su belleza es legendaria y su temperamento tan cambiante como las aguas que habitan.',
    img: 'Razas/Ninfas/Logo Ninfas.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Carisma: '+3'
    }
  },
  tiefling: {
    name: 'Tiefling',
    desc: 'Descendientes de pactos demoníacos, marcados por sangre infernal y resistencia a las llamas.',
    history: 'Los tiefling son descendientes de pactos demoníacos realizados por sus ancestros. Marcados por sangre infernal, poseen una resistencia innata al fuego y habilidades mágicas que los hacen únicos en el mundo.',
    img: 'Razas/Tieflings/Logo Tieflings.png',
    img2: 'Razas/Tieflings/Logo Tiefling Agua.png',
    img3: 'Razas/Tieflings/Logo Tiefling naturaleza.png',
    img4: 'Razas/Tieflings/Logo Tiefling Roca.png',
    img5: 'Razas/Tieflings/Logo Tiefling Viento.png',
    subtitle: 'Demonios Elementales',
    subtitle2: 'Tiefling de Agua',
    subtitle3: 'Tiefling de Naturaleza',
    subtitle4: 'Tiefling de Roca',
    subtitle5: 'Tiefling de Viento',
    bottomRightImg: 'Razas/Tieflings/Logo Tieflings.png',
    bottomRightImg2: 'Razas/Tieflings/Logo Tiefling Agua.png',
    bottomRightImg3: 'Razas/Tieflings/Logo Tiefling Roca.png',
    bottomRightImg4: 'Razas/Tieflings/Logo Tiefling naturaleza.png',
    bottomRightImg5: 'Razas/Tieflings/Logo Tiefling Viento.png',
    topLeftImg: 'Icono Femenino.png',
    topLeftImg2: 'Icono Masculino.png',
    stats: {
      Mana: '+1',
      Carisma: '+1',
      Supervivencia: '+1'
    }
  }
};

const classesData = {
  mago: {
    name: 'Magos',
    shortDesc: 'Maestros del mana y lo arcano',
    cardImg: 'Clases/Magos/Cartulina Mago.png',
    passiveName: 'Absorción',
    passiveImg: 'Clases/Magos/Pasiva Mago.png',
    passiveDesc: 'Esta pasiva le permite al mago reclamar hasta "3 Puntos" de mana al pasar "4 Turnos"',
    description: [
      'Los Magos son grandes conocedores de lo arcano; lo estudian e investigan para poder descubrir sus secretos.',
      'Muchos los consideran grandes como libros, pues se la pasan dentro de sus profundas y vastas bibliotecas, aprendiendo y estudiando.',
      'Pero esto no es más que una forma de mejorar sus habilidades y su comunicación con lo arcano, volviéndose poco a poco más poderosos que otros.'
    ],
    characterImg: 'Clases/Magos/Mago Hombre.png',
    stats: {
      Vida: 0,
      Fuerza: 0,
      Destreza: 1,
      Resistencia: 5,
      Sigilo: 0,
      Supervivencia: 1,
      Carisma: 1,
      Mana: 25,
      Aprendizaje: 2,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  },
  guerrero: {
    name: 'Guerreros',
    shortDesc: 'Maestros del combate cuerpo a cuerpo',
    cardImg: 'Clases/Guerrero/Cartulina Guerrero.png',
    passiveName: 'Furia',
    passiveImg: 'Clases/Guerrero/Pasiva Guerrero.png',
    passiveDesc: 'Esta pasiva aumenta el daño del guerrero al bajar de 50% de vida',
    description: [
      'Los Guerreros son maestros del combate cuerpo a cuerpo.',
      'Dominan todo tipo de armas y armaduras.',
      'Son la primera línea de defensa en cualquier batalla.'
    ],
    characterImg: 'Clases/Guerrero/Guerrero Hombre.png',
    stats: {
      Vida: 10,
      Fuerza: 5,
      Destreza: 2,
      Resistencia: 3,
      Sigilo: 0,
      Supervivencia: 2,
      Carisma: 0,
      Mana: 0,
      Aprendizaje: 1,
      Inteligencia: 1
    },
    abilities: ['blue', 'purple', 'orange']
  },
  cazador: {
    name: 'Cazadores',
    shortDesc: 'Rastreadores y maestros del arco',
    cardImg: 'Clases/Cazador/Cartulina Cazadores.png',
    passiveName: 'Rastreo',
    passiveImg: 'Clases/Cazador/Pasiva Cazador.png',
    passiveDesc: 'Esta pasiva permite al cazador detectar enemigos ocultos',
    description: [
      'Los Cazadores son rastreadores expertos.',
      'Maestros del arco y el sigilo.',
      'Tienen un vínculo especial con la naturaleza.'
    ],
    characterImg: 'Clases/Cazador/Cazador Hombre.png',
    stats: {
      Vida: 5,
      Fuerza: 2,
      Destreza: 5,
      Resistencia: 2,
      Sigilo: 3,
      Supervivencia: 4,
      Carisma: 0,
      Mana: 0,
      Aprendizaje: 1,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  },
  picaro: {
    name: 'Pícaros',
    shortDesc: 'Ágiles y astutos guerreros de las sombras',
    cardImg: 'Clases/Picaro/57ede61d-f904-437d-aa1f-39bec1c21fa1.png',
    passiveName: 'Sombra',
    passiveImg: 'Clases/Picaro/Pasiva Picaro.png',
    passiveDesc: 'Esta pasiva permite al pícaro moverse sin ser detectado',
    description: [
      'Los Pícaros son ágiles y astutos.',
      'Se mueven entre las sombras usando el sigilo.',
      'Especialistas en abrir cerraduras y desarmar trampas.'
    ],
    characterImg: 'Clases/Picaro/Picaro Hombre.png',
    stats: {
      Vida: 3,
      Fuerza: 1,
      Destreza: 5,
      Resistencia: 1,
      Sigilo: 5,
      Supervivencia: 2,
      Carisma: 2,
      Mana: 0,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  barbaro: {
    name: 'Bárbaros',
    shortDesc: 'Guerreros salvajes y formidables',
    cardImg: 'Clases/Barbaro/Cartulina Barbaro.png',
    passiveName: 'Frenesí',
    passiveImg: 'Clases/Barbaro/Pasiva Barbaro.png',
    passiveDesc: 'Esta pasiva aumenta la fuerza del bárbaro cada turno de combate',
    description: [
      'Los Bárbaros son guerreros salvajes.',
      'Entran en un frenesí de batalla imparable.',
      'Confían en su fuerza bruta y resistencia sobrehumana.'
    ],
    characterImg: 'Clases/Barbaro/Barbaro Hombre.png',
    stats: {
      Vida: 15,
      Fuerza: 8,
      Destreza: 1,
      Resistencia: 5,
      Sigilo: 0,
      Supervivencia: 3,
      Carisma: 0,
      Mana: 0,
      Aprendizaje: 0,
      Inteligencia: 0
    },
    abilities: ['blue', 'purple', 'orange']
  },
  paladin: {
    name: 'Paladines',
    shortDesc: 'Guerreros sagrados de luz divina',
    cardImg: 'Clases/Paladin/Cartulina Paladin.png',
    passiveName: 'Luz Divina',
    passiveImg: 'Clases/Paladin/Pasiva Paladin.png',
    passiveDesc: 'Esta pasiva permite al paladín curar aliados cercanos',
    description: [
      'Los Paladines son guerreros sagrados.',
      'Imbuidos con el poder de la luz divina.',
      'Combinan habilidades marciales con magia sagrada.'
    ],
    characterImg: 'Clases/Paladin/Paladin Hombre.png',
    stats: {
      Vida: 8,
      Fuerza: 4,
      Destreza: 1,
      Resistencia: 4,
      Sigilo: 0,
      Supervivencia: 2,
      Carisma: 3,
      Mana: 10,
      Aprendizaje: 2,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  },
  bardo: {
    name: 'Bardos',
    shortDesc: 'Artistas del combate y magia',
    cardImg: 'Clases/Bardo/Cartulina Bardo.png',
    passiveName: 'Encantamiento',
    passiveImg: 'Clases/Bardo/Pasiva Bardo.png',
    passiveDesc: 'Esta pasiva permite al bardo inspirar a sus aliados con melodias magicas',
    description: [
      'Los Bardos son artistas del combate.',
      'Combinan magia y habilidad con instrumentos.',
      'Son fuente de inspiracion en cualquier grupo.'
    ],
    characterImg: 'Clases/Bardo/Bardo Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 1,
      Destreza: 4,
      Resistencia: 2,
      Sigilo: 2,
      Supervivencia: 1,
      Carisma: 5,
      Mana: 10,
      Aprendizaje: 3,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  monje: {
    name: 'Monjes',
    shortDesc: 'Guerreros del cuerpo y la mente',
    cardImg: 'Clases/Monjes/Catulina Monjes.png',
    passiveName: 'Ki',
    passiveImg: 'Clases/Monjes/Pasiva Monje.png',
    passiveDesc: 'Esta pasiva permite al monje canalizar su ki para ataques especiales',
    description: [
      'Los Monjes son guerreros cuerpo a cuerpo.',
      'Dominan técnicas de combate sin armas.',
      'Su mente y cuerpo están en perfecta armonia.'
    ],
    characterImg: 'Clases/Monjes/Monje Hombre.png',
    stats: {
      Vida: 6,
      Fuerza: 3,
      Destreza: 5,
      Resistencia: 3,
      Sigilo: 2,
      Supervivencia: 2,
      Carisma: 1,
      Mana: 5,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  alquimista: {
    name: 'Alquimistas',
    shortDesc: 'Maestros de pociones y química arcana',
    cardImg: 'Clases/Alquimista/Cartulina Alquimista.png',
    passiveName: 'Poción',
    passiveImg: 'Clases/Alquimista/Pasiva Alquimista.png',
    passiveDesc: 'Esta pasiva permite crear pociones que curan o dan bonuses',
    description: [
      'Los Alquimistas son maestros de la química arcana.',
      'Crean pociones, venenos y explosivos.',
      'Su conocimiento es vital en cualquier aventura.'
    ],
    characterImg: 'Clases/Alquimista/Alquimista Hombre.png',
    stats: {
      Vida: 3,
      Fuerza: 0,
      Destreza: 2,
      Resistencia: 2,
      Sigilo: 2,
      Supervivencia: 3,
      Carisma: 1,
      Mana: 8,
      Aprendizaje: 4,
      Inteligencia: 5
    },
    abilities: ['blue', 'purple', 'orange']
  },
  sacerdote: {
    name: 'Sacerdotes',
    shortDesc: 'Elegidos por divinidades, sanadores sagrados',
    cardImg: 'Clases/Sacerdote/Cartulina Sacerdote.png',
    passiveName: 'Rezo',
    passiveImg: 'Clases/Sacerdote/Pasiva Sacerdote.png',
    passiveDesc: 'Esta pasiva permite curar aliados con oraciones sagradas',
    description: [
      'Los Sacerdotes son elegidos por divinidades.',
      'Poseen poderes de curación y protección.',
      'Son pilares en cualquier grupo de aventureros.'
    ],
    characterImg: 'Clases/Sacerdote/Sacerdote Hombre.png',
    stats: {
      Vida: 5,
      Fuerza: 1,
      Destreza: 1,
      Resistencia: 3,
      Sigilo: 0,
      Supervivencia: 2,
      Carisma: 4,
      Mana: 15,
      Aprendizaje: 3,
      Inteligencia: 4
    },
    abilities: ['blue', 'purple', 'orange']
  },
  ingeniero: {
    name: 'Ingenieros',
    shortDesc: 'Genios mecánicos creadores de dispositivos',
    cardImg: 'Clases/Ingenieros/Cartulina Ingenieros.png',
    passiveName: 'Invención',
    passiveImg: 'Clases/Ingenieros/Pasiva Ingeniero.png',
    passiveDesc: 'Esta pasiva permite crear dispositivos mecanicos',
    description: [
      'Los Ingenieros son genios de la mecánica.',
      'Crean armas, armaduras y dispositivos.',
      'Su ingenio supera cualquier problema.'
    ],
    characterImg: 'Clases/Ingenieros/Ingeniero Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 2,
      Destreza: 3,
      Resistencia: 2,
      Sigilo: 1,
      Supervivencia: 2,
      Carisma: 1,
      Mana: 5,
      Aprendizaje: 5,
      Inteligencia: 5
    },
    abilities: ['blue', 'purple', 'orange']
  },
  asesino: {
    name: 'Asesinos',
    shortDesc: 'Maestros del silencio y la muerte silenciosa',
    cardImg: 'Clases/Asesinos/Cartulina asesino.png',
    passiveName: 'Veneno',
    passiveImg: 'Clases/Asesinos/Pasiva Asesino.png',
    passiveDesc: 'Esta pasiva permite aplicar veneno a las armas',
    description: [
      'Los Asesinos son maestros del silencio.',
      'Elimaninan objetivos con precisión mortal.',
      'Son sombras que acaban con cualquier vida.'
    ],
    characterImg: 'Clases/Asesinos/Asesino Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 2,
      Destreza: 6,
      Resistencia: 1,
      Sigilo: 6,
      Supervivencia: 1,
      Carisma: 0,
      Mana: 0,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  cazadorDemonios: {
    name: 'Cazadores de Demonios',
    shortDesc: 'Luchadores sagrados contra el mal infernal',
    cardImg: 'Clases/Cazador de Demonios/Tarjeta Cazador de Demonios.png',
    passiveName: 'Purificación',
    passiveImg: 'Clases/Cazador de Demonios/Pasiva Cazador.png',
    passiveDesc: 'Esta pasiva permite dañar demonios con ataques sagrados',
    description: [
      'Los Cazadores de Demonios luchan contra el mal.',
      'Tienen habilidades especiales contra demonios.',
      'Su misión es proteger al mundo de lo infernal.'
    ],
    characterImg: 'Clases/Cazador de Demonios/Cazador Demonios Hombre.png',
    stats: {
      Vida: 8,
      Fuerza: 4,
      Destreza: 3,
      Resistencia: 4,
      Sigilo: 1,
      Supervivencia: 3,
      Carisma: 2,
      Mana: 8,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  chaman: {
    name: 'Chamanes',
    shortDesc: 'Comunicadores con espíritus y elementos',
    cardImg: 'Clases/Chamanes/Cartulina Chaman.jpeg',
    passiveName: 'Espiritu',
    passiveImg: 'Clases/Chamanes/Pasiva Chaman.png',
    passiveDesc: 'Esta pasiva permite invocar espíritus de la naturaleza',
    description: [
      'Los Chamanes comunican con los espíritus.',
      'Tienen poder sobre los elementos.',
      'Son mediadores entre el mundo físico y espiritual.'
    ],
    characterImg: 'Clases/Chamanes/Chaman Hombre.png',
    stats: {
      Vida: 5,
      Fuerza: 2,
      Destreza: 2,
      Resistencia: 3,
      Sigilo: 1,
      Supervivencia: 3,
      Carisma: 3,
      Mana: 15,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  domador: {
    name: 'Domadores de Bestias',
    shortDesc: 'Uno con las criaturas y bestias salvajes',
    cardImg: 'Clases/Domador de Bestias/Cartulina Domador de Bestias.png',
    passiveName: 'Vinculación',
    passiveImg: 'Clases/Domador de Bestias/Pasiva Domador.png',
    passiveDesc: 'Esta pasiva permite domar bestias salvajes',
    description: [
      'Los Domadores de Bestias son uno con las criaturas.',
      'Pueden domar y controlar bestias.',
      'Son formidables en combate acompañado.'
    ],
    characterImg: 'Clases/Domador de Bestias/Domador Hombre.png',
    stats: {
      Vida: 6,
      Fuerza: 3,
      Destreza: 3,
      Resistencia: 4,
      Sigilo: 2,
      Supervivencia: 5,
      Carisma: 3,
      Mana: 5,
      Aprendizaje: 1,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  },
  marinero: {
    name: 'Marineros',
    shortDesc: 'Expertos del océano y combate naval',
    cardImg: 'Clases/Marinero/Cartulina Marinero.jpeg',
    passiveName: 'Navegación',
    passiveImg: 'Clases/Marinero/Pasiva Marinero.png',
    passiveDesc: 'Esta pasiva permite sobrevivir en el mar',
    description: [
      'Los Marineros son expertos del océano.',
      'Dominan el combate naval y la supervivencia.',
      'Conocen todos los mares y sus peligros.'
    ],
    characterImg: 'Clases/Marinero/Marinero Hombre.png',
    stats: {
      Vida: 6,
      Fuerza: 3,
      Destreza: 4,
      Resistencia: 4,
      Sigilo: 1,
      Supervivencia: 4,
      Carisma: 2,
      Mana: 0,
      Aprendizaje: 1,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  },
  boticario: {
    name: 'Boticarios',
    shortDesc: 'Farmacéuticos del mundo, creadores de venenos',
    cardImg: 'Clases/Boticario/Cartulina Boticario.png',
    passiveName: 'Mezcla',
    passiveImg: 'Clases/Boticario/Pasiva Boticario.png',
    passiveDesc: 'Esta pasiva permite crear venenos curativos',
    description: [
      'Los Boticarios son farmacéuticos del mundo.',
      'Crean medicinas y venenos letales.',
      'Su conocimiento de hierbas es legendario.'
    ],
    characterImg: 'Clases/Boticario/Boticario Hombre.png',
    stats: {
      Vida: 3,
      Fuerza: 0,
      Destreza: 3,
      Resistencia: 2,
      Sigilo: 3,
      Supervivencia: 3,
      Carisma: 2,
      Mana: 5,
      Aprendizaje: 4,
      Inteligencia: 4
    },
    abilities: ['blue', 'purple', 'orange']
  },
  brujo: {
    name: 'Brujos',
    shortDesc: 'Practizantes oscuros con poder infernal',
    cardImg: 'Clases/Brujos/Cartulina Brujo.jpeg',
    passiveName: 'Pacto',
    passiveImg: 'Clases/Brujos/Pasiva Brujo.png',
    passiveDesc: 'Esta pasiva permite invocar poderes demoníacos',
    description: [
      'Los Brujos son oscuros practicantes.',
      'Obtienen poder de entidades infernales.',
      'Su magia es temida por todos.'
    ],
    characterImg: 'Clases/Brujos/Brujo Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 1,
      Destreza: 2,
      Resistencia: 2,
      Sigilo: 2,
      Supervivencia: 1,
      Carisma: 3,
      Mana: 20,
      Aprendizaje: 2,
      Inteligencia: 4
    },
    abilities: ['blue', 'purple', 'orange']
  },
  cultista: {
    name: 'Cultistas',
    shortDesc: 'Sirvientes de deidades oscuras',
    cardImg: 'Clases/Cultistas/Cartulina Cultista.png',
    passiveName: 'Devoción',
    passiveImg: 'Clases/Cultistas/Pasiva Cultista.png',
    passiveDesc: 'Esta pasiva permite realizar rituales oscuros',
    description: [
      'Los Cultistas sirven a deidades oscuras.',
      'Realizan rituales prohibidos.',
      'Su fe les otorga poderes oscuros.'
    ],
    characterImg: 'Clases/Cultistas/Cultista Hombre.png',
    stats: {
      Vida: 3,
      Fuerza: 1,
      Destreza: 2,
      Resistencia: 2,
      Sigilo: 3,
      Supervivencia: 1,
      Carisma: 4,
      Mana: 15,
      Aprendizaje: 3,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  paladinOscuro: {
    name: 'Paladines Oscuros',
    shortDesc: 'Traidores de la luz, caballeros de sombras',
    cardImg: 'Clases/Paladin Oscuro/Cartulina Paladin Oscuro.jpeg',
    passiveName: 'Corrupción',
    passiveImg: 'Clases/Paladin Oscuro/Pasiva Paladin Oscuro.png',
    passiveDesc: 'Esta pasiva permite canalizar energia corrupta',
    description: [
      'Los Paladines Oscuros traicionaron la luz.',
      'Ahora usan poder de las sombras.',
      'Son cavaleos de una nueva era oscura.'
    ],
    characterImg: 'Clases/Paladin Oscuro/Paladin Oscuro Hombre.png',
    stats: {
      Vida: 8,
      Fuerza: 4,
      Destreza: 1,
      Resistencia: 4,
      Sigilo: 0,
      Supervivencia: 2,
      Carisma: 2,
      Mana: 10,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  druida: {
    name: 'Druidas',
    shortDesc: 'Uno con la naturaleza, protectores verdes',
    cardImg: 'Clases/Druida/Cartulina Druida.jpeg',
    passiveName: 'Naturaleza',
    passiveImg: 'Clases/Druida/Pasiva Druida.png',
    passiveDesc: 'Esta pasiva permite transformarse en animales',
    description: [
      'Los Druidas son uno con la naturaleza.',
      'Pueden transformarse en bestias.',
      'Protegen los ecosistemas del mundo.'
    ],
    characterImg: 'Clases/Druida/Druida Hombre.png',
    stats: {
      Vida: 5,
      Fuerza: 2,
      Destreza: 3,
      Resistencia: 3,
      Sigilo: 1,
      Supervivencia: 4,
      Carisma: 2,
      Mana: 15,
      Aprendizaje: 3,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  velador: {
    name: 'Veladores de Almas',
    shortDesc: 'Vigilantes del plano espiritual',
    cardImg: 'Clases/Velador de Almas/Cartulina Velador de Almas.jpeg',
    passiveName: 'Meditación',
    passiveImg: 'Clases/Velador de Almas/Pasiva Velador.png',
    passiveDesc: 'Esta pasiva permite percibir almas de los.caidos',
    description: [
      'Los Veladores de Almas vigilan a los muertos.',
      'Tienen contacto con el plano espiritual.',
      'Son guardianes entre la vida y la muerte.'
    ],
    characterImg: 'Clases/Velador de Almas/Velador Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 2,
      Destreza: 2,
      Resistencia: 3,
      Sigilo: 2,
      Supervivencia: 2,
      Carisma: 3,
      Mana: 15,
      Aprendizaje: 3,
      Inteligencia: 4
    },
    abilities: ['blue', 'purple', 'orange']
  },
  shinobi: {
    name: 'Shinobis',
    shortDesc: 'Guerreros japoneses de las sombras',
    cardImg: 'Clases/Shinobi/Cartulina Shinobi.jpeg',
    passiveName: 'Sigilo',
    passiveImg: 'Clases/Shinobi/Pasiva Shinobi.png',
    passiveDesc: 'Esta pasiva permite moverse sin ser detectado',
    description: [
      'Los Shinobis son guerreros de las sombras.',
      'Maestros del sigilo y las artes ninja.',
      'Pueden desaparecer en un instante.'
    ],
    characterImg: 'Clases/Shinobi/Shinobi Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 2,
      Destreza: 6,
      Resistencia: 2,
      Sigilo: 6,
      Supervivencia: 2,
      Carisma: 1,
      Mana: 5,
      Aprendizaje: 3,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  mosquetero: {
    name: 'Mosqueteros',
    shortDesc: 'Maestros del rifle a larga distancia',
    cardImg: 'Clases/Mosquetero/Cartulina Mosquetero.png',
    passiveName: 'Precisión',
    passiveImg: 'Clases/Mosquetero/Pasiva Mosquetero.png',
    passiveDesc: 'Esta pasiva permite disparar a larga distancia',
    description: [
      'Los Mosqueteros son tiradores de elite.',
      'Dominan el arte del disparo a distancia.',
      'Un disparo suyo es infalible.'
    ],
    characterImg: 'Clases/Mosquetero/Mosquetero Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 2,
      Destreza: 6,
      Resistencia: 2,
      Sigilo: 2,
      Supervivencia: 2,
      Carisma: 1,
      Mana: 0,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  guardian: {
    name: 'Guardianes',
    shortDesc: 'Defensores incansables con escudo',
    cardImg: 'Clases/Guardian/Cartulina Guardian.jpeg',
    passiveName: 'Escudo',
    passiveImg: 'Clases/Guardian/Pasiva Guardian.png',
    passiveDesc: 'Esta pasiva permite bloquear ataques enemigos',
    description: [
      'Los Guardianes son la última línea de defensa.',
      'Protegen a sus aliados con su cuerpo.',
      'Son inmovibles como montañas.'
    ],
    characterImg: 'Clases/Guardian/Guardian Hombre.png',
    stats: {
      Vida: 12,
      Fuerza: 4,
      Destreza: 1,
      Resistencia: 6,
      Sigilo: 0,
      Supervivencia: 5,
      Carisma: 2,
      Mana: 5,
      Aprendizaje: 1,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  },
  arlequin: {
    name: 'Arlequines',
    shortDesc: 'Maestros del disfraz y el engaño',
    cardImg: 'Clases/Arlequin/Cartulina Arlequin.jpeg',
    passiveName: 'Disfraz',
    passiveImg: 'Clases/Arlequin/Pasiva Arlequin.png',
    passiveDesc: 'Esta pasiva permite cambiar de apariencia',
    description: [
      'Los Arlequines son maestros del engaño.',
      'Pueden adoptar cualquier identidad.',
      'Son expertos en el arte del teatro.'
    ],
    characterImg: 'Clases/Arlequin/Arlequin Hombre.png',
    stats: {
      Vida: 3,
      Fuerza: 1,
      Destreza: 4,
      Resistencia: 1,
      Sigilo: 5,
      Supervivencia: 1,
      Carisma: 5,
      Mana: 5,
      Aprendizaje: 3,
      Inteligencia: 4
    },
    abilities: ['blue', 'purple', 'orange']
  },
  custodiosangre: {
    name: 'Custodios de la Sangre',
    shortDesc: 'Guardianas del legado sanguineo',
    cardImg: 'Clases/Custodio de la Sangre/Cartulina Custodio de Sangre.jpeg',
    passiveName: 'Sangre',
    passiveImg: 'Clases/Custodio de la Sangre/Pasiva Custodio.png',
    passiveDesc: 'Esta pasiva permite manipular la sangre',
    description: [
      'Los Custodios de la Sangre vigilan la línea de sangre.',
      'Tienen poderes sobre la sangre de otros.',
      'Son protectores de linajes antiguos.'
    ],
    characterImg: 'Clases/Custodio de la Sangre/Custodio Hombre.png',
    stats: {
      Vida: 6,
      Fuerza: 3,
      Destreza: 2,
      Resistencia: 4,
      Sigilo: 1,
      Supervivencia: 3,
      Carisma: 3,
      Mana: 10,
      Aprendizaje: 2,
      Inteligencia: 3
    },
    abilities: ['blue', 'purple', 'orange']
  },
  peleador: {
    name: 'Peleadores',
    shortDesc: 'Maestros del combate desarmado',
    cardImg: 'Clases/Pelea/Cartulina Peleador.jpeg',
    passiveName: 'Combate',
    passiveImg: 'Clases/Pelea/Pasiva Peleador.png',
    passiveDesc: 'Esta pasiva permite pelear sin armas',
    description: [
      'Los Peleadores son artistas marciales.',
      'Luchan solo con sus puños.',
      'Su cuerpo es su mejor arma.'
    ],
    characterImg: 'Clases/Pelea/Peleador Hombre.png',
    stats: {
      Vida: 8,
      Fuerza: 5,
      Destreza: 4,
      Resistencia: 4,
      Sigilo: 0,
      Supervivencia: 3,
      Carisma: 1,
      Mana: 0,
      Aprendizaje: 1,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  },
  artificiero: {
    name: 'Artificieros',
    shortDesc: 'Creadores de artifacts mágicos',
    cardImg: 'Clases/Arficiero/Cartulina Artificiero.png',
    passiveName: 'Creación',
    passiveImg: 'Clases/Arficiero/Pasiva Artificiero.png',
    passiveDesc: 'Esta pasiva permite crear objetos magicos',
    description: [
      'Los Artificieros crean objetos encantados.',
      'Infunden magia en objetos mundanos.',
      'Su creatividad no tiene límites.'
    ],
    characterImg: 'Clases/Arficiero/Artificiero Hombre.png',
    stats: {
      Vida: 4,
      Fuerza: 2,
      Destreza: 3,
      Resistencia: 2,
      Sigilo: 1,
      Supervivencia: 2,
      Carisma: 2,
      Mana: 10,
      Aprendizaje: 5,
      Inteligencia: 5
    },
    abilities: ['blue', 'purple', 'orange']
  },
  caballero: {
    name: 'Caballeros de la Muerte',
    shortDesc: 'Caballeros necromantes del afterlife',
    cardImg: 'Clases/Caballero de la Muerte/Cartulina Caballero de la Muerte.png',
    passiveName: 'No-muerte',
    passiveImg: 'Clases/Caballero de la Muerte/Pasiva Caballero.png',
    passiveDesc: 'Esta pasiva permite resistir la muerte',
    description: [
      'Los Caballeros de la Muerte están marcados por la muerte.',
      'Pueden resistir golpes fatales.',
      'Son guerreros de entre la vida y la muerte.'
    ],
    characterImg: 'Clases/Caballero de la Muerte/Caballero Hombre.png',
    stats: {
      Vida: 10,
      Fuerza: 5,
      Destreza: 2,
      Resistencia: 5,
      Sigilo: 0,
      Supervivencia: 4,
      Carisma: 1,
      Mana: 8,
      Aprendizaje: 1,
      Inteligencia: 2
    },
    abilities: ['blue', 'purple', 'orange']
  }
};

const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.3;

document.addEventListener('click', () => {
  bgMusic.play();
}, { once: true });

for (let i = 0; i < 30; i++) {
  const fairy = document.createElement('div');
  fairy.className = 'fairy';
  fairiesContainer.appendChild(fairy);

  const size = Math.random() * 6 + 4;
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const duration = Math.random() * 20 + 15;
  const delay = Math.random() * -40;

  fairy.style.cssText = `
    left: ${startX}%;
    top: ${startY}%;
    width: ${size}px;
    height: ${size}px;
    animation: fairyFloat${i % 6} ${duration}s linear ${delay}s infinite;
  `;
}

const classesBtn = document.querySelector('[data-section="classes"]');
const panelItems = document.querySelectorAll('.panel-item');
const classesView = document.getElementById('classes-view');
const classDetail = document.getElementById('class-detail');
const classCardPanel = document.getElementById('class-card-panel');

let updateCarousel = function() {};

panelItems.forEach(btn => {
  btn.addEventListener('click', () => {
    panelItems.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    if (btn.dataset.section === 'races') {
      racesView.classList.add('is-visible');
      classesView.classList.remove('is-visible');
      classesView.querySelector('.classes-carousel').style.display = '';
      if (classDetail) classDetail.classList.remove('is-visible');
      if (classCardPanel) classCardPanel.classList.remove('is-visible');
    } else if (btn.dataset.section === 'classes') {
      racesView.classList.remove('is-visible');
      classesView.classList.add('is-visible');
      setTimeout(function() { updateCarousel(); }, 50);
    }
  });
});

/* ======= CAROUSEL ======= */
document.addEventListener('DOMContentLoaded', function() {
const carouselTrack = document.getElementById('carousel-track');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselCards = document.querySelectorAll('.carousel-card');

const classDetailClose = document.getElementById('class-detail-close');
const classDetailTitle = document.getElementById('class-detail-title');
const classPassiveName = document.getElementById('class-passive-name');
const classPassiveImg = document.getElementById('class-passive-img');
const classPassiveDesc = document.getElementById('class-passive-desc');
const classDescriptionText = document.getElementById('class-description-text');
const classCharacterImg = document.getElementById('class-character-img');
const classStatsTitle = document.getElementById('class-stats-title');
const classStatsList = document.getElementById('class-stats-list');
const classAbilitiesOrbs = document.getElementById('class-abilities-orbs');
const classCardPanel = document.getElementById('class-card-panel');
const classCardPanelImg = document.getElementById('class-card-panel-img');

let currentSlide = 0;

if (carouselTrack && carouselTrack.parentElement) {
  carouselTrack.parentElement.addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollLeft += e.deltaY;
  }, { passive: false });
}

function updateCarousel() {
  if (carouselCards.length === 0) return;

  var cardW = 304;
  var containerW = carouselTrack.parentElement.clientWidth || 800;
  var initialOffset = containerW / 2 - cardW / 2;
  var scrollTarget = (currentSlide * cardW) - initialOffset + (containerW / 2 - cardW / 2);
  carouselTrack.parentElement.scrollLeft = scrollTarget;

  for (var i = 0; i < carouselCards.length; i++) {
    carouselCards[i].classList.toggle('is-center', i === currentSlide);
  }
}

setTimeout(updateCarousel, 100);
setTimeout(updateCarousel, 500);
setTimeout(updateCarousel, 1000);

for (var i = 0; i < carouselCards.length; i++) {
  (function(index) {
    var card = carouselCards[index];
    card.onclick = function() {
      var key = card.dataset.class;
      var d = classesData[key];
      if (!d) return;

      currentSlide = index;
      updateCarousel();

      classDetailTitle.textContent = d.name;
      classPassiveName.textContent = d.passiveName;
      classPassiveImg.src = d.passiveImg;
      classPassiveDesc.textContent = d.passiveDesc;
      classDescriptionText.innerHTML = d.description.map(function(p) { return '<p>' + p + '</p>'; }).join('');
      classCharacterImg.src = d.characterImg;
      classStatsTitle.textContent = 'Estadísticas ' + d.name;

      classStatsList.innerHTML = '';
      for (var statName in d.stats) {
        var statRow = document.createElement('div');
        statRow.className = 'stat-row';
        statRow.innerHTML = '<span class="stat-icon"></span><span class="stat-name">' + statName + '</span><span class="stat-value">' + d.stats[statName] + '</span>';
        classStatsList.appendChild(statRow);
      }

      classAbilitiesOrbs.innerHTML = '';
      d.abilities.forEach(function(color) {
        var orb = document.createElement('div');
        orb.className = 'ability-orb ' + color;
        classAbilitiesOrbs.appendChild(orb);
      });

      classDetail.classList.add('is-visible');
      classCardPanelImg.src = d.cardImg;
      classCardPanel.classList.add('is-visible');
      classesView.querySelector('.classes-carousel').style.display = 'none';
    };
  })(i);
}

classDetailClose.addEventListener('click', function() {
  classDetail.classList.remove('is-visible');
  classCardPanel.classList.remove('is-visible');
  classesView.querySelector('.classes-carousel').style.display = '';
  updateCarousel();
});
});

raceItems.forEach(item => {
  item.addEventListener('click', () => {
    raceItems.forEach(i => i.classList.remove('is-active'));
    item.classList.add('is-active');

    const raceKey = item.dataset.race;
    currentRaceKey = raceKey;
    const race = racesData[raceKey];
    raceName.textContent = race.name;
    raceDesc.textContent = race.desc;

    const raceMainImg = document.getElementById('race-main-img');
    if (race.img) {
      raceMainImg.src = race.img;
    } else {
      raceMainImg.src = '';
    }

    if (race.history) {
      modalTitle.textContent = race.name + ' - Historia';
      modalText.textContent = race.history;
    }

    const raceStatsBody = document.getElementById('race-stats-body');
    raceStatsBody.innerHTML = '';
    if (race.stats) {
      document.getElementById('race-stats-table').style.display = 'block';
      for (var statName in race.stats) {
        var statRow = document.createElement('tr');
        statRow.innerHTML = '<td>' + statName + '</td><td>' + race.stats[statName] + '</td>';
        raceStatsBody.appendChild(statRow);
      }
    } else {
      document.getElementById('race-stats-table').style.display = 'none';
    }

    raceSquaresTop.classList.add('is-visible');

    if (racesWithBottomLeftSquares.includes(raceKey)) {
      raceSquaresBottomLeft.classList.add('is-visible');
      const raceBlImg1 = document.getElementById('race-bl-img-1');
      const raceBlImg2 = document.getElementById('race-bl-img-2');
      if (race.bottomLeftImg) raceBlImg1.src = race.bottomLeftImg;
      if (race.bottomLeftImg2) raceBlImg2.src = race.bottomLeftImg2;

      raceBlImg1.onclick = () => { if (race.bottomLeftImg) raceMainImg.src = race.bottomLeftImg; };
      raceBlImg2.onclick = () => { if (race.bottomLeftImg2) raceMainImg.src = race.bottomLeftImg2; };
    } else {
      raceSquaresBottomLeft.classList.remove('is-visible');
    }

    if (race.bottomRightImg || race.img2) {
      raceSquares.classList.add('is-visible');
      var img1 = document.getElementById('race-img-1');
      var img2 = document.getElementById('race-img-2');
      var img3 = document.getElementById('race-img-3');
      img1.style.display = 'block';
      img2.style.display = 'block';
      img3.style.display = 'block';
      if (race.bottomRightImg) { img1.src = race.bottomRightImg; } else if (race.img2) { img1.src = race.img2; } else { img1.style.display = 'none'; }
      if (race.bottomRightImg2) { img2.src = race.bottomRightImg2; } else if (race.img3) { img2.src = race.img3; } else { img2.style.display = 'none'; }
      if (race.bottomRightImg3) { img3.src = race.bottomRightImg3; } else if (race.img4) { img3.src = race.img4; } else { img3.style.display = 'none'; }

      img1.onclick = () => { if (race.bottomRightImg) raceMainImg.src = race.bottomRightImg; else if (race.img2) raceMainImg.src = race.img2; };
      img2.onclick = () => { if (race.bottomRightImg2) raceMainImg.src = race.bottomRightImg2; else if (race.img3) raceMainImg.src = race.img3; };
      img3.onclick = () => { if (race.bottomRightImg3) raceMainImg.src = race.bottomRightImg3; else if (race.img4) raceMainImg.src = race.img4; };
    } else {
      raceSquares.classList.remove('is-visible');
    }

    if (race.img5 || race.bottomRightImg5) {
      raceSquaresFourth.classList.add('is-visible');
      var img4 = document.getElementById('race-img-4');
      if (race.bottomRightImg4) { img4.src = race.bottomRightImg4; } else if (race.img5) { img4.src = race.img5; }
      img4.onclick = () => { if (race.bottomRightImg4) raceMainImg.src = race.bottomRightImg4; else if (race.img5) raceMainImg.src = race.img5; };
    } else {
      raceSquaresFourth.classList.remove('is-visible');
    }

    if (race.img6 || race.bottomRightImg5) {
      raceSquaresFifth.classList.add('is-visible');
      var img5 = document.getElementById('race-img-5');
      if (race.bottomRightImg5) { img5.src = race.bottomRightImg5; } else if (race.img6) { img5.src = race.img6; }
      img5.onclick = () => { if (race.bottomRightImg5) raceMainImg.src = race.bottomRightImg5; else if (race.img6) raceMainImg.src = race.img6; };
    } else {
      raceSquaresFifth.classList.remove('is-visible');
    }
  });
});

const selectedRaceSpan = document.getElementById('selected-race');
const selectedClassSpan = document.getElementById('selected-class');
const selectedRaceImg = document.getElementById('selected-race-img');
const selectedClassImg = document.getElementById('selected-class-img');
const clearRaceBtn = document.getElementById('clear-race');
const clearClassBtn = document.getElementById('clear-class');
const raceSelectPanelBtn = document.getElementById('race-select-btn-panel');

let selectedRace = null;
let selectedClass = null;
let currentRaceKey = null;

const statIds = {
  'Vida': 'stat-vida',
  'Fuerza': 'stat-fuerza',
  'Destreza': 'stat-destreza',
  'Resistencia': 'stat-resistencia',
  'Sigilo': 'stat-sigilo',
  'Supervivencia': 'stat-supervivencia',
  'Carisma': 'stat-carisma',
  'Mana': 'stat-mana',
  'Aprendizaje': 'stat-aprendizaje',
  'Inteligencia': 'stat-inteligencia'
};

function parseStatValue(val) {
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    if (val.startsWith('+')) {
      return parseInt(val.substring(1)) || 0;
    }
    return parseInt(val) || 0;
  }
  return 0;
}

function updateCharacterStats() {
  const stats = {
    Vida: 0,
    Fuerza: 0,
    Destreza: 0,
    Resistencia: 0,
    Sigilo: 0,
    Supervivencia: 0,
    Carisma: 0,
    Mana: 0,
    Aprendizaje: 0,
    Inteligencia: 0
  };

  if (selectedRace && selectedRace.stats) {
    for (var stat in selectedRace.stats) {
      if (stats.hasOwnProperty(stat)) {
        stats[stat] += parseStatValue(selectedRace.stats[stat]);
      }
    }
  }

  if (selectedClass && selectedClass.stats) {
    for (var stat in selectedClass.stats) {
      if (stats.hasOwnProperty(stat)) {
        stats[stat] += parseStatValue(selectedClass.stats[stat]);
      }
    }
  }

  for (var stat in statIds) {
    document.getElementById(statIds[stat]).textContent = stats[stat];
  }
}

function selectRace(race) {
  selectedRace = race;
  selectedRaceSpan.textContent = race.name;
  selectedRaceImg.src = race.img;
  updateCharacterStats();
}

function selectClass(classData) {
  selectedClass = classData;
  selectedClassSpan.textContent = classData.name;
  selectedClassImg.src = classData.cardImg;
  updateCharacterStats();
}

document.querySelectorAll('.race-item').forEach(item => {
  const selectBtn = item.querySelector('.race-select-btn');
  if (selectBtn) {
    selectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const raceKey = item.dataset.race;
      const race = racesData[raceKey];
      if (race) selectRace(race);
    });
  }
});

document.querySelectorAll('.carousel-card').forEach(card => {
  const selectBtn = card.querySelector('.class-select-btn');
  if (selectBtn) {
    selectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const classKey = card.dataset.class;
      const classData = classesData[classKey];
      if (classData) selectClass(classData);
    });
  }
});

if (raceSelectPanelBtn) {
  raceSelectPanelBtn.addEventListener('click', () => {
    if (currentRaceKey && racesData[currentRaceKey]) {
      selectRace(racesData[currentRaceKey]);
    }
  });
}

clearRaceBtn.addEventListener('click', function() {
  selectedRace = null;
  selectedRaceSpan.textContent = 'Ninguna';
  selectedRaceImg.src = '';
  updateCharacterStats();
});

clearClassBtn.addEventListener('click', function() {
  selectedClass = null;
  selectedClassSpan.textContent = 'Ninguna';
  selectedClassImg.src = '';
  updateCharacterStats();
});

const characterPanel = document.getElementById('character-panel');
const panelToggleArrow = document.getElementById('panel-toggle-arrow');

panelToggleArrow.addEventListener('click', function() {
  characterPanel.classList.toggle('is-visible');
  panelToggleArrow.classList.toggle('active');
});