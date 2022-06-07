import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { OldAvatar } from "../../../../../components/shared/icons/old-avatar";
import {
  getGetPublicSearchesQueryKey,
  useDeleteFollower,
  useGetMyFollowedSearches,
  useGetPublicSearches,
  usePostFollower,
} from "../../../../../services/searches/searches";
import { PublicSearchDto } from "../../../../../types/dtos";
import { capitalize } from "../../../../../utils/capitalize";

interface PublicQuestCardHeaderProps {
  quest: PublicSearchDto;
}

enum EnumFollowButtonTitle {
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  FRIEND = "FRIEND",
}

const PublicQuestCardHeader = ({ quest }: PublicQuestCardHeaderProps) => {
  const clientQuery = useQueryClient();
  const buttonTitle: EnumFollowButtonTitle = quest?.followerId
    ? EnumFollowButtonTitle.UNFOLLOW
    : quest?.friendshipId
    ? EnumFollowButtonTitle.FRIEND
    : EnumFollowButtonTitle.FOLLOW;
  const {
    mutateAsync: postFollower,
    isLoading: postIsLoading,
  } = usePostFollower();
  const {
    mutateAsync: deleteFollower,
    isLoading: deleteFollowerIsLoading,
  } = useDeleteFollower();
  const {
    refetch: refetchPublicSearches,
    isLoading: refetchPublicSearchesLoading,
  } = useGetPublicSearches();
  const followButtonDisabled =
    postIsLoading || deleteFollowerIsLoading || refetchPublicSearchesLoading;
  const {
    refetch: refetchFollowedQuests,
    isLoading,
  } = useGetMyFollowedSearches();

  // Handlers
  async function handleClick(e: React.MouseEvent<Element, MouseEvent>) {
    // If user is a friend, do nothing & redirect to quest details
    if (!quest?.friendshipId) {
      // Stop event propagation
      e.stopPropagation();

      // Post of delete follower
      switch (buttonTitle) {
        case EnumFollowButtonTitle.FOLLOW:
          await postFollower({
            searchId: quest?.id,
          });
          break;
        case EnumFollowButtonTitle.UNFOLLOW:
          await deleteFollower({
            searchId: quest?.id,
            followerId: quest?.followerId,
          });
          break;
        case EnumFollowButtonTitle.FRIEND:
        default:
          break;
      }

      // Invalidate get public search query
      await clientQuery.invalidateQueries(getGetPublicSearchesQueryKey());
      // Refetch public quest
      await refetchPublicSearches();

      // Refetch followed quests
      await refetchFollowedQuests();
    }
  }
  return (
    <Flex direction={"row"} justifyContent="space-between">
      <Flex direction={"row"} alignItems={"center"}>
        <Box borderRadius={"10px"} bgColor={"#5D44F2"}>
          <OldAvatar width={"40px"} height={"40px"} />
        </Box>
        <Flex ml={"10px"} direction={"column"} justifyContent={"center"}>
          <Heading
            noOfLines={2}
            mt={"3px"}
            lineHeight={"16px"}
            color={"#393360"}
            size="600"
          >
            {`${capitalize(quest?.firstName)} ${capitalize(quest?.lastName)}`}
          </Heading>
        </Flex>
      </Flex>
      <Box
        px={"1.0625rem"}
        py={".4688rem"}
        borderRadius={".625rem"}
        border={"1.78571px solid #8F95B2"}
        onClick={handleClick}
      >
        <Text color={"#8F95B2"} fontSize="14px" fontWeight={"400"}>
          {followButtonDisabled ? "Saving..." : buttonTitle}
        </Text>
      </Box>
    </Flex>
  );
};

export default PublicQuestCardHeader;
