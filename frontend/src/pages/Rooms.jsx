import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaBed, FaWifi, FaSnowflake, FaTv, FaCoffee, FaParking,
  FaSwimmingPool, FaUmbrellaBeach
} from 'react-icons/fa';
import { GiBathtub, GiDesk, GiSofa } from 'react-icons/gi';
import { MdBalcony, MdSmokeFree, MdSmokingRooms } from 'react-icons/md';
import { BsCalendarCheck, BsCalendarX } from 'react-icons/bs';
import { FiFilter, FiX } from 'react-icons/fi';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    bedType: '',
    view: '',
    minPrice: '',
    maxPrice: '',
    hasBalcony: false,
    isSmokingAllowed: null,
    amenities: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('price-asc');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/rooms/rooms');
        setRooms(response.data.message); // Note: your data is in the `message` array
      } catch (err) {
        setError(err.message || 'Failed to fetch rooms');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const filteredRooms = rooms
    .filter(room => {
      return (
        (filters.bedType === '' || room.bedType === filters.bedType) &&
        (filters.view === '' || room.views === filters.view) &&
        (filters.minPrice === '' || room.price >= Number(filters.minPrice)) &&
        (filters.maxPrice === '' || room.price <= Number(filters.maxPrice)) &&
        (!filters.hasBalcony || room.hasBalcony === true) &&
        (filters.isSmokingAllowed === null || room.isSmokingAllowed === filters.isSmokingAllowed) &&
        (filters.amenities.length === 0 ||
          filters.amenities.every(amenity => room.amenities.includes(amenity)))
      );
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'floor-asc': return a.floorNumber - b.floorNumber;
        case 'floor-desc': return b.floorNumber - a.floorNumber;
        default: return 0;
      }
    });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAmenityChange = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const resetFilters = () => {
    setFilters({
      bedType: '',
      view: '',
      minPrice: '',
      maxPrice: '',
      hasBalcony: false,
      isSmokingAllowed: null,
      amenities: []
    });
  };

  const getBedIcon = (bedType) => {
    switch (bedType) {
      case 'Single': return <FaBed className="text-blue-500" />;
      case 'Double': return <FaBed className="text-green-500" />;
      case 'King': return <FaBed className="text-purple-500" />;
      case 'Queen': return <FaBed className="text-pink-500" />;
      case 'Bunk': return <FaBed className="text-yellow-500" />;
      default: return <FaBed className="text-gray-500" />;
    }
  };

  const getViewIcon = (view) => {
    switch (view) {
      case 'Sea': return <FaUmbrellaBeach className="text-blue-400" />;
      case 'Mountain': return <FaParking className="text-green-600" />;
      case 'City': return <FaTv className="text-gray-600" />;
      case 'Garden': return <GiSofa className="text-green-400" />;
      default: return <FiX className="text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading rooms: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Rooms & Suites</h1>

      {/* Filter Toggle and Sorting */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg"
        >
          {showFilters ? <FiX /> : <FiFilter />}
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-medium">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded-md px-3 py-1"
          >
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="floor-asc">Floor (Low to High)</option>
            <option value="floor-desc">Floor (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-md">
          {/* Your full filter UI from your code goes here (bedType, view, price range, etc.) */}
          {/* ... */}
        </div>
      )}

      {/* Rooms Grid */}
      {filteredRooms.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No rooms match your filters</h3>
          <button
            onClick={resetFilters}
            className="mt-4 text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => (
            <div key={room._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                {room.isBooked && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Booked
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{room.name}</h3>
                  <div className="text-lg font-semibold text-primary">
                    ${room.price.toLocaleString()}<span className="text-sm text-gray-500">/night</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {room.description || 'Luxurious accommodation with premium amenities.'}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1 text-sm">
                    {getBedIcon(room.bedType)}
                    <span>{room.bedType} Bed</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {getViewIcon(room.views)}
                    <span>{room.views} View</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span>Floor {room.floorNumber}</span>
                  </div>
                  {room.hasBalcony && (
                    <div className="flex items-center gap-1 text-sm">
                      <MdBalcony className="text-green-500" />
                      <span>Balcony</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 4).map(amenity => (
                    <span key={amenity} className="text-xs bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                      {amenity === 'Wi-Fi' && <FaWifi className="text-blue-500" />}
                      {amenity === 'Air Conditioning' && <FaSnowflake className="text-blue-300" />}
                      {amenity === 'Flat-screen TV' && <FaTv className="text-gray-600" />}
                      {amenity}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;
