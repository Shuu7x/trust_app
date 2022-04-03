import { View, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, ZStack, VStack } from "native-base";
import { CheckinIcon } from '../../icon/customIcon';

const CheckinScreen = () => {
  return (
    <Stack flex={1}>
    <LinearGradient colors={['#00A1E2', '#00648A']}>
    <Center>
      <CheckinIcon size="199px"/>
      <Text bold fontSize="xl">Waiting for</Text>
      <Text bold fontSize="2xl">Check in . . .</Text>
      <Text >Please appove your self at device</Text>
    </Center>
  </LinearGradient>
  </Stack>
)
  
}

export default CheckinScreen