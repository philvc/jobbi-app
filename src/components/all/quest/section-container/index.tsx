import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

export const SectionContainer = ({ children, onClick }: BoxProps) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius={4}
      p={4}
      onClick={onClick}
      boxShadow="0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
    >
      {children}
    </Box>
  );
};
