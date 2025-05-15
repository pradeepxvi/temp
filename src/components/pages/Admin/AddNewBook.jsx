import { CircleOffIcon } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AddNewBook = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    description: "",
    isbn: "",
    author: "",
    basePrice: "",
    stock: "",
    quantity: "",
    discount: "",
    discountType: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(e);

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);

    // fetch("https://www.bookverse.com/api/books/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <NavLink to="/admin/books" className="mb-4 text-blue-600 hover:underline">
        &lt; Back to list
      </NavLink>

      <h1 className="text-2xl font-bold mb-6 ">Add New Books</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* General Information */}
        <div className="md:col-span-2 p-4 border rounded-md">
          <h2 className="text-lg font-semibold mb-4">General Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Book Name
              </label>
              <input
                type="text"
                name="bookName"
                className="w-full border px-3 py-2 rounded-md"
                value={formData.bookName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                className="w-full border px-3 py-2 rounded-md h-32"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Book Image */}
        <div className="p-4 border rounded-md flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Book Image</h2>
          <div className="w-full h-48 flex items-center justify-center border border-dashed rounded-md mb-4">
            {formData.image ? (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Preview"
                className="h-full object-contain"
              />
            ) : (
              <span className="text-sm text-gray-500">
                Set the product image (.jpg, .jpeg, .png)
              </span>
            )}
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mb-2 bg-blue-400 py-3 text-center rounded cursor-pointer hover:bg-blue-600 hover:text-white "
          />
        </div>
      </div>

      {/* ISBN and Author */}
      <div className="border p-4 rounded-md mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">ISBN</label>
          <input
            type="text"
            name="isbn"
            className="w-full border px-3 py-2 rounded-md"
            value={formData.isbn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            name="author"
            className="w-full border px-3 py-2 rounded-md"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Pricing and Stock */}
      <div className="border p-4 rounded-md mt-6 grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Base Pricing</label>
          <input
            type="number"
            name="basePrice"
            className="w-full border px-3 py-2 rounded-md"
            value={formData.basePrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Stock</label>
          <input
            type="number"
            name="stock"
            className="w-full border px-3 py-2 rounded-md"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="w-full border px-3 py-2 rounded-md"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Discount</label>
          <input
            type="number"
            name="discount"
            className="w-full border px-3 py-2 rounded-md"
            value={formData.discount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Discount Type
          </label>
          <input
            type="text"
            name="discountType"
            className="w-full border px-3 py-2 rounded-md"
            value={formData.discountType}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg cursor-pointer"
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddNewBook;
