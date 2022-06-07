import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";
import { useGetMyFollowedSearches } from "../../../../services/searches/searches";
import QuestCard from "../../../shared/quest-card";
import PublicSearchPlaceholder from "../../public/placeholder";
import PublicQuestBox from "../../public/quest-box";
import SharedQuestBox from "../quest-box";

const FollowedQuests = () => {
  // Queries
  const { data: quests, isLoading } = useGetMyFollowedSearches();
  const hasFollowedQuests = quests && quests?.length !== 0;
  return (
    <Skeleton
      isLoaded={!isLoading}
      minWidth={isLoading ? "269px" : "fit-content"}
      height={isLoading ? "180px" : "fit-content"}
      mx={isLoading ? "24px" : "initial"}
      mb={isLoading ? "47px" : "initial"}
    >
      {hasFollowedQuests && (
        <Flex direction={"column"} overflow={"scroll"} pr={"20px"}>
          {quests?.map((quest, index) => {
            if (index == 0) {
              return (
                <SharedQuestBox ml={"24px"} mb={"47px"}>
                  <QuestCard quest={quest} />
                </SharedQuestBox>
              );
            } else {
              return (
                <SharedQuestBox ml={"20px"} mb={"47px"}>
                  <QuestCard quest={quest} />
                </SharedQuestBox>
              );
            }
          })}
        </Flex>
      )}
      {!hasFollowedQuests && (
        <SharedQuestBox ml={"24px"} mb={"47px"}>
          <PublicSearchPlaceholder />
        </SharedQuestBox>
      )}
    </Skeleton>
  );
};

export default FollowedQuests;
