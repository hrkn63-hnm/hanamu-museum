import { Paper, Stack } from "@mui/material";
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
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen text-center">
        <p className="text-white text-7xl tracking-widest py-12 p-1 place-items-start">
          Contact
        </p>
        <div className="w-96 mx-auto">
          <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Item>
              <a
                href="https://twitter.com/hrkn63_hnm" className="hover:text-sky-700">
                Twitter
              </a>
            </Item>
            <Item>
              <a
                href="https://github.com/hrkn63-hnm" className="hover:text-sky-700">
                GitHub
              </a>
            </Item>
            <Item>
              <a href="https://zenn.dev/hariken" className="hover:text-sky-700">
                Zenn
              </a>
            </Item>
            <Item>
              <a>Youtube</a>
            </Item>
            <Item>Gmail:demo43160@gmail.com</Item>
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
