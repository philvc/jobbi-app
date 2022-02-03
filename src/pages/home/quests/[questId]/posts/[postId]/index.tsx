import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { Field } from "formik";
import { useRouter } from "next/router";
import {
  useCreateCommentForPost,
  useGetCommentsForPost,
} from "../../../../../../services/comments/comments";
import AddCommentModal from "./components/add-modal";
import CommentCard from "./components/comment";

const PostDetails = () => {
  // Attributes
  const router = useRouter();
  const { questId, postId } = router.query;

  /* COMMENTS */
  const {
    data: comments,
    isLoading: isCommentsLoading,
    refetch: refetchComments,
  } = useGetCommentsForPost(questId as string, postId as string);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={router.back}>Back</Button>
      <Heading>Post details</Heading>
      {comments?.map((comment) => {
        return <CommentCard key={comment?.id} comment={comment} />;
      })}
      {isOpen && <AddCommentModal onClose={onClose} />}
      <Button onClick={onOpen}>Add comment</Button>
    </Box>
  );
};

export default PostDetails;
