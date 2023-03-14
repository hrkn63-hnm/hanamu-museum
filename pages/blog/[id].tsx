/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import type { Blog } from "../../types/blog";
import { client } from "../../libs/client";
import Menu from "../../components/Menu";
import Head from "next/head";
import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

type Props = {
  blog: Blog;
};

export default function Blog({ blog }: Props) {
  const updateDay = new Date(blog.updatedAt).toLocaleDateString();
  const publishDay = new Date(blog.publishedAt).toLocaleDateString();
  return (
    <>
      <Head>
        <title>Hanamu++ Museum/Blog/{blog.title}</title>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <div
        className="w-screen bg-contain h-screen bg-center bg-no-repeat bg-fixed -z-10 font-bold flex flex-col text-white"
        style={{
          backgroundImage: `url(${blog.eyecatch?.url})`,
        }}
      >
        {/* <img src={blog.eyecatch?.url} /> */}
        {/* <Image
          src={blog.eyecatch?.url}
          width={blog.eyecatch?.width}
          height={blog.eyecatch?.height}
          alt=""
          className="hidden"
        /> */}
        <p className="text-center my-auto opacity-100 drop-shadow-lg text-6xl bg-indigo-300/70 rounded w-4/5 p-2 mx-auto">
          {blog.title}
        </p>
        <div className="z-30 animate-bounce ">
          <KeyboardDoubleArrowDownIcon
            fontSize="large"
            className="m-3 rounded-full bg-indigo-300/70 "
          />
        </div>
      </div>

      <div className="text-left ">
        <div className="px-5 py-6 mx-auto z-40">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50 ">
            {/* <img
              className="object-cover shadow-sm "
              src={blog.eye_catch?.url}
            /> */}
            <div className="mt-2">
              <div className="text-right sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-indigo-600">
                {blog.title}
              </div>
            </div>
            {blog.tag && (
              <div className="flex items-center justify-start mt-4 mb-4">
                <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                  #{blog.tag}
                </div>
              </div>
            )}
            <div className="my-2 ">
              <p className="text-right">公開日:{publishDay}</p>
              <p className="text-right">最終更新日:{updateDay}</p>
              <div
                className="my-6 sm:text-sm md:text-md lg:text-lg xl:text-xl text-blue-900 rounded "
                dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0">
          <Menu />
        </div>
      </div>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const id = ctx.params?.id;
//   const idExceptArray = id instanceof Array ? id[0] : id;
//   const data = await client.get({
//     endpoint: "blog",
//     contentId: idExceptArray,
//   });

//   return {
//     props: {
//       blog: data,
//     },
//   };
// };

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map(
    (content: { id: any }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
