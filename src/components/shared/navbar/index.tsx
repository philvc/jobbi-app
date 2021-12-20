import { Flex, Text } from "@chakra-ui/react";
import { COLORS } from "../../../constants/colors";
import { HomeIcon } from "../icons/home";

const Navbar = () => {
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
        <HomeIcon fill={COLORS.BLACK.T800.hex} />
        <Text color={COLORS.BLACK.T800.hex} size="0.625rem">
          Acceuil
        </Text>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <HomeIcon fill={COLORS.GREY.T500.hex} />
        <Text color={COLORS.GREY.T500.hex} size="0.625rem">
          Explore
        </Text>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <HomeIcon fill={COLORS.GREY.T500.hex} />
        <Text color={COLORS.GREY.T500.hex} size="0.625rem">
          Amis
        </Text>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <HomeIcon fill={COLORS.GREY.T500.hex} />
        <Text color={COLORS.GREY.T500.hex} size="0.625rem">
          Profil
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
