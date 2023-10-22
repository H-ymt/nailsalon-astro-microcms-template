import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ニュースの型定義
export type News = {
  id: string;
  title: string;
  date: string;
  content: string;
  category: {
    name: string;
  };
};

// メンバーの型定義
export type Member = {
  id: string;
  image?: MicroCMSImage;
  position: string;
  name: string;
  description: string;
  instagram: string;
};

export type NewsResponse = {
  offset: number;
  limit: number;
  contents: News[];
};

export type MemberResponse = {
  offset: number;
  limit: number;
  contents: Member[];
};

// ニュース一覧取得
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get<NewsResponse>({ endpoint: "news", queries });
};

// ニュース詳細取得
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};

// メンバー一覧取得
export const getMember = async (queries?: MicroCMSQueries) => {
  return await client.get<MemberResponse>({ endpoint: "member", queries });
};

// メンバーの詳細取得
export const getMemberDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Member>({
    endpoint: "member",
    contentId,
    queries,
  });
};
