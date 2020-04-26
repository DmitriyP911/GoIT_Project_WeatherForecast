'use strict';

const refsFlag = {
  activeDay: false,
  isActiveChart: true,
  isActivThreeHour: false,
};
const refsBtn = {
  btnToday: document.querySelector('.main-buttons__button-today'),
  btnFiveDays: document.querySelector('.main-buttons__button-five-days'),
  btnHideChart: document.querySelector('.button-holder--hide'),
  btnArrow: document.querySelector('.date-time-arrow'),
};
console.dir(refsBtn.btnArrow)
const refsBlock = {
  fiveDaysBlock: document.querySelector('.five-days-info'),
  todayBlock: document.querySelector('.date-container'),
  todayTimeContainer: document.querySelector('.date-time-container'),
  hourBlock: document.querySelector('.three-hour'),
  diagramBlock: document.querySelector('.diagram__wrap'),
  mainCityBlock: document.querySelector('.main-city-weather'),
  quoteBlock: document.querySelector('.date-quote-wrap'),
  labelBlock: document.querySelector('.diagram__label'),
  mainBtnBlock: document.querySelector('.main-buttons'),
  showChart: document.querySelector('.button-holder--show'),
  mainTitle: document.querySelector("h2"),
  sectionDiagram: document.querySelector('.diagram')
  // showThreeHourBlock: document.getElementsByClassName('.date-time-wrap'),
};

refsBtn.btnFiveDays.addEventListener('click', showFiveDaysInfo);
refsBtn.btnToday.addEventListener('click', showDaysInfo);
refsBlock.showChart.addEventListener('click', showChart);
refsBtn.btnHideChart.addEventListener('click', hideChart);
refsBlock.todayTimeContainer.addEventListener('click', showThreeHourInfo);
refsBtn.btnArrow.addEventListener('click', showHideCard);

function showFiveDaysInfo() {
  if (!refsFlag.activeDay) {
    refsFlag.activeDay = true;
    refsFlag.isActivThreeHour = false;
    refsBlock.hourBlock.classList.add('hidden');
    refsBlock.mainCityBlock.classList.add('hidden');
    refsBlock.quoteBlock.classList.add('hidden');
    refsBlock.fiveDaysBlock.classList.remove('hidden');
    refsBlock.todayBlock.classList.remove('hidden');
    refsBlock.mainBtnBlock.style.paddingBottom = '32px';
    refsBtn.btnFiveDays.style.backgroundColor = 'white';
    refsBtn.btnToday.style.backgroundColor = 'rgba(255, 255, 255, .54)';
    refsBlock.labelBlock.classList.remove('hidden');
    refsBlock.mainTitle.classList.remove('hidden');
    refsBlock.sectionDiagram.classList.remove('hidden');
    refsBlock.mainBtnBlock.style.marginRight = 'auto';
  }
}
function showDaysInfo() {
  // console.log('click')
  if (refsFlag.activeDay) {
    refsFlag.activeDay = false;
    if (!refsFlag.isActiveChart) {
      hideChart();
    }
    showThreeHourInfo();
    refsBlock.mainCityBlock.classList.remove('hidden');
    refsBlock.quoteBlock.classList.remove('hidden');
    refsBlock.fiveDaysBlock.classList.add('hidden');
    refsBlock.todayBlock.classList.add('hidden');
    refsBlock.mainBtnBlock.style.paddingBottom = '32px';
    refsBlock.labelBlock.classList.add('hidden');
    refsBtn.btnFiveDays.style.backgroundColor = '';
    refsBtn.btnToday.style.backgroundColor = '';
    refsBlock.mainTitle.classList.add('hidden');
    refsBlock.mainBtnBlock.style.marginRight = '';
    refsBlock.sectionDiagram.classList.add('hidden');

  }
}
function showChart() {
  if (refsFlag.isActiveChart) {
    refsFlag.isActiveChart = false;
    refsBlock.diagramBlock.classList.remove('hidden');
    refsBlock.labelBlock.classList.add('hidden');
  }
}
function hideChart() {
  if (!refsFlag.isActiveChart) {
    refsFlag.isActiveChart = true;
    refsBlock.diagramBlock.classList.add('hidden');
    refsBlock.labelBlock.classList.remove('hidden');
  }
}
function showThreeHourInfo() {
  // console.dir(e.currentTarget);
  if (refsFlag.isActivThreeHour) {
    refsFlag.isActivThreeHour = false;
    refsBlock.hourBlock.classList.add('hidden');
    return;
  }
  refsFlag.isActivThreeHour = true;
  refsBlock.hourBlock.classList.remove('hidden');
}
function showHideCard(e){
  console.dir(e.target)
}