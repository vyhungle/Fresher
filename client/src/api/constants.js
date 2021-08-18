import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
export const apiUrl = 'https://api-bhx.herokuapp.com';

export const constantsGlobal = {
  with: win.width,
  Height: win.height,
  withCard: win.width / 3 - 8.3,
  heightCard: 200,
};
