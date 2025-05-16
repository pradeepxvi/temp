import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";

// Creating a context to share global state across components
export const CreateMainContext = createContext(null);

// API URLs
const book_url = "https://bookverse.com/api/books/";
const order_url = "https://bookverse.com/api/order/";
const cart_url = "https://bookverse.com/api/cart/";
const wishlist_url = "https://bookverse.com/api/wishlist/";

// Main Context Component
const MainContext = ({ children }) => {
  const [Books, setBooks] = useState([]);

  const GETDATA = async () => {
    try {
      const response = await axios.get(book_url);
      console.log(response);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GETDATA();
    fetchCartItems();
    fetchWishlistItems();
    fetchOrderItems();
  }, []);

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

  const languages = ["English", "Nepali", "Others"];
  const forms = ["Paperback", "Hardcover", "E-Book", "Audiobook"];

  const [filtersToApply, setFiltersToApply] = useState([]);

  const HandleOnAdd = (filter) => {
    setFiltersToApply((prev) => [...prev, filter]);
  };

  const HandleOnRemove = (filter) => {
    setFiltersToApply((prev) => prev.filter((item) => item !== filter));
  };

  // ============================ Cart Context ============================

  const CartReducer = (currentItems, action) => {
    switch (action.type) {
      case "init":
        return action.payload;
      case "NEW_ITEM":
        return [action.payload, ...currentItems];
      case "DELETE_ITEM":
        return currentItems.filter((item) => item.id !== action.payload.id);
      case "DELETE_ALL_ITEM":
        return [];
      default:
        return currentItems;
    }
  };

  const [cartItems, dispatchCartItems] = useReducer(CartReducer, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(cart_url);
      dispatchCartItems({ type: "init", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  const HandleCartItemOnAdd = async (book) => {
    try {
      const response = await axios.put(cart_url, book);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    alert("Cart item added");
    dispatchCartItems({ type: "NEW_ITEM", payload: book });
  };

  const HandleCartItemOnDelete = async (id) => {
    try {
      const response = await axios.delete(`${cart_url}${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    alert("Cart item deleted");
    dispatchCartItems({ type: "DELETE_ITEM", payload: { id } });
  };

  const HandleCartItemOnDeleteALL = async () => {
    try {
      const response = await axios.delete(cart_url);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    alert("Cart is cleared");
    dispatchCartItems({ type: "DELETE_ALL_ITEM" });
  };

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

  // ============================ Wishlist Context ============================

  const wishlistReducer = (currentItems, action) => {
    switch (action.type) {
      case "init":
        return action.payload;
      case "ADD_ITEM":
        return [action.payload, ...currentItems];
      case "DELETE_ITEM":
        return currentItems.filter((book) => book.id !== action.payload.id);
      case "DELETE_All":
        return [];
      default:
        return currentItems;
    }
  };

  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, []);

  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get(wishlist_url);
      dispatchWishlist({ type: "init", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  const HandleWishlistOnAdd = async (item) => {
    try {
      const response = await axios.put(wishlist_url, item);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    dispatchWishlist({ type: "ADD_ITEM", payload: item });
  };

  const HandleWishlistOnDelete = async (id) => {
    try {
      const response = await axios.delete(`${wishlist_url}${id}/`);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    dispatchWishlist({ type: "DELETE_ITEM", payload: { id } });
  };

  const HandleWishlistOnDeleteAll = async () => {
    try {
      const response = await axios.delete(wishlist_url);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    dispatchWishlist({ type: "DELETE_All" });
  };

  const addAllWishlistToCart = async () => {
    wishlist.forEach((item) => {
      HandleCartItemOnAdd(item);
      dispatchCartItems({ type: "NEW_ITEM", payload: item });
    });
    HandleWishlistOnDeleteAll();
  };

  // ============================ Order Context ============================

  const orderReducer = (currentItems, action) => {
    switch (action.type) {
      case "init":
        return action.payload;
      case "NEW_ITEM":
        return [action.payload, ...currentItems];
      case "DELETE_ITEM":
        return currentItems.filter(
          (_, index) => index !== action.payload.index
        );
      case "DELETE_ALL":
        return [];
      default:
        return currentItems;
    }
  };

  const [order, dispatchOrder] = useReducer(orderReducer, []);

  const fetchOrderItems = async () => {
    try {
      const response = await axios.get(order_url);
      dispatchOrder({ type: "init", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOrderOnAdd = async (orderItem) => {
    try {
      const response = await axios.put(order_url, orderItem);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    dispatchOrder({ type: "NEW_ITEM", payload: orderItem });
  };

  const handleOrderOnDelete = async (index, id) => {
    try {
      const response = await axios.delete(`${order_url}${id}/`);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
    dispatchOrder({ type: "DELETE_ITEM", payload: { index } });
  };

  const handleOrderOnDeleteAll = async () => {
    try {
      const response = await axios.delete(order_url);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    dispatchOrder({ type: "DELETE_ALL" });
  };

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
