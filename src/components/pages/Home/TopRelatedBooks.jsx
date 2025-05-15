import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookCard, EmptyBooks } from "../../../";
import { CreateMainContext } from "../../../MainContext";

const TopRelatedBooks = () => {
  const { Books } = useContext(CreateMainContext);
  const books = Books.slice(0, 4);

  if (books.length == 0) return <EmptyBooks />;

  return (
    <>
      <div className=" mx-auto -lg max-w-[90%] mt-10">
        <div className="flex flex-col gap-5">
          {/* new arrivals */}
          <div className="flex justify-between">
            <h1 className="lg:text-4xl  font-bold ">Top Related Books Books</h1>
            <NavLink
              to="/toprelatedboooks"
              className=" lg:text-3xl font-bold text-violet-500 hover:underline "
            >
              View all
            </NavLink>
          </div>
          <div className="md:flex-row flex justify-center flex-col  flex-wrap md:gap-5">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRelatedBooks;
