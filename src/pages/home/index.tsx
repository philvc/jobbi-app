import Page from "../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import HomeTopBar from "./topbar";
import { COLORS } from "../../constants/colors";
import { MyQuests } from "../../components/all/home/my-quests";
import Invitations from "../../components/all/home/invitations";
import getAuthRedirect from "../../utils/getAuthRedirect";
import { GetServerSideProps } from "next";
import { useSupabase } from "use-supabase";
import supabase from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { HomeHeader } from "../../components/all/home/header";
import FriendQuests from "../../components/all/home/friend-quests";

export default function Home() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Page>
      <HomeTopBar />
      <HomeHeader />
      <MyQuests />
      <FriendQuests />
      {/* <Invitations /> */}
    </Page>
  );
}
