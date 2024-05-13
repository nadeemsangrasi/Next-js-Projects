"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
interface CartData {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}
const Navbar = () => {
  let cartItems = useSelector((state: { data: CartData[] }) => state.data);
  return (
    <nav className="h-full md:h-[100px]   w-full">
      <ul className="flex items-center justify-between  mx-6 md:ml-12 py-8 font-light">
        <li className="hover:text-blue-600 font-bold text-4xl md:text-6xl pb-2">
          <h1>
            <Link href={"/"}>SwiftCart Ecomercline</Link>
          </h1>
        </li>
        <li className="hover:text-blue-600 font-bold">
          <Link
            href={"/myCarts"}
            className="flex w-[64px] md:w-[85px] items-center justify-center"
          >
            <lord-icon
              src="https://cdn.lordicon.com/eiekfffz.json"
              trigger="hover"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <span className="hover:text-blue-600 font-bold text-3xl">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
