import banner from '../assets/banner.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] md:min-h-[600px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-golden font-sora text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Welcome to Luminara
          </h1>
          
          <p className="text-white font-sora text-sm sm:text-base md:text-lg mb-8 mx-auto max-w-2xl leading-relaxed">
            Experience seamless hotel management with Luminara — your all-in-one platform for effortless reservations,
            guest services, and luxury experiences. Designed for modern hotels that value excellence, efficiency, and
            unforgettable stays. Let your guests shine. Let Luminara handle the rest.
          </p>
          
          <Button
            className="bg-primary hover:bg-primary-dark text-white font-sora px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
            title="Explore More"
          />
        </div>
      </div>  

      {/* Bottom Card */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] max-w-6xl">
        <div className="bg-white rounded-lg shadow-xl p-6 h-full min-h-[120px] md:min-h-[150px] flex items-center justify-center">
          {/* Add your card content here */}
          <div className="text-center">
            <p className="text-gray-700 font-sora text-sm md:text-base">
              Trusted by 100+ luxury hotels worldwide
            </p>
            {/* Consider adding logos or badges here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;