import { SquarePlus } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminBooks = () => {
  const books = [
    {
      title: "Basic Linear Algebra",
      author: "B.S. Blyth",
      publisher: "Springer-Verlag",
      publicationDate: "September 2018",
      isbn: "978-3-319-77535-9",
      barcode: "123456789",
      availability: { status: "Not Available", date: "18/07/2023" },
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Basic Linear Algebra",
      author: "B.S. Blyth",
      publisher: "Springer-Verlag",
      publicationDate: "September 2018",
      isbn: "978-3-319-77535-9",
      barcode: "123456789",
      availability: { status: "Available" },
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Basic Linear Algebra",
      author: "B.S. Blyth",
      publisher: "Springer-Verlag",
      publicationDate: "September 2018",
      isbn: "978-3-319-77535-9",
      barcode: "123456789",
      availability: { status: "Reserved" },
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Basic Linear Algebra",
      author: "B.S. Blyth",
      publisher: "Springer-Verlag",
      publicationDate: "September 2018",
      isbn: "978-3-319-77535-9",
      barcode: "123456789",
      availability: { status: "Not Available", date: "02/01/2024" },
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
  ];

  const getAvailabilityColor = (status) => {
    switch (status.toLowerCase()) {
      case "available":
        return "text-green-500";
      case "reserved":
        return "text-blue-700";
      default:
        return "text-red-500";
    }
  };

  return (
    <div className="p-4 md:p-8">
      {/* Top buttons */}
      <div className="flex items-center justify-end mb-6">
        <NavLink
          to="/admin/addnewbook"
          className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition flex gap-1 items-center"
        >
          <SquarePlus />
          Add New Book
        </NavLink>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 font-semibold">Title</th>
              <th className="py-2 px-4 font-semibold">Author</th>
              <th className="py-2 px-4 font-semibold">Publisher</th>
              <th className="py-2 px-4 font-semibold">Publication Date</th>
              <th className="py-2 px-4 font-semibold">ISBN</th>
              <th className="py-2 px-4 font-semibold">Barcode</th>
              <th className="py-2 px-4 font-semibold">Availability</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="flex items-center py-4 px-4 gap-3 min-w-[220px]">
                  <img
                    src={book.imageUrl}
                    alt="Book Cover"
                    className="w-16 h-24 object-cover rounded"
                  />
                  <span className="font-medium">{book.title}</span>
                </td>
                <td className="py-2 px-4">{book.author}</td>
                <td className="py-2 px-4">{book.publisher}</td>
                <td className="py-2 px-4">{book.publicationDate}</td>
                <td className="py-2 px-4">{book.isbn}</td>
                <td className="py-2 px-4">{book.barcode}</td>
                <td className="py-2 px-4">
                  <span
                    className={`${getAvailabilityColor(
                      book.availability.status
                    )} font-semibold`}
                  >
                    {book.availability.status === "Not Available"
                      ? `Not Available till ${book.availability.date}`
                      : book.availability.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBooks;
