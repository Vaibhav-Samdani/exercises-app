import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <main className="font-sans fixed container flex items-center h-16 bg-transparent">
      <Link className="w-40 ml-2" to={"/"}>
        <img src={Logo} style={{ margin: "0 20px" }} alt="Fitness Sign" />
      </Link>
      <div className="flex items-center w-80 ">
        <Link
          className="flex-auto hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          to={"/"}
        >
          Home
        </Link>
        <a
          className="flex-auto 
        hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          href="#exercises"
        >
          Exercises
        </a>
      </div>
    </main>
  );
};

export default Navbar;
