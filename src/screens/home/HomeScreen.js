import {View} from 'react-native';
import React from 'react';
import {Button, Center,createIcon, Divider, Container, Stack, HStack, Avatar, VStack, Box, Badge, IconButton, Icon, Image,  Text, Pressable} from 'native-base';
import {useAuth} from '../../contexts/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';
import { NotificationIcon } from '../../icon/customIcon';

const HomeScreen = ({navigation}) => {
  const {signOut} = useAuth();
  return (
    
   <Center px="16px" pt="24px">
      <LinearGradient colors={['#00A1E2', '#00648A']} style={{width:"100%",borderRadius:20}}>
      <HStack h="80px" w="100%" borderRadius="20px" p="16px" justifyContent="space-between" >
        <HStack>
        <Avatar bg="cyan.500" source={{
      uri: "https://worldofwarships.asia/dcont/fb/image/tmb/d8996234-65b1-11e8-a81c-38eaa7374f3c_330x.jpg"
    }}>
        TE
      </Avatar>
          <VStack al="16px">
            <Text bold>Hello</Text>
            <Text bold>Jaturong Bunsong</Text>
          </VStack>
        </HStack>
        <Box>
        <VStack position="relative">
        <IconButton>
        <NotificationIcon />
        </IconButton>
  
          <Box position="absolute" top={0} right={0} borderRadius="8px" w="8px" h="8px" bg="red.500"></Box>
      </VStack>
        </Box>
      </HStack>
      </LinearGradient>
      <Stack w="100%" mt="24px" mb="24px">
      <Text color="121457" bold>ห้องที่ว่างอยู่</Text>
      </Stack>
      <Divider />

      <Pressable onPress={()=>navigation.navigate("Roomdetail")}>
      <LinearGradient colors={['#00A1E2', '#00648A']} style={{width:"100%",borderRadius:20,marginTop:50}}>
        <HStack h="112px" w="100%" borderRadius="20px" p="16px" justifyContent="space-between">
          <HStack>
          <Image source={{
      uri: "https://meeting.projectsoft.co.th/static/media/meeting-room4.300b606c.png"
    }} alt="Alternate Text" width="91px" height="78px" borderRadius="15px"/>
        <VStack>
          <Text bold color="121457">Room1</Text>
          <Text>     It is a long established fact that</Text>
          <Text>a reader will be distracted</Text>
          <Text>                                                  max:8</Text>

        </VStack>
      </HStack>
        </HStack>
      </LinearGradient>
      </Pressable>
    </Center> 
  );
};

export default HomeScreen;
