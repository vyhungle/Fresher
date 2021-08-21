import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {changeSelectIndex} from '../../../redux/slice/productsSlice';
import ListCardCatagory from './ListCardCatagory';

export default function ListProductCategories(props) {
  const {categories} = useSelector(s => s.categories);
  const dispatch = useDispatch();
  const onchangeIndex = nativeEvent => {
    if (nativeEvent) {
      const index = Math.ceil(
        nativeEvent.contentOffset.y / nativeEvent.layoutMeasurement.height,
      );
      // console.log(index);
      // dispatch(changeSelectIndex({index: index}));
    }
  };
  return (
    <FlatList
      ref={props.ListProductRef}
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListCardCatagory category={item} />}
      contentContainerStyle={styles.ItemList}
      showsVerticalScrollIndicator={false}
      onScroll={({nativeEvent}) => onchangeIndex(nativeEvent)}
    />
  );
}

const styles = StyleSheet.create({
  ItemList: {
    paddingTop: 5,
    paddingBottom: 120,
  },
});
