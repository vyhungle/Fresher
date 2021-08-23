import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
export default function Index() {
  const location = useSelector(s => s.location);
  return (
    <View>
      <Text>{location.locationName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
