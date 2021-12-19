import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { COLORS } from "../../../constants/colors";
import QuestCard from "../../shared/quest-card";

const SharedQuestList = () => {
  return (
    <Box mt={"94px"}>
      <Heading ml={"24px"} mb={"20px"} size={"800"} color={"#393360"}>
        Shared Quest
      </Heading>
      <Flex direction={"row"} overflow={"scroll"} pr={"20px"}>
        <Box ml={"24px"} mb={"47px"}>
          <QuestCard />
        </Box>
        <Box ml={"20px"} mb={"47px"}>
          <QuestCard />
        </Box>
        <Box ml={"20px"} mb={"47px"}>
          <QuestCard />
        </Box>
        <Box ml={"20px"} mb={"47px"}>
          <QuestCard />
        </Box>
      </Flex>
    </Box>
  );
};

export default SharedQuestList;
