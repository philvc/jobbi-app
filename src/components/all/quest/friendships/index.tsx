import {
  Avatar,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useGetFriendshipsBySearchId } from "../../../../services/friendships/friendships";
import FriendshipDrawer from "../../../friendship-drawer";
import { AddUser } from "../../../shared/icons/add-user";
import Cross from "../../../shared/icons/cross";
import { SectionContainer } from "../section-container";

const QuestFriendship = () => {
  // Attributes
  const {
    isOpen: isNewFriendOpen,
    onOpen: openNewFriend,
    onClose: closeNewFriend,
  } = useDisclosure();
  const router = useRouter();
  const { questId } = router.query;
  const { data: friendships, isLoading } = useGetFriendshipsBySearchId(
    questId as string,
    {
      query: { enabled: !!questId },
    }
  );

  return (
    <SectionContainer>
      <Flex justify="space-between" align="center" mr={2}>
        <Heading size="800">Amis</Heading>
        <Cross
          onClick={openNewFriend}
          height={16}
          width={16}
          transform="rotate(45)"
        />
      </Flex>
      <Stack direction="row">
        {friendships &&
          friendships.map((friend) => (
            <Avatar name={`${friend.firstName} ${friend.lastName}`} />
          ))}
      </Stack>
      <Button mt="10px">
        <AddUser style={{ marginRight: "14px" }} fill={"white"} />
        <Text>Trouve-moi des potes</Text>
      </Button>
      <FriendshipDrawer isOpen={isNewFriendOpen} onClose={closeNewFriend} />
    </SectionContainer>
  );
};

export default QuestFriendship;
