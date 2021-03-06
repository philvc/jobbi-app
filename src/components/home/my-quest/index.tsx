import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useGetMySearch } from "../../../services/searches/searches";
import AvatarList from "../../avatar-list";
import MyQuestParticipants from "./participants";
import MyQuestTag from "./tag";

const MyQuest = () => {
  // Attributes
  const { data: quest, isLoading, refetch } = useGetMySearch();
  const router = useRouter();

  // Handler
  function handleOnClick() {
    if (quest && quest?.id) {
      router.push(`/home/quests/${quest?.id}`);
    } else {
      router.push(`/home/create-quest`);
    }
  }

  return (
    <Skeleton isLoaded={!isLoading}>
      <Flex
        bgColor={"#6772E5"}
        borderRadius={"26px"}
        direction={"column"}
        justifyContent={"space-between"}
        minH={"167px"}
        paddingX={"20px"}
        paddingY={"24px"}
        mt={"-107px"}
        onClick={handleOnClick}
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
            {quest?.id ? quest?.title : "Clique ici pour créer ta quête"}
          </Heading>
        </Box>
        <Flex
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <AvatarList users={quest?.friends} />
          {quest?.sector && <MyQuestTag sector={quest?.sector} />}
        </Flex>
      </Flex>
    </Skeleton>
  );
};

export default MyQuest;
