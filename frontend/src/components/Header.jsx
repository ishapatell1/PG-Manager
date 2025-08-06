// components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left section: Logo + Search */}
        <div className="flex items-center gap-4">
          <div className="flex items-center text-orange-600 text-xl font-bold">
            <span role="img" aria-label="home" className="text-2xl">🏠</span>
            <span className="ml-2">PG Manager</span>
          </div>
          <input
            type="text"
            placeholder="Search tenants, rooms, bills..."
            className="hidden md:block border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Center section: Navigation */}
        <nav className="hidden lg:flex space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:text-orange-600">Dashboard</a>
          <a href="#" className="hover:text-orange-600">Tenants</a>
          <a href="#" className="hover:text-orange-600">Electricity Billing</a>
          <a href="#" className="hover:text-orange-600">Maintenance</a>
          <a href="#" className="hover:text-orange-600">Rules</a>
          <a href="#" className="hover:text-orange-600">Receipts</a>
        </nav>

        {/* Right section: Buttons */}
        <div className="flex items-center space-x-2">
          <button className="bg-orange-500 text-white px-4 py-1 rounded-md text-sm shadow hover:bg-orange-600">
            Log In
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-md text-sm hover:bg-orange-50">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile nav search */}
      <div className="px-4 pb-2 md:hidden">
        <input
          type="text"
          placeholder="Search tenants, rooms, bills..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </header>
  );
}