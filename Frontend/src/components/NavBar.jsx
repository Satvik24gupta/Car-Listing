import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <>
    <nav className="bg-gray-800 text-white p-4 shadow-md sticky top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <a href="/" className="text-white">MyStore</a>
        </div>

        {/* Menu */}
        <div className="space-x-4">
          {/* <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/products" className="hover:text-gray-400">Products</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a> */}
          {/* <NavLink to="/" className="hover:text-gray-400">Home</NavLink> */}
            <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
            {/* <NavLink to="/products" className="hover:text-gray-400">Products</NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink> */}
        </div>

        {/* Wishlist Button */}
        <div className="relative">
          <button
            // onClick={addToWishlist}
            className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md focus:outline-none"
          >
            <span className="mr-2">Wishlist</span>
            <span className="bg-red-600 text-white text-xs rounded-full px-2 py-1 absolute -top-2 -right-2">
              {props.wishlistCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar