import React from "react";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
      <NavLink
        to={"/home"}
        className="bg-blue-400 text-white font-bold px-5 py-2 w-fit rounded shadow shadow-black"
      >
        Shop here
      </NavLink>
    </div>
  );
};

export default EmptyCart;
