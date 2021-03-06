import { Box, Flex, Text } from "@chakra-ui/react";
import { COLORS } from "../../../../constants/colors";
import { capitalize } from "../../../../utils/capitalize";
import { TagIcon } from "../../icons/tag";

interface QuestCardTagsProps {
  sector: string;
}

const QuestCardTags = ({ sector }: QuestCardTagsProps) => {
  return (
    <Flex
      borderRadius={"20px"}
      height={"fit-content"}
      py={"7px"}
      px={"11px"}
      direction={"row"}
      alignItems={"center"}
      bgColor={"#6772E5"}
      width={"fit-content"}
      alignSelf={"flex-end"}
      maxH={"28px"}
    >
      <TagIcon fill="white" width={"10px"} height={"14px"} />
      <Text
        ml={"6.5px"}
        fontWeight={500}
        fontSize={12}
        color={COLORS.WHITE.hex}
      >
        {capitalize(sector)}
      </Text>
    </Flex>
  );
};

export default QuestCardTags;
