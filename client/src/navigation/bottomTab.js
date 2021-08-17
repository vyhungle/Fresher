import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {appColor} from '../assets/colors';
import HomeScreen from '../screens/home';
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
          if (route.name === 'Home') {
            return focused ? (
              <MessageIconFocused width={30} height={30} />
            ) : (
              <MessageIcon width={30} height={30} />
            );
          } else if (route.name === 'History') {
            return focused ? (
              <HistoryIconFocused width={30} height={30} />
            ) : (
              <HistoryIcon width={30} height={30} />
            );
          } else if (route.name === 'Call') {
            return focused ? (
              <CallIconFocused width={30} height={30} />
            ) : (
              <CallIcon width={30} height={30} />
            );
          } else if (route.name === 'Setting') {
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
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HomeScreen} />
      <Tab.Screen name="Call" component={HomeScreen} />
      <Tab.Screen name="Setting" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Bottom;
