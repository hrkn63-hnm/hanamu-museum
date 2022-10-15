import { client } from "../../libs/client";
import type { Blog } from "../../types/blog";
import Link from "next/link";
import { Paper, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Menu from "../../components/Menu";
import Head from "next/head";

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
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen text-center bg-cover bg-center">
        <h1 className="text-white text-7xl tracking-widest py-12 p-1 place-items-start">
          Blog
        </h1>
        <div className="max-w-lg place-items-center justify-items-center gap-3 mx-auto">
          {blog?.map((blog) => (
            <div
              className="transition delay-150 duration-300 ease-in-out my-6 mx-6"
              key={blog.id}
            >
              <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Item>
                  <Link href={`/blog/${blog.id}`} passHref>
                    <a className="hover:text-sky-700 ">{blog.title}</a>
                  </Link>
                  <div className="">
                    {blog.tag && <span className="">#{blog.tag}</span>}
                  </div>
                </Item>
              </Stack>
            </div>
          ))}
        </div>
        <Menu />
      </div>
    </>
  );
}

//
