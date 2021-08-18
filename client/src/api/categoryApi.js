import axios from 'axios';

import {apiUrl} from './constants';

export const getCategories = () => {
  const data = axios.get(`${apiUrl}/categories`);
  return data;
};
