import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import CheckoutStepper from './CheckoutStepper';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  // If no order data, show error and redirect to home
  if (!order) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-4">
          <div className="text-center max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Order Found</h2>
            <p className="text-gray-500 mb-6">Please place an order first</p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full"
            >
              Go to Home
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4 md:px-16">
        <div className="max-w-3xl mx-auto">

          <CheckoutStepper currentStep={4} />
          
          {/* Success Animation */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
              <span className="text-5xl">✅</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">Order Ready!</h1>
            <p className="text-gray-500">Review your order details below</p>
          </div>
          
          {/* Order Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Order Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <p className="text-sm opacity-90">Order Number</p>
                  <p className="text-xl font-bold">{order.orderId}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Order Date</p>
                  <p className="font-semibold">
                    {new Date(order.orderDate).toLocaleDateString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Status</p>
                  <p className="font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
                    Pending Payment
                  </p>
                </div>
              </div>
            </div>
            
            {/* Delivery Address */}
            <div className="p-6 border-b">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>📍</span> Delivery Address
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{order.customer.firstName} {order.customer.lastName}</p>
                <p className="text-gray-600">
                  {order.customer.address}<br />
                  {order.customer.city}, {order.customer.state} - {order.customer.pincode}
                </p>
                <p className="text-gray-600 mt-1">📞 {order.customer.phone}</p>
                <p className="text-gray-600">✉️ {order.customer.email}</p>
              </div>
            </div>
            
            {/* Order Items */}
            <div className="p-6 border-b">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>🛍️</span> Order Items ({order.items.length})
              </h3>
              <div className="space-y-3 max-h-64 overflow-auto">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-3 py-2 border-b last:border-b-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => { e.target.src = '/placeholder.png'; }}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      {item.selectedSize && item.selectedSize !== 'Standard' && (
                        <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                      )}
                    </div>
                    <p className="font-bold text-orange-600">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Payment & Total */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-semibold capitalize flex items-center gap-2">
                  {order.paymentMethod === 'cod' ? '💵 Cash on Delivery' : 
                   order.paymentMethod === 'card' ? '💳 Credit/Debit Card' : '📱 UPI'}
                </span>
              </div>
              <div className="space-y-2 pt-3 border-t">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{order.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{order.shipping === 0 ? 'Free' : `₹${order.shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (GST 5%)</span>
                  <span>₹{order.tax.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total Amount</span>
                    <span className="text-orange-600">₹{order.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Back to Home & Print Details Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => window.print()}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              🖨️ Print Details
            </button>
          </div>

          {/* Place Order Now Button */}
          <div className="text-center mt-6 mb-8">
            <button
              onClick={() => navigate('/order-success', { state: { order } })}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition transform hover:scale-105 animate-pulse"
            >
              📝 Place Order Now
            </button>
            <p className="text-xs text-gray-400 mt-3">Click to confirm and place your order</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;