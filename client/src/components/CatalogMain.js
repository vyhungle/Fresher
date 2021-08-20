import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListSkeletonCatalog from './ListSkeletonCatalog';
import ListSkeletonCard from './ListSkeletonCard';

import SingleCatalog from './SingleCatalog';

export default function CatalogMain(props) {
  const {categories, isLoading} = useSelector(s => s.categories);
  const [indexSelect, setIndexSelect] = React.useState(0);

  const changeSelect = index => {
    setIndexSelect(index);
  };

  if (isLoading) {
    return (
      <View>
        <ListSkeletonCatalog />
        <ListSkeletonCard />
        <ListSkeletonCard />
        <ListSkeletonCard />
      </View>
    );
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item, index}) => (
        <SingleCatalog
          category={item}
          index={index}
          ListProductRef={props.ListProductRef}
          indexSelect={indexSelect}
          changeSelect={changeSelect}
        />
      )}
      contentContainerStyle={{paddingVertical: 5}}
      // pagingEnabled={true}
      style={{height: 70}}
    />
  );
}

const styles = StyleSheet.create({});
