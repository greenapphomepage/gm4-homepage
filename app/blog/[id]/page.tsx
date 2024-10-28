"use client";
import React from "react";
import useBlogDetail from "@/lib/use-blog-detail";

const DetailBlog = ({ params }: { params: { id: string } }) => {
  const {blog}= useBlogDetail(params.id);
  return <div className='flex items-center justify-center'>
    {blog?.data && (<div dangerouslySetInnerHTML={{__html: blog?.data?.content}}></div>)}
  </div>;
};

export default DetailBlog;
