import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import ContentRegisterTop from './components/ContentTopRegister';
import FormRegister from './components/FormRegister';

export default function index() {
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <ScrollView>
          <ContentRegisterTop />
          <FormRegister />
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
});
