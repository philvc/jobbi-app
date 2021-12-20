import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import QuestCard from "../../shared/quest-card";
import SharedQuestBox from "./quest-box";

const SharedQuestList = () => {
  return (
    <Box background={"#F8F9FC"} mt={"94px"}>
      <Heading ml={"24px"} mb={"20px"} size={"800"} color={"#393360"}>
        Shared Quest
      </Heading>
      <Flex direction={"row"} overflow={"scroll"} pr={"20px"}>
        <SharedQuestBox ml={"24px"} mb={"47px"}>
          <QuestCard isFriend />
        </SharedQuestBox>
        <SharedQuestBox ml={"20px"} mb={"47px"}>
          <QuestCard isFriend />
        </SharedQuestBox>
        <SharedQuestBox ml={"20px"} mb={"47px"}>
          <QuestCard isFriend />
        </SharedQuestBox>
        <SharedQuestBox ml={"20px"} mb={"47px"}>
          <QuestCard isFriend />
        </SharedQuestBox>
      </Flex>
    </Box>
  );
};

export default SharedQuestList;
