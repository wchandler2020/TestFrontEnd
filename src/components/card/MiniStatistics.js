// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, growth, name, value, name2, value2, name3, value3} = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";
  return (
    <Card py='15px'>
      <Flex
        my='auto'
        h='100%'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}>
        {startContent}

        <Stat my='auto' ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight='50%'
            alignContent="center"
            color={textColorSecondary}
            fontSize={{
              base: "16px",
            }}>
            {name}
          </StatLabel>
          <StatNumber
          className="top-stat"
            color={textColor}
            marginBottom='5px'
            fontSize={{
              base: "2xl",
            }}>
            {value}
          </StatNumber>
          <StatLabel
            lineHeight='50%'
            color={textColorSecondary}
            fontSize={{
              base: "14px",
            }}>
            {name2}
          </StatLabel>
          <StatNumber
            className="top-stat"
            color={textColor}
            marginBottom='5px'
            fontSize={{
              base: "2xl",
            }}>
            {value2}
          </StatNumber>
          <StatLabel
            lineHeight='50%'
            color={textColorSecondary}
            fontSize={{
              base: "14px",
            }}>
            {name3}
          </StatLabel>
          <StatNumber
            className="top-stat"
            color={textColor}
            fontSize={{
              base: "2xl",
            }}>
            {value3}
          </StatNumber>
          
          {growth ? (
            <Flex align='center'>
              <Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
                {growth}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
