const tabButtons = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.content-panel');
const transition = document.querySelector('.stone-transition');
const title = document.getElementById('panel-title');
const description = document.getElementById('panel-description');

const contentMap = {
  races: {
    title: 'Razas Ancestrales',
    description: 'Cada linaje guarda dones viejos, afinidades con la magia y memorias grabadas en piedra y bosque.'
  },
  classes: {
    title: 'Clases Heroicas',
    description: 'Las sendas del aventurero forjan campeones, hechiceros y guardianes unidos por destino y voluntad.'
  }
};

let isAnimating = false;

function setActiveTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.tab === tabName);
  });

  panels.forEach((panel) => {
    const isActive = panel.dataset.panel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle('is-active', isActive);
  });

  title.textContent = contentMap[tabName].title;
  description.textContent = contentMap[tabName].description;
}

function playTransition(nextTab) {
  if (isAnimating) {
    return;
  }

  isAnimating = true;
  transition.classList.remove('is-playing');

  requestAnimationFrame(() => {
    transition.classList.add('is-playing');
  });

  window.setTimeout(() => {
    setActiveTab(nextTab);
  }, 420);

  window.setTimeout(() => {
    transition.classList.remove('is-playing');
    isAnimating = false;
  }, 960);
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('is-active')) {
      return;
    }

    playTransition(button.dataset.tab);
  });
});
