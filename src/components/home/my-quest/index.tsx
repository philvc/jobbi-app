import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import MyQuestParticipants from "./participants";
import MyQuestTag from "./tag";

const MyQuest = () => {
  return (
    <Flex
      bgColor={"#6772E5"}
      borderRadius={"26px"}
      direction={"column"}
      justifyContent={"space-between"}
      minH={"167px"}
      mt={"-120px"}
      w={"80%"}
      marginX={"auto"}
      paddingX={"20px"}
      paddingY={"24px"}
    >
      <Box>
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
          {"Web Developer FullStack"}
        </Heading>
      </Box>
      <Flex alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
        <MyQuestParticipants participants={participants} />
        <MyQuestTag />
      </Flex>
    </Flex>
  );
};

export default MyQuest;

const participants: {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  id?: string;
}[] = [
  {
    firstName: "",
    lastName: "",
    avatarUrl: "",
    id: "",
  },
  {
    firstName: "",
    lastName: "",
    avatarUrl: "",
    id: "",
  },
  {
    firstName: "",
    lastName: "",
    avatarUrl: "",
    id: "",
  },
  {
    firstName: "",
    lastName: "",
    avatarUrl: "",
    id: "",
  },
];
