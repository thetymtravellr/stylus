import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <main className="w-full pl-24">
        <DashboardHeader></DashboardHeader>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
