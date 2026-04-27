// Cart.js - Fixed version with working buttons
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from './CartContext';  

const Cart = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    savedItems,
    loading,
    updateQuantity, 
    removeItem, 
    saveForLater, 
    moveToCart, 
    removeSavedItem,
    getSubtotal,
    getTotalSavings,
    getItemCount
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = getSubtotal();
  const totalSavings = getTotalSavings();
  const itemCount = getItemCount();
  
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = subtotal * 0.05;
  const discountAmount = subtotal * discount;
  const total = subtotal + shipping + tax - discountAmount;

  const applyCoupon = () => {
    const coupons = {
      'SAVE10': 0.10,
      'SAVE20': 0.20,
      'WELCOME15': 0.15,
      'FLAT50': 0.50,
    };
    
    if (coupons[couponCode.toUpperCase()]) {
      setDiscount(coupons[couponCode.toUpperCase()]);
      alert(`🎉 Coupon applied! ${coupons[couponCode.toUpperCase()] * 100}% off`);
    } else {
      alert('❌ Invalid coupon code. Try: SAVE10, SAVE20, WELCOME15');
    }
  };

  // Handle quantity change
  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity <= 0) {
      removeItem(item.id, item.selectedSize, item.selectedColor);
    } else {
      updateQuantity(item.id, newQuantity, item.selectedSize, item.selectedColor);
    }
  };

  // Handle remove item
  const handleRemoveItem = (item) => {
    if (window.confirm('Remove this item from cart?')) {
      removeItem(item.id, item.selectedSize, item.selectedColor);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your cart...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Shopping Cart
              {cartItems.length > 0 && (
                <span className="text-lg ml-3 text-gray-500">({itemCount} items)</span>
              )}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
            {cartItems.length > 0 && (
              <p className="mt-4 text-gray-500">Review and modify your items below</p>
            )}
          </div>

          {cartItems.length === 0 && savedItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm animate-in fade-in duration-500">
              <div className="text-8xl mb-6 animate-bounce">🛒</div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your cart feels light!</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Looks like you haven't added any items yet. Explore our collection and find something you love.
              </p>
              <Link 
                to="/" 
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full hover:shadow-lg transition transform hover:scale-105"
              >
                Start Shopping →
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* LEFT SIDE - Cart Items */}
              <div className="lg:w-2/3 space-y-6">
                
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-100 rounded-xl text-sm font-semibold text-gray-600">
                  <div className="col-span-6">Product Details</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>
                
                {cartItems.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} 
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      
                      {/* Product Image */}
                      <div className="relative w-full md:w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex-shrink-0 group">
                        <img 
                          src={item.image} 
                          alt={item.name || item.text}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = '/placeholder.png';
                          }}
                        />
                        {item.discount && item.discount > 0 && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {item.discount}% OFF
                          </div>
                        )}
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-1">
                              {item.brand || item.category || "Product"}
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-600 transition">
                              <Link to={`/products?id=${item.id}`}>{item.name || item.text}</Link>
                            </h3>
                            
                            {/* Display Selected Size */}
                            {item.selectedSize && item.selectedSize !== "Standard" && (
                              <div className="flex items-center gap-2 mt-2 mb-3">
                                <span className="text-xs text-gray-500">Selected Size:</span>
                                <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                                  {item.selectedSize}
                                </span>
                              </div>
                            )}
                            
                            {/* Display Selected Color */}
                            {item.selectedColor && (
                              <div className="flex items-center gap-2 mt-2 mb-3">
                                <span className="text-xs text-gray-500">Color:</span>
                                <div 
                                  className="w-5 h-5 rounded-full border border-gray-300"
                                  style={{ backgroundColor: item.selectedColor.toLowerCase() }}
                                ></div>
                                <span className="text-xs text-gray-600">{item.selectedColor}</span>
                              </div>
                            )}
                            
                            <div className="flex items-center gap-2 mb-2">
                              {item.oldPrice && (
                                <>
                                  <span className="text-gray-400 line-through text-sm">
                                    ₹{item.oldPrice.toLocaleString()}
                                  </span>
                                  <span className="text-green-600 text-sm font-semibold">
                                    Save ₹{(item.oldPrice - item.price).toLocaleString()}
                                  </span>
                                </>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap gap-3 mt-3">
                              <button 
                                onClick={() => saveForLater(item)}
                                className="text-gray-500 text-sm hover:text-orange-500 transition flex items-center gap-1"
                              >
                                <span>❤️</span> Save for later
                              </button>
                              <button 
                                onClick={() => handleRemoveItem(item)}
                                className="text-gray-500 text-sm hover:text-red-500 transition flex items-center gap-1"
                              >
                                <span>🗑️</span> Remove
                              </button>
                            </div>
                          </div>
                          
                          {/* Price */}
                          <div className="md:hidden">
                            <p className="text-sm text-gray-500">Price</p>
                            <p className="text-xl font-bold text-gray-900">
                              ₹{item.price.toLocaleString()}
                            </p>
                          </div>
                          
                          {/* Quantity Controls - FIXED */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                              <button 
                                onClick={() => handleQuantityChange(item, -1)}
                                className="w-10 h-10 hover:bg-gray-100 transition flex items-center justify-center text-xl"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="w-12 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => handleQuantityChange(item, 1)}
                                className="w-10 h-10 hover:bg-gray-100 transition flex items-center justify-center text-xl"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          
                          {/* Item Total */}
                          <div className="text-right">
                            <p className="text-sm text-gray-500 hidden md:block mb-1">Total</p>
                            <p className="text-xl font-bold text-orange-600">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
                
                {/* Saved for Later Items */}
                {savedItems.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <span>❤️</span> Saved for Later ({savedItems.length})
                    </h3>
                    <div className="space-y-4">
                      {savedItems.map((item) => (
                        <div key={`saved-${item.id}-${item.selectedSize}`} className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name || item.text} 
                              className="w-full h-full object-cover" 
                              onError={(e) => {
                                e.target.src = '/placeholder.png';
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800">{item.name || item.text}</p>
                            <p className="text-orange-600 font-bold">₹{item.price}</p>
                            {item.selectedSize && item.selectedSize !== "Standard" && (
                              <p className="text-xs text-gray-500 mt-1">Size: {item.selectedSize}</p>
                            )}
                          </div>
                          <button 
                            onClick={() => moveToCart(item)}
                            className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition"
                          >
                            Move to Cart
                          </button>
                          <button 
                            onClick={() => removeSavedItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="text-center md:text-left">
                  <Link 
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
              
              {/* RIGHT SIDE - Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b flex items-center gap-2">
                    <span>📋</span> Order Summary
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({itemCount} items)</span>
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
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({discount * 100}%)</span>
                        <span>-₹{discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    {totalSavings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Total Savings</span>
                        <span>₹{totalSavings.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total Amount</span>
                        <span className="text-orange-600">₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apply Coupon
                    </label>
                    <div className="flex gap-2">
                      <input 
                        type="text"
                        placeholder="SAVE10, SAVE20, WELCOME15"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <button 
                        onClick={applyCoupon}
                        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition font-semibold"
                      >
                        Apply
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Try: SAVE10 (10% off) | SAVE20 (20% off) | WELCOME15 (15% off)
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition transform hover:scale-105 mb-4"
                  >
                    Proceed to Checkout →
                  </button>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-3">Secure Payment Options</p>
                    <div className="flex justify-center gap-4 opacity-60">
                      <span className="text-xl">💳</span>
                      <span className="text-xl">📱</span>
                      <span className="text-xl">💵</span>
                      <span className="text-xl">🏦</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Cart;