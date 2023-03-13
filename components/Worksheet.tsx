import React from "react";
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
            {props.linkRep && (
              <Button
                size="small"
                href={props.linkRep}
                className="text-indigo-500 hover:text-indigo-800 hover:bg-indigo-100/50"
              >
                リポジトリ
              </Button>
            )}
            {props.linkDem && (
              <Button
                size="small"
                href={props.linkDem}
                className="text-indigo-500 hover:text-indigo-800 hover:bg-indigo-100/50"
              >
                デモ
              </Button>
            )}
          </CardActions>
          {/* </div> */}
        </Card>
      </div>
    </div>
  );
}

export default worksheet;
