import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const ReviewCard = ({ review, index }) => {
  const { name, rating, review: testimonial } = review;

  return (
    <div className={`card  mx-auto shadow-xl  ${index === 1 ? 'bg-indigo-500 md:w-96 w-80 h-80 text-white shadow-2xl' : 'bg-white md:w-80 w-60 h-60'}`}>
      <div className="card-body items-center text-center">
        <p className="text-sm text-justify">{index === 1 ? testimonial.slice(0,350) : testimonial.slice(0,150)}...</p>
        <div className="card-actions flex-col items-center">
          <div className="flex">
            {Array.from(Array(parseInt(rating)), (e, i) => (
              <StarIcon
                key={i}
                className={`${
                  index === 1 ? "w-6 text-yellow-500" : "w-5 text-yellow-600"
                }`}
              />
            ))}
          </div>
          <p className="">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
