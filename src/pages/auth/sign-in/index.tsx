import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik,  } from "formik";
import { useSupabase } from "use-supabase";
import { useToast } from "@chakra-ui/toast";
import { FONT_SIZES } from "../../../constants/typography";
import { COLORS } from "../../../constants/colors";
import { Button, Heading } from "@chakra-ui/react";
import Cookies from "universal-cookie";
import {  COLOR_SCHEME } from "../../../types/constant";
import { useUser } from "../../../contexts/user";
const cookies = new Cookies();
interface SignInForm {
  email: string;
  password: string;
}

export default function SignIn() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();
  const { auth } = useSupabase();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { refetchUser } = useUser();

  // Function
  async function handleSubmit(data: SignInForm) {
    // Load state
    setIsLoading(true);

    // Call supabase signin
    const signInResponse = await auth.signIn({
      email: data.email,
      password: data.password,
    });

    if (signInResponse.error) {
      toast({ title: "Mauvaise combinaison" });
      setIsLoading(false);
      return;
    }
    
    cookies.set("ACCESS_TOKEN", signInResponse.data.access_token, {
      path: "/",
    });

    await refetchUser();

    setIsLoading(false);
    router.push("/home");
  }

  function handleSignUp() {
    router.push("/auth/sign-up");
  }

  function handleForgotPassword() {
    router.push("/auth/forgot-password");
  }

  return (
    <Formik<SignInForm>
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Page p={4}>
          <Heading pt={"43px"} size="800">
            Jobbi
          </Heading>
          <Flex
            justifyContent="center"
            direction="column"
            alignItems="center"
            flexGrow={1}
          >
            <Heading size="1000" mb={"52px"}>
              Bienvenue 👋
            </Heading>
            <Stack spacing={4} width="full">
              <InputField placeholder="E-mail" name="email" />
              <Stack>
                <InputField
                  type={"password"}
                  placeholder="Mot de passe"
                  name="password"
                />
                <Text
                  onClick={handleForgotPassword}
                  fontSize={FONT_SIZES.SMALL}
                  align="right"
                  color={COLORS.GREY.T500.hex}
                >
                  Mot de passe oublié
                </Text>
              </Stack>
              <Button
                type="submit"
                variant={"solid"}
                isLoading={isLoading}
                colorScheme={COLOR_SCHEME.PRIMARY}
              >
                Se connecter
              </Button>
            </Stack>
            <Flex onClick={handleSignUp} justify="center" mt={4}>
              <Text>S'inscrire</Text>
            </Flex>
          </Flex>
          <Heading pb={"43px"} visibility="hidden" size="800">
            Jobbi
          </Heading>
        </Page>
      </Form>
    </Formik>
  );
}
