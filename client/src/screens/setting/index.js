import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {constantsGlobal} from '../../api/constants';
import {appFont} from '../../assets/fonts';
import {appColor} from '../../assets/colors';
import TopBarMain from '../../components/TopBarMain';
import FormLogin from './components/FormLogin';

export default function Index() {
  const navigation = useNavigation();
  const {isAuth} = useSelector(s => s.auth);
  return (
    <View style={styles.Container}>
      <TopBarMain />
      {isAuth ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderScreen')}
          style={styles.ItemBox}>
          <Text style={styles.ItemText}>My order</Text>
        </TouchableOpacity>
      ) : (
        <FormLogin />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ItemBox: {
    backgroundColor: appColor.primary,
    width: constantsGlobal.with - 20,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  ItemText: {
    fontSize: 16,
    color: 'white',
    fontFamily: appFont.Medium,
  },
});
