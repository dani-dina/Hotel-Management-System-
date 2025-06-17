const AmenitiesSection = () => {
  const amenities = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Luxury Spa",
      description: "Rejuvenate with our signature treatments and therapies"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Event Spaces",
      description: "Perfect venues for weddings and corporate events"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fine Dining",
      description: "Multiple restaurants with international cuisine"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "24/7 Concierge",
      description: "Personalized service available anytime"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hotel <span className="text-[#0AADD2]">Amenities</span> & Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a perfect stay at our luxury hotel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-[#0AADD2] group transition-all duration-300">
              <div className="w-16 h-16 bg-[#0AADD2] text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-[#0AADD2] transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-white/90">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#0AADD2] to-[#0885a8] rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Special Package Deal</h3>
              <p>Book 3 nights and get 1 night free plus spa credits!</p>
            </div>
            <button className="bg-white text-[#0A4466] hover:bg-gray-100 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300">
              View Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;