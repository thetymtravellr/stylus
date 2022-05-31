import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageOrders = () => {

    const { data, isLoading, error, refetch } = useQuery("allOrders", async () => {
        const res = await fetch(`https://agile-atoll-96122.herokuapp.com/orders`, {
          method: "GET",
          headers: {
            'authorization': `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return res.json();
      });

      const updateStatus = id => {

        const payment = {
          status: 'shipped'
        };
  
        fetch(`https://agile-atoll-96122.herokuapp.com/orders/update/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch()
            }
          });
      }
    
      if (isLoading) {
        return (
          <div>
            <Loading></Loading>
          </div>
        );
      }
      if (error) {
        return <p>error</p>;
      }

    return (
        <section className="mt-24 p-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
        <thead className="bg-slate-400 text-white">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Customer</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              data?.map((order) => {
                  return (
                    <tr key={order._id} >
                      <th>{data.indexOf(order) + 1}</th>
                      <td>{order.name}</td>
                      <td>
                     {order.customer}
                      </td>
                      <td>
                          <p className="bg-red-100 w-fit text-sm p-1 rounded-md text-red-600">
                            {order.status}
                          </p>
                            {/* <CancelModal
                              id={order._id}
                              refetch={refetch}
                            ></CancelModal> */}
                      </td>
                      <td>
                       {
                         order.status !== 'shipped' &&  <button onClick={() => updateStatus(order._id)} className='btn btn-sm bg-teal-500 hover:bg-teal-600 text-white'>Update</button>
                       }
                      </td>
                    </tr>
                  )
              })}
            {isLoading && <Loading></Loading>}
          </tbody>
        </table>
      </div>
    </section>
    );
};

export default ManageOrders;