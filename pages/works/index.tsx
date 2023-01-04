import { Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Menu from "../../components/Menu";
import Worksheet from "../../components/Worksheet";
import Head from "next/head";
import data from "../../data/works.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function index() {
  // console.log(data.elements)
  return (
    <>
      <Head>
        <title>Hanamu++ Museum/Works</title>
      </Head>
      <div className="">
        <p className="text-white text-7xl tracking-widest py-12 p-1 place-items-center">
          Works
        </p>
        <div className="grid justify-items-center gap-3 px-2">
          {data.elements.map((works) => (
            <div key={works.id}>
              <Worksheet
                img={works.img}
                title={works.title}
                text={works.text}
                linkRep={works.linkRep}
                linkDem={works.linkDem}
              />
            </div>
          ))}

        </div>
        <div className="sticky bottom-0">
          <Menu />
        </div>
      </div>
    </>
  );
}

export default index;
