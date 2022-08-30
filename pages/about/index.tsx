import { Paper, Stack, } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Menu from "../../components/Menu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function index() {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen text-center	">
        <p className="text-white mx-auto text-7xl tracking-widest pt-12 pb-6 place-items-start">
          About
        </p>
        <p className="text-white text-8xl tracking-widest py-6 p-1">はりけん</p>
        <div className="w-96 mx-auto">
          <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Item>ものづくりが大好きな高校2年生</Item>
            <Item>HTML/CSS/JS/TS/Firebase/React/Next.js/GitHubなどなど使える</Item>
            <Item>ドラえもんとサマーウォーズが好き</Item>
            <Item>2005年6月3日生まれ 茨城在住</Item>
          </Stack>
        </div>
        <div className="float-right place-items-end">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default index;
