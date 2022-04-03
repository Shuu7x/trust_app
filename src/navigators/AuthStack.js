import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen, Forgetpassword} from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      <Stack.Screen name="Roomdetail" component={Roomdetail} />
    </Stack.Navigator>
  );
};

export default AuthStack;
