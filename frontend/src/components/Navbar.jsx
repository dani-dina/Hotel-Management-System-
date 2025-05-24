import { navigations } from '../constants';
import Button from './Button';
import logo from '../assets/logo.png';

const Navbar = () =>{
  return (
    <section className='sticky top-0 left-0 w-full h-[10vh] flex items-center justify-center'>
      <div className='w-[90%]  h-full flex items-center justify-between'>
        <a href='/' className='mx-4'>
          <img
            src={logo}
            alt='Luminara'
            width={200}
            height={200}
          />
        </a>
        <nav className='flex gap-4'>
          {
            navigations.map((items) => (
              <a
                className='font-sora '
                key={items.id}
                href={items.url}
              >
                {items.title}
              </a>
            ))
          }
        </nav>
        <Button
          className='bg-primary text-white p-2'
          title={'Join us'}
        >
        </Button>
      </div>
    </section>
  );
}

export default Navbar;