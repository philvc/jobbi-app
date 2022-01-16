import Page from "../../../../components/shared/layout/page";
import React from "react";
import QuestDetailsHeader from "./header";
import QuestPosts from "./posts";
import QuestDetailsParticipants from "./participants";
import Navbar from "../../../../components/shared/navbar";

export default function Quests() {
  // Attributes
  
  return (
    <Page overflow={"scroll"}>
      <QuestDetailsHeader />
      <QuestPosts />
      <QuestDetailsParticipants />
      <Navbar menu="none" />
    </Page>
  );
}
