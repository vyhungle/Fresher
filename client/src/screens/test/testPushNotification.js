import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default function TestPushNotification() {
  React.useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'notification-local-app',
      channelName: 'BHX Notification Local',
    });
  };

  const pushNotifyPress = () => {
    PushNotification.localNotification({
      channelId: 'notification-local-app',
      title: 'BHX Local',
      message:
        'Đây là thông báo từ local, click vào đây để đến trang notification',
      data: {
        navigate: 'NotificationScreen',
      },
      subText: 'open APP',
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => pushNotifyPress()}>
        <Text>Push notify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
