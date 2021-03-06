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
import React from "react";
import { useQueryClient } from "react-query";
import { COLORS } from "../../constants/colors";
import {
  getGetCompaniesBySearchIdQueryKey,
  useAddCompany,
  useGetCompaniesBySearchId,
  useGetCompanyById,
  useModifyCompany,
} from "../../services/companies/companies";
import {
  getGetNetworkByIdQueryKey,
  getGetNetworksBySearchIdQueryKey,
  useAddNetwork,
  useDeleteNetwork,
  useGetNetworkById,
  useGetNetworksBySearchId,
  useModifyNetwork,
} from "../../services/networks/networks";
import SearchDrawerFooter from "../footer-drawer";
import InputField from "../shared/form/input-field";

export enum EnumDrawerNetworkFields {
  LINK = "link",
  FIRSTNAME = "firstName",
  LASTNAME = "lastName",
  EMAIL = "email",
  PHONENUMBER = "phoneNumber",
  DESCRIPTION = "description",
}

export type TDrawerNetwork = {
  firstName: string;
  lastName: string;
  description: string;
  email: string;
  phoneNumber: string;
  link: string;
};

export default function NetworkDrawer({ isOpen, onClose }) {
  // Attributes
  const router = useRouter();
  const { questId, networkId } = router.query;
  const clientQuery = useQueryClient();

  // Put Queries
  const { mutateAsync: putNetwork } = useModifyNetwork();

  // Post Queries
  const { mutateAsync: postNetwork } = useAddNetwork();

  // Delete Queries
  const { mutateAsync: deleteNetwork } = useDeleteNetwork();

  // Get Queries
  const { data: networks, refetch: refetchNetworks } = useGetNetworksBySearchId(
    questId as string
  );
  const {
    data: network,
    isLoading,
    refetch: refecthNetwork,
  } = useGetNetworkById(questId as string, networkId as string, {
    query: { enabled: !!networkId },
  });

  async function handleOnClose() {
    // remove query params
    if (networkId) {
      await router.push(`/home/quests/${questId}`);
    }

    // close drawer
    onClose();
  }

  async function handleSubmit(values: TDrawerNetwork) {
    // Invalidate query
    clientQuery.invalidateQueries(
      getGetNetworksBySearchIdQueryKey(questId as string)
    );
    if (networkId) {
      clientQuery.invalidateQueries(
        getGetNetworkByIdQueryKey(questId as string, networkId as string)
      );
    }
    // Mutation
    networkId
      ? await putNetwork({
          searchId: questId as string,
          networkId: networkId as string,
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            description: values.description,
            link: values.link,
          },
        })
      : await postNetwork({
          searchId: questId as string,
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            description: values.description,
            link: values.link,
          },
        });

    // Refetch Companies
    await refetchNetworks();
    if (networkId) {
      await refecthNetwork();
    }

    // Close drawer
    handleOnClose();
  }

  // Delete network
  async function handleDelete() {
    if (networkId) {
      await deleteNetwork({
        searchId: questId as string,
        networkId: networkId as string,
      });
      await refetchNetworks();
    }
    handleOnClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Skeleton isLoaded={networkId ? !isLoading : true}>
          <Formik<TDrawerNetwork>
            initialValues={{
              firstName: network?.firstName,
              lastName: network?.lastName,
              email: network?.email,
              phoneNumber: network?.phoneNumber,
              link: network?.link,
              description: network?.description,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <DrawerHeader>
                <Heading>{`Ajouter un contact`}</Heading>
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing={8}>
                  <Text>
                    Gr??ce ?? vous, Philippe trouvera plus vite un emploie et
                    utilisera vos ressources pour y arriver. D??s que vous
                    sauvez, Philippe en sera notifi??.
                  </Text>
                  <Stack spacing={4}>
                    <InputField placeholder="FirstName" name="firstName" />
                    <InputField placeholder="LastName" name="lastName" />
                    <InputField placeholder="Email" name="email" />
                    <InputField placeholder="PhoneNumber" name="phoneNumber" />
                    <InputField placeholder="Link" name="link" />
                    <InputField
                      type="textarea"
                      placeholder="Description"
                      name="description"
                    />
                  </Stack>
                </Stack>
              </DrawerBody>
              <SearchDrawerFooter
                handleDelete={handleDelete}
                hasDelete={!!networkId}
                onClose={handleOnClose}
              />
            </Form>
          </Formik>
        </Skeleton>
      </DrawerContent>
    </Drawer>
  );
}
