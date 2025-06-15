import { jumbotronLinks } from '../constants';
import Button from './Button';
import DatePickerComponent from './Calendar';
import CountrySelect from './CountrySelector';
const Jumbotron = () => {

  return (
    <section className='w-[95%] h-[90%] flex flex-col items-center justify-between'>
      <div className='w-full h-1/3'>
        {
          jumbotronLinks.map((items) => (
            <a key={items.id}
              className='ml-3 font-poppins cursor-pointer text-primary'
            >{items.title}</a>
          ))
        }
      </div>
      <div className='w-full h-3/4 flex items-center justify-around'>
        <div className='h-full w-1/5'>
          <CountrySelect />
        </div>
        <div className='h-full w-1/5'>
          <DatePickerComponent />
        </div>
        <div className='h-full w-1/5'>
          <DatePickerComponent />
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
