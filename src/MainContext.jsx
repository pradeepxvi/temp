import { Book, BookKey, Cookie } from "lucide-react";
import React, {
  createContext,
  useEffect,
  useState,
  useReducer,
  act,
} from "react";

// declaring of context
export const CreateMainContext = createContext(null);

// initial fetching of books
const MainContext = ({ children }) => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    const url = "https://openlibrary.org/subjects/nepal.json";

    fetch(url)
      .then((response) => response.json())
      .then((bookData) => {
        const formatted = bookData.works.map((book, i) => {
          return {
            id: book.cover_id,
            title: book.title,
            isbn: book.key,
            author: book.authors?.[0]?.name || "Unknown Author",
            price: 500,
            filter: "Social Fiction",
            discountedPrice: 500 - 100,
            coverId: book.cover_id,
          };
        });

        setBooks(formatted);

        // for developmemt
        dispatchWishlist({ type: "init", payload: formatted.slice(0, 5) });
        dispatchCartItems({ type: "init", payload: formatted.slice(0, 5) });
      });
  }, []);

  // generes
  const genres = [
    "Social Fiction",
    "Mystery",
    "Biography & Memoirs",
    "Business & Economics",
    "Children",
    "Fiction",
    "Graphic Novel",
    "Health & Fitness",
    "History",
  ];

  // language
  const languages = ["English", "Nepali", "Others"];

  // forms
  const forms = ["Paperback", "Hardcover", "E-Book", "Audiobook"];

  //
  const [filtersToApply, setFiltersToApply] = useState([]);

  // handle filters on add
  const HandleOnAdd = (filter) => {
    setFiltersToApply((prev) => [...prev, filter]);
  };

  // handle filter on remove
  const HandleOnRemove = (filter) => {
    setFiltersToApply((prev) => prev.filter((item) => item !== filter));
  };

  // filter context ends here ==============================================
  //

  // cart context begins here ==============================================
  // cart reducer
  const CartReducer = (currentItems, action) => {
    if (action.type === "init") return action.payload;

    if (action.type === "NEW_ITEM") {
      return [action.payload, ...currentItems];
    } else if (action.type === "DELETE_ITEM") {
      return currentItems.filter(
        (item, index) => item.id !== action.payload.id
      );
    } else if (action.type === "DELETE_ALL_ITEM") {
      return [];
    }
    return currentItems;
  };

  const [cartItems, dispatchCartItems] = useReducer(
    CartReducer,
    Books.slice(0, 5)
  );

  // handle items on adding to cart
  const HandleCartItemOnAdd = async (book) => {
    alert("Cart item added");
    console.log("Cart item added:", book);

    // // Send to backend
    // await fetch("https://your-backend.com/api/cart", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(book),
    // });

    dispatchCartItems({
      type: "NEW_ITEM",
      payload: book,
    });
  };

  // handle deleting a cart item
  const HandleCartItemOnDelete = async (id) => {
    alert("Cart item deleted");
    console.log(
      "Cart item deleted",
      Books.find((book) => book.id === id)
    );

    // // Send delete to backend
    // await fetch(`https://your-backend.com/api/cart/${id}`, {
    //   method: "DELETE",
    // });

    dispatchCartItems({
      type: "DELETE_ITEM",
      payload: { id },
    });
  };

  // handle deleting all cart items
  const HandleCartItemOnDeleteALL = async () => {
    alert("Cart is cleared");

    // // Delete all on backend (you might need a custom route)
    // await fetch("", {
    //   method: "DELETE",
    // });

    dispatchCartItems({ type: "DELETE_ALL_ITEM" });
  };

  // calculate subtotal, shipping, total
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.discountedPrice,
      0
    );
    setSubtotal(newSubtotal);

    const newShippingCost = newSubtotal > 0 ? 50 : 0;
    setShipping(newShippingCost);
    setTotal(newSubtotal + newShippingCost);
  }, [cartItems]);

  // cart context ends here ==============================================

  // wishlist context begins here==============================================

  // wishlist reducer
  const wishlistReducer = (currentItems, action) => {
    if (action.type === "init") return action.payload;
    if (action.type === "ADD_ITEM") return [action.payload, ...currentItems];
    if (action.type === "DELETE_ITEM")
      return currentItems.filter((book, index) => book.id != action.payload.id);
    if (action.type === "DELETE_All") return [];
    return currentItems;
  };

  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, []);

  const HandleWishlistOnAdd = (item) => {
    console.log("Added on wishlist", item);
    dispatchWishlist({ type: "ADD_ITEM", payload: item });
  };

  const HandleWishlistOnDelete = (id) => {
    console.log(
      "Book Deleted",
      Books.find((book) => book.id === id)
    );

    dispatchWishlist({ type: "DELETE_ITEM", payload: { id } });
  };

  const HandleWishlistOnDeleteAll = () => {
    console.log("Deleted all from wishlist.");
    dispatchWishlist({ type: "DELETE_All" });
  };

  // functio to add all wishlist item to cart at once
  const addAllWishlistToCart = () => {
    console.log("all wishlist are added to cart.");
    wishlist.forEach((element) => {
      dispatchCartItems({
        type: "NEW_ITEM",
        payload: element,
      });
    });
  };
  // wishlist ==============================================

  // order context begins here ====================
  const orderReducer = (currentItems, action) => {
    if (action.type === "NEW_ITEM") return [action.payload, ...currentItems];
    if (action.type === "DELETE_ITEM")
      return currentItems.filter((_, index) => index !== action.payload.index);
    if (action.type === "DELETE_ALL") return [];
    return currentItems;
  };

  const [order, dispatchOrder] = useReducer(orderReducer, []);

  const handleOrderOnAdd = (orderItem) => {
    dispatchOrder({
      type: "NEW_ITEM",
      payload: orderItem,
    });
  };

  // Delete specific item
  const handleOrderOnDelete = (index) => {
    dispatchOrder({
      type: "DELETE_ITEM",
      payload: { index },
    });
  };

  // Delete all items
  const handleOrderOnDeleteAll = () => {
    dispatchOrder({
      type: "DELETE_ALL",
    });
  };

  // order context ends here ====================

  return (
    <CreateMainContext.Provider
      value={{
        Books,

        genres,
        languages,
        forms,
        HandleOnAdd,
        HandleOnRemove,

        HandleCartItemOnAdd,
        HandleCartItemOnDelete,
        HandleCartItemOnDeleteALL,
        cartItems,
        subtotal,
        shipping,
        total,

        wishlist,
        HandleWishlistOnAdd,
        HandleWishlistOnDelete,
        HandleWishlistOnDeleteAll,
        addAllWishlistToCart,

        // order
        order,
        handleOrderOnAdd,
        handleOrderOnDelete,
        handleOrderOnDeleteAll,
      }}
    >
      {children}
    </CreateMainContext.Provider>
  );
};

export default MainContext;
