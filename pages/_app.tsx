import Head from "next/head";
import "../styles/globals.scss";

import { Poppins } from "@next/font/google";

import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import RouteLoading from "../components/loaders/RouteLoading";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import { useEffect } from "react";

export const poppins = Poppins({
  weight: ["300", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const TagManagerArgs: TagManagerArgs = {
    gtmId: process.env.GTM_ID || "",
  };

  useEffect(() => {
    TagManager.initialize(TagManagerArgs);
  }, []);

  return (
    <>
      <Head>
        <title>The Lagos Bible Conference</title>
        <meta name="description" content="Lagos Bible Conference" />
        <meta
          name="description"
          content="The Lagos Bible Conference (LBC) is the annual flagship conference of Sovereign Grace Bible Church (and partners) dedicated to promoting the Bible as God's inerrant and infallible Word through a faithful exposition of it."
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <RouteLoading />
      <Layout className={poppins.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
