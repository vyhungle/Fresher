import axios from 'axios';

import {apiUrl} from './constants';

export const getCategories = () => {
  const data = axios.get(`${apiUrl}/categories`);
  return data;
};

export const getProducts = (id, page) => {
  const data = axios.get(
    `${apiUrl}/products?categoryId=${id}&_page=${page}&_limit=6`,
  );
  return data;
};
