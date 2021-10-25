import React, { useEffect } from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { createClient } from "@supabase/supabase-js";
import { SupabaseContextProvider } from "use-supabase";
import { useRouter } from "next/router";
import { UITheme } from "../themes";
import { UserProvider } from "../contexts/user";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const queryClientRef = React.useRef();
  const supabase = createClient(
    "https://ldmvmkkhldzpwfryrkvq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDA3OTMwNSwiZXhwIjoxOTQ5NjU1MzA1fQ.AEoeEKRFe45nI-ZgMJLuUdqoP8Ut-Ii88CSHQAzyiLA"
  );

  if (!queryClientRef.current) {
    // @ts-ignore
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchIntervalInBackground: true,
          refetchOnReconnect: false,
          refetchOnMount: true,
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  useEffect(() => {
    if (router?.query?.type === "recovery") {
      localStorage.setItem("ACCESS_TOKEN", router.query.access_token as string);
      router.push("/auth/reset-password");
    }
  }, []);

  return (
    <SupabaseContextProvider client={supabase}>
      <AnimateSharedLayout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <QueryClientProvider client={queryClientRef.current}>
          <ChakraProvider theme={UITheme}>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </AnimateSharedLayout>
    </SupabaseContextProvider>
  );
}

export default MyApp;
