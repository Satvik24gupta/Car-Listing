import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';
import NavBar from './components/NavBar';

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
  // const [wishlistCount, setWishlistCount] = useState(wishlist.length);

  const [wishlistCount, setWishlistCount] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist).length : 0;
  }
);

const setWishlistCountInLocalStorage = (wishlistCount)=>{
    localStorage.setItem('wishlistCount', JSON.stringify(wishlistCount));
  }
  //set wishlist count in localstorage
  useEffect(()=>{
    setWishlistCountInLocalStorage(wishlistCount)
  }, [wishlistCount])
  
  // const [wishlistCount, setWishlistCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [cars, setCars] = useState([]);

  // Function to handle adding to wishlist
  const addToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  };




  return (
    <>
    <NavBar wishlistCount={wishlistCount} setWishlistCount={setWishlistCount}/>    
    {/* <h1 className='text-red-500 text-center text-2xl'>
      Welcome to our car finder app
    </h1> */}

    <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
    <CarList searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} wishlist ={wishlist} setWishlist={setWishlist} wishlistCount = {wishlistCount} setWishlistCount={setWishlistCount} cars ={cars} setCars ={setCars} />
    </>
  )
}

export default App  