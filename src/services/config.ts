import Axios, { AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";
import { ACCESS_TOKEN } from "../types/constant";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

const cookies = new Cookies();
export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();

  const improvedConfig = {
    ...config,
    headers: {
      Authorization: `Bearer ${cookies.get(ACCESS_TOKEN)}`,
    },
  };
  const promise = AXIOS_INSTANCE({
    ...improvedConfig,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // eslint-disable-next-line
  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled by React Query");
  };

  return promise;
};
