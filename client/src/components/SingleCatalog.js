import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appColor} from '../assets/colors';
import {appFont} from '../assets/fonts';

export default function SingleCatalog(props) {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={styles.TextBody}>Sữa tươi các loại</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 50,
    width: 70,
    borderWidth: 0.7,
    borderColor: appColor.hint,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBody: {
    fontFamily: appFont.Medium,
    color: appColor.primary,
    textAlign: 'center',
  },
});
