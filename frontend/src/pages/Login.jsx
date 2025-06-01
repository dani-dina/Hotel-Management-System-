import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center p-4 bg-gray-100">
      
      {/* Login */}
      <div className="w-full max-w-xs bg-white shadow-2xl p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">Welcom back</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="telecommunication.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Password"
            />
          </div>
          
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password</a>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700"
          >
            Log in
          </button>
        </form>
        
        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-gray-50 text-sm text-gray-500">or continue with</span>
          </div>
        </div>
        
        {/* Social Login */}
        <div className="flex justify-center space-x-4">
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <FaFacebook className="text-blue-600" />
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <FaApple />
          </button>
        </div>
        
        {/* Sign up link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          You have access to your Register for time
        </p>
      </div>
    </div>
  );
};

export default Login;