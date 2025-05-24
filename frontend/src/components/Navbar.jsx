import { navigations } from '../constants';
import logo from '../assets/logo.png';

const Navbar = () =>{
  return (
    <section className='sticky top-0 left-0 w-full h-[10vh] flex items-center justify-center'>
      <div className='w-[90%] bg-red-600 h-full flex items-center justify-between'>
        <a href='/' className=''>
          <img src={logo} alt='Luminara'/>
        </a>
        <nav className=''>
          {
            navigations.map((items) => (
              <a
                key={items.id}
                href={items.url}
                className=''
              >
                {items.title}
              </a>
            ))
          }
        </nav>
      </div>
    </section>
  );
}

export default Navbar;