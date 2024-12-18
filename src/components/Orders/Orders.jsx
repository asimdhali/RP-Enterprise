import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "ORD001",
      product: "Lal Shak",
      date: "2024-12-15",
      amount: "30 tk",
      status: "Shipped",
    },
    {
      id: "ORD002",
      product: "Puti Mach",
      date: "2024-12-12",
      amount: "120 tk",
      status: "Delivered",
    },
    {
      id: "ORD003",
      product: "Kacha Morich",
      date: "2024-12-10",
      amount: "75 tk",
      status: "Processing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Orders</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Order Date</th>
                <th className="px-6 py-3 text-right">Amount</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4 text-right">{order.amount}</td>
                  <td
                    className={`px-6 py-4 font-medium ${
                      order.status === "Delivered"
                        ? "text-green-500"
                        : order.status === "Shipped"
                        ? "text-blue-500"
                        : "text-orange-500"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
