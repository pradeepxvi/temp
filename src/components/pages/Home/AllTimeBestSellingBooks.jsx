import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookCard, EmptyBooks } from "../../../";
import { CreateMainContext } from "../../../MainContext";

const AllTimeBestSellingBooks = () => {
  const { Books } = useContext(CreateMainContext);
  const books = Books.slice(0, 4);

  if (books.length == 0) return <EmptyBooks />;

  return (
    <>
      <div className=" mx-auto  max-w-[90%] mt-10 mb-20">
        <div className="flex flex-col gap-5">
          {/* new arrivals */}
          <div className="flex justify-between">
            <h1 className="lg:text-4xl   font-bold ">
              All Time Best Selling Books
            </h1>
            <NavLink
              to="/bestsellingbooks"
              className=" lg:text-3xl font-bold text-violet-500 hover:underline "
            >
              View all
            </NavLink>
          </div>
          <div className="lg:flex-row flex justify-center flex-col gap-5 flex-wrap">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTimeBestSellingBooks;
