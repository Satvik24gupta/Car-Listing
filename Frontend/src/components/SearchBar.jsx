import React, {useState} from 'react'


const SearchBar = (props) => {


    
    // const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        brand: '',
        priceRange: '',
        fuelType: '',
        seatingCapacity: '',
    });

    const [fileteredLists, setFileteredLists] = useState('');
    
    // Handle search term change
    const handleSearchChange = (e) => {
        props.setSearchTerm(e.target.value);
        console.log(props.searchTerm)
      };
    
      // Handle filter change
      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: value,
        }));
      };
  return (
    <div className="bg-gray-100 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
          {/* Search Bar */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              value={props.searchTerm}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div>
              <select
                name="brand"
                value={filters.brand}
                onChange={handleFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Brand</option>
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
                <option value="brand3">Brand 3</option>
              </select>
            </div>
            <div>
              <select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Price Range</option>
                <option value="low">Under $50</option>
                <option value="medium">$50 - $150</option>
                <option value="high">Over $150</option>
              </select>
            </div>
            <div>
              <select
                name="fuelType"
                value={filters.fuelType}
                onChange={handleFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Fuel Type</option>
                <option value="gas">Gas</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <select
                name="seatingCapacity"
                value={filters.seatingCapacity}
                onChange={handleFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Seating Capacity</option>
                <option value="2">2 seats</option>
                <option value="4">4 seats</option>
                <option value="5">5 seats</option>
                <option value="7">7 seats</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SearchBar