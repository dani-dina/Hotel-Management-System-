import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../components/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputStyle = `w-full bg-transparent outline-none border border-gray-300 rounded-md py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary`;

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
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Login data:', formData);
      setIsLoading(false);
      // Handle successful login or error
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic here
  };

  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md mx-4 bg-white rounded-xl shadow-lg overflow-hidden'>
        {/* Card Header */}
        <div className='bg-primary py-4 px-6'>
          <h1 className='text-2xl font-bold text-white text-center'>Welcome Back</h1>
        </div>
        
        {/* Card Body */}
        <div className='p-6 sm:p-8'>
          {error && (
            <div className='mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm'>
              {error}
            </div>
          )}

          {/* Social Login Buttons */}
          <div className='space-y-3 mb-6'>
            <button
              onClick={() => handleSocialLogin('google')}
              className='w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors'
            >
              <FaGoogle className='text-red-500' />
              Continue with Google
            </button>
            
            <button
              onClick={() => handleSocialLogin('facebook')}
              className='w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors'
            >
              <FaFacebook className='text-blue-600' />
              Continue with Facebook
            </button>
            
            <button
              onClick={() => handleSocialLogin('apple')}
              className='w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors'
            >
              <FaApple />
              Continue with Apple
            </button>
          </div>

          {/* Divider */}
          <div className='relative mb-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>OR</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='username' className='block text-sm font-medium text-gray-700 mb-1'>
                Username or Email
              </label>
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
            
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
                Password
              </label>
              <input 
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className={inputStyle}
                required
              />
              <div className='mt-1 text-right'>
                <a href="/forgot-password" className='text-sm text-primary hover:text-primary-dark'>
                  Forgot password?
                </a>
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 text-white bg-primary rounded-md hover:bg-primary-dark transition-colors ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className='mt-6 text-center text-sm text-gray-600'>
            Don't have an account?{' '}
            <a 
              href="/register" 
              className="font-medium text-primary hover:text-primary-dark"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;