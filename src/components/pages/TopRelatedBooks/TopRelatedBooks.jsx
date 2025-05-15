import { useContext } from "react";
import { CreateMainContext } from "../../../MainContext";
import { Filters, EmptyBooks, BookCard } from "../../../";

const TopRelatedBooks = () => {
  const { Books } = useContext(CreateMainContext);

  if (Books.length == 0) return <EmptyBooks />;

  return (
    <>
      {/* main div */}
      <div className="">
        <h1 className="text-3xl">Top Relatd Books</h1>

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

export default TopRelatedBooks;
