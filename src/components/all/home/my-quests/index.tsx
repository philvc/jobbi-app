import {
  Box,
  Flex,
  Heading,
  Skeleton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useGetSearches } from "../../../../services/searches/searches";
import SearchDrawer from "../../../quest-drawer";
import Cross from "../../../shared/icons/cross";
import { QuestItem } from "./quest-item";

export const MyQuests = () => {
  // Attributes
  const { data, isLoading } = useGetSearches();
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleNewQuestClicked() {
    onOpen();
  }
  return (
    <Box pl={4} mb={6}>
      <Box mr={2}>
        <Flex justify="space-between" align="center">
          <Heading size="800">Mes quêtes</Heading>
          <Cross
            onClick={handleNewQuestClicked}
            height={16}
            width={16}
            transform="rotate(45)"
          />
        </Flex>
      </Box>
      <Skeleton isLoaded={!isLoading}>
        <Stack direction="row" spacing={2} mt={4} mb={6} overflow="auto">
          {data?.map((search) => {
            return <QuestItem quest={search} />;
          })}
        </Stack>
      </Skeleton>
      <SearchDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
