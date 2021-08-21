import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import TopBar from '../../components/TopBarMain';

export default function Index() {
  const cart = useSelector(s => s.cart);
  console.log(cart);
  return (
    <View>
      <TopBar />
      <Text>cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
