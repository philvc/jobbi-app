import { Button } from "@chakra-ui/button";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Skeleton } from "@chakra-ui/skeleton";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { COLORS } from "../../constants/colors";
import {
  getGetSearchByIdQueryKey,
  getGetSearchesQueryKey,
  useAddSearch,
  useGetSearchById,
  useGetSearches,
  useModifySearch,
} from "../../services/searches/searches";
import InputField from "../shared/form/input-field";

export enum EnumDrawerSearchFields {
  TITLE = "title",
  DESCRIPTION = "description",
}

export type TDrawerSearch = {
  title: string;
  description: string;
};

export default function SearchDrawer({ isOpen, onClose }) {
  // Attributes
  const router = useRouter();
  const { questId } = router.query;
  const clientQuery = useQueryClient();

  // Put Queries
  const { mutateAsync: modifySearch } = useModifySearch();

  // Post Queries
  const { mutateAsync: createSearch } = useAddSearch();

  // Get Queries
  const {
    data: search,
    refetch: refetchSearch,
    isLoading,
  } = useGetSearchById(questId as string, { query: { enabled: !!questId } });

  const { refetch: refetchAllSearches } = useGetSearches();

  async function handleSubmit(values: TDrawerSearch) {
    // Invalidate query
    clientQuery.invalidateQueries(getGetSearchesQueryKey());
    if (questId) {
      clientQuery.invalidateQueries(
        getGetSearchByIdQueryKey(questId as string)
      );
    }
    // Mutation
    const response = questId
      ? await modifySearch({
          searchId: questId as string,
          data: {
            title: values.title,
            description: values.description,
          },
        })
      : await createSearch({
          data: {
            title: values.title,
            description: values.description,
          },
        });

    // Refetch Companies
    if (questId) {
      await refetchSearch();
    }
    await refetchAllSearches();

    if (!questId && response && response?.id) {
      await router.push(`/home/quests/${response.id}`);
    }

    // Close drawer
    onClose();
  }

  async function handleClose() {
    if (questId) {
      await router.push(`/home/quests/${questId}`);
    }

    onClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Skeleton isLoaded={questId ? !isLoading : true}>
          <Formik<TDrawerSearch>
            initialValues={{
              title: search?.title,
              description: search?.description,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <DrawerHeader>
                <Heading>{`Créé une nouvelle recherche d'emploi`}</Heading>
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing={8}>
                  <Text>
                    {questId
                      ? "Modifie ta recherche d'emploi"
                      : "Créez une nouvelle recherche d'emploi. Ajoute un titre et une description et ensuite invite des amis à te rejoindre dans ta recherche. Tes amis seront invités à t'ajouter des offres, des contacts ou encore des entreprises qui pourraient t'intéresser."}
                  </Text>
                  <Stack spacing={4}>
                    <InputField placeholder="Titre" name="title" />
                    <InputField
                      type="textarea"
                      placeholder="Description"
                      name="description"
                    />
                  </Stack>
                </Stack>
              </DrawerBody>

              <DrawerFooter>
                <Stack w="full" direction="row" spacing={4}>
                  <Button w="full" variant="outline" onClick={handleClose}>
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
        </Skeleton>
      </DrawerContent>
    </Drawer>
  );
}
