import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCar, FaBus, FaSubway, FaPlane } from 'react-icons/fa';

const Location = () => {
  // hotel location data
  const hotelLocation = {
    name: "Grand Horizon Hotel",
    address: "123 Luxury Avenue, Downtown, Metropolis 10001",
    phone: "+1 (555) 123-4567",
    email: "info@grandhorizon.com",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    transportation: [
      { type: "car", time: "15 min", details: "Free valet parking available" },
      { type: "bus", time: "25 min", details: "Bus #M5 stops directly in front" },
      { type: "subway", time: "20 min", details: "Nearest station: Central Station (Lines 1, 2, 3)" },
      { type: "airport", time: "45 min", details: "Airport shuttle service available" }
    ]
  };

  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${hotelLocation.coordinates.lat},${hotelLocation.coordinates.lng}`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Location</h1>
        <p className="text-xl text-gray-600">Find your way to the Grand Horizon Hotel</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe
            title="Hotel Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={mapEmbedUrl}
            allowFullScreen
          ></iframe>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">{hotelLocation.address}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaPhone className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">{hotelLocation.phone}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">{hotelLocation.email}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Getting Here</h2>
            <div className="space-y-4">
              {hotelLocation.transportation.map((option, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="mr-4 mt-1">
                    {option.type === "car" && <FaCar className="text-blue-500 text-xl" />}
                    {option.type === "bus" && <FaBus className="text-green-500 text-xl" />}
                    {option.type === "subway" && <FaSubway className="text-red-500 text-xl" />}
                    {option.type === "airport" && <FaPlane className="text-purple-500 text-xl" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 capitalize">
                      By {option.type} • {option.time}
                    </h3>
                    <p className="text-gray-600">{option.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Attractions */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nearby Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Central Park", distance: "0.5 miles", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9" },
            { name: "Museum of Modern Art", distance: "1.2 miles", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e" },
            { name: "Times Square", distance: "2.3 miles", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee" },
            { name: "Empire State Building", distance: "1.8 miles", image: "https://images.unsplash.com/photo-1502104034360-73176bb1e92e" }
          ].map((attraction, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{attraction.name}</h3>
                <p className="text-gray-600">{attraction.distance} from hotel</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;