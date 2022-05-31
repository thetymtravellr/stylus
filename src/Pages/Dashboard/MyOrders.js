import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import CancelModal from "../../Component/CancelModal";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const {
    data: orders,
    isLoading,
    error,
    refetch,
  } = useQuery("myOrders", async () => {
    const res = await fetch(
      `https://agile-atoll-96122.herokuapp.com/orders?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          'authorization': `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return res.json();
  });

  if (isLoading) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <Loading></Loading>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <p>error</p>
      </div>
    );
  }

  return (
    <section className="mt-24 p-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-slate-400 text-white">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0
              ? orders?.map((order) => {
                  return (
                    <tr key={order._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar hidden md:block">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={order.img}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{order.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{order.orderQuantity}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                          <p className={`rounded-lg px-1 ${order.status === 'shipped' && 'bg-teal-100 text-teal-500'} ${order.status === 'pending' && 'bg-gray-900 text-white'} ${order.status === 'unpaid' && 'bg-red-100 text-red-500'}`}>
                            {order.status}
                          </p>
                      </td>
                      <td>
                        {order.status === 'unpaid' && (
                          <>
                            <Link to={`/dashboard/payment/${order._id}`}>
                              <button className="btn bg-teal-500 hover:bg-teal-600 text-white btn-sm">
                                pay
                              </button>
                            </Link>
                            <CancelModal
                              id={order._id}
                              refetch={refetch}
                            ></CancelModal>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
