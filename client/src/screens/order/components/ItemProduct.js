import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';

export default function ItemProduct({data}) {
  return (
    <View style={styles.ItemBox}>
      <Image source={{uri: data.product.images[0]}} style={styles.ItemImage} />
      <View style={styles.BodyBox}>
        <Text style={styles.NameText}>{data.product.name}</Text>
        <Text style={styles.UnitText}>{data.unit.name}</Text>
        <Text style={styles.NumberText}>X{data.number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemBox: {
    width: constantsGlobal.with,
    height: 70,
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  ItemImage: {
    width: constantsGlobal.sizeImageCartItem - 20,
    height: constantsGlobal.sizeImageCartItem - 20,
  },
  BodyBox: {
    marginLeft: 15,
  },
  NameText: {
    fontFamily: appFont.Medium,
    fontSize: 14,
  },
  UnitText: {
    fontFamily: appFont.Regular,
    fontSize: 12,
    color: appColor.hint,
  },
  NumberText: {
    fontFamily: appFont.Regular,
    fontSize: 12,
    color: appColor.hint,
  },
});
