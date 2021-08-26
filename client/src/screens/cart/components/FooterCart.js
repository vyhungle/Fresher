import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {addOrderPending} from '../../../redux/slice/orderSlice';
import {moneyFormat} from '../../../utils/format';

export default function FooterCart(props) {
  const {products, total, unit, number} = props.cart;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const orderPress = () => {
    dispatch(
      addOrderPending({
        products,
        unit,
        number,
        total,
        phoneNumber: '0983782942',
      }),
    );
    navigation.navigate('OrderScreen');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.BodyBox}>
        <View style={styles.BodyItemBox}>
          <Text style={styles.BodyText}>Tiền hàng:</Text>
          <View style={styles.BoxTextRight}>
            <Text style={styles.BodyTextRight}>{moneyFormat(props.total)}</Text>
          </View>
        </View>

        <View style={styles.BodyItemBox}>
          <Text style={styles.BodyText}>Phí giao hàng dự kiến: </Text>
          <View style={styles.BoxTextRight}>
            <Text style={styles.BodyTextRight}>Miễn phí</Text>
          </View>
        </View>
      </View>

      <View style={styles.ButtonBox}>
        <TouchableOpacity style={styles.ButtonItemBox}>
          <Text style={styles.ButtonText}>Xóa hết giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonItemBox}>
          <Text style={styles.ButtonText}>Dùng phiếu mua hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonItemBoxDH}
          onPress={() => orderPress()}>
          <Text style={styles.ButtonTextDH}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: constantsGlobal.with,
    paddingTop: 10,
  },
  BodyItemBox: {
    flexDirection: 'row',
    width: constantsGlobal.with,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  BodyText: {
    fontFamily: appFont.Medium,
  },
  BoxTextRight: {
    flex: 1,
  },
  BodyTextRight: {
    fontFamily: appFont.Medium,
    alignSelf: 'flex-end',
  },

  ButtonBox: {
    flexDirection: 'row',
    padding: 10,
  },
  ButtonItemBox: {
    width: (constantsGlobal.with - 40) / 3,
    height: 66,
    borderWidth: 1,
    borderColor: appColor.border,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
  },
  ButtonText: {
    fontFamily: appFont.Medium,
    fontSize: 16,
  },
  ButtonItemBoxDH: {
    width: (constantsGlobal.with - 40) / 3,
    height: 66,
    borderWidth: 1,
    borderColor: appColor.border,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: appColor.primary,
  },
  ButtonTextDH: {
    color: 'white',
    fontFamily: appFont.Medium,
    fontSize: 16,
  },
});
