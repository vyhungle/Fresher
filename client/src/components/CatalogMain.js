import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import SingleCatalog from './SingleCatalog';

export default function CatalogMain() {
  const {categories} = useSelector(s => s.categories);
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={item => <SingleCatalog category={item.item} />}
      contentContainerStyle={{paddingVertical: 5}}
      // pagingEnabled={true}
    />
  );
}

const styles = StyleSheet.create({});
