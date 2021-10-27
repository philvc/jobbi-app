import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useGetFriendshipsBySearchId } from "../../../../services/friendships/friendships";
import { capitalize } from "../../../../utils/capitalize";
import Wallet from "../../../shared/icons/wallet";

const Invitations = () => {
  // Attributes
  const router = useRouter();
  const { questId } = router.query;
  const {
    data: friendships,
    isLoading: friendshipIsLoading,
  } = useGetFriendshipsBySearchId(questId as string);

  return (
    <Box pl={4}>
      <Heading size="800">Mes invitations</Heading>
      <Stack direction="row" spacing={2} mt={4}>
        <Box
          onClick={() => router.push(`/home/quests/${questId}`)}
          cursor="pointer"
          backgroundColor="white"
          borderRadius={"16px"}
          boxShadow="5px 3px 12px rgba(46, 30, 122, 0.04)"
          px={2}
          py={4}
          minW={"185px"}
          minH={"177px"}
          width={"185px"}
          height={"177px"}
        >
          <Flex
            direction="column"
            justifyContent="space-between"
            w="100%"
            h="100%"
          >
            <Box>
              <Flex alignItems="center">
                <Avatar
                  color={"white"}
                  backgroundColor={"#00CC9D"}
                  width="25px"
                  height="25px"
                  size="xs"
                  fontWeight="700"
                  name="phi s"
                  mr={2}
                />
                <Heading id="title" noOfLines={2} size="600">
                  {capitalize("'sdfsdf")}
                </Heading>
              </Flex>
            </Box>
            <Box
              py={2}
              px={2}
              h={"50px"}
              borderRadius={"16px"}
              backgroundColor="#EBF3F5"
            >
              <Flex alignItems="center">
                {/* <Wallet
                  width="30px"
                  height="30px"
                  style={{
                    marginLeft: "8px",
                    marginRight: "4px",
                  }}
                /> */}
                <Text size="200" fontWeight="500" noOfLines={2}>
                  {"sfsdqfq sdfkljs msqldjfksq m qsjkf mlqskjdf mslqjfqsl mk"}
                </Text>
              </Flex>
            </Box>
            <Stack direction="row" spacing={4}>
              <Button
                fontWeight="700"
                fontSize="16px"
                backgroundColor="#00CC9D"
              >
                Accept
              </Button>
              <Button fontWeight="700" fontSize="16px" color="#293352">
                Decline
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Invitations;
