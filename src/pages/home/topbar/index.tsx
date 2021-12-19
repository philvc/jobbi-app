import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import MyQuest from "../../../components/home/my-quest";
import TopbarNotification from "../../../components/home/topbar/notification";
import TopbarUser from "../../../components/home/topbar/user";
import { COLORS } from "../../../constants/colors";

const HomeTopBar = () => {
  // Attributes

  return (
    <Box width="full" minH={"28%"} position={"relative"}>
      <Box
        boxShadow="0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
        bg={COLORS.WHITE.hex}
        borderBottomRadius={"24px"}
        height={"100%"}
      >
        <Flex
          pt={"20px"}
          px={"24px"}
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <TopbarUser />
          </Box>
          <TopbarNotification />
        </Flex>
      </Box>
      <MyQuest />
    </Box>
  );
};

export default HomeTopBar;
