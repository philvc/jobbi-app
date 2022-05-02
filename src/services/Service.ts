import axios, { AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";
import { ACCESS_TOKEN } from "../types/constant";
const cookies = new Cookies();
const errors: string[] = [];
const success: string[] = [];

// @ts-ignore
const IAM_URL = process.env.REACT_APP_IAM_SERVER;
// @ts-ignore
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = axios.create({ baseURL: API_URL });
const iam = axios.create({ baseURL: IAM_URL });

[api].forEach((instance) => {
  instance.interceptors.request.use(async (baseConfiguration: any) => ({
    ...baseConfiguration,
    ...(await config()),
  }));

  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      console.log(error);
      if (error?.response?.status == 401) {
        localStorage.clear();
        cookies.remove(ACCESS_TOKEN);
        errors.push(error.response?.data);
      }

      return Promise.reject(error);
    }
  );
});

async function config(): Promise<Partial<AxiosRequestConfig>> {
  const access_token = cookies.get(ACCESS_TOKEN);

  return {
    headers: {
      Authorization: `bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
}

const Service = {
  iam,
  api,
  errors,
  success,
  config,
  IAM_URL,
  API_URL,
};

export default Service;
