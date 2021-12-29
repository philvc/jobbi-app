import Page from "../../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import Icons from "../../../../components/shared/icons";
import QuestDetailsHeader from "./header";

export default function Quests() {
  // Attributes
  const router = useRouter();

  return (
    <Page>
      <QuestDetailsHeader />
    </Page>
  );
}
