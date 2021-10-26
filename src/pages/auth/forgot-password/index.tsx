import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import UserDTO from "../../../types/UserDTO";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";
import { Button } from "@chakra-ui/react";

export default function SignIn() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();
  const { auth } = useSupabase();

  // Function
  function handleSubmit(data: { email: string }) {
    auth.api.resetPasswordForEmail(data.email);
  }

  return (
    <Formik<{ email: string }>
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Page p={4}>
          <ArrowDown
            onClick={() => router.push("/auth/sign-in")}
            style={{ marginTop: 50 }}
            height="16px"
            width="16px"
            transform="rotate(90)"
          />
          <Flex marginTop={20} flexGrow={1} direction="column">
            <Heading size="900">Mot de passe</Heading>
            <Heading size="900">Oublié 🤔</Heading>
            <Heading mt={2} size="300" color={"#818080"}>
              Entrez votre adresse e-mail pour récupérer votre mot de passe.
            </Heading>
            <Stack mt={8} spacing={4}>
              <InputField placeholder="E-mail" name="email" />
            </Stack>
            <Button marginTop={"36px"} type="submit" backgroundColor="#00CC9D">
              Envoyer le lien
            </Button>
          </Flex>
          <ArrowDown
            height="16px"
            width="16px"
            transform="rotate(90)"
            visibility="hidden"
            style={{ marginBottom: "50px" }}
          />
        </Page>
      </Form>
    </Formik>
  );
}
