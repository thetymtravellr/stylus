import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Tools = () => {
  const [user, loading, userError] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const {
    data: tools,
    isLoading,
    error,
  } = useQuery("tools", async () => {
    const res = await fetch(
      "https://blooming-sierra-55430.herokuapp.com/tools"
    );
    return res.json();
  });

  if (isLoading || loading) {
    return <p>Loading...</p>;
  }
  if (error || userError) {
    return <p>error</p>;
  }

  return (
    <section className="min-h-screen py-12 uppercase">
      <h1 className="text-3xl adiHaus italic text-center mb-6 text-black ">
        popular right now
      </h1>
      <div className="popular-tags flex space-x-6 font-light text-base justify-center mb-16">
        <Link to="/" className=" border hover:border-black text-black p-3">
          ultraboost
        </Link>
        <Link to="/" className=" border hover:border-black text-black p-3">
          nmd
        </Link>
        <Link to="/" className=" border hover:border-black text-black p-3">
          samba
        </Link>
        <Link to="/" className=" border hover:border-black text-black p-3">
          stan smith
        </Link>
        <Link to="/" className=" border hover:border-black text-black p-3">
          cleats
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 h-[250px] sm:min-h-0 min-h-screen m-4">
      <div className="border bg-[#ebeff1] flex flex-row lg:flex-col items-center lg:justify-start justify-between h-auto">
          <Link to='/' className="order-1 lg:order-2 lg:mt-8 underline hover:bg-black hover:text-white hover:no-underline cursor-pointer font-semibold p-4 sm:p-0">shoes</Link>
          <img className="h-[180px] order-2 lg:order-1" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0a405ef444164510b0b7adf9015fa86b_9366/puremotion-super-shoes.jpg" alt="" />
          </div>
      <div className="border bg-[#ebeff1] flex flex-row lg:flex-col items-center lg:justify-start justify-between h-auto">
          <Link to='/' className="order-1 lg:order-2 lg:mt-8 underline hover:bg-black hover:text-white hover:no-underline cursor-pointer font-semibold p-4 sm:p-0">clothing</Link>
          <img className="h-[180px] order-2 lg:order-1" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/4de49fb9e6b146149ddbaca000cb9ff9_9366/adidas-designed-2-move-3-stripes-primeblue-shorts.jpg" alt="" />
          </div>
      <div className="border bg-[#ebeff1] flex flex-row lg:flex-col items-center lg:justify-start justify-between h-auto">
          <Link to='/' className="order-1 lg:order-2 lg:mt-8 underline hover:bg-black hover:text-white hover:no-underline cursor-pointer font-semibold p-4 sm:p-0">best sellers</Link>
          <img className="h-[180px] order-2 lg:order-1" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/c447324cf06544b78105ade500fd9e2f_9366/tiro-pants.jpg" alt="" />
          </div>
      <div className="border bg-[#ebeff1] flex flex-row lg:flex-col items-center lg:justify-start justify-between h-auto">
          <Link to='/' className="order-1 lg:order-2 lg:mt-8 underline hover:bg-black hover:text-white hover:no-underline cursor-pointer font-semibold p-4 sm:p-0">new arrivals</Link>
          <img className="h-[180px] order-2 lg:order-1" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d95f1b492c4a44dab782ae1c00af655b_9366/run-fast-flower-running-jacket.jpg" alt="" />
          </div>
         
      </div>
      {/* <div className="flex justify-center mt-8">
        {admin && (
          <div className="flex space-x-4">
            <Link
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0"
              to="/dashboard/manageproducts"
            >
              Manage Products
            </Link>
            <Link
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0"
              to="/dashboard/addproduct"
            >
              Add Product
            </Link>
          </div>
        )}
        {!admin && (
          <div>
            <Link
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0"
              to="/products"
            >
              See All Products
            </Link>
          </div>
        )}
      </div> */}
    </section>
  );
};

export default Tools;
