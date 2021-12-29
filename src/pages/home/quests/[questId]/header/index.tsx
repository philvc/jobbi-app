import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MyQuestParticipants from "../../../../../components/home/my-quest/participants";
import MyQuestTag from "../../../../../components/home/my-quest/tag";
import QuestDetailsHeaderIconsTopBar from "./icons";

const QuestDetailsHeader = () => {
  // Attributes
  const router = useRouter();
  return (
    <Box
      borderBottomRadius={"1.5rem"}
      height={"16.56rem"}
      width={"full"}
      bgColor={"#6772E5"}
      pt={"4.3rem"}
      px={"1.5rem"}
    >
      <QuestDetailsHeaderIconsTopBar />
      <Box mt={"1.5rem"}>
        <Text
          textAlign={"center"}
          fontSize={14}
          fontWeight={400}
          color={"#C5CAF6"}
        >
          {"Your quest"}
        </Text>
        <Heading
          color={"white"}
          size="18px"
          fontWeight={700}
          mt={"2px"}
          textAlign={"center"}
        >
          {"THIS IS A QUEST"}
        </Heading>
      </Box>
      <Flex
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        {/* <MyQuestParticipants participants={quest?.participants} /> */}
        {/* {quest?.sector && <MyQuestTag sector={quest?.sector} />} */}
      </Flex>
    </Box>
  );
};

export default QuestDetailsHeader;
