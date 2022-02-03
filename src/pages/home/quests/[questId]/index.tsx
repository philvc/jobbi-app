import Page from "../../../../components/shared/layout/page";
import React from "react";
import QuestDetailsHeader from "./components/header";
import QuestPosts from "./components/posts";
import QuestDetailsParticipants from "./components/participants";
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
