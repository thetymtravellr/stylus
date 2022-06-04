import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {

  const { img, title, desc } = item;
  return (
    <div className="font-robotoFlex adiHaus ">
     <Link to='/blog'>
     <figure>
        <img
        className="w-full"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="mt-2">
        <h2 className="text-base text-black uppercase"><strong>{title}</strong></h2>
        <p className="text-base font-light">{desc}</p>
      </div>
     </Link>
    </div>
  );
};

export default ShopCard;
