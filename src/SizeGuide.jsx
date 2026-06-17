// SizeGuide.jsx
import React, { useState } from 'react';

const SizeGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sizeData = [
    { size: 'S', chest: '36-38', shoulder: '16-17', length: '27-28' },
    { size: 'M', chest: '38-40', shoulder: '17-18', length: '28-29' },
    { size: 'L', chest: '40-42', shoulder: '18-19', length: '29-30' },
    { size: 'XL', chest: '42-44', shoulder: '19-20', length: '30-31' },
    { size: 'XXL', chest: '44-46', shoulder: '20-21', length: '31-32' }
  ];

  return (
    <>
      {/* Size Guide Banner */}
      <section className="py-16 px-4 bg-[#e8e4db] mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-white rounded-full mb-4 shadow-md">
            <span className="text-2xl">📏</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif mb-3 text-gray-800">
            Need help with sizing?
          </h3>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            Check our detailed size guide to find your perfect fit
          </p>
          <button 
            onClick={() => setIsOpen(true)} 
            className="border border-black px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
          >
            View Size Guide
          </button>
        </div>
      </section>

      {/* Size Guide Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Modal */}
          <div className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-6 border-b relative">
              <h2 className="text-2xl font-serif text-center">Size Guide</h2>
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-semibold text-gray-600">Size</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-600">Chest (in)</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-600">Shoulder (in)</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-600">Length (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.map((item, index) => (
                      <tr key={item.size} className={index < sizeData.length - 1 ? 'border-b' : ''}>
                        <td className="py-3 px-2 font-medium">{item.size}</td>
                        <td className="py-3 px-2">{item.chest}</td>
                        <td className="py-3 px-2">{item.shoulder}</td>
                        <td className="py-3 px-2">{item.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Model Reference */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 text-center">
                  Model is 6'0" tall and wearing size M for a regular fit
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SizeGuide;