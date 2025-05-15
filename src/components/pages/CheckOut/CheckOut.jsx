export default function CheckOut() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded-lg w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Address"
              className="p-3 border rounded-lg w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="State"
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="p-3 border rounded-lg w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            >
              Continue to Payment
            </button>
          </form>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="divide-y divide-gray-200 mb-4">
            <li className="py-2 flex justify-between">
              <span>Item 1</span>
              <span>$29.99</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Item 2</span>
              <span>$49.99</span>
            </li>
          </ul>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$79.98</span>
          </div>
        </div>
      </div>
    </div>
  );
}
