import Head from "next/head";
import { Router, useRouter } from "next/router";

export default function Home() {

  // Attributes
  const router = useRouter();

  return (
    <>
      <Head>
        <title>You're lost</title>
      </Head>
    </>
  )
}
