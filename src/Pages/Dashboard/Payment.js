import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51L2zjyIFdv3BucMSNJBXj4hKbMy8ZPHiz6dyNUZDEibMt1Ubxu6c1RnJgzhccJM2wVC1bQYIU9L8csbFm4FlMWPc001wgVwOxz"
);

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery("myOrders", async () => {
    const res = await fetch(`https://agile-atoll-96122.herokuapp.com/orders/${id}`, {
      method: "GET",
      headers: {
        'authorization': `bearer ${localStorage.getItem("accessToken")}`,
      }
    });
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
    return <p>error</p>;
  }

  return (
   <>
   <div className="h-full">
  
    <div className="h-full w-full grid place-content-center gap-4">
  <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={data.img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
  <h2 className="card-title">{data.name}</h2>
    <div className="flex space-x-4">
    <p>Order Quantity:</p> <p>{data.orderQuantity}</p>
    </div>
    <div className="flex space-x-4">
    <p>Total Price:</p> <p>{data.totalPrice}</p>
    </div>
    <p>Please Pay <span className="text-teal-500">${data.totalPrice}</span> To Confirm The Order</p>
  </div>
</div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <PaymentForm order={data}/>
          </Elements>
        </div>
      </div>
    </div>
   </div>
   </>
  );
};

export default Payment;
