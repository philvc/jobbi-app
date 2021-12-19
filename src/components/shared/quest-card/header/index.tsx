import { Box, Flex, Heading } from "@chakra-ui/react";
import { COLORS } from "../../../../constants/colors";
import { OldAvatar } from "../../icons/old-avatar";
import Paragraph from "../../typography/paragraph";

export const QuestCardHeader = () => {
  return (
    <Flex direction={"row"} alignItems={"center"}>
      <Box borderRadius={"10px"} bgColor={"#5D44F2"}>
        <OldAvatar width={"40px"} height={"40px"} />
      </Box>
      <Flex ml={"10px"} direction={"column"} justifyContent={"center"}>
        <Heading mt={"3px"} lineHeight={"16px"} color={"#393360"} size="600">
          {`Pierre De Moor`}
        </Heading>
        <Paragraph size={12} weight={400} color={COLORS.GREY.T500}>
          {"Friend"}
        </Paragraph>
      </Flex>
    </Flex>
  );
};
