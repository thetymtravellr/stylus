import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const TestimonialCard = ({ testimonial }) => {

    const { name, rating, review } = testimonial;

    return (
        <div className={`card  mx-auto shadow-xl bg-white w-80 h-80`}>
        <div className="card-body items-center text-center">
          <p className="text-sm text-justify">{ review }</p>
          <div className="card-actions flex-col items-center">
            <div className="flex">
              {Array.from(Array(parseInt(rating)), (e, i) => (
                <StarIcon
                  key={i}
                  className={` w-6 text-yellow-500`}
                />
              ))}
            </div>
            <p className="">{name}</p>
          </div>
        </div>
      </div>
    );
};

export default TestimonialCard;