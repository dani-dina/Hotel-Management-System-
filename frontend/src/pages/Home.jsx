import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';

const Home = () => {
  return(
    <section className='w-full'>
      <Hero />
      <div className='w-full h-[100vh] bg-red-600 flex items-center justify-center'>
        <div className='w-[90%] h-[80%] bg-green-700 flex'>
          <div className='w-1/2 h-full'>

          </div>
          <div className='w-1/2 h-full'>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;