import React from "react";
import AdminNav from "./AdminNav";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header */}
      <AdminHeader />

      <div className="flex flex-1">
        <AdminNav />

        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
