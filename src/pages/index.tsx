import Page from "../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Paragraph from "../components/shared/typography/paragraph";
import Heading from "../components/shared/typography/heading";
import InputField from "../components/shared/form/input-field";
import { Form, Formik } from "formik";
import Button from "../components/shared/actions/button";

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
