import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import FadeLoader from 'react-spinners/FadeLoader';


const CarDetail = (props) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch the car data from the API
    useEffect(() => {
        // console.log(props.cars)
        // console.log(props.wishlist)
        fetch('https://www.freetestapi.com/api/v1/cars')
        .then((response) => response.json())
        .then((data) => {
            setCars(data); // Store the car data in the state
            // setfilteredCars(data); // Store the car data in the state
            setLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
            // setError('Failed to load data');
            setLoading(false); // Set loading to false if there's an error
        });
    }, []);



    const {id} = useParams()
    const car = cars.find(car=> car.id == parseInt(id));
    // const car = 0
    if(!car){
      return(
        <div className="flex justify-center items-center h-screen text-2xl text-red-500">
          Car not found 🚫
        </div>
      )
    }
  // return (
  //   <div>CarDetail: {id}</div>
  // )
  return (
    <>
    <NavBar wishlistCount = {localStorage.getItem("wishlistCount")}/>
    
    {!loading && <div className='flex justify-center'><FadeLoader/></div>}
    {/* <NavBar wishlistCount = {}/> */}
    {/* <SearchBar/> */}
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-lg">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Car Image */}
        <div className="w-full">
          <img
            src={car.image}
            alt={`${car.make} ${car.model}`}
            className="rounded-lg object-cover w-full h-96 shadow-md"
          />
        </div>

        {/* Car Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{car.year} {car.make} {car.model}</h2>
            <p className="text-gray-500 mb-4">{car.color} • {car.engine} • {car.horsepower} HP</p>

            <div className="space-y-2">
              <Detail label="Mileage" value={`${car.mileage.toLocaleString()} miles`} />
              <Detail label="Price" value={`$${car.price.toLocaleString()}`} />
              <Detail label="Fuel Type" value={car.fuelType} />
              <Detail label="Transmission" value={car.transmission} />
              <Detail label="Previous Owners" value={car.owners} />
            </div>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {car.features.map((feature, index) => (
                <li key={index}>🚗 {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// Helper component for clean display
const Detail = ({ label, value }) => (
  <div className="flex justify-between border-b py-2">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default CarDetail