import axios from "axios";
import { Blog, Case } from "@/services/payload-types";
import qs from "qs";

export const getMediaPath = (path: string) => {
  return process.env.PAYLOAD_API + path;
};

export const fetcher = axios.create({
  baseURL: `${process.env.PAYLOAD_API}/api`,
});

type DocsResponse<T> = {
  docs: T[];
};

export const getCases = async () => {
  const cases = await fetcher.get<DocsResponse<Case>>(
    "/cases?sort=publishedDate&limit=15",
  );
  return cases.data.docs;
};

export const getCaseBySlug = async (slug: string) => {
  const query = qs.stringify({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const caseItems = await fetcher.get<DocsResponse<Case>>(`/cases?${query}`);
  return caseItems.data.docs[0];
};

export const getBlogs = async (limit?: number) => {
  const query = qs.stringify({
    where: {
      publishedDate: {
        less_than_equal: new Date().toISOString(),
      },
    },
    limit: limit,
  });

  const cases = await fetcher.get<DocsResponse<Blog>>(
    "/blogs?sort=-publishedDate&" + query,
  );
  return cases.data.docs;
};

export const getBlogsBySlug = async (slug: string) => {
  const query = qs.stringify({
    where: {
      slug: {
        equals: slug,
      },
      publishedDate: {
        less_than_equal: new Date().toISOString(),
      },
    },
  });
  console.log(query);

  const blogItems = await fetcher.get<DocsResponse<Blog>>(`/blogs?${query}`);
  return blogItems.data.docs[0];
};
