import React from "react";
import sw from "../Assets/sw2.jpeg";

export default function MainContent() {
  return (
    <div className="flex">
      <div className=" w-[550px] h-[400px] ml-[314px]  mt-36">
        <h1 className="text-white text-8xl"> Monitoring Your Life</h1>
        <p className="text-white text-sm mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          temporibus nostrum magnam adipisci aspernatur velit rem, suscipit
          officiis libero molestiae! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugit mollitia, minus ea quas explicabo rerum quam
          impedit velit harum cum?
        </p>
        <button className="bg-red-700 p-3 w-36 rounded-full text-white mt-7 hover:bg-gray-300 hover:text-black">
          Discover Now
        </button>
      </div>
      <div>
        <div className="w-[410px] h-[410px] rounded ml-36 mt-36 relative">
          <div className="border-2 rounded-full w-96 h-96 absolute right-12 bottom-16 transition-transform transform hover:scale-110 hover:duration-300">
            <img
              src={sw}
              alt="sw"
              className="rounded-full w-full h-full animate-spin-fast hover:animate-none hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 