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
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { BackvectorIcon } from '../../icon/customIcon';
import LinearGradient from 'react-native-linear-gradient';

const Reserveroom = () => {
  return (
    <Center w="100%">
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
      
        <FormControl mb="5" >
          <FormControl.Label>Reserve Date</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mb="5">
          <FormControl.Label>From</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mb="5">
          <FormControl.Label>To</FormControl.Label>
          <Input />
        </FormControl>
        
        <FormControl mb="100">
            <VStack>
          <FormControl.Label>Member</FormControl.Label> 
          <HStack>
          <Input w="87%" />  
          <Button colorScheme="red">
            ADD
           </Button>
          </HStack>
          </VStack>
        </FormControl>

        <Button mt="2" colorScheme="red">
          Search        
        </Button>
      
    </VStack>
  </Center>
  );
};

export default Reserveroom