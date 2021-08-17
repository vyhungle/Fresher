import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {appColor} from '../../../assets/colors';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView} from 'native-base';
import {appFont} from '../../../assets/fonts';

export default function FormSignUp() {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}>
      {formProps => (
        <KeyboardAvoidingView>
          <View style={styles.Container}>
            <Text style={styles.Lable}>Tài khoản</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('username')}
              value={formProps.values.username}
            />
            <Text style={styles.Lable}>Email</Text>
            <TextInput
              style={styles.Field}
              secureTextEntry={true}
              onChangeText={formProps.handleChange('email')}
              value={formProps.values.email}
            />

            <Text style={styles.Lable}>Mật khẩu</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('password')}
              value={formProps.values.password}
            />

            <Text style={styles.Lable}>Nhập lại mật khẩu</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('confirmPassword')}
              value={formProps.values.confirmPassword}
            />

            <TouchableOpacity
              style={styles.ButtonLogin}
              onPress={() => formProps.handleSubmit()}>
              <Text style={styles.TextButton}>Đăng ký</Text>
            </TouchableOpacity>
            <View style={styles.BoxBottom}>
              <Text style={styles.TextBottom}>Bạn đã có một tài khoản?</Text>
              <TouchableOpacity
                style={styles.BoxTextSU}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.TextSignup}> Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
    fontFamily: appFont.Regular,
  },
  ButtonLogin: {
    backgroundColor: appColor.primary,
    height: 67,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
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
    fontFamily: appFont.Regular,
    fontSize: 14,
    color: appColor.primary,
  },
  Error: {
    letterSpacing: 1.5,
    fontFamily: appFont.Regular,
    fontSize: 14,
    color: '#ff3333',
    marginTop: 5,
  },
});
