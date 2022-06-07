import Page from "../../components/shared/layout/page";
import React from "react";
import HomeTopBar from "./topbar";
import SharedQuestList from "../../components/home/shared";
import PublicQuestList from "../../components/home/public";
import Navbar from "../../components/shared/navbar";
import { getAuthRedirect } from "../../utils/auth";
import { Heading, Skeleton } from "@chakra-ui/react";
import PublicQuestCard from "./explore/card";
import { useGetPublicSearches } from "../../services/searches/searches";

export const getServerSideProps = getAuthRedirect;

export default function Home() {
  return (
    <Page overflow={"scroll"} pb={"200px"}>
      <HomeTopBar />
      <SharedQuestList />
      <PublicQuestList />
      <Navbar menu="home" />
    </Page>
  );
}
