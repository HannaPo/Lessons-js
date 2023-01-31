/*
  1. Коллбек функції

  - Визначення та призначення

  Напишіть такі функції:

  createProduct(productData, callback) - приймає об'єкт товару без id, а 
  також коллбек. Функція створює об'єкт товару, додаючи йому 
  унікальний ідентифікатор як id і викликає коллбек передаючи йому 
  створений об'єкт

  logProduct(product) - коллбек, що приймає об'єкт товару і логує 
  його у консоль

  logTotalPrice(product) - коллбек, що приймає об'єкт товару і 
  логує загальну вартість товару в консоль

  Об'єкт товару має поля name, quantity та price

  - Показати в якому порядку викликаються функції
*/

// Функція, що повертає випадкове значення id

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// function createProduct(productData, callback) {
//   const newProduct = { ...productData, id: generateId() };

//   callback(newProduct);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct(
//   {
//     name: '🍎',
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );

// createProduct(
//   {
//     name: '🍋',
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

/* 
  2. Коллбек функції

  Додайте об'єкту account методи:

  withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError) 
  де перший параметр це сума операції, а другий і третій - коллбеки,
  які приймають текст повідомлення на успіх або помилку

  Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT 
  або this.balance, в іншому випадку випадку викликає onSuccess та
  зменшує баланс на переданий amount

  Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT 
  або меньше або дорівнює нулю, в іншому випадку випадку викликає onSuccess
  та збільшує баланс на переданий amount
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   firstname: 'Andrii',
//   lastname: 'Shevchuk',
//   balance: 618,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError('Сума є більшою за ліміт транзакцій');
//     } else if (amount > this.balance) {
//       onError('Сума є більшою ніж є на балансі');
//     } else {
//       this.balance -= amount;

//       onSuccess('Зняття відбулось успішно');
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError('Сума є більшою за ліміт транзакцій');
//     } else if (amount <= 0) {
//       onError('Cума зняття є меншою або рівна нулю');
//     } else {
//       this.balance += amount;

//       onSuccess('Поповнення відбулось успішно');
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(6000, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

/*
  3. Коллбек функції

  Напишіть функцію each(array, callback), яка першим параметром очікує масив
  чисел, а другим - коллбек, який застосовується до кожного елемента масиву

  Функція each повинна повернути новий масив, елементами якого будуть 
  результати виклику коллбеку
*/

// function each(array, callback) {
//   const resultArray = [];

//   for (let num of array) {
//     const number = callback(num);

//     resultArray.push(number);
//   }

//   return resultArray;
// }

// const dasdasdas = function (value) {
//   return value * 2;
// };

// console.log(each([64, 49, 36, 25, 16], dasdasdas));

// console.log(each([64, 49, 36, 25, 16, 550, 5353], dasdasdas));

// console.log(each([64], dasdasdas));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

/*
  4. Стрілочні функції

  - Для чого були вигадані
  - Синтаксис залежно від кількості параметрів
  - Явне/неявне повернення
  - Різниця з function declaration (відсутність arguments та сплиття)

  Перепишіть функцію getSum, слідуючи синтаксису стрілочних функцій
  */

// function getSum(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// const getSum1 = function getSum(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// };

// const getSum2 = (firstNumber, secondNumber) => firstNumber + secondNumber;

/*
  5. Стрілочні функції
  
  Перепишіть функції, слідуючи синтаксису стрілочних функцій
*/

// Функція, що повертає випадкове значення id

// const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

// const createProduct = (productData, callback) => {
//   const product = {
//     ...productData,
//     id: generateId(),
//   };

//   callback(product);
// };

// const logProduct = (product) => {
//   console.log(product);
// };

// const logTotalPrice = ({ price, quantity }) => {
//   console.log(price * quantity);
// };

// createProduct(
//   {
//     name: '🍎',
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );

// createProduct(
//   {
//     name: '🍋',
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

/*
  6. Стрілочні функції
  
  Перепишіть функції, слідуючи синтаксису стрілочних функцій
*/

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

/*
  7. Метод forEach

  - Призначення
  - Сигнатура
  
  Перепишіть функцію, використовуючи метод forEach та стрілочні функції
*/

// function logItems(items) {
//   // for (let index = 0; index < items.length; index += 1) {
//   //   console.log(`${index + 1} - ${items[index]}`);
//   // }

//   items.forEach((element, index) => {
//     console.log(`${index + 1} - ${element}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
  8. Метод forEach
  
  Перепишіть функцію, використовуючи метод forEach та стрілочні функції
*/

// function printContactsInfo({ names, phones }) {
//   const namesArray = names.split(',');
//   const phonesArray = phones.split(',');

//   for (let i = 0; i < namesArray.length; i += 1) {
//     console.log(`${namesArray[i]}: ${phonesArray[i]}`);
//   }
// }

// const printContactsInfo = ({ names, phones }) => {
//   const namesArray = names.split(',');
//   const phonesArray = phones.split(',');

//   // for (let i = 0; i < namesArray.length; i += 1) {
//   //   console.log(`${namesArray[i]}: ${phonesArray[i]}`);
//   // }

//   namesArray.forEach((element, index) => {
//     console.log(`${element}: ${phonesArray[index]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artem',
//   phones: '89001234567,89001112233,890055566377, 890055558379',
// });

/*
  9. Метод forEach

  Перепишіть функцію, використовуючи метод forEach та стрілочні функції
*/

// function calculateAverage(...args) {
//   let total = 0;

//   for (let number of args) {
//     total += number;
//   }

//   return total / args.length;
// }

// const calculateAverage = (...args) => {
//   let total = 0;

//   args.forEach((number) => {
//     total += number;
//   });

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// addEventListener('click', handleBtnClick);

// const myLibFactory = () =>  {
// let value: 0;

// const add (num) {
//    value += num;
// };
// return {
//    add: add;
//    getValue () {
//       return value;
//    },
// };
// };

// const name = 'Andrii';

// const user = {
//   name,
//   getValue() {},
//   getValue: function() {}
// };

// console.log(user);

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();

// // Як додати в result - результат виконання фунцii, ?
// const pointer = makePizza;

// console.log(pointer());

// // Як додати в pointer - посилання на фунцiю?  I якщо можна пояснiть будь ласка вашi дii, дякую

// debugger;

// const a = 5 + 7;
