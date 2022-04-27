import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import AvatarList from "../../../../components/avatar-list";
import QuestCardTags from "../../../../components/shared/quest-card/tag";
import { COLORS } from "../../../../constants/colors";
import { EnumReferer } from "../../../../constants/enums";
import {
  useDeleteFollower,
  useGetPublicSearches,
  useGetSearchFriends,
  usePostFollower,
} from "../../../../services/searches/searches";
import { PublicSearchDto } from "../../../../types/dtos/publicSearchDto";
import PublicQuestCardHeader from "./header";

interface PublicQuestCardProps {
  index: number;
  quest: PublicSearchDto;
}

enum EnumFollowButtonTitle {
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  FRIEND = "FRIEND",
}

const PublicQuestCard = ({ index, quest }: PublicQuestCardProps) => {
  // Attributes
  const router = useRouter();
  const { data: friends, isLoading: getFriendsIsLoading } = useGetSearchFriends(
    quest?.id,
    {
      query: { enabled: !!quest?.id },
    }
  );

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
      height={"180px"}
      cursor={"pointer"}
      onClick={() =>
        router.push(`/home/quests/${quest?.id}?referer=${EnumReferer.EXPLORE}`)
      }
      mx={"24px"}
      mb={"1rem"}
    >
      <Flex
        direction={"column"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Box>
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
        <Skeleton
          isLoaded={!getFriendsIsLoading}
          h={getFriendsIsLoading ? "24px" : "fit-content"}
        >
          <Flex direction={"row"} justifyContent={"space-between"}>
            {friends && <AvatarList users={friends} />}
            {quest?.sector && <QuestCardTags sector={quest?.sector} />}
          </Flex>
        </Skeleton>
      </Flex>
    </Box>
  );
};

export default PublicQuestCard;
