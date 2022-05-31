import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Loading from "../Pages/Shared/Loading";
import CustomLink from "./CustomLink";

const DisclosureMenu = () => {
  const [user] = useAuthState(auth);
  
  const { data, isLoading, error } = useQuery('userProfile', async () => {
    const res = await fetch(`https://blooming-sierra-55430.herokuapp.com/user/${user.email}`,{
      method: 'GET',
      headers: {
        'authorization': `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    return res.json()
  })

  if (isLoading) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <Loading>Getting Data...</Loading>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <p>something went wrong!</p>
      </div>
    );
  }

  const placeholderImg =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

  const logOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };

  if(isLoading){
   return <p>Loading...</p>
  }

  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="group inline-flex w-full justify-center items-center rounded-md bg-black bg-opacity-30 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img
              className="w-8 h-8 object-cover rounded-full"
              src={(data?.img || user?.photoURL) || placeholderImg}
              alt=""
            />
            <ChevronDownIcon
              className="group-hover:text-violet-500 ml-2 -mr-1 h-5 w-5 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute border border-gray-600 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-slate-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-3">
              <Menu.Item>
                <p className="text-center text-orange-400">Hello {(data?.name || user.displayName) || 'user'}!</p>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 block md:hidden">
              <Menu.Item>
                <CustomLink
                  to="/"
                  className={`
                    flex w-full items-center rounded-md text-sm font-medium`}
                >
                  <DuplicateActiveIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Home
                </CustomLink>
              </Menu.Item>
              <Menu.Item>
                <CustomLink
                  to="/blog"
                  className={`
                                   flex w-full items-center rounded-md text-sm font-medium`}
                >
                  <EditActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Blog
                </CustomLink>
              </Menu.Item>
              <Menu.Item>
                <CustomLink
                  to="/portfolio"
                  className={`
                                   flex w-full items-center rounded-md text-sm font-medium`}
                >
                  <ArchiveActiveIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Portfolio
                </CustomLink>
              </Menu.Item>
              <Menu.Item>
              <CustomLink
                  to="/dashboard"
                  className={`
                    flex w-full items-center rounded-md text-sm font-medium`}
                >
                  <DeleteActiveIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Dashboard
                </CustomLink>
              </Menu.Item>
            </div>
              <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => logOut()}
                    className={`${
                      active ? "bg-violet-500 " : ""
                    } text-white group flex w-full items-center rounded-sm py-2 px-3 text-md font-medium`}
                  >
                    <MoveActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Sign Out
                  </button>
                )}
              </Menu.Item>    
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}
function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}
function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}
function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
export default DisclosureMenu;
