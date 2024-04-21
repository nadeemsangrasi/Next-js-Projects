import fetchPost from "@/components/Post";
import styles from "@/components/post.module.css";
import Link from "next/link";

export default async function getPostData(id: string) {
  let data = await fetchPost();
  type Post1 = { title: string; slug: string; content: string };
  type Post2 = {
    title?: string;
    slug?: string;
    content?: string;
    name?: string;
    bio?: string;
    profile?: {};
  };
  type Bothpost = Post1 | Post2;
  type MyPost = { metadata?: {}; sys?: {}; fields: Bothpost };
  let renderData = (id: string) => {
    let blogData = data.items.find((item: MyPost) => item.fields.slug == id);

    return (
      <div className={styles.contain}>
        <h1>{blogData.fields.title}</h1>
        <h2>{blogData.fields.slug}</h2>
        <h3>{blogData.fields.content}</h3>
      </div>
    );
  };
  return (
    <>
      <div className="container mx-au post text-center ">
        <div>{renderData(id)}</div>
        <h1 className={styles.btn}>
          <Link href={"/"}>Back to Home</Link>
        </h1>
      </div>
    </>
  );
}
