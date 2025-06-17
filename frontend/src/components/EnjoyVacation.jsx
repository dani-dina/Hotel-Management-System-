import { useState } from 'react';

const EnjoyVacation = () => {
  const [activeTab, setActiveTab] = useState('luxury');
  
  const features = {
    luxury: [
      'Private beach access with cabana service',
      '24/7 concierge and butler service',
      'Luxury spa with signature treatments',
      'Fine dining with Michelin-starred chefs'
    ],
    family: [
      'Kids club with daily activities',
      'Family suites with connecting rooms',
      'Child-friendly pools with water slides',
      'Special children\'s menu in all restaurants'
    ],
    adventure: [
      'Guided snorkeling and scuba trips',
      'Sunset sailing excursions',
      'Hiking tours to hidden waterfalls',
      'Local cultural immersion experiences'
    ],
    romance: [
      'Private beachfront dinners',
      'Couples massage packages',
      'Champagne turndown service',
      'Honeymoon suite with ocean view'
    ]
  };

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-pink-500 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-400">Enjoy</span> Your Dream Vacation With Us
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Whether you seek relaxation, adventure, or quality family time, our resort offers unparalleled experiences tailored to your desires.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side - Image showcase */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Luxury resort"
                className="w-full h-auto transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white capitalize">{activeTab} Experience</h3>
                <button className="mt-4 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(features).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-yellow-400 text-blue-900 shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Features list */}
            <ul className="space-y-4 mb-10">
              {features[activeTab].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-white text-sm">Guest Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-white text-sm">Concierge</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-yellow-400">5★</div>
                <div className="text-white text-sm">Luxury Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-white text-sm">Activities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyVacation;