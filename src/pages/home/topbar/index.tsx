import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { userInfo } from "os";
import React from "react";
import User from "../../../components/shared/icons/user";
import { COLORS } from "../../../constants/colors";
import { useUser } from "../../../contexts/user";

const HomeTopBar = () => {
  // Attributes
  const router = useRouter();
  const user = useUser();
  const userName = user?.id ? user?.fistName ?? user?.email : "stranger";

  // Handlers
  function handleProfileClicked() {
    router.push("/home/profile");
  }
  
  return (
    <Box
      boxShadow="0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)"
      width="full"
      pt="12"
      bg={COLORS.WHITE.hex}
      pb="3"
      px={"6"}
      position="fixed"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="800" fontWeight="bold">
          {`Bonjour ${userName}`}
        </Heading>
        <Box onClick={handleProfileClicked}>
          <User width={25} height={25} />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeTopBar;
