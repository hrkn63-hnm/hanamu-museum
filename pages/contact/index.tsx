import { Paper, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Menu from "../../components/Menu";
import Link from "next/link";

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
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen text-center bg-cover bg-center">
        <h1 className="text-white text-6xl tracking-widest py-12 p-1 place-items-start">
          Contact
        </h1>
        <div className="max-w-lg place-items-center justify-items-center gap-3 mx-auto">
          <div className="transition delay-150 duration-300 ease-in-out my-6 mx-6">
            <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
              <Item>
                <Link href="https://twitter.com/hrkn63_hnm" passHref>
                  <a className="hover:text-sky-700 ">
                    Twitter(プログラミング用)
                  </a>
                </Link>
              </Item>
              <Item>
                <Link href="https://github.com/hrkn63-hnm" passHref>
                  <a className="hover:text-sky-700 ">Gituhub</a>
                </Link>
              </Item>
              <Item>
                <Link href="https://zenn.dev/hariken" passHref>
                  <a className="hover:text-sky-700 ">Zenn</a>
                </Link>
              </Item>
              <Item>
                <Link href={""} passHref>
                  <a className="hover:text-sky-700 ">Youtube</a>
                </Link>
              </Item>
              <Item>
                <Link href={""} passHref>
                  <a className="hover:text-sky-700 ">Gmail</a>
                </Link>
              </Item>
            </Stack>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default index;
