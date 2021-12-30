import { Box, Flex, Text } from "@chakra-ui/react";
import { capitalize } from "lodash";
import { useRouter } from "next/router";
import { OldAvatar } from "../../../../../../components/shared/icons/old-avatar";
import { friendTypeInvited } from "../../../../../../constants/contant";
import { useUser } from "../../../../../../contexts/user";
import { useGetSearchById } from "../../../../../../services/searches/searches";
import { ParticipantDTOForSearchById } from "../../../../../../types/dtos";

interface QuestDetailsFriendCardProps {
  participant: ParticipantDTOForSearchById;
}

const QuestDetailsFriendCard = ({
  participant,
}: QuestDetailsFriendCardProps) => {
  // Attributes
  const { id, email } = useUser();
  const router = useRouter();
  const searchId = router.query?.questId as string;
  const { data: quest, isLoading, refetch } = useGetSearchById(searchId);
  const isOwner = quest?.userId === id;

  return (
    <Box
      bgColor={"white"}
      p="1rem"
      borderRadius={"12px"}
      boxShadow={
        "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
      }
      maxH={"72px"}
    >
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Flex direction={"row"} alignItems={"center"}>
          <Box
            width={"40px"}
            height={"40px"}
            bgColor={"#6772E5"}
            borderRadius={"8px"}
          >
            <OldAvatar />
          </Box>
          <Flex
            ml="8px"
            justifyContent={"center"}
            direction={"column"}
            alignItems={"flex-start"}
          >
            <Text
              height={"16px"}
              fontWeight={"bold"}
              fontSize={"16px"}
              color={"#393360"}
            >
              {`${capitalize(participant?.firstName)} ${capitalize(
                participant?.lastName
              )} `}
            </Text>
            <Text
              marginY={"4px"}
              height={"12px"}
              color="#8F95B2"
              fontSize={"12px"}
            >
              {`${
                participant?.type === friendTypeInvited ? "Friend" : "Follower"
              } - ${participant?.numberOfPosts} ${
                participant?.numberOfPosts > 1 ? "posts" : "post"
              }`}
            </Text>
          </Flex>
        </Flex>
        {isOwner && (
          <Box
            px="18px"
            py="8px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"8px"}
            border="1.5px solid #8F95B2"
            boxSizing="border-box"
          >
            <Text fontSize={"14px"} color="#8F95B2">
              Unfollow
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default QuestDetailsFriendCard;
