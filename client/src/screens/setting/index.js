import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {constantsGlobal} from '../../api/constants';
import {appFont} from '../../assets/fonts';
import {appColor} from '../../assets/colors';
import TopBarMain from '../../components/TopBarMain';
import FormLogin from './components/FormLogin';
import {logoutAuth} from '../../redux/slice/authSlice';
import {deleteAccessAuth, deleteAccessFcmToken} from '../../utils/asyncStore';

export default function Index() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {isAuth} = useSelector(s => s.auth);

  const logoutPress = () => {
    dispatch(logoutAuth());
    deleteAccessAuth();
  };
  return (
    <View style={styles.Container}>
      <TopBarMain />
      {isAuth ? (
        <View style={styles.ContentBox}>
          <TouchableOpacity onPress={() => logoutPress()}>
            <Text>Logout</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => deleteAccessFcmToken()}>
            <Text>clear fcm token</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => navigation.navigate('OrderScreen')}
            style={styles.ItemBox}>
            <Text style={styles.ItemText}>My order</Text>
          </TouchableOpacity>
        </View>
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
  ContentBox: {
    height: constantsGlobal.Height - 100,
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
