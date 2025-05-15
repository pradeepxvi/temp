import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="bg-teal-800 mx-auto rounded-lg max-w-[90%] mt-10 lg:p-20 p-10 flex flex-col justify-center items-center gap-3">
        <h1 className="uppercase font-extrabold lg:text-5xl text-3xl text-white text-center neutral-200 ">
          free shippping
        </h1>
        <p className="uppercase font-bold text-center text-emerald-200 text-2xl">
          with these great reads
        </p>
        <NavLink
          to="/bestsellingbooks"
          className="bg-red-400 text-white rounded-lg px-5 py-2"
        >
          Read Now
        </NavLink>
      </div>
    </>
  );
};

export default Banner;
