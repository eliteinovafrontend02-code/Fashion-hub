// GirlKidsFootwearProducts.jsx
import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';  
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const GirlKidsFootwearProducts = () => {
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

  // Girl's Footwear Products (6 Shoes + 6 Sandals = 12 products)
  const products = [
    // GIRL SHOES 1
    { 
      id: 1, 
      name: 'Girls Sparkle Flats', 
      category: "Kids", 
      sub: "Girl • Shoes", 
      price: 1299, 
      oldPrice: 2599, 
      images: ["/Footwear/Kids/Girl/Products/gkfp1.png", "/Footwear/Kids/Girl/Products/gkfp1_1.png", "/Footwear/Kids/Girl/Products/gkfp1_2.png", "/Footwear/Kids/Girl/Products/gkfp1_3.png", "/Footwear/Kids/Girl/Products/gkfp1_4.png"],
      tag: "Trending", 
      color: "Pink/Glitter", 
      rating: "4.7", 
      reviews: "3.1k",
      details: { "Material": "Glitter Fabric", "Sole": "Flexible Rubber", "Closure": "Slip-On", "Occasion": "Party/School", "Style": "Sparkly" }
    },
    // GIRL SANDALS 1
    { 
      id: 2, 
      name: 'Girls Pretty Sandals', 
      category: "Kids", 
      sub: "Girl • Sandals", 
      price: 1099, 
      oldPrice: 2199, 
      images: ["/Footwear/Kids/Girl/Products/gkfp2.png", "/Footwear/Kids/Girl/Products/gkfp2_1.png", "/Footwear/Kids/Girl/Products/gkfp2_2.png", "/Footwear/Kids/Girl/Products/gkfp2_3.png", "/Footwear/Kids/Girl/Products/gkfp2_4.png"],
      tag: "Cute Collection", 
      color: "Lavender", 
      rating: "4.9", 
      reviews: "2.2k",
      details: { "Material": "Soft PU", "Sole": "Cushioned", "Closure": "Ankle Strap", "Occasion": "Casual/Party", "Design": "Floral" }
    },
    // GIRL SHOES 2
    { 
      id: 3, 
      name: 'Girls Unicorn Shoes', 
      category: "Kids", 
      sub: "Girl • Shoes", 
      price: 1599, 
      oldPrice: 3199, 
      images: ["/Footwear/Kids/Girl/Products/gkfp3.png", "/Footwear/Kids/Girl/Products/gkfp3_1.png", "/Footwear/Kids/Girl/Products/gkfp3_2.png", "/Footwear/Kids/Girl/Products/gkfp3_3.png", "/Footwear/Kids/Girl/Products/gkfp3_4.png"],
      tag: "Fantasy", 
      color: "Pastel Rainbow", 
      rating: "4.9", 
      reviews: "3.2k",
      details: { "Material": "Glitter + Print", "Sole": "Cushioned", "Closure": "Velcro", "Design": "Unicorn Graphic", "Occasion": "Play/Party" }
    },
    // GIRL SANDALS 2
    { 
      id: 4, 
      name: 'Girls Bow Sandals', 
      category: "Kids", 
      sub: "Girl • Sandals", 
      price: 899, 
      oldPrice: 1799, 
      images: ["/Footwear/Kids/Girl/Products/gkfp4.png", "/Footwear/Kids/Girl/Products/gkfp4_1.png", "/Footwear/Kids/Girl/Products/gkfp4_2.png", "/Footwear/Kids/Girl/Products/gkfp4_3.png", "/Footwear/Kids/Girl/Products/gkfp4_4.png"],
      tag: "Bow Collection", 
      color: "White/Gold", 
      rating: "4.8", 
      reviews: "2.7k",
      details: { "Material": "Faux Leather", "Sole": "Flexible", "Closure": "Slip-On", "Occasion": "Casual/Party", "Design": "Decorative Bow" }
    },
    // GIRL SHOES 3
    { 
      id: 5, 
      name: 'Girls School Shoes', 
      category: "Kids", 
      sub: "Girl • Shoes", 
      price: 1399, 
      oldPrice: 2799, 
      images: ["/Footwear/Kids/Girl/Products/gkfp5.png", "/Footwear/Kids/Girl/Products/gkfp5_1.png", "/Footwear/Kids/Girl/Products/gkfp5_2.png", "/Footwear/Kids/Girl/Products/gkfp5_3.png", "/Footwear/Kids/Girl/Products/gkfp5_4.png"],
      tag: "School Wear", 
      color: "Black/Mary Jane", 
      rating: "4.7", 
      reviews: "2.9k",
      details: { "Material": "Patent Leather", "Sole": "Non-Slip", "Closure": "Adjustable Strap", "Occasion": "School Uniform", "Comfort": "Memory Foam" }
    },
    // GIRL SANDALS 3
    { 
      id: 6, 
      name: 'Girls Butterfly Sandals', 
      category: "Kids", 
      sub: "Girl • Sandals", 
      price: 999, 
      oldPrice: 1999, 
      images: ["/Footwear/Kids/Girl/Products/gkfp6.png", "/Footwear/Kids/Girl/Products/gkfp6_1.png", "/Footwear/Kids/Girl/Products/gkfp6_2.png", "/Footwear/Kids/Girl/Products/gkfp6_3.png", "/Footwear/Kids/Girl/Products/gkfp6_4.png"],
      tag: "Nature Lover", 
      color: "Purple/Teal", 
      rating: "4.7", 
      reviews: "2.3k",
      details: { "Material": "Satin + Rhinestone", "Sole": "Cushioned", "Closure": "Ankle Strap", "Design": "Butterfly Charm", "Occasion": "Party/Wedding" }
    },
    // GIRL SHOES 4
    { 
      id: 7, 
      name: 'Girls Princess Shoes', 
      category: "Kids", 
      sub: "Girl • Shoes", 
      price: 1699, 
      oldPrice: 3399, 
      images: ["/Footwear/Kids/Girl/Products/gkfp7.png", "/Footwear/Kids/Girl/Products/gkfp7_1.png", "/Footwear/Kids/Girl/Products/gkfp7_2.png", "/Footwear/Kids/Girl/Products/gkfp7_3.png", "/Footwear/Kids/Girl/Products/gkfp7_4.png"],
      tag: "Royal", 
      color: "Rose Gold", 
      rating: "4.9", 
      reviews: "1.9k",
      details: { "Material": "Satin + Glitter", "Sole": "Cushioned", "Closure": "Slip-On", "Design": "Crown Detail", "Occasion": "Party/Wedding" }
    },
    // GIRL SANDALS 4
    { 
      id: 8, 
      name: 'Girls Flower Sandals', 
      category: "Kids", 
      sub: "Girl • Sandals", 
      price: 799, 
      oldPrice: 1599, 
      images: ["/Footwear/Kids/Girl/Products/gkfp8.png", "/Footwear/Kids/Girl/Products/gkfp8_1.png", "/Footwear/Kids/Girl/Products/gkfp8_2.png", "/Footwear/Kids/Girl/Products/gkfp8_3.png", "/Footwear/Kids/Girl/Products/gkfp8_4.png"],
      tag: "Summer", 
      color: "Yellow", 
      rating: "4.6", 
      reviews: "3.4k",
      details: { "Material": "EVA + Fabric", "Sole": "Soft Cushion", "Closure": "Slip-On", "Design": "3D Flower", "Use": "Beach/Play" }
    },
    // GIRL SHOES 5
    { 
      id: 9, 
      name: 'Girls Sneakers', 
      category: "Kids", 
      sub: "Girl • Shoes", 
      price: 1499, 
      oldPrice: 2999, 
      images: ["/Footwear/Kids/Girl/Products/gkfp9.png", "/Footwear/Kids/Girl/Products/gkfp9_1.png", "/Footwear/Kids/Girl/Products/gkfp9_2.png", "/Footwear/Kids/Girl/Products/gkfp9_3.png", "/Footwear/Kids/Girl/Products/gkfp9_4.png"],
      tag: "Sporty", 
      color: "Lavender/White", 
      rating: "4.7", 
      reviews: "2.1k",
      details: { "Material": "Mesh + Synthetic", "Sole": "Flexible Rubber", "Closure": "Lace-Up", "Use": "Sports/Play", "Breathable": "Yes" }
    },
    // GIRL SANDALS 5
    { 
      id: 10, 
      name: 'Girls Pearl Sandals', 
      category: "Kids", 
      sub: "Girl • Sandals", 
      price: 1199, 
      oldPrice: 2399, 
      images: ["/Footwear/Kids/Girl/Products/gkfp10.png", "/Footwear/Kids/Girl/Products/gkfp10_1.png", "/Footwear/Kids/Girl/Products/gkfp10_2.png", "/Footwear/Kids/Girl/Products/gkfp10_3.png", "/Footwear/Kids/Girl/Products/gkfp10_4.png"],
      tag: "Elegant", 
      color: "White", 
      rating: "4.8", 
      reviews: "1.6k",
      details: { "Material": "Satin + Pearls", "Sole": "Cushioned", "Closure": "Ankle Strap", "Design": "Pearl Embellishment", "Occasion": "Party/Wedding" }
    },
    // GIRL SHOES 6
    { 
      id: 11, 
      name: 'Girls Ballet Flats', 
      category: "Kids", 
      sub: "Girl • Shoes", 
      price: 1199, 
      oldPrice: 2399, 
      images: ["/Footwear/Kids/Girl/Products/gkfp11.png", "/Footwear/Kids/Girl/Products/gkfp11_1.png", "/Footwear/Kids/Girl/Products/gkfp11_2.png", "/Footwear/Kids/Girl/Products/gkfp11_3.png", "/Footwear/Kids/Girl/Products/gkfp11_4.png"],
      tag: "Graceful", 
      color: "Pastel Pink", 
      rating: "4.8", 
      reviews: "2.4k",
      details: { "Material": "Satin", "Sole": "Flexible", "Closure": "Slip-On", "Design": "Ribbon Tie", "Occasion": "Dance/Casual" }
    },
    // GIRL SANDALS 6
    { 
      id: 12, 
      name: 'Girls Glitter Sandals', 
      category: "Kids", 
      sub: "Girl • Sandals", 
      price: 949, 
      oldPrice: 1899, 
      images: ["/Footwear/Kids/Girl/Products/gkfp12.png", "/Footwear/Kids/Girl/Products/gkfp12_1.png", "/Footwear/Kids/Girl/Products/gkfp12_2.png", "/Footwear/Kids/Girl/Products/gkfp12_3.png", "/Footwear/Kids/Girl/Products/gkfp12_4.png"],
      tag: "Sparkly", 
      color: "Silver", 
      rating: "4.7", 
      reviews: "2.8k",
      details: { "Material": "Glitter PU", "Sole": "Cushioned", "Closure": "Slip-On", "Design": "All-Over Glitter", "Occasion": "Party/Casual" }
    }
  ];

  // Get cart quantity for a product
  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item => 
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  const getSizes = () => ["8C", "9C", "10C", "11C", "12C", "13C", "1Y", "2Y", "3Y"];

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
          <p className="text-[11px] tracking-[0.7em] uppercase text-orange-600 font-bold mb-5">Girl's Footwear Collection MMXXVI</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">Little Princess</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Product Grid - Mixed Shoes & Sandals (12 Products) */}
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
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">Select Size (Kids US)</p>
                    <div className="flex flex-wrap gap-3">
                      {getSizes().map(s => {
                        const cartQty = getCartQuantity(selectedProduct.id, s);
                        return (
                          <button 
                            key={s} 
                            onClick={() => setSelectedSize(s)} 
                            className={`h-12 min-w-[55px] text-[10px] font-bold transition-all rounded-2xl border ${
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

export default GirlKidsFootwearProducts;