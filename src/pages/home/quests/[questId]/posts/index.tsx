import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useGetSearchPosts } from "../../../../../services/searches/searches";
import QuestPostCard from "./card";
import QuestPostsHeader from "./header";

const QuestPosts = () => {
  // Attributes
  const router = useRouter();
  const searchId = router.query.questId as string;

  // Queries
  const { data: posts, isLoading } = useGetSearchPosts(searchId);
  const hasPosts = posts && posts?.length !== 0;

  return (
    <Box>
      <QuestPostsHeader />
      <Skeleton isLoaded={!isLoading}>
        {hasPosts && (
          <Flex direction={"row"} overflow={"scroll"} pr={"20px"}>
            {posts.map((post, index) => {
              if (index === 0) {
                return (
                  <Box key={post?.id} ml={"1.5rem"} mb={"3.25rem"}>
                    <QuestPostCard post={post} />
                  </Box>
                );
              } else {
                return (
                  <Box key={post?.id} ml={"20px"} mb={"3.25rem"}>
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
      </Skeleton>
    </Box>
  );
};

export default QuestPosts;
