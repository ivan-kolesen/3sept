const pages = document.querySelector('.pages');
const calendar = document.querySelector('.calendar');
const audio = document.querySelector('audio');

function handleClick (e) {
  updateCalendar(e.target);
}

function updateCalendar (target) {
  if (target && target.classList.contains('page')) {
    target.classList.add('tear');
    document.querySelector(".tear").style.WebkitAnimation = "tear-animation 0.8s linear forwards";
    setTimeout(() => {
      pages.removeChild(target);
    }, 800);
  } else {
    return;
  }
  renderPage();
}

function play(){

  audio.onloadend = () => console.log(1)
}

function renderPage () {
  const newPage = document.createElement('div');
  newPage.classList.add('page');
  newPage.innerHTML = `
    <p class="month">Сентябрь</p>
    <p class="day">3</p>
    <p class="day-name">Вторник</p>
    <p class="year">2019</p>
  `;
  pages.appendChild(newPage);
}

renderPage();

window.onload = () => {
  play();
  document.querySelector(".loader-wrapper").style.display = "none";

};

pages.addEventListener('click', handleClick);
calendar.addEventListener('click', play);