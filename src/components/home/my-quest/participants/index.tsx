import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { OldAvatar } from "../../../shared/icons/old-avatar";

interface Participant {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  id?: string;
}

interface MyQuestParticipantsProps {
  participants: Participant[] | undefined;
}

const MyQuestParticipants = ({ participants }: MyQuestParticipantsProps) => {
  // Handlers
  // random color for card icon
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };
  return (
    <Flex>
      {participants &&
        participants.map((participant, index, list) => {
          if (index < 2) {
            return (
              <OldAvatar
                style={{
                  borderRadius: "100%",
                  marginLeft: index !== 0 ? "-18px" : 0,
                  borderWidth: "3px",
                  borderColor: "#6772E5",
                  borderStyle: "solid",
                  background: random_hex_color_code(),
                }}
                width={"40px"}
                height={"40px"}
              />
            );
          }
          if (index === 2) {
            return (
              <Box
                position={"relative"}
                style={{
                  borderRadius: "100%",
                  marginLeft: "-18px",
                  borderWidth: "3px",
                  borderColor: "#6772E5",
                  borderStyle: "solid",
                  background: random_hex_color_code(),
                }}
                height={"40px"}
                width={"40px"}
              >
                <OldAvatar />
                <Flex
                  top={0}
                  position={"absolute"}
                  bgColor={"rgba(0, 0, 0, 0.6)"}
                  width={"100%"}
                  height={"100%"}
                  borderRadius={"1000px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text fontSize={"14px"} fontWeight={"bold"} color={"white"}>
                    {"+ " + (list.length - 3)}
                  </Text>
                </Flex>
              </Box>
            );
          }
        })}
    </Flex>
  );
};

export default MyQuestParticipants;
