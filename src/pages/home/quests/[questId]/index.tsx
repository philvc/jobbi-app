import Page from "../../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import QuestDetailsHeader from "./header";
import QuestPosts from "./posts";
import QuestDetailsParticipants from "./participants";
import Navbar from "../../../../components/shared/navbar";
import { useSearchRoleContext } from "../../../../contexts/role";

export default function Quests() {
  // Attributes
  const router = useRouter();
  const ctx = useSearchRoleContext();
  console.log("search role ctx", ctx);
  
  return (
    <Page overflow={"scroll"}>
      <QuestDetailsHeader />
      <QuestPosts />
      <QuestDetailsParticipants />
      <Navbar menu="none" />
    </Page>
  );
}
