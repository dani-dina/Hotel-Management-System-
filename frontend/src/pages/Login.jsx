import banner from '../assets/banner.jpg';

const Login = () => {
  return (
    <section className='w-full h-[87vh] flex items-center justify-center bg-center bg-cover'
             style={{backgroundImage :`url(${banner})`}}
    >
      <div className='w-[20%] h-[70%] bg-white/10 backdrop-blur-md rounded-md shadow-md border border-white/20 p-4'>
        <div>
          <h1 className='text-3xl font-bold text-golden'>Login</h1>
          <div>
            <input type='text'/>
            <input type='text'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;