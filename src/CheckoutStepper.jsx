
import React from 'react';

const CheckoutStepper = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, name: 'Cart', icon: '🛒' },
    { id: 2, name: 'Checkout', icon: '📝' },
    { id: 3, name: 'Payment', icon: '💳' },
    { id: 4, name: 'Confirmation', icon: '✅' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 px-4">
      <div className="flex items-center justify-between relative">
        
        {/* Background Line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
        
        {/* Progress Line */}
        <div 
          className="absolute left-0 top-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {/* Steps */}
        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;
          
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              {/* Circle */}
              <div 
                className={`
                  w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-lg font-bold
                  transition-all duration-300
                  ${isCompleted 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                    : isActive
                    ? 'bg-white border-2 border-orange-500 text-orange-500 scale-110 shadow-lg'
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                  }
                `}
              >
                {isCompleted ? '✓' : step.id}
              </div>
              
              {/* Label */}
              <p className={`mt-2 text-xs md:text-sm font-medium ${isCompleted || isActive ? 'text-orange-600' : 'text-gray-400'}`}>
                {step.name}
              </p>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default CheckoutStepper;