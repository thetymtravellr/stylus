import React from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../Assets/Icons/email.png";
import fbIcon from "../../Assets/Icons/facebook.png";
import twitterIcon from "../../Assets/Icons/twitter.png";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] grid place-content-center bg-slate-400">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div>
          <h1 className="text-3xl gilroyBold text-white">Toolers</h1>
        </div>
        <ul className="flex justify-center space-x-6 text-gray-500">
          <li className="hover:text-white">
            <Link className="uppercase" to="/blog">
              BLOG
            </Link>
          </li>
          <li className="hover:text-white">
            <Link className="uppercase" to="/portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li className="hover:text-white">
            <Link className="uppercase" to="/products">
              PRODUCTS
            </Link>
          </li>
          <li className="hover:text-white">
            <Link className="uppercase" to="/dashboard">
              DASHBOARD
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center space-x-6">
          <li>
            <img className="w-8" src={fbIcon} alt="" />
          </li>
          <li>
            <img className="w-8" src={twitterIcon} alt="" />
          </li>
          <li>
            <img className="w-8" src={mailIcon} alt="" />
          </li>
        </ul>
        <p className="text-white">All Right Reserved By Toolers</p>
      </div>
    </footer>
  );
};

export default Footer;
