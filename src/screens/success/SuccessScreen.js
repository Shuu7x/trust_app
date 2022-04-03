import { View, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, ZStack, VStack } from "native-base";
import { SuccessIcon } from '../../icon/customIcon';

const SuccessScreen = () => {
  return (
    <Stack flex={1}>
      <LinearGradient colors={['#00A1E2', '#00648A']}>
      <Center >
      
        <SuccessIcon size="199px"/>
        <Text bold fontSize="xl">check in</Text>
        <Text bold fontSize="2xl">Successfull</Text>
        <Text>Your can use your room now</Text>
      
      </Center>
      </LinearGradient>
    </Stack>
  )
    
  }
export default SuccessScreen