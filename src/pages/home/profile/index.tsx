import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGetUserBySub } from "../../../services/default/default";
import { Heading, useDisclosure } from "@chakra-ui/react";
import { ThreeDots } from "../../../components/shared/icons/three-dots";
import ProfileDrawer from "../../../components/profil-drawer";

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
        <Stack mt={8} spacing={4}></Stack>
      </Page>
      <ProfileDrawer isOpen={isOpen && user?.id} onClose={onClose} />
    </Skeleton>
  );
}
