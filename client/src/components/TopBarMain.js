import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import {constantsGlobal} from '../api/constants';
import {appColor} from '../assets/colors';
import {appFont} from '../assets/fonts';
import MenuIcon from '../assets/images/menu.svg';
import SearchIcon from '../assets/images/searchIcon.svg';
import CartIcon from '../assets/images/shopping-cartIcon.svg';

export default function TopBarMain() {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.BoxIcon}>
        <MenuIcon width={30} height={30} />
        <Text style={styles.TextIcon}>MENU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BoxField}>
        <TextInput
          style={styles.Field}
          placeholder="Bạn đang tìm gì"
          placeholderTextColor={appColor.hint}
        />
        <View style={styles.SearchIcon}>
          <SearchIcon width={15} height={15} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BoxGH}>
        <Text style={styles.GHTitle}>Giao Tại</Text>
        <Text style={styles.GHBody} numberOfLines={1}>
          P.Tây Thạnh
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BoxDH}>
        <Text style={styles.GHTitle}>Đơn hàng</Text>
        <Text style={styles.GHBody} numberOfLines={1}>
          A.Vỹ
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BoxCart}>
        <CartIcon width={20} height={20} />
        <Text style={styles.CartText}>Giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: constantsGlobal.with,
    height: 50,
    backgroundColor: appColor.primary,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  TextIcon: {
    color: appColor.secondary,
    fontFamily: appFont.Bold,
    fontSize: 10,
    top: -5,
  },
  BoxIcon: {
    display: 'flex',
    alignItems: 'center',
    top: 1.5,
  },
  BoxField: {
    flexDirection: 'row',
  },
  Field: {
    marginLeft: 5,
    width: 120,
    height: 36,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  SearchIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 36,
    width: 36,
  },

  BoxGH: {
    marginLeft: 5,
    width: 70,
    display: 'flex',
  },
  GHTitle: {
    color: 'white',
    fontFamily: appFont.Regular,
    fontSize: 12,
  },
  GHBody: {
    fontFamily: appFont.Medium,
    fontSize: 13,
    color: 'white',
  },
  BoxDH: {
    marginLeft: 5,
    display: 'flex',
  },
  BoxCart: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 5,
  },
  CartText: {
    color: 'white',
    fontFamily: appFont.Regular,
    fontSize: 12,
  },
});
