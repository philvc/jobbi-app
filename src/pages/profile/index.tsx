import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useSupabase } from "use-supabase";
import ProfileHeader from "../../components/profile/header";
import Page from "../../components/shared/layout/page";
import { useUser } from "../../contexts/user";
import { getGetUserBySubQueryKey } from "../../services/default/default";

const Profile = () => {
  const { email, firstName, lastName } = useUser();
  const { auth } = useSupabase();
  const router = useRouter();
  const queryClient = useQueryClient();

  // Handler
  async function handleLogout() {
    // Signout
    await auth.signOut();
    await queryClient.invalidateQueries(getGetUserBySubQueryKey());
    localStorage.clear();
    await queryClient.clear();
    // Redirect signin
    router.push("/auth/sign-in");
  }
  return (
    <Page>
      <ProfileHeader />
      <Box
        mt={"4rem"}
        mx={"1.5rem"}
        background={"white"}
        borderRadius={"12px"}
        boxShadow={
          "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
        }
        paddingY={"17px"}
        padding={"15px"}
        minWidth={"269px"}
        cursor={"pointer"}
      >
        <Text fontSize={"16px"} fontWeight="500">
          {email}
        </Text>
        <Text fontSize={"16px"} fontWeight="500" mt={"1rem"}>
          {firstName ?? "/"}
        </Text>
        <Text fontSize={"16px"} fontWeight="500" mt={"1rem"}>
          {lastName ?? "/"}
        </Text>
      </Box>
      <Flex
        marginBottom={"2.8125rem"}
        marginTop={"auto"}
        alignItems={"center"}
        mx={"1.5rem"}
        onClick={handleLogout}
      >
        <Image src="/assets/icons/logout.svg" width={"1rem"} height="1rem" />
        <Text ml={".5rem"} color={"#39336"} fontSize="16px" fontWeight={"700"}>
          Logout
        </Text>
      </Flex>
    </Page>
  );
};

export default Profile;
