import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../../components/TopBarMain';

import ListNotification from './components/ListNotification';

export default function Index() {
  return (
    <View style={styles.Container}>
      <TopBar />
      <ListNotification />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: 'white'},
});
