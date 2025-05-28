import RestaurantCard from '../components/RestaurantCard';

const Dining = () => {
  const restaurants = [
    {
      name: "The Grand Restaurant",
      cuisine: "International",
      hours: "7:00 AM - 10:00 PM",
      dressCode: "Smart Casual",
      image: "/images/restaurant-main.jpg"
    },
    // More dining options...
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Dining Experiences</h1>
      <div className="space-y-12">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard 
            key={index} 
            restaurant={restaurant} 
            reverseLayout={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Dining;