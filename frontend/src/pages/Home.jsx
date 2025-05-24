import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import waiter from '../assets/waiter.jpg';
import Rooms from '../components/Rooms';

const Home = () => {
  return(
    <section className='w-full'>
      <Hero />
      <div className='w-full h-[100vh] flex items-center justify-center mt-[3rem]'>
        <div className='w-[90%] h-[80%] flex'>
          <div className='w-1/2 h-full flex items-center justify-center'>
            <div className='w-[60%] h-[90%] bg-center bg-cover rounded-md'
                 style={{ backgroundImage: `url(${waiter})` }}
            >

            </div>
          </div>
          <div className='w-1/2 h-full flex items-center justify-center'>
            <div className='w-[75%] h-[90%] '>
              <h2 className='text-golden text-2xl font-bold font-sora'>
                About us
              </h2>
              <h1 className='text-black font-bold text-4xl font-lexury tracking-wide'>
                Lexurious Comfort,<br /> Timeless Elegance Awaits
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[15vh] bg-primary mt-[3rem]'>
          fdf
      </div>
      <Rooms/>
    </section>
  );
}

export default Home;