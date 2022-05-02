import { Flex, Box, Text, Heading, Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import MyQuestParticipants from "../../../../../../components/home/my-quest/participants";
import MyQuestTag from "../../../../../../components/home/my-quest/tag";
import { useUser } from "../../../../../../contexts/user";
import { useGetSearchById } from "../../../../../../services/searches/searches";
import { SearchDTO } from "../../../../../../types/dtos";
import QuestDetailsHeaderIconsTopBar from "./icons";

const QuestDetailsHeader = () => {
  // Attributes
  const router = useRouter();
  const questId = router.query.questId as string;
  const { data, refetch, isLoading } = useGetSearchById(questId);
  const { id } = useUser();
  const isOwner = id === data?.userId;
  const questDTO: SearchDTO = useMemo(() => {
    return {
      id: data?.id,
      title: data?.title,
      description: data?.description,
      type: data?.type,
      userId: data?.userId,
      sector: data?.sector,
      tags: data?.tags,
    };
  }, [data]);

  return (
    <Box
      borderBottomRadius={"1.5rem"}
      width={"full"}
      bgColor={"#6772E5"}
      pt={"4.3rem"}
      px={"1.5rem"}
      pb={"1.375rem"}
    >
      <Skeleton isLoaded={!isLoading} opacity={isLoading ? 0.3 : "initial"}>
        <QuestDetailsHeaderIconsTopBar quest={questDTO} />
        <Box mt={"1.5rem"}>
          <Text
            textAlign={"center"}
            fontSize={14}
            fontWeight={400}
            color={"#C5CAF6"}
          >
            {isOwner ? "Your quest" : `${data?.firstName} ${data?.lastName}`}
          </Text>
          <Heading
            color={"white"}
            size="18px"
            fontWeight={700}
            mt={"2px"}
            textAlign={"center"}
          >
            {data?.title}
          </Heading>
        </Box>
        <Flex
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          marginTop={"2.125rem"}
        >
          <MyQuestParticipants friends={data?.friends} />
          {data?.sector && <MyQuestTag sector={data?.sector} />}
        </Flex>
      </Skeleton>
    </Box>
  );
};

export default QuestDetailsHeader;
