import React from "react";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import LogoForAdmin from "./LogoForAdmin";

const AdminHeader = () => {
  return (
    <nav className="w-full bg-gray-600 shadow px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="ld:ml-0 ml-10">
        <LogoForAdmin />
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 hidden md:flex justify-center">
        <div className="relative w-full max-w-md">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Profile Info */}
      <NavLink
        to="profile"
        className="flex flex-col justify-center  items-center space-x-3 p-2 hover:border"
      >
        <img
          src={`https://picsum.photos/200/300?random=${parseInt(
            Math.floor(Math.random() * 100)
          )}`}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </NavLink>
    </nav>
  );
};
export default AdminHeader;
