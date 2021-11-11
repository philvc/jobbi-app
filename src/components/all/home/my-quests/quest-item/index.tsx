import { Avatar, Box, BoxProps, Flex, Heading, Text } from "@chakra-ui/react";
import { capitalize } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useGetFriendshipsBySearchId } from "../../../../../services/friendships/friendships";
import { SearchDTO } from "../../../../../types/dtos";
import PinsButton from "../../../../shared/icons/pins-button";

type QuestItemProps = BoxProps & {
  quest: SearchDTO;
};

export const QuestItem = ({ quest, ...rest }: QuestItemProps) => {
  // Attributes
  const router = useRouter();
  const [titleHeight, setTitleHeight] = useState<number>();
  const { data: friendships, isLoading } = useGetFriendshipsBySearchId(
    quest?.id ?? "",
    { status: 1 },
    { query: { enabled: !!quest?.id } }
  );

  // random color for card icon
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };

  // Effect
  useEffect(() => {
    const height = document.getElementById("title").clientWidth;
    setTitleHeight(height);
  }, []);

  return (
    <Box
      onClick={() => router.push(`/home/quests/${quest.id}`)}
      cursor="pointer"
      backgroundColor="white"
      borderRadius={"16px"}
      boxShadow="5px 3px 12px rgba(46, 30, 122, 0.04)"
      px={2}
      py={4}
      minW={"185px"}
      w={"185px"}
      h={"177px"}
      {...rest}
    >
      <Flex direction="column" justifyContent="space-between" w="100%" h="100%">
        <Box>
          <Flex alignItems={titleHeight > 24 ? "" : "center"}>
            <PinsButton
              style={{ marginRight: "8px" }}
              fill={random_hex_color_code()}
            />
            <Heading lineHeight="normal" id="title" noOfLines={2} size="600">
              {capitalize(quest?.title)}
            </Heading>
          </Flex>
          <Text mt={2} size="100" noOfLines={3}>
            {quest?.description}
          </Text>
        </Box>
        <Box>
          {friendships &&
            friendships.map((friendship, index, list) => {
              if (index < 5) {
                return (
                  <Avatar
                    key={friendship.id}
                    color={"white"}
                    backgroundColor={"#00CC9D"}
                    name={`${friendship.firstName} ${friendship.lastName}`}
                    width="20px"
                    height="20px"
                    size="xs"
                    fontWeight="700"
                    ml={index != 0 ? "-6px" : 0}
                    boxShadow="0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)"
                  />
                );
              }
              if (index === 5) {
                return (
                  <Avatar
                    key={friendship.id}
                    color={"black"}
                    backgroundColor={"white"}
                    name={`+ ${list.length - 1}`}
                    width="20px"
                    height="20px"
                    size="xs"
                    fontWeight="700"
                    ml={"-6px"}
                    boxShadow="0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)"
                  />
                );
              }
            })}
        </Box>
      </Flex>
    </Box>
  );
};
