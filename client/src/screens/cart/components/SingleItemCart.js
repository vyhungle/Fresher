import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {moneyFormat} from '../../../utils/format';
import MinusIcon from '../../../assets/images/minusIcon.svg';
import PlusIcon from '../../../assets/images/plusIcon.svg';
import DeleteIcon from '../../../assets/images/deleteIcon.svg';
import {
  addToCartPending,
  clearItemCartPending,
  removeToCartPending,
} from '../../../redux/slice/cartSlice';

export default function SingleItemCart(props) {
  const dispatch = useDispatch();
  const product = props.data.product;
  const unit = props.data.unit;
  const number = props.data.number;

  const clearItemCartPress = (product, unit) => {
    dispatch(clearItemCartPending({product, unit}));
  };
  const addToCartPress = (product, unit) => {
    dispatch(addToCartPending({product, unit}));
  };
  const removeToCartPress = (product, unit) => {
    dispatch(removeToCartPending({product, unit}));
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ImageBox}>
        <TouchableOpacity
          style={styles.DeleteButton}
          onPress={() => clearItemCartPress(product, unit)}>
          <DeleteIcon width={10} height={10} />
        </TouchableOpacity>
        <Image style={styles.ImageProduct} source={{uri: product.images[0]}} />
      </View>

      <View style={styles.BodyBox}>
        <Text style={styles.BodyName}>{product.name}</Text>
        <Text style={styles.BodyHSD}>{product.hsd}</Text>
      </View>

      <View style={styles.BuyBox}>
        <Text style={styles.BuyText}>
          {moneyFormat(unit.price)}
          <Text style={styles.BuyTextUnit}>đ</Text>
        </Text>

        <View style={styles.BuyButtonBox}>
          <TouchableOpacity
            style={styles.ButtonCard}
            onPress={() => removeToCartPress(product, unit)}>
            <MinusIcon width={14} height={14} />
          </TouchableOpacity>
          <View style={styles.NumberBox}>
            <Text style={styles.NumberText}>{number}</Text>
          </View>
          <TouchableOpacity
            style={styles.ButtonCard}
            onPress={() => addToCartPress(product, unit)}>
            <PlusIcon width={14} height={14} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: constantsGlobal.paddingCartItem,
    width: constantsGlobal.with,
    height: 100,
    borderTopColor: appColor.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  ImageBox: {},
  ImageProduct: {
    width: constantsGlobal.sizeImageCartItem,
    height: constantsGlobal.sizeImageCartItem,
  },
  DeleteButton: {
    width: 20,
    height: 20,
    backgroundColor: appColor.opacity,
    position: 'absolute',
    zIndex: 5,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: -5,
    top: -5,
  },

  BodyBox: {
    width: constantsGlobal.widthBody,
    paddingHorizontal: 7,
    height: 100,
    paddingTop: 12.5,
  },
  BodyName: {
    fontFamily: appFont.Medium,
    fontSize: 14,
  },
  BodyHSD: {
    fontFamily: appFont.Regular,
    color: appColor.hint,
    fontSize: 12,
  },

  BuyBox: {
    height: 100,
    paddingTop: 12.5,
    width:
      constantsGlobal.with -
      constantsGlobal.widthBody -
      constantsGlobal.paddingCartItem * 2 -
      constantsGlobal.sizeImageCartItem,
  },
  BuyText: {
    fontFamily: appFont.Medium,
    alignSelf: 'flex-end',
  },
  BuyTextUnit: {
    textDecorationLine: 'underline',
  },

  BuyButtonBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  ButtonCard: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: appColor.border,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  NumberBox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: appColor.border,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  NumberText: {
    fontFamily: appFont.Bold,
    fontSize: 14,
  },
});
