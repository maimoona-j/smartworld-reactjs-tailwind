import React from "react";
import logo from "../Assets/logo.png";

export default function NavBar() {
  return (
    <div className="h-16 bg-black text-white cursor-pointer">
      <nav className="flex items-center justify-between px-4">
        <div className="flex ">
          <img src={logo} alt="logo" className="w-12 h-10 ml-10 mt-3 rounded-full" />
          <h3 className="text-xl mt-4 ml-2">Smart World</h3>
        </div>

        <ul className="flex mt-3 text-xl ">
          <li className="px-4 hover:underline hover:text-red-700 transition ease-in-out duration-300">Home</li>
          <li className="px-4 hover:underline hover:text-red-700 transition ease-in-out duration-300">Services</li>
          <li className="px-4 hover:underline hover:text-red-700 transition ease-in-out duration-300 ">About</li>
        </ul>

        <button className="bg-red-700 mr-16 mt-3 p-2 w-36 rounded shadow-inner text-xl hover:bg-gray-300 hover:text-black">Contact</button>
      </nav>
    </div>
  );
}
