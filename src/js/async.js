'use strict';
/*
 * Синхронний vs Асинхронний JS
 */

// const greet = () => {
//   console.log('Hello, User!');
// };

// setTimeout(() => {
//   console.log('Hello from setTimout 2000ms');
// }, 2000);

// setTimeout(() => {
//   console.log('Hello from setTimout 1500ms');
// }, 1500);

// console.log('First');

// // let counter = 0;

// // for (let i = 0; i < 1000000000; i += 1) {
// //   counter += i;
// // }

// greet();

// console.log('Second');

// const timerId = setInterval(() => {
//   console.log('HI!');
// }, 1000);

// console.log(timerId);

//   clearInterval(timerId);

// console.log('second');

// Стек виклику функцій
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів і таймаутів clearInterval(intervalID), clearTimeout(timeoutID)

// setTimeout(() => {
//   console.log(300);
//   clearTimeout(id);
// }, 300);

// const id = setTimeout(() => {
//   console.log(500);
// }, 500);
