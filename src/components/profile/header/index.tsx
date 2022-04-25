import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ProfileDrawer from "../../profil-drawer";

const ProfileHeader = () => {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();

  // Handler
  function redirectToHome() {
    router.push("/home");
  }

  function openProfileDrawer() {
    // Open profile drawer
    onOpen();
  }

  return (
    <Flex
      px={"1.5rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mt={"4.375rem"}
    >
      <Box
        bg={"rgba(57, 51, 96, 0.1)"}
        borderRadius={".5rem"}
        width={"2rem"}
        height={"2rem"}
        display="flex"
        onClick={redirectToHome}
      >
        <Image
          alignSelf={"center"}
          margin="auto"
          src={"/assets/icons/arrow.svg"}
          height={".75rem"}
          width={".75rem"}
        />
      </Box>
      <Text color={"#393360"} fontSize="20px" fontWeight={700}>
        Mon Profile
      </Text>
      <Box
        width={"2rem"}
        height={"2rem"}
        bg={"rgba(57, 51, 96, 0.1)"}
        borderRadius={".5rem"}
        display="flex"
        onClick={openProfileDrawer}
      >
        <Image
          alignSelf={"center"}
          margin="auto"
          src={"/assets/icons/triple-dots.svg"}
          height={".1875rem"}
          width={".9375rem"}
        />
      </Box>
      <ProfileDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default ProfileHeader;
