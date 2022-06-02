import { MenuAlt2Icon, SearchIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../../Component/CustomLink";
import auth from "../../firebase.init";
import NoticeBoard from "./NoticeBoard";
import SideNav from "./SideNav";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  return (

  <header className="flex flex-col items-center sticky top-0 w-full border-b-[1px] h-16 z-40">
  <NoticeBoard/>
  <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className="bg-white w-full">
      <div className="flex w-full justify-between items-center mx-auto py-2">
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <MenuAlt2Icon className="text-black w-10 pl-2"/>
          </button>
        </div>
        <Link to='/'><h1 className="gilroyBold text-3xl uppercase">Toolers</h1></Link>
        <nav className="hidden lg:block">
        <ul className="flex items-center space-x-6 font-poppins uppercase text-sm font-semibold text-black">
            <li className="">
              <Link to="/">MEN</Link>
            </li>
            <li className="">
              <Link to="/">WOMEN</Link>
            </li>
            <li className="">
              <Link to="/">KIDS</Link>
            </li>
            <li className="">
              <Link to="/">SALE</Link>
            </li>
            <li className="">
              <Link to="/">3 STRIPE LIFE</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center space-x-6 font-poppins uppercase text-sm font-semibold text-base-100">
            <li className="">
              <Link to="/">
                <UserIcon className="w-6 h-6 text-black"/>
              </Link>
            </li>
            <li className="">
              <Link to="/">
                <SearchIcon className="w-6 h-6 text-black"/>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/">
                <ShoppingBagIcon className="w-6 h-6 text-black"/>
              </Link>
              <div className="absolute right-0 top-6 bg-white text-black text-center font-bold text-2xl w-80 px-6 py-4 hidden group-hover:block">
                <p>Your Bag Is Empty</p>
              </div>
            </li>
            {
              !user && 
              <>
               <li>
                  <CustomLink to="/login">Login</CustomLink>
                </li>
                <li>
                  <CustomLink to="/register">Register</CustomLink>
                </li>
              </>
            }
            {/* {user ? (
              <>
               <li>
               <DisclosureMenu></DisclosureMenu>
               </li>
              </>
            ) : (
              <>
                <li>
                  <CustomLink to="/login">Login</CustomLink>
                </li>
                <li>
                  <CustomLink to="/register">Register</CustomLink>
                </li>
              </>
            )} */}
          </ul>
        </nav>
      </div>
    </div>
  </header>
  );
};

export default Header;
