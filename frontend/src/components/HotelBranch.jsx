import React, { useState } from 'react';

const HotelBranchCard = ({ branch, onViewClick }) => {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-40 overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src={branch.imageUrl} 
          alt={branch.name} 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-lg font-bold text-white">{branch.name}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm text-gray-700">{branch.rating} ({branch.reviewCount})</span>
        </div>
        
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{branch.description}</p>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center">
            <svg className="w-3 h-3 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{branch.location}</span>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">${branch.price}<span className="text-xs font-normal text-gray-500">/night</span></span>
          <button 
            onClick={() => onViewClick(branch)}
            className="px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-blue-300 transition-colors"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

const HotelDetailsPage = ({ hotel, onBackClick }) => {
  return (
    <div className="min-h-screen bg-white p-6">
      <button 
        onClick={onBackClick}
        className="mb-6 flex items-center text-primary hover:text-blue-300 transition-colors cursor-pointer"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Hotels
      </button>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-80 lg:h-96">
          <img 
            className="w-full h-full object-cover" 
            src={hotel.imageUrl} 
            alt={hotel.name} 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{hotel.name}</h1>
            <div className="flex items-center mt-2">
              <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white">{hotel.rating} ({hotel.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About {hotel.name}</h2>
            <p className="text-gray-600 mb-6">{hotel.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-600">{hotel.location}</p>
                  <p className="text-gray-600">{hotel.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg h-fit sticky top-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">${hotel.price}<span className="text-sm font-normal text-gray-500"> / night</span></h3>
              <div className="flex items-center text-green-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free cancellation available</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                </select>
              </div>
            </div>
            
            <button className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              No credit card required to reserve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [viewingHotel, setViewingHotel] = useState(null);
  
  const hotelBranches = [
    {
      id: 1,
      name: "Grand Plaza",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      reviewCount: 124,
      description: "Luxury 5-star hotel with ocean views and world-class amenities. Our flagship property features 300 rooms, three restaurants, a full-service spa, and direct beach access. The perfect blend of modern luxury and classic elegance.",
      location: "Miami, FL",
      address: "123 Beachfront Avenue, Miami, FL 33139",
      price: 299,
      amenities: [
        "Free WiFi", "Swimming Pool", "Spa", "Fitness Center",
        "Restaurant", "Room Service", "Beach Access", "Parking"
      ]
    },
    {
      id: 2,
      name: "Mountain Retreat",
      imageUrl: "https://images.unsplash.com/photo-1582719471380-480d3b011c59?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      reviewCount: 89,
      description: "Cozy lodge with stunning mountain views and spa facilities. Enjoy the tranquility of nature with our rustic-chic accommodations. Perfect for skiing in winter and hiking in summer.",
      location: "Aspen, CO",
      address: "456 Mountain View Road, Aspen, CO 81611",
      price: 199,
      amenities: [
        "Free WiFi", "Hot Tub", "Spa", "Ski Storage",
        "Restaurant", "Fireplace", "Hiking Trails", "Free Parking"
      ]
    },
    {
      id: 3,
      name: "Urban Oasis",
      imageUrl: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      reviewCount: 215,
      description: "Modern hotel in downtown with rooftop pool and city views. Our urban retreat offers easy access to business districts and cultural attractions, with sleek contemporary design throughout.",
      location: "New York, NY",
      address: "789 City Center Blvd, New York, NY 10001",
      price: 349,
      amenities: [
        "Free WiFi", "Rooftop Pool", "Business Center", "24/7 Gym",
        "Concierge", "Valet Parking", "Meeting Rooms", "Bar/Lounge"
      ]
    },
    {
      id: 4,
      name: "Beachfront Inn",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      reviewCount: 156,
      description: "Relaxing beachfront property with private beach access. Our intimate 120-room property offers personalized service and breathtaking ocean views from every room.",
      location: "San Diego, CA",
      address: "321 Ocean Drive, San Diego, CA 92109",
      price: 279,
      amenities: [
        "Free WiFi", "Private Beach", "Ocean View", "Water Sports",
        "Beach Bar", "Outdoor Pool", "Bicycle Rental", "Free Breakfast"
      ]
    }
  ];

  if (viewingHotel) {
    return <HotelDetailsPage 
             hotel={viewingHotel} 
             onBackClick={() => setViewingHotel(null)} 
           />;
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-primary mb-6">Our Hotel Branches</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotelBranches.map((branch) => (
          <HotelBranchCard 
            key={branch.id} 
            branch={branch} 
            onViewClick={() => setViewingHotel(branch)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;