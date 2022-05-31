import React from "react";

const Banner = () => {
  return (
    <section className=" bg-slate-400 pb-20">
       <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto min-h-screen">
       <div className="w-full lg:w2/4 h-full  text-center px-8 order-2 lg:order-1">
          <h1 className="gilroyBold text-white text-5xl md:text-8xl lg:text-left  text-center uppercase">
            Trusted
            <br />
            By
            <br />
            <span className="text-indigo-500">PROS</span>
          </h1>
          <p className="lg:text-left  text-center mt-12 text-gray-300 max-w-3xl">
            Leading Wholesale Computer Parts Seller In The Region. 
          </p>
        </div>
        <div className="order-1 lg:order-2 mt-24 mb-12 lg:my-0 w-full lg:w2/4">
          {
            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_mn61zlcj.json"  background="transparent"  speed=".5"    loop autoplay></lottie-player>
          }

        </div>
       </div>
    </section>
  );
};

export default Banner;
