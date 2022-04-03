import React from 'react';
import {
  Button,
  Checkbox,
  HStack,
  FormControl,
  Input,
  Icon,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  IconButton,
} from 'native-base';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { TrustlogoIcon, ForgetpassIcon, BackvectorIcon } from '../../icon/customIcon';

const Forgetpassword = () => {
  return (
    <Center w="100%">
        <Stack width="100%" alignItems="center">
        <TrustlogoIcon size="150px" />
        </Stack> 

        <ForgetpassIcon size="100px"/>
        
         <Text mb = "48px" alignSelf="center" mt="48px">
         Please enter your email address to receive an email for resetting your password.
         </Text>
          <Input variant="rounded" alignSelf="center"
            w={{
              base: '75%',
              md: '25%',
            }}
         
            placeholder="example@example.com"
            mb="150px"
          />
          <Button colorScheme="red" borderRadius="48px" width="100%">
            CONTINUE
          </Button>
      </Center>
  );
};

export default Forgetpassword