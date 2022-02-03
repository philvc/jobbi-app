import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import AddCrossIcon from "../../../../../../../components/shared/icons/add-cross";

const QuestDetailsAddButton = (props: BoxProps) => {
  return (
    <Box
      justifyContent={"center"}
      bgColor={"#6772E5"}
      borderRadius={"12px"}
      mx={"1.5rem"}
      height={"48px"}
      display={"flex"}
      alignItems={"center"}
      onClick={props.onClick}
    >
      <Flex alignItems={"center"}>
        <AddCrossIcon width={"21px"} height={"20px"} />
        <Text ml="4px" color="white" fontWeight={"500"} fontSize={"16px"}>
          {props.children}
        </Text>
      </Flex>
    </Box>
  );
};

export default QuestDetailsAddButton;
