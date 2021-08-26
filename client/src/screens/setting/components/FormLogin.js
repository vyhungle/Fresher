import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Formik} from 'formik';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {authPending} from '../../../redux/slice/authSlice';

export default function FormLogin() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(s => s.auth);
  return (
    <View style={styles.Container}>
      <Formik
        initialValues={{
          phoneNumber: '',
        }}
        onSubmit={values => {
          dispatch(authPending({phoneNumber: values.phoneNumber}));
        }}>
        {formProps => (
          <View>
            <Text style={styles.Lable}>Số điện thoại</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('phoneNumber')}
              value={formProps.values.phoneNumber}
            />

            <TouchableOpacity
              style={styles.ButtonLogin}
              onPress={() => formProps.handleSubmit()}>
              <Text style={styles.TextButton}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  'Đăng Nhập'
                )}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
  },
  Lable: {
    marginTop: 30,
    color: appColor.hint,
    fontFamily: appFont.Regular,
    fontSize: 16,
  },
  Field: {
    color: 'black',
    borderBottomColor: appColor.hint,
    borderBottomWidth: 0.5,
  },
  TextForgot: {
    fontSize: 14,
    letterSpacing: 1.3,
    alignSelf: 'flex-end',
    marginTop: 15,
    fontFamily: appFont.Bold,
  },
  ButtonLogin: {
    backgroundColor: appColor.primary,
    height: 67,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  TextButton: {
    color: 'white',
    fontFamily: appFont.Bold,
    fontSize: 18,
  },
  BoxBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    flexDirection: 'row',
  },
  TextBottom: {
    letterSpacing: 1.5,
    fontFamily: appFont.Regular,
    fontSize: 14,
  },
  BoxTextSU: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  TextSignup: {
    letterSpacing: 1.5,
    fontFamily: appFont.Bold,
    fontSize: 14,
    color: appColor.primary,
  },
  Error: {
    letterSpacing: 1.5,
    fontFamily: appFont.Bold,
    fontSize: 14,
    color: '#ff3333',
    marginTop: 5,
  },
});
