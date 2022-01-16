import { Button, Heading, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import Skeleton from "../../../components/shared/indicators/skeleton";
import Page from "../../../components/shared/layout/page";
import { EnumFriendshipType } from "../../../constants/enums";
import { useUser } from "../../../contexts/user";
import { useAddFriendship } from "../../../services/friendships/friendships";
import {
  getGetMySharedSearchesQueryKey,
  useGetMySharedSearches,
  useGetSearchByIdForInvitation,
  useUpsertFriendship,
} from "../../../services/searches/searches";

const JoinQuest = () => {
  // Attributes
  const router = useRouter();
  const questId = router.query.questId as string;
  const { id, isLoading: isUserLoading } = useUser();
  const queryClient = useQueryClient();
  // Queries
  const {
    data: quest,
    isLoading: isQuestLoading,
    refetch,
  } = useGetSearchByIdForInvitation(questId, {
    query: { enabled: !!id && !!questId },
  });
  const { mutateAsync: postFriendship } = useUpsertFriendship();
  const { refetch: refetchShareQuests } = useGetMySharedSearches();

  // Effect
  useEffect(() => {
    // Redirect to signup if no user
    if (!id && !isUserLoading) {
      router.push("/auth/sign-in");
    }
  }, [isUserLoading, id]);

  // Handler
  async function joinQuest() {
    // post friendship
    const response = await postFriendship({
      searchId: questId,
      data: {
        state: 0,
        type: EnumFriendshipType.INVITED,
      },
    });

    if (response?.id) {
      // Invalidate previous shared quest query
      await queryClient.invalidateQueries(getGetMySharedSearchesQueryKey());
      // Refetch shared quest
      await refetchShareQuests();
      // Redirect to quest page
      router.push(`/home/quests/${questId}`);
    }
  }

  function backHome() {
    router.push("/home");
  }

  return (
    <Page>
      <Heading>Join Quest</Heading>
      <Skeleton isLoading={isQuestLoading || isUserLoading}>
        <Text>{quest?.title}</Text>
      </Skeleton>
      <Skeleton isLoading={isQuestLoading || isUserLoading}>
        <Flex direction={"row"} alignItems={"center"}>
          <Button onClick={backHome} mr={4}>
            No
          </Button>
          <Button onClick={joinQuest}>Join quest</Button>
        </Flex>
      </Skeleton>
    </Page>
  );
};

export default JoinQuest;
