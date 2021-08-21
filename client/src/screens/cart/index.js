import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import TopBar from '../../components/TopBarMain';
import ListCart from './components/ListCart';
import FooterCart from './components/FooterCart';

export default function Index() {
  const cart = useSelector(s => s.cart);
  return (
    <View style={styles.Container}>
      <TopBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListCart cart={cart} />
        <FooterCart total={cart.total} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
