import React, { useContext, useState } from "react";
import { CreateMainContext } from "../../../MainContext";
import { Image } from "../../..";
import { Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cartItems, HandleCartItemOnDeleteALL } =
    useContext(CreateMainContext);

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="p-4 sm:p-6 md:p-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Your Cart</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-6">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.map((book, index) => (
            <CartCard book={book} index={index} key={index} />
          ))}
        </div>

        {/* Order Summary */}
        <OrderSummary />
      </div>

      <button onClick={HandleCartItemOnDeleteALL}>Clear all</button>
    </div>
  );
};

export default Cart;
