"use client";
import React from "react";
import Categories from "@/components/Categories";
import { getCartData } from "@/lib/getCartData";
interface CartData {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
  stock: string;
  description: string;
}

const page = async ({ params }: { params: { id: string } }) => {
  let { id } = params;
  const cartData: CartData = await getCartData(id);
  let randomNum: number = Math.floor(Math.random() * cartData.images.length);

  return (
    <>
      <Categories />
      <div className="container mx-auto  my-6 ">
        <div className=" md:flex justify-between break-words ">
          <img
            className="w-full md:w-[50%] "
            src={cartData.images[randomNum]}
            alt="image"
            width={650}
          />{" "}
          <div className="px-16 pt-4 lg:pt-0 w-full md:w-[50%]">
            <h1 className="text-[2.8rem] md:text-5xl font-bold leading-[55px] py-4 lg:py-0">
              {cartData.description}
            </h1>
            <p className="font-semibold pt-2 text-2xl">Title</p>
            <h1 className="font-light pt-1 text-[22px]">{cartData.title}</h1>
            <p className="font-semibold pt-2 text-2xl">Brand</p>
            <h1 className="font-light pt-1 text-[22px]">{cartData.brand}</h1>
            <p className="font-semibold pt-2 text-2xl ">Category</p>
            <h1 className="font-light pt-1 text-[22px]">{cartData.category}</h1>
            <p className="font-semibold pt-2 text-2xl">Stock</p>
            <h1 className="font-light pt-1 text-[22px]">{cartData.stock}</h1>
            <p className="font-semibold pt-2 text-2xl">Price</p>
            <h1 className="font-light pt-1 text-[22px]">${cartData.price}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
