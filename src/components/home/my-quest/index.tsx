import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import { useGetMySearch } from "../../../services/searches/searches";
import MyQuestParticipants from "./participants";
import MyQuestTag from "./tag";

const MyQuest = () => {
  // Attributes
  const { data: quest, isLoading, refetch } = useGetMySearch();

  return (
    <Skeleton
      isLoaded={!isLoading}
      
    >
      {quest && <Flex
        bgColor={"#6772E5"}
        borderRadius={"26px"}
        direction={"column"}
        justifyContent={"space-between"}
        minH={"167px"}
        paddingX={"20px"}
        paddingY={"24px"}
        mt={"-107px"}
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
            {quest?.title}
          </Heading>
        </Box>
        <Flex
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <MyQuestParticipants participants={quest?.participants} />
          {quest?.sector && <MyQuestTag sector={quest?.sector} />}
        </Flex>
      </Flex>}
    </Skeleton>
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
