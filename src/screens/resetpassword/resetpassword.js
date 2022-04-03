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
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { MaterialIcons, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { BackvectorIcon } from '../../icon/customIcon';


const resetpassword = () => {
  return (
    <KeyboardAwareScrollView
      style={{
        width: '100%',
      }}>
      <Stack
        space={3}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: '100%',
          md: '25%',
        }}>
        <Text bold fontSize="xl" mb="100" >
        <IconButton>
            <BackvectorIcon/>
        </IconButton>
          Reset Password
        </Text>
        <Box safeArea p="2" w="100%" maxW="290" py="8">
         <Text mb = "25" alignSelf="center">
         Lorem Ipsum is simply dummy text of the printing and typesetting 
         </Text>
<Box alignItems="center">
      <FormControl isInvalid w="75%" maxW="300px" mb="5">
        <FormControl.Label>New Password</FormControl.Label>
        <Input placeholder="Enter your password" />
      </FormControl>
    </Box>
    <Box alignItems="center">
      <FormControl isInvalid w="75%" maxW="300px" mb="160">
        <FormControl.Label>Confirm Password</FormControl.Label>
        <Input placeholder="Enter password comfirmatin" />
      </FormControl>
    </Box>
          <Button size="md" colorScheme="red" >
            CONTINUE
          </Button>
        </Box>
      </Stack>
    </KeyboardAwareScrollView>
  );
};

export default resetpassword