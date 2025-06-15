import { jumbotronLinks } from '../constants';
import Button from './Button';
import DatePickerComponent from './Calendar';
import CountrySelect from './CountrySelector';
import PriceRangeSelector from './SelectPrice';
const Jumbotron = () => {

  return (
    <section className='w-[95%] h-[90%] flex flex-col items-center justify-between'>
      <div className='w-full h-1/3'>
        {
          jumbotronLinks.map((items) => (
            <a key={items.id}
              className='mr-4 font-poppins cursor-pointer text-primary font-semibold'
            >{items.title}</a>
          ))
        }
      </div>
      <div className='w-full h-3/4 flex items-center justify-around'>
        <div className='h-full w-1/5'>
          <CountrySelect
          />
        </div>
        <div className='h-full w-1/5'>
          <DatePickerComponent
            title={'Starting Date'}
          />
        </div>
        <div className='h-full w-1/5'>
          <DatePickerComponent
            title={'Ending Date'}
          />
        </div>
        <div className='h-full w-1/5 '>
          <PriceRangeSelector />
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
