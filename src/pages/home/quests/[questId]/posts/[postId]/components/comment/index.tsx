import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useUser } from "../../../../../../../../contexts/user";
import {
  getGetCommentsForPostQueryKey,
  useDeteCommentById,
} from "../../../../../../../../services/comments/comments";
import { CommentForPostDto } from "../../../../../../../../types/dtos";
import EditCommentModal from "../edit-modal";

interface CommentCardProps {
  comment: CommentForPostDto;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  // Attributes
  const { id } = useUser();
  const isOwner = comment?.userId === id;
  
  const router = useRouter();
  const { questId, postId } = router.query;
  const clientQuery = useQueryClient();
  const { isOpen, onClose, onOpen } = useDisclosure();
  /*COMMENTS */
  const { mutateAsync: deleteComment } = useDeteCommentById();

  // Handlers
  async function handleDelete() {
    // Delete comment
    await deleteComment({
      searchId: questId as string,
      postId: postId as string,
      commentId: comment?.id,
    });

    // Refresh comment
    await clientQuery.invalidateQueries(
      getGetCommentsForPostQueryKey(questId as string, postId as string)
    );

    await clientQuery.refetchQueries(
      getGetCommentsForPostQueryKey(questId as string, postId as string)
    );
  }
  return (
    <Box>
      <Box>{comment.content}</Box>
      {isOwner && (
        <Flex direction={"row"}>
          <Button onClick={onOpen}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Flex>
      )}
      {isOpen && <EditCommentModal onClose={onClose} comment={comment} />}
    </Box>
  );
};

export default CommentCard;
