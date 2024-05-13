import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="h-full md:h-[100px] mt-6  bg-[#F2F8FB] w-full">
      {" "}
      <ul className="flex items-center gap-5 mx-6 text-[15px] flex-wrap lg:text-xl md:ml-12 py-8 font-light">
        <li className="hover:text-blue-600">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"/smartphones"}>Smart phones</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"/laptops"}>Laptops</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"/fragrances"}>Fragrances</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"/skincare"}>Skincare</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"/groceries"}>Groceries</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"/home-decoration"}>Home decoration</Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
