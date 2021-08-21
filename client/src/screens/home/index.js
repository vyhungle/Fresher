import React from 'react';
import {StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';

import CatalogMain from '../../components/CatalogMain';
import TopBarMain from '../../components/TopBarMain';
import ListProductCategories from './components/ListProductCategories';
import {locationPending} from '../../redux/slice/locationSlice';

export default function Index() {
  const dispatch = useDispatch();
  const ListProductRef = React.useRef();
  const ListCatalogRef = React.useRef();
  Geolocation.getCurrentPosition(data => {
    dispatch(
      locationPending({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      }),
    );
  });
  return (
    <View style={styles.Container}>
      <TopBarMain />
      <CatalogMain
        ListProductRef={ListProductRef}
        ListCatalogRef={ListCatalogRef}
      />
      <ListProductCategories
        ListProductRef={ListProductRef}
        ListCatalogRef={ListCatalogRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: appColor.bg,
  },
});
