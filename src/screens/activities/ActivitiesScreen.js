import React from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  HStack,
  FormControl,
  Input,
  Icon,
  Image,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  IconButton,
  Link,
  VStack,
  Divider,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { TrustlogoIcon, BackvectorIcon, OtpIcon } from '../../icon/customIcon';
import OTPInput from 'react-native-otp';


const ActivitiesScreen = () => {
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
      <Image source={{
      uri: "https://meeting.projectsoft.co.th/static/media/meeting-room4.300b606c.png"
    }} alt="Alternate Text" width="91px" height="78px" borderRadius="15px"/>
        <VStack>
          <Text bold color="121457">Room1</Text>
          <Text>     It is a long established fact that</Text>
          <Text>a reader will be distracted</Text>
        </VStack>
        <VStack>
        <Text>1 day ago</Text>
        <Avatar.Group size="24px" max={4} mt="25px">
          <Avatar bg="green.500"></Avatar>
          <Avatar bg="green.500"></Avatar>
          <Avatar bg="green.500"></Avatar>
          <Avatar bg="green.500"></Avatar>
        </Avatar.Group>
        </VStack>
      </HStack>
      <Divider/>
      </Stack>
  );
};

export default ActivitiesScreen