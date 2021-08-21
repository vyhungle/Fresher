import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAccessCart = async () => {
  let cart = await AsyncStorage.getItem('cart');
  return JSON.parse(cart);
};

export const setAccessCart = async cart => {
  await AsyncStorage.setItem('cart', JSON.stringify(cart));
};

export const deleteAccessCart = async () => {
  await AsyncStorage.removeItem('cart');
};
