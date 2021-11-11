import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";
import { Button, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useCreateUser } from "../../../services/default/default";
import { useAddFriendship } from "../../../services/friendships/friendships";
import { UserDTO } from "../../../types/dtos/userDTO";

interface ResetPasswordForm {
  password: string;
}

export default function SignIn() {
  // Attributes
  const router = useRouter();
  const { auth } = useSupabase();
  const { t } = useTranslation();
  const { questId } = router.query;
  console.log("query", router.pathname);
  
  const access_token = router.asPath
    ?.split("#access_token=")[1]
    ?.split("&expires_in=")[0];
  const { mutateAsync: postUser } = useCreateUser();
  const { mutateAsync: postFriendship } = useAddFriendship();

  // Effect
  useEffect(() => {
    // if magic link with supabase access_token
    if (access_token) {
      localStorage.setItem("ACCESS_TOKEN", access_token);
    }
  }, []);

  // Function
  async function updateSupabaseUser(password: string) {
    // update user in supabase
    const resetResp = await auth.api.updateUser(
      localStorage.getItem("ACCESS_TOKEN"),
      { password: password }
    );

    if (resetResp.error) {
      // toast error
    }

    return resetResp.user;
  }

  async function createUser(email: string, externalId: string) {
    if (email && externalId) {
      const user = await postUser({
        data: {
          email,
          externalId,
        },
      });
      return user;
    }

    // toast error missing email or id
  }

  async function createFriendship(user: UserDTO) {
    if (questId) {
      const friendship = await postFriendship({
        searchId: questId as string,
        data: {
          userId: user.id,
          searchId: questId as string,
          email: user.email,
          state: 1,
        },
      });
      return friendship;
    }
  }

  async function handleSubmit(data: ResetPasswordForm) {
    // update user
    const supUser = await updateSupabaseUser(data.password);

    // if magic link, create new user
    if (access_token) {
      // create user with email & external_id
      const user = await createUser(supUser.email, supUser.id);

      // create friendship with userId & searchId
      if (user) {

        const friendship = await createFriendship(user);
      }
    }
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
