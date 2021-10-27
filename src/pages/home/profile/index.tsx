import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGetUserBySub } from "../../../services/default/default";
import { Heading, useDisclosure } from "@chakra-ui/react";
import { ThreeDots } from "../../../components/shared/icons/three-dots";
import ProfileDrawer from "../../../components/profil-drawer";
import Email from "../../../components/shared/icons/mail";
import { capitalize } from "../../../utils/capitalize";
import Profile from "../../../components/shared/icons/profile";
import Logout from "../../../components/shared/icons/logout";

export default function Home() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();
  const { data: user, isLoading, refetch } = useGetUserBySub();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Skeleton isLoaded={!isLoading}>
      <Page p={4}>
        <Flex
          flexGrow={1}
          direction="column"
          justifyContent="space-between"
          mb={"30px"}
        >
          <Box>
            <Flex
              direction="row"
              spacing={2}
              align="center"
              justifyContent="space-between"
              mt={"44px"}
            >
              <ArrowDown
                style={{ marginTop: -1 }}
                height="16px"
                width="16px"
                transform="rotate(90)"
                onClick={router.back}
              />
              <Heading size="900">Mon profile</Heading>
              <ThreeDots onClick={onOpen} />
            </Flex>
            <Box
              borderRadius="20px"
              backgroundColor="white"
              mt="30px"
              py={"16px"}
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Profile />
                <Heading size="800" mt="10px">
                  {`${capitalize(user?.firstName)} ${capitalize(
                    user?.lastName
                  )}`}
                </Heading>
              </Flex>
            </Box>
            <Box
              mt={"20px"}
              borderRadius="20px"
              backgroundColor="white"
              px={"16px"}
              py={"20px"}
            >
              <Flex direction="row" alignItems="center">
                <Email />
                <Text ml={"10px"} size="200">
                  {user?.email}
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box>
            <Flex direction="row" alignItems="center">
              <Logout />
              <Heading ml={2} fontWeight="700" size="600">
                Logout
              </Heading>
            </Flex>
          </Box>
        </Flex>
      </Page>
      <ProfileDrawer isOpen={isOpen && user?.id} onClose={onClose} />
    </Skeleton>
  );
}
