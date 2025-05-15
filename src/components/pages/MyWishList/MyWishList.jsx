import { useContext } from "react";
import { CreateMainContext } from "../../../MainContext";
import WishListCard from "./WishListCard";
import EmptyWishlist from "./EmptyWishlist";

const MyWishList = () => {
  const { wishlist, addAllWishlistToCart } = useContext(CreateMainContext);

  if (wishlist.length == 0) return <EmptyWishlist />;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">My WishList</h1>
      {wishlist.map((book, index) => (
        <WishListCard book={book} key={index} index={index} />
      ))}
      <div className="mt-8 flex justify-end">
        <button
          className="bg-indigo-900 text-white py-2 px-6 rounded hover:bg-indigo-800 cursor-pointer"
          onClick={addAllWishlistToCart}
        >
          Add All to Cart
        </button>
      </div>
    </div>
  );
};

export default MyWishList;
