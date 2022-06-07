import { HeartIcon } from "@heroicons/react/outline";
import HeartIconSolid from "@heroicons/react/solid/HeartIcon";
import React, { useState } from "react";

const ArrivalCard = ({ item }) => {
    const [liked,setLiked] = useState(false)
  return (
    <div className="w-60 min-h-[320px] mx-auto border hover:border-black">
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
        <img className="w-full" src={item.img} alt="" />
      </div>
      <div className="p-2">
        <h1 className="font-normal text-xs">{item.title}</h1>
        <p className="font-light text-xs">{item.category}</p>
      </div>
    </div>
  );
};

export default ArrivalCard;
