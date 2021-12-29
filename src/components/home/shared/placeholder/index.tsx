import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { COLORS } from "../../../../constants/colors";
import { OldAvatar } from "../../../shared/icons/old-avatar";
import QuestCardTags from "../../../shared/quest-card/tag";

const PlaceholderSharedQuest = () => {
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
          <Flex direction={"row"} alignItems={"center"}>
            <Box borderRadius={"10px"} bgColor={"#5D44F2"}>
              <OldAvatar width={"40px"} height={"40px"} />
            </Box>
            <Flex ml={"10px"} direction={"column"} justifyContent={"center"}>
              <Heading
                mt={"3px"}
                lineHeight={"16px"}
                color={"#393360"}
                size="600"
              >
                {`No Shared Quest`}
              </Heading>
              {true ? (
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
          <Text
            mt={"20px"}
            color={COLORS.BLACK.T800.hex}
            fontSize={"14px"}
            fontWeight={400}
          >
            {"You have no shared quest"}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlaceholderSharedQuest;
