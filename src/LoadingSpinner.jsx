import React from 'react';

// Button loader component
export const ButtonLoader = ({ text = 'Loading...' }) => {
  return (
    <span className="flex items-center justify-center gap-2">
      <svg 
        className="animate-spin h-5 w-5 text-current" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {text}
    </span>
  );
};

// Cart skeleton loader
export const CartSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
          <div className="flex gap-6">
            <div className="w-32 h-32 bg-gray-200 rounded-xl"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Product skeleton loader
export const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[3/4] bg-gray-200 rounded-2xl"></div>
          <div className="mt-4 space-y-2">
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Default export
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-orange-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;