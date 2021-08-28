import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import App from './App';
import {name as appName} from './app.json';
import {store} from './src/redux/store';
import './src/utils/rnPushNotificationConfig';
import {addNotification} from './src/redux/slice/notificationSlice';
LogBox.ignoreLogs(['Remote debugger']);

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  const {phoneNumber, id} = remoteMessage.data;
  const {body} = remoteMessage.notification;
  store.dispatch({
    type: addNotification.type,
    payload: {
      res: {
        phoneNumber,
        orderId: id,
        body,
        read: false,
      },
    },
  });
});

const ReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
