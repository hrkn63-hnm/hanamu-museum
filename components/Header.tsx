import Link from "next/link";
import Menu from "./Menu";
import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Theme } from "@mui/material/styles";



export default function Header() {

  return (
    <header className="body-font bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <h1 className="text-white text-9xl font-bold tracking-wide">Hello!</h1>
        <Menu />
    </header>
  );
}
