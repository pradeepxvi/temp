import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMailBulk,
  faMessage,
  faPersonMilitaryRifle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const FooterBooks = () => {
  return (
    <>
      <div className="flex flex-col justify-start ">
        <h1 className="text-2xl font-bold text-white">Books</h1>
        <p className="text-sm font-medium text-white">
          Books Delivered Imagination Unlimited
        </p>
      </div>
    </>
  );
};

const FooterQuickLinks = () => {
  return (
    <>
      <div className="flex flex-col justify-start ">
        <h1 className="text-2xl font-bold text-white">Quick Links</h1>
        <ul className="flex flex-col">
          <NavLink to={"/"} className="text-white">
            Home
          </NavLink>
          <NavLink to={"/about"} className="text-white">
            About Us
          </NavLink>
          <NavLink to={"/"} className="text-white">
            Contact
          </NavLink>
        </ul>
      </div>
    </>
  );
};

const FooterContact = () => {
  return (
    <>
      <div className="flex flex-col justify-start ">
        <h1 className="text-2xl font-bold text-white">Contact</h1>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-2 text-white ">
            <FontAwesomeIcon icon={faEnvelope} color="white" />{" "}
            <span>msssonukr@gmail.com</span>
          </li>
          <li className="flex items-center gap-2 text-white ">
            <FontAwesomeIcon icon={faPhone} color="white" />{" "}
            <span>+91 7061543815</span>
          </li>
          <li className="text-white">
            <p>MMEC, Mullana - 133207</p>
          </li>
        </ul>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 w-full flex justify-around md:py-5 md:flex-row flex-col md:gap-0 gap-5 p-3 ">
        {/* books */}
        <FooterBooks className="" />
        {/* quick links */}
        <FooterQuickLinks />
        {/* contacts */}
        <FooterContact />
      </div>
    </>
  );
};

export default Footer;
