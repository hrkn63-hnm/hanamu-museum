import styles from "../styles/Home.module.css";
import { client } from "../libs/client";
import type { Blog } from "../types/blog";
import Link from "next/link";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";

type Props = {
  blog: Array<Blog>;
};

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }: Props): JSX.Element {
  return (
    <div className="body-font bg-gradient-to-r from-cyan-500 to-blue-500 h-screen sm:h-screen">
      {/* <Header /> */}
      <div className="text-white racking-widest space-y-10 p-14">
        <h1 className="text-7xl">Welcome to</h1>
        <h1 className="text-7xl">Hariken++'s Portfolio!</h1>
        <p>右下のハンバーガーメニューから各項目をご覧いただけます</p>
      </div>
      <div className="flex justify-center mx-40 h-96">
        {/* <div className=""> */}
          {/* <Carousel /> */}
        {/* </div> */}
      </div>
      <div className="float-right place-items-end">
        <Menu />
      </div>
    </div>
  );
}
