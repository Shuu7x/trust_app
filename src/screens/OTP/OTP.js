import React from 'react';
import {
  Button,
  Checkbox,
  HStack,
  FormControl,
  Input,
  Icon,
  Link,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
} from 'native-base';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { MaterialIcons, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { AntDesign, MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import OTPInput from 'react-native-otp';


const OTP = () => {
  return (
    
    <Stack
    space={3}
    px="4"
    safeArea
    mt="4"
    w={{
      base: '100%',
      md: '25%',
    }}>
      <HStack>
        <IconButton>
          <BackvectorIcon/>
        </IconButton>
    <Text bold fontSize="xl" mb="60" >
      OTP Verification
    </Text>
    </HStack>
    <Box safeArea >
    <OtpIcon/>
     <Text mb = "25" alignSelf="center">
     Please enter the OTP code sent to your email
     </Text>
     <OTPInput
      tintColor="#FB6C6A"
      offTintColor="#BBBCBE"
      otpLength={6}
    />
      <Text mb = "150" alignSelf="center">
        Don’t receive the code? <Link>RESEND</Link>
      </Text>
      <Button size="md" colorScheme="red" mb="5" >
        CONTINUE
      </Button>
    </Box>
  </Stack>
    
  );
};

export default OTP