import banner from '../assets/banner.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <section
      className='w-full h-[70vh] bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='w-[70%] h-[75%] bg-black/20 flex flex-col items-center justify-around'>
        <h1 className='text-golden font-sora text-3xl text-center font-bold'>Welcome to Luminara</h1>
        <p className='text-center text-white w-[80%] font-sora my-4'>
          Experience seamless hotel management with Luminara — your all-in-one platform for effortless reservations,
          guest services, and luxury experiences. Designed for modern hotels that value excellence, efficiency, and
          unforgettable stays.Let your guests shine. Let Luminara handle the rest.
        </p>
        <Button
          className={'bg-primary font-sora p-2 '}
          title={'Explore More'}

        >

        </Button>
      </div>
    </section>
  );
};

export default Hero;
