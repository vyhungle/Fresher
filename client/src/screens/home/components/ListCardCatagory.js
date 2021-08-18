import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {productPending} from '../../../redux/slice/productsSlice';

import SingleItemCard from './SingleItemCard';

export default function ListCardCatagory() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(productPending({id: 1, page: 1}));
  }, [dispatch]);

  return (
    <View>
      {products.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={products.listProducts[0]?.products}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <SingleItemCard product={item} />}
          numColumns={3}
          contentContainerStyle={{paddingLeft: 2.5}}
        />
      )}
    </View>
  );
}
