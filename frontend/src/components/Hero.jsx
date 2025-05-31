import Jumbotron from '../components/Jumbotron';
import banner from '../assets/b1.jpg';
const Hero = () => {
  return (
    <div className='relative w-full h-[90vh] flex justify-center my-3 '>
      <div className='relative w-[90%] h-[90%] bg-green-300 rounded-2xl bg-center bg-cover'
           style={{backgroundImage : `url(${banner})`}}
      >
      <div className='h-full'>
        <h1 className='text-white text-4xl font-bold font-poppins text-center my-3'>
          Where Luxury Meets Serenity <br / >in Every Stay
        </h1>  
        <p className='text-white text-center'>
          Discover bespoke hospitality, exquisite dining, and unforgettable moments crafted just for you.
        </p>  
      </div>
        <div className='absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 w-[80%] h-[25%] rounded-2xl shadow-md
            bg-white'>
 
        </div>
      </div>
    </div>
  );
}

export default Hero;