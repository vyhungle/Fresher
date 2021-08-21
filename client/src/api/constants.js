import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
export const apiUrl = 'https://api-bhx.herokuapp.com';

const sizeImage = 70;
const padding = 10;
const widthBody = win.width - (sizeImage + padding * 2) - 100;

export const constantsGlobal = {
  with: win.width,
  Height: win.height,
  withCard: win.width / 3 - 6.3,
  heightCard: 200,
  sizeImageCartItem: 70,
  paddingCartItem: 10,
  widthBody: widthBody,
};
