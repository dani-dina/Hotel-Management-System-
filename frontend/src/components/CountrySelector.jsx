import { countries } from '../constants';
import { useState } from 'react';

const CountrySelector = () => {
  const [selected, setSelected] = useState('');
  return (
    <div className="w-full max-w-sm mx-auto ">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select country
      </label>
      <select
        id="country"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="block w-3/4 px-4 py-2 border border-gray-300 rounded-md outline-none bg-white text-gray-800"
      >
        <option value="" disabled>Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country} className='border-0'>
              {country}
        </option>
          ))}
      </select>
    </div>
  );
}

export default CountrySelector;