/*
  1. Об'єкти window та document

  Cучасні методи пошуку елементів (querySelector, querySelectorAll)

  Поняття вузлів та їх типи

  Представлення документу як дерева об'єктів
  
  Навігація по DOM дереву (children, etc.)
*/

// const headingEl = document.querySelector('.description');

// console.log(headingEl.parentElement);

/* 
  2. Доступ до атрибутів у елемента

  elem.attributes
  elem.hasAttribute(name)
  elem.getAttribute(name)
  elem.setAttribute(name, value)
  elem.removeAttribute(name)

  доступ до атрибуту через .

  show on img with class some-img
*/

// const imgEl = document.querySelector('.some-img');

// console.log(imgEl.getAttribute('disabled'));

/*
  3. Об'єкт style, властивість cssText

  show on heading with class main-title
*/

// const titleEl = document.querySelector('#title');

// titleEl.style.backgroundColor = 'red';
// titleEl.style.color = '#fff';
// titleEl.style.fontSize = '60px';

// titleEl.style.cssText = 'background-color: red; color: #fff; font-size: 60px';

/*
  4. Об'єкт classList та його методи (add, remove, toggle, contains)

  take dissapear and red classes from main.css
*/

// const headingEl = document.querySelector('h1');

// console.log(headingEl.classList.replace('main-title', 'title'));
