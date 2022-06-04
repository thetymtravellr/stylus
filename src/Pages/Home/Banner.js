import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import React from "react";

const Banner = () => {
  return (
    <section className=" bg-center bg-cover min-h-screen w-full bg-hero bg-black/70 bg-blend-darken pt-20">
       <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto min-h-screen">
       <div className="w-full lg:w2/4 h-full px-8 order-2 lg:order-1">
          <h1 className="gilroyBold text-white text-5xl uppercase">
            Trusted
            By
            <br />
            <span className="text-purple-700"> PROS</span>
          </h1>
          <p className=" text-gray-300 max-w-3xl">
            Leading Wholesale Computer Parts Seller In The Region. 
          </p>
          <div className="">
          <button className="bg-white flex items-center px-5 py-3 text-lg font-bold hover:text-gray-500 mt-8">Shop Now <ArrowNarrowRightIcon className="w-7 ml-3"/></button>
          </div>
        </div>
       </div>
    </section>
  );
};

export default Banner;
