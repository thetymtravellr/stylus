import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { A11y, Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrivalCard from "../../Component/ArrivalCard";

const Trending = () => {

  const [active, setActive] = useState(0);
  const [arrival, setArrival] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("arrival.json")
      .then((res) => res.json())
      .then((data) => setArrival(data));
  }, []);
  useEffect(() => {
    fetch("trending.json")
      .then((res) => res.json())
      .then((data) => setTrending(data));
  }, []);

  return (
    <section className="min-h-[75vh] w-full">
      <div className="uppercase w-full border flex items-center justify-between px-2">
        <div className="flex space-x-4">
          <button
            onClick={() => setActive(0)}
            className={`py-7 border-b-4  ${
              active === 0 ? " border-black font-medium" : "border-white"
            }`}
          >
            new arrivals
          </button>
          <button
            onClick={() => setActive(1)}
            className={`py-7 border-b-4  ${
              active === 1 ? " border-black font-medium" : "border-white"
            }`}
          >
            whats trending
          </button>
        </div>
        <Link
          to="/"
          className="text-sm underline hover:bg-black hover:text-white hover:no-underline cursor-pointer font-semibold "
        >
          view all
        </Link>
      </div>

      <div className="p-4">
        <Swiper
          className=""
          style={{zIndex: 1,position: 'relative'}}
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640:{
              slidesPerView: 2,
              slidesPerGroup:2,
              spaceBetween:10
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup:3,
              spaceBetween:10
            },
            1060: {
              slidesPerView: 4,
              slidesPerGroup:4,
              spaceBetween:10
            },
            1200: {
              slidesPerView: 6,
              slidesPerGroup:6,
              spaceBetween:10
            },
          }}
          navigation
          scrollbar={{ draggable: true }}
        >
          {active === 0 &&
            arrival.map((item, index) => (
              <SwiperSlide className="">
                <ArrivalCard key={index} item={item}></ArrivalCard>
              </SwiperSlide>
            ))}
          {active === 1 &&
            trending.map((item, index) => (
              <SwiperSlide className="">
                <ArrivalCard key={index} item={item}></ArrivalCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
