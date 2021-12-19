import Page from "../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTopBar from "./topbar";
import SharedQuestList from "../../components/home/shared";
import { Box } from "@chakra-ui/react";
import PublicQuestList from "../../components/home/public";

export default function Home() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Page>
      <HomeTopBar />
      <Box overflow={"scroll"}>
        <SharedQuestList />
        <PublicQuestList />
      </Box>
      {/* <FriendQuests /> */}
      {/* <Invitations /> */}
    </Page>
  );
}
