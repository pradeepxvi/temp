import { NavLink, useLocation } from "react-router-dom";
import { CreateMainContext, Image } from "../../..";
import { useContext } from "react";

function BookDetails() {
  const book = useLocation().state?.book;

  const { HandleCartItemOnAdd } = useContext(CreateMainContext);

  if (!book) {
    return <div>No book data found. Please go back and select a book.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <button
        onClick={() => window.history.back()}
        className="text-blue-600  mb-4 inline-block cursor-pointer"
      >
        &lt; Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Cover and Side Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <img
            // src={book.coverImage}
            src={Image}
            alt={book.title}
            className="w-full rounded shadow-md"
          />

          <div className="mt-2">
            <span className="text-xs font-semibold text-white bg-purple-700 px-2 py-1 rounded mr-2">
              {book.genre}
            </span>
            <span className="text-xs font-semibold text-white bg-blue-700 px-2 py-1 rounded">
              {book.language}
            </span>
          </div>

          <div className="mt-4 text-sm text-gray-700">
            <p className="text-lg font-semibold text-yellow-600">
              ⭐ {book.rating}{" "}
              <span className="text-gray-600">({book.reviews} Reviews)</span>
            </p>
          </div>

          <div className="mt-4 space-x-2">
            <button
              onClick={() => {
                HandleCartItemOnAdd(book);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Add to Cart
            </button>
            <NavLink
              to={"/checkout"}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Buy Now <span className="ml-1">₹{book.price}</span>
            </NavLink>
          </div>

          {/* Details */}
          <div className="mt-6 text-left w-full">
            <h3 className="font-bold mb-2">Product details</h3>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>
                <strong>Publisher:</strong> {book.publisher}
              </li>
              <li>
                <strong>Language:</strong> {book.language}
              </li>
              <li>
                <strong>Paperback:</strong> {book.pages} pages
              </li>
              <li>
                <strong>ISBN-10:</strong> {book.isbn10}
              </li>
              <li>
                <strong>ISBN-13:</strong> {book.isbn13}
              </li>
            </ul>
          </div>
        </div>

        {/* Book Info */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            {book.author}
          </h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {book.description}
          </p>

          <h3 className="mt-6 font-bold">Praise for {book.title}:</h3>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
