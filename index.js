// 1.

// const array = [
//   { name: 'Olya', age: 22 },
//   { name: 'Vitaliy', age: 45 },
// ];

// 1. Пройтися по масиву
// 2. Знайти відповідність заданого параметру з поданими даними
// 3. При відновідності знайти потрібні нам дані
// 4. Дані відобразати
// 5. Завершити пошук/операцію

// const seekedName = 'Vitaliy';

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i].name === seekedName) {
//     console.log(array[i].name);
//     break;
//   }
// }

// const elem = document.querySelector('');

// elem.children;

// 2

// function b() {
//   console.log(422);
// }

// b();

// let sum = 0;

// function foo() {
//   ++sum;
// }

// foo();
// foo();
// foo();

// {
//   let sum = 0;
//   foo();
// }

// console.log(sum);

// function plus() {
//   let sum = 0;

//   return function () {
//     return ++sum;
//   };
// }

// const funcPlus1 = plus();

// console.log(funcPlus1());
// console.log(funcPlus1());
// console.log(funcPlus1());
// console.log(funcPlus1());

// const funcPlus2 = plus();

// console.log(funcPlus2());
// console.log(funcPlus2());

// const seekedName = 'Andrii';

// if ((name = seekedName)) {
// }

// let sum = 0;

// let i = 1;

// function boo() {
//   sum += i;
//   i += 1;

//   if (i === 10) {
//     return;
//   }

//   boo();
// }

// console.log(sum);

// const HOF = (callback) => {
//   callback();
// };

// const consoleLog = () => {
//   console.log(131);
// };

// HOF(consoleLog);

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// debugger;

// const array = [1, 2, 3];

// array.forEach((item1, _, array) => {
//   array.forEach((item2) => {
//     console.log(Number(`${item1}${item2}`));
//   });
// });

const user = {
  name: 'Andrii',
};

user.username = user.name;

delete user.name;

console.log(user);

// console.log('loading' in HTMLImageElement.prototype);

// const isBiggerThan = (a, b) => (a > b ? `Більше` : 'Менше');

// console.log(isBiggerThan(2, 5));

// let a = 0;

// a ||= false;

// console.log(a);

// if (inputValueLength === attributeValue) {
//   inputRef.classList.add('valid');
//   inputRef.classList.remove('invalid');
// } else if (inputValueLength === 0) {
//   inputRef.classList.remove('valid');
//   inputRef.classList.remove('invalid');
// } else {
//   inputRef.classList.add('invalid');
//   inputRef.classList.remove('valid');
// }

function random(length) {
  return Array.from({ length }, (_, k) => Math.random());
}

console.log(random(10));
