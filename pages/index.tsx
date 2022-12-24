import { client } from "../libs/client";
import type { Blog } from "../types/blog";
import Menu from "../components/Menu";
import MyCard from "../components/MyCard";
import Head from "next/head";

type Props = {
  blog: Array<Blog>;
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }: Props): JSX.Element {
  return (
    <>
    <Head>
      <title>Hanamu++ Museum</title>
    </Head>
    <div className="">
      <p className="text-white text-4xl tracking-widest pt-12 pb-3 p-1 place-items-center">
        Welcome to
      </p>
      <p className="text-white text-4xl tracking-widest pt-3 pb-12 p-1 place-items-center">
        Hanamu++ Museum!
      </p>
      <div className="grid justify-items-center gap-3">
        <MyCard
          img="https://media.discordapp.net/attachments/757627473427955867/1030661015744040960/IMG_8422.jpg?width=775&height=1045"
          title="はなむ"
          text="よく食べよく寝る高校生"
        />
      </div>
      <div className="sticky bottom-0">
        <Menu />
      </div>
    </div>
    </>
  );
}
