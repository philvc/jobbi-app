import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { COLORS } from "../../../constants/colors";
import { useGetSearchFriends } from "../../../services/searches/searches";
import { SearchDTO, SharedSearchDTO } from "../../../types/dtos";
import AvatarList from "../../avatar-list";
import { QuestCardHeader } from "./header";
import QuestCardTags from "./tag";

interface QuestCardProps {
  index?: number;
  isFriend?: boolean;
  quest?: SharedSearchDTO;
}

const QuestCard = ({ index, isFriend = false, quest }: QuestCardProps) => {
  // Attributes
  const router = useRouter();
  const { data: friends, isLoading } = useGetSearchFriends(quest?.id, {
    query: { enabled: !!quest?.id },
  });
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
      onClick={() => router.push(`/home/quests/${quest?.id}`)}
    >
      <Flex
        direction={"column"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Box>
          <QuestCardHeader quest={quest} isFriend={isFriend} />
          <Text
            mt={"20px"}
            color={COLORS.BLACK.T800.hex}
            fontSize={"14px"}
            fontWeight={400}
            noOfLines={2}
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

export default QuestCard;
