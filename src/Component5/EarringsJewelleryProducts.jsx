import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';  
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const EarringsJewelleryProducts = () => {
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

  // Earrings Products - Mixed Stud & Jhumka (12 Products)
  // Image Path Pattern: /Jewellery/Earrings/Products/ejp{id}.png
 const products = [
    // TRADITIONAL / PRECIOUS METAL EARRINGS (6 products)
    { 
      id: 1, 
      name: 'Diamond Stud Earrings', 
      category: "Jewellery", 
      sub: "Earrings • Stud", 
      price: 2999, 
      oldPrice: 5999, 
      images: ["/Jewellery/Earrings/Products/ejp1.png", "/Jewellery/Earrings/Products/ejp1_1.png", "/Jewellery/Earrings/Products/ejp1_2.png", "/Jewellery/Earrings/Products/ejp1_3.png", "/Jewellery/Earrings/Products/ejp1_4.png"],
      tag: "Best Seller", 
      color: "Silver", 
      rating: "4.9", 
      reviews: "2.5k",
      details: { "Type": "Diamond Stud", "Material": "925 Silver", "Stone": "Cubic Zirconia", "Closure": "Push Back", "Hypoallergenic": "Yes" }
    },
    { 
      id: 2, 
      name: 'Gold Jhumka Earrings', 
      category: "Jewellery", 
      sub: "Earrings • Jhumka", 
      price: 3999, 
      oldPrice: 7999, 
      images: ["/Jewellery/Earrings/Products/ejp2.png", "/Jewellery/Earrings/Products/ejp2_1.png", "/Jewellery/Earrings/Products/ejp2_2.png", "/Jewellery/Earrings/Products/ejp2_3.png", "/Jewellery/Earrings/Products/ejp2_4.png"],
      tag: "Trending", 
      color: "Gold", 
      rating: "4.8", 
      reviews: "1.8k",
      details: { "Type": "Traditional Jhumka", "Material": "Brass with Gold Plating", "Stone": "Kempu Stone", "Closure": "Hook", "Weight": "15g" }
    },
    { 
      id: 3, 
      name: 'Pearl Stud Earrings', 
      category: "Jewellery", 
      sub: "Earrings • Stud", 
      price: 1799, 
      oldPrice: 3599, 
      images: ["/Jewellery/Earrings/Products/ejp3.png", "/Jewellery/Earrings/Products/ejp3_1.png", "/Jewellery/Earrings/Products/ejp3_2.png", "/Jewellery/Earrings/Products/ejp3_3.png", "/Jewellery/Earrings/Products/ejp3_4.png"],
      tag: "Best Seller", 
      color: "White Pearl", 
      rating: "4.7", 
      reviews: "2.1k",
      details: { "Type": "Pearl Stud", "Material": "Sterling Silver", "Pearl Type": "Freshwater", "Closure": "Screw Back", "Elegant": "Yes" }
    },
    { 
      id: 4, 
      name: 'Antique Jhumka Set', 
      category: "Jewellery", 
      sub: "Earrings • Jhumka", 
      price: 5499, 
      oldPrice: 10999, 
      images: ["/Jewellery/Earrings/Products/ejp4.png", "/Jewellery/Earrings/Products/ejp4_1.png", "/Jewellery/Earrings/Products/ejp4_2.png", "/Jewellery/Earrings/Products/ejp4_3.png", "/Jewellery/Earrings/Products/ejp4_4.png"],
      tag: "Luxury", 
      color: "Antique Gold", 
      rating: "4.9", 
      reviews: "1.2k",
      details: { "Type": "Antique Jhumka", "Material": "Brass", "Finish": "Antique Gold", "Stone": "Kundan Work", "Occasion": "Wedding" }
    },
    { 
      id: 5, 
      name: 'Heart Shaped Studs', 
      category: "Jewellery", 
      sub: "Earrings • Stud", 
      price: 1299, 
      oldPrice: 2599, 
      images: ["/Jewellery/Earrings/Products/ejp5.png", "/Jewellery/Earrings/Products/ejp5_1.png", "/Jewellery/Earrings/Products/ejp5_2.png", "/Jewellery/Earrings/Products/ejp5_3.png", "/Jewellery/Earrings/Products/ejp5_4.png"],
      tag: "Trending", 
      color: "Rose Gold", 
      rating: "4.6", 
      reviews: "1.5k",
      details: { "Type": "Heart Stud", "Material": "Rose Gold Plated", "Stone": "CZ", "Closure": "Push Back", "Gift Ready": "Yes" }
    },
    { 
      id: 6, 
      name: 'Lightweight Temple Jhumka', 
      category: "Jewellery", 
      sub: "Earrings • Jhumka", 
      price: 2499, 
      oldPrice: 4999, 
      images: ["/Jewellery/Earrings/Products/ejp6.png", "/Jewellery/Earrings/Products/ejp6_1.png", "/Jewellery/Earrings/Products/ejp6_2.png", "/Jewellery/Earrings/Products/ejp6_3.png", "/Jewellery/Earrings/Products/ejp6_4.png"],
      tag: "Best Seller", 
      color: "Yellow Gold", 
      rating: "4.8", 
      reviews: "1.9k",
      details: { "Type": "Lightweight Jhumka", "Material": "Alloy", "Stone": "Multicolor", "Closure": "Hook", "Daily Wear": "Yes" }
    },

    // FASHION / TRENDY EARRINGS (6 products)
    { 
      id: 7, 
      name: 'Abstract Acrylic Hoops', 
      category: "Jewellery", 
      sub: "Earrings • Fashion", 
      price: 899, 
      oldPrice: 1799, 
      images: ["/Jewellery/Earrings/Products/ejp7.png", "/Jewellery/Earrings/Products/ejp7_1.png", "/Jewellery/Earrings/Products/ejp7_2.png", "/Jewellery/Earrings/Products/ejp7_3.png", "/Jewellery/Earrings/Products/ejp7_4.png"],
      tag: "Trending", 
      color: "Multicolor", 
      rating: "4.6", 
      reviews: "2.8k",
      details: { "Type": "Acrylic Hoops", "Material": "Acrylic", "Design": "Abstract", "Weight": "Ultra Light", "Trend": "Y2K Style" }
    },
    { 
      id: 8, 
      name: 'Resin Pendant Drop Earrings', 
      category: "Jewellery", 
      sub: "Earrings • Fashion", 
      price: 1199, 
      oldPrice: 2399, 
      images: ["/Jewellery/Earrings/Products/ejp8.png", "/Jewellery/Earrings/Products/ejp8_1.png", "/Jewellery/Earrings/Products/ejp8_2.png", "/Jewellery/Earrings/Products/ejp8_3.png", "/Jewellery/Earrings/Products/ejp8_4.png"],
      tag: "Best Seller", 
      color: "Pink & White", 
      rating: "4.8", 
      reviews: "1.9k",
      details: { "Type": "Resin Drop", "Material": "Resin + Metal", "Design": "Floral Embedded", "Closure": "Fish Hook", "Handmade": "Yes" }
    },
    { 
      id: 9, 
      name: 'Chain Link Statement Earrings', 
      category: "Jewellery", 
      sub: "Earrings • Fashion", 
      price: 1999, 
      oldPrice: 3999, 
      images: ["/Jewellery/Earrings/Products/ejp9.png", "/Jewellery/Earrings/Products/ejp9_1.png", "/Jewellery/Earrings/Products/ejp9_2.png", "/Jewellery/Earrings/Products/ejp9_3.png", "/Jewellery/Earrings/Products/ejp9_4.png"],
      tag: "Luxury", 
      color: "Silver", 
      rating: "4.9", 
      reviews: "0.9k",
      details: { "Type": "Chain Link", "Material": "Stainless Steel", "Design": "Interlocking Chains", "Length": "3 inches", "Edgy Style": "Yes" }
    },
    { 
      id: 10, 
      name: 'Boho Beaded Tassel Earrings', 
      category: "Jewellery", 
      sub: "Earrings • Fashion", 
      price: 799, 
      oldPrice: 1599, 
      images: ["/Jewellery/Earrings/Products/ejp10.png", "/Jewellery/Earrings/Products/ejp10_1.png", "/Jewellery/Earrings/Products/ejp10_2.png", "/Jewellery/Earrings/Products/ejp10_3.png", "/Jewellery/Earrings/Products/ejp10_4.png"],
      tag: "Trending", 
      color: "Rainbow", 
      rating: "4.7", 
      reviews: "2.2k",
      details: { "Type": "Beaded Tassel", "Material": "Glass Beads", "Style": "Bohemian", "Length": "4 inches", "Festival Wear": "Yes" }
    },
    { 
      id: 11, 
      name: 'Minimalist Bar Studs', 
      category: "Jewellery", 
      sub: "Earrings • Stud", 
      price: 699, 
      oldPrice: 1399, 
      images: ["/Jewellery/Earrings/Products/ejp11.png", "/Jewellery/Earrings/Products/ejp11_1.png", "/Jewellery/Earrings/Products/ejp11_2.png", "/Jewellery/Earrings/Products/ejp11_3.png", "/Jewellery/Earrings/Products/ejp11_4.png"],
      tag: "Essential", 
      color: "Silver", 
      rating: "4.7", 
      reviews: "2.6k",
      details: { "Type": "Bar Stud", "Material": "Stainless Steel", "Design": "Minimalist", "Closure": "Push Back", "Daily Wear": "Yes" }
    },
    { 
      id: 12, 
      name: 'Chunky Color Block Hoops', 
      category: "Jewellery", 
      sub: "Earrings • Fashion", 
      price: 1099, 
      oldPrice: 2199, 
      images: ["/Jewellery/Earrings/Products/ejp12.png", "/Jewellery/Earrings/Products/ejp12_1.png", "/Jewellery/Earrings/Products/ejp12_2.png", "/Jewellery/Earrings/Products/ejp12_3.png", "/Jewellery/Earrings/Products/ejp12_4.png"],
      tag: "Trending", 
      color: "Blue & Yellow", 
      rating: "4.5", 
      reviews: "1.8k",
      details: { "Type": "Color Block Hoops", "Material": "Enamel + Metal", "Design": "Bold Colors", "Closure": "Click Top", "Statement Piece": "Yes" }
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
          <p className="text-[11px] tracking-[0.7em] uppercase text-amber-600 font-bold mb-5">Earrings Collection MMXXVI</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">Timeless Beauty</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Product Grid - Mixed Stud & Jhumka Earrings (12 Products) */}
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
                      <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Metal Color</span>
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

export default EarringsJewelleryProducts;