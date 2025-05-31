import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import waiter from '../assets/waiter.jpg';
import Rooms from '../components/Rooms';
import SupportIcon from '../components/Support';
const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero />
      <SupportIcon/>
      {/* About Section */}
      <section className='w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-8 items-center'>
            {/* Image Column */}
            <div className='w-full lg:w-1/2 h-[400px] md:h-[500px] flex justify-center'>
              <div 
                className='w-full h-full max-w-md bg-cover bg-center rounded-xl shadow-lg'
                style={{ backgroundImage: `url(${waiter})` }}
                aria-label="Professional waiter serving guests"
              />
            </div>

            {/* Content Column */}
            <div className='w-full lg:w-1/2 flex justify-center'>
              <div className='max-w-lg space-y-6'>
                <h2 className='text-golden text-xl md:text-2xl font-bold font-sora'>
                  About Us
                </h2>
                <h1 className='text-black font-bold text-3xl md:text-4xl lg:text-5xl font-lexury leading-tight tracking-wide'>
                  Luxurious Comfort,<br />Timeless Elegance Awaits
                </h1>
                <p className='text-gray-600 text-base md:text-lg font-open-sans'>
                  Discover our legacy of hospitality excellence. For over two decades, 
                  we've been redefining luxury with personalized service, exquisite 
                  accommodations, and unforgettable experiences that linger in memory 
                  long after your stay.
                </p>
                <button className='bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-300'>
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='w-full h-24 bg-primary'></div>

      {/* Rooms Section */}
      <Rooms />
    </div>
  );
}

export default Home;