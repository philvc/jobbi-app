import { Box, Flex, Text } from "@chakra-ui/react";
import { COLORS } from "../../../../constants/colors";
import { capitalize } from "../../../../utils/capitalize";
import { TagIcon } from "../../../shared/icons/tag";

const MyQuestTag = () => {
  return (
    <Flex
      borderRadius={"20px"}
      height={"fit-content"}
      py={"6.5px"}
      px={"11px"}
      direction={"row"}
      alignItems={"center"}
      bgColor={"rgba(255, 255, 255, 0.4)"}
    >
      <TagIcon style={{maxHeight: "28px"}} fill="white" width={"10px"} height={"14px"} />
      <Text ml={"7px"} fontWeight={500} fontSize={12} color={COLORS.WHITE.hex}>
        {capitalize("development")}
      </Text>
    </Flex>
  );
};

export default MyQuestTag;
