import { Box, Flex, Text } from "@chakra-ui/react";
import { COLORS } from "../../../constants/colors";
import FriendsIcon from "../icons/friends";
import { HomeIcon } from "../icons/home";
import { OldAvatar } from "../icons/old-avatar";
import SearchIcon from "../icons/search";

interface NavbarProps {
  menu: "friends" | "profil" | "home" | "explore" | "none";
}

const Navbar = ({ menu }: NavbarProps) => {
  return (
    <Flex
      boxShadow={"0px -6px 20px rgba(0, 0, 0, 0.06)"}
      background={"white"}
      width={"full"}
      pb={"2.125rem"}
      px={"1.031rem"}
      pt={"1.0625rem"}
      position={"fixed"}
      direction={"row"}
      alignItems={"center"}
      bottom={0}
      justifyContent={"space-between"}
    >
      <Flex direction={"column"} alignItems={"center"}>
        <Box
          width={"22px"}
          height={"22px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <HomeIcon
            fill={menu === "home" ? COLORS.BLACK.T800.hex : "#8F95B2"}
          />
        </Box>
        <Text
          mt="4px"
          color={menu === "home" ? COLORS.BLACK.T800.hex : COLORS.GREY.T500.hex}
          size="0.625rem"
        >
          Acceuil
        </Text>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Box
          width={"22px"}
          height={"22px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <SearchIcon fill={menu === "explore" ? COLORS.BLACK.T800.hex : "#8F95B2"} width={"17px"} height={"18px"} />
        </Box>
        <Text mt="4px" color={menu === "explore" ? COLORS.BLACK.T800.hex : COLORS.GREY.T500.hex} size="0.625rem">
          Explore
        </Text>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Box
          width={"22px"}
          height={"22px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <FriendsIcon fill={menu === "friends" ? COLORS.BLACK.T800.hex : "#8F95B2"} width={"19px"} height={"16px"} />
        </Box>
        <Text mt="4px" color={menu === "friends" ? COLORS.BLACK.T800.hex : COLORS.GREY.T500.hex} size="0.625rem">
          Amis
        </Text>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Box
          width={"22px"}
          height={"22px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box borderRadius={"10px"} bgColor={"#5D44F2"}>
            <OldAvatar width={"22px"} height={"22px"} />
          </Box>
        </Box>
        <Text mt="4px" color={menu === "profil" ? COLORS.BLACK.T800.hex : COLORS.GREY.T500.hex} size="0.625rem">
          Profil
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
