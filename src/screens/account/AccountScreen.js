import { View, Text } from 'react-native'
import React from 'react'
import { Button, VStack } from 'native-base'
import { useAuth } from '../../contexts/AuthProvider';

const AccountScreen = () => {
const {signOut} = useAuth ()

  return (
    <Button colorScheme="red" borderRadius="48px" onPress={signOut}>
      <Text>LOG OUT</Text>
    </Button>
  )
}

export default AccountScreen