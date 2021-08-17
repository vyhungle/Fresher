import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {navigationRef} from './rootNavigation';
import BottomTab from '../navigation/bottomTab';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';

export default function AppNavigator() {
  const RootStack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <RootStack.Screen name="BottomTab" component={BottomTab} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
