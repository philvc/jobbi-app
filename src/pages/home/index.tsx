import Page from "../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useTranslation } from "react-i18next";
import Heading from "../../components/shared/typography/heading";
import User from "../../components/shared/icons/user";
import Cross from "../../components/shared/icons/cross";
import { useGetSearches } from "../../services/searches/searches";
import { useDisclosure } from "@chakra-ui/hooks";
import SearchDrawer from "../../components/quest-drawer";

export default function Home() {
  // Attributes
  const router = useRouter();
  const { questId } = router.query;
  const { t } = useTranslation();
  const { data, isLoading } = useGetSearches();
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleProfileClicked() {
    router.push("/home/profile");
  }

  function handleNewQuestClicked() {
    onOpen();
  }

  function handleQuestClicked(id: number) {
    router.push(`/home/quests/${id}`);
  }

  return (
    <Page>
      <Flex justify="End" p={4}>
        <Box onClick={handleProfileClicked}>
          <User width={25} height={25} />
        </Box>
      </Flex>
      <Stack mt={2} spacing={4} pl={4}>
        <Stack spacing={2}>
          <Flex justify="space-between" align="center" mr={2}>
            <Heading>Mes recherches</Heading>
            <Cross
              onClick={handleNewQuestClicked}
              height={16}
              width={16}
              transform="rotate(45)"
            />
          </Flex>
          <Skeleton isLoaded={!isLoading}>
            <Stack direction="row" spacing={2} overflow="auto">
              {data?.map((search) => {
                return (
                  <Box
                    onClick={() => handleQuestClicked(search.id)}
                    h={40}
                    minW={32}
                    bg="red"
                    p={2}
                  >
                    <Heading type={4}>{search.title}</Heading>
                  </Box>
                );
              })}
            </Stack>
          </Skeleton>
        </Stack>
        <Box>
          <Heading>Les recherches de mes amis</Heading>
          <Stack direction="row" spacing={2}></Stack>
        </Box>
        <Box>
          <Heading>Mes invitations</Heading>
          <Stack direction="row" spacing={2}></Stack>
        </Box>
      </Stack>
      <SearchDrawer isOpen={isOpen} onClose={onClose} />
    </Page>
  );
}
