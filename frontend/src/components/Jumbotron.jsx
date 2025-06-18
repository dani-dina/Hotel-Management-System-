import React, { useState } from 'react';
import { jumbotronLinks } from '../constants';
import Button from './Button';
import DatePickerComponent from './Calendar';
import CountrySelect from './CountrySelector';
import PriceRangeSelector from './SelectPrice';

const Jumbotron = () => {
  const [formData, setFormData] = useState({
    priceRange: [0, 5000],
    startDate: null,
    endDate: null,
    country: ''
  });
  const [activeLink, setActiveLink] = useState(jumbotronLinks[0].id);

  const center = 'flex justify-center';

  // Content configuration based on active link
  const linkConfigurations = {
    locations: {
      priceLabel: "Budget Range:",
      dateLabel: "Visit Date",
      countryLabel: "Select destination",
      showEndDate: false
    },
    rooms: {
      priceLabel: "Price Range:",
      dateLabel: "Stay Dates",
      countryLabel: "Select location",
      showEndDate: true
    },
    support: {
      priceLabel: "Service Budget:",
      dateLabel: "Available From",
      countryLabel: "Select region",
      showEndDate: false
    },
    books: {
      priceLabel: "Price Range:",
      dateLabel: "Delivery Date",
      countryLabel: "Select country",
      showEndDate: false
    }
  };

  const currentConfig = linkConfigurations[activeLink] || linkConfigurations.rooms;

  const handlePriceChange = (range) => {
    setFormData(prev => ({ ...prev, priceRange: range }));
  };

  const handleDateChange = (type, date) => {
    setFormData(prev => ({
      ...prev,
      [type === 'start' ? 'startDate' : 'endDate']: date
    }));
  };

  const handleCountryChange = (selectedCountry) => {
    setFormData(prev => ({ ...prev, country: selectedCountry }));
  };

  const handleSearch = () => {
    console.log('Search submitted:', { ...formData, activeLink });
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    // Reset form when switching tabs
    setFormData({
      priceRange: [0, 5000],
      startDate: null,
      endDate: null,
      country: ''
    });
  };

  return (
    <section className='w-[95%] h-[90%] flex flex-col items-center justify-between'>
      {/* Navigation Links */}
      <div className='w-full h-1/3 overflow-x-auto whitespace-nowrap py-2 md:py-0 md:overflow-visible md:whitespace-normal'>
        {jumbotronLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => handleLinkClick(item.id)}
            className={`mr-4 font-poppins cursor-pointer text-sm md:text-base ${
              activeLink === item.id 
                ? 'text-primary font-semibold' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Form Section - Dynamically changes based on navigation */}
      <div className='w-full h-3/4 flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0'>
        {/* Price Range */}
        <div className='h-full w-full md:w-1/5'>
          <PriceRangeSelector 
            min={0}
            max={5000}
            onChange={handlePriceChange}
            value={formData.priceRange}
            label={currentConfig.priceLabel}
          />
        </div>
        
        {/* Start Date */}
        <div className={`h-full w-full md:w-1/5 ${center}`}>
          <DatePickerComponent 
            title={currentConfig.dateLabel}
            selectedDate={formData.startDate}
            onChange={(date) => handleDateChange('start', date)}
          />
        </div>
        
        {/* End Date (conditionally shown) */}
        {currentConfig.showEndDate && (
          <div className={`h-full w-full md:w-1/5 ${center}`}>
            <DatePickerComponent 
              title={"Ending Date"}
              selectedDate={formData.endDate}
              onChange={(date) => handleDateChange('end', date)}
              minDate={formData.startDate}
            />
          </div>
        )}
        
        {/* Country/Destination Selector */}
        <div className={`h-full w-full md:w-1/5 ${center}`}>
          <div className='w-full md:w-4/5 flex justify-center'>
            <CountrySelect 
              selectedCountry={formData.country}
              onChange={handleCountryChange}
              label={currentConfig.countryLabel}
            />
          </div>
        </div>
        
        {/* Search Button */}
        <div className='h-full w-full md:w-1/5 flex items-center justify-center md:justify-end'>
          <Button
            title={'Search'}
            onClick={handleSearch}
            className='w-full md:w-3/5 bg-primary text-white py-3 hover:bg-primary-dark transition-colors text-sm md:text-base'
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
