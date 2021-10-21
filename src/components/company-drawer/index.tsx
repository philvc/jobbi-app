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
  useGetCompaniesBySearchId,
  useGetCompanyById,
  useModifyCompany,
} from "../../services/companies/companies";
import { getGetNetworkByIdQueryKey } from "../../services/networks/networks";
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
            searchId: parseInt(questId as string),
            title: values.title,
            description: values.description,
            link: values.link,
          },
        });

    // Refetch Companies
    await refetchCompany();
    await refetchCompanies();

    // Close drawer
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

              <DrawerFooter>
                <Stack w="full" direction="row" spacing={4}>
                  <Button w="full" variant="outline" onClick={handleOnClose}>
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
