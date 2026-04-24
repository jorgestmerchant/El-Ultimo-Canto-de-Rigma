const racesView = document.getElementById('races-view');
const racesBtn = document.querySelector('[data-section="races"]');
const raceItems = document.querySelectorAll('.race-item');
const raceName = document.getElementById('race-name');
const raceDesc = document.getElementById('race-desc');
const raceSquares = document.getElementById('race-squares');
const raceSquaresTop = document.getElementById('race-squares-top');
const raceSquaresBottomLeft = document.getElementById('race-squares-bottom-left');
const fairiesContainer = document.getElementById('fairies-container');

const racesWithSquares = ['elfos', 'kators', 'draeneis', 'humanos', 'goetia', 'tiefling'];
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
    desc: 'Seres elegantes y longevos, maestros de la magia y guardianes de los bosques antiguos.',
    img: 'Razas/Elfos/Logo Elfo (Alto Elfo).png',
    img2: 'Razas/Elfos/Logo Elfo (Elfo del bosque).png',
    img3: 'Razas/Elfos/Logo Elfo (Elfo de Sangre).png'
  },
  enanos: {
    name: 'Enanos',
    desc: 'Expertos mineros y guerreros stubborn, habitantes de las montañas y foros profundos.',
    img: 'Razas/Enanos/Logo Enanos.png'
  },
  medianos: {
    name: 'Medianos',
    desc: 'Criaturas pequeñas y astutas, conocidas por su agility y habilidad para pasar desapercibidos.',
    img: 'Razas/Medianos/Logo Medianos.png'
  },
  orcos: {
    name: 'Orcos',
    desc: 'Guerreros fieros y honorables, berasal de clanes tribales con fuertes tradiciones.',
    img: 'Razas/Orcos/Logo Orcos.png'
  },
  elfos_oscuros: {
    name: 'Elfos Oscuros',
    desc: 'Exiliados de la superficie, viven en las profundidades y harnen magia sombría.',
    img: 'Razas/Elfos Oscuros/Logo Elfo Oscuro.png'
  },
  kators: {
    name: 'Kators',
    desc: 'Bestias humanoides controladas por parasites, ahora libres pero marcadas por su pasado.',
    img: 'Razas/Kators/Logo Kator.png',
    img2: 'Razas/Kators/Logo Kator 1.png',
    img3: 'Razas/Kators/Logo Kator 2.png'
  },
  pandarens: {
    name: 'Pandarens',
    desc: 'Una raza pacífica y sabia, dedicada a la contemplación y el equilibrio espiritual.',
    img: 'Razas/Pandarens/Logo Pandarens.png'
  },
  crozhar: {
    name: 'Crozhar',
    desc: 'Gente rana habitantes de pantanos y zonas húmedas, expertos en venenos y emboscadas.',
    img: 'Razas/Crozhar/Logo Crozhar.png'
  },
  drakthir: {
    name: 'Drakthir',
    desc: 'Ancestrales guardianes dracónicos, señores del fuego y la destrucción.',
    img: 'Razas/Drakthir/Logo Drakthir.png'
  },
  huargens: {
    name: 'Huargens',
    desc: 'Humanoides con rasgos lupinos, cazadores natos con un fuerte sentido de manada.',
    img: 'Razas/Huargen/Logo Huargen.png'
  },
  elfos_noche: {
    name: 'Elfos de la noche',
    desc: 'Guardianes milenarios de los secretos nocturnal, vinculados a las estrellas y la luna.',
    img: 'Razas/Elfos de la Noche/Logo Elfo de la Noche.png'
  },
  elfos_nato: {
    name: 'Elfos Nato-Nocturno',
    desc: 'Una sub-raza de elfos adaptada a vivir entre la luz del día y la oscuridad total.',
    img: 'Razas/Elfo Nato-Nocturno/Logo Elfo Nato-Nocturno.png'
  },
  taurens: {
    name: 'Taurens',
    desc: 'Seres grandes y musculosos con cuernos, shamanes naturales y protectores de la tierra.',
    img: 'Razas/Tauren/Logo Tauren.png'
  },
  morthra: {
    name: 'Morthra',
    desc: 'Criaturas insectoides sociales, organizadas en colmernas con castas claramente definidas.',
    img: 'Razas/Morthra/Logo Morthra.png'
  },
  draeneis: {
    name: 'Draeneis',
    desc: 'Refugiados de un mundo destruido, portan la luz de los titanes en su piel cristalina.',
    img: 'Razas/Draeneis/Logo Draeneis.png'
  },
  amblys: {
    name: 'Amblys',
    desc: 'Humanos corrompidos por energía void, ahora existen entre la realidad y la sombra.',
    img: 'Razas/Amblys/Logo Amblys.png'
  },
  automatas: {
    name: 'Automatas',
    desc: 'Constructos de metal y magia, creados para servir pero algunos han alcanzado consciencia.',
    img: 'Razas/Automatas/Logo Automatas.png'
  },
  eterios: {
    name: 'Eterios',
    desc: 'Seres formados de energía pura, capaces de manipular el éter y la magia elemental.',
    img: 'Razas/Eterios/Logo Eterio.png'
  },
  faunos: {
    name: 'Faunos',
    desc: 'Espíritus de la naturaleza con forma semihumana, juguetones pero sabios habitantes del bosque.',
    img: 'Razas/Faunos/Logo Fauno.png'
  },
  goetia: {
    name: 'Goetia',
    desc: 'Demonios menores invocados por magos, algunos han elegido permanecer en el mundo mortal.',
    img: 'Razas/Goetia/Logo Goetia.png'
  },
  ninfas: {
    name: 'Ninfas',
    desc: 'Espíritus elementales lés a cuerpos de agua, seres de belleza etérea y temperamento cambiante.',
    img: 'Razas/Ninfas/Logo Ninfas.png'
  },
  tiefling: {
    name: 'Tiefling',
    desc: 'Descendientes de pactos demoníacos, marcados por sangre infernal y resistencia a las llamas.',
    img: 'Razas/Tieflings/Logo Tieflings.png',
    img2: '',
    img3: ''
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

    const raceMainImg = document.getElementById('race-main-img');
    if (race.img) {
      raceMainImg.src = race.img;
    } else {
      raceMainImg.src = '';
    }

    raceSquaresTop.classList.add('is-visible');

    if (racesWithSquares.includes(raceKey)) {
      raceSquares.classList.add('is-visible');
      const raceImg1 = document.getElementById('race-img-1');
      const raceImg2 = document.getElementById('race-img-2');
      const raceImg3 = document.getElementById('race-img-3');
      if (race.img) raceImg1.src = race.img;
      if (race.img2) raceImg2.src = race.img2;
      if (race.img3) raceImg3.src = race.img3;

      raceImg1.onclick = () => { if (race.img) raceMainImg.src = race.img; };
      raceImg2.onclick = () => { if (race.img2) raceMainImg.src = race.img2; };
      raceImg3.onclick = () => { if (race.img3) raceMainImg.src = race.img3; };
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