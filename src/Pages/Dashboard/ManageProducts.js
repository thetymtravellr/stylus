import React from "react";
import { useQuery } from "react-query";
import DeleteModal from "../../Component/DeleteModal";
import Loading from "../Shared/Loading";

const ManageProducts = () => {

  const { data, isLoading, error, refetch } = useQuery("tools", async () => {
    const res = await fetch("https://agile-atoll-96122.herokuapp.com/products", {
      method: "GET",
      headers: {
        'authorization': `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.json();
  });

  if (isLoading) {
    return (<div className="min-h-[75vh] grid place-content-center"><Loading></Loading></div>)
  }

  if (error) {
    return <div className="min-h-[75vh] grid place-content-center"><p>error</p></div>;
  }

  return (
    <section className="mt-24 p-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
        <thead className="bg-slate-400 text-white">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((product) => {
                  return (
                    <tr key={product._id} >
                      <th className="bg-white">{data.indexOf(product) + 1}</th>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                      <DeleteModal refetch={refetch} id={product._id}></DeleteModal>
                      </td>
                    </tr>
                  )
              })}
          </tbody>
        </table>
      </div>
      
    </section>
  );
};

export default ManageProducts;
