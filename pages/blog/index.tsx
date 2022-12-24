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
      <div className=" ">
        <h1 className="text-white text-7xl tracking-widest py-12 p-1 place-items-start">
          Blog
        </h1>
        <div>{/* <Search /> */}</div>
        <div className="max-w-lg place-items-center justify-items-center gap-3 mx-auto">
          {blog?.map((blog) => (
            <div key={blog.id}>
              <Link href={`/blog/${blog.id}`} passHref>
                <div className="text-indigo-50 p-6 rounded bg-indigo-500 transition delay-150 duration-300 ease-in-out my-6 mx-6 shadow-lg shadow-indigo-500/40 cursor-pointer hover:origin-bottom hover:-rotate-3 hover:scale-125">
                  {/* <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Item> */}
                  {blog.title}

                  <div className="">
                    {blog.tag && <span className="">#{blog.tag}</span>}
                  </div>
                  {/* </Item>
              </Stack> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 z-50">
          <Menu />
        </div>
      </div>
    </>
  );
}

//
