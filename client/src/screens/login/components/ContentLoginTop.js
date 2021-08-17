import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';

const {width, height} = Dimensions.get('window');

export default function ContentLoginTop() {
  return (
    <View style={styles.Container}>
      <View style={styles.BoxBottom}>
        <Text style={styles.Title}>Đăng Nhập</Text>
        <Text style={styles.Hint}>Nhập email và mật khẩu của bạn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: width,
    height: height / 4,
    zIndex: 10,
    opacity: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxBottom: {
    width: width,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontFamily: appFont.Bold,
  },
  Hint: {
    fontFamily: appFont.Regular,
    fontSize: 16,
    color: appColor.hint,
    marginTop: 10,
  },
  Logo: {
    position: 'absolute',
    left: 20,
  },
});
