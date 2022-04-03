import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Center,createIcon, Divider, Container, FormControl, Heading, Input, Stack, ScrollView, HStack, Avatar, VStack, Box, Badge, IconButton, Icon, Image,  Text, Pressable} from 'native-base';
import {useAuth} from '../../contexts/AuthProvider';
import { SuccessIcon, CheckinIcon } from '../../icon/customIcon';
import LinearGradient from 'react-native-linear-gradient';

const Roomdetail = ({navigation}) => {
    return (
        <VStack
        space={3}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: '100%',
          md: '25%',
        }}>
      <VStack space="2.5" mt="4" px="8">
        <Heading size="md">Lighting</Heading>
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          <Center size="20" bg="primary.400" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
            Box 1
          </Center>
          <Center bg="primary.400" size="20" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
            Box 2
          </Center>
        </Stack>
        <Divider />

                <Heading size="md">Curtain</Heading>
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          <Center size="20" bg="primary.400" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
            Box 1
          </Center>
          <Center bg="primary.400" size="20" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
            Box 2
          </Center>
        </Stack>
        <Divider />

                <Heading size="md">Air Conditioner</Heading>
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          <Center size="200" bg="primary.400" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
            Box 1
          </Center>
        </Stack>           
      </VStack>
      </VStack>
      )
}
export default Roomdetail;