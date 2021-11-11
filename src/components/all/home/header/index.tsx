import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../../../constants/colors";

export const HomeHeader = () => {
  return (
    <Box pt={"118px"} mb={6} pl={4}>
      <Flex>
        <Text size="20px" as="span">
          {"Prêt à trouver ton "}
        </Text>
        <Text size="20px" ml={"4px"} color={COLORS.GREEN.T800.hex} as="span">
          {" job de rêve"}
        </Text>
        <Text size="20px" ml={"4px"} as="span">
          ?
        </Text>
      </Flex>
    </Box>
  );
};
