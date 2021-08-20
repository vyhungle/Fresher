import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {productDetail} from '../../../redux/slice/productsSlice';
import {moneyFormat} from '../../../utils/format';

export default function SingleItemCard({product, categoryId}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const goDetail = () => {
    dispatch(productDetail({categoryId: categoryId, productId: product.id}));
    navigation.navigate('DetailScreen');
  };
  return (
    <TouchableOpacity style={styles.Container} onPress={() => goDetail()}>
      <View style={styles.HSDBox}>
        <Text style={styles.HSDText}>{product.hsd}</Text>
      </View>
      <Image style={styles.CartImage} source={{uri: product.images[0]}} />

      <View style={styles.BodyBox}>
        <Text style={styles.NameText} numberOfLines={2}>
          {product.name}
        </Text>
      </View>

      <View style={styles.BottomBox}>
        <Text style={styles.PriceText}>
          {moneyFormat(product.unit.detail[0].price)}
          <Text style={styles.UnitText}>đ</Text>
        </Text>

        <TouchableOpacity style={styles.BuyBox}>
          <Text style={styles.BuyText}>MUA</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: constantsGlobal.withCard,
    height: constantsGlobal.heightCard,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: appColor.border,
  },
  HSDBox: {
    backgroundColor: appColor.opacity,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    zIndex: 10,
  },
  HSDText: {
    color: 'white',
    fontFamily: appFont.Regular,
    fontSize: 12,
  },

  CartImage: {
    width: constantsGlobal.withCard,
    height: 130,
  },

  BodyBox: {
    padding: 2.5,
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
  },
  NameText: {
    fontFamily: appFont.Regular,
    fontSize: 14,
  },

  BottomBox: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 26,
  },
  PriceText: {
    fontFamily: appFont.Medium,
  },
  UnitText: {
    textDecorationLine: 'underline',
  },

  BuyBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: appColor.border,
    borderLeftWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
  },
  BuyText: {
    fontSize: 13,
    fontFamily: appFont.Medium,
  },
});
