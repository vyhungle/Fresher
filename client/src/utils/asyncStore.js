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

export const getAccessAuth = async () => {
  return await AsyncStorage.getItem('auth');
};

export const setAccessAuth = async phone => {
  await AsyncStorage.setItem('auth', phone);
};

export const deleteAccessAuth = async () => {
  await AsyncStorage.removeItem('auth');
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

export const deleteAccessFcmToken = async () => {
  AsyncStorage.removeItem('fcmToken');
};

export const setAccessNumberOfNotification = async () => {
  await AsyncStorage.setItem('numberOfNotification', 1 + '');
};
export const deleteAccessNumberOfNotification = async () => {
  await AsyncStorage.removeItem('numberOfNotification');
};

export const getAccessNumberOfNotification = async () => {
  let res = await AsyncStorage.getItem('numberOfNotification');
  return res;
};
