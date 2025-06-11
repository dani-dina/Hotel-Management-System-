import { jumbotronLinks } from '../constants';

const Jumbotron = () => {
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
      <div className='w-full h-1/3 bg-blue-50'>

      </div>
      <div className='w-full h-1/3 bg-yellow-200'>

      </div>
    </section>
  );
}

export default Jumbotron;
