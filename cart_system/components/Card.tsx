import React from "react";
import Link from "next/link";
import { CartButton, DetailButton } from "./Buttons";
const Card = ({ id, title, price, brand, category, thumbnail }: any) => {
  return (
    <div className="mx-auto flex flex-col justify-between card rounded-xl text-center md:text-start  hover:shadow-2xl transition-all ease  duration-500 hover:-translate-y-5 w-[300px] h-fit  md:w-[340px] ">
      <div className="overflow-hidden ">
        <img
          width={400}
          height={320}
          src={thumbnail}
          alt="image"
          className="object-cover rounded-lg "
        />
        <h1 className="text-blue-600 font-bold px-5 pb-2 pt-3 text-lg hover:text-blue-400 ">
          <Link href={`/${title}`}>{category}</Link>
        </h1>
        <h2 className="text-2xl font-bold px-5 break-words pt-2">
          <Link href={title}>{title}</Link>
        </h2>
        <h2 className="text-2xl text-red-500 font-bold px-5 break-words py-2">
          ${price}
        </h2>
        <div className="btns mx-">
          <CartButton
            product={{
              id: id,
              title: title,
              price: price,
              brand: brand,
              category: category,
              thumbnail: thumbnail,
            }}
          />
          <DetailButton id={id} />
        </div>
      </div>
      <div className="div py-3 px-4 ">
        <p className="inline-block font-light"> {brand}</p>
      </div>
    </div>
  );
};

export default Card;
