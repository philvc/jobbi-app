import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { COLORS } from "../../../../constants/colors";
import { OldAvatar } from "../../icons/old-avatar";

interface QuestCardHeaderProps {
  isFriend?: boolean
}

export const QuestCardHeader = ({ isFriend }: QuestCardHeaderProps) => {
  return (
    <Flex direction={"row"} alignItems={"center"}>
      <Box borderRadius={"10px"} bgColor={"#5D44F2"}>
        <OldAvatar width={"40px"} height={"40px"} />
      </Box>
      <Flex ml={"10px"} direction={"column"} justifyContent={"center"}>
        <Heading mt={"3px"} lineHeight={"16px"} color={"#393360"} size="600">
          {`Pierre De Moor`}
        </Heading>
        {isFriend ? (
          <Text
            fontSize={12}
            weight={400}
            mt={"1px"}
            color={COLORS.GREY.T500.hex}
          >
            {"Friend"}
          </Text>
        ) : (
          <Text
            fontSize={12}
            weight={400}
            mt={"1px"}
            color={COLORS.GREEN.T500.hex}
          >
            {"Following"}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
