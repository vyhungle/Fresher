import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {appColor} from '../assets/colors';
import HomeScreen from '../screens/home';
import SettingScreen from '../screens/setting';
import HistoryIcon from '../assets/images/historyIcon.svg';
import HistoryIconFocused from '../assets/images/historyIconFocused.svg';
import CallIcon from '../assets/images/callIcon.svg';
import CallIconFocused from '../assets/images/callIconFocused.svg';
import UserIcon from '../assets/images/userIcon.svg';
import UserIconFocused from '../assets/images/userIconFocused.svg';

import DashboardIcon from '../assets/images/dashboard.svg';
import DashboardIconFocused from '../assets/images/dashboardFocused.svg';

const Bottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeScreen') {
            return focused ? (
              <DashboardIconFocused width={25} height={25} />
            ) : (
              <DashboardIcon width={25} height={25} />
            );
          } else if (route.name === 'HistoricalScreen') {
            return focused ? (
              <HistoryIconFocused width={25} height={25} />
            ) : (
              <HistoryIcon width={25} height={25} />
            );
          } else if (route.name === 'CallScreen') {
            return focused ? (
              <CallIconFocused width={25} height={25} />
            ) : (
              <CallIcon width={25} height={25} />
            );
          } else if (route.name === 'SettingScreen') {
            return focused ? (
              <UserIconFocused width={25} height={25} />
            ) : (
              <UserIcon width={25} height={25} />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: appColor.primary,
        inactiveTintColor: 'black',
        style: {
          height: 60,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="HistoricalScreen" component={SettingScreen} />
      <Tab.Screen name="CallScreen" component={SettingScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default Bottom;
