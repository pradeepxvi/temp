const orders = [
  {
    name: "Power of Money",
    location: "6906 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    pieces: 423,
    amount: "$34,295",
    status: "Pending",
  },
  {
    name: "Power of Money",
    location: "6906 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    pieces: 423,
    amount: "$34,295",
    status: "In Process",
  },
  {
    name: "Power of Money",
    location: "6906 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    pieces: 423,
    amount: "$34,295",
    status: "Delivered",
  },
];

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 space-y-6 flex flex-col gap-4">
      {/* Stats Cards */}

      <div className="flex flex-col lg:flex-row gap-3 w-full  ">
        {/* total book */}
        <div className="totalBooks flex flex-col gap-2 shadow bg-gradient-to-r from-red-900 to-indigo-600 text-white shadow-black rounded-lg text-center py-5 flex-1 ">
          <p className="lg:text-4xl text-2xl font-bold">Total Books </p>
          <p className="lg:text-4xl text-2xl font-bold">1000</p>
        </div>

        {/* total order */}
        <div className="totalBooks flex flex-col gap-2 shadow bg-gradient-to-r from-red-900 to-indigo-600 text-white shadow-black rounded-lg text-center py-5  flex-1">
          <p className="lg:text-4xl text-2xl font-bold">Total Books </p>
          <p className="lg:text-4xl text-2xl font-bold">Order</p>
        </div>
      </div>

      {/* Sales Details */}
      <div className="bg-black p-4 sm:p-6 rounded-2xl shadow h-[250px] sm:h-[300px]"></div>

      {/* Book Orders Table */}
      <div className="table">
        <BookOrderInfo />{" "}
      </div>
    </div>
  );
};

const BookOrderInfo = () => {
  return (
    <>
      <h1 className="text-3xl font-bold py-3">Book Order Info</h1>
      <div className="w-full overflow-x-auto bg-gray-100 rounded-lg shadow">
        <table className="min-w-[800px] w-full text-sm lg:text-base">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-left p-3">Book Name</th>
              <th className="text-left p-3">Location</th>
              <th className="text-left p-3">Date-Time</th>
              <th className="text-left p-3">Piece</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index} className="border-t bg-white">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.location}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">{item.pieces}</td>
                <td className="p-3">{item.amount}</td>
                <td className="p-3">
                  <span className="text-sm font-medium text-orange-500">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
