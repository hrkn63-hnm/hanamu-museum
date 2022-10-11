import Menu from "./Menu";
import * as React from "react";



export default function Header() {

  return (
    <header className="body-font bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <h1 className="text-white text-9xl font-bold tracking-wide">Hello!</h1>
        <Menu />
    </header>
  );
}
