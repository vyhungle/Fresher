import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {deleteAccessCart} from '../../utils/asyncStore';

export default function Index() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>setting</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteAccessCart()}>
        <Text>clear cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
