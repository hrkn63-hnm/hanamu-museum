/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import "swiper/css/bundle";
import Head from "next/head";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


function MyApp({ Component, pageProps }: AppProps) {
      const theme = createTheme({
        typography: {
          fontFamily: ["Zen Maru Gothic"].join(","),
        },
      });
  return (
    <>
      <div className="bg-indigo-400 min-h-screen w-screen text-center bg-cover bg-center font-maru pb-6">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
