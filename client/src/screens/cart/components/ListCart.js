import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';

import SingleItemCart from './SingleItemCart';

export default function ListCart(props) {
  const products = props.cart.products;
  return (
    <View style={styles.ListBox}>
      <View style={styles.TextBox}>
        <Text style={styles.ListText}>Giỏ hàng của bạn</Text>
      </View>
      {products.map((data, index) => (
        <View key={index}>
          <SingleItemCart data={data} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ListBox: {
    width: constantsGlobal.with,
  },
  TextBox: {
    padding: 5,
    height: 35,
  },
  ListText: {
    fontFamily: appFont.Medium,
  },
});
