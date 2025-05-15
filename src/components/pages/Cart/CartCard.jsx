import { Trash2 } from "lucide-react";
import React, { useContext } from "react";
import { CreateMainContext, Image } from "../../..";
import { NavLink } from "react-router-dom";

const CartCard = ({ book, index }) => {
  const { HandleCartItemOnDelete } = useContext(CreateMainContext);
  return (
    <div
      key={index}
      className="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-indigo-900"
    >
      <div className="flex items-center space-x-4 ">
        <img
          src={Image}
          alt={book.title}
          className="w-16 h-24 sm:w-20 sm:h-28 object-cover rounded"
        />
        <div>
          <NavLink
            title={book.title}
            to={`/book/${book.title}`}
            state={{ book }}
            className="text-lg font-medium"
          >
            {book.title}
          </NavLink>
          <p className="text-sm text-gray-600">{book.author}</p>
        </div>
      </div>
      <div className="text-base sm:text-lg font-semibold whitespace-nowrap mt-2 sm:mt-0">
        Rs. {book.discountedPrice}
      </div>
      <button
        className="text-indigo-900 hover:text-red-600 mt-2 sm:mt-0 sm:ml-4 cursor-pointer"
        onClick={() => {
          HandleCartItemOnDelete(book.id);
        }}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartCard;
