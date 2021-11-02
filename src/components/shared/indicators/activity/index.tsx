import ActivityProps from "./props";
import activityIndicatorAnimation from "./assets/activity-indicator.json";
import React, { Fragment } from "react";
import { Box, Container, Flex } from "@chakra-ui/layout";

const Activity = ({
  children,
  isLoading,
  height = "100vh",
  width = "100%",
}: ActivityProps) => {
  if (isLoading) {
    return (
      <Box width={width} height={height}>
        <Flex align="center" justify="center">
          <Box height={50} width={50}>
            <div>Loading...</div>{" "}
          </Box>
        </Flex>
      </Box>
    );
  }
  return <>{children}</>;
};

export default Activity;
