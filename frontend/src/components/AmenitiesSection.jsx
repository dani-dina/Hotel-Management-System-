import { useState } from 'react';

const AmenitiesSection = () => {
  const [showPackages, setShowPackages] = useState(false);
  
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

  const packages = [
    {
      id: 1,
      name: "Romantic Getaway",
      price: "$899",
      duration: "3 nights",
      description: "Perfect package for couples with champagne, roses, and private dinner",
      includes: [
        "Luxury suite with ocean view",
        "Couples massage (60 mins)",
        "Private beachfront dinner",
        "Daily breakfast in bed"
      ]
    },
    {
      id: 2,
      name: "Family Fun Pack",
      price: "$1,299",
      duration: "4 nights",
      description: "Everything a family needs for a memorable vacation",
      includes: [
        "Connecting family rooms",
        "Kids eat free at all restaurants",
        "Daily kids club access",
        "Family photo session"
      ]
    },
    {
      id: 3,
      name: "Business Traveler",
      price: "$749",
      duration: "2 nights",
      description: "Productivity-focused package for corporate guests",
      includes: [
        "Executive room with workspace",
        "Express check-in/out",
        "Daily laundry service",
        "Airport transfers"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white relative">
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
            <button 
              onClick={() => setShowPackages(true)}
              className="bg-white text-[#0A4466] hover:bg-gray-100 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300"
            >
              View Packages
            </button>
          </div>
        </div>
      </div>

      {showPackages && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-[#0A4466]">Our Special Packages</h3>
              <button 
                onClick={() => setShowPackages(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.id} className=" rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-white text-primary p-4">
                      <h4 className="text-xl font-bold">{pkg.name}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-2xl font-bold">{pkg.price}</span>
                        <span className="bg-white/20 px-2 py-1 rounded-full text-sm">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      <h5 className="font-semibold text-[#0A4466] mb-2">Includes:</h5>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-[#0AADD2] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-4 w-full bg-[#0AADD2] hover:bg-[#0885a8] text-white py-2 px-4 rounded-lg transition-colors duration-300">
                        Book This Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-[#0A4466] mb-2">Need help choosing?</h4>
                <p className="text-gray-600 mb-4">Our concierge team can help you select the perfect package for your needs.</p>
                <button className="bg-white border border-[#0AADD2] text-[#0AADD2] hover:bg-[#0AADD2] hover:text-white py-2 px-6 rounded-lg transition-colors duration-300">
                  Contact Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AmenitiesSection;