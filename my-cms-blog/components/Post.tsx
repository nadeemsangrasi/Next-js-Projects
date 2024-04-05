import React from "react";

const fetchPost = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`
  );
  return res.json();
};

export default fetchPost;
