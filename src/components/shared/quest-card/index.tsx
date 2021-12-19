import { Box, Flex, Text } from "@chakra-ui/react";
import { COLORS } from "../../../constants/colors";
import { SearchDTO } from "../../../types/dtos";
import { QuestCardHeader } from "./header";
import QuestCardTags from "./tag";

interface QuestCardProps {
  index?: number;
}

const QuestCard = ({ index }: QuestCardProps) => {
  return (
    <Box
      background={"white"}
      borderRadius={"12px"}
      boxShadow={
        "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
      }
      paddingY={"17px"}
      padding={"15px"}
      width={"269px"}
      height={"180px"}
    >
      <Flex
        direction={"column"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Box>
          <QuestCardHeader />
          <Text
            mt={"20px"}
            color={COLORS.BLACK.T800.hex}
            fontSize={"14px"}
            fontWeight={400}
          >
            Looking for a UI Designer role in a Brussels Startup
          </Text>
        </Box>
        <QuestCardTags />
      </Flex>
    </Box>
  );
};

export default QuestCard;

const mockQuest: SearchDTO = {
  description: "Looking for a UI Designer role in a Brussels Startup",
  title: "no title",
  id: "1",
  userId: "1",
};
