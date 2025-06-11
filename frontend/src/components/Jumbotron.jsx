import { jumbotronLinks } from '../constants';
import { countries } from '../constants';
import { useState } from 'react';
import Button from './Button';

const Jumbotron = () => {

  const [selected, setSelected] = useState('');

  return (
    <section className='w-[95%] h-[90%] flex flex-col items-center justify-between'>
      <div className='w-full h-1/3'>
        {
          jumbotronLinks.map((items) => (
            <a key={items.id}
              className='ml-3 font-poppins cursor-pointer'
            >{items.title}</a>
          ))
        }
      </div>
      <div className='w-full h-3/4 flex items-center justify-around'>
        <div className='h-full w-1/5 '>
          <div className="w-full max-w-sm mx-auto mt-8">
            <select
              id="country"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="block w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white text-gray-800"
            >
            <option value="" disabled>Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
    </div>
        </div>
        <div className='h-full w-1/5 bg-gray-500'>

        </div>
        <div className='h-full w-1/5 bg-gray-500'>

        </div>
        <div className='h-full w-1/5 bg-gray-500'>

        </div>
        <div className='h-full w-1/5 flex items-center justify-end'>
          <Button
            title={'Search'}
            className='w-3/5 bg-primary text-white py-3 hover:bg-primary-dark transition-colors'
          />
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
