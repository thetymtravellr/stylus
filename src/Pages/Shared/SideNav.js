import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = ({ isOpen, setIsOpen }) => {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`sidebar z-50 w-full h-screen bg-white absolute top-0`}
    >
      <div className="w-full h-full relative p-4">
        <header className="border-b pb-3">
          <Link to="/">
            <h1 className="gilroyBold text-3xl uppercase text-center">
              Toolers
            </h1>
          </Link>
          <button
            className="absolute right-4 top-4"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="w-8" />
          </button>
        </header>
        <div>
          <ul className="border-b py-4 flex flex-col space-y-4 text-xl w-full">
            <li className="font-semibold w-full hover:bg-black/5 p-2">
              <Link to="/">MEN</Link>
            </li>
            <li className="font-semibold w-full hover:bg-black/5 bg-opacity-5 p-2">
              <Link to="/">WOMEN</Link>
            </li>
            <li className="font-semibold w-full hover:bg-black/5 bg-opacity-5 p-2">
              <Link to="/">KIDS</Link>
            </li>
            <li className="font-light w-full hover:bg-black/5 bg-opacity-5 p-2">
              <Link to="/">SALE</Link>
            </li>
            <li className="font-light w-full hover:bg-black/5 bg-opacity-5 p-2">
              <Link to="/">3 STRIPE LIFE</Link>
            </li>
          </ul>
          <ul className="py-4 flex flex-col text-lg w-full">
            <li className="p-1">
              <Link to="/">MEN</Link>
            </li>
            <li className="p-1">
              <Link to="/">WOMEN</Link>
            </li>
            <li className="p-1">
              <Link to="/">KIDS</Link>
            </li>
            <li className="p-1">
              <Link to="/">SALE</Link>
            </li>
            <li className="p-1">
              <Link to="/">3 STRIPE LIFE</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SideNav;
