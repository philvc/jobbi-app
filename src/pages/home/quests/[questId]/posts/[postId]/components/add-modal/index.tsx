import { Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import {
  getGetCommentsForPostQueryKey,
  useCreateCommentForPost,
} from "../../../../../../../../services/comments/comments";

interface INewComment {
  content: string;
}

interface AddCommentModalProps {
  onClose: () => void;
}

const AddCommentModal = ({ onClose }: AddCommentModalProps) => {
  // Attributes
  const router = useRouter();
  const { questId, postId } = router.query;
  const initialValues: INewComment = { content: "" };
  const clientQuery = useQueryClient();
  /* COMMENTS */
  const { mutateAsync: createComment } = useCreateCommentForPost();

  // Handlers
  async function handleSubmit(values: INewComment) {
    // Post Comment
    await createComment({
      searchId: questId as string,
      postId: postId as string,
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

export default AddCommentModal;
