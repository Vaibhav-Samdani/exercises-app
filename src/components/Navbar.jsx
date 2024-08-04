import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="z-10 bg-slate-950 text-white font-poppins fixed container flex items-center h-20 ">
      <Link className=" w-40 ml-2 my-auto" to={"/"}>
        <img src={Logo} className="ml-4 "  alt="Fitness Sign" />
      </Link>
      <div className="flex items-center w-80 my-auto">
        <Link
          className=" flex-auto hover:text-blue-200 focus:text-blue-200 active:text-blue-200"
          to={"/"}
        >
          Home
        </Link>
        <a
          className="flex-auto 
        hover:text-blue-200 focus:text-blue-200 active:text-blue-200"
          href="#exercises"
        >
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
