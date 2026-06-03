// JewelleryProducts.jsx - Fixed Version
import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';  
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const JewelleryProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  const products = [
    // Earrings - Jhumka
    { 
      id: 601, name: 'Traditional Silk Thread Jhumkas', category: "Jewellery", sub: "Earrings • Jhumka", price: 2499, oldPrice: 4999, 
      images: ["/Jewellery/Products/jp1.png", "/Jewellery/Products/jp1_1.png", "/Jewellery/Products/jp1_2.png","/Jewellery/Products/jp1_3.png","/Jewellery/Products/jp1_4.png"],
      tag: "Trending", color: "Emerald Green & Gold", rating: "4.8", reviews: "2.1k",
      details: { "Material": "Silk Thread & Alloy", "Plating": "Gold Plated", "Stone": "Emerald & Kundan", "Weight": "25g", "Closure": "Push Back" }
    },
    // Necklace - Choker
    { 
      id: 602, name: 'Temple Jewellery Choker Set', category: "Jewellery", sub: "Necklace • Choker", price: 5999, oldPrice: 9999, 
      images: ["/Jewellery/Products/jp2.png", "/Jewellery/Products/jp2_1.png", "/Jewellery/Products/jp2_2.png","/Jewellery/Products/jp2_3.png","/Jewellery/Products/jp2_4.png"],
      tag: "Premium", color: "Ruby Red & Antique Gold", rating: "4.9", reviews: "850",
      details: { "Material": "Brass & Copper", "Plating": "Antique Gold Polish", "Stone": "Ruby & Pearls", "Length": "14 inches", "Includes": "Earrings + Necklace" }
    },
    // Bangles - Traditional
    { 
      id: 603, name: 'Lacquer Handcrafted Bangles', category: "Jewellery", sub: "Bangles • Traditional", price: 3499, oldPrice: 5999, 
      images: ["/Jewellery/Products/jp3.png", "/Jewellery/Products/jp3_1.png", "/Jewellery/Products/jp3_2.png","/Jewellery/Products/jp3_3.png","/Jewellery/Products/jp3_4.png"],
      tag: "Best Seller", color: "Sapphire Blue & Lacquer", rating: "4.7", reviews: "3.4k",
      details: { "Material": "Lacquer & Alloy", "Plating": "Enamel Finish", "Set": "6 Pieces", "Width": "8mm", "Design": "Handpainted Lacquer Art" }
    },
    // Earrings - Stud
    { 
      id: 604, name: 'Pearl & Crystal Studs', category: "Jewellery", sub: "Earrings • Stud", price: 4999, oldPrice: 7999, 
      images: ["/Jewellery/Products/jp4.png", "/Jewellery/Products/jp4_1.png", "/Jewellery/Products/jp4_2.png","/Jewellery/Products/jp4_3.png","/Jewellery/Products/jp4_4.png"],
      tag: "Luxury", color: "White Pearl & Silver", rating: "4.9", reviews: "1.2k",
      details: { "Material": "Sterling Silver", "Stone": "Freshwater Pearls & CZ", "Plating": "Rhodium", "Weight": "3g", "Closure": "Screw Back" }
    },
    // Necklace - Chain
    { 
      id: 605, name: 'Oxidised Silver Chain Necklace', category: "Jewellery", sub: "Necklace • Chain", price: 3999, oldPrice: 6999, 
      images: ["/Jewellery/Products/jp5.png", "/Jewellery/Products/jp5_1.png", "/Jewellery/Products/jp5_2.png","/Jewellery/Products/jp5_3.png","/Jewellery/Products/jp5_4.png"],
      tag: "Essential", color: "Oxidised Silver & Turquoise", rating: "4.6", reviews: "1.8k",
      details: { "Material": "Silver Alloy", "Plating": "Oxidised Finish", "Length": "18 inches", "Width": "3mm", "Closure": "Lobster Clasp" }
    },
    // Earrings - Drops
    { 
      id: 606, name: 'Meenakari Drop Earrings', category: "Jewellery", sub: "Earrings • Drops", price: 2999, oldPrice: 4999, 
      images: ["/Jewellery/Products/jp6.png", "/Jewellery/Products/jp6_1.png", "/Jewellery/Products/jp6_2.png","/Jewellery/Products/jp6_3.png","/Jewellery/Products/jp6_4.png"],
      tag: "Trending", color: "Multicolor Meenakari", rating: "4.8", reviews: "1.5k",
      details: { "Material": "Brass", "Stone": "Enamel & Kundan", "Length": "2 inches", "Weight": "8g", "Closure": "Push Back", "Art": "Meenakari Enamel Work" }
    },
    // Bangles - Modern
    { 
      id: 607, name: 'Acrylic Designer Bangles', category: "Jewellery", sub: "Bangles • Modern", price: 1999, oldPrice: 3499, 
      images: ["/Jewellery/Products/jp7.png", "/Jewellery/Products/jp7_1.png", "/Jewellery/Products/jp7_2.png","/Jewellery/Products/jp7_3.png","/Jewellery/Products/jp7_4.png"],
      tag: "Essential", color: "Crystal Clear & Rose Gold", rating: "4.5", reviews: "2.2k",
      details: { "Material": "Acrylic & Metal", "Plating": "Rose Gold Accent", "Set": "4 Pieces", "Style": "Contemporary Transparent", "Adjustable": "Yes" }
    },
    // Necklace - Pendant
    { 
      id: 608, name: 'Navratna Pendant Necklace', category: "Jewellery", sub: "Necklace • Pendant", price: 2499, oldPrice: 4499, 
      images: ["/Jewellery/Products/jp8.png", "/Jewellery/Products/jp8_1.png", "/Jewellery/Products/jp8_2.png","/Jewellery/Products/jp8_3.png","/Jewellery/Products/jp8_4.png"],
      tag: "Best Seller", color: "Nine Gemstones & Gold", rating: "4.7", reviews: "1.9k",
      details: { "Material": "Stainless Steel", "Stone": "Navratna (9 Auspicious Gems)", "Chain Length": "16 inches", "Pendant Size": "15mm", "Closure": "Lobster Clasp" }
    },
    // Earrings - Hoops
    { 
      id: 609, name: 'Diamond Hoop Earrings', category: "Jewellery", sub: "Earrings • Hoops", price: 1799, oldPrice: 2999, 
      images: ["/Jewellery/Products/jp9.png", "/Jewellery/Products/jp9_1.png", "/Jewellery/Products/jp9_2.png","/Jewellery/Products/jp9_3.png","/Jewellery/Products/jp9_4.png"],
      tag: "Trending", color: "Silver & Diamond", rating: "4.6", reviews: "2.8k",
      details: { "Material": "Brass", "Plating": "Silver Plated", "Diameter": "25mm", "Weight": "6g", "Closure": "Hinge Back" }
    },
    // Necklace - Fashion
    { 
      id: 610, name: 'Bohemian Beaded Layered Necklace', category: "Jewellery", sub: "Necklace • Fashion", price: 3499, oldPrice: 5999, 
      images: ["/Jewellery/Products/jp10.png", "/Jewellery/Products/jp10_1.png", "/Jewellery/Products/jp10_2.png","/Jewellery/Products/jp10_3.png","/Jewellery/Products/jp10_4.png"],
      tag: "Premium", color: "Ruby & Bohemian Beads", rating: "4.8", reviews: "980",
      details: { "Material": "Wooden Beads & Alloy", "Plating": "Antique Brass", "Layers": "3", "Length": "16+18 inches", "Style": "Bohemian with Ruby Accents" }
    },
    // Bangles - Kada
    { 
      id: 611, name: 'Tibetan Silver Kada', category: "Jewellery", sub: "Bangles • Traditional", price: 4499, oldPrice: 7499, 
      images: ["/Jewellery/Products/jp11.png", "/Jewellery/Products/jp11_1.png", "/Jewellery/Products/jp11_2.png","/Jewellery/Products/jp11_3.png","/Jewellery/Products/jp11_4.png"],
      tag: "Premium", color: "Silver & Turquoise", rating: "4.9", reviews: "650",
      details: { "Material": "Tibetan Silver", "Plating": "Oxidised Finish", "Width": "12mm", "Weight": "35g", "Design": "Buddhist Engravings with Turquoise" }
    },
    // Earrings - Chandbali
    { 
      id: 612, name: 'Mughal Inspired Chandbalis', category: "Jewellery", sub: "Earrings • Traditional", price: 3999, oldPrice: 6499, 
      images: ["/Jewellery/Products/jp12.png", "/Jewellery/Products/jp12_1.png", "/Jewellery/Products/jp12_2.png","/Jewellery/Products/jp12_3.png","/Jewellery/Products/jp12_4.png"],
      tag: "Luxury", color: "Pearl, Emerald & Gold", rating: "4.9", reviews: "520",
      details: { "Material": "Copper & Alloy", "Plating": "Gold Plated", "Stone": "Emerald, Pearls & Kundan", "Length": "3 inches", "Weight": "18g", "Art": "Mughal Minakari" }
    }
  ];

  // Get cart quantity for a product
  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item => 
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  const getSizes = () => ["One Size"];

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

  // Auto-open product when coming from Jewellery page
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
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">Jewellery Studio</h2>
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
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">Select Size</p>
                    <div className="flex flex-wrap gap-3">
                      {getSizes().map(s => {
                        const cartQty = getCartQuantity(selectedProduct.id, s);
                        return (
                          <button 
                            key={s} 
                            onClick={() => setSelectedSize(s)} 
                            className={`h-12 min-w-[85px] text-[11px] font-bold transition-all rounded-2xl border ${
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

export default JewelleryProducts;