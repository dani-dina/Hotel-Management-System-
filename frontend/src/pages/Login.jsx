import banner from '../assets/banner.jpg';

const Login = () => {
  return (
    <section className='w-full h-[87vh] flex items-center justify-center bg-center bg-cover'
             style={{backgroundImage :`url(${banner})`}}
    >
      <div className='w-[20%] h-[70%] bg-white/10 backdrop-blur-md rounded-md shadow-md border border-white/20
         text-white p-4'>
  login
      </div>

    </section>
  );
}

export default Login;