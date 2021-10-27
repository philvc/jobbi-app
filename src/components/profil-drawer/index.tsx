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
import {
  getGetUserBySubQueryKey,
  useGetUserBySub,
  useModifyUser,
} from "../../services/default/default";
import SearchDrawerFooter from "../footer-drawer";
import InputField from "../shared/form/input-field";

interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
}
export default function ProfileDrawer({ isOpen, onClose }) {
  // Attributes
  const { data: user, isLoading, refetch } = useGetUserBySub();
  const clientQuery = useQueryClient();
  const router = useRouter();

  // Mutation
  const { mutateAsync: modifyUser } = useModifyUser();

  // Function
  async function handleSubmit(values: IProfile) {
    // invalidate key
    clientQuery.invalidateQueries(getGetUserBySubQueryKey());

    // put
    await modifyUser({
      data: {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      },
    });

    // refetch user
    await refetch();

    onClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Skeleton isLoaded={!isLoading}>
          <Formik<IProfile>
            initialValues={{
              email: user?.email,
              firstName: user?.firstName,
              lastName: user?.lastName,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <DrawerHeader>
                <Heading>{`Modifier son profile`}</Heading>
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing={8}>
                  <Text>Ajoute des informations à ton profile.</Text>
                  <Stack spacing={4}>
                    <InputField placeholder="Email" name="email" />
                    <InputField placeholder="Prénom" name="firstName" />
                    <InputField placeholder="Nom" name="lastName" />
                  </Stack>
                </Stack>
              </DrawerBody>

              <SearchDrawerFooter onClose={onClose} />
            </Form>
          </Formik>
        </Skeleton>
      </DrawerContent>
    </Drawer>
  );
}
