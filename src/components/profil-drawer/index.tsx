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
import { useUser } from "../../contexts/user";
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
  const { email, firstName, lastName, refetchUser } = useUser();

  // Mutation
  const { mutateAsync: modifyUser } = useModifyUser();

  // Function
  async function handleSubmit(values: IProfile) {
    // put
    await modifyUser({
      data: {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      },
    });

    // refetch user
    await refetchUser();

    onClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik<IProfile>
          initialValues={{
            email: email,
            firstName: firstName,
            lastName: lastName,
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
                  <InputField
                    disabled={true}
                    placeholder="Email"
                    name="email"
                  />
                  <InputField placeholder="Prénom" name="firstName" />
                  <InputField placeholder="Nom" name="lastName" />
                </Stack>
              </Stack>
            </DrawerBody>

            <SearchDrawerFooter onClose={onClose} />
          </Form>
        </Formik>
      </DrawerContent>
    </Drawer>
  );
}
