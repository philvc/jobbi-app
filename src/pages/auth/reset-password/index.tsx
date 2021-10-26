import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import UserDTO from "../../../types/UserDTO";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";
import { Button, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  // Attributes
  const router = useRouter();
  const { auth } = useSupabase();
  const { t } = useTranslation();

  // Function
  async function handleSubmit(data: { password: string }) {
    const resetResp = await auth.api.updateUser(
      localStorage.getItem("ACCESS_TOKEN"),
      { password: data.password }
    );
    if (resetResp.error) {
      return;
    }
    router.push("/home");
  }

  return (
    <Formik<{ password: string }>
      initialValues={{ password: "" }}
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
            <Heading size="900">Modifier mot</Heading>
            <Heading size="900">de passe</Heading>
            <Heading mt={2} size="300" color={"#818080"}>
              Entrez votre nouveau mot de passe.
            </Heading>
            <Stack mt={8} spacing={4}>
              <InputField placeholder="Nouveau mot de passe" name="password" />
            </Stack>
            <Button marginTop={"36px"} type="submit" backgroundColor="#00CC9D">
              Changer mot de passe
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
