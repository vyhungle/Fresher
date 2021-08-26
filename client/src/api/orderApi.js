import axios from 'axios';

import {apiUrl} from './constants';

export const getOrder = (phone, page) => {
  const data = axios.get(
    `${apiUrl}/order?phoneNumber=${phone}&_page=${page}&_limit=10&_sort=id&_order=desc`,
  );
  return data;
};

export const getSingleOrder = id => {
  const data = axios.get(`${apiUrl}/order/${id}`);
  return data;
};

export const addOrder = req => {
  axios.post(`${apiUrl}/order`, req);
};
