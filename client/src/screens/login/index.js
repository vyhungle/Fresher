import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ContentLoginTop from './components/ContentLoginTop';
import FormLogin from './components/FormLogin';

export default function index() {
  return (
    <View style={styles.Container}>
      <FormLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
});
