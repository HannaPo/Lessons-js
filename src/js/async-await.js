'use strict';

/*
 * async/await
 * асинхронна (async) функція Завжди повертає проміс.
 * await змушує функцію чекати виконання промісу.
 * await не можна використовувати поза асинхронними функціями.
 * try/catch для відлову помилок
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchUsers = () =>
//   fetch(`${BASE_URL}/users`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });

// const sum = async (a, b) => a + b;

// const fetchUsers = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/usedasdrs`);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const usersData = await response.json();

//     return usersData;
//   } catch (err) {
//     throw err;
//   }
// };

// fetchUsers().then(console.log).catch(console.log);

// fetchUsers()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(console.log);

// const greet = async username => {
//   console.log(`Hello, ${username}!`);
// };

// console.log(1);

// greet('Andrii');

// console.log(2);

// console.log(1);

// const sum = async (a, b) => a + b;

// sum(1, 2).then(console.log);
// console.log(2);

//? TASK 01
// Перепиши функцію на синтаксис async/await

// const loadPosts = url => {
//   return fetch(url).then(postsResponse => {
//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return postsResponse.json();
//   });
// };

// const loadPosts = async url => {
//   try {
//     const postsResponse = await fetch(url);
//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return await postsResponse.json();
//   } catch (err) {}
// };

// const logPosts = async () => {
//   console.log(await loadPosts(`${BASE_URL}/posts`));
// };

// logPosts();

// (async () => {
//   console.log(await loadPosts(`${BASE_URL}/posts`));
// })();

// loadPosts(`${BASE_URL}/posts`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async–функції?

async function wait() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
  } catch (err) {
    throw err;
  }
}

// async function f() {
//   try {
//     await wait();
//   } catch (err) {
//     console.log(err);
//   }
//   // ...що тут написати?
//   // щоб викликати wait() та дочекатися результату "10" від async–функції
//   // не забывайте, здесь нельзя использовать "await"
// }

// f();

(async () => {
  try {
    console.log(await wait());
  } catch (err) {
    console.log(err);
  }
})();
