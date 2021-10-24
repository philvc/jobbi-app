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
  getGetCompaniesBySearchIdQueryKey,
  useAddCompany,
  useDeleteCompany,
  useGetCompaniesBySearchId,
  useGetCompanyById,
  useModifyCompany,
} from "../../services/companies/companies";
import { getGetNetworkByIdQueryKey } from "../../services/networks/networks";
import SearchDrawerFooter from "../footer-drawer";
import InputField from "../shared/form/input-field";

export enum EnumDrawerCompanyFields {
  LINK = "link",
  TITLE = "title",
  DESCRIPTION = "description",
}

export type TDrawerCompany = {
  link: string;
  title: string;
  description: string;
};

export default function CompanyDrawer({ isOpen, onClose }) {
  // Attributes
  const router = useRouter();
  const { questId, companyId } = router.query;
  const clientQuery = useQueryClient();

  // Put Queries
  const { mutateAsync: putCompany } = useModifyCompany();

  // Post Queries
  const { mutateAsync: postCompany } = useAddCompany();

  // Delete company
  const { mutateAsync: deleteCompany } = useDeleteCompany();

  // Get Queries
  const {
    data: companies,
    refetch: refetchCompanies,
  } = useGetCompaniesBySearchId(questId as string);
  const {
    data: company,
    isLoading,
    refetch: refetchCompany,
  } = useGetCompanyById(questId as string, companyId as string, {
    query: { enabled: !!companyId },
  });

  async function handleOnClose() {
    // remove query params
    if (companyId) {
      await router.push(`/home/quests/${questId}`);
    }

    // close drawer
    onClose();
  }

  async function handleSubmit(values: TDrawerCompany) {
    // Invalidate query
    clientQuery.invalidateQueries(
      getGetCompaniesBySearchIdQueryKey(questId as string)
    );
    if (companyId) {
      clientQuery.invalidateQueries(
        getGetNetworkByIdQueryKey(questId as string, companyId as string)
      );
    }
    // Mutation
    companyId
      ? await putCompany({
          searchId: questId as string,
          companyId: companyId as string,
          data: {
            title: values.title,
            description: values.description,
            link: values.link,
          },
        })
      : await postCompany({
          searchId: questId as string,
          data: {
            title: values.title,
            description: values.description,
            link: values.link,
          },
        });

    // Refetch Companies
    if (companyId) {
      await refetchCompany();
    }
    await refetchCompanies();

    // Close drawer
    handleOnClose();
  }

  // Delete company
  async function handleDelete() {
    if (companyId) {
      await deleteCompany({
        searchId: questId as string,
        companyId: companyId as string,
      });
      await refetchCompanies();
    }
    handleOnClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Skeleton isLoaded={companyId ? !isLoading : true}>
          <Formik<TDrawerCompany>
            initialValues={{
              link: company?.link,
              title: company?.title,
              description: company?.description,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <DrawerHeader>
                <Heading>{`Ajouter une entreprise`}</Heading>
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing={8}>
                  <Text>
                    Grâce à vous, Philippe trouvera plus vite un emploie et
                    utilisera vos ressources pour y arriver. Dès que vous
                    sauvez, Philippe en sera notifié.
                  </Text>
                  <Stack spacing={4}>
                    <InputField placeholder="Titre" name="title" />
                    <InputField
                      type="textarea"
                      placeholder="Description"
                      name="description"
                    />
                    <InputField placeholder="Lien" name="link" />
                  </Stack>
                </Stack>
              </DrawerBody>

              <SearchDrawerFooter
                handleDelete={handleDelete}
                hasDelete={!!companyId}
                onClose={handleOnClose}
              />
            </Form>
          </Formik>
        </Skeleton>
      </DrawerContent>
    </Drawer>
  );
}
