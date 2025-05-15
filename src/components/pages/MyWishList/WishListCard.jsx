import React, { useContext } from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import { CreateMainContext, Image } from "../../..";
import { NavLink } from "react-router-dom";

const WishListCard = ({ book, index }) => {
  const { HandleWishlistOnDelete, HandleCartItemOnAdd } =
    useContext(CreateMainContext);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-b border-indigo-900">
      {/* Left: Image and Info */}
      <div className="flex items-center gap-4">
        <img
          src={Image}
          alt={book.title}
          className="w-20 h-28 object-cover rounded"
        />
        <div>
          <NavLink
            to={`/book/${book.title}`}
            state={{ book }}
            className="text-lg font-medium"
          >
            {book.title}
          </NavLink>
          <p className="text-sm text-gray-600">{book.author}</p>
        </div>
      </div>

      {/* Right: Price and Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
        <div className="text-lg font-semibold">Rs. {book.price}</div>
        <div className="flex gap-4">
          <button
            className="text-indigo-900 hover:text-red-600 cursor-pointer"
            onClick={() => {
              HandleWishlistOnDelete(book.id);
            }}
          >
            <Trash2 size={20} />
          </button>
          <button
            className="text-indigo-900 hover:text-green-600 cursor-pointer"
            onClick={() => {
              HandleCartItemOnAdd(book);
            }}
          >
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
