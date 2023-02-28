'use strict';

const messagesWrapperEl = document.querySelector(`.js-messages-wrapper`);

const handleMessagesClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  event.target.closest('.message').remove();
};

messagesWrapperEl.addEventListener('click', handleMessagesClick);

function badFunc(a, b) {
  return a + b;
}

5 > 7 ? Math.max(3, 43) : badFunc();
