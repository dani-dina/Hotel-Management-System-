import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';

const Home = () => {
  return(
    <section className='w-full h-full'>
      <Info />
      <Hero />
    </section>
  );
}

export default Home;