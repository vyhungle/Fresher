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

export const getFcmToken = async token => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('Old token: ', fcmToken);
  if (!fcmToken) {
    const newToken = await token;
    try {
      console.log('New token: ', newToken);
      await AsyncStorage.setItem('fcmToken', newToken);
    } catch (error) {
      console.log(error.message);
    }
  }
};
