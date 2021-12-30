import Page from "../../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import QuestDetailsHeader from "./header";
import QuestPosts from "./posts";

export default function Quests() {
  // Attributes
  const router = useRouter();

  return (
    <Page>
      <QuestDetailsHeader />
      <QuestPosts />
    </Page>
  );
}
