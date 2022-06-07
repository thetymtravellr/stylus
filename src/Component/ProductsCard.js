import { HeartIcon } from '@heroicons/react/outline';
import HeartIconSolid from "@heroicons/react/solid/HeartIcon";
import React, { useState } from 'react';

const ProductsCard = ({ product }) => {
  const [liked,setLiked] = useState(false)

    const {  img,title, desc, category } = product;
    console.log(product);
    return (
      <div className="w-full max-w-lg min-h-[320px] mx-auto border hover:border-black">
      <div className="relative bg-blue-500 w-full">
      <button 
        onClick={()=> setLiked(!liked)}
        className="absolute right-4 top-4">
          {
              !liked && <HeartIcon className="w-6 text-black " />
          }
          {
              liked && <HeartIconSolid className="w-6 text-black " />
          }
        </button>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="p-2">
        <h1 className="font-normal text-xs">{title}</h1>
        <p className="font-light text-xs">{category}</p>
      </div>
    </div>
    );
};

export default ProductsCard;