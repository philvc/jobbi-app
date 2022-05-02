import Page from "../../components/shared/layout/page";
import React from "react";
import HomeTopBar from "./topbar";
import SharedQuestList from "../../components/home/shared";
import PublicQuestList from "../../components/home/public";
import Navbar from "../../components/shared/navbar";
import { getAuthRedirect } from "../../utils/auth";

export const getServerSideProps = getAuthRedirect;

export default function Home() {
  // Attributes

  return (
    <Page overflow={"scroll"}>
      <HomeTopBar />
      <SharedQuestList />
      <PublicQuestList />
      <Navbar menu="home" />
    </Page>
  );
}
