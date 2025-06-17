const LocationSection = () => {
  const attractions = [
    {
      name: "Sunset Beach",
      distance: "0.2 miles",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
    },
    {
      name: "Downtown Shopping",
      distance: "0.5 miles",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Marina Bay",
      distance: "0.8 miles",
      image: "https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
    },
    {
      name: "Mountain Trails",
      distance: "2.1 miles",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Perfect <span className="text-[#0AADD2]">Location</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Our hotel is centrally located with easy access to the best attractions in the area. 
              Whether you're here for business or leisure, everything you need is just moments away.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#0AADD2] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </h3>
              <p className="text-gray-700 mb-4">123 Oceanview Boulevard, Coastal City, CC 90210</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center text-[#0AADD2] hover:text-[#0885a8]">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Get Directions
                </button>
                <button className="flex items-center text-[#0AADD2] hover:text-[#0885a8]">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Front Desk
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transportation Options</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0AADD2]/10 text-[#0AADD2] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Airport Shuttle</p>
                    <p className="text-sm text-gray-600">Complimentary service available</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0AADD2]/10 text-[#0AADD2] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Taxi Service</p>
                    <p className="text-sm text-gray-600">24/7 available at lobby</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0AADD2]/10 text-[#0AADD2] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Car Rental</p>
                    <p className="text-sm text-gray-600">Partner discounts available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Nearby Attractions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {attractions.map((attraction, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden h-48 group">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                    <h4 className="text-white font-semibold text-lg">{attraction.name}</h4>
                    <p className="text-[#FFD166]">{attraction.distance} from hotel</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with your actual map embed */}
                <div className="w-full h-full flex items-center justify-center bg-[#0AADD2]/10 text-[#0AADD2]">
                  <svg className="w-12 h-12 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Interactive Map
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};