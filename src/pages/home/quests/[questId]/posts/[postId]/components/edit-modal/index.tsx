import { Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import {
  getGetCommentsForPostQueryKey,
  useCreateCommentForPost,
  useUpdateCommentById,
} from "../../../../../../../../services/comments/comments";
import { CommentForPostDto } from "../../../../../../../../types/dtos";

interface INewComment {
  content: string;
}

interface EditCommentModalProps {
  onClose: () => void;
  comment: CommentForPostDto;
}

const EditCommentModal = ({ onClose, comment }: EditCommentModalProps) => {
  // Attributes
  const router = useRouter();
  const { questId, postId } = router.query;
  const initialValues: INewComment = { content: comment?.content };
  const clientQuery = useQueryClient();
  /* COMMENTS */
  const { mutateAsync: editComment } = useUpdateCommentById();

  // Handlers
  async function handleSubmit(values: INewComment) {
    // Post Comment
    await editComment({
      searchId: questId as string,
      postId: postId as string,
      commentId: comment?.id,
      data: values,
    });

    // Refresh Comments for post
    await clientQuery.invalidateQueries(
      getGetCommentsForPostQueryKey(questId as string, postId as string)
    );
    await clientQuery.refetchQueries(
      getGetCommentsForPostQueryKey(questId as string, postId as string)
    );

    // Close modal
    onClose();
  }
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form>
        <Field name="content" />
        <Button type="submit">Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Form>
    </Formik>
  );
};

export default EditCommentModal;
