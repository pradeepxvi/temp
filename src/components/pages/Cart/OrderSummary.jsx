import React, { useContext } from "react";
import { CreateMainContext } from "../../../MainContext";
import { NavLink } from "react-router-dom";

const OrderSummary = () => {
  const remainingForFreeShipping = 10;
  const { subtotal, shipping, total } = useContext(CreateMainContext);

  return (
    <div className="w-full md:w-1/3 h-fit border rounded p-4 sm:p-6 shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>₹{shipping.toFixed(2)}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between text-base sm:text-lg font-semibold mb-4">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
      <NavLink
        to={"/checkout"}
        className="w-full bg-indigo-900 text-white p-2 rounded hover:bg-indigo-800 transition text-center"
      >
        Proceed to Checkout
      </NavLink>
    </div>
  );
};

export default OrderSummary;
