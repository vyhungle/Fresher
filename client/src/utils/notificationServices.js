import messaging from '@react-native-firebase/messaging';
import {getFcmToken} from './asyncStore';
import * as RootNavigation from '../navigation/rootNavigation';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken(messaging().getToken());
  }
}

export const notificationListener = navigation => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    RootNavigation.navigate(remoteMessage.data.navigate);
  });

  messaging().onMessage(async remoteMessage => {
    console.log('received in foreground', remoteMessage);
    // await setCountNotification();
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
