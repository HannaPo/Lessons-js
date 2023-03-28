'use strict';

import axios from 'axios';

/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

// const getUsers = () =>
//   fetch(`${BASE_URL}/users`, { method: 'GET' }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });

const getUsers = () => axios.get(`${BASE_URL}/users`);

getUsers()
  .then(({ data }) => {
    console.log(data);
  })
  .catch(console.warn);
