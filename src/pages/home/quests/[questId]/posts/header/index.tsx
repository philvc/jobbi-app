import { Flex, Heading } from "@chakra-ui/react";
import MoreButton from "../../../../../../components/shared/actions/more";

const QuestPostsHeader = () => {
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
        Fil d'actualités
      </Heading>
      <MoreButton />
    </Flex>
  );
};

export default QuestPostsHeader;
