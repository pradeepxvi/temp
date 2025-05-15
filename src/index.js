import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Logo from "./components/sub_components/Logo";
import NavBar from "./components/sub_components/NavBar";
import About from "./components/pages/About";
import Membership from "./components/pages/Membership";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home/Home";
import Image from "./assets/rr.jpg";
import Footer from "./components/sub_components/Footer";
import BestSellingBooks from "./components/pages/BestSelling/BestSellingBooks";
import MainContext, { CreateMainContext } from "./MainContext";
import BookCard from "./components/sub_components/BookCard";
import BookDetails from "./components/pages/BooksDetails/BookDetails";
import MyWishList from "./components/pages/MyWishList/MyWishList";
import Cart from "./components/pages/Cart/Cart";
import CheckOut from "./components/pages/CheckOut/CheckOut";
import TopRelatedBooks from "./components/pages/TopRelatedBooks/TopRelatedBooks";
import Filters from "./components/pages/Filters.jsx/Filters";
import Profile from "./components/pages/Profile/Profile";

// admin
import AdminNav from "./components/pages/Admin/AdminNav";
import AdminLayout from "./components/pages/Admin/AdminLayout";
import AdminProfile from "./components/pages/Admin/AdminProfile";
import AdminBooks from "./components/pages/Admin/AdminBooks";
import Orders from "./components/pages/Admin/Orders";
import Dashboard from "./components/pages/Admin/Dashboard";
import AddNewBook from "./components/pages/Admin/AddNewBook";

import EmptyBooks from "./components/sub_components/EmptyBooks";

export {
  // auth
  Signin,
  Signup,

  // subcomponents
  Logo,
  NavBar,

  // pages
  About,
  Membership,
  Products,
  Home,

  // assets
  Image,

  // components
  Footer,
  BestSellingBooks,
  BookCard,
  BookDetails,
  MyWishList,
  Cart,
  CheckOut,
  TopRelatedBooks,
  Filters,

  // context
  MainContext,
  CreateMainContext,

  // profile
  Profile,

  // admin
  AdminNav,
  AdminLayout,
  AdminProfile,
  AdminBooks,
  Orders,
  Dashboard,
  AddNewBook,

  //
  EmptyBooks,
};
