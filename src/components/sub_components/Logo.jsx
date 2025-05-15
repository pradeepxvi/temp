import React from "react";
import BookVerseLogo from "../../assets/bookverseLogo.png";

const Logo = () => {
  return (
    <>
      <div className=" flex text-white items-center uppercase text-3xl lg:text-5xl justify-center lg:font-extrabold ">
        <img
          src={BookVerseLogo}
          alt="Bookverse Logo"
          className="lg:w-20 w-10  aspect-square "
        />
        <h1>bookverse</h1>
      </div>
    </>
  );
};

export default Logo;
