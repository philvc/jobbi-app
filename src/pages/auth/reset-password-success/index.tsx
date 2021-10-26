import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import Page from "../../../components/shared/layout/page";

export default function ResetPasswordSuccess() {
  // Attributes
  const router = useRouter();
  return (
    <Page p={4}>
      <Flex justifyContent="center" flexGrow={1} direction="column">
        <Flex direction="column" mt={-24}>
          <Heading size="900">Mot de passe</Heading>
          <Heading size="900">modifié 🎉</Heading>
          <Heading mt={2} size="300" color={"#818080"}>
            Vous êtes prêt ! Cliquez ci-dessous pour vous connecter à Jobbi.
          </Heading>
          <Button
            marginTop={"52px"}
            onClick={() => router.push("/auth/sign-in")}
            backgroundColor="#00CC9D"
          >
            Se connecter
          </Button>
        </Flex>
      </Flex>
    </Page>
  );
}
