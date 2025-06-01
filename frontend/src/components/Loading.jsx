import { useState, useEffect } from 'react';

const Loading = ({ type = 'spinner', color = 'primary', size = 'medium', fullScreen = true }) => {
  const [dots, setDots] = useState('');

  // For dot animation
  useEffect(() => {
    if (type === 'dots') {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 300);
      return () => clearInterval(interval);
    }
  }, [type]);

  // Color variants
  const colorVariants = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    light: 'text-gray-200',
    dark: 'text-gray-800'
  };

  // Size variant
  const sizeVariants = {
    small: 'h-6 w-6 border-2',
    medium: 'h-12 w-12 border-t-2 border-b-2',
    large: 'h-16 w-16 border-t-4 border-b-4'
  };

  // Loading type
  const loadingTypes = {
    spinner: (
      <div className={`animate-spin rounded-full ${sizeVariants[size]} ${colorVariants[color]}`}></div>
    ),
    dots: (
      <div className={`text-2xl font-bold ${colorVariants[color]}`}>
        Loading{dots}
      </div>
    ),
    bar: (
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${colorVariants[color]} animate-progress`}></div>
      </div>
    ),
    pulse: (
      <div className={`${sizeVariants[size]} rounded-full ${colorVariants[color]} animate-pulse`}></div>
    )
  };

  const loadingContent = loadingTypes[type] || loadingTypes.spinner;

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? 'h-screen w-full' : 'py-8'}`}>
      {loadingContent}
      <p className={`text-sm ${colorVariants[color]}`}>Please wait...</p>
    </div>
  );
};

export default Loading;