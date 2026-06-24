// DressesWomenFashionProducts.jsx
import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';  
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const DressesWomenFashionProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

      const location = useLocation();
      const navigate = useNavigate();
  
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  // Women's Dresses Fashion Products - Mixed Short & Long (12 Products)
  // Image Path Pattern: /Fashion/Women/Dresses/Products/dwfp{id}.png
  const products = [
    // SHORT DRESSES (IDs 1,3,5,7,9,11)
    { 
      id: 1, 
      name: 'Coral Bodycon Dress', 
      category: "Women", 
      sub: "Dresses • Short", 
      price: 1899, 
      oldPrice: 3799, 
      images: ["/Fashion/Women/Dresses/Products/dwfp1.png", "/Fashion/Women/Dresses/Products/dwfp1_1.png", "/Fashion/Women/Dresses/Products/dwfp1_2.png", "/Fashion/Women/Dresses/Products/dwfp1_3.png", "/Fashion/Women/Dresses/Products/dwfp1_4.png"],
      tag: "Trending", 
      color: "Coral Red", 
      rating: "4.6", 
      reviews: "1.8k",
      details: { "Fabric": "Cotton Spandex", "Fit": "Bodycon", "Length": "Mini", "Neck": "Scoop Neck", "Occasion": "Party/Date" }
    },
    { 
      id: 2, 
      name: 'Emerald Green Maxi Dress', 
      category: "Women", 
      sub: "Dresses • Long", 
      price: 3299, 
      oldPrice: 6599, 
      images: ["/Fashion/Women/Dresses/Products/dwfp2.png", "/Fashion/Women/Dresses/Products/dwfp2_1.png", "/Fashion/Women/Dresses/Products/dwfp2_2.png", "/Fashion/Women/Dresses/Products/dwfp2_3.png", "/Fashion/Women/Dresses/Products/dwfp2_4.png"],
      tag: "Luxury", 
      color: "Emerald Green", 
      rating: "4.9", 
      reviews: "1.4k",
      details: { "Fabric": "Crepe", "Fit": "Regular Fit", "Length": "Maxi", "Neck": "V-Neck", "Occasion": "Wedding/Formal" }
    },
    { 
      id: 3, 
      name: 'Mustard Yellow Shift Dress', 
      category: "Women", 
      sub: "Dresses • Short", 
      price: 1699, 
      oldPrice: 3399, 
      images: ["/Fashion/Women/Dresses/Products/dwfp3.png", "/Fashion/Women/Dresses/Products/dwfp3_1.png", "/Fashion/Women/Dresses/Products/dwfp3_2.png", "/Fashion/Women/Dresses/Products/dwfp3_3.png", "/Fashion/Women/Dresses/Products/dwfp3_4.png"],
      tag: "Essential", 
      color: "Mustard Yellow", 
      rating: "4.5", 
      reviews: "2.2k",
      details: { "Fabric": "Cotton", "Fit": "Shift", "Length": "Above Knee", "Neck": "Round Neck", "Occasion": "Casual/Office" }
    },
    { 
      id: 4, 
      name: 'Dusty Rose Tiered Dress', 
      category: "Women", 
      sub: "Dresses • Long", 
      price: 2799, 
      oldPrice: 5599, 
      images: ["/Fashion/Women/Dresses/Products/dwfp4.png", "/Fashion/Women/Dresses/Products/dwfp4_1.png", "/Fashion/Women/Dresses/Products/dwfp4_2.png", "/Fashion/Women/Dresses/Products/dwfp4_3.png", "/Fashion/Women/Dresses/Products/dwfp4_4.png"],
      tag: "Trending", 
      color: "Dusty Rose", 
      rating: "4.7", 
      reviews: "1.6k",
      details: { "Fabric": "Rayon", "Fit": "Tiered", "Length": "Maxi", "Sleeves": "Elastic Sleeves", "Occasion": "Beach/Vacation" }
    },
    { 
      id: 5, 
      name: 'Navy Blue Fit & Flare Dress', 
      category: "Women", 
      sub: "Dresses • Short", 
      price: 1999, 
      oldPrice: 3999, 
      images: ["/Fashion/Women/Dresses/Products/dwfp5.png", "/Fashion/Women/Dresses/Products/dwfp5_1.png", "/Fashion/Women/Dresses/Products/dwfp5_2.png", "/Fashion/Women/Dresses/Products/dwfp5_3.png", "/Fashion/Women/Dresses/Products/dwfp5_4.png"],
      tag: "Best Seller", 
      color: "Navy Blue", 
      rating: "4.8", 
      reviews: "2.5k",
      details: { "Fabric": "Polyester", "Fit": "Fit & Flare", "Length": "Knee Length", "Neck": "Boat Neck", "Occasion": "Party/Cocktail" }
    },
    { 
      id: 6, 
      name: 'Terracotta Midi Dress', 
      category: "Women", 
      sub: "Dresses • Long", 
      price: 2499, 
      oldPrice: 4999, 
      images: ["/Fashion/Women/Dresses/Products/dwfp6.png", "/Fashion/Women/Dresses/Products/dwfp6_1.png", "/Fashion/Women/Dresses/Products/dwfp6_2.png", "/Fashion/Women/Dresses/Products/dwfp6_3.png", "/Fashion/Women/Dresses/Products/dwfp6_4.png"],
      tag: "New Arrival", 
      color: "Terracotta", 
      rating: "4.6", 
      reviews: "1.2k",
      details: { "Fabric": "Linen", "Fit": "A-Line", "Length": "Midi", "Neck": "Square Neck", "Occasion": "Casual/Brunch" }
    },
    { 
      id: 7, 
      name: 'Lilac Ruffled Dress', 
      category: "Women", 
      sub: "Dresses • Short", 
      price: 1799, 
      oldPrice: 3599, 
      images: ["/Fashion/Women/Dresses/Products/dwfp7.png", "/Fashion/Women/Dresses/Products/dwfp7_1.png", "/Fashion/Women/Dresses/Products/dwfp7_2.png", "/Fashion/Women/Dresses/Products/dwfp7_3.png", "/Fashion/Women/Dresses/Products/dwfp7_4.png"],
      tag: "Trending", 
      color: "Lilac", 
      rating: "4.7", 
      reviews: "1.9k",
      details: { "Fabric": "Chiffon", "Fit": "Ruffled", "Length": "Mini", "Sleeves": "Frill Sleeves", "Occasion": "Party/Date" }
    },
    { 
      id: 8, 
      name: 'Burgundy Velvet Gown', 
      category: "Women", 
      sub: "Dresses • Long", 
      price: 3999, 
      oldPrice: 7999, 
      images: ["/Fashion/Women/Dresses/Products/dwfp8.png", "/Fashion/Women/Dresses/Products/dwfp8_1.png", "/Fashion/Women/Dresses/Products/dwfp8_2.png", "/Fashion/Women/Dresses/Products/dwfp8_3.png", "/Fashion/Women/Dresses/Products/dwfp8_4.png"],
      tag: "Luxury", 
      color: "Burgundy", 
      rating: "4.9", 
      reviews: "1.1k",
      details: { "Fabric": "Velvet", "Fit": "Bodycon", "Length": "Maxi", "Neck": "Halter Neck", "Occasion": "Wedding/Gala" }
    },
    { 
      id: 9, 
      name: 'Sage Green Button Dress', 
      category: "Women", 
      sub: "Dresses • Short", 
      price: 1599, 
      oldPrice: 3199, 
      images: ["/Fashion/Women/Dresses/Products/dwfp9.png", "/Fashion/Women/Dresses/Products/dwfp9_1.png", "/Fashion/Women/Dresses/Products/dwfp9_2.png", "/Fashion/Women/Dresses/Products/dwfp9_3.png", "/Fashion/Women/Dresses/Products/dwfp9_4.png"],
      tag: "Essential", 
      color: "Sage Green", 
      rating: "4.5", 
      reviews: "1.7k",
      details: { "Fabric": "Cotton", "Fit": "Shirt Dress", "Length": "Above Knee", "Sleeves": "Short Sleeves", "Occasion": "Casual/Office" }
    },
    { 
      id: 10, 
      name: 'Peach Pleated Gown', 
      category: "Women", 
      sub: "Dresses • Long", 
      price: 2999, 
      oldPrice: 5999, 
      images: ["/Fashion/Women/Dresses/Products/dwfp10.png", "/Fashion/Women/Dresses/Products/dwfp10_1.png", "/Fashion/Women/Dresses/Products/dwfp10_2.png", "/Fashion/Women/Dresses/Products/dwfp10_3.png", "/Fashion/Women/Dresses/Products/dwfp10_4.png"],
      tag: "Trending", 
      color: "Peach", 
      rating: "4.7", 
      reviews: "1.3k",
      details: { "Fabric": "Georgette", "Fit": "Pleated", "Length": "Maxi", "Neck": "Keyhole Neck", "Occasion": "Party/Engagement" }
    },
    { 
      id: 11, 
      name: 'Plum Wrap Dress', 
      category: "Women", 
      sub: "Dresses • Short", 
      price: 2099, 
      oldPrice: 4199, 
      images: ["/Fashion/Women/Dresses/Products/dwfp11.png", "/Fashion/Women/Dresses/Products/dwfp11_1.png", "/Fashion/Women/Dresses/Products/dwfp11_2.png", "/Fashion/Women/Dresses/Products/dwfp11_3.png", "/Fashion/Women/Dresses/Products/dwfp11_4.png"],
      tag: "Best Seller", 
      color: "Plum", 
      rating: "4.8", 
      reviews: "2.0k",
      details: { "Fabric": "Jersey", "Fit": "Wrap Style", "Length": "Knee Length", "Neck": "V-Neck", "Occasion": "Office/Party" }
    },
    { 
      id: 12, 
      name: 'Nude Sheer Sleeve Dress', 
      category: "Women", 
      sub: "Dresses • Long", 
      price: 3599, 
      oldPrice: 7199, 
      images: ["/Fashion/Women/Dresses/Products/dwfp12.png", "/Fashion/Women/Dresses/Products/dwfp12_1.png", "/Fashion/Women/Dresses/Products/dwfp12_2.png", "/Fashion/Women/Dresses/Products/dwfp12_3.png", "/Fashion/Women/Dresses/Products/dwfp12_4.png"],
      tag: "Premium", 
      color: "Nude", 
      rating: "4.8", 
      reviews: "0.9k",
      details: { "Fabric": "Net & Satin", "Fit": "Bodycon", "Length": "Maxi", "Sleeves": "Sheer Sleeves", "Occasion": "Cocktail/Formal" }
    }
  ];

  // Get cart quantity for a product
  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item => 
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  const getSizes = () => ["XS", "S", "M", "L", "XL", "XXL"];

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
          <p className="text-[11px] tracking-[0.7em] uppercase text-orange-600 font-bold mb-5">Women's Dresses Collection MMXXVI</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">The Dress Studio</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Product Grid - Mixed Short & Long Dresses (12 Products) */}
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

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center animate-in fade-in duration-300" style={{padding: isMobile ? '120px 25px 25px 25px' : '240px 40px 20px 40px'}}>
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={handleClose} style={{zIndex: -1}}></div>
            
            <div className="relative bg-white w-full max-w-7xl h-full md:h-[75vh] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[20px] md:rounded-[40px] animate-in zoom-in-95 duration-500 ring-1 ring-slate-100">
              
              <button onClick={handleClose} className="absolute top-3 right-3 z-[95] w-9 h-9 flex items-center justify-center bg-white hover:bg-slate-100 rounded-full text-slate-600 hover:text-black transition-all shadow-lg text-base font-bold">✕</button>

              {/* LEFT SIDE: Images */}
             <div className="md:w-3/5 bg-[#f3f2ee] flex flex-row h-[62vh] md:h-full relative overflow-hidden">
              <div className="flex flex-col gap-2 p-2 z-10 w-1/4 justify-center overflow-y-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                {selectedProduct.images.map((img, i) => (
                  <div 
                    key={i} 
                    onMouseEnter={() => setActiveImgIndex(i)}
                    onClick={() => setActiveImgIndex(i)}
                    className={`w-full h-14 md:h-28 cursor-pointer overflow-hidden transition-all duration-500 rounded-lg ${activeImgIndex === i ? 'ring-2 ring-orange-500 shadow-xl scale-105' : 'opacity-50 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </div>
                ))}
              </div>
              <div className="relative w-3/4 h-full overflow-hidden">
                <img 
                  key={selectedProduct.id + activeImgIndex} 
                  src={selectedProduct.images[activeImgIndex]} 
                  className="w-full h-full object-cover transition-all duration-700" 
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
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">Select Size</p>
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

export default DressesWomenFashionProducts;