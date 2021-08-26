import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import ListOrder from './components/ListOrder';
import {orderPending} from '../../redux/slice/orderSlice';
import {appFont} from '../../assets/fonts';

export default function Index() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(orderPending({phone: '0983782942', page: 1}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.Container}>
      <View style={styles.TitleBox}>
        <Text style={styles.Title}>Đơn hàng</Text>
      </View>
      <ListOrder />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  TitleBox: {
    height: 35,
    display: 'flex',
    justifyContent: 'center',
  },
  Title: {
    fontFamily: appFont.Bold,
    fontSize: 18,
    marginLeft: 10,
  },
});
