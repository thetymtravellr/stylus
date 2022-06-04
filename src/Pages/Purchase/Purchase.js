import {
    MinusCircleIcon,
    PlusCircleIcon, XIcon
} from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useUser from "../../hooks/useUser";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function closeModal() {
    setIsOpen(false);
  }

  const { data: userData, refetch } = useUser(user);

  useEffect(() => {
    axios
      .get(`https://blooming-sierra-55430.herokuapp.com/products/${id}`)
      .then((data) => setProduct(data.data));
  }, [id, product]);

  const {
    _id,
    img,
    description,
    price,
    productName,
    quantity,
    supplierEmail,
    supplierName,
    minimum,
  } = product;

  const parsedPrice = parseInt(price);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    setInputValue(minimum);
  }, [quantity, minimum]);
 
  const checkValue = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const increaseValue = () => {
    setInputValue((prev) => parseInt(prev) + 1);
  };

  const decreaseValue = () => {
    if (inputValue === minimum) {
      return;
    } else {
      setInputValue((prev) => parseInt(prev) - 1);
    }
  };

  const onSubmit = (data) => {

    const order = {
      img: img,
      name: productName,
      orderQuantity: inputValue,
      totalPrice: parsedPrice * inputValue,
      customer: userData.displayName,
      customerEmail: userData.email,
      address: data.address,
      phone: data.phone,
      status: 'unpaid',
    };

    fetch("https://blooming-sierra-55430.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const newQuantity =
          quantity - parseInt(inputValue);
          fetch(`https://blooming-sierra-55430.herokuapp.com/products/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ newQuantity }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setIsOpen(true);
              }
            });
        } else {
          setMessage(data.message);
        }
      });
  };

  return (
    <section className="min-h-screen w-full max-w-7xl mx-auto mt-24">
     <div className="border w-fit py-2 px-6 bg-indigo-100 border-r-4 border-r-indigo-500">
     <p className="">Hello , {userData?.name}</p>
     <p className="">{userData?.email}</p>
     </div>
        <div className="w-full max-w-7xl mx-auto px-4 py-8 flex lg:space-x-6 lg:space-y-0 space-y-6 flex-col lg:flex-row justify-center">
          <div className="w-full max-w-xl mx-auto mb-8">
            <img className="w-full h-80 object-cover max-w-xs mx-auto" src={img} alt="" />
            <div className="w-full mx-4">
              <div>
                <h1 className="text-3xl font-bold uppercase">{productName}</h1>
                <p className="mt-1 text-2xl">${price}</p>
              </div>
              <div className="my-2">
                <p className="text-justify text-sm">{description}</p>
              </div>
              <div>
                <p>Available Quantity:</p>
                <p className="text-xl font-bold">{quantity}</p>
              </div>
              <div>
                <p className="text-sm">Supplier Info:</p>
                <p className="pt-0 text-gray-400">
                  <small>{supplierName}</small>
                </p>
                <p className="pt-0 text-gray-400">
                  <small>Email: {supplierEmail}</small>
                </p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="bg-gray-100 w-full max-w-xl mx-auto">
            <h1 className="text-3xl text-center my-10 font-medium font-poppins">Checkout</h1>
            <form
              className="w-full max-w-lg mx-auto rounded-md mb-4 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className="mb-4 w-full max-w-md mx-auto"
              >
                <label
                  htmlFor="address"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control
              w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
                  id="address"
                  placeholder="Enter address"
                  {...register("address", { required: true })}
                />
              </div>
              <div
                className="mb-4 w-full max-w-md mx-auto"
              >
                <label
                  htmlFor="phone"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control  w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
                  id="phone"
                  placeholder="phone"
                  {...register("phone", { required: true })}
                />
              </div>
              <div
                className="mb-4 w-full max-w-md mx-auto"
              >
                  <label
                  htmlFor="amount"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Order Amount
                </label>
            <div className="flex">
            <button
            type="button"
              className="border border-gray-400 w-20 mx-auto rounded-md"
                disabled={inputValue === minimum}
                onClick={decreaseValue}
              >
                <MinusCircleIcon
                  className={`w-10 mx-auto ${
                    inputValue === minimum && "text-gray-300"
                  }`}
                />
              </button>
                <input
                  className="input input-bordered border-gray-400 w-2/4 mx-auto font-bold text-xl text-center"
                  type="number"
                  min={minimum}
                  max={quantity}
                  onChange={checkValue}
                  value={inputValue}
                  {...register("amount", { required: true })}
                />
              <button
              type="button"
              className="border border-gray-400 w-20 mx-auto rounded-md"
                disabled={inputValue >= quantity}
                onClick={increaseValue}
              >
                <PlusCircleIcon
                  className={`w-10 mx-auto ${
                    inputValue >= quantity && "text-gray-300"
                  }`}
                />
              </button>
            </div>
           <div className="w-full text-center">
           {inputValue >= quantity && (
            <span className="text-red-500">
              <small>Cannot Select More</small>
            </span>
          )}
          {message && <span className="text-red-500">Already purchased</span>}
           </div>
            </div>
              <div
                className="mt-8 mb-4 w-full max-w-md mx-auto"
              >
             <button
                type="submit"
                className="
                w-full
      px-6
      py-2.5
      bg-indigo-500
      text-white
      font-medium
      text-md
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-600 hover:shadow-lg
      focus:bg-indigo-500 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-500 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Submit Order
              </button>
             </div>
            </form>
          </div>
      </div>
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
            <XIcon className="w-10 text-white p-2" />
          </button>
          <div className="text-center">
            <p className="mb-4">Product Added To Orders!!!</p>
            <div>
              <Link
                className="btn bg-slate-800 hover:bg-slate-400 text-white"
                to="/"
              >
                Go To Home
              </Link>
              <Link
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                to="/dashboard/myorders"
              >
                My Orders
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Purchase;
