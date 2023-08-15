import Head from "next/head";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import RouteLoading from "../components/loaders/RouteLoading";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
