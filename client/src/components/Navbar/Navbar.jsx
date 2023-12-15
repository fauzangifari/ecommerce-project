import React, { useState, useEffect } from "react";
import { UilShoppingCart } from "@iconscout/react-unicons";
import InputSearch from "./InputSearch";
import { getAccount } from "../../utils/api";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAccount();
        setUser(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="navbar bg-light shadow-md sticky top-0 z-50 flex items-center justify-between py-4">
      {/* Logo */}
      <div className="flex-1 ml-32">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          ZanStore
        </a>
      </div>
      {/* Menu */}
      <div className="flex-none gap-4 flex">
        <InputSearch />
        {!user ? (
          <div className="flex gap-4 items-center">
            <a href="/cart" className="text-blue-500 hover:underline">
              <UilShoppingCart size="24" />
            </a>
            <a href="/profile" className="text-blue-500 hover:underline">
              {user.username}
            </a>
            <a
              href="/logout"
              className="bg-blue-500 text-white py-2 px-4 border rounded-lg hover:bg-blue-600 transition"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="flex gap-4">
            <a
              href="/login"
              className="bg-transparent text-blue-500 py-2 px-4 border rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-500 text-white py-2 px-4 border rounded-lg hover:bg-blue-600 transition "
            >
              Sign Up
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
