import messaging from '@react-native-firebase/messaging';
import {getAccessNumberOfNotification, getFcmToken} from './asyncStore';
import * as RootNavigation from '../navigation/rootNavigation';

import {
  addNotification,
  readNotificationPending,
} from '../redux/slice/notificationSlice';

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

export const notificationListener = dispatch => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );

    const {phoneNumber, id} = remoteMessage.data;
    const {body} = remoteMessage.notification;
    dispatch(
      readNotificationPending({
        notification: {phoneNumber, orderId: id, body, read: false},
      }),
    );

    RootNavigation.navigateRoute(remoteMessage.data.navigate, {
      id: remoteMessage.data.id,
    });
  });

  messaging().onMessage(async remoteMessage => {
    console.log('received in foreground', remoteMessage);
    // await setCountNotification();
    console.log(await getAccessNumberOfNotification());

    const {phoneNumber, id} = remoteMessage.data;
    const {body} = remoteMessage.notification;
    dispatch(
      addNotification({
        res: {
          phoneNumber,
          orderId: id,
          body,
          read: false,
        },
      }),
    );
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
