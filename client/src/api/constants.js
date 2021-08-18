import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
export const apiUrl = 'http://10.0.0.13:4000/api';

export const constantsGlobal = {
  with: win.width,
  Height: win.height,
};
