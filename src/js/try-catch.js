'use strict';

/*
 * try/catch
 * Помилки фази інтерпретації обробити не можна, лише помилки фази виконання
 * Об'єкт помилки
 * try/catch працює ЛИШЕ з синхронним кодом
 * Обробка помилок в асинхронному коді
 */

console.log(1);

// try {
//   setTimeout(() => {
//     const number = 5;

//     number = 7;

//     console.log(number);
//   }, 1000);
// } catch (err) {
//   console.log(err);
// }

setTimeout(() => {
  try {
    const number = 5;

    number = 7;

    console.log(number);
  } catch (err) {
    console.log(err);
  }
}, 1000);

console.log(2);
