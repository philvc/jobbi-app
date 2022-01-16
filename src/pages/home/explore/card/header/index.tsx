import { Box, Flex, Heading } from "@chakra-ui/react";
import { OldAvatar } from "../../../../../components/shared/icons/old-avatar";
import { PublicSearchDto } from "../../../../../types/dtos";
import { capitalize } from "../../../../../utils/capitalize";

interface PublicQuestCardHeaderProps {
  quest: PublicSearchDto;
}

const PublicQuestCardHeader = ({ quest }: PublicQuestCardHeaderProps) => {
  return (
    <Flex direction={"row"} alignItems={"center"}>
      <Box borderRadius={"10px"} bgColor={"#5D44F2"}>
        <OldAvatar width={"40px"} height={"40px"} />
      </Box>
      <Flex ml={"10px"} direction={"column"} justifyContent={"center"}>
        <Heading mt={"3px"} lineHeight={"16px"} color={"#393360"} size="600">
          {`${capitalize(quest?.firstName)} ${capitalize(quest?.lastName)}`}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default PublicQuestCardHeader;
