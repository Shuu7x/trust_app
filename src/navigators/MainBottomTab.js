import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, LeaveScreen, OvertimeScreen} from '../screens';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="LeaveScreen" component={LeaveScreen} />
      <Tab.Screen name="OvertimeScreen" component={OvertimeScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
