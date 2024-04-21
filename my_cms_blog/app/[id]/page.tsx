import React from "react";
import getPostData from "@/data/posts";
export default function Post({ params }: { params: { id: string } }) {
  let { id } = params;
  const postData = getPostData(id);
  return <>{postData}</>;
}
