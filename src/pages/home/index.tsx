import Page from "../../components/shared/layout/page";
import React from "react";
import HomeTopBar from "./topbar";
import SharedQuestList from "../../components/home/shared";
import PublicQuestList from "../../components/home/public";
import Navbar from "../../components/shared/navbar";
import { GetServerSidePropsContext } from "next";
import { AXIOS_INSTANCE } from "../../services/config";
import { UserDTO } from "../../types/dtos";
import Cookies from "universal-cookie";
import { ACCESS_TOKEN } from "../../types/constant";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Fetch  user
  let user: UserDTO;
  let error: any;
  const cookies = new Cookies(context.req.headers.cookie);

  // Redirect if no token
  if (!cookies.get(ACCESS_TOKEN)) {
    return {
      redirect: {
        destination: "/auth/sign-in",
      },
    };
  }

  // Verify user exist
  try {
    user = await AXIOS_INSTANCE({
      method: "get",
      url: "/me",
      headers: {
        Authorization: `Bearer ${cookies.get(ACCESS_TOKEN)}`,
      },
    }).then(({ data }) => data);
  } catch (e) {
    console.log("error", e);

    error = e;
  }

  // If no user, redirect to signin
  if (error) {
    return {
      redirect: {
        destination: "/auth/sign-in",
      },
    };
  }

  return {
    props: {},
  };
};

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
