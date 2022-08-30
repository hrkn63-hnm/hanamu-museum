import { GetServerSideProps } from "next";
import type { Blog } from "../../types/blog";
import { client } from "../../libs/client";
import Header from "../../components/blog/Header";
import Menu from "../../components/Menu";

type Props = {
  blog: Blog;
};

export default function Blog({ blog }: Props) {
  const updateDay = blog.updatedAt.slice(0,10);
  const updateTime = blog.updatedAt.slice(11,19);

  return (
      <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-center flex flex-col space-y-1 h-full">
        <div className="px-10 py-6 mx-auto">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <img
              className="object-cover w-full shadow-sm h-full"
              src={blog.eye_catch?.url}
            />
            <div className="mt-2">
              <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
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
            <div className="mt-2">
              <p>
                更新日：{updateDay}
                {/* / {updateTime} */}
              </p>
              <div
                className="text-2xl text-gray-700 mt-4 rounded "
                dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0">
          <Menu />
        </div>
      </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "blog",
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};
