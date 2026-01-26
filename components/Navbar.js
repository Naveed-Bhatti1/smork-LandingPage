import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md py-4 px-10 fixed top-1 left-0 right-0 bg-white/50 text-slate-800 backdrop-blur-xl z-10 w-2/3 mx-auto rounded-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold cursor-pointer">
          <a href="#Hero">
            <span className="text-[#2F9AF8]">SM</span>ORK
          </a>
        </h1>
        <ul className="flex gap-6 text-lg font-medium">
          <li className="hover:underline hover:scale-110">
            <a href="#Hero">Home</a>
          </li>
          <li className="hover:underline hover:scale-110">
            <a href="#Hero">Features</a>
          </li>
          <li className="hover:underline hover:scale-110">
            <a href="#Hero">Benefits</a>
          </li>
          <li className="hover:underline hover:scale-110">
            <a href="#Hero">Working</a>
          </li>
          <li className="hover:underline hover:scale-110">
            <a href="#Hero">Pricing</a>
          </li>
        </ul>
        <button className="bg-slate-800 cursor-pointer hover:scale-110 text-white px-4 py-2 rounded-md hover:bg-[#2F9AF8] transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
