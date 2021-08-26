import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import SingleNotification from './SingleNotification';

export default function ListNotification() {
  const {notifications, isLoading} = useSelector(s => s.notification);

  if (isLoading) {
    return <Text>Loading..</Text>;
  }
  return (
    <FlatList
      data={notifications}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => <SingleNotification item={item} />}
    />
  );
}

const styles = StyleSheet.create({});
