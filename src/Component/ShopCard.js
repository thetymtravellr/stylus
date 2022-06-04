import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {

  const { img, title, desc } = item;
  return (
    <div className="font-robotoFlex adiHaus relative min-h-[85vh]">
     <Link to='/blog'>
     <figure>
        <img
        className="w-full"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="mt-2 ">
        <h2 className="text-base text-black uppercase"><strong>{title}</strong></h2>
        <p className="text-base font-light">{desc}</p>
      </div>
     <div className="absolute bottom-4">
     <Link to='/' className="uppercase underline hover:bg-black hover:text-white hover:no-underline adiHaus text-lg text-black"><strong>shop now</strong></Link>
     </div>
     </Link>
    </div>
  );
};

export default ShopCard;
