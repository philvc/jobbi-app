import { GetServerSidePropsContext } from "next";
import Cookies from "universal-cookie";
import { AXIOS_INSTANCE } from "../services/config";
import { ACCESS_TOKEN } from "../types/constant";
import { UserDTO } from "../types/dtos";
const cookies = new Cookies();
export const getAuthRedirect = async (context: GetServerSidePropsContext) => {
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
