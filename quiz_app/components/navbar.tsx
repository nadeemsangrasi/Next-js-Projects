import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="w-full bg-black  text-white flex justify-around flex-wrap">
      <div>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold py-4   shadow-zinc-300">
            Quiz App
          </h1>
        </Link>
      </div>
      <div className="text-4xl font-bold py-4">
        <Avatar>
          <Link
            href={"https://linkedin.com/in/nadeem-khan-a083702b9"}
            target="blank"
          >
            <AvatarImage src="https://avatars.githubusercontent.com/u/140242307?s=400&u=2a58732b63f4bfc158b2d3c2e4f4f2a771b3db74&v=4" />
          </Link>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
