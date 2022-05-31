import { XIcon } from "@heroicons/react/solid";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const PaymentForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const { totalPrice, customer, customerEmail, _id } = order;

  useEffect(() => {
    if (totalPrice) {
      fetch(`https://agile-atoll-96122.herokuapp.com/create-payment-intent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ totalPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setPaymentSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customer,
            email: customerEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setPaymentSuccess("Your Payment is Successfully Completed");

      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      };
      
      fetch(`https://agile-atoll-96122.herokuapp.com/orders/${_id}`, {
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
            setIsOpen(true);
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn bg-teal-500 text-white hover:bg-teal-600 btn-sm mt-6"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="reactModal"
      >
        <div className="w-full h-full grid place-content-center relative">
          <button
            className="absolute top-2 right-2 bg-indigo-500 rounded-lg hover:bg-indigo-600"
            onClick={closeModal}
          >
            <XIcon className="w-8 text-white p-2" />
          </button>
          <div className="text-center">
            {cardError && <p className="text-red-500">{cardError}</p>}
            {paymentSuccess && (
              <div>
                <p className="mb-4 text-green-500">{paymentSuccess}</p>
                <p>
                  Your transaction Id:{" "}
                  <span className="text-bold">{transactionId}</span>
                </p>
              </div>
            )}
            <div className="mt-6 flex space-x-4 justify-center items-center">
              <Link
                className="btn btn-sm bg-slate-800 hover:bg-slate-400 text-white"
                to="/"
              >
                Go To Home
              </Link>
              <Link
                className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
                to="/dashboard/myorders"
              >
                My Orders
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PaymentForm;
