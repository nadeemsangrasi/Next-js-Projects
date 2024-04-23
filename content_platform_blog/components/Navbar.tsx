import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-full md:h-[100px]  bg-[#F2F8FB] w-full">
      <ul className="flex items-center justify-between md:w-[30%] mx-6 md:ml-12 py-8 font-light">
        <li className="hover:text-blue-600">
          <Link href={"/"}> HOME</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"/NEWS"}>NEWS</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"INSIGHTS"}>INSIGHTS</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href={"GUIDES"}>GUIDES</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
