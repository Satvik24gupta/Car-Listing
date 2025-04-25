import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';

const App = () => {

  // const [wishlist, setWishlist] = useState([]);
  // const [wishlistCount, setWishlistCount] = useState(0);

  // fetch the wishlist from local storage
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  }
  );
  
  // set the wishlist in local storage
  const setWishlistInLocalStorage = (wishlist) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
  useEffect(() => {
    setWishlistInLocalStorage(wishlist);
  }, [wishlist]);
  const [wishlistCount, setWishlistCount] = useState(wishlist.length);
  
  // const [wishlistCount, setWishlistCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  

  // Function to handle adding to wishlist
  const addToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  };




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
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/products" className="hover:text-gray-400">Products</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Wishlist Button */}
        <div className="relative">
          <button
            onClick={addToWishlist}
            className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md focus:outline-none"
          >
            <span className="mr-2">Wishlist</span>
            <span className="bg-red-600 text-white text-xs rounded-full px-2 py-1 absolute -top-2 -right-2">
              {wishlistCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
    
    <h1 className='text-red-500 text-center text-2xl'>
      Welcome to our car finder app
    </h1>

    <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
    <CarList searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} wishlist ={wishlist} setWishlist={setWishlist} wishlistCount = {wishlistCount} setWishlistCount={setWishlistCount}/>
    </>
  )
}

export default App  