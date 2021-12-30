import { Box } from "@chakra-ui/react";
import QuestDetailsAddButton from "../posts/add-post";
import QuestDetailsSectionHeader from "../posts/header";

const QuestDetailsParticipants = () => {
  return (
    <Box>
      <QuestDetailsSectionHeader>Friends</QuestDetailsSectionHeader>
      <QuestDetailsAddButton>Invite friends</QuestDetailsAddButton>
    </Box>
  );
};

export default QuestDetailsParticipants;
