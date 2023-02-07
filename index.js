'use strict';

/*
  1. Контекст виклику this, визначення, призначення

  this в методах об'єкту

  this існує лише всередині функцій і є динамічним значенням
  На контекст не впливає де функція була об'явлена
  На контекст впливає де функція викликається
*/

const user1 = {
  name: 'Anna',
  age: 22,
  city: 'Kyiv',

  showThis() {
    console.log(this);
  },

  sayHi() {
    console.log(`Hi, ${this.name}!`);
  },

  sayFromWhere() {
    console.log(`${this.name} is from ${this.city}!`);
  },
};

// user1.showThis();

// user1.sayHi();

const user2 = {
  name: 'Andrii',
  age: 30,
  city: 'Lviv',

  showThis: user1.showThis,

  // sayHi: user1.sayHi

  sayFromWhere: user1.sayFromWhere,
};

// user2.sayFromWhere();

// const func = user1.showThis;

// func();

/*
  2. Значення this залежно від місця звернення
  і режиму роботи скрипту (strict mode)

  Втратa контексту

  На контекст не впливає де функція була об'явлена
  На контекст впливає де функція викликається
*/

// this у глобальній області видимості

// function showThis() {
//   console.log(this.name);
// }

// showThis();

// this в callback-функціях

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.getFullName());

// function makeInvoice(callback) {
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeInvoice(user.getFullName);

// this у стрілочних функціях, прив'язка до батькіської функції

// 1.
// const showThis = () => {
//   console.log(this);
// };

// showThis();

// 2.

// const data = {
//   date: '12-03-2019',
//   extensions: ['.pdf', '.txt', '.html'],

//   showDate() {
//     const arrowFunc = () => {
//       console.log(this.date);
//     };

//     arrowFunc();
//   },

//   showThis: () => {
//     console.log(this);
//   },
// };

// data.showDate();

// data.showThis();

// const newObj = {
//   name: 'Galyna',
//   showThis: function () {
//     const func = () => {
//       console.log(this);
//     };

//     func();
//   },
// };

// const newObj2 = {
//   name: 'Vitaliy',
//   showThis: newObj.showThis,
// };

// newObj2.showThis();

// newObj.showThis();

// newObj.showThis();

/*
  3. Методи функцій bind, call, apply
*/

// Метод call

// function getData(room) {
//   console.log(
//     `${this.username} is ${this.age} years old. Your room number is ${room}`
//   );
// }

// // console.dir(getData);

// const userFirst = {
//   username: 'Max',
//   age: 29,
//   // getData,
// };

// getData.call(userFirst, 55);

// userFirst.getData();

// const userSecond = {
//   username: 'Anatoliy',
//   age: 33,
// };

// getData.call(userSecond, 618);

// Метод apply

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const firstUser = {
//   username: 'Alina',
//   age: 30,
// };

// greetGuest.apply(firstUser, ['Hello']);

// const secondUser = {
//   username: 'Vitaliy',
//   age: 35,
// };

// greetGuest.apply(secondUser, ['Hi']);

// function func(...rest) {
//   return Math.max.call(null, ...rest);
// }

// const result = func(500, 1000, -5);

// console.log(result);

// Метод bind

// const fordAuto = {
//   make: 'Ford',
//   mark: 'Mondeo',
//   wheels: 4,

//   getInfo() {
//     console.log(`${this.make} ${this.mark} has ${this.wheels} wheels`);
//   },
// };

// const bogdanAuto = {
//   make: 'Isuzu',
//   mark: 'Bogdan',
// };

// const getInfo = fordAuto.getInfo.bind(fordAuto).bind(bogdanAuto);

// console.log(getInfo === fordAuto.getInfo);

// getInfo.call(bogdanAuto);

/*
  4. Калькулятор
  
  Доповніть об'єкт calculator трьома методами:

  write(a, b) - приймає два значення та зберігає їх як властивості об'єкта
  getSum() - повертає суму збережених значень
  getMulti() - перемножує збережені значення та повертає результат
*/

// const calculator = {
//   a: 0,
//   b: 0,

//   write(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   getSum() {
//     return this.a + this.b;
//   },

//   getMulti() {
//     return this.a * this.b;
//   },
// };

// calculator.write(50, 100);

// console.log(calculator.getSum());

// console.log(calculator.getMulti());

// console.log(calculator);

/*
  5. Це ladder (драбина) – об'єкт, який дозволяє підніматись вгору
  та спускатись

  Напишіть методи об'єкта ladder:
  
  up - піднятись на сходинку вище
  down - опуститись на сходинку нижче
  showStep - показати сходинку
*/

const ladder = {
  step: 0,

  up() {
    this.step += 1;

    return this;
  },

  down() {
    if (this.step === 0) {
      console.log('знаходишся на 0 сходинці');
      return this;
    }

    this.step -= 1;

    return this;
  },

  showStep() {
    console.log(this.step);
  },
};

// ladder.up();
// ladder.up();
// ladder.up();

// ladder.down();

// ladder.showStep();

/* 
  Змініть код методів up, down та showStep таким чином, щоб 
  їх виклик можна було зробити по ланцюжку, наприклад так:

  ladder.up().up().down().showStep()
*/

// ladder.up().up().down().showStep();

/*
  6. Напишіть метод calcTotalPrice(stoneName), який приймає назву
  каменю, розраховує та повертає загальну вартість каміння з таким
  ім'ям із властивості stones
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stoneObj = this.stones.find(
//       ({ name }) => name.toLowerCase() === stoneName.trim().toLowerCase()
//     );

//     if (!stoneObj) {
//       return `Каміння з назвою ${stoneName} не знайшлося`;
//     }

//     return stoneObj.price * stoneObj.quantity;
//   },
// };

// // console.log(chopShop.calcTotalPrice('   EmErаіваіввіaLd   ')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100

// const showThis = function () {
//   console.log(`This show -> this`, this);
// };

// const ObjA = {
//   a: 5,
//   b: 10,
// };

// ObjA.showThis = showThis;

// ObjA.showThis();

// showThis.call(ObjA);

// function showProps({ eyeColor, gender, age }) {
//   console.log(eyeColor, gender, age);
// }

// showProps({ eyeColor: 'blue', age: 25, gender: 'female' })

// showProps.call(null, { eyeColor: 'blue', age: 25, gender: 'female' });

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// debugger;

// const totalAveragePlaytimePerGame = players
//   .map((player) => player.playtime / player.gamesPlayed)
//   .reduce((previousTime, time) => previousTime + time, 0);
