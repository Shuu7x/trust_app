//@ts-nocheck
import React from "react";
import { Stack, Center, Heading, ScrollView, VStack, Divider, NativeBaseProvider } from "native-base";

function AccessScreen() {
  return <ScrollView>
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
    </ScrollView>
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <AccessScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    