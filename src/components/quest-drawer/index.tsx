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
import { Box, Switch } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { COLORS } from "../../constants/colors";
import { PrivateQuest, PublicQuest } from "../../constants/contant";
import {
  getGetMySearchQueryKey,
  useGetMySearch,
  useGetSearchById,
  useModifySearch,
} from "../../services/searches/searches";
import { PutSearchRequestDTO } from "../../types/dtos";
import { SearchDTO } from "../../types/dtos/searchDTO";
import InputField from "../shared/form/input-field";

export enum EnumDrawerSearchFields {
  TITLE = "title",
  DESCRIPTION = "description",
}

export type SearchDrawerProps = {
  onClose: () => void;
  isOpen: boolean;
  quest: SearchDTO;
};

export default function SearchDrawer({
  isOpen,
  onClose,
  quest,
}: SearchDrawerProps) {
  // Attributes
  const clientQuery = useQueryClient();
  const [isPrivate, setIsPrivate] = useState(quest?.type === "private");

  // Queries
  const { mutateAsync: modifySearch } = useModifySearch();
  const { refetch } = useGetSearchById(quest?.id, {
    query: { enabled: !!quest?.id },
  });

  // Handlers
  function handleSwitchChange(e: ChangeEvent<HTMLInputElement>) {
    setIsPrivate(e.target.checked);
  }

  async function handleSubmit(values: PutSearchRequestDTO) {
    // Invalidate query
    await clientQuery.invalidateQueries(getGetMySearchQueryKey());

    // Mutation
    await modifySearch({
      searchId: quest?.id as string,
      data: {
        title: values.title,
        description: values.description,
        tags: [],
        sector: values.sector,
        type: isPrivate ? PrivateQuest : PublicQuest,
      },
    });

    // Refetch quest
    await refetch();

    // Close drawer
    onClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik<PutSearchRequestDTO>
          initialValues={{
            title: quest?.title,
            description: quest?.description,
            sector: quest?.sector,
            tags: quest?.tags,
            type: quest?.type,
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <DrawerHeader>
              <Heading>{`Cr???? une nouvelle recherche d'emploi`}</Heading>
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing={8}>
                <Text>Modifie ta qu??te</Text>
                <Stack spacing={4}>
                  <InputField placeholder="Titre" name="title" />
                  <InputField
                    type="textarea"
                    placeholder="Description"
                    name="description"
                  />
                  <InputField placeholder="Sector" name="sector" />
                  <Box mb={".25rem"}>Is private ?</Box>
                  <Switch
                    onChange={handleSwitchChange}
                    defaultChecked={isPrivate}
                    isChecked={isPrivate}
                  />
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
}
