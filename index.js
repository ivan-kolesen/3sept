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
  calendar.removeEventListener('click', play);
  var audio = document.getElementById("audio");
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

window.onload = () => console.log(1);

pages.addEventListener('click', handleClick);
calendar.addEventListener('click', play);