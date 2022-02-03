import { Box, Flex, Text } from "@chakra-ui/react";
import { capitalize } from "lodash";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { OldAvatar } from "../../../../../../../components/shared/icons/old-avatar";
import { friendTypeInvited } from "../../../../../../../constants/contant";
import { useUser } from "../../../../../../../contexts/user";
import {
  getGetMySharedSearchesQueryKey,
  getGetSearchByIdQueryKey,
  getGetSearchParticipantsQueryKey,
  useDeleteFollower,
  useDeleteFriendshipById,
  useGetMyFollowedSearches,
  useGetMySharedSearches,
  useGetSearchById,
  useGetSearchParticipants,
} from "../../../../../../../services/searches/searches";
import { ParticipantDTOForSearchById } from "../../../../../../../types/dtos";

interface QuestDetailsFriendCardProps {
  participant: ParticipantDTOForSearchById;
}

const QuestDetailsFriendCard = ({
  participant,
}: QuestDetailsFriendCardProps) => {
  // Attributes
  const { id, email } = useUser();
  const clientQuery = useQueryClient();
  const router = useRouter();
  const searchId = router.query?.questId as string;
  const { data: quest, refetch: refetchSearchById } = useGetSearchById(
    searchId
  );
  const isOwnerOrParticipant = quest?.userId === id || participant?.id === id;
  const isFriendship = participant?.friendshipId;
  const {
    mutateAsync: deleteFriendship,
    isLoading: isDeleteFriendshipsLoading,
  } = useDeleteFriendshipById();
  const {
    mutateAsync: deleteFollower,
    isLoading: isDeleteFollowerLoading,
  } = useDeleteFollower();
  const { refetch: refetchSearchParticipants } = useGetSearchParticipants(
    searchId
  );
  const { refetch: refetchSharedQuests } = useGetMySharedSearches();
  const {refetch: refetchFollowedQuests} = useGetMyFollowedSearches();
  const isDeleteLoading = isDeleteFriendshipsLoading || isDeleteFollowerLoading;

  // Handlers
  // Remove participant from search
  async function removeParticipant() {
    // Remove friendship or follwer

    const response = isFriendship
      ? await deleteFriendship({
          searchId: searchId,
          friendshipId: participant.friendshipId,
        })
      : await deleteFollower({
          searchId: searchId,
          followerId: participant.followerId,
        });
    if (response) {
      // Invalidate get participants query
      await clientQuery.invalidateQueries(
        getGetSearchParticipantsQueryKey(searchId)
      );
      // Refetch get participants by search Id
      await refetchSearchParticipants();

      // Invalidate get quest
      await clientQuery.invalidateQueries(getGetSearchByIdQueryKey(searchId));

      // Refetch get quest to update avatars
      await refetchSearchById();

      // If user is participant, refetch shared quest
      if (participant?.id === id) {
        // Invalidate get my shared quests
        await clientQuery.invalidateQueries(getGetMySharedSearchesQueryKey());

        // Refetch get shared or followed quest
        isFriendship ? await refetchSharedQuests() : await refetchFollowedQuests;

        // Go back home
        router.push("/home");
      }
    }
  }

  return (
    <Box
      bgColor={"white"}
      p="1rem"
      borderRadius={"12px"}
      boxShadow={
        "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
      }
      maxH={"72px"}
    >
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Flex direction={"row"} alignItems={"center"}>
          <Box
            width={"40px"}
            height={"40px"}
            bgColor={"#6772E5"}
            borderRadius={"8px"}
          >
            <OldAvatar />
          </Box>
          <Flex
            ml="8px"
            justifyContent={"center"}
            direction={"column"}
            alignItems={"flex-start"}
          >
            <Text
              height={"16px"}
              fontWeight={"bold"}
              fontSize={"16px"}
              color={"#393360"}
            >
              {`${capitalize(participant?.firstName)} ${capitalize(
                participant?.lastName
              )} `}
            </Text>
            <Text
              marginY={"4px"}
              height={"12px"}
              color="#8F95B2"
              fontSize={"12px"}
            >
              {`${
                participant?.type === friendTypeInvited ? "Friend" : "Follower"
              } - ${participant?.numberOfPosts} ${
                participant?.numberOfPosts > 1 ? "posts" : "post"
              }`}
            </Text>
          </Flex>
        </Flex>
        {isOwnerOrParticipant && (
          <Box
            px="18px"
            py="8px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"8px"}
            border="1.5px solid #8F95B2"
            boxSizing="border-box"
            onClick={removeParticipant}
            disabled={isDeleteLoading}
            cursor={"pointer"}
          >
            {!isDeleteLoading ? (
              <Text fontSize={"14px"} color="#8F95B2">
                Unfollow
              </Text>
            ) : (
              <Text fontSize={"14px"} color="#8F95B2">
                Deleting...
              </Text>
            )}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default QuestDetailsFriendCard;
