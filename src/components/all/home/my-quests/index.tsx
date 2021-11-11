import {
  Box,
  Flex,
  Heading,
  Skeleton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import { useGetSearches } from "../../../../services/searches/searches";
import SearchDrawer from "../../../quest-drawer";
import AddIcon from "../../../shared/icons/add";
import { AddUser } from "../../../shared/icons/add-user";
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
    <Box>
      <Flex mb={4} px={4} alignItems="center" justifyContent="space-between">
        <Heading size="800">Mes quêtes</Heading>
        <AddIcon onClick={handleNewQuestClicked} height={16} width={16} />
      </Flex>
      <Skeleton isLoaded={!isLoading}>
        {data?.map((search, index) => {
          return <QuestItem ml={4} key={search.id} quest={search} />;
        })}
      </Skeleton>
      <SearchDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
