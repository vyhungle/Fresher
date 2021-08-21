import axios from 'axios';

import {apiUrl} from './constants';

export const getUserLocation = (latitude, longitude) => {
  const data = axios.get(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=vi`,
  );
  return data;
};
