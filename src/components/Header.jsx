import React from "react";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-2 flex items-center justify-between bg-black">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-indigo-800">UNITECH HR</span>
      </div>

      {/* Search Input */}
      <div className="flex-1 mx-4">
        <div className="relative max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 border rounded-full px-4 text-sm focus:outline-none focus:ring focus:ring-indigo-300 pr-10"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.198-5.773a6 6 0 11-11.995.027 6 6 0 0111.996-.027z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Notification and Profile */}
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
        >
          <Bell className="w-6 h-6 text-gray-700" />
        </button>
        <img
          src="/path/to/your-logo.png" // Replace with your profile image path
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border border-gray-300"
        />
      </div>
    </header>
  );
};

export default Header;
