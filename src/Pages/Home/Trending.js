import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { A11y, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrivalCard from "../../Component/ArrivalCard";
import useWindowSize from "../../hooks/useWindowSize";

const Trending = () => {
  const [active, setActive] = useState(0);
  const [arrival, setArrival] = useState([]);
  const [width, height] = useWindowSize();
  const [slidesView, setSlidesView] = useState(0);

  useEffect(() => {
    fetch("arrival.json")
      .then((res) => res.json())
      .then((data) => setArrival(data));
  }, []);
  console.log(width);

  // if (width >= 800){
  //   setSlidesView(3)
  // } else {
  //   setSlidesView(1)
  // }
  
  // } else if (width >= 800){
  //   setSlidesView(3)
  // } else if (width >= 500){
  //   setSlidesView(1)
  // }

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
          className="mx-16"
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={5}
          slidesPerGroup={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {active === 0 &&
            arrival.map((item, index) => (
              <SwiperSlide>
                <ArrivalCard key={index} item={item}></ArrivalCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
