import { Box, Flex, Heading, Skeleton, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import AddPostDrawer from "../../../../../../components/add-post-drawer";
import { EnumSearchRole } from "../../../../../../constants/enums";
import { useSearchRoleContext } from "../../../../../../contexts/role";
import { useGetSearchPosts } from "../../../../../../services/searches/searches";
import QuestDetailsAddButton from "./add-post";
import QuestPostCard from "./card";
import QuestDetailsSectionHeader from "./header";

const QuestPosts = () => {
  // Attributes
  const router = useRouter();
  const searchId = router.query.questId as string;
  const { role } = useSearchRoleContext();
  const {
    isOpen: isNewPostOpen,
    onOpen: onNewPostOpen,
    onClose: onNewPostClose,
  } = useDisclosure();

  // Queries
  const { data: posts, isLoading } = useGetSearchPosts(searchId);
  const hasPosts = posts && posts?.length !== 0;

  return (
    <Box>
      <QuestDetailsSectionHeader>Fil d'actualités</QuestDetailsSectionHeader>
      <Skeleton
        width={isLoading ? "280px" : "initial"}
        borderRadius={isLoading ? "0.75rem" : "initial"}
        height={isLoading ? "141px" : "initial"}
        ml={isLoading ? "1.5rem" : "initial"}
        isLoaded={!isLoading}
      >
        {hasPosts && (
          <Flex direction={"row"} overflow={"scroll"} pr={"20px"}>
            {posts?.map((post, index) => {
              if (index === 0) {
                return (
                  <Box key={post?.id} ml={"1.5rem"} mb={"1rem"}>
                    <QuestPostCard post={post} />
                  </Box>
                );
              } else {
                return (
                  <Box key={post?.id} ml={"20px"} mb={"1rem"}>
                    <QuestPostCard post={post} />
                  </Box>
                );
              }
            })}
          </Flex>
        )}
        {/* {!hasPosts && (
          <SharedQuestBox ml={"24px"} mb={"47px"}>
            <PlaceholderSharedQuest />
          </SharedQuestBox>
        )} */}
        {role !== EnumSearchRole.VISITOR && role !== EnumSearchRole.UNKNOWN && (
          <QuestDetailsAddButton onClick={onNewPostOpen}>
            Add a post
          </QuestDetailsAddButton>
        )}
        <AddPostDrawer onClose={onNewPostClose} isOpen={isNewPostOpen} />
      </Skeleton>
    </Box>
  );
};

export default QuestPosts;
