import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import CustomDashboardLink from "../../Component/CustomDashboardLink";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const { data, isLoading, error } = useQuery("user", async () => {
    const res = await fetch(`https://agile-atoll-96122.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        'authorization': `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.json();
  });

  if (isLoading) {
    return (<div className="min-h-[75vh] grid place-content-center"><Loading></Loading></div>)
  }
  
  if (error) {
    return <div className="min-h-[75vh] grid place-content-center"><p>error</p></div>;
  }

  return (
    <div>

      <div className="drawer drawer-mobile ">
        <input id="sideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-full">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="sideBar" className="drawer-overlay"></label>
          <ul className="menu pt-24 pb-4 px-4 md:px-16  overflow-y-auto w-80 bg-slate-400 text-base-content h-full">
          <li>
              <CustomDashboardLink className="p-4" to="/dashboard">
                My Profile
              </CustomDashboardLink>
            </li>
            {data?.role === "admin" ? (
              <>
                <li className="">
                  <CustomDashboardLink className="p-4" to="/dashboard/manageorders">
                    Manage All Orders
                  </CustomDashboardLink>
                </li>
                <li>
                  <CustomDashboardLink className="p-4" to="/dashboard/addproduct">
                    Add A Product
                  </CustomDashboardLink>
                </li>
                <li>
                  <CustomDashboardLink className="p-4" to="/dashboard/manageproducts">
                    Manage Products
                  </CustomDashboardLink>
                </li>
                <li>
                  <CustomDashboardLink className="p-4" to="/dashboard/makeAdmin">
                    Manage User
                  </CustomDashboardLink>
                </li>
              </>
            ) : (
              <>
                <li className="">
                  <CustomDashboardLink className="p-4" to="/dashboard/myorders">
                    My Orders
                  </CustomDashboardLink>
                </li>
                <li>
                  <CustomDashboardLink className="p-4" to="/dashboard/addreview">
                    Add A Review
                  </CustomDashboardLink>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
