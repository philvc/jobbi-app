import {
  Box,
  Button,
  useDisclosure,
  Image,
  Text,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import AddCommentDrawer from "../../../../../../components/drawers/comment-drawer";
import EditPostDrawer from "../../../../../../components/edit-post-drawer";
import AddCrossIcon from "../../../../../../components/shared/icons/add-cross";
import Page from "../../../../../../components/shared/layout/page";
import { useUser } from "../../../../../../contexts/user";
import { useGetCommentsForPost } from "../../../../../../services/comments/comments";
import { useGetPostById } from "../../../../../../services/posts/posts";
import { getAuthRedirect } from "../../../../../../utils/auth";
import CommentCard from "./components/comment";

export const getServerSideProps = getAuthRedirect;

const PostDetails = () => {
  // Attributes
  const router = useRouter();
  const { questId, postId } = router.query;
  const { id } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditPostOpen,
    onOpen: openEditPost,
    onClose: closeEditPost,
  } = useDisclosure();

  /* POST*/
  const { data: post, isLoading: postIsLoading, refetch } = useGetPostById(
    questId as string,
    postId as string,
    {
      query: { enabled: !!questId && !!postId },
    }
  );

  /* COMMENTS */
  const {
    data: comments,
    isLoading: isCommentsLoading,
    refetch: refetchComments,
  } = useGetCommentsForPost(questId as string, postId as string, {
    query: { enabled: !!postId && !!questId },
  });

  return (
    <Page overflow={"scroll"}>
      <Flex direction={"row"} justifyContent="space-between">
        <Box
          bg={"rgba(57, 51, 96, 0.1)"}
          borderRadius={".5rem"}
          width={"2rem"}
          minHeight={"2rem"}
          display="flex"
          onClick={router.back}
          mx={"24px"}
          mb={"32px"}
          mt={"4rem"}
        >
          <Image
            alignSelf={"center"}
            margin="auto"
            src={"/assets/icons/arrow.svg"}
            height={".75rem"}
            width={".75rem"}
          />
        </Box>
        {id === post?.userId && (
          <Box
            bg={"rgba(57, 51, 96, 0.1)"}
            borderRadius={".5rem"}
            width={"2rem"}
            minHeight={"2rem"}
            display="flex"
            onClick={openEditPost}
            mx={"24px"}
            mb={"32px"}
            mt={"4rem"}
          >
            <svg
              height={".75rem"}
              width={".75rem"}
              viewBox="0 0 18 18"
              fill="#393360"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "auto", alignSelf: "center" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5784 0.524709L1.32194 9.83123L0.040953 15.6884C-0.0226056 15.9774 -0.0120434 16.2777 0.0716684 16.5616C0.15538 16.8455 0.309555 17.104 0.520018 17.3132C0.73048 17.5224 0.990476 17.6756 1.2761 17.7588C1.56172 17.842 1.86381 17.8525 2.15458 17.7893L8.04713 16.516L17.3164 7.19424C17.6466 6.86249 17.8312 6.41431 17.83 5.94764C17.8288 5.48097 17.6419 5.03374 17.31 4.70367L13.0994 0.51707C12.9336 0.352488 12.7368 0.222082 12.5202 0.133347C12.3036 0.0446127 12.0715 -0.000701723 11.8373 8.21442e-06C11.603 0.000718152 11.3712 0.0474385 11.1551 0.137484C10.9391 0.22753 10.7431 0.359126 10.5784 0.524709ZM3.54574 15.8718L1.965 14.3018L2.77202 10.6181L7.25548 15.0747L3.54574 15.8718Z"
                fill="393360"
              />
            </svg>
          </Box>
        )}
      </Flex>

      <Skeleton
        isLoaded={!postIsLoading}
        mx={postIsLoading ? "24px" : "0"}
        h={postIsLoading ? "100px" : "fit-content"}
      >
        <Box mx={"24px"}>
          <Text
            mb={"16px"}
            color={"#393360"}
            fontWeight="700"
            fontSize={"20px"}
          >
            Titre
          </Text>
          <Text>{post?.title ? post?.title : "Pas de titre"}</Text>
          <Text
            mb={"14px"}
            color={"#393360"}
            fontWeight="700"
            fontSize={"20px"}
            mt={"14px"}
          >
            Description
          </Text>
          <Text>
            {post?.description ? post?.description : "Pas de description"}
          </Text>
          <Text
            mb={"14px"}
            color={"#393360"}
            fontWeight="700"
            fontSize={"20px"}
            mt={"14px"}
          >
            Lien
          </Text>
          <Text>{post?.url ? post?.url : "Pas de lien"}</Text>
        </Box>
      </Skeleton>
      <EditPostDrawer
        isOpen={isEditPostOpen}
        onClose={closeEditPost}
        post={post}
        refetchPost={refetch}
      />
      <Text
        mb={"16px"}
        mx={"24px"}
        color={"#393360"}
        fontWeight="700"
        fontSize={"20px"}
        mt={"16px"}
      >
        Commentaires
      </Text>
      <Flex direction={"row"} overflow={"scroll"} pr={"20px"} pb={"50px"}>
        {comments?.map((comment, index) => {
          if (index === 0) {
            return (
              <Box key={post?.id} ml={"24px"} mb={"1rem"}>
                <CommentCard key={comment?.id} comment={comment} />
              </Box>
            );
          }
          return (
            <Box key={post?.id} ml={"20px"} mb={"1rem"}>
              <CommentCard key={comment?.id} comment={comment} />
            </Box>
          );
        })}
      </Flex>
      {isOpen && <AddCommentDrawer isOpen={isOpen} onClose={onClose} />}

      <Box
        justifyContent={"center"}
        bgColor={"#6772E5"}
        borderRadius={"12px"}
        mx={"1.5rem"}
        height={"48px"}
        display={"flex"}
        alignItems={"center"}
        onClick={onOpen}
      >
        <Flex alignItems={"center"}>
          <AddCrossIcon width={"21px"} height={"20px"} />
          <Text ml="4px" color="white" fontWeight={"500"} fontSize={"16px"}>
            Ajouter un commentaire
          </Text>
        </Flex>
      </Box>
    </Page>
  );
};

export default PostDetails;
