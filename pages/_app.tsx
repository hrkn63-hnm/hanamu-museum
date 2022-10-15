/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import "swiper/css/bundle";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      {/* <Header /> */}
      {/* <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full min-h-screen "> */}
        <Component {...pageProps} />
      {/* </div> */}
    </>
  );
}

export default MyApp;
