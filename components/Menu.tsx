import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextsmsIcon from "@mui/icons-material/Textsms";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import { Home } from "@mui/icons-material";
import router, { Router } from "next/router";
import { deepPurple } from "@mui/material/colors";


const actions = [
  { icon: <TextsmsIcon />, name: "Contact", link: "contact" },
  { icon: <BookIcon />, name: "Blog", link: "blog" },
  { icon: <WorkIcon />, name: "Works", link: "works" },
  { icon: <Home />, name: "Home", link: "" },
];

export default function BasicSpeedDial() {
  return (
    <div className="">
      <Box
      // sx={{ height: 640, transform: "translateZ(0px)", flexGrow: 1 }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            "& .MuiFab-primary": {
              // "&:hover": { backgroundColor: "rgb(79 70 229)" },
            },
            "& .MuiSpeedDialIcon-icon": { fontSize: 30 },
            // "&:hover": { backgroundColor: "yellow" },
          }}
          icon={<MenuIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{ width: 50, height: 50, backgroundColor: deepPurple[50] }}
              onClick={() => router.push("/" + action.link)}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
