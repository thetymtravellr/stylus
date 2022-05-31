import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ReviewCard from "../../Component/ReviewCard";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const [user, loading, userError] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const { data, isLoading, error } = useQuery("reviews", async () => {
    const res = await fetch("https://blooming-sierra-55430.herokuapp.com/reviews");
    return res.json();
  });

  if (isLoading || loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (error || userError) {
    return <p>error</p>;
  }

  const reviews = [...data]?.reverse();

  return (
    <section className="min-h-[75vh] w-full max-w-6xl mx-auto grid place-content-center gap-12">
      <h1 className="text-2xl font-normal text-center">
        TESTIMONIALS FROM OUR SATISTFIED{" "}
        <span className="gilroyBold text-orange-500 text-4xl">CUSTOMERS</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center mb-8">
        {reviews.slice(0, 3)?.map((review, index) => (
          <ReviewCard index={index} key={review._id} review={review}></ReviewCard>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mb-6">
        <Link className="w-fit" to="/testimonials">
          <button className="bg-indigo-500 py-2 px-5 text-white rounded hover:shadow-xl duration-200">
            See All Review
          </button>
        </Link>
        {!admin && (
          <Link className="w-fit" to="/dashboard/addreview">
            <button className="bg-indigo-500 py-2 px-5 text-white rounded hover:shadow-xl duration-200">
              Write a Review
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Reviews;
