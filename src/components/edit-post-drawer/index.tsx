import {
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useQueryClient } from "react-query";
import { COLORS } from "../../constants/colors";
import { useUser } from "../../contexts/user";
import {
  getGetSearchPostsQueryKey,
  useGetSearchPosts,
  useUpdatePostById,
} from "../../services/searches/searches";
import { PostDTOBySearchId, UpdatePostResponseDTO } from "../../types/dtos";
import InputField from "../shared/form/input-field";

interface EditPostDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  post: PostDTOBySearchId;
}

interface UpdatePostRequestDTO {
  title: string;
  description: string;
  type: string;
  url: string;
}

const EditPostDrawer = ({ isOpen, onClose, post }: EditPostDrawerProps) => {
  // Attributes
  const queryClient = useQueryClient();
  const { id } = useUser();
  const isOwner = post?.userId === id;

  // Query
  const { mutateAsync: editPost } = useUpdatePostById();
  const { refetch } = useGetSearchPosts(post?.searchId);

  // Handler
  async function handleSubmit(values: UpdatePostRequestDTO) {
    // Upate post
    const response = await editPost({
      searchId: post?.searchId,
      postId: post?.id,
      data: {
        ...values,
      },
    });

    // handle error

    // Invalidate & refetch get search post
    if (response?.id) {
      await queryClient.invalidateQueries(
        getGetSearchPostsQueryKey(post?.searchId)
      );
      await refetch();
    }

    // Close drawer
    onClose();
  }
  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik<UpdatePostRequestDTO>
          initialValues={{
            title: post?.title,
            description: post?.description,
            type: post?.type,
            url: post?.url,
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <DrawerHeader>
              <Heading>{`Edit le post`}</Heading>
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing={8}>
                <Text>Edit un post</Text>
                <Stack spacing={4}>
                  <InputField
                    disabled={!isOwner}
                    placeholder="Titre"
                    name="title"
                  />
                  <InputField
                    disabled={!isOwner}
                    type="textarea"
                    placeholder="Description"
                    name="description"
                  />
                  <InputField
                    disabled={!isOwner}
                    placeholder="Url"
                    name="url"
                  />
                </Stack>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Stack w="full" direction="row" spacing={4}>
                <Button w="full" variant="outline" onClick={onClose}>
                  Cancel
                </Button>

                {isOwner && (
                  <Button
                    disabled={!isOwner}
                    type="submit"
                    bg={COLORS.BLUE.T500.hex}
                    color={COLORS.WHITE.hex}
                    w="full"
                  >
                    Sauver
                  </Button>
                )}
              </Stack>
            </DrawerFooter>
          </Form>
        </Formik>
      </DrawerContent>
    </Drawer>
  );
};

export default EditPostDrawer;
