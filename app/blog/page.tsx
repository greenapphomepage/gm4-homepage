"use client";

import CardBlog from "@/components/card-blog";
import useBlog from "@/lib/use-blog";

const Blog = () => {
  const {resBlog} = useBlog();
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-md:grid-cols-2">
        {resBlog?.data.listBlog.map((blog) => (
          <CardBlog key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;