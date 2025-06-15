import { useState } from 'react';

const PriceRangeSelector = () => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Price Range
      </label>

      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>

      <div className="relative h-8 flex items-center justify-between space-x-2">
        <input
          type="range"
          min="0"
          max="5000"
          step="50"
          value={minPrice}
          onChange={handleMinChange}
          className="w-full accent-blue-500"
        />
        <input
          type="range"
          min="0"
          max="5000"
          step="50"
          value={maxPrice}
          onChange={handleMaxChange}
          className="w-full accent-blue-500"
        />
      </div>

      <div className="text-sm text-gray-500 mt-2 text-center">
        Showing results from <span className="font-medium">${minPrice}</span> to <span className="font-medium">${maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceRangeSelector;
