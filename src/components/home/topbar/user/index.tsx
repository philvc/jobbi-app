import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import { COLORS } from "../../../../constants/colors";
import { useUser } from "../../../../contexts/user";
import { OldAvatar } from "../../../shared/icons/old-avatar";
import Paragraph from "../../../shared/typography/paragraph";

const TopbarUser = () => {
  // Attributes
  const { isLoading, id, firstName, email, lastName } = useUser();
  const userName = id ? firstName ?? email : "stranger";

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
        <Skeleton isLoaded={!isLoading} mt={"3px"} lineHeight={"16px"}>
          <Heading color={"#393360"} size="600">
            {`Bonjour ${userName}`}
          </Heading>
        </Skeleton>
      </Flex>
    </Flex>
  );
};

export default TopbarUser;
