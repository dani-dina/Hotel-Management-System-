import Button from '../components/Button';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const inputStyle = `w-full bg-transparent outline-none border border-gray-300 rounded-md py-2 px-3 focus:border-primary`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    // Add your login logic here
    console.log('Login data:', formData);
  };

  return (
    <section className='w-full min-h-[87vh] flex items-center justify-center bg-center bg-cover'>
      <div className='w-full max-w-md mx-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/20 p-6'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-3xl font-bold text-primary mb-6'>Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <form onSubmit={handleSubmit} className='w-full space-y-4'>
            <div className='w-full'>
              <label htmlFor='username' className='block mb-1 text-gray-700'>Username</label>
              <input 
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>
            
            <div className='w-full'>
              <label htmlFor='password' className='block mb-1 text-gray-700'>Password</label>
              <input 
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>
            
            <Button
              type="submit"
              className={'w-full py-2 text-white bg-primary rounded-md hover:bg-primary-dark transition-colors'}
              title={'Login'}
            />
          </form>
          
          <div className='mt-6 text-center'>
            <a 
              href="/register" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;