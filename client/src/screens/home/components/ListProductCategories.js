import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import ListCardCatagory from './ListCardCatagory';

export default function ListProductCategories() {
  const {categories} = useSelector(s => s.categories);

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListCardCatagory category={item} />}
      contentContainerStyle={styles.ItemList}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  ItemList: {
    paddingTop: 5,
    paddingBottom: 120,
  },
});
