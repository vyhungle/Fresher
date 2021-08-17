import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {navigationRef} from './rootNavigation';
import BottomTab from '../navigation/bottomTab';

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
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
