import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../Component/CustomLink";
import DisclosureMenu from "../../Component/DisclosureMenu";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="flex items-center fixed top-0 w-full border-b-[1px] border-gray-700 bg-primary text-white h-20 z-40">
      <div className="flex w-full justify-between items-center mx-auto px-4 md:px-20">
        <h1 className="gilroyBold text-3xl text-white uppercase">Toolers</h1>
        <nav>
          <ul className="flex items-center space-x-1 font-poppins uppercase text-sm font-semibold text-base-100 h-20">
            {/* <li className="hidden md:block">
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className="hidden md:block">
              <CustomLink to="/blog">Blog</CustomLink>
            </li>
            <li className="hidden md:block">
              <CustomLink to="/portfolio">Portfolio</CustomLink>
            </li> */}
            {user ? (
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
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
