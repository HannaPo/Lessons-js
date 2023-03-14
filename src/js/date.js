'use strict';
// Створення нової дати

// Методи дат

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.

// console.log(new Date(2012, 1, 20, 3, 12));

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const WEEK_DAYS = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'CБ'];

// const currentDate = new Date();

// currentDate.setDate(15);

// const getWeekDay = date => {
//   const dayIndex = date.getDay();

//   return WEEK_DAYS[dayIndex];
// };

// console.log(getWeekDay(currentDate));

//? TASK 03
// Створіть функцію getLastDayOfMonth(year, month), яка повертає останнє число місяця.
// Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.

// const getSecondsToTomorrow = () => {
//   const date = new Date();

//   const tomorrowDate = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate() + 1
//   );

//   return Math.trunc((tomorrowDate - date) / 1000);
// };

// setInterval(() => {
//   console.log(getSecondsToTomorrow());
// }, 1000);
