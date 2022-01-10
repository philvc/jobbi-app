import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();

  // Effects
  useEffect(() => {
    router.replace("/auth/sign-in");
  });

  return <Fragment />;
}
