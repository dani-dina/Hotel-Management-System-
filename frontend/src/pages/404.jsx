import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  // Optional: Change document title when component mounts
  useEffect(() => {
    document.title = "Page Not Found | Your App Name";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        
        <h2 className="text-3xl font-bold text-gray-800">Oops! Page Not Found</h2>
        
        <p className="text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg 
                    hover:bg-primary/50 transition-colors duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;