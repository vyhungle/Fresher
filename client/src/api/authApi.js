import axios from 'axios';

import {apiUrl} from './constants';

export const loginAuth = phone => {
  const data = axios.get(`${apiUrl}/user?phoneNumber=${phone}`);
  return data;
};

export const registerAuth = req => {
  axios.post(`${apiUrl}/user`, req);
};
