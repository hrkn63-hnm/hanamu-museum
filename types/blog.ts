export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
};
