import { BoxProps, Flex, Heading } from "@chakra-ui/react";
import MoreButton from "../../../../../../components/shared/actions/more";

const QuestDetailsSectionHeader = (props: BoxProps) => {
  return (
    <Flex
      px={"1.5rem"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mt={"2rem"}
      mb={"1.25rem"}
    >
      <Heading size={"800"} color={"#393360"}>
        {props.children}
      </Heading>
      <MoreButton onClick={props.onClick} />
    </Flex>
  );
};

export default QuestDetailsSectionHeader;
