import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Flex, Stack } from "@chakra-ui/layout";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik } from "formik";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";
import { Button, Heading, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";
import { ACCESS_TOKEN } from "../../../types/constant";

const cookies = new Cookies();
interface ResetPasswordForm {
  password: string;
}

export default function SignIn() {
  // Attributes
  const router = useRouter();
  const { auth } = useSupabase();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const access_token = router.asPath
    ?.split("#access_token=")[1]
    ?.split("&expires_in=")[0];


  if (access_token) {
    cookies.set(ACCESS_TOKEN, access_token, { path: "/" });
  }

  async function handleSubmit(data: ResetPasswordForm) {
    setIsLoading(true);
    // update user
    try {
      await auth.api.updateUser(cookies.get(ACCESS_TOKEN), {
        password: data.password,
      });
    } catch (e) {
      setIsLoading(false);
      toast({
        title: "Une erreur est survenue.",
      });
    }
    setIsLoading(false);
    // redirect to home
    router.push("/home");
  }

  return (
    <Formik<ResetPasswordForm>
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
            <Button isLoading={isLoading} marginTop={"36px"} type="submit">
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
