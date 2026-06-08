// BoyKidsFashionProducts.jsx
import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';  
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const BoyKidsFashionProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

 // Kids Boys Dresses Products 
const products = [
  
  { 
    id: 1, 
    name: 'Navy Blue Formal Set', 
    category: "Kids", 
    sub: "Boys • Set", 
    price: 1299, 
    oldPrice: 2499, 
    images: ["/Fashion/Kids/Boy/Products/bkfp1.png", "/Fashion/Kids/Boy/Products/bkfp1_1.png", "/Fashion/Kids/Boy/Products/bkfp1_2.png", "/Fashion/Kids/Boy/Products/bkfp1_3.png", "/Fashion/Kids/Boy/Products/bkfp1_4.png"],
    tag: "Trending", 
    color: "Navy Blue", 
    rating: "4.7", 
    reviews: "2.1k",
    details: { "Fabric": "Cotton Blend", "Type": "Formal Set", "Includes": "Shirt + Trouser", "Sizes": "2-12 Years", "Wash": "Machine Wash" }
  },

  { 
    id: 2, 
    name: 'White Cotton Casual Shirt', 
    category: "Kids", 
    sub: "Boys • Shirt", 
    price: 699, 
    oldPrice: 1499, 
    images: ["/Fashion/Kids/Boy/Products/bkfp2.png", "/Fashion/Kids/Boy/Products/bkfp2_1.png", "/Fashion/Kids/Boy/Products/bkfp2_2.png", "/Fashion/Kids/Boy/Products/bkfp2_3.png", "/Fashion/Kids/Boy/Products/bkfp2_4.png"],
    tag: "Essential", 
    color: "White", 
    rating: "4.7", 
    reviews: "2.5k",
    details: { "Fabric": "Pure Cotton", "Type": "Casual Shirt", "Sizes": "2-12 Years", "Collar": "Button Down", "Wash": "Machine Wash" }
  },

  { 
    id: 3, 
    name: 'Yellow Summer Set', 
    category: "Kids", 
    sub: "Boys • Set", 
    price: 899, 
    oldPrice: 1799, 
    images: ["/Fashion/Kids/Boy/Products/bkfp3.png", "/Fashion/Kids/Boy/Products/bkfp3_1.png", "/Fashion/Kids/Boy/Products/bkfp3_2.png", "/Fashion/Kids/Boy/Products/bkfp3_3.png", "/Fashion/Kids/Boy/Products/bkfp3_4.png"],
    tag: "Summer Edit", 
    color: "Yellow", 
    rating: "4.5", 
    reviews: "2.9k",
    details: { "Fabric": "Cotton", "Type": "Casual Set", "Includes": "T-Shirt + Shorts", "Sizes": "1-8 Years", "Wash": "Machine Wash" }
  },

  { 
    id: 4, 
    name: 'Light Pink Formal Shirt', 
    category: "Kids", 
    sub: "Boys • Shirt", 
    price: 799, 
    oldPrice: 1699, 
    images: ["/Fashion/Kids/Boy/Products/bkfp4.png", "/Fashion/Kids/Boy/Products/bkfp4_1.png", "/Fashion/Kids/Boy/Products/bkfp4_2.png", "/Fashion/Kids/Boy/Products/bkfp4_3.png", "/Fashion/Kids/Boy/Products/bkfp4_4.png"],
    tag: "Best Seller", 
    color: "Light Pink", 
    rating: "4.8", 
    reviews: "3.2k",
    details: { "Fabric": "Cotton Blend", "Type": "Formal Shirt", "Sizes": "4-14 Years", "Collar": "Spread Collar", "Wash": "Machine Wash" }
  },
 
  { 
    id: 5, 
    name: 'Royal Blue Tracksuit Set', 
    category: "Kids", 
    sub: "Boys • Set", 
    price: 1799, 
    oldPrice: 3599, 
    images: ["/Fashion/Kids/Boy/Products/bkfp5.png", "/Fashion/Kids/Boy/Products/bkfp5_1.png", "/Fashion/Kids/Boy/Products/bkfp5_2.png", "/Fashion/Kids/Boy/Products/bkfp5_3.png", "/Fashion/Kids/Boy/Products/bkfp5_4.png"],
    tag: "Sports", 
    color: "Royal Blue", 
    rating: "4.6", 
    reviews: "1.8k",
    details: { "Fabric": "Polyester Blend", "Type": "Sports Set", "Includes": "Jacket + Track Pants", "Sizes": "3-12 Years", "Wash": "Machine Wash" }
  },
 
  { 
    id: 6, 
    name: 'Maroon Party Wear Shirt', 
    category: "Kids", 
    sub: "Boys • Shirt", 
    price: 899, 
    oldPrice: 1999, 
    images: ["/Fashion/Kids/Boy/Products/bkfp6.png", "/Fashion/Kids/Boy/Products/bkfp6_1.png", "/Fashion/Kids/Boy/Products/bkfp6_2.png", "/Fashion/Kids/Boy/Products/bkfp6_3.png", "/Fashion/Kids/Boy/Products/bkfp6_4.png"],
    tag: "Trending", 
    color: "Maroon", 
    rating: "4.6", 
    reviews: "1.9k",
    details: { "Fabric": "Cotton", "Type": "Party Shirt", "Sizes": "2-10 Years", "Pattern": "Solid", "Wash": "Machine Wash" }
  },

  { 
    id: 7, 
    name: 'Orange Kurta Set', 
    category: "Kids", 
    sub: "Boys • Set", 
    price: 1699, 
    oldPrice: 3499, 
    images: ["/Fashion/Kids/Boy/Products/bkfp7.png", "/Fashion/Kids/Boy/Products/bkfp7_1.png", "/Fashion/Kids/Boy/Products/bkfp7_2.png", "/Fashion/Kids/Boy/Products/bkfp7_3.png", "/Fashion/Kids/Boy/Products/bkfp7_4.png"],
    tag: "Festival", 
    color: "Orange", 
    rating: "4.9", 
    reviews: "1.8k",
    details: { "Fabric": "Cotton Silk", "Type": "Ethnic Set", "Includes": "Kurta + Pajama", "Sizes": "2-12 Years", "Wash": "Dry Clean Only" }
  },
 
  { 
    id: 8, 
    name: 'Lavender Linen Casual Shirt', 
    category: "Kids", 
    sub: "Boys • Shirt", 
    price: 849, 
    oldPrice: 1799, 
    images: ["/Fashion/Kids/Boy/Products/bkfp8.png", "/Fashion/Kids/Boy/Products/bkfp8_1.png", "/Fashion/Kids/Boy/Products/bkfp8_2.png", "/Fashion/Kids/Boy/Products/bkfp8_3.png", "/Fashion/Kids/Boy/Products/bkfp8_4.png"],
    tag: "Summer Edit", 
    color: "Lavender", 
    rating: "4.7", 
    reviews: "1.6k",
    details: { "Fabric": "Linen", "Type": "Casual Shirt", "Sizes": "4-12 Years", "Breathable": "High", "Wash": "Gentle Wash" }
  },

  { 
    id: 9, 
    name: 'Black Denim Jacket + Jeans Set', 
    category: "Kids", 
    sub: "Boys • Set", 
    price: 2499, 
    oldPrice: 4999, 
    images: ["/Fashion/Kids/Boy/Products/bkfp9.png", "/Fashion/Kids/Boy/Products/bkfp9_1.png", "/Fashion/Kids/Boy/Products/bkfp9_2.png", "/Fashion/Kids/Boy/Products/bkfp9_3.png", "/Fashion/Kids/Boy/Products/bkfp9_4.png"],
    tag: "Premium", 
    color: "Black Denim", 
    rating: "4.8", 
    reviews: "1.2k",
    details: { "Fabric": "Denim", "Type": "Jeans Set", "Includes": "Jacket + Jeans", "Sizes": "4-14 Years", "Wash": "Machine Wash" }
  },

  { 
    id: 10, 
    name: 'Olive Green Utility Shirt', 
    category: "Kids", 
    sub: "Boys • Shirt", 
    price: 749, 
    oldPrice: 1599, 
    images: ["/Fashion/Kids/Boy/Products/bkfp10.png", "/Fashion/Kids/Boy/Products/bkfp10_1.png", "/Fashion/Kids/Boy/Products/bkfp10_2.png", "/Fashion/Kids/Boy/Products/bkfp10_3.png", "/Fashion/Kids/Boy/Products/bkfp10_4.png"],
    tag: "New Arrival", 
    color: "Olive Green", 
    rating: "4.5", 
    reviews: "1.1k",
    details: { "Fabric": "Cotton Twill", "Type": "Casual Shirt", "Sizes": "4-12 Years", "Collar": "Camp Collar", "Wash": "Machine Wash" }
  },

  { 
    id: 11, 
    name: 'Burgundy Velvet Party Set', 
    category: "Kids", 
    sub: "Boys • Set", 
    price: 1999, 
    oldPrice: 4499, 
    images: ["/Fashion/Kids/Boy/Products/bkfp11.png", "/Fashion/Kids/Boy/Products/bkfp11_1.png", "/Fashion/Kids/Boy/Products/bkfp11_2.png", "/Fashion/Kids/Boy/Products/bkfp11_3.png", "/Fashion/Kids/Boy/Products/bkfp11_4.png"],
    tag: "Winter Edit", 
    color: "Burgundy", 
    rating: "4.8", 
    reviews: "1.2k",
    details: { "Fabric": "Velvet", "Type": "Party Set", "Includes": "Jacket + Shirt + Pant", "Sizes": "2-10 Years", "Wash": "Dry Clean Only" }
  },

  { 
    id: 12, 
    name: 'Black Party Wear Shirt', 
    category: "Kids", 
    sub: "Boys • Shirt", 
    price: 999, 
    oldPrice: 2199, 
    images: ["/Fashion/Kids/Boy/Products/bkfp12.png", "/Fashion/Kids/Boy/Products/bkfp12_1.png", "/Fashion/Kids/Boy/Products/bkfp12_2.png", "/Fashion/Kids/Boy/Products/bkfp12_3.png", "/Fashion/Kids/Boy/Products/bkfp12_4.png"],
    tag: "Premium", 
    color: "Black", 
    rating: "4.8", 
    reviews: "0.9k",
    details: { "Fabric": "Cotton Silk", "Type": "Party Shirt", "Sizes": "2-10 Years", "Work": "Sequins Border", "Wash": "Dry Clean Only" }
  }
];

  // Get cart quantity for a product
  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item => 
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  const getSizes = () => ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-10Y", "10-12Y"];

  // Effect to handle slideshow in modal
  useEffect(() => {
    let interval;
    if (selectedProduct && !isPaused) {
      interval = setInterval(() => {
        setActiveImgIndex((prev) => (prev + 1) % selectedProduct.images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [selectedProduct, isPaused]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  useEffect(() => {
    if (location.state && location.state.defaultSelectedProductId) {
      const productId = location.state.defaultSelectedProductId;
      const productToOpen = products.find(p => p.id === productId);
      if (productToOpen) {
        setSelectedProduct(productToOpen);
        setActiveImgIndex(0);
        setSelectedSize(getSizes()[0]);
      }
    }
  }, [location.state]);

  // Open product and reset size
  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
    setActiveImgIndex(0);
    setIsPaused(false);
    setSelectedSize(getSizes()[0]);
  };

  // Close modal
  const handleClose = () => {
    setSelectedProduct(null);
    setActiveImgIndex(0);
    setSelectedSize("");
    setIsPaused(false);
  };

  // Add to cart function
  const handleAddToCart = async (product, size) => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(product, 1, size, product.color);
    setIsAddingToCart(false);
  };

  // Handle "Go To Cart"
  const handleGoToCart = async () => {
    const currentQuantity = getCartQuantity(selectedProduct.id, selectedSize);
    
    if (currentQuantity === 0) {
      await handleAddToCart(selectedProduct, selectedSize);
    }
    navigate('/cart');
  };

  // Handle "Buy Now"
  const handleBuyNow = async () => {
    const currentQuantity = getCartQuantity(selectedProduct.id, selectedSize);
    
    if (currentQuantity === 0) {
      await handleAddToCart(selectedProduct, selectedSize);
    }
    navigate('/cart');
  };

  // Handle update quantity
  const handleUpdateQuantity = (productId, size, delta) => {
    const currentQty = getCartQuantity(productId, size);
    const newQty = currentQty + delta;
    
    if (newQty <= 0) {
      removeItem(productId, size, selectedProduct?.color);
    } else {
      updateQuantity(productId, newQty, size, selectedProduct?.color);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#f8f7f4] py-16 px-6 md:px-24 min-h-screen font-sans text-slate-900">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="text-[11px] tracking-[0.7em] uppercase text-orange-600 font-bold mb-5">Boy's Collection MMXXVI</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">Little Champion</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Product Grid - Mixed Shirts & Sets (12 Products) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 mb-32">
          {products.map((p) => (
            <div 
              key={p.id} 
              className="group cursor-pointer relative" 
              onClick={() => handleOpenProduct(p)}
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-white transition-all duration-1000 group-hover:shadow-2xl group-hover:-translate-y-3 rounded-[24px]">
                <img src={p.images[0]} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={p.name} />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[8px] font-black uppercase tracking-widest rounded-full">{p.tag}</div>
              </div>
              <div className="mt-8 space-y-2 px-1 text-center md:text-left">
                <p className="text-[9px] text-orange-800 font-bold uppercase tracking-[0.2em] opacity-50">{p.sub}</p>
                <h3 className="text-[14px] font-bold tracking-wide uppercase group-hover:text-orange-700">{p.name}</h3>
                <p className="font-medium text-lg tracking-tight text-slate-700">₹{p.price.toLocaleString()} <span className="text-slate-300 line-through ml-2 text-[13px]">₹{p.oldPrice.toLocaleString()}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Same structure as before */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={handleClose}></div>
            
            <div className="relative bg-white w-full max-w-7xl h-full md:h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[40px] animate-in zoom-in-95 duration-500 ring-1 ring-slate-100">
              
              <button onClick={handleClose} className="absolute top-8 right-10 text-xl z-50 text-slate-400 hover:text-black transition-all">✕</button>

              {/* LEFT SIDE: Images */}
              <div className="md:w-3/5 bg-[#f3f2ee] flex h-1/3 md:h-full relative overflow-hidden">
                <div className="hidden md:flex flex-col gap-4 p-8 z-10 opacity-100 transition-opacity" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                  {selectedProduct.images.map((img, i) => (
                    <div 
                      key={i} 
                      onMouseEnter={() => setActiveImgIndex(i)} 
                      className={`w-16 h-20 cursor-pointer overflow-hidden transition-all duration-500 rounded-xl ${activeImgIndex === i ? 'ring-2 ring-orange-500 shadow-xl scale-105' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                </div>
                <div className="flex-1 relative flex items-center justify-center bg-white m-4 rounded-[30px] overflow-hidden shadow-inner ring-1 ring-slate-100">
                  <img 
                    key={selectedProduct.id + activeImgIndex} 
                    src={selectedProduct.images[activeImgIndex]} 
                    className="w-full h-full object-contain p-12 transition-all duration-700 hover:scale-125" 
                    alt="" 
                  />
                </div>
              </div>

              {/* RIGHT SIDE: Info */}
              <div className="md:w-2/5 p-10 md:p-16 overflow-y-auto flex flex-col bg-[#f4f3f0] border-l border-slate-100">
                <div className="mb-auto">
                  <p className="text-orange-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">{selectedProduct.sub}</p>
                  <h2 className="text-4xl font-serif italic text-slate-950 leading-tight uppercase mb-8">{selectedProduct.name}</h2>
                  
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-[11px] font-bold bg-slate-950 text-white px-4 py-1.5 rounded-full">★ {selectedProduct.rating}</span>
                    <span className="text-slate-500 text-[10px] font-bold tracking-widest">{selectedProduct.reviews} REVIEWS</span>
                  </div>

                  <div className="flex items-baseline gap-4 mb-10">
                    <span className="text-5xl font-light tracking-tighter text-slate-950">₹{selectedProduct.price.toLocaleString()}</span>
                    <span className="text-slate-300 line-through text-xl">₹{selectedProduct.oldPrice.toLocaleString()}</span>
                  </div>

                  <div className="space-y-4 mb-12">
                    {Object.entries(selectedProduct.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-[13px] border-b border-slate-200/60 pb-3 group/item">
                        <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold group-hover/item:text-slate-800 transition-colors">{key}</span>
                        <span className="text-slate-950 font-bold">{value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-[13px] pt-2">
                      <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Base Color</span>
                      <span className="text-black font-bold border-b-2 border-orange-500 pb-1">{selectedProduct.color}</span>
                    </div>
                  </div>

                  <div className="mb-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">Select Age/Size</p>
                    <div className="flex flex-wrap gap-3">
                      {getSizes().map(s => {
                        const cartQty = getCartQuantity(selectedProduct.id, s);
                        return (
                          <button 
                            key={s} 
                            onClick={() => setSelectedSize(s)} 
                            className={`h-12 min-w-[65px] text-[11px] font-bold transition-all rounded-2xl border ${
                              selectedSize === s 
                                ? 'bg-slate-950 text-white border-slate-950 shadow-lg -translate-y-1' 
                                : 'border-slate-200/80 bg-white/50 text-slate-500 hover:border-slate-950 hover:text-slate-950 hover:bg-white'
                            }`}
                          >
                            {s}
                            {cartQty > 0 && selectedSize === s && (
                              <span className="ml-1 text-xs">({cartQty})</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-200/60">
                  {getCartQuantity(selectedProduct.id, selectedSize) > 0 ? (
                    <div className="flex items-center gap-3 h-16 animate-in slide-in-from-bottom-2">
                      <div className="flex items-center justify-between bg-slate-100/50 h-full px-8 flex-1 max-w-[160px] rounded-full border border-slate-200/60 shadow-inner">
                        <button 
                          onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, -1)} 
                          className="text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                        >
                          −
                        </button>
                        <span className="font-bold text-lg text-slate-950">
                          {getCartQuantity(selectedProduct.id, selectedSize)}
                        </span>
                        <button 
                          onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, 1)} 
                          className="text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={handleGoToCart}
                        className="flex-1 bg-orange-700 text-white font-bold h-full text-[11px] uppercase tracking-widest rounded-full hover:bg-orange-800 transition-all shadow-[0_15px_30px_rgba(194,65,12,0.3)]"
                      >
                        Go To Cart
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleAddToCart(selectedProduct, selectedSize)} 
                      disabled={isAddingToCart}
                      className={`w-full border-2 border-slate-950 text-slate-950 font-bold h-16 text-[11px] uppercase tracking-[0.3em] rounded-full transition-all transform active:scale-95 ${
                        isAddingToCart 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-slate-950 hover:text-white'
                      }`}
                    >
                      {isAddingToCart ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                          Adding...
                        </span>
                      ) : 'Add to Bag'}
                    </button>
                  )}
                  
                  <button 
                    onClick={handleBuyNow}
                    disabled={isAddingToCart}
                    className="w-full bg-slate-950 text-white font-bold h-16 text-[11px] uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-black transition-all transform active:scale-95 disabled:opacity-50"
                  >
                    {isAddingToCart ? 'Adding...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BoyKidsFashionProducts;