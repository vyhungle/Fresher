import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {appFont} from '../../../assets/fonts';
import SingleItemCard from '../../home/components/SingleItemCard';

export default function RelatedProduct({categoryId}) {
  const {listProducts} = useSelector(s => s.products);
  const filterProduct = () => {
    const res = listProducts.find(x => x.id === categoryId);
    return res;
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Sản phẩm liên quan</Text>
      <View style={styles.ProductsBox}>
        {filterProduct().products.map((item, index) => (
          <View key={index}>
            <SingleItemCard product={item} categoryId={filterProduct().id} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10,
  },
  Title: {
    marginLeft: 5,
    fontFamily: appFont.Bold,
    fontSize: 18,
  },
  ProductsBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
