import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import SingleOrder from './SingleOrder';

export default function ListOrder(props) {
  const {orders, isLoading} = useSelector(s => s.order);
  const navigation = useNavigation();
  const itemOnPress = id => {
    navigation.navigate('OrderDetailScreen', {
      id: id,
    });
  };
  const RenderItem = ({item}) => (
    <TouchableOpacity onPress={() => itemOnPress(item.id)}>
      <SingleOrder item={item} />
    </TouchableOpacity>
  );
  if (isLoading) {
    return <Text>Loading..</Text>;
  }
  return (
    <FlatList
      data={orders}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => <RenderItem item={item} />}
    />
  );
}
