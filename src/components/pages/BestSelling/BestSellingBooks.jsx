import React, { useContext } from "react";
import { CreateMainContext } from "../../../MainContext";
import BookCard from "../../sub_components/BookCard";
import { Filters, EmptyBooks } from "../../../";

const BestSellingBooks = () => {
  const { Books } = useContext(CreateMainContext);

  if (Books.length == 0) return <EmptyBooks />;

  return (
    <>
      {/* main div */}
      <div className="">
        <h1 className="text-3xl">Best Selling Books</h1>

        <div className="px-4 py-5 flex lg:flex-row flex-col ">
          {/* filter */}
          <Filters className="" />
          <div className="books flex flex-wrap justify-center gap-5 ">
            {Books.slice(0, 20).map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingBooks;
