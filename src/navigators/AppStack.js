import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NotificationScreen} from '../screens';
import MainBottomTab from './MainBottomTab';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTab"
        component={MainBottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
