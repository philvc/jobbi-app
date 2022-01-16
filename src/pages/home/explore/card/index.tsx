import { Box, Flex, Text } from "@chakra-ui/react";
import { NumericDictionaryIterator } from "lodash";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import AvatarList from "../../../../components/avatar-list";
import { QuestCardHeader } from "../../../../components/shared/quest-card/header";
import QuestCardTags from "../../../../components/shared/quest-card/tag";
import { COLORS } from "../../../../constants/colors";
import { EnumReferer } from "../../../../constants/enums";
import {
    getGetPublicSearchesQueryKey,
  useDeleteFollower,
  useGetPublicSearches,
  useGetSearchFriends,
  usePostFollower,
} from "../../../../services/searches/searches";
import { Button } from "../../../../themes/components/button";
import { PublicSearchDto } from "../../../../types/dtos/publicSearchDto";
import PublicQuestCardHeader from "./header";

interface PublicQuestCardProps {
  index: number;
  quest: PublicSearchDto;
}

enum EnumFollowButtonTitle {
    FOLLOW ="FOLLOW",
    FOLLOWER = "FOLLOWER",
    FRIEND = "FRIEND"
}

const PublicQuestCard = ({ index, quest }: PublicQuestCardProps) => {
  // Attributes
  const router = useRouter();
  const clientQuery = useQueryClient();
  const { data: friends, isLoading: getFriendsIsLoading } = useGetSearchFriends(
    quest?.id,
    {
      query: { enabled: !!quest?.id },
    }
  );
  const buttonTitle: EnumFollowButtonTitle = quest?.followerId
    ? EnumFollowButtonTitle.FOLLOWER
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
  const {refetch: refetchPublicSearches} = useGetPublicSearches()


  // Handlers
  async function handleClick(e: React.MouseEvent<Element, MouseEvent>) {

    // Stop event propagation
    e.stopPropagation();
    
    // Post of delete follower
    switch(buttonTitle){
        case EnumFollowButtonTitle.FOLLOW:
            await postFollower({
                searchId: quest?.id
            })
            break;
        case EnumFollowButtonTitle.FOLLOWER:
            await deleteFollower({
                searchId: quest?.id, 
                followerId: quest?.followerId
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

  }

  return (
    <Box
      background={"white"}
      borderRadius={"12px"}
      boxShadow={
        "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
      }
      paddingY={"17px"}
      padding={"15px"}
      minWidth={"269px"}
      width={"269px"}
      height={"180px"}
      cursor={"pointer"}
      onClick={() => router.push(`/home/quests/${quest?.id}?referer=${EnumReferer.EXPLORE}`)}
    >
      <Flex
        direction={"column"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Box>
          <Box
            px="18px"
            py="8px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"8px"}
            border="1.5px solid #8F95B2"
            boxSizing="border-box"
            cursor={"pointer"}
            onClick={handleClick}
          >
            {buttonTitle}
          </Box>
          <PublicQuestCardHeader quest={quest} />
          <Text
            mt={"20px"}
            color={COLORS.BLACK.T800.hex}
            fontSize={"14px"}
            fontWeight={400}
          >
            {quest?.description}
          </Text>
        </Box>
        <Flex direction={"row"} justifyContent={"space-between"}>
          {friends && <AvatarList users={friends} />}
          {quest?.sector && <QuestCardTags sector={quest?.sector} />}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PublicQuestCard;
