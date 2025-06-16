import HotelBranchCard from '../components/HotelBranch';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import SupportIcon from '../components/Support';
import Button from '../components/Button';
import banner from '../assets/b3.jpg';
import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero />
      <SupportIcon/>
      <section className='w-full py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
        <div className='w-[90%]'>
          <div className='my-4'>
            <h1 className='text-4xl font-semibold font-poppins'>Best offer this month </h1>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400'>This can be detailed description or just a short text </p>
              <Button
                className={'bg-gray-200'}
                title={'view all'}
                span={'text-primary'}
              />
            </div>
          </div>
          <div className='w-full h-[40vh] flex items-center justify-between font-poppins'>
            <div className='w-[40%] h-full'>
              <div className='w-full h-[90%] bg-gray-100 rounded-md flex items-center justify-around'>
                <img
                  src={banner}
                  className='w-[30%] rounded-md h-[60%]'
                />
                <div className='w-[40%] h-[60%] flex flex-col items-center justify-around'>
                  <h1 className='text-3xl font-semibold'>45 % OFF</h1>
                  <p className='text-center text-gray-700 py-2'>This can be detailed description or just short text</p>
                  <Button
                    className={'bg-primary py-2'}
                    title={'BOOK NOW'}
                />
                </div>
              </div>
            </div>
            <div className='w-[40%] h-full '>
              <div className='w-full h-[90%] bg-gray-100 rounded-md flex items-center justify-around'>
                <img
                  src={banner}
                  className='w-[30%] rounded-md h-[60%]'
                />
                <div className='w-[40%] h-[60%] flex flex-col items-center justify-around'>
                  <h1 className='text-3xl font-semibold'>45 % OFF</h1>
                  <p className='text-center text-gray-700 py-2'>This can be detailed description or just short text</p>
                  <Button
                    className={'bg-primary py-2'}
                    title={'BOOK NOW'}

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='w-full h-30 bg-primary flex items-center justify-center'>
        <div className='w-[90%] h-full flex items-center justify-between'>
          <StatsSection />
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='w-[90%] flex items-center justify-between'>
          <HotelBranchCard/>
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
      <Rooms />
    </div>
  );
}

export default Home;