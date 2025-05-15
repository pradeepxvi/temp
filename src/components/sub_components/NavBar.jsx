// react
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// assets
import BookVerseLogo from "../../assets/bookverseLogo.png";
// icons
import { CreditCardIcon, ShoppingCart, User } from "lucide-react";
import { CreateMainContext } from "../../MainContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CreateMainContext);

  const links = [
    { linkName: "home", linkTo: "/home" },
    { linkName: "products", linkTo: "/products" },
    { linkName: "membership", linkTo: "/membership" },
    { linkName: "about", linkTo: "/about" },
    { linkName: "MyWishList", linkTo: "/mywishlist" },
    { linkName: "Admin", linkTo: "/admin" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 px-4 py-3 flex items-center justify-between sticky top-0 ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* logo - image */}
        <img
          src={BookVerseLogo}
          alt="Logo"
          className="w-12 lg:w-16 aspect-square"
        />
        {/* logo - name */}
        <p className="text-xl lg:text-3xl font-extrabold uppercase text-white">
          bookverse
        </p>
      </div>

      {/* Menu for Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-3xl md:hidden focus:outline-none"
      >
        ☰
      </button>

      {/* Nav Links */}
      <div
        className={`  min-w-1/2 ${
          menuOpen ? "block absolute top-16 left-0 w-full" : "hidden"
        } bg-gray-800 p-4 md:static md:flex md:items-center md:justify-between md:gap-10 md:bg-transparent md:p-0`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          {links.map((item, index) => (
            <li key={index} className="list-none">
              <NavLink
                to={item.linkTo}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                    : "text-white uppercase font-bold hover:text-blue-400"
                }
                onClick={handleLinkClick}
              >
                {item.linkName}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex gap-6 mt-4 md:mt-0 items-center justify-center">
          {/* heart */}
          <NavLink
            to={"/checkout"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                : "text-white uppercase font-bold hover:text-blue-400"
            }
            onClick={handleLinkClick}
          >
            <CreditCardIcon className=" text-2xl hover:cursor-pointer hover:text-orange-400" />
          </NavLink>
          {/* cart */}
          <div className="relative">
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                  : "text-white uppercase font-bold hover:text-blue-400"
              }
              onClick={handleLinkClick}
            >
              <ShoppingCart className="text-2xl hover:cursor-pointer hover:text-orange-400" />
            </NavLink>
            {/* Cart item count */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>

          {/* User */}
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                : "text-white uppercase font-bold hover:text-blue-400"
            }
            onClick={handleLinkClick}
          >
            <User className=" text-2xl hover:cursor-pointer hover:text-orange-400" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
