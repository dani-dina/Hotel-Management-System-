import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = (props)=>{
    return (
    <div className="w-full h-[100%] bg-amber-950">
          <Navbar />
          <Hero />
    </div>
    );
}

export default Home;