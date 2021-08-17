import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {appColor} from '../assets/colors';
import HomeScreen from '../screens/home';
import CallScreen from '../screens/call';
import HistoricalScreen from '../screens/historical';
import SettingScreen from '../screens/setting';
import MessageIcon from '../assets/images/messageIcon.svg';
import MessageIconFocused from '../assets/images/messageIconFocused.svg';
import HistoryIcon from '../assets/images/historyIcon.svg';
import HistoryIconFocused from '../assets/images/historyIconFocused.svg';
import CallIcon from '../assets/images/callIcon.svg';
import CallIconFocused from '../assets/images/callIconFocused.svg';
import UserIcon from '../assets/images/userIcon.svg';
import UserIconFocused from '../assets/images/userIconFocused.svg';

const Bottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeScreen') {
            return focused ? (
              <MessageIconFocused width={30} height={30} />
            ) : (
              <MessageIcon width={30} height={30} />
            );
          } else if (route.name === 'HistoricalScreen') {
            return focused ? (
              <HistoryIconFocused width={30} height={30} />
            ) : (
              <HistoryIcon width={30} height={30} />
            );
          } else if (route.name === 'CallScreen') {
            return focused ? (
              <CallIconFocused width={30} height={30} />
            ) : (
              <CallIcon width={30} height={30} />
            );
          } else if (route.name === 'SettingScreen') {
            return focused ? (
              <UserIconFocused width={30} height={30} />
            ) : (
              <UserIcon width={30} height={30} />
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
      <Tab.Screen name="HistoricalScreen" component={HistoricalScreen} />
      <Tab.Screen name="CallScreen" component={CallScreen} />
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
