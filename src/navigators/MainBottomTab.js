import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, ActivitiesScreen, AccountScreen} from '../screens';
import { HomeIcon, ActivitiesIcon, SearchIcon, AccountIcon } from '../icon/customIcon';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon:()=><HomeIcon/>}} />
      <Tab.Screen name="ActivitiesScreen" component={ActivitiesScreen} options={{tabBarIcon:()=><ActivitiesIcon/>}}/>
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{tabBarIcon:()=><SearchIcon/>}}/>
      <Tab.Screen name="AccountScreen" component={AccountScreen} options={{tabBarIcon:()=><AccountIcon/>}}/>
    </Tab.Navigator>
  );
};

export default MainBottomTab;
