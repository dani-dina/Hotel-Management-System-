import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { FiMail, FiLock } from 'react-icons/fi';
import { useState } from 'react';
import Button from '../components/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <section className='w-full h-[80vh] flex items-center justify-center bg-gray-50 p-4'>
      <div className='w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden'>
        {/* Card Header */}
        <div className=' py-6 px-6 text-center'>
          <h1 className='text-2xl font-bold text-white'>Welcome Back</h1>
          <p className='text-green-100 mt-1'>Sign in to your account</p>
        </div>
        
        {/* Card Body */}
        <div className='p-6'>
          {error && (
            <div className='mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center animate-fade-in'>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-1'>
              <label htmlFor='username' className='block text-sm font-medium text-gray-600'>
                Email address
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FiMail className='text-gray-400' />
                </div>
                <input 
                  type='text'
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className='w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-[#1B4332] outline-none transition-all duration-200'
                  placeholder='you@example.com'
                  required
                />
              </div>
            </div>
            
            <div className='space-y-1'>
              <div className='flex justify-between items-center'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
                  Password
                </label>
                <a href="/forgot-password" className='text-sm text-[#1B4332] hover:text-green-800 transition-colors'>
                  Forgot password?
                </a>
              </div>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FiLock className='text-gray-400' />
                </div>
                <input 
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-[#1B4332] outline-none transition-all duration-200'
                  placeholder='••••••••'
                  required
                />
              </div>
            </div>
            
            <Button
              type="submit"
              title={'Login'}
              disabled={isLoading}
              className={`w-full py-3 text-white bg-[#1B4332] rounded-lg hover:bg-green-800 transition-all duration-300 ${
                isLoading ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <span className='flex items-center justify-center'>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign in'}
            </Button>
          </form>

          {/* Divider */}
          <div className='relative my-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200'></div>
            </div>
            <div className='relative flex justify-center'>
              <span className='px-3 bg-white text-gray-400 text-sm'>or sign in with</span>
            </div>
          </div>

          {/* Social Login Buttons - Now at bottom and circular */}
          <div className='flex justify-center space-x-4'>
            <button
              onClick={() => handleSocialLogin('google')}
              className='flex items-center justify-center w-10 h-10 rounded-full bg-[#1B4332] text-white hover:bg-green-800 transition-colors'
              aria-label="Login with Google"
            >
              <FaGoogle className='text-lg' />
            </button>
            
            <button
              onClick={() => handleSocialLogin('facebook')}
              className='flex items-center justify-center w-10 h-10 rounded-full bg-[#1B4332] text-white hover:bg-green-800 transition-colors'
              aria-label="Login with Facebook"
            >
              <FaFacebook className='text-lg' />
            </button>
            
            <button
              onClick={() => handleSocialLogin('apple')}
              className='flex items-center justify-center w-10 h-10 rounded-full bg-[#1B4332] text-white hover:bg-green-800 transition-colors'
              aria-label="Login with Apple"
            >
              <FaApple className='text-lg' />
            </button>
          </div>

          {/* Sign Up Link */}
          <div className='mt-6 text-center text-sm text-gray-500'>
            Don't have an account?{' '}
            <a 
              href="/auth/sign-in" 
              className="font-medium text-[#1B4332] hover:text-green-800 transition-colors"
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