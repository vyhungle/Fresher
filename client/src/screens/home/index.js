import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CatalogMain from '../../components/CatalogMain';
import TopBarMain from '../../components/TopBarMain';

export default function index() {
  return (
    <View>
      <TopBarMain />
      <CatalogMain />
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
