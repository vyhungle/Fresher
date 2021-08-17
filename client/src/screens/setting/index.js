import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>setting</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
