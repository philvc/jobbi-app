import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";
import { useToast } from "@chakra-ui/toast";
import { useCreateUser } from "../../../services/default/default";
import { Button } from "@chakra-ui/button";
import { UserDTO } from "../../../types/dtos/userDTO";

interface SignUpForm {
  password: string,
  email: string,
  confirmPassword: string

}

export default function SignIn() {
  // Attributes
  const router = useRouter();
  const { auth } = useSupabase();
  const toast = useToast();
  const { mutateAsync: createUser } = useCreateUser();

  // Function
  async function handleSubmit(data: SignUpForm) {
    const signUpResponse = await auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (signUpResponse.error) {
      toast({ title: "Impossible de créer le compte" });
      return;
    }

    // Sign in new user
    const signInResponse = await auth.signIn({
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("ACCESS_TOKEN", signInResponse.data.access_token);

    // Create user
    await createUser({
      data: {
        email: data.email,
        externalId: signUpResponse.user.id,
      },
    });

    // Create user in the API
    router.push("/home");
  }

  return (
    <Formik<SignUpForm>
      initialValues={{ email: "", password: "",confirmPassword:""  }}
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
            <Heading size="900">S'inscrire 🎉</Heading>
            <Heading mt={2} size="300" color={"#818080"}>
              Créé ton compte sur Jobbi et aide tes amis à trouver un nouveau
              job de rêve !{" "}
            </Heading>
            <Stack mt={8} spacing={4}>
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
            <Button marginTop={"36px"} type="submit" backgroundColor="#00CC9D">
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
