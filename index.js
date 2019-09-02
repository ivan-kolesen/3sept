const pages = document.querySelector('.pages');
const calendar = document.querySelector('.calendar');

function handleClick (e) {
  updateCalendar(e.target);
}

function updateCalendar (target) {
  if (target && target.classList.contains('page')) {
    target.classList.add('tear');
    setTimeout(() => {
      pages.removeChild(target);
    }, 800);
  } else {
    return;
  }
  renderPage();
}

function play(){

  audio.play();
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
  document.querySelector(".loader-wrapper").style.display = "none";
  document.querySelector(".tear").style.WebkitAnimation = "tear-animation 0.8s linear forwards";
};

let audio = new Audio();
audio.src = "./song.mp3";
audio.autoplay = false;
audio.loop = true;

pages.addEventListener('click', handleClick);
calendar.addEventListener('click', play);