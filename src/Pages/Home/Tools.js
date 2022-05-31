import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ToolsCard from "../../Component/ToolsCard";
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
    const res = await fetch("https://agile-atoll-96122.herokuapp.com/tools");
    return res.json();
  });

  if (isLoading || loading) {
    return <p>Loading...</p>;
  }
  if (error || userError) {
    return <p>error</p>;
  }

  const reversedArray = [...tools]?.reverse();

  return (
    <section className="min-h-screen bg-slate-400 pb-12">
      <h1 className="text-2xl font-normal text-center mb-8 text-white">
        NEW <span className="gilroyBold text-indigo-500 text-4xl">ARRIVAL</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 w-full max-w-5xl mx-auto">
        {reversedArray.slice(0, 6)?.map((tool) => (
          <ToolsCard key={tools.indexOf(tool)} admin={admin} tool={tool}></ToolsCard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {admin && (
          <div className="flex space-x-4">
            <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0" to="/dashboard/manageproducts">Manage Products</Link>
            <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0" to="/dashboard/addproduct">Add Product</Link>
          </div>
        )}
        {!admin && (
          <div>
            <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0" to="/products">See All Products</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;
