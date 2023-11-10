import React from "react";
import { UilShoppingCart, UilSearch } from '@iconscout/react-unicons'
import { Input } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className="navbar bg-light shadow-md sticky top-0 z-50 flex items-center justify-between py-4">
      {/* Logo */}
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">ZanStore</a>
      </div>
      {/* Menu */}
      <div className="flex-none gap-4 flex items-center">
        <div className="form-control flex-grow relative">
          <input
            type="text"
            placeholder="Search for products"
            className="bg-transparent input input-bordered w-full pl-12"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <UilSearch size="20" />
          </span>
        </div>
        <ul className="flex gap-4">
          <li><a href="/cart" className="text-blue-500 hover:underline"><UilShoppingCart size="24" /></a></li>
        </ul>
        <div className="flex gap-4">
          <a href="/login" className="bg-transparent text-blue-500 py-2 px-4 border rounded-lg hover:bg-blue-500 hover:text-white transition">Login</a>
          <a href="/signup" className="bg-blue-500 text-white py-2 px-4 border rounded-lg hover:bg-blue-600 transition ">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
