import { NavLink } from "react-router-dom";
import { Image, Logo } from "../../";

const BookCard = ({ book }) => {
  return (
    <>
      <div className="px-10 py-6 rounded-lg  md:w-[20%] flex flex-col items-center justify-center gap-10 border mt-5">
        <img
          src={`https://picsum.photos/200/300?random=${parseInt(
            Math.floor(Math.random() * 100)
          )}`}
          alt={"hello world"}
          className="w-60 aspect-auto rounded shadow-xl shadow-black "
        />
        <div className="">
          <h1 className="text-2xl font-bold  ">
            {book?.title || "hello world"}
          </h1>
          <h1 className=" font-bold text-violet-900 ">
            {book?.author || "author"}
          </h1>
          <h1 className=" font-bold line-through ">
            Rs. {book?.price || "00"}
          </h1>
          <h1 className=" font-bold  ">Rs. {book?.discountedPrice || "00"}</h1>
        </div>

        <NavLink
          to={`/book/${book?.title}`}
          state={{ book }}
          className="text-center bg-blue-800 text-white font-bold w-1/2 mx-auto py-2 rounded"
        >
          Buy now
        </NavLink>
      </div>
    </>
  );
};

export default BookCard;
