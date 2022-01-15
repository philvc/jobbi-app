import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";
import { useGetMyFollowedSearches } from "../../../services/searches/searches";
import QuestCard from "../../shared/quest-card";
import PlaceholderSharedQuest from "../shared/placeholder";
import SharedQuestBox from "../shared/quest-box";
import PublicSearchPlaceholder from "./placeholder";
import PublicQuestBox from "./quest-box";

const PublicQuestList = () => {
  // Queries
  const { data: quests, isLoading } = useGetMyFollowedSearches();
  const hasFollowedQuests = quests && quests?.length !== 0;
  return (
    <Box background={"#F8F9FC"} pb={"200px"}>
      <Heading ml={"24px"} mb={"20px"} size={"800"} color={"#393360"}>
        Public Quest
      </Heading>
      <Skeleton
        isLoaded={!isLoading}
        minWidth={isLoading ? "269px" : "fit-content"}
        height={isLoading ? "180px" : "fit-content"}
        mx={isLoading ? "24px" : "initial"}
        mb={isLoading ? "47px" : "initial"}
      >
        {hasFollowedQuests && (
          <Flex direction={"column"}>
            {quests?.map((quest) => (
              <PublicQuestBox mx={"24px"} mb={"20px"}>
                <QuestCard quest={quest} />
              </PublicQuestBox>
            ))}
          </Flex>
        )}
        {!hasFollowedQuests && (
          <SharedQuestBox ml={"24px"} mb={"47px"}>
            <PublicSearchPlaceholder />
          </SharedQuestBox>
        )}
      </Skeleton>
    </Box>
  );
};

export default PublicQuestList;
