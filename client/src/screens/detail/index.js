import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import DetailTop from './components/DetailTop';
import TopBar from '../../components/TopBarMain';
import BodyDetail from './components/BodyDetail';
import RelatedProduct from './components/RelatedProduct';

export default function Index() {
  const {product} = useSelector(s => s.products);
  return (
    <View>
      <TopBar />
      <ScrollView
        contentContainerStyle={styles.ScrollViewBox}
        showsVerticalScrollIndicator={false}>
        <DetailTop product={product} />
        <BodyDetail product={product} />
        <RelatedProduct categoryId={product.categoryId} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ScrollViewBox: {
    paddingBottom: 50,
  },
});
