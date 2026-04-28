import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from './CartContext';
import LoadingSpinner, { ButtonLoader } from './LoadingSpinner';
import CheckoutStepper from './CheckoutStepper';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getSubtotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  
  // Card details state
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  
  // UPI state
  const [upiId, setUpiId] = useState('');
  
  const [errors, setErrors] = useState({});
  const [cardErrors, setCardErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState('form'); // form, processing, success

  const subtotal = getSubtotal();
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Card validation functions
  const validateCardNumber = (number) => {
    const cleaned = number.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cleaned)) return 'Card number must be 16 digits';
    return '';
  };

  const validateExpiry = (expiry) => {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return 'Format: MM/YY';
    const [month, year] = expiry.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    if (parseInt(month) < 1 || parseInt(month) > 12) return 'Invalid month';
    if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      return 'Card expired';
    }
    return '';
  };

  const validateCVV = (cvv) => {
    if (!/^\d{3}$/.test(cvv)) return 'CVV must be 3 digits';
    return '';
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    if (name === 'expiry') {
      formattedValue = value.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
    }
    if (name === 'cvv') {
      formattedValue = value.replace(/[^0-9]/g, '').slice(0, 3);
    }
    
    setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    
    // Validate on change
    let error = '';
    if (name === 'cardNumber') error = validateCardNumber(formattedValue);
    if (name === 'expiry') error = validateExpiry(formattedValue);
    if (name === 'cvv') error = validateCVV(formattedValue);
    
    setCardErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateCardForm = () => {
    const newErrors = {};
    newErrors.cardNumber = validateCardNumber(cardDetails.cardNumber);
    newErrors.cardName = cardDetails.cardName.trim() ? '' : 'Card holder name required';
    newErrors.expiry = validateExpiry(cardDetails.expiry);
    newErrors.cvv = validateCVV(cardDetails.cvv);
    
    setCardErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const validateUpiForm = () => {
    if (!upiId.trim()) return 'UPI ID is required';
    if (!/^[\w.-]+@[\w.-]+$/.test(upiId)) return 'Invalid UPI ID (e.g., name@okhdfcbank)';
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // MOCK PAYMENT - Opens Google Pay / Card Simulator
  const processPayment = () => {
    setShowPaymentModal(true);
    setPaymentStep('form');
  };

  const handleCardPayment = () => {
    if (!validateCardForm()) return;
    
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
      setTimeout(() => {
        setShowPaymentModal(false);
        placeOrder();
      }, 1500);
    }, 2000);
  };

  const handleUpiPayment = () => {
    const upiError = validateUpiForm();
    if (upiError) {
      alert(upiError);
      return;
    }
    
    // Simulate Google Pay redirect
    setPaymentStep('processing');
    
    // Mock Google Pay intent
    setTimeout(() => {
      // In real scenario, this would open Google Pay app
      const confirmPayment = window.confirm(
        `Pay ₹${total.toLocaleString()} via ${upiId}?\n\n(This is a demo - In real app, Google Pay would open)`
      );
      
      if (confirmPayment) {
        setPaymentStep('success');
        setTimeout(() => {
          setShowPaymentModal(false);
          placeOrder();
        }, 1500);
      } else {
        setPaymentStep('form');
      }
    }, 1000);
  };

  const handleCodPayment = () => {
    if (window.confirm('Confirm Cash on Delivery order?')) {
      placeOrder();
    }
  };

  const placeOrder = () => {
  setIsProcessing(true);
    
     const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 2000));
  
  const orderProcessing = new Promise((resolve) => {
    setTimeout(() => {
      const order = {
        orderId: 'ORD' + Date.now(),
        customer: formData,
        items: cartItems,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        paymentMethod: formData.paymentMethod,
        paymentDetails: formData.paymentMethod === 'card' ? { last4: cardDetails.cardNumber.slice(-4) } : 
                        formData.paymentMethod === 'upi' ? { upiId: upiId } : null,
        orderDate: new Date().toISOString(),
        status: 'Confirmed'
      };
      
      const existingOrders = localStorage.getItem('orders');
      const orders = existingOrders ? JSON.parse(existingOrders) : [];
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      
      clearCart();
      resolve(order);
    }, 1500);
  });
  
  Promise.all([minimumLoadingTime, orderProcessing]).then(([_, order]) => {
    setIsProcessing(false);
    navigate('/order-confirmation', { state: { order } });
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      navigate('/');
      return;
    }
    
    if (formData.paymentMethod === 'cod') {
      handleCodPayment();
    } else {
      processPayment();
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
          <div className="text-center bg-white rounded-2xl shadow-xl p-12 max-w-md">

             <CheckoutStepper currentStep={2} />

            <div className="text-7xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty!</h2>
            <button onClick={() => navigate('/')} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold">
              Continue Shopping
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
            
             <CheckoutStepper currentStep={2} />

          
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Billing Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b">📝 Billing Details</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10 digits"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}/>
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <input type="text" name="state" value={formData.state} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="6 digits"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.pincode ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method *</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-orange-50">
                        <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange}/>
                        <span className="text-lg">💵</span>
                        <span className="font-medium">Cash on Delivery</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-orange-50">
                        <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange}/>
                        <span className="text-lg">💳</span>
                        <span className="font-medium">Credit/Debit Card</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-orange-50">
                        <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleChange}/>
                        <span className="text-lg">📱</span>
                        <span className="font-medium">UPI / Google Pay</span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-3 border-b">📋 Order Summary</h3>
                
                <div className="space-y-3 mb-6 max-h-80 overflow-auto">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-3 py-2 border-b">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg"/>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-orange-600 font-bold text-sm">₹{item.price}</p>
                      </div>
                      <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6 pt-3 border-t">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (GST 5%)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-orange-600">₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
               <button onClick={handleSubmit} disabled={isProcessing}
  className={`w-full py-4 rounded-full font-bold text-lg transition transform ${
    isProcessing 
      ? 'bg-gray-400 cursor-not-allowed' 
      : 'bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105'
  } text-white`}>
  {isProcessing ? (
    <span className="flex items-center justify-center gap-2">
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Placing Order...
    </span>
  ) : `Place Order • ₹${total.toLocaleString()}`}
</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal - Card & UPI */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-300">
            
            {paymentStep === 'form' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">
                    {formData.paymentMethod === 'card' ? '💳 Card Payment' : '📱 UPI Payment'}
                  </h3>
                  <button onClick={() => setShowPaymentModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
                </div>
                
                {formData.paymentMethod === 'card' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456" maxLength="19"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"/>
                      {cardErrors.cardNumber && <p className="text-red-500 text-xs mt-1">{cardErrors.cardNumber}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
                      <input type="text" name="cardName" value={cardDetails.cardName} onChange={handleCardChange}
                        placeholder="AS PER CARD"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"/>
                      {cardErrors.cardName && <p className="text-red-500 text-xs mt-1">{cardErrors.cardName}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry (MM/YY)</label>
                        <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardChange}
                          placeholder="MM/YY" maxLength="5"
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"/>
                        {cardErrors.expiry && <p className="text-red-500 text-xs mt-1">{cardErrors.expiry}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input type="password" name="cvv" value={cardDetails.cvv} onChange={handleCardChange}
                          placeholder="123" maxLength="3"
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"/>
                        {cardErrors.cvv && <p className="text-red-500 text-xs mt-1">{cardErrors.cvv}</p>}
                      </div>
                    </div>
                    
                    <button onClick={handleCardPayment}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-bold mt-4">
                      Pay ₹{total.toLocaleString()}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center py-4">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-gray-600">You will be redirected to Google Pay</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                      <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)}
                        placeholder="username@okhdfcbank"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"/>
                      <p className="text-xs text-gray-400 mt-1">e.g., name@okhdfcbank, name@ybl, name@axisbank</p>
                    </div>
                    
                    <button onClick={handleUpiPayment}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-bold mt-4">
                      Continue with Google Pay →
                    </button>
                  </div>
                )}
              </>
            )}
            
            {paymentStep === 'processing' && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Processing Payment</h3>
                <p className="text-gray-500">Please don't close this window...</p>
              </div>
            )}
            
            {paymentStep === 'success' && (
              <div className="text-center py-8">
                <div className="text-6xl mb-4 animate-bounce">✅</div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Payment Successful!</h3>
                <p className="text-gray-500">Redirecting to order confirmation...</p>
              </div>
            )}
            
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;