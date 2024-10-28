import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import {Blog} from "@/types/Blog";
import {IResponse} from "@/types/Response";

export default function useBlogDetail(id: string|number) {
  const { data: blog, error } = useSWR<IResponse<Blog>>(`/blog/${id}`, fetcher, {
    dedupingInterval: 30000,
  });

  return {
    blog,
    error,
    loading: !blog && !error,
  };
}
