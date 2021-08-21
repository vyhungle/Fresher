import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {appColor} from '../assets/colors';
import {appFont} from '../assets/fonts';
import {changeSelectIndex} from '../redux/slice/productsSlice';

export default function SingleCatalog(props) {
  const dispatch = useDispatch();
  const {selectIndex} = useSelector(s => s.products);
  const rolling = () => {
    console.log('press');
    props.ListProductRef.current?.scrollToIndex({
      animated: true,
      index: props.index,
    });

    dispatch(changeSelectIndex({index: props.index}));
  };

  const isSelect = () => {
    return props.index === selectIndex ? true : false;
  };

  return (
    <TouchableOpacity
      style={styles.Container(isSelect())}
      onPress={() => rolling()}>
      <Text style={styles.TextBody(isSelect())}>{props.category.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: isSelect => ({
    backgroundColor: isSelect ? appColor.primary : 'white',
    height: 50,
    width: 70,
    borderWidth: 0.7,
    borderColor: appColor.hint,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  }),

  TextBody: isSelect => ({
    fontFamily: appFont.Medium,
    color: isSelect ? appColor.secondary : appColor.primary,
    textAlign: 'center',
  }),
});
