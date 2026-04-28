// src/components/OrderSuccess.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-4 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Success Animation */}
          <div className="mb-8 animate-in fade-in duration-500">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-green-100 rounded-full mb-6 animate-bounce">
              <span className="text-6xl">🎉</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              Order Placed Successfully!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg mb-2">
              Thank you for shopping with Fashion Hub
            </p>
            <p className="text-gray-500">
              Your order has been received and will be delivered soon
            </p>
            {order && (
              <p className="text-sm text-gray-500 mt-2">
                Order ID: <span className="font-bold">{order.orderId}</span>
              </p>
            )}
          </div>

          {/* Delivery Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl mr-3">🚚</span>
              <span className="text-5xl animate-pulse">→</span>
              <span className="text-5xl ml-3">🏠</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Your order will be delivered soon!
            </h2>
            
            <p className="text-gray-500 mb-4">
              Estimated delivery within 5-7 business days
            </p>
            
            <div className="bg-orange-50 rounded-xl p-4 text-left">
              <p className="text-sm text-gray-700 mb-2">📧 What's next?</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ You will receive a confirmation email shortly</li>
                <li>✓ Our delivery partner will contact you before delivery</li>
                <li>✓ Track your order in "My Orders" section</li>
                <li>✓ For COD orders, please keep exact cash ready</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate('/order-confirmation', { state: { order } })}
              className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
            >
              View Order Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;