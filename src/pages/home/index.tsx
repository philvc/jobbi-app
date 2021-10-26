import Page from "../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useTranslation } from "react-i18next";
import User from "../../components/shared/icons/user";
import Cross from "../../components/shared/icons/cross";
import { useGetSearches } from "../../services/searches/searches";
import { useDisclosure } from "@chakra-ui/hooks";
import SearchDrawer from "../../components/quest-drawer";
import HomeTopBar from "./topbar";
import { COLORS } from "../../constants/colors";
import { QuestItem } from "../../components/all/home/my-quests/quest-item";
import { MyQuests } from "../../components/all/home/my-quests";

export default function Home() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();

  function handleQuestClicked(id: number) {
    router.push(`/home/quests/${id}`);
  }

  return (
    <Page>
      <HomeTopBar />
      <Box pt={"118px"} mb={6} pl={4}>
        <Flex>
          <Text size="20px" as="span">
            {"Prêt à trouver ton "}
          </Text>
          <Text size="20px" ml={"4px"} color={COLORS.GREEN.T800.hex} as="span">
            {" job de rêve"}
          </Text>
          <Text size="20px" ml={"4px"} as="span">
            ?
          </Text>
        </Flex>
      </Box>
      <MyQuests />
      <Box pl={4} mb={6}>
        <Heading size="800">Les quêtes de mes amis</Heading>
        <Stack direction="row" spacing={2}></Stack>
      </Box>
      <Box pl={4}>
        <Heading size="800">Mes invitations</Heading>
        <Stack direction="row" spacing={2}></Stack>
      </Box>
    </Page>
  );
}
