const racesView = document.getElementById('races-view');
const racesBtn = document.querySelector('[data-section="races"]');
const raceItems = document.querySelectorAll('.race-item');
const raceName = document.getElementById('race-name');
const raceDesc = document.getElementById('race-desc');
const raceSquares = document.getElementById('race-squares');
const raceSquaresTop = document.getElementById('race-squares-top');
const raceSquaresBottomLeft = document.getElementById('race-squares-bottom-left');
const fairiesContainer = document.getElementById('fairies-container');

const racesWithSquares = ['elfos', 'kators', 'draeneis', 'humanos', 'goetia'];
const racesWithBottomLeftSquares = ['huargens', 'drakthir', 'amblys'];

const racesData = {
  humanos: {
    name: 'Humanos',
    desc: 'Una raza versátil y ambiciosa, conocida por su adaptabilidad y espíritu conquistador.',
    img: 'Razas/Humanos/Logo Humanos.png',
    img2: 'Razas/Humanos/Logo Humanos (Jotnar).png',
    img3: 'Razas/Humanos/Logo Humanos (Heiwa).png'
  },
  elfos: {
    name: 'Elfos',
    desc: 'Seres elegantes y longevos, maestros de la magia y guardianes de los bosques antiguos.'
  },
  enanos: {
    name: 'Enanos',
    desc: 'Expertos mineros y guerreros stubborn, habitantes de las montañas y foros profundos.'
  },
  medianos: {
    name: 'Medianos',
    desc: 'Criaturas pequeñas y astutas, conocidas por su agility y habilidad para pasar desapercibidos.'
  },
  orcos: {
    name: 'Orcos',
    desc: 'Guerreros fieros y honorables, berasal de clanes tribales con fuertes tradiciones.'
  },
  elfos_oscuros: {
    name: 'Elfos Oscuros',
    desc: 'Exiliados de la superficie, viven en las profundidades y harnen magia sombría.'
  },
  kators: {
    name: 'Kators',
    desc: 'Bestias humanoides controladas por parasites, ahora libres pero marcadas por su pasado.'
  },
  pandarens: {
    name: 'Pandarens',
    desc: 'Una raza pacífica y sabia, dedicada a la contemplación y el equilibrio espiritual.'
  },
  crozhar: {
    name: 'Crozhar',
    desc: 'Gente rana habitantes de pantanos y zonas húmedas, expertos en venenos y emboscadas.'
  },
  drakthir: {
    name: 'Drakthir',
    desc: 'Ancestrales guardianes dracónicos, señores del fuego y la destrucción.'
  },
  huargens: {
    name: 'Huargens',
    desc: 'Humanoides con rasgos lupinos, cazadores natos con un fuerte sentido de manada.'
  },
  elfos_noche: {
    name: 'Elfos de la noche',
    desc: 'Guardianes milenarios de los secretos nocturnal, vinculados a las estrellas y la luna.'
  },
  elfos_nato: {
    name: 'Elfos Nato-Nocturno',
    desc: 'Una sub-raza de elfos adaptada a vivir entre la luz del día y la oscuridad total.'
  },
  taurens: {
    name: 'Taurens',
    desc: 'Seres grandes y musculosos con cuernos, shamanes naturales y protectores de la tierra.'
  },
  morthra: {
    name: 'Morthra',
    desc: 'Criaturas insectoides sociales, organizadas en colmernas con castas claramente definidas.'
  },
  draeneis: {
    name: 'Draeneis',
    desc: 'Refugiados de un mundo destruido, portan la luz de los titanes en su piel cristalina.'
  },
  amblys: {
    name: 'Amblys',
    desc: 'Humanos corrompidos por energía void, ahora existen entre la realidad y la sombra.'
  },
  automatas: {
    name: 'Automatas',
    desc: 'Constructos de metal y magia, creados para servir pero algunos han alcanzado consciencia.'
  },
  eterios: {
    name: 'Eterios',
    desc: 'Seres formados de energía pura, capaces de manipular el éter y la magia elemental.'
  },
  faunos: {
    name: 'Faunos',
    desc: 'Espíritus de la naturaleza con forma semihumana, juguetones pero sabios habitantes del bosque.'
  },
  goetia: {
    name: 'Goetia',
    desc: 'Demonios menores invocados por magos, algunos han elegido permanecer en el mundo mortal.'
  },
  ninfas: {
    name: 'Ninfas',
    desc: 'Espíritus elementales liés a cuerpos de agua, seres de belleza etérea y temperamento cambiante.'
  },
  tiefling: {
    name: 'Tiefling',
    desc: 'Descendientes de pactos demoníacos, marcados por sangre infernal y resistencia a las llamas.'
  }
};

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

racesBtn.addEventListener('click', () => {
  racesView.classList.add('is-visible');
});

raceItems.forEach(item => {
  item.addEventListener('click', () => {
    raceItems.forEach(i => i.classList.remove('is-active'));
    item.classList.add('is-active');

    const raceKey = item.dataset.race;
    const race = racesData[raceKey];
    raceName.textContent = race.name;
    raceDesc.textContent = race.desc;

    raceSquaresTop.classList.add('is-visible');

    if (racesWithSquares.includes(raceKey)) {
      raceSquares.classList.add('is-visible');
      const raceImg1 = document.getElementById('race-img-1');
      const raceImg2 = document.getElementById('race-img-2');
      const raceImg3 = document.getElementById('race-img-3');
      if (race.img) raceImg1.src = race.img;
      if (race.img2) raceImg2.src = race.img2;
      if (race.img3) raceImg3.src = race.img3;
    } else {
      raceSquares.classList.remove('is-visible');
    }

    if (racesWithBottomLeftSquares.includes(raceKey)) {
      raceSquaresBottomLeft.classList.add('is-visible');
    } else {
      raceSquaresBottomLeft.classList.remove('is-visible');
    }
  });
});