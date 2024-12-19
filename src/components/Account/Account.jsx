import React, { useState } from "react";
import { Edit as EditIcon, Settings as SettingsIcon, LogOut as LogoutIcon } from "lucide-react";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">Shipping Address</h3>
              <p className="text-gray-600">123 Main Street, Cityville, CA</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit Address
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">Payment Methods</h3>
              <p className="text-gray-600">Visa **** 1234</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add Payment
              </button>
            </div>
          </div>
        );
        case "orders":
          return (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Order ID</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 12345, date: "2023-12-10", total: "$150.00", status: "Delivered" },
                      { id: 12346, date: "2023-12-05", total: "$75.00", status: "Shipped" },
                      { id: 12347, date: "2023-11-30", total: "$200.00", status: "Pending" },
                    ].map((order) => (
                      <tr key={order.id}>
                        <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{order.date}</td>
                        <td className="border border-gray-300 px-4 py-2">{order.total}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span
                            className={`px-2 py-1 rounded ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-700"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <button className="px-4 py-1 bg-gray-200 text-blue-600 rounded hover:bg-gray-300">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        
      case "wishlist":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={`https://via.placeholder.com/150?text=Item+${item}`}
                  alt={`Item ${item}`}
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="mt-2 font-semibold text-lg">Item {item}</h3>
                <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Profile Header */}
<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform"
      />
    </div>
    <div className="ml-4">
      <h1 className="text-2xl font-bold">John Doe</h1>
      <p>johndoe@example.com</p>
      <p className="text-sm">Member since: Jan 2022</p>
    </div>
    <div className="ml-auto flex space-x-2">
      <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200">
      <EditIcon className="h-5 w-5 text-blue-600 inline-block mr-2" />
        Edit
      </button>
      <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200">
      <SettingsIcon className="h-5 w-5 text-blue-600 inline-block mr-2" />
        Settings
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
      <LogoutIcon className="h-5 w-5 text-white inline-block mr-2" />
        Logout
      </button>
    </div>
  </div>
</div>


      {/* Tabs */}
      <div className="bg-white p-4 shadow-md">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded ${
              activeTab === "profile" ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
          >
            Profile Info
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded ${
              activeTab === "orders" ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
          >
            Order History
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-4 py-2 rounded ${
              activeTab === "wishlist" ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">{renderTabContent()}</div>
    </div>
  );
};

export default Account;
