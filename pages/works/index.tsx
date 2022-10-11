import { Paper} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Menu from "../../components/Menu";
import Worksheet from "../../components/Worksheet";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function index() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full min-h-screen text-center">
      <p className="text-white text-7xl tracking-widest py-12 p-1 place-items-center">
        Works
      </p>
      <div className="grid justify-items-center gap-3">
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987342630377623592/IMG_7819.jpg"
          title="匿名掲示板"
          text="Node.jsとSQLite3で作成。Node.js超入門[第3版] 掌田津耶乃(著)を参考にした。"
          linkRep="https://github.com/hrkn63-hnm/ex-gen-app"
          linkDem={""}
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987345254497779732/IMG_7823.jpg"
          title="メモアプリ"
          text="Reactで作成。React.js&Next.js超入門[第2版] 掌田津耶乃(著)を参考にした。"
          linkRep="https://github.com/hrkn63-hnm/react_app"
          linkDem={""}
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987382866663071764/IMG_7825.jpg"
          title="交通安全動画"
          text="教員に頼まれて友人と共同制作したもの。ネタに走った。"
          linkDem="https://www.youtube.com/watch?v=HEFO6Xoehis"
          linkRep={""}
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987575019393654784/IMG_7828.jpg"
          title="あなたのいいところ診断"
          text="N予備校の講座で作ったもの。Twitterによくあるやつ。"
          linkRep="https://github.com/hrkn63-hnm/assessment"
          linkDem="https://hrkn63-hnm.github.io/assessment/b"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/994855253407187024/2022-07-08_15.31.28.jpg"
          title="今日のニャンコ"
          text="サバイバルTypeScriptで作った。TypeScriptを使った初めてのプロダクト。"
          linkRep="https://github.com/hrkn63-hnm/random-cat11"
          linkDem="https://random-cat11.vercel.app/"
        />
      </div>
      <div className="sticky bottom-0">
        <Menu />
      </div>
    </div>
  );
}

export default index;
