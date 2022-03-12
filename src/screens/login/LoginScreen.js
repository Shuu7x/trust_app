import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
import {useAuth} from '../../contexts/AuthProvider';

const LoginScreen = () => {
  const {signInWithEmailPassword} = useAuth();

  const handleSignInWithEmailPassword = () => {
    signInWithEmailPassword('test', 'test');
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button onPress={handleSignInWithEmailPassword}> Sign In</Button>
    </View>
  );
};

export default LoginScreen;
