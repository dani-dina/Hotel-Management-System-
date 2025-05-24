import banner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <section
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Content here */}
    </section>
  );
};

export default Hero;
