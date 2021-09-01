import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');

import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {readNotificationPending} from '../../../redux/slice/notificationSlice';

//icon
import PackageIcon from '../../../assets/images/package.svg';
import DoneIcon from '../../../assets/images/done.svg';

export default function SingleNotification({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const notificationOnPress = () => {
    navigation.navigate('OrderDetailScreen', {id: item.orderId});
    if (item.read === false || item.read === 'false') {
      dispatch(readNotificationPending({notification: item}));
    }
  };
  const testDate = 1630400514157;
  const d = new Date(testDate);

  const CheckTime = time => {
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  };
  return (
    <TouchableOpacity
      style={styles.ItemBox}
      onPress={() => notificationOnPress()}>
      <View style={styles.IconBox}>
        <PackageIcon width={29} height={29} />
        <DoneIcon width={12} height={12} style={styles.SubIcon} />
      </View>
      <View style={styles.BodyBox}>
        <Text style={styles.Title}>Đặt hàng thành công</Text>
        <Text style={styles.Body} numberOfLines={2}>
          Xác nhận đặt thành công đơn hàng #{item.orderId} lúc{' '}
          {CheckTime(d.getHours())}:{CheckTime(d.getMinutes())} ngày{' '}
          {CheckTime(d.getDate())}/{CheckTime(d.getMonth())}/
          {CheckTime(d.getFullYear())}
        </Text>

        {(!item.read || item.read === 'false') && (
          <View style={styles.TimeBox}>
            <Text>{moment(testDate).startOf('hour').fromNow()}</Text>
            <View style={styles.StatusBox}></View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ItemBox: {
    width: constantsGlobal.with - 20,
    height: 76,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
  },

  Title: {
    fontSize: 16,
    fontFamily: appFont.Medium,
  },
  Body: {
    fontSize: 14,
    fontFamily: appFont.Regular,
    width: constantsGlobal.with - 50 - 58,
  },

  TimeBox: {
    position: 'absolute',
    right: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  StatusBox: {
    width: 10,
    height: 10,
    backgroundColor: appColor.primary,
  },

  IconBox: {
    width: 58,
    height: 58,
    backgroundColor: appColor.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  SubIcon: {
    position: 'absolute',
    top: 12,
    right: 11,
  },
  BodyBox: {
    marginLeft: 10,
  },
});
