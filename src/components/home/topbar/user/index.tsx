import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { COLORS } from "../../../../constants/colors";
import { useUser } from "../../../../contexts/user";
import { OldAvatar } from "../../../shared/icons/old-avatar";
import Paragraph from "../../../shared/typography/paragraph";

const TopbarUser = () => {
  // Attributes
  const user = useUser();
  const userName = user?.id ? user?.firstName ?? user?.email : "stranger";

  /**TODO: translation */
  return (
    <Flex direction={"row"} alignItems={"center"}>
      <Box borderRadius={"10px"} bgColor={"#5D44F2"}>
        <OldAvatar width={"40px"} height={"40px"} />
      </Box>
      <Flex ml={"10px"} direction={"column"} justifyContent={"center"}>
        <Paragraph size={12} weight={400} color={COLORS.GREY.T500}>
          {"Bienvenue 👋"}
        </Paragraph>
        <Heading mt={"3px"} lineHeight={"16px"} color={"#393360"} size="600">
          {`Bonjour ${userName}`}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default TopbarUser;
