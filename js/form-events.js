'use strict';
/*
  2. Події елементів форм: focus, blur, change, input, submit

  Об'єкт події

  Реалізувати функціонал додавання та прибирання кастомного 
  outline у інпуту імені

  Реалізувати функціонал виведення введено ім'я у елемент span

  Реалізувати функціонал за яким кнопка сабміту стане 
  активною коли введене ім'я та вибраний checkbox

  Реалізувати функціонал при сабміті за яким у консоль 
  виводиться введене ім'я користувача, очищається форма та
  не перезавантажується сторінка - preventDefault
*/

const formEl = document.querySelector('.js-contact-form');
const formInputEl = document.querySelector('.js-username-input');
const formCheckboxEl = document.querySelector('.js-policy-checkbox');
const userNameOutputEl = document.querySelector('.js-username-output');
const formSubmitBtnEl = document.querySelector('.js-contact-form-submit');

formInputEl.addEventListener('focus', (event) => {
  event.target.style.outline = '5px solid teal';
});

formInputEl.addEventListener('blur', (event) => {
  event.target.style.outline = 'none';
});

formInputEl.addEventListener('input', (event) => {
  userNameOutputEl.textContent = event.target.value;
});

formCheckboxEl.addEventListener('change', (event) => {
  if (event.target.checked && formInputEl.value !== '') {
    formSubmitBtnEl.disabled = false;
    return;
  }

  formSubmitBtnEl.disabled = true;
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(formInputEl.value);

  event.target.reset();

  formSubmitBtnEl.disabled = true;

  userNameOutputEl.textContent = '';
});
