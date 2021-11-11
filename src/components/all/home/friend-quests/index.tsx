import { Box, Heading, Stack, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useUser } from "../../../../contexts/user";
import { useGetUserFriendships } from "../../../../services/users/users";
import { ActiveFriendship } from "../../../../constants/contant";
import { QuestItem } from "../my-quests/quest-item";

export default function FriendQuests() {
  // Attributes
  const { id } = useUser();
  const { data, isLoading } = useGetUserFriendships(id, {
    status: ActiveFriendship,
  });

  return (
    <Box pl={4} mb={6}>
      <Heading mt={4} size="800">
        Les quêtes de mes amis
      </Heading>
      <Skeleton isLoaded={!isLoading}>
        {data?.map((searchWithOwnerAndFriend, index) => {
          return (
            <QuestItem
              ml={4}
              key={searchWithOwnerAndFriend.search.id}
              quest={searchWithOwnerAndFriend.search}
            />
          );
        })}
      </Skeleton>
    </Box>
  );
}
