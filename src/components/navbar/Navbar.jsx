import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { pages } from "../../services/webpages";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container mx-auto lg:px-20 md:px-3 px-2 flex items-center justify-between py-7">
          <div className="logo lg:w-32 lg:h-14 w-24 h-8">
            <img
              className="w-full h-full object-contain"
              src="imgs/logo.png"
              alt="logo_img"
            />
          </div>
          <ul className="lg:flex md:flex hidden items-center gap-10 text-[16px] tracking-[1px] font-normal text-white">
            {pages.map((item, index) => {
              return (
                <li
                  className="relative after:content-['']
                             after:absolute
                             after:bottom-[-5px]
                             after:left-1/2
                             after:-translate-x-1/2
                             after:w-0
                             after:h-0.5
                             after:bg-amber-400
                             after:transition-all
                             after:duration-300
                             hover:after:w-full"
                  key={index}
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex items-center gap-4 md:flex">
            <button className="bg-white text-[#5B5B5B] rounded-4xl py-2 px-7 cursor-pointer text-[16px] font-medium">
              Login
            </button>
            <button className="bg-[#FFFFFF4D] text-white rounded-4xl py-2 px-7 cursor-pointer text-[16px] font-medium">
              Sign Up
            </button>
          </div>
          <div className="block lg:hidden md:hidden">
            <FaBarsStaggered />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
