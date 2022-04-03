import React from 'react';
import {
  Button,
  Center,
  Checkbox,
  Divider,
  HStack,
  FormControl,
  Input,
  Icon,
  VStack,
  WarningOutlineIcon,
  Box,
  NativeBaseProvider,
  Text,
  IconButton,
  Stack,
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { AntDesign, MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { BackvectorIcon } from '../../icon/customIcon';
import LinearGradient from 'react-native-linear-gradient';


const SearchScreen = () => {
  return (
    <Center w="100%">
    <VStack w="100%">
      <LinearGradient colors={['#00A1E2', 'blue']} style={{width:"100%"}}>
      <Stack>
        <HStack alignItems="center">
        <IconButton>
            <BackvectorIcon/>
        </IconButton>
        <Text bold fontSize="xl">
          Search Room
        </Text>
        </HStack>
      </Stack>
      </LinearGradient>
      </VStack>
      <Text mt="40px">Lorem Ipsum is simply dummy text of the printing and typesetting </Text>
      <VStack
        space={3}
        alignSelf="center"
        px="4"
        safeArea
        w={{
          base: '100%',
          md: '25%',
        }}>
        <Box safeArea >
          <FormControl mb="16px" mt="16px">
            <FormControl.Label>Reserve Date</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb="16px">
            <FormControl.Label>From</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb="16px">
            <FormControl.Label>To</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb="50">
            <FormControl.Label>Member</FormControl.Label>
            <Input />
          </FormControl>
          <Button mt="2" colorScheme="red" borderRadius="48px">
            Search        
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};

export default SearchScreen