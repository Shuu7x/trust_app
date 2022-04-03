import React from 'react'
import {
  Button,
  Checkbox,
  HStack,
  Heading,
  VStack,
  FormControl,
  Link,
  Input,
  Icon,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  View,
} from 'native-base';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../../contexts/AuthProvider';
import { TrustlogoIcon } from '../../icon/customIcon';

const LoginScreen = ({navigation}) => {
const {signInWithEmailPassword} = useAuth ()
const handleSignin = () =>{
      signInWithEmailPassword("email", "password")
}
  return (
<Center w="100%">
        <Stack width="100%" alignItems="center">
        <TrustlogoIcon size="199px" />
        </Stack> 
        <VStack space={3} mt="5" width="100%" alignItems="center" px="16px">
          <Text alignItems="center">SIGN IN</Text>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting </Text>
          <FormControl width="100%">
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link onPress={()=>navigation.navigate("Forgetpassword")} _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="red" borderRadius="48px" onPress={handleSignin} width="100%">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
          </HStack>
        </VStack>
    </Center>
  )
};

export default LoginScreen