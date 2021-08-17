import axios from 'axios';
import {apiUrl} from './constants';

export const login = async values => {
  const {data} = axios.post(`${apiUrl}/auth/login`, values);
  return data;
};

export const register = async values => {
  const {data} = axios.post(`${apiUrl}/auth/register`, values);
  return data;
};
