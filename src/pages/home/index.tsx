import Page from "../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTopBar from "./topbar";
import SharedQuestList from "../../components/home/shared";
import { Box } from "@chakra-ui/react";
import PublicQuestList from "../../components/home/public";
import Navbar from "../../components/shared/navbar";
import { useSupabase } from "use-supabase";
import { GetServerSideProps } from "next";
import { AuthChangeEvent, createClient, Session } from "@supabase/supabase-js";
import { supabase } from "../../utils/supabaseClient";

export default function Home() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();
  const { auth } = useSupabase();
  const session = auth.session();

  return (
    <Page overflow={"scroll"}>
      <HomeTopBar />
      <SharedQuestList />
      <PublicQuestList />
      <Navbar menu="home" />
    </Page>
  );
}
