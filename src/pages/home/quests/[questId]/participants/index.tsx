import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  useGetSearchFriendships,
  useGetSearchParticipants,
} from "../../../../../services/searches/searches";
import QuestDetailsAddButton from "../posts/add-post";
import QuestDetailsSectionHeader from "../posts/header";
import QuestDetailsFriendCard from "./card";

const QuestDetailsParticipants = () => {
  // Attributes
  const router = useRouter();
  const searchId = router.query.questId as string;
  // Queries
  const { data: participants, isLoading, refetch } = useGetSearchParticipants(
    searchId
  );
  const hasParticipants = participants && participants?.length !== 0;
  return (
    <Box pb={"150px"}>
      <QuestDetailsSectionHeader>Friends</QuestDetailsSectionHeader>
      {hasParticipants && (
        <Flex direction={"column"} overflow={"scroll"} pr={"20px"}>
          {participants?.map((participant, index) => {
            if (index === 0) {
              return (
                <Box key={participant?.id} ml={"1.5rem"} mb={"1rem"}>
                  <QuestDetailsFriendCard participant={participant} />
                </Box>
              );
            } else {
              return (
                <Box key={participant?.id} ml={"20px"} mb={"1rem"}>
                  <QuestDetailsFriendCard participant={participant} />
                </Box>
              );
            }
          })}
        </Flex>
      )}
      {/* {!hasPosts && (
          <SharedQuestBox ml={"24px"} mb={"47px"}>
            <PlaceholderSharedQuest />
          </SharedQuestBox>
        )} */}
      <QuestDetailsAddButton>Invite friends</QuestDetailsAddButton>
    </Box>
  );
};

export default QuestDetailsParticipants;
