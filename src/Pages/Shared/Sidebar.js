import {
  ArchiveIcon,
  ClipboardCheckIcon,
  HomeIcon,
  LogoutIcon,
  MailIcon,
  UserGroupIcon,
  ViewGridIcon
} from "@heroicons/react/outline";
import React from "react";
import CustomLink from "../../Component/CustomLink copy";

const Sidebar = () => {
  return (
    <aside className="bg-primary h-screen fixed z-20 w-24 text-base-100 flex flex-col items-center justify-center space-y-8">
      <div className="">
        <ul className="flex flex-col space-y-2">
          <li>
            <CustomLink to="/">
              <HomeIcon className="w-7 text-base-100" />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard">
              <ViewGridIcon className="w-7 text-base-100" />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard/manageProducts">
              <ArchiveIcon className="w-7 text-base-100" />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard/manageOrders">
              <ClipboardCheckIcon className="w-7 text-base-100" />
            </CustomLink>
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li>
            <CustomLink to="/">
              <MailIcon className="w-7 text-base-100" />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard/manageUsers">
              <UserGroupIcon className="w-7 text-base-100" />
            </CustomLink>
          </li>
        </ul>
      </div>
      <div className="">
        <button className="p-2 hover:bg-purple-700 rounded">
          <LogoutIcon className="w-7 text-base-100" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

//

/* 


               <UserGroupIcon className="w-7 text-base-100" />
            </div>
          </CustomSideLink>
        </li>
        <li className="h-full flex flex-col justify-center ">
          <CustomSideLink to="/">
            <div
              className="tooltip tooltip-right p-2 rounded-md duration-500"
              data-tip="Logout"
            >
              <LogoutIcon className="w-7 text-base-100" />
            </div>
          </CustomSideLink>
        </li>
      </ul>
*/
