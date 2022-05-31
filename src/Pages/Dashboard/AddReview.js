import { StarIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [success, setSuccess] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const testimonial = {
      name: user.displayName,
      email: user.email,
      rating: currentValue,
      review: data.review,
    };

    fetch("https://agile-atoll-96122.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessTOken")}`,
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(testimonial),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsOpen(true);
          setSuccess(true);
          setCurrentValue(1)
          reset()
        }
      });
  };

  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="min-h-[75vh] w-full flex items-center duration-300 mt-24">
   
    <div className="w-full max-w-md mx-auto">
    <h1 className="text-3xl text-center font-semibold mb-8">Rate & Review</h1>
    <form
        className="w-full max-w-md mx-auto rounded-md mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6 w-full max-w-xs mx-auto">
        <label
            className="form-label inline-block mb-4 text-gray-700"
          >
            Rating <span><small>({currentValue}/5)</small></span>
          </label>
          <div className="flex justify-center items-center space-x-2">
          {
            stars.map((e,i) => {
              return (
                <StarIcon 
                key={i} 
                className={`w-8 cursor-pointer ${currentValue > i ? 'text-yellow-400' : 'text-gray-200'}`}
                onClick={() => handleClick(i+1)}
                />
              )
            })
          }
          </div>
        </div>
        <div className="mb-6 flex flex-col w-full max-w-xs mx-auto">
          <label
            htmlFor="review"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Review
          </label>
          <textarea
            id="review"
            className="textarea border-2 border-gray-400 focus:border-indigo-500  h-52"
            placeholder="Review"
            {...register("review", { required: true })}
          ></textarea>
        </div>
        <div className="w-full max-w-xs mx-auto">
          <button
            type="submit"
            className="w-full btn bg-indigo-500 hover:bg-indigo-600 shadow-xl text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="reactModal"
      >
       <div className="w-full h-full grid place-content-center relative">
         <button className="absolute top-2 right-2 bg-indigo-500 rounded-lg hover:bg-indigo-600" onClick={closeModal}><XIcon className="w-10 text-white p-2"/></button>
         <p>thank you For Your Feedback</p>
       </div>
      </Modal>
    </div>
  );
};

export default AddReview;
