import React from "react";

// Chakra imports
import { Box, Center, Divider, Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import { Text } from '@chakra-ui/react'

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Box>
      <Center>
        <Text fontSize='2xl' fontWeight='bold'>Jorie Healthcare</Text>
      </Center>
    </Box>
    // <Flex align='center' direction='column'>
    //   <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} />
    //   <HSeparator mb='20px' />
    // </Flex>
  );
}

export default SidebarBrand;
