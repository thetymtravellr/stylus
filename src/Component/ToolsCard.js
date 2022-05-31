import { CashIcon, CubeIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const ToolsCard = ({ tool, admin }) => {
  const {
    _id,
    productName,
    img,
    description,
    quantity,
    price,
    rating,
    minimum,
  } = tool;
  const shortDescription = description.slice(0, 80);
  return (
    <>
      <div className="card max-w-xs mx-auto bg-slate-800 rounded-lg">
        <figure className="p-1 relative">
          {
            !admin && (<Link to={`/purchase/${_id}`}><button className="group absolute -bottom-5 right-4 bg-indigo-500 hover:bg-indigo-600 text-gray-200 rounded-xl transition-all duration-300 p-3"><ShoppingCartIcon className="w-8  rounded-xl duration-300 transition-all" />
            </button></Link>)
          }
          <img src={img} alt="Shoes" className="h-80 w-80 object-cover rounded-lg " />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-lg text-left text-white font-robotoFlex font-medium">
            {productName}
          </h2>
          <p className="text-gray-400">
            <small>{shortDescription}</small>
          </p>

          <div className="flex items-center justify-evenly w-full mt-4">
            <div className="flex items-center space-x-2">
              <p>
                <CashIcon className="w-8 text-orange-500" />
              </p>
              <p className="text-md font-medium text-gray-300">${price}</p>
            </div>
            <div className="flex items-center space-x-1">
              <p>
                <CubeIcon className="w-7 text-orange-500" />
              </p>
              <p className="text-md font-medium text-gray-300">{quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsCard;
