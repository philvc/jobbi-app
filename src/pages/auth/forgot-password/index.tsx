import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {  Flex, Heading, Stack } from "@chakra-ui/layout";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik } from "formik";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";
import { Button, useToast } from "@chakra-ui/react";
import { COLOR_SCHEME } from "../../../types/constant";

export default function SignIn() {
  // Attributes
  const router = useRouter();
  const { auth } = useSupabase();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Function
  async function handleSubmit(data: { email: string }) {
    // Loading state
    setIsLoading(true);

    // Send reset password email
    try {
      await auth.api.resetPasswordForEmail(data.email, {
        redirectTo: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/reset-password`,
      });
    } catch (e) {
      // Show error message
      toast({
        title: "Oups, Il y a eu une erreur.",
      });
    } finally {
      setIsLoading(false);
    }

    // Redirect to success page
    router.push("/auth/forgot-password-success");
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
            <Button
              marginTop={"36px"}
              type="submit"
              colorScheme={COLOR_SCHEME.PRIMARY}
              isLoading={isLoading}
            >
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
