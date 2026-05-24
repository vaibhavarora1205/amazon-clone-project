import React from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../../assets/amazon_logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="bg-gray-900 w-full font-sans">
      <div className="flex flex-wrap md:flex-nowrap items-center md:justify-between px-2 sm:px-4 py-2 text-white gap-2 sm:gap-3">
        {/* LEFT: Logo + Location */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 order-1">
          {/* Logo */}
          <Link
            to="/"
            className="cursor-pointer border border-transparent hover:border-white px-1 sm:px-2 py-1 transition-all no-underline"
          >
            <img
              src={amazonLogo}
              alt="Amazon Logo"
              className="h-8 sm:h-10 object-contain"
            />
          </Link>

          {/* Location - Always visible */}
          <div className="flex items-center gap-1 cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all">
            <HiOutlineLocationMarker size={20} className="flex-shrink-0" />
            <div className="text-xs leading-tight">
              <p className="text-gray-400">Deliver to</p>
              <p className="font-semibold">Ghaziabad</p>
            </div>
          </div>
        </div>

        {/* CENTER: Search Bar */}
        <div className="flex w-full md:w-auto md:flex-1 md:max-w-[600px] order-3 md:order-2 md:mx-3">
          <select className="bg-gray-300 text-black text-xs sm:text-sm px-2 sm:px-3 py-2 outline-none rounded-l-md font-normal flex-shrink-0">
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-1 px-3 py-2 outline-none text-black bg-white text-sm placeholder-gray-500"
          />

          <button className="bg-[#febd69] hover:bg-[#f3a847] px-3 sm:px-5 py-2 text-black font-semibold rounded-r-md text-sm transition-colors cursor-pointer flex-shrink-0">
            Search
          </button>
        </div>

        {/* RIGHT: Sign in + Orders + Cart */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 order-2 md:order-3 ml-auto md:ml-0">
          {/* Sign in - Always visible */}
          <Link
            to="/account"
            className="text-xs cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all no-underline text-white"
          >
            <p className="text-gray-400">Hello, sign in</p>
            <p className="font-semibold leading-tight">Account</p>
          </Link>

          {/* Orders - Hidden below md */}
          <Link
            to="/orders"
            className="hidden md:flex flex-col text-xs cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all no-underline text-white"
          >
            <p className="text-gray-400">Returns</p>
            <p className="font-semibold leading-tight">& Orders</p>
          </Link>

          {/* Cart - Always visible */}
          <Link
            to="/cart"
            className="flex items-center gap-1 cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all no-underline text-white"
          >
            <FiShoppingCart size={22} className="flex-shrink-0" />
            <span className="hidden sm:inline font-semibold text-sm">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
