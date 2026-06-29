import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';  
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const BanglesJewelleryProducts = () => {
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

  // Bangles Products - 4 Traditional + 8 Fashion/Designer (Total 12)
  // Image Path Pattern: /Jewellery/Bangles/Products/bjp{id}.webp
const products = [
    // 1. SILVER TRADITIONAL BANGLE
    { 
      id: 1, 
      name: 'Silver Traditional Kadha', 
      category: "Jewellery", 
      sub: "Bangles • Traditional", 
      price: 2999, 
      oldPrice: 5999, 
      images: ["/Jewellery/Bangles/Products/bjp1.webp", "/Jewellery/Bangles/Products/bjp1_1.webp", "/Jewellery/Bangles/Products/bjp1_2.webp", "/Jewellery/Bangles/Products/bjp1_3.webp", "/Jewellery/Bangles/Products/bjp1_4.webp"],
      tag: "Best Seller", 
      color: "Silver", 
      rating: "4.9", 
      reviews: "3.2k",
      details: { "Type": "Traditional Kadha", "Material": "Sterling Silver (92.5%)", "Design": "Engraved Temple Motifs", "Weight": "25g", "Occasion": "Festival & Wedding" }
    },

    // 2. MODEL FASHION BANGLE
    { 
      id: 2, 
      name: 'Gold Plated Modern Cuff', 
      category: "Jewellery", 
      sub: "Bangles • Fashion", 
      price: 999, 
      oldPrice: 3199, 
      images: ["/Jewellery/Bangles/Products/bjp2.webp", "/Jewellery/Bangles/Products/bjp2_1.webp", "/Jewellery/Bangles/Products/bjp2_2.webp", "/Jewellery/Bangles/Products/bjp2_3.webp", "/Jewellery/Bangles/Products/bjp2_4.webp"],
      tag: "Trending", 
      color: "Gold", 
      rating: "4.7", 
      reviews: "2.1k",
      details: { "Type": "Modern Cuff", "Material": "Brass with Gold Plating", "Design": "Minimalist Open Cuff", "Adjustable": "Yes", "Daily Wear": "Yes" }
    },

    // 3. TRADITIONAL GOLD BANGLE
    { 
      id: 3, 
      name: 'Antique Gold Temple Bangle', 
      category: "Jewellery", 
      sub: "Bangles • Traditional", 
      price: 1999, 
      oldPrice: 3999, 
      images: ["/Jewellery/Bangles/Products/bjp3.webp", "/Jewellery/Bangles/Products/bjp3_1.webp", "/Jewellery/Bangles/Products/bjp3_2.webp", "/Jewellery/Bangles/Products/bjp3_3.webp", "/Jewellery/Bangles/Products/bjp3_4.webp"],
      tag: "Luxury", 
      color: "Antique Gold", 
      rating: "4.9", 
      reviews: "1.8k",
      details: { "Type": "Temple Bangle", "Material": "Brass with Antique Gold Finish", "Stone": "Kundan & Meenakari", "Weight": "40g", "Occasion": "Wedding & Festivals" }
    },

    // 4. MODEL FASHION BANGLE
    { 
      id: 4, 
      name: 'Rose Gold Chain Bangle', 
      category: "Jewellery", 
      sub: "Bangles • Fashion", 
      price: 1899, 
      oldPrice: 3799, 
      images: ["/Jewellery/Bangles/Products/bjp4.webp", "/Jewellery/Bangles/Products/bjp4_1.webp", "/Jewellery/Bangles/Products/bjp4_2.webp", "/Jewellery/Bangles/Products/bjp4_3.webp", "/Jewellery/Bangles/Products/bjp4_4.webp"],
      tag: "Best Seller", 
      color: "Rose Gold", 
      rating: "4.8", 
      reviews: "2.5k",
      details: { "Type": "Chain Bangle", "Material": "Stainless Steel with Rose Gold Plating", "Design": "Interlocking Chains", "Closure": "Lobster Clasp", "Layered Look": "Yes" }
    },

    // 5. TRADITIONAL PEARL BANGLE
    { 
      id: 5, 
      name: 'Pearl & Gold Traditional Bangle', 
      category: "Jewellery", 
      sub: "Bangles • Traditional", 
      price: 3999, 
      oldPrice: 7999, 
      images: ["/Jewellery/Bangles/Products/bjp5.webp", "/Jewellery/Bangles/Products/bjp5_1.webp", "/Jewellery/Bangles/Products/bjp5_2.webp", "/Jewellery/Bangles/Products/bjp5_3.webp", "/Jewellery/Bangles/Products/bjp5_4.webp"],
      tag: "Luxury", 
      color: "Gold & Pearl", 
      rating: "4.9", 
      reviews: "1.5k",
      details: { "Type": "Pearl Studded Bangle", "Material": "Gold Plated Brass", "Pearl Type": "Freshwater Cultured", "Design": "Traditional Floral Motifs", "Weight": "35g" }
    },

    // 6. MODEL FASHION BANGLE
    { 
      id: 6, 
      name: 'Acrylic Color Block Bangle Set', 
      category: "Jewellery", 
      sub: "Bangles • Fashion", 
      price: 1299, 
      oldPrice: 2599, 
      images: ["/Jewellery/Bangles/Products/bjp6.webp", "/Jewellery/Bangles/Products/bjp6_1.webp", "/Jewellery/Bangles/Products/bjp6_2.webp", "/Jewellery/Bangles/Products/bjp6_3.webp", "/Jewellery/Bangles/Products/bjp6_4.webp"],
      tag: "Trending", 
      color: "Multicolor", 
      rating: "4.6", 
      reviews: "3.1k",
      details: { "Type": "Acrylic Bangle Set", "Material": "High Quality Acrylic", "Set": "Set of 4 Bangles", "Design": "Color Block", "Weight": "Ultra Light" }
    },

    // 7. TRADITIONAL SOUTH INDIAN BANGLE
    { 
      id: 7, 
      name: 'South Indian Silk Thread Bangle', 
      category: "Jewellery", 
      sub: "Bangles • Traditional", 
      price: 1499, 
      oldPrice: 3999, 
      images: ["/Jewellery/Bangles/Products/bjp7.webp", "/Jewellery/Bangles/Products/bjp7_1.webp", "/Jewellery/Bangles/Products/bjp7_2.webp", "/Jewellery/Bangles/Products/bjp7_3.webp", "/Jewellery/Bangles/Products/bjp7_4.webp"],
      tag: "Best Seller", 
      color: "Gold & Red", 
      rating: "4.8", 
      reviews: "2.2k",
      details: { "Type": "Silk Thread Bangle", "Material": "Silk Thread & Gold Plated Brass", "Design": "Traditional Temple Motifs", "Weight": "12g", "Festival Wear": "Yes" }
    },

    // 8. MODEL FASHION BANGLE
    { 
      id: 8, 
      name: 'Silver Minimalist Geometric Bangles', 
      category: "Jewellery", 
      sub: "Bangles • Fashion", 
      price: 1099, 
      oldPrice: 2199, 
      images: ["/Jewellery/Bangles/Products/bjp8.webp", "/Jewellery/Bangles/Products/bjp8_1.webp", "/Jewellery/Bangles/Products/bjp8_2.webp", "/Jewellery/Bangles/Products/bjp8_3.webp", "/Jewellery/Bangles/Products/bjp8_4.webp"],
      tag: "Essential", 
      color: "Silver", 
      rating: "4.7", 
      reviews: "1.9k",
      details: { "Type": "Geometric Bangle Set", "Material": "Stainless Steel", "Design": "Minimalist Geometric", "Set": "Set of 3 Bangles", "Daily Wear": "Yes" }
    },

    // 9. TRADITIONAL GOLD JADAU BANGLE
    { 
      id: 9, 
      name: 'Jadau Kundan Bridal Bangle', 
      category: "Jewellery", 
      sub: "Bangles • Traditional", 
      price: 1999, 
      oldPrice: 4999, 
      images: ["/Jewellery/Bangles/Products/bjp9.webp", "/Jewellery/Bangles/Products/bjp9_1.webp", "/Jewellery/Bangles/Products/bjp9_2.webp", "/Jewellery/Bangles/Products/bjp9_3.webp", "/Jewellery/Bangles/Products/bjp9_4.webp"],
      tag: "Luxury", 
      color: "Gold & Pink", 
      rating: "5.0", 
      reviews: "1.2k",
      details: { "Type": "Jadau Bridal Bangle", "Material": "Brass with Gold Plating", "Stone": "Kundan & Polki", "Design": "Intricate Jadau Work", "Occasion": "Wedding & Bridal" }
    },

    // 10. MODEL FASHION BANGLE
    { 
      id: 10, 
      name: 'Enamel Paisley Pattern Bangles', 
      category: "Jewellery", 
      sub: "Bangles • Fashion", 
      price: 999, 
      oldPrice: 2999, 
      images: ["/Jewellery/Bangles/Products/bjp10.webp", "/Jewellery/Bangles/Products/bjp10_1.webp", "/Jewellery/Bangles/Products/bjp10_2.webp", "/Jewellery/Bangles/Products/bjp10_3.webp", "/Jewellery/Bangles/Products/bjp10_4.webp"],
      tag: "Trending", 
      color: "Blue & Gold", 
      rating: "4.5", 
      reviews: "2.3k",
      details: { "Type": "Enamel Bangle Set", "Material": "Brass with Enamel Finish", "Design": "Paisley Patterns", "Set": "Set of 3 Bangles", "Gift Ready": "Yes" }
    },

    // 11. TRADITIONAL SILVER PATTU BANGLE
    { 
      id: 11, 
      name: 'Silver Pattu Bridal Bangles', 
      category: "Jewellery", 
      sub: "Bangles • Traditional", 
      price: 1999, 
      oldPrice: 5999, 
      images: ["/Jewellery/Bangles/Products/bjp11.webp", "/Jewellery/Bangles/Products/bjp11_1.webp", "/Jewellery/Bangles/Products/bjp11_2.webp", "/Jewellery/Bangles/Products/bjp11_3.webp", "/Jewellery/Bangles/Products/bjp11_4.webp"],
      tag: "Luxury", 
      color: "Silver & Gold", 
      rating: "4.9", 
      reviews: "1.4k",
      details: { "Type": "Pattu Bridal Bangle", "Material": "Sterling Silver with Gold Plating", "Design": "Traditional Pattu Design", "Weight": "50g", "Bridal Collection": "Yes" }
    },

    // 12. MODEL FASHION BANGLE
    { 
      id: 12, 
      name: 'Hammered Metal Adjustable Cuff', 
      category: "Jewellery", 
      sub: "Bangles • Fashion", 
      price: 1199, 
      oldPrice: 2399, 
      images: ["/Jewellery/Bangles/Products/bjp12.webp", "/Jewellery/Bangles/Products/bjp12_1.webp", "/Jewellery/Bangles/Products/bjp12_2.webp", "/Jewellery/Bangles/Products/bjp12_3.webp", "/Jewellery/Bangles/Products/bjp12_4.webp"],
      tag: "Trending", 
      color: "Brass", 
      rating: "4.7", 
      reviews: "1.6k",
      details: { "Type": "Hammered Cuff", "Material": "Brass with Protective Coating", "Design": "Hammered Texture", "Adjustable": "Yes", "Statement Piece": "Yes" }
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
          <p className="text-[11px] tracking-[0.7em] uppercase text-amber-600 font-bold mb-5">Bangles Collection MMXXVI</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">Tradition Meets Trend</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Product Grid - 4 Traditional + 8 Fashion Bangles (12 Products) */}
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
                <p className="text-[9px] text-amber-800 font-bold uppercase tracking-[0.2em] opacity-50">{p.sub}</p>
                <h3 className="text-[14px] font-bold tracking-wide uppercase group-hover:text-amber-700">{p.name}</h3>
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
                  <p className="text-amber-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">{selectedProduct.sub}</p>
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
                      <span className="text-black font-bold border-b-2 border-amber-500 pb-1">{selectedProduct.color}</span>
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
                          className="text-xl text-slate-500 hover:text-amber-600 font-light transition-colors"
                        >
                          −
                        </button>
                        <span className="font-bold text-lg text-slate-950">
                          {getCartQuantity(selectedProduct.id, selectedSize)}
                        </span>
                        <button 
                          onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, 1)} 
                          className="text-xl text-slate-500 hover:text-amber-600 font-light transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={handleGoToCart}
                        className="flex-1 bg-amber-700 text-white font-bold h-full text-[11px] uppercase tracking-widest rounded-full hover:bg-amber-800 transition-all shadow-[0_15px_30px_rgba(194,65,12,0.3)]"
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

export default BanglesJewelleryProducts;