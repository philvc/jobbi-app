import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import Page from "../../../components/shared/layout/page";

export default function ForgotPasswordSuccess() {
  // Attributes
  const router = useRouter();
  return (
    <Page p={4}>
      <Flex justifyContent="center" flexGrow={1} direction="column">
        <Flex direction="column" mt={-24}>
          <Heading size="900">Vérifiez votre </Heading>
          <Heading size="900">boîte mail 📥</Heading>
          <Heading mt={2} size="300" color={"#818080"}>
            Un email a été envoyé avec votre nouveau mot de passe.
          </Heading>
          <Button
            marginTop={"52px"}
            onClick={() => router.push("/auth/sign-in")}
            backgroundColor="#00CC9D"
          >
            Aller à la boîte email
          </Button>
        </Flex>
      </Flex>
    </Page>
  );
}
