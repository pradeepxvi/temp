import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// components
import {
  Signup,
  Signin,
  About,
  Products,
  Membership,
  Home,
  BestSellingBooks,
  BookDetails,
  MyWishList,
  Cart,
  CheckOut,
  TopRelatedBooks,
  Profile,
  AdminLayout,
  AdminNav,
  AdminProfile,
  AdminBooks,
  Orders,
  Dashboard,
  AddNewBook,
} from "./";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "/admin",
    element: <Navigate to="/admin/dashboard" />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "membership",
        element: <Membership />,
      },
      {
        path: "bestsellingbooks",
        element: <BestSellingBooks />,
      },
      {
        path: "toprelatedboooks",
        element: <TopRelatedBooks />,
      },
      {
        path: "/book/:bookName",
        element: <BookDetails />,
      },
      {
        path: "/mywishlist",
        element: <MyWishList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Signin />,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "order",
        element: <AdminNav />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },

      {
        path: "books",
        element: <AdminBooks />,
      },
      {
        path: "addnewbook",
        element: <AddNewBook />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

// https://www.figma.com/design/uGQLnn98RWlYFYq1PfmZtt/BookStore?node-id=0-1&t=WX3KHta4ixHLPkok-1
