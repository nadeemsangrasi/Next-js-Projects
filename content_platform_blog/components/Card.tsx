import React from "react";
import Link from "next/link";
interface CardData {
  title: string;
  slug: string;
  author: string;
  date: string;
  url: string;
  route: string;
}
const Card = ({ title, slug, author, date, url, route }: CardData) => {
  return (
    <div className="mx-auto flex flex-col justify-between card rounded-xl bg-white hover:shadow-2xl transition-all ease  duration-500 hover:-translate-y-5 w-[300px]  md:w-[340px]">
      <div>
        <img
          width={400}
          height={320}
          src={`https:${url}`}
          alt="image"
          className="object-cover rounded-lg"
        />
        <h1 className="text-blue-600 font-bold px-5 pb-2 pt-3 text-lg hover:text-blue-400">
          <Link href={`/${title}`}>{title}</Link>
        </h1>
        <h2 className="text-2xl font-bold px-5 break-words">
          <Link href={route}>{slug}</Link>
        </h2>
      </div>
      <div className="div py-3 px-4 ">
        <p className=" inline-block font-light">{author} |</p>
        <p className="inline-block font-light"> {date}</p>
      </div>
    </div>
  );
};

export default Card;
