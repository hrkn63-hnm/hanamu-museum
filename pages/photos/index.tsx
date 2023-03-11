import { client } from "../../libs/client";
import type { Blog } from "../../types/blog";
import Link from "next/link";
import { Paper, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Menu from "../../components/Menu";
import Head from "next/head";
import ImageList from '../../components/ImageList'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {
  blog: Array<Blog>;
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>Hanamu++ Museum/Blog</title>
      </Head>
      {/* <Header /> */}
      <div className="">
        <h1 className="text-white text-7xl tracking-widest py-12 p-1 place-items-start">
          Blog
        </h1>
        <div className="flex justify-center">
          <ImageList />
        </div>
        <div className="sticky bottom-0">
          <Menu />
        </div>
      </div>
    </>
  );
}

//
