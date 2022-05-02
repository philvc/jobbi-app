import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Page from "../../../../../components/shared/layout/page";
import { useGetSearchParticipants } from "../../../../../services/searches/searches";
import { ParticipantDTOForSearchById } from "../../../../../types/dtos";
import { getAuthRedirect } from "../../../../../utils/auth";
import QuestDetailsFriendCard from "../components/participants/card";

export const getServerSideProps = getAuthRedirect;

const mocks: ParticipantDTOForSearchById[] = [
  {
    firstName: "patric",
    id: "msqlkdf",
    lastName: "sqdf",
  },
  {
    firstName: "patric",
    id: "msqlkdf",
    lastName: "sqdf",
  },
  {
    firstName: "patric",
    id: "msqlkdf",
    lastName: "sqdf",
  },
];

const QuestFriends = () => {
  const router = useRouter();
  const searchId = router.query.questId as string;
  // Queries
  const { data: participants, isLoading, refetch } = useGetSearchParticipants(
    searchId
  );
  const hasParticipants = participants && participants?.length !== 0;
  return (
    <Page overflow={"scroll"}>
      <Box
        bg={"rgba(57, 51, 96, 0.1)"}
        borderRadius={".5rem"}
        width={"2rem"}
        minHeight={"2rem"}
        display="flex"
        onClick={router.back}
        mx={"24px"}
        mb={"32px"}
        mt={"4rem"}
      >
        <Image
          alignSelf={"center"}
          margin="auto"
          src={"/assets/icons/arrow.svg"}
          height={".75rem"}
          width={".75rem"}
        />
      </Box>
      <Text
        mb={"16px"}
        mx={"24px"}
        color={"#393360"}
        fontWeight="700"
        fontSize={"20px"}
      >
        {"Amis & Followers"}
      </Text>
      <Skeleton
        minWidth={isLoading ? "327px" : "fit-content"}
        height={isLoading ? "72px" : "-webkit-fill-available"}
        mx={isLoading ? "24px" : "inherit"}
        mb={isLoading ? "1rem" : "inherit"}
        borderRadius={isLoading ? "12px" : "inherit"}
        isLoaded={!isLoading}
      >
        {true && (
          <Flex
            direction={"column"}
            overflow={"scroll"}
            height="100%"
            pr={"20px"}
          >
            {mocks?.map((participant, index) => {
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
    </Page>
  );
};

export default QuestFriends;
