import {
  ChartBarIcon,
  PresentationChartBarIcon
} from "@heroicons/react/outline";
import { ChartPieIcon } from "@heroicons/react/solid";
import React from "react";
import CountUp from "react-countup";

const BusinessReview = () => {
  return (
    <section className="min-h-[75vh] grid place-content-center">
      <h1 className="text-4xl font-normal text-center mb-8">
        Our Business{" "}
        <span className="gilroyBold text-orange-500">Statistics</span>
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8 space-x-0 md:space-y-0 space-y-3 m-6">
        
        <div className="stats shadow hover:-translate-y-2 duration-300">
          <div className="stat text-center bg-teal-500 text-white">
            <div className="stat-title">Total Products Sold</div>
            <div className="stat-value gilroyBold text-5xl ">
              <p className="flex justify-center items-center text-md">
                <ChartPieIcon className="w-8 mr-2" />{" "}
                <CountUp end={29400} duration={2} />
              </p>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow hover:-translate-y-2 duration-300">
          <div className="stat text-center bg-orange-500 text-white">
            <div className="stat-title">Total Profit</div>
            <div className="stat-value gilroyBold text-5xl ">
              <p className="flex items-center justify-center">
                <PresentationChartBarIcon className="w-8 mr-2" />
                <CountUp end={37} duration={2} />%
              </p>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow hover:-translate-y-2 duration-300">
          <div className="stat text-center bg-indigo-500 text-white">
            <div className="stat-title">Total New Customer</div>
            <div className="stat-value gilroyBold text-5xl ">
              <p className="flex items-center justify-center">
                <ChartBarIcon className="w-8 mr-2" />{" "}
                <CountUp end={1400} duration={2} />
              </p>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default BusinessReview;
