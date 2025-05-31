import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import waiter from '../assets/waiter.jpg';
import Rooms from '../components/Rooms';
import SupportIcon from '../components/Support';
import Button from '../components/Button';
const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero />
      <SupportIcon/>
      {/* About Section */}
      <section className='w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
        <div className='w-[90%]'>
          <div className=''>
            <h1 className='text-3xl font-semibold font-poppins'>Best offer this month </h1>
            <div className='w-full flex items-center justify-between'>
              <p>This can be detailed description or just a short text </p>
              <Button
                className={'bg-gray-200'}
                title={'view all'}
                span={'text-primary'}

              />
            </div>
          </div>
          <div>

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