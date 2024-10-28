import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import {IResponseList} from "@/types/Response";
import {Blog} from "@/types/Blog";

export default function useBlog() {
  const { data: resBlog, error } = useSWR<IResponseList<Blog,'listBlog'>>("/blog", fetcher, {
    dedupingInterval: 30000,
  });

  return {
    resBlog,
    error,
    loading: !resBlog && !error,
  };
}
