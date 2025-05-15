import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Image, EmptyBooks } from "../../..";
import { CreateMainContext } from "../../../MainContext";

const NewArrivals = () => {
  const { Books } = useContext(CreateMainContext);
  const books = Books.slice(0, 5);

  if (books.length == 0) return <EmptyBooks />;

  return (
    <>
      <div className=" mx-auto -lg max-w-[90%] mt-10">
        <div className="flex flex-col gap-5">
          {/* new arrivals */}
          <div className="flex justify-between">
            <h1 className="lg:text-4xl  font-bold  ">New Arrivals Books</h1>
            <NavLink
              to="/bestsellingbooks"
              className=" lg:text-3xl  font-bold text-violet-500 hover:underline "
            >
              View all
            </NavLink>
          </div>
          <div className=" flex lg:flex-row   flex-col justify-between ">
            {books.map((book, index) => (
              <NewBookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const NewBookCard = ({ book }) => {
  return (
    <>
      <div className="px-10 py-6 rounded-lg   w-fit flex flex-col items-center justify-center gap-10">
        <img
          src={Image}
          alt={"hello world"}
          className="w-60 aspect-auto rounded shadow-xl shadow-black "
        />
        <h1 className="text-xl font-extrabold text-violet-900 ">
          {book?.title || "book name"}
        </h1>

        <hr className="border-black border-b-2 " />
      </div>
    </>
  );
};

export default NewArrivals;
