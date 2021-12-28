import { Box, Flex, Heading, Skeleton, Stack } from "@chakra-ui/react";
import {
  getMySharedSearches,
  useGetMySharedSearches,
} from "../../../services/searches/searches";
import QuestCard from "../../shared/quest-card";
import PlaceholderSharedQuest from "./placeholder";
import SharedQuestBox from "./quest-box";

const SharedQuestList = () => {
  // Queries
  const { data: quests, isLoading, refetch } = useGetMySharedSearches();
  const hasSharedQuest = quests && quests?.length !== 0
  

  return (
    <Box background={"#F8F9FC"} mt={"94px"}>
      <Heading ml={"24px"} mb={"20px"} size={"800"} color={"#393360"}>
        Shared Quest
      </Heading>
      <Skeleton
        isLoaded={!isLoading}
        minWidth={isLoading ? "269px" : "fit-content"}
        height={isLoading ? "180px" : "fit-content"}
        mx={isLoading ? "24px" : "0px"}
        mb={isLoading ? "47px" : "0px"}
      >
        {hasSharedQuest && (
          <Flex direction={"row"} overflow={"scroll"} pr={"20px"}>
            {quests?.map((quest, index) => {
              if (index === 0) {
                return (
                  <SharedQuestBox ml={"24px"} mb={"47px"}>
                    <QuestCard isFriend quest={quest} />
                  </SharedQuestBox>
                );
              } else {
                return (
                  <SharedQuestBox ml={"20px"} mb={"47px"}>
                    <QuestCard quest={quest} isFriend />
                  </SharedQuestBox>
                );
              }
            })}
          </Flex>
        )}
        {!hasSharedQuest && (
          <SharedQuestBox ml={"24px"} mb={"47px"}>
            <PlaceholderSharedQuest />
          </SharedQuestBox>
        )}
      </Skeleton>
    </Box>
  );
};

export default SharedQuestList;
