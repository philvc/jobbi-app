import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import InputField from "../../../../../../../../components/shared/form/input-field";
import { COLORS } from "../../../../../../../../constants/colors";
import { useUser } from "../../../../../../../../contexts/user";
import {
  getGetCommentsForPostQueryKey,
  useDeteCommentById,
  useUpdateCommentById,
} from "../../../../../../../../services/comments/comments";
import { CommentForPostDto } from "../../../../../../../../types/dtos";

interface INewComment {
  content: string;
}

interface EditCommentModalProps {
  onClose: () => void;
  comment: CommentForPostDto;
  isOpen: boolean;
}

const EditCommentModal = ({
  onClose,
  comment,
  isOpen,
}: EditCommentModalProps) => {
  // Attributes
  const router = useRouter();
  const { questId, postId } = router.query;
  const initialValues: INewComment = { content: comment?.content };
  const clientQuery = useQueryClient();
  const { id } = useUser();
  const isOwner = comment?.userId === id;
  /* COMMENTS */
  const { mutateAsync: editComment } = useUpdateCommentById();
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
    <Drawer size={"full"} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <DrawerHeader>Commentaire</DrawerHeader>
            <DrawerBody>
              <InputField name="content" type={"textarea"} />
            </DrawerBody>
            <DrawerFooter>
              <Stack w="full" direction="row" spacing={4}>
                {isOwner && (
                  <>
                    <Button
                      bg={COLORS.BLUE.T500.hex}
                      color={COLORS.WHITE.hex}
                      w="full"
                      type="submit"
                    >
                      Enregistrer
                    </Button>
                    <Button
                      onClick={handleDelete}
                      bg={"red"}
                      color={COLORS.WHITE.hex}
                      w="full"
                    >
                      Supprimer
                    </Button>
                  </>
                )}
                <Button w="full" variant="outline" onClick={onClose}>
                  Retour
                </Button>
              </Stack>
            </DrawerFooter>
          </Form>
        </Formik>
      </DrawerContent>
    </Drawer>
  );
};

export default EditCommentModal;
