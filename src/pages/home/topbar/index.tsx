import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import TopbarNotification from "../../../components/home/topbar/notification";
import TopbarUser from "../../../components/home/topbar/user";
import { COLORS } from "../../../constants/colors";

const HomeTopBar = () => {
  // Attributes

  return (
    <Box
      boxShadow="0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
      width="full"
      bg={COLORS.WHITE.hex}
      position="fixed"
      minH={"255px"}
      borderBottomRadius={"24px"}
    >
      <Box mt={"20px"} px={"24px"}>
        <Flex direction="row" justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <TopbarUser />
          </Box>
          <TopbarNotification />
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeTopBar;
