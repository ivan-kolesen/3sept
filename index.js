const pages = document.querySelector('.pages');
const calendar = document.querySelector('.calendar');
const song = document.querySelector('#audio');


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
function play(){
  const song = document.querySelector('#audio');
  song.play();
}

song.onloadeddata = () => {
  document.querySelector(".loader-wrapper").style.display = "none";
  renderPage();
  pages.addEventListener('click', handleClick);
  calendar.addEventListener('click', play);
}


