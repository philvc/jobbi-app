import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useSupabase } from "use-supabase";
import { COLORS } from "../../constants/colors";
import InputField from "../shared/form/input-field";

interface FriendshipForm {
  email: string;
}

export default function FriendshipDrawer({ isOpen, onClose }) {
  // Attributes
  const { auth } = useSupabase();
  const router = useRouter();
  const { questId } = router.query;

  // Handlers
  async function handleSubmit(values: FriendshipForm) {

    // Send invitation email
    await auth.signIn(
      { email:  values.email},
      {
        redirectTo: `http://localhost:3000/auth/reset-password?questId=${questId}`,
      }
    );

    onClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik<FriendshipForm>
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <DrawerHeader>
              <Heading>Ajouter un ami</Heading>
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing={8}>
                <Text>
                  C'est ici que vous pouvez ajouter un nouvel ami pour la
                  recherche d'emploi.
                </Text>
                <Stack spacing={4}>
                  <InputField placeholder="Prénom" name="firstName" />
                  <InputField placeholder="Nom" name="lastName" />
                  <InputField placeholder="E-mail" name="email" />
                </Stack>
              </Stack>
            </DrawerBody>

            <DrawerFooter justifyContent="space-between">
              <Button w="full" variant="outline" onClick={onClose} mr={4}>
                Cancel
              </Button>
              <Button
                bg={COLORS.BLUE.T500.hex}
                color={COLORS.WHITE.hex}
                w="full"
                type="submit"
              >
                Sauver
              </Button>
            </DrawerFooter>
          </Form>
        </Formik>
      </DrawerContent>
    </Drawer>
  );
}
