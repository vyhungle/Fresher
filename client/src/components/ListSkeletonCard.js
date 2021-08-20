import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonCard from './SkeletonCard';

export default function ListSkeletonCard() {
  const data = ['1', '2', '3'];
  return (
    <View style={styles.Container}>
      {data.map((x, index) => (
        <View key={index} style={styles.CardBox}>
          <SkeletonCard />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    marginLeft: 2.5,
  },
  CardBox: {
    margin: 2.5,
  },
});
