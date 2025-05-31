import { Link, useLocation } from 'react-router-dom';
import { navigations } from '../constants';
import Button from './Button';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hiddenPaths = ['/auth/login', '/auth/sign-up'];
  const isMinimalNavbar = hiddenPaths.some(path => 
    location.pathname.startsWith(path)
  );

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 left-0 w-full h-[10vh] flex items-center justify-center z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className='w-full px-4 md:px-8 lg:w-[90%] h-full flex items-center justify-between'>
        <Link to='/' className='mx-4'>
          <img 
            src={logo} 
            alt='Luminara' 
            className='w-40 md:w-48 lg:w-52 h-auto' 
          />
        </Link>

        {!isMinimalNavbar && (
          <>
            {/* Desktop Navigation */}
            <nav className='hidden md:flex gap-6 lg:gap-8 items-center'>
              {navigations.map((item) => (
                <Link
                  className={`font-sora font-semibold transition-colors ${
                    location.pathname === item.url 
                      ? 'text-primary font-medium' 
                      : 'hover:text-primary'
                  }`}
                  key={item.id}
                  to={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className='md:hidden text-gray-700 focus:outline-none'
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Button */}
            <div className='hidden md:block'>
              <Link to='/sign-up'>
                <Button className='bg-primary text-white px-4 py-2 hover:bg-primary-dark transition-colors' title='Join us' />
              </Link>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className='md:hidden absolute top-[10vh] left-0 w-full bg-white shadow-lg py-4 px-6 animate-slideDown'>
                <nav className='flex flex-col gap-4 mb-4'>
                  {navigations.map((item) => (
                    <Link
                      className={`font-sora text-lg py-2 ${
                        location.pathname === item.url 
                          ? 'text-primary font-medium' 
                          : 'hover:text-primary'
                      }`}
                      key={item.id}
                      to={item.url}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <Link to='/sign-up' className='block w-full'>
                  <Button className='w-full bg-primary text-white py-3 hover:bg-primary-dark transition-colors' title='Join us' />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;