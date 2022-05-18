import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";
import { useToast } from "@chakra-ui/toast";
import { useCreateUser } from "../../../services/default/default";
import { Button } from "@chakra-ui/button";
import { UserDTO } from "../../../types/dtos/userDTO";
import Cookies from "universal-cookie";
import { ACCESS_TOKEN } from "../../../types/constant";
import { useUser } from "../../../contexts/user";

interface SignUpForm {
  password: string;
  email: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

const cookies = new Cookies();

export default function SignUp() {
  // Attributes
  const router = useRouter();
  const { auth } = useSupabase();
  const { refetchUser } = useUser();
  const toast = useToast();
  const { mutateAsync: createUser } = useCreateUser();
  const [isLoading, setIsLoading] = useState(false);

  // Function
  async function handleSubmit(data: SignUpForm) {
    setIsLoading(true);

    try {
      // Create user in supabase
      await auth.signUp({
        email: data.email,
        password: data.password,
      });

      // Sign in new user
      const signInResponse = await auth.signIn({
        email: data.email,
        password: data.password,
      });

      // Save token in cookies
      cookies.set(ACCESS_TOKEN, signInResponse.data.access_token, {
        path: "/",
      });

      // Create user in DB
      await createUser({
        data: {
          email: data.email,
          externalId: signInResponse.user.id,
          firstName: data.firstName,
          lastName: data.lastName,
        },
      });

      // Refetch user for user context
      await refetchUser();
    } catch (e) {
      toast({ title: "Impossible de créer le compte" });
      setIsLoading(false);
    }

    setIsLoading(false);

    // Redirect
    router.push("/home/create-quest");
  }

  return (
    <Formik<SignUpForm>
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
      }}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      <Form>
        <Page p={4}>
          <ArrowDown
            onClick={() => router.back()}
            style={{ marginTop: 50 }}
            height="16px"
            width="16px"
            transform="rotate(90)"
          />
          <Flex marginTop={20} flexGrow={1} direction="column">
            <Heading size="900">S'inscrire 🎉</Heading>
            <Heading mt={2} size="300" color={"#818080"}>
              Créé ton compte sur Jobbi et aide tes amis à trouver un nouveau
              job de rêve !{" "}
            </Heading>
            <Stack mt={8} spacing={4}>
              <InputField placeholder="Prénom" name="firstName" />
              <InputField placeholder="Nom" name="lastName" />
              <InputField placeholder="E-mail" name="email" />
              <InputField
                placeholder="Mot de passe"
                name="password"
                type="password"
              />
              <InputField
                placeholder="Confirmer mot de passe"
                name="confirmPassword"
                type="password"
              />
            </Stack>
            <Button
              color={"white"}
              marginTop={"36px"}
              type="submit"
              backgroundColor="#6772E5"
              isLoading={isLoading}
            >
              S'inscrire
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
