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
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { COLORS } from "../../../constants/colors";
import {
  getGetCommentsForPostQueryKey,
  useCreateCommentForPost,
} from "../../../services/comments/comments";
import InputField from "../../shared/form/input-field";

interface INewComment {
  content: string;
}

interface AddCommentModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const AddCommentDrawer = ({ onClose, isOpen }: AddCommentModalProps) => {
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
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <DrawerHeader>Nouveau commentaire</DrawerHeader>
            <DrawerBody>
              <InputField
                name="content"
                type={"textarea"}
                placeholder="Message"
              />
            </DrawerBody>
            <DrawerFooter>
              <Stack w="full" direction="row" spacing={4}>
                <Button w="full" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  bg={COLORS.BLUE.T500.hex}
                  color={COLORS.WHITE.hex}
                  w="full"
                  type="submit"
                >
                  Save
                </Button>
              </Stack>
            </DrawerFooter>
          </Form>
        </Formik>
      </DrawerContent>
    </Drawer>
  );
};

export default AddCommentDrawer;
