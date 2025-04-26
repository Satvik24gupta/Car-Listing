import React, {useState, useEffect} from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import FadeLoader from 'react-spinners/FadeLoader';
import HashLoader from 'react-spinners/HashLoader';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import {NavLink } from "react-router-dom";


const CarList = (props) => {
    // const [cars, setCars] = useState([]);
    const [filteredCars, setfilteredCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the car data from the API
    useEffect(() => {
        console.log(props.cars)
        // console.log(props.wishlist)
        fetch('https://www.freetestapi.com/api/v1/cars')
        .then((response) => response.json())
        .then((data) => {
            props.setCars(data); // Store the car data in the state
            setfilteredCars(data); // Store the car data in the state
            setLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
            setError('Failed to load data');
            setLoading(false); // Set loading to false if there's an error
        });
    }, [props.wishlist]);

    useEffect(()=>{
        // const filteredCars = cars.filter(car => car.make.toLowerCase() === props.searchTerm.toLowerCase());
        if(props.searchTerm!=''){
            const filteredCar = props.cars.filter(car => 
                car.make.toLowerCase().startsWith(props.searchTerm.trim().toLowerCase()) ||
                car.model.toLowerCase().startsWith(props.searchTerm.trim().toLowerCase()) ||
                `${car.make.toLowerCase()} ${car.model.toLowerCase()}`.startsWith(props.searchTerm.trim().toLowerCase())

            );
            // cars.make.toLowerCase().startsWith(props.searchTerm.toLowerCase())
            setfilteredCars(filteredCar);
        }
        else{
            setfilteredCars(props.cars);
        }

    }, [props.searchTerm])

    function handleWishClick(car){
        console.log(`Car ${car.id} added to wishlist`);
        // if car.id present in wishlist then remove it and if not present add it to t he wishlist'
        const updatedWishlist = props.wishlist.includes(car.id) 
            ? props.wishlist.filter(id => id !== car.id)
            : [...props.wishlist, car.id]

            props.setWishlist(updatedWishlist);
        props.setWishlistCount(updatedWishlist.length)
    }
    
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Car List</h2>
      {
        loading 
        ?
        <div className='flex justify-center'><FadeLoader/></div> 
        :
        
        error ? <div className="text-center p-4 text-red-500">{error}</div>
        :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
            <div
                key={car.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >  
            <div className='relatve'>
                {/* <span className= "text-red-600 text-4xl rounded-full relative top-9 right-1 float-end cursor-pointer "> */}
                <span className="absolute text-red-600 text-2xl cursor-pointer z-10 mt-2 ml-2" onClick={()=>handleWishClick(car)}>
                    {/* <FaHeart/> */}
                    {props.wishlist.includes(car.id) ? <FaHeart/> : <FaRegHeart/>}
                </span>
                {/* <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-48 object-cover"
                /> */}
                <NavLink to={`/detail/${car.id }`}>
                <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-48 object-cover"
                />
                </NavLink> 


                </div>
                <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">{`${car.make} ${car.model}`}</h3>
                <p className="text-gray-500">Year: {car.year}</p>
                <p className="text-gray-500">Mileage: {car.mileage} km</p>
                <p className="text-gray-700 font-bold">Price: ${car.price}</p>
                <p className="text-gray-500">Fuel: {car.fuelType}</p>
                <p className="text-gray-500">Transmission: {car.transmission}</p>

                {/* Features List */}
                <div className="mt-2">
                    <h4 className="font-medium text-sm">Features:</h4>
                    <ul className="text-sm text-gray-600">
                    {car.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            ))}
        </div>
      }
    </div>
  )
}

export default CarList