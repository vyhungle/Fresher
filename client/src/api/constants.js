import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
export const apiUrl = 'https://api-bhx.herokuapp.com';

export const constantsGlobal = {
  with: win.width,
  Height: win.height,
};
