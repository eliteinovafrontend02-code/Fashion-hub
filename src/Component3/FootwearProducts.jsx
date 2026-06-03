// FootwearProducts.jsx - Fixed Version
import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';  
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const FootwearProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  const products = [
    // MEN - SHOES (Casual)
    { 
      id: 401, 
      name: "Men's Casual Sneakers", 
      category: "Footwear", 
      sub: "Men • Shoes • Casual", 
      price: 2499, 
      oldPrice: 3999, 
      images: ["/Footwear/Products/fp1.png", "/Footwear/Products/fp1_1.png", "/Footwear/Products/fp1_2.png","/Footwear/Products/fp1_3.png","/Footwear/Products/fp1_4.png"],
      tag: "Trending", 
      color: "White/Grey", 
      rating: "4.7", 
      reviews: "3.2k",
      details: { "Material": "Premium Synthetic", "Sole": "EVA Foam", "Closure": "Lace-up", "Insole": "Memory Foam" }
    },
    // WOMEN - HEELS (Party)
    { 
      id: 402, 
      name: "Women's Stiletto Party Heels", 
      category: "Footwear", 
      sub: "Women • Heels • Party", 
      price: 3499, 
      oldPrice: 5499, 
      images: ["/Footwear/Products/fp2.png", "/Footwear/Products/fp2_1.png", "/Footwear/Products/fp2_2.png","/Footwear/Products/fp2_3.png","/Footwear/Products/fp2_4.png"],
      tag: "Trending", 
      color: "Red", 
      rating: "4.8", 
      reviews: "2.1k",
      details: { "Material": "Satin", "Heel Height": "4 inches", "Toe Style": "Pointed", "Closure": "Ankle Strap" }
    },
    // KIDS - BOY (Shoes - School)
    { 
      id: 403, 
      name: "Boy's School Shoes", 
      category: "Footwear", 
      sub: "Kids • Boy • Shoes • School", 
      price: 1499, 
      oldPrice: 2299, 
      images: ["/Footwear/Products/fp3.png", "/Footwear/Products/fp3_1.png", "/Footwear/Products/fp3_2.png","/Footwear/Products/fp3_3.png","/Footwear/Products/fp3_4.png"],
      tag: "Best Seller", 
      color: "Black", 
      rating: "4.7", 
      reviews: "2.8k",
      details: { "Material": "PU Leather", "Sole": "TPR", "Closure": "Velcro Strap", "Size Range": "EU 28-35" }
    },
    // KIDS - GIRL (Sandals - Soft)
    { 
      id: 404, 
      name: "Girl's Soft Comfort Sandals", 
      category: "Footwear", 
      sub: "Kids • Girl • Sandals • Soft", 
      price: 899, 
      oldPrice: 1399, 
      images: ["/Footwear/Products/fp4.png", "/Footwear/Products/fp4_1.png", "/Footwear/Products/fp4_2.png","/Footwear/Products/fp4_3.png","/Footwear/Products/fp4_4.png"],
      tag: "Trending", 
      color: "Purple", 
      rating: "4.7", 
      reviews: "1.6k",
      details: { "Material": "Soft PU", "Sole": "Flexible EVA", "Closure": "Velcro", "Size Range": "EU 27-33" }
    },
    // MEN - SHOES (Formal)
    { 
      id: 405, 
      name: "Men's Formal Oxford Shoes", 
      category: "Footwear", 
      sub: "Men • Shoes • Formal", 
      price: 3999, 
      oldPrice: 6499, 
      images: ["/Footwear/Products/fp5.png", "/Footwear/Products/fp5_1.png", "/Footwear/Products/fp5_2.png","/Footwear/Products/fp5_3.png","/Footwear/Products/fp5_4.png"],
      tag: "Premium", 
      color: "Black", 
      rating: "4.9", 
      reviews: "1.2k",
      details: { "Material": "Genuine Leather", "Sole": "Rubber", "Closure": "Lace-up", "Toe Style": "Closed" }
    },
    // WOMEN - FLATS (Ballerina)
    { 
      id: 406, 
      name: "Women's Ballerina Flats", 
      category: "Footwear", 
      sub: "Women • Flats • Ballerina", 
      price: 1899, 
      oldPrice: 2999, 
      images: ["/Footwear/Products/fp6.png", "/Footwear/Products/fp6_1.png", "/Footwear/Products/fp6_2.png","/Footwear/Products/fp6_3.png","/Footwear/Products/fp6_4.png"],
      tag: "Essential", 
      color: "Blush Pink", 
      rating: "4.6", 
      reviews: "3.4k",
      details: { "Material": "Soft PU", "Sole": "Flexible Rubber", "Closure": "Slip-on", "Toe Style": "Round" }
    },
    // KIDS - GIRL (Shoes - Casual)
    { 
      id: 407, 
      name: "Girl's Casual Sneakers", 
      category: "Footwear", 
      sub: "Kids • Girl • Shoes • Casual", 
      price: 1299, 
      oldPrice: 1999, 
      images: ["/Footwear/Products/fp7.png", "/Footwear/Products/fp7_1.png", "/Footwear/Products/fp7_2.png","/Footwear/Products/fp7_3.png","/Footwear/Products/fp7_4.png"],
      tag: "Essential", 
      color: "Pink/White", 
      rating: "4.6", 
      reviews: "2.2k",
      details: { "Material": "Canvas", "Sole": "Rubber", "Closure": "Lace-up", "Size Range": "EU 28-34" }
    },
    // MEN - SANDALS (Sports)
    { 
      id: 408, 
      name: 'Men\'s Lightweight Sports Sandals', 
      category: "Footwear", 
      sub: "Men • Sandals • Sports", 
      price: 1299, 
      oldPrice: 1999, 
      images: ["/Footwear/Products/fp8.png", "/Footwear/Products/fp8_1.png", "/Footwear/Products/fp8_2.png","/Footwear/Products/fp8_3.png","/Footwear/Products/fp8_4.png"],
      tag: "Essential", 
      color: "Grey/Orange", 
      rating: "4.4", 
      reviews: "1.8k",
      details: { "Material": "EVA Straps", "Sole": "Phylon", "Closure": "Quick Buckle", "Arch Support": "Medium", "Activity": "Casual Sports" }
    },
    // WOMEN - HEELS (Casual)
    { 
      id: 409, 
      name: "Women's Block Casual Heels", 
      category: "Footwear", 
      sub: "Women • Heels • Casual", 
      price: 2799, 
      oldPrice: 4299, 
      images: ["/Footwear/Products/fp9.png", "/Footwear/Products/fp9_1.png", "/Footwear/Products/fp9_2.png","/Footwear/Products/fp9_3.png","/Footwear/Products/fp9_4.png"],
      tag: "Best Seller", 
      color: "Nude", 
      rating: "4.7", 
      reviews: "1.8k",
      details: { "Material": "Faux Leather", "Heel Height": "2.5 inches", "Toe Style": "Round", "Closure": "Slip-on" }
    },
    // MEN - SANDALS (Flat)
    { 
      id: 410, 
      name: "Men's Flat Flip Flops", 
      category: "Footwear", 
      sub: "Men • Sandals • Flat", 
      price: 799, 
      oldPrice: 1299, 
      images: ["/Footwear/Products/fp10.png", "/Footwear/Products/fp10_1.png", "/Footwear/Products/fp10_2.png","/Footwear/Products/fp10_3.png","/Footwear/Products/fp10_4.png"],
      tag: "Essential", 
      color: "Black", 
      rating: "4.3", 
      reviews: "5.2k",
      details: { "Material": "Rubber", "Sole": "Rubber", "Closure": "Slip-on", "Use": "Beach/Home" }
    },
    // KIDS - BOY (Sandals - Velcro)
    { 
      id: 411, 
      name: "Boy's Velcro Sport Sandals", 
      category: "Footwear", 
      sub: "Kids • Boy • Sandals • Velcro", 
      price: 999, 
      oldPrice: 1599, 
      images: ["/Footwear/Products/fp11.png", "/Footwear/Products/fp11_1.png", "/Footwear/Products/fp11_2.png","/Footwear/Products/fp11_3.png","/Footwear/Products/fp11_4.png"],
      tag: "Trending", 
      color: "Blue/Orange", 
      rating: "4.5", 
      reviews: "1.9k",
      details: { "Material": "PVC Straps", "Sole": "EVA", "Closure": "Velcro", "Size Range": "EU 29-36" }
    },
    // WOMEN - FLATS (Ethnic)
    { 
      id: 412, 
      name: "Women's Ethnic Juttis", 
      category: "Footwear", 
      sub: "Women • Flats • Ethnic", 
      price: 2299, 
      oldPrice: 3599, 
      images: ["/Footwear/Products/fp12.png", "/Footwear/Products/fp12_1.png", "/Footwear/Products/fp12_2.png","/Footwear/Products/fp12_3.png","/Footwear/Products/fp12_4.png"],
      tag: "Trending", 
      color: "Gold/Red", 
      rating: "4.8", 
      reviews: "1.5k",
      details: { "Material": "Fabric + Leather", "Sole": "Leather", "Closure": "Slip-on", "Embellishment": "Thread Work" }
    },
  ];

  // Get cart quantity for a product
  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item => 
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  const getSizes = () => ["6", "7", "8", "9", "10"];

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

  // Auto-open product when coming from Footwear page
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
          <p className="text-[11px] tracking-[0.7em] uppercase text-orange-600 font-bold mb-5">Season MMXXVI</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">Footwear Studio</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Product Grid */}
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
                      <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Color</span>
                      <span className="text-black font-bold border-b-2 border-orange-500 pb-1">{selectedProduct.color}</span>
                    </div>
                  </div>

                  <div className="mb-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">Select Size (UK)</p>
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

export default FootwearProducts;