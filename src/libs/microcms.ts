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

export type NewsResponse = {
  offset: number;
  limit: number;
  contents: News[];
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
