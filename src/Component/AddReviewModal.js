import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";

const AddReviewModal = () => {
  const [user] = useAuthState(auth);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

    const testimonial = {
      name: data.name,
      email: user.email,
      rating: data.rating,
      review: data.review,
    }
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
          setSuccess(true);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="reviewModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
      <div class="modal-box relative">
      <label htmlFor="reviewModal" onClick={() => setSuccess(false)} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
         
          {success ? (
               <>
               <h3 className="font-bold text-2xl text-center mb-8">Thank You!</h3>
              <p className="py-4">
                We Always Encourage Your Feedback.
              </p>
               </>
          ) : (
            <>
            <h3 className="font-bold text-2xl text-center mb-8">Add A Review</h3>
            <form
              className="w-full max-w-xl mx-auto rounded-md mb-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control
        w-full
        max-w-md
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                  id="name"
                  placeholder="Enter Name"
                  {...register("name", { required: true })}
                  value={user.displayName}
                />
              </div>
              <div className="mb-6 flex items-center space-x-6">
                <label htmlFor="rating"> Rating: </label>
                <input
                  id="rating"
                  className="
                w-24
        px-3
        py-1.5
        text-center
        font-bold text-xl
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                  type="number"
                  min="1"
                  max="5"
                  {...register("rating", { required: true })}
                />
                <label>
                  <span className="label-text-alt">(Max 5)</span>
                </label>
              </div>
              <div className="mb-6 flex flex-col">
                <label
                  htmlFor="review"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Review
                </label>
                <textarea
                  id="review"
                  className="textarea textarea-bordered w-full max-w-md"
                  placeholder="Review"
                  {...register("review", { required: true })}
                ></textarea>
              </div>
              <div className="flex justify-center space-x-4">
                <button type="submit" className="btn btn-primary text-white">
                  Add
                </button>
              </div>
            </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;
