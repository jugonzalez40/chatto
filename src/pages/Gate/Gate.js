import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Center, Container, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import "./Gate.scss";
import HAND_IMAGE from '../../assets/hand.png'

const Gate = () => {
  return (
    <Flex
      className="gate__container"
      flexDirection="column"
      h="100%"
      justifyContent="center"
    >
      <Center>
        <Container>
          <VStack>
            <img className="hand__image" src={HAND_IMAGE} alt="Segun Adebayo" />

            <Text className="app__title" fontSize="6xl">
              CHATTO
            </Text>

            <Input size="lg" bg="white" placeholder="Usuario" />
            <Button colorScheme="red" size="lg" w="100%">
              Entrar
            </Button>
          </VStack>
        </Container>
      </Center>
    </Flex>
  );
};

export default Gate;
