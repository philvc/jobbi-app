import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";
import PublicQuestCard from "../../../pages/home/explore/card";
import {
  useGetMyFollowedSearches,
  useGetPublicSearches,
} from "../../../services/searches/searches";
import QuestCard from "../../shared/quest-card";
import SharedQuestBox from "../shared/quest-box";
import PublicSearchPlaceholder from "./placeholder";
import PublicQuestBox from "./quest-box";

const PublicQuestList = () => {
  // Queries
  // Attributes
  const { data, isLoading } = useGetPublicSearches();
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
        {data
          ?.filter((quest) => !quest.followerId && !quest.friendshipId)
          .map((quest, index) => {
            return <PublicQuestCard index={index} quest={quest} />;
          })}
      </Skeleton>
    </Box>
  );
};

export default PublicQuestList;
