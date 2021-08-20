import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonCatalog from './SkeletonCatalog';

export default function ListSkeletonCatalog() {
  const data = ['1', '2', '3', '4', '5', '6'];
  return (
    <View style={styles.Container}>
      {data.map((x, index) => (
        <View key={index} style={styles.CardBox}>
          <SkeletonCatalog />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
  CardBox: {
    marginLeft: 5,
    paddingVertical: 5,
  },
});
