'use strict';

/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// const updateUserById = (userId, infoForUpdate) =>
//   fetch(`${BASE_URL}/users/${userId}`, {
//     method: 'PATCH',
//     body: JSON.stringify(infoForUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });

const updateUserById = (userId, infoForUpdate) =>
  axios.put(`${BASE_URL}/users/${userId}`, infoForUpdate);

updateUserById(9, { name: 'Andrii Shevchuk', email: 'test422242@gmail.com' })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
