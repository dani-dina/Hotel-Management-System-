import banner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <section
      className='w-full h-[70vh] bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='w-[70%] h-[75%] bg-gray-100/20'>
        <h1 className='text-white font-sora text-3xl text-center'>Welcome to Luminara</h1>
      </div>
    </section>
  );
};

export default Hero;
