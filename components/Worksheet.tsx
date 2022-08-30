import React from "react";
import { Divider, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Menu from "./Menu";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function worksheet(props: {
  img: string | undefined;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  text:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  linkRep: string;
  linkDem: string;
}) {
  return (
    <div>
      <div className="">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={props.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.text}
            </Typography>
          </CardContent>
          {/* <div className="flex justify-center"> */}
          <CardActions>
            <Button size="small" href={props.linkRep}>
              リポジトリ
            </Button>
            <Button size="small" href={props.linkDem}>
              デモ
            </Button>
          </CardActions>
          {/* </div> */}
        </Card>
      </div>
    </div>
  );
}

export default worksheet;
