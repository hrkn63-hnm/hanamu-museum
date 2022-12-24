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
      <div className="bg-indigo-400 min-h-screen w-screen text-center bg-cover bg-center">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
