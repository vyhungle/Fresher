import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {moneyFormat} from '../../../utils/format';
import ItemProduct from './ItemProduct';

export default function SingleOrder({item}) {
  const getStatus = () => {
    if (item.status === 0) return 'Đang chờ xử lý';
    else if (item.status === 1) return 'Đang Giao';
    else return 'Đã giao';
  };
  return (
    <View style={styles.ItemBox}>
      <Text style={styles.ItemText}>Mã đơn hàng #{item.id}</Text>
      {item.products.map((data, index) => (
        <ItemProduct data={data} key={index} />
      ))}

      <View style={styles.FooterBox}>
        <Text style={styles.FooterText}>Số lượng: {item.number}</Text>
        <Text style={styles.FooterText}>Ngày đặt: 16/8/2021</Text>
        <Text style={styles.FooterText}>
          Thành tiền: {moneyFormat(item.total)}đ
        </Text>
        <Text style={styles.StatusText}>{getStatus()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemBox: {
    width: constantsGlobal.with,
    borderTopColor: appColor.border,
    borderTopWidth: 2,
    paddingTop: 10,
  },
  ItemText: {
    marginLeft: 10,
    fontFamily: appFont.Medium,
    fontSize: 14,
  },
  FooterBox: {
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  FooterText: {
    fontFamily: appFont.Regular,
    fontSize: 14,
  },
  StatusText: {
    position: 'absolute',
    right: 10,
  },
});
