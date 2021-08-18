import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appColor} from '../../assets/colors';
import CatalogMain from '../../components/CatalogMain';
import TopBarMain from '../../components/TopBarMain';
import ListCardCategory from './components/ListCardCatagory';

export default function index() {
  return (
    <View style={styles.Container}>
      <TopBarMain />
      <CatalogMain />
      <ListCardCategory />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: appColor.bg,
  },
});
