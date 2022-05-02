import { Box, Flex, Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { EnumSearchRole } from "../../../../../../constants/enums";
import { useSearchRoleContext } from "../../../../../../contexts/role";
import { useGetSearchParticipants } from "../../../../../../services/searches/searches";
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
  const { role } = useSearchRoleContext();
  return (
    <Box pb={"150px"}>
      <QuestDetailsSectionHeader
        onClick={() => router.push(`/home/quests/${searchId}/friends`)}
      >
        {"Friends & followers"}
      </QuestDetailsSectionHeader>
      <Skeleton
        minWidth={isLoading ? "327px" : "fit-content"}
        height={isLoading ? "72px" : "fit-content"}
        mx={isLoading ? "24px" : "inherit"}
        mb={isLoading ? "1rem" : "inherit"}
        borderRadius={isLoading ? "12px" : "inherit"}
        isLoaded={!isLoading}
      >
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

      </Skeleton>
      {role !== EnumSearchRole.VISITOR && role !== EnumSearchRole.UNKNOWN && (
        <QuestDetailsAddButton>Invite friends</QuestDetailsAddButton>
      )}
    </Box>
  );
};

export default QuestDetailsParticipants;
