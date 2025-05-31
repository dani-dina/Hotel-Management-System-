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
        
      </section>

      {/* Divider */}
      <div className='w-full h-24 bg-primary'></div>

      {/* Rooms Section */}
      <Rooms />
    </div>
  );
}

export default Home;