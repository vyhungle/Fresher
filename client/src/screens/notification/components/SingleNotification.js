import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {readNotificationPending} from '../../../redux/slice/notificationSlice';

export default function SingleNotification({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const notificationOnPress = () => {
    navigation.navigate('OrderDetailScreen', {id: item.orderId});
    if (item.read === false || item.read === 'false') {
      dispatch(readNotificationPending({notification: item, id: item.id}));
    }
  };

  return (
    <TouchableOpacity
      style={styles.ItemBox}
      onPress={() => notificationOnPress()}>
      <Text style={styles.Title}>Mã đơn hàng: #{item.orderId}</Text>
      <Text style={styles.Body}>{item.body}, kiểm tra nào.</Text>
      {(!item.read || item.read === 'false') && (
        <View style={styles.StatusBox}></View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ItemBox: {
    width: constantsGlobal.with,
    height: 70,
    padding: 10,
    borderTopColor: appColor.border,
    borderTopWidth: 1,
    display: 'flex',
    justifyContent: 'center',
  },

  Title: {
    fontSize: 14,
    fontFamily: appFont.Medium,
  },
  Body: {
    fontSize: 14,
    fontFamily: appFont.Regular,
  },
  StatusBox: {
    width: 10,
    height: 10,
    backgroundColor: appColor.primary,
    position: 'absolute',
    right: 10,
    borderRadius: 20,
  },
});
