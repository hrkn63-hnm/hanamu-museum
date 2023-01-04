import { Paper, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Menu from "../../components/Menu";
import Link from "next/link";
import Head from "next/head";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function index() {
  return (
    <>
      <Head>
        <title>Hanamu++ Museum/Contact</title>
      </Head>
      <div className="">
        <h1 className="text-white text-6xl tracking-widest py-12 p-1 place-items-start">
          Contact
        </h1>
        <div className="max-w-lg place-items-center justify-items-center gap-4  mx-auto">
          <div>
            <Link href="https://twitter.com/hrkn63_hnm" passHref>
              <div className="text-indigo-50 p-3 rounded bg-indigo-500 transition delay-150 duration-300 ease-in-out my-6 mx-6 shadow-lg shadow-indigo-500/40 cursor-pointer sm:hover:origin-bottom sm:hover:-rotate-3 sm:hover:scale-125">
                Twitter
              </div>
            </Link>
            <Link href="https://github.com/hrkn63-hnm" passHref>
              <div className="text-indigo-50 p-3 rounded bg-indigo-500 transition delay-150 duration-300 ease-in-out my-6 mx-6 shadow-lg shadow-indigo-500/40 cursor-pointer sm:hover:origin-bottom sm:hover:-rotate-3 sm:hover:scale-125">
                GitHub
              </div>
            </Link>
            <Link href="https://zenn.dev/hariken" passHref>
              <div className="text-indigo-50 p-3 rounded bg-indigo-500 transition delay-150 duration-300 ease-in-out my-6 mx-6 shadow-lg shadow-indigo-500/40 cursor-pointer sm:hover:origin-bottom sm:hover:-rotate-3 sm:hover:scale-125">
                Zenn
              </div>
            </Link>
            <Link href={""} passHref>
              <div className="text-indigo-50 p-3 rounded bg-indigo-500 transition delay-150 duration-300 ease-in-out my-6 mx-6 shadow-lg shadow-indigo-500/40 cursor-pointer sm:hover:origin-bottom sm:hover:-rotate-3 sm:hover:scale-125">
                Gmail
              </div>
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default index;
