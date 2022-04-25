import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Paragraph from "../../../components/shared/typography/paragraph";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import { useSupabase } from "use-supabase";
import { useToast } from "@chakra-ui/toast";
import { FONT_SIZES } from "../../../constants/typography";
import { COLORS } from "../../../constants/colors";
import { Button, Heading } from "@chakra-ui/react";
import Image from "next/image";

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

  // Function
  async function handleSubmit(data: SignInForm) {
    const signInResponse = await auth.signIn({
      email: data.email,
      password: data.password,
    });

    if (signInResponse.error) {
      toast({ title: "Mauvaise combinaison" });
      return;
    }

    localStorage.setItem("ACCESS_TOKEN", signInResponse.data.access_token);

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
                <InputField placeholder="Mot de passe" name="password" />
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
                borderRadius={".75rem"}
                type="submit"
                color="white"
                bg={"#6772E5"}
              >
                Se connecter
              </Button>
            </Stack>
            <Flex onClick={handleSignUp} justify="center" mt={4}>
              <Text>S'inscrire</Text>
            </Flex>
            <Box h={"1px"} backgroundColor={"#E1E1E1"} mt={"21px"} w="80%" />
            <Box marginTop={"21px"}>
              <Image
                src={"/assets/images/apple.png"}
                width={"48px"}
                height={"48px"}
              />
            </Box>
          </Flex>
          <Heading pb={"43px"} visibility="hidden" size="800">
            Jobbi
          </Heading>
        </Page>
      </Form>
    </Formik>
  );
}
