import axios from "axios";
import React, { useEffect, useState } from "react";
import { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ShopCard from "../../Component/ShopCard";

const Shop = () => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    axios.get("shop.json").then((data) => setShop(data.data));
  });

  return (
    <section className="mt-24">
      <div className="mx-2">
        <Swiper
          className=""
          modules={[Navigation, A11y]}
          spaceBetween={80}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween:20
            },
            1060: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween:20
            },
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween:20
            },
          }}
          navigation
          scrollbar={{ draggable: true }}
        >
          {shop?.map((item) => (
            <SwiperSlide className="w-[400px]">
              <ShopCard key={item._id} item={item}></ShopCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Shop;
