import React from "react";

// Chakra imports
import { Box, Center, Divider, Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import { Text } from '@chakra-ui/react'
import logo from "../../../assets/img/logo.png"

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Box>
      <Center>
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt=""
            width="30rem"
            height="30rem"
            className="p-0 mr-2"
          />
          <Text fontSize='1.8rem' fontWeight='500' color="#4897d8">Jorie AI</Text>
        </div>

      </Center>
    </Box>
    // <Flex align='center' direction='column'>
    //   <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} />
    //   <HSeparator mb='20px' />
    // </Flex>
  );
}

export default SidebarBrand;
