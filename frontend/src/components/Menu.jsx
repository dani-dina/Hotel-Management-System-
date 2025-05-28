import React, { useState } from 'react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic tomato sauce, mozzarella, and basil',
      price: 12.99,
      category: 'pizza',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Pasta with eggs, cheese, pancetta, and pepper',
      price: 14.50,
      category: 'pasta',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
      price: 8.99,
      category: 'salad',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Pepperoni Pizza',
      description: 'Tomato sauce, mozzarella, and pepperoni',
      price: 13.99,
      category: 'pizza',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Tiramisu',
      description: 'Coffee-flavored Italian dessert',
      price: 6.50,
      category: 'dessert',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Garlic Bread',
      description: 'Toasted bread with garlic butter',
      price: 4.50,
      category: 'appetizer',
      image: 'https://via.placeholder.com/150'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'salad', name: 'Salads' },
    { id: 'dessert', name: 'Desserts' },
    { id: 'appetizer', name: 'Appetizers' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-indigo-600 font-bold">${item.price.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category.</p>
          </div>
        )}
      </main>

      {cartItems.length > 0 && (
        <div className="fixed bottom-6 right-6">
          <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="ml-2 bg-white text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              {cartItems.length}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;