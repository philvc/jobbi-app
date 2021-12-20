import { Box, Flex, Heading } from "@chakra-ui/react";
import QuestCard from "../../shared/quest-card";
import PublicQuestBox from "./quest-box";

const PublicQuestList = () => {
  return (
    <Box>
      <Heading ml={"24px"} mb={"20px"} size={"800"} color={"#393360"}>
        Public Quest
      </Heading>
      <Flex direction={"column"}>
        <PublicQuestBox mx={"24px"} mb={"20px"}>
          <QuestCard />
        </PublicQuestBox>
        <PublicQuestBox mx={"24px"} mb={"20px"}>
          <QuestCard />
        </PublicQuestBox>
        <PublicQuestBox mx={"24px"} mb={"20px"}>
          <QuestCard />
        </PublicQuestBox>
        <PublicQuestBox mx={"24px"} mb={"20px"}>
          <QuestCard />
        </PublicQuestBox>
        <PublicQuestBox mx={"24px"} mb={"20px"}>
          <QuestCard />
        </PublicQuestBox>
      </Flex>
    </Box>
  );
};

export default PublicQuestList;
