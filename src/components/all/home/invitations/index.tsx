import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useGetFriendshipsBySearchId } from "../../../../services/friendships/friendships";
import { capitalize } from "../../../../utils/capitalize";

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
        >
          <Flex
            direction="column"
            justifyContent="space-between"
            w="100%"
            h="100%"
          >
            <Box>
              <Flex>
                <Heading id="title" noOfLines={2} size="600">
                  {capitalize("'sdfsdf")}
                </Heading>
              </Flex>
              <Text mt={2} size="100" noOfLines={3}>
                {"sfsdqfq"}
              </Text>
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
