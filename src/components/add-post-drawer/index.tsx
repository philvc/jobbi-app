import {
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { COLORS } from "../../constants/colors";
import {
  getGetSearchParticipantsQueryKey,
  getGetSearchPostsQueryKey,
  getGetSearchRoleQueryKey,
  useAddPostForSearch,
  useGetSearchParticipants,
  useGetSearchPosts,
} from "../../services/searches/searches";
import InputField from "../shared/form/input-field";

interface AddPostRequestDTO {
  title: string;
  description: string;
  type: string;
  url: string;
}

interface AddPostDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPostDrawer = ({ isOpen, onClose }: AddPostDrawerProps) => {
  // Attributes
  const router = useRouter();
  const searchId = router.query?.questId as string;
  const clientQuery = useQueryClient();
  const { refetch: refetchPosts } = useGetSearchPosts(searchId);
  const {refetch: refetchSearchParticipants} = useGetSearchParticipants(searchId)

  // Queries
  const { mutateAsync: addPost } = useAddPostForSearch();

  // Handlers
  async function handleSubmit(values: AddPostRequestDTO) {
    // post query
    const response = await addPost({
      searchId: searchId,
      data: {
        ...values,
      },
    });

    // handle error

    if (response?.id) {
      // invalidate get posts by search id
      await clientQuery.invalidateQueries(getGetSearchPostsQueryKey(searchId));
      await clientQuery.invalidateQueries(getGetSearchParticipantsQueryKey(searchId));

      // refetch get posts by search id
      await refetchPosts();
      await refetchSearchParticipants();
    }

    // toast success

    // close drawer
    onClose();
  }
  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik<AddPostRequestDTO>
          initialValues={{
            title: "",
            description: "",
            type: "",
            url: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <DrawerHeader>
              <Heading>{`Créé un nouveau post`}</Heading>
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing={8}>
                <Text>Créé un post</Text>
                <Stack spacing={4}>
                  <InputField placeholder="Type" name="type" />
                  <InputField placeholder="Titre" name="title" />
                  <InputField
                    type="textarea"
                    placeholder="Description"
                    name="description"
                  />
                  <InputField placeholder="Url" name="url" />
                </Stack>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Stack w="full" direction="row" spacing={4}>
                <Button w="full" variant="outline" onClick={onClose}>
                  Cancel
                </Button>

                <Button
                  type="submit"
                  bg={COLORS.BLUE.T500.hex}
                  color={COLORS.WHITE.hex}
                  w="full"
                >
                  Sauver
                </Button>
              </Stack>
            </DrawerFooter>
          </Form>
        </Formik>
      </DrawerContent>
    </Drawer>
  );
};

export default AddPostDrawer;
