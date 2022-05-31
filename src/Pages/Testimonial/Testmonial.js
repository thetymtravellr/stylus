import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const { data, isLoading, error } = useQuery("reviews", async () => {
        const res = await fetch("https://agile-atoll-96122.herokuapp.com/reviews");
        return res.json();
      });
    
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

      const reviews = [...data]?.reverse();

    return (
        <div className='w-full max-w-7xl mx-auto mt-24'>
            <h1 className='text-4xl text-center font-bold mb-4'>Testimonials</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {
                    reviews.map(testimonial => <TestimonialCard key={testimonial._id} testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;