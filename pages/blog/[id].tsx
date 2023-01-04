/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import type { Blog } from "../../types/blog";
import { client } from "../../libs/client";
import Menu from "../../components/Menu";
import Head from "next/head";

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
      </Head>
      <div className="text-left">
        <div className="px-10 py-6 mx-auto">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <img
              className="object-cover shadow-sm "
              src={blog.eye_catch?.url}
            />
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
            <div className="mt-2 ">
              <p className="text-right">
                公開日:{publishDay}
              </p>
              <p className="text-right">
                最終更新日:{updateDay}
              </p>
              <div
                className="mt-6 sm:text-sm md:text-md lg:text-lg xl:text-xl text-blue-900 rounded "
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
