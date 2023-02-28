'use strict';

const calendarEl = document.querySelector('.calendar');

let prevTdEl = null;

const handleCalendarClick = event => {
  if (event.target.nodeName !== 'TD' || event.target.textContent === '') {
    return;
  }

  if (prevTdEl === event.target) {
    event.target.classList.toggle('active');

    return;
  }

  if (prevTdEl) {
    prevTdEl.classList.remove('active');
  }

  event.target.classList.add('active');
  prevTdEl = event.target;
};

calendarEl.addEventListener('click', handleCalendarClick);
