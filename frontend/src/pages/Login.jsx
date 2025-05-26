import banner from '../assets/banner.jpg';
import Button from '../components/Button';
import { useState } from 'react';
const Login = () => {

  const inputStyle = `w-full bg-none outline-0 border-1 border-primary rounded-md p-2`;
  return (
    <section className='w-full h-[87vh] flex items-center justify-center bg-center bg-cover'
             style={{backgroundImage :`url(${banner})`}}
    >
      <div className='w-[20%] h-[70%] bg-white/10 backdrop-blur-md rounded-md shadow-md border border-white/20 p-4'>
        <div className='relative w-full h-full '>
          <h1 className='text-3xl font-bold text-primary'>Login</h1>
          <div className='w-[90%] h-[90%] flex flex-col items-center justify-around '>
            <input type='text'
                   name='_userName'
                   className={`${inputStyle}`}
            />
            <input type='text'
                   name='_passWord'
                   className={`${inputStyle}`}
            />
            <Button
              className={'w-full py-2 text-golden bg-primary rounded-md'}
              title={'Submit'}
            ></Button>
          </div>
          <a 
             href="/register" 
             className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-blue-700"
          >
            Create Account
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;