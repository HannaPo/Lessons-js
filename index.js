// https://www.codewars.com/join?language=javascript
// ---------------Kahoot---------//

// const array = [1, 2, 3];

// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable

const clients = ["Mango", "Poly", "Ajax"];
const string = "script";

// // Імутабельні
// string[0] = "q";
// console.log(string);

// // Мутабельні

// console.log(typeof clients);

// clients.splice(1, 1);

// clients.push(`Andrii`);

// clients[1] = `Vitaliy`;

// console.log(clients);

// За посиланням
// Складні (якщо говорити правильно то тільки Object)
//  Object
//  Array

// const arr1 = [1, 2, 3];

// const arr2 = arr1;

// arr2[0] = 10;

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

// За значенням
// Примітивні
// String
// Number
// Boolean
// null
// undefined

// let a = 10;

// let b = a;

// console.log(a);
// console.log(b);

// b = 5;

// console.log(a);
// console.log(b);

/*
  Example 1 - Базові операції з масивом

  [] літерал масиву

  Властивість length та індексація
  
  Створіть масив genres з елементами Jazz і Blues

  Додайте 'Rock&roll' у кінець масиву

  Виведіть у консоль перший елемент масиву

  Виведіть у консоль останній елемент масиву. 
  Код має працювати для масиву довільної довжини.

  Вставте 'Contry' та 'Reggie' на початок масиву

  Подивиттсь методи push unshift shift splice
*/

// const genres = ["Jazz", "Blues"];

// genres.push("Rock&roll");

// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// genres.unshift("Contry", "Reggie");

// console.log(genres);

// ------

// const genres = ["Jazz", "Blues"];

// genres.shift();

// genres.pop();

// genres.splice(0, 1);

// genres.splice(genres.length, 0, "Rock&roll");

// console.log(genres);

/*  
  Example 2 - Масиви та рядки

  Напиши скрипт для обчислення площі прямокутника зі сторонами, 
  значення яких зберігаються в змінній величин у вигляді рядка.
  Значення гарантовано розділені пробілом. 

  Метод split
*/

// const values = "8 11";

// const arrayValues = values.split(" ");

// console.log(arrayValues);

// const square = arrayValues[0] * arrayValues[1];

// console.log(square);

/*
  Example 3 - Перебір масиву

  Напиши скрипт для перебору масиву fruits циклом for.
  Для кожного елемента масиву виведіть у консоль рядок у 
  форматі номер_елемента: значення_елемента. 
  
  Нумерація елементів має починатися з першого.
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let index = 0; index < fruits.length; index += 1) {
//   console.log(`${index + 1}: ${fruits[index]}`);
// }

/*
  Example 4 - Масиви та цикли

  Напиши скрипт, який виводить у консоль ім'я та телефонний 
  номер користувача. У змінних names і phones зберігаються 
  рядки імен та телефонних номерів, розділені комами. 
  
  Порядковий номер імен та телефонів у рядках вказують на 
  відповідність. Кількість імен та телефонів гарантовано однакова.

  Метод split
*/

// const names = "Jacob,William,Solomon,Kate";

// const phones = "38001234567,38001112233,380055566377,38099912233";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// console.log(namesArray);

// for (let index = 0; index < namesArray.length; index += 1) {
//   console.log(`${namesArray[index]} - ${phonesArray[index]}`);
// }

/*
  Example 5 - Масиви та рядки

  Напиши скрипт який виводить у консоль усі слова рядка крім першого 
  та останнього. Результуючий рядок не повинен починатися або закінчуватися 
  пробілом. Скрипт повинен працювати для будь-якого рядка.

  методи pop shift join
*/

// const stringEl = "Welcome to the future";

// const array = stringEl.split(" ");

// array.pop();

// array.shift();

// console.log(array);

// const newString = array.join(" ");

// console.log(newString);

/*
  Example 6 - Масиви та рядки
  Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
  і виводить його в консоль.

  Методи split reverse join
*/

// Variant 1
// const stringEl = "Welcome to the future";

// const array = stringEl.split(" ");

// array.reverse();

// console.log(array);

// const newString = array.join(" ");

// console.log(newString);

// Variant 2

// const stringEl = "Welcome to the future";

// let newString = "";

// for (let index = 0; index < stringEl.length; index += 1) {
//   // 1: `W` - ``

//   // 2: `e` - `W`

//   // 3: `l` - `eW`

//   newString = stringEl[index] + newString;
// }

// console.log(newString);

// Variant 3

// const stringEl = "Welcome to the future";

// let newString = "";

// for (let index = stringEl.length - 1; index >= 0; index -= 1) {
//   newString += stringEl[index];
// }

// console.log(newString);

/*
  Example 7 - Пошук елемента

  Напиши скрипт пошуку найменшого числа у масиві. 
  Код має працювати для будь-якого масиву чисел. 
  Використовуй цикл for of для розв'язання задачі.
*/

// const numbers = [101, 78, 12, 76, 5, 11, 9];

// let minNumber = Infinity;

// for (let el of numbers) {
//   if (minNumber > el) {
//     minNumber = el;
//   }
// }

// console.log(minNumber);

// Чому цей запис

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors);

// не працює в такому вигляді:

// const colors = ["red", "green", "blue"];

// const addColor = colors.splice(2, 1, "teal");
// console.log(addColor);

// const logins = [
//   "AlexUkrop",
//   "janusz-kowalski",
//   "apple_2022",
//   "qwe123",
//   "abc-988",
// ];

// let loginToFind = prompt("Type your login");
// let message = `Login ${loginToFind} is not finded`;

// for (login of logins) {
//   if (loginToFind === login) {
//     message = `Login ${loginToFind} is finded`;
//     break; //* чи в даному випадку варто писати break? По суті далі нічого немає і без break все чудово працює *//
//   }
// }

// for (letter of letters) {
//   if (letter === letter.toUpperCase()) {
//     aString += letter.toLowerCase();
//   }

//   aString += letter.toUpperCase();
// }

const arr = [
  [1, 2, 4],
  [5, 6, 7],
];

for (let el of arr) {
  console.log(el);
}
