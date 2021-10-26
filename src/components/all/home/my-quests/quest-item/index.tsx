import { Box, Heading } from "@chakra-ui/react";
import { capitalize } from "lodash";
import { useRouter } from "next/router";
import React from "react";
import { SearchDTO } from "../../../../../types/dtos";

type QuestItemProps = {
  quest: SearchDTO;
};

export const QuestItem = ({ quest }: QuestItemProps) => {
  // Attributes
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push(`/home/quests/${quest.id}`)}
      cursor="pointer"
      backgroundColor="white"
      borderRadius={4}
      boxShadow="5px 3px 12px rgba(46, 30, 122, 0.04)"
      px={2}
      py={4}
      minW={"185px"}
      minH={"177px"}
    >
      <Heading size="600">{capitalize(quest?.title)}</Heading>
    </Box>
  );
};
