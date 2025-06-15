import React from 'react';

const HotelBranchCard = ({ branch }) => {
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
          <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  const hotelBranches = [
    {
      id: 1,
      name: "Grand Plaza",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      reviewCount: 124,
      description: "Luxury 5-star hotel with ocean views and world-class amenities.",
      location: "Miami, FL",
      price: 299,
    },
    {
      id: 2,
      name: "Mountain Retreat",
      imageUrl: "https://images.unsplash.com/photo-1582719471380-480d3b011c59?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      reviewCount: 89,
      description: "Cozy lodge with stunning mountain views and spa facilities.",
      location: "Aspen, CO",
      price: 199,
    },
    {
      id: 3,
      name: "Urban Oasis",
      imageUrl: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      reviewCount: 215,
      description: "Modern hotel in downtown with rooftop pool and city views.",
      location: "New York, NY",
      price: 349,
    },
    {
      id: 4,
      name: "Beachfront Inn",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      reviewCount: 156,
      description: "Relaxing beachfront property with private beach access.",
      location: "San Diego, CA",
      price: 279,
    }
  ];

  return (
    <div className="w-full min-h-screen py-10 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Our Hotel Branches</h1>
      
      <div className="w-full flex items-center justify-between ">
        {hotelBranches.map((branch) => (
          <HotelBranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default App;