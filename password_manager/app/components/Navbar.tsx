import React from "react";

const Navbar = () => {
  return (
    <div className="text-white bg-black">
      <div className="mx-auto container  py-6">
        <div className="  flex flex-col lg:flex-row justify-between">
          <div className="logo text-center lg:text-start ">
            <span className="text-[#ee98fb] text-3xl"> &lt;</span>
            <span className="text-3xl font-bold">Manage</span>
            <span className="text-[#ee98fb] text-3xl mt-3 font-bold">
              Pass/&gt;
            </span>
          </div>
          <div className="more">
            <ul className="flex mx-auto  rounded-3xl h-[50px] px-4 w-[350px] md:w-[500px] md:justify-around lg:bg-transparent bg-[#222020] lg:m-0  mt-4 items-center  gap-4">
              <li>
                <a
                  className="font-medium text-md md:text-md lg:text-2xl"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-medium  text-md md:text-md lg:text-2xl"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-md md:text-md lg:text-2xl"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="font-medium  text-md md:text-md lg:text-2xl"
                  href="#"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
