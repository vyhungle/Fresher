import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import SingleOrder from './components/SingleOrder';
import {getSingleOrderPending} from '../../redux/slice/orderSlice';

export default function Detail() {
  const {order, isOrderLoading} = useSelector(s => s.order);
  const route = useRoute();
  const dispatch = useDispatch();
  const {id} = route.params;

  React.useEffect(() => {
    dispatch(getSingleOrderPending({id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (isOrderLoading) {
    return (
      <View style={styles.Container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.Container}>
      <SingleOrder item={order} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
