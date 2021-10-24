import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Heading from "../../../components/shared/typography/heading";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import Button from "../../../components/shared/actions/button";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import {
  getGetUserBySubQueryKey,
  useGetUserBySub,
  useModifyUser,
} from "../../../services/default/default";
import { Skeleton } from "@chakra-ui/skeleton";
import { useQueryClient } from "react-query";

interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Home() {
  // Attributes
  const router = useRouter();
  const { t } = useTranslation();
  const { data: user, isLoading, refetch } = useGetUserBySub();
  const clientQuery = useQueryClient();

  // Mutation
  const { mutateAsync: modifyUser } = useModifyUser();

  // Function
  async function handleSubmit(values: IProfile) {
    // invalidate key
    clientQuery.invalidateQueries(getGetUserBySubQueryKey());

    // put
    await modifyUser({
      data: {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      },
    });

    // refetch user
    await refetch();

    router.back();
  }

  return (
    <Skeleton isLoaded={!isLoading}>
      <Formik<IProfile>
        initialValues={{
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Page p={4} justify="space-between">
            <Box>
              <Stack
                onClick={router.back}
                direction="row"
                spacing={2}
                align="center"
              >
                <ArrowDown
                  style={{ marginTop: -1 }}
                  height="16px"
                  width="16px"
                  transform="rotate(90)"
                />
                <Heading>Mon profile</Heading>
              </Stack>
              <Stack mt={8} spacing={4}>
                <InputField placeholder="E-mail" name="email" />
                <InputField placeholder="Prénom" name="firstName" />
                <InputField placeholder="Nom" name="lastName" />
              </Stack>
            </Box>
            <Button type="submit" text="Sauver" />
          </Page>
        </Form>
      </Formik>
    </Skeleton>
  );
}
