import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
import {useAuth} from '../../contexts/AuthProvider';

const HomeScreen = ({navigation}) => {
  const {signOut} = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={signOut}> Sign Out</Button>
      <Button onPress={() => navigation.navigate('NotificationScreen')}>
        View Notificaiton
      </Button>
    </View>
  );
};

export default HomeScreen;
