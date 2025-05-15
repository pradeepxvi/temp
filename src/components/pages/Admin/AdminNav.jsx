import React, { useState } from "react";
import {
  Home,
  Book,
  ClipboardList,
  User,
  LogOut,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <Home size={18} />, to: "/" },
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      to: "dashboard",
    },
    { label: "Books", icon: <Book size={18} />, to: "books" },
    { label: "Orders", icon: <ClipboardList size={18} />, to: "orders" },
    { label: "Profile", icon: <User size={18} />, to: "profile" },
    { label: "Logout", icon: <LogOut size={18} />, to: "/logout" },
  ];

  return (
    <div className="flex md:flex-row flex-col  bg-gray-300">
      {/* Toggle button for mobile */}
      <button
        className="absolute  top-4 left-4 md:hidden z-50 bg-white p-2 rounded-full shadow"
        onClick={() => setOpen(!open)}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } fixed md:static z-40 transition-transform duration-200 md:translate-x-0 w-64 h-screen flex flex-col`}
      >
        {/* Navigation items */}

        <div className="nav flex flex-col gap-3 p-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              onClick={() => {
                setOpen(false);
              }}
              to={item.to}
              className={({ isActive }) =>
                `${isActive ? "bg-white" : "bg-gray-300"} py-2 rounded px-1`
              }
            >
              <div className="flex gap-2 items-center">
                {item.icon} {item.label}{" "}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
