import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appColor} from '../../assets/colors';
import CatalogMain from '../../components/CatalogMain';
import TopBarMain from '../../components/TopBarMain';
import ListProductCategories from './components/ListProductCategories';

export default function Index() {
  const ListProductRef = React.useRef();
  return (
    <View style={styles.Container}>
      <TopBarMain />
      <CatalogMain ListProductRef={ListProductRef} />
      <ListProductCategories ListProductRef={ListProductRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: appColor.bg,
  },
});
