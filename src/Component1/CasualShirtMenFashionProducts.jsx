// CasualShirtMenFashionProducts.jsx
import React, { useState, useEffect } from "react";
import { useCart } from '../CartContext';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const CasualShirtMenFashionProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  const filters = ["All", "Cotton", "Denim", "Linen", "Formal"];

  const products = [
    {
      id: 1,
      name: 'Classic White Cotton Shirt',
      category: "Men",
      sub: "Casual • Cotton",
      fabric: "Cotton",
      price: 1299,
      oldPrice: 2499,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp1_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp1_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp1_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp1_4.png"
      ],
      tag: "Bestseller",
      color: "Pure White",
      rating: "4.8",
      reviews: "3.2k",
      details: { "Fabric": "100% Cotton", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Collar": "Classic Collar", "Wash": "Machine Wash" }
    },
    {
      id: 2,
      name: 'Light Blue Denim Shirt',
      category: "Men",
      sub: "Casual • Denim",
      fabric: "Denim",
      price: 1699,
      oldPrice: 3299,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp2_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp2_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp2_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp2_4.png"
      ],
      tag: "Trending",
      color: "Light Blue",
      rating: "4.7",
      reviews: "2.3k",
      details: { "Fabric": "Denim", "Fit": "Slim Fit", "Sleeve": "Full Sleeve", "Style": "Casual", "Wash": "Machine Wash" }
    },
    {
      id: 3,
      name: 'Beige Linen Summer Shirt',
      category: "Men",
      sub: "Casual • Linen",
      fabric: "Linen",
      price: 1499,
      oldPrice: 2999,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp3_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp3_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp3_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp3_4.png"
      ],
      tag: "Summer Edit",
      color: "Beige",
      rating: "4.6",
      reviews: "1.8k",
      details: { "Fabric": "Pure Linen", "Fit": "Relaxed Fit", "Sleeve": "Full Sleeve", "Breathable": "High", "Wash": "Gentle Wash" }
    },
    {
      id: 4,
      name: 'Navy Blue Formal Shirt',
      category: "Men",
      sub: "Casual • Formal",
      fabric: "Formal",
      price: 1899,
      oldPrice: 3599,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp4.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp4_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp4_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp4_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp4_4.png"
      ],
      tag: "Classic",
      color: "Navy Blue",
      rating: "4.9",
      reviews: "2.7k",
      details: { "Fabric": "Cotton Blend", "Fit": "Slim Fit", "Sleeve": "Full Sleeve", "Occasion": "Office/Formal", "Wash": "Machine Wash" }
    },
    {
      id: 5,
      name: 'Olive Green Cotton Shirt',
      category: "Men",
      sub: "Casual • Cotton",
      fabric: "Cotton",
      price: 1199,
      oldPrice: 2399,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp5.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp5_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp5_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp5_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp5_4.png"
      ],
      tag: "New Arrival",
      color: "Olive Green",
      rating: "4.5",
      reviews: "1.1k",
      details: { "Fabric": "100% Cotton", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Style": "Casual", "Wash": "Machine Wash" }
    },
    {
      id: 6,
      name: 'Dark Indigo Denim Shirt',
      category: "Men",
      sub: "Casual • Denim",
      fabric: "Denim",
      price: 1799,
      oldPrice: 3499,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp6.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp6_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp6_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp6_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp6_4.png"
      ],
      tag: "Premium",
      color: "Dark Indigo",
      rating: "4.7",
      reviews: "1.6k",
      details: { "Fabric": "Heavy Denim", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Wash": "Cold Wash", "Style": "Rugged Casual" }
    },
    {
      id: 7,
      name: 'White Linen Casual Shirt',
      category: "Men",
      sub: "Casual • Linen",
      fabric: "Linen",
      price: 1599,
      oldPrice: 3199,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp7.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp7_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp7_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp7_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp7_4.png"
      ],
      tag: "Essentials",
      color: "Off White",
      rating: "4.8",
      reviews: "2.1k",
      details: { "Fabric": "Linen Blend", "Fit": "Relaxed Fit", "Sleeve": "Full Sleeve", "Breathable": "Very High", "Wash": "Hand Wash" }
    },
    {
      id: 8,
      name: 'Sky Blue Formal Shirt',
      category: "Men",
      sub: "Casual • Formal",
      fabric: "Formal",
      price: 1999,
      oldPrice: 3999,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp8.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp8_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp8_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp8_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp8_4.png"
      ],
      tag: "Signature",
      color: "Sky Blue",
      rating: "4.9",
      reviews: "3.5k",
      details: { "Fabric": "Poly Cotton", "Fit": "Slim Fit", "Sleeve": "Full Sleeve", "Occasion": "Office/Events", "Wash": "Machine Wash" }
    },
    {
      id: 9,
      name: 'Rust Brown Cotton Shirt',
      category: "Men",
      sub: "Casual • Cotton",
      fabric: "Cotton",
      price: 1299,
      oldPrice: 2599,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp9.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp9_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp9_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp9_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp9_4.png"
      ],
      tag: "Trending",
      color: "Rust Brown",
      rating: "4.6",
      reviews: "1.4k",
      details: { "Fabric": "100% Cotton", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Style": "Casual", "Wash": "Machine Wash" }
    },
    {
      id: 10,
      name: 'Grey Washed Denim Shirt',
      category: "Men",
      sub: "Casual • Denim",
      fabric: "Denim",
      price: 1599,
      oldPrice: 3199,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp10.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp10_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp10_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp10_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp10_4.png"
      ],
      tag: "New Arrival",
      color: "Grey Washed",
      rating: "4.5",
      reviews: "0.9k",
      details: { "Fabric": "Washed Denim", "Fit": "Slim Fit", "Sleeve": "Full Sleeve", "Style": "Street Casual", "Wash": "Machine Wash" }
    },
    {
      id: 11,
      name: 'Sage Green Linen Shirt',
      category: "Men",
      sub: "Casual • Linen",
      fabric: "Linen",
      price: 1699,
      oldPrice: 3399,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp11.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp11_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp11_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp11_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp11_4.png"
      ],
      tag: "Summer Edit",
      color: "Sage Green",
      rating: "4.7",
      reviews: "1.3k",
      details: { "Fabric": "Pure Linen", "Fit": "Relaxed Fit", "Sleeve": "Full Sleeve", "Breathable": "High", "Wash": "Gentle Wash" }
    },
    {
      id: 12,
      name: 'Charcoal Grey Formal Shirt',
      category: "Men",
      sub: "Casual • Formal",
      fabric: "Formal",
      price: 2099,
      oldPrice: 4199,
      images: [
        "/Fashion/Men/Shirts/Casual/Products/csmfp12.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp12_1.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp12_2.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp12_3.png",
        "/Fashion/Men/Shirts/Casual/Products/csmfp12_4.png"
      ],
      tag: "Premium",
      color: "Charcoal Grey",
      rating: "4.8",
      reviews: "2.0k",
      details: { "Fabric": "Lycra Cotton", "Fit": "Slim Fit", "Sleeve": "Full Sleeve", "Occasion": "Formal/Party", "Wash": "Machine Wash" }
    }
  ];

  // Filtered products
  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(p => p.fabric === activeFilter);

  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item =>
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  const getSizes = () => ["S", "M", "L", "XL"];

  // Slideshow in modal
  useEffect(() => {
    let interval;
    if (selectedProduct && !isPaused) {
      interval = setInterval(() => {
        setActiveImgIndex((prev) => (prev + 1) % selectedProduct.images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [selectedProduct, isPaused]);

  // Lock scroll when modal open
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

  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
    setActiveImgIndex(0);
    setIsPaused(false);
    setSelectedSize(getSizes()[0]);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setActiveImgIndex(0);
    setSelectedSize("");
    setIsPaused(false);
  };

  const handleAddToCart = async (product, size) => {
    if (!size) { alert("Please select a size"); return; }
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(product, 1, size, product.color);
    setIsAddingToCart(false);
  };

  const handleGoToCart = async () => {
    const currentQuantity = getCartQuantity(selectedProduct.id, selectedSize);
    if (currentQuantity === 0) await handleAddToCart(selectedProduct, selectedSize);
    navigate('/cart');
  };

  const handleBuyNow = async () => {
    const currentQuantity = getCartQuantity(selectedProduct.id, selectedSize);
    if (currentQuantity === 0) await handleAddToCart(selectedProduct, selectedSize);
    navigate('/cart');
  };

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

      {/* ====== HERO BANNER ====== */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="/Fashion/Men/Shirts/Casual/csmfhero.png"
          alt="Casual Shirts"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-16 text-center px-4">
          <p className="text-amber-400 text-[9px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.6em] uppercase font-semibold mb-2 sm:mb-3">
            Men • Casual • Collection
          </p>
          <h1 className="text-white font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide capitalize">
            Casual Shirts
          </h1>
          <div className="h-[1px] w-12 sm:w-16 bg-amber-400/60 mt-3 sm:mt-5"></div>
          <p className="text-white/70 text-[10px] sm:text-xs mt-3 tracking-[0.2em] uppercase">
            {products.length} Premium Styles
          </p>
        </div>
      </div>

      {/* ====== FILTER BAR ====== */}
      <div className="sticky top-[68px] md:top-[220px] z-[80] bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold whitespace-nowrap mr-1">
            Filter:
          </span>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-slate-900 hover:text-slate-900'
              }`}
            >
              {filter}
              {filter !== "All" && (
                <span className="ml-1 text-[9px] opacity-60">
                  ({products.filter(p => p.fabric === filter).length})
                </span>
              )}
            </button>
          ))}
          {activeFilter !== "All" && (
            <button
              onClick={() => setActiveFilter("All")}
              className="whitespace-nowrap px-3 py-1.5 rounded-full text-[10px] font-bold text-orange-600 border border-orange-200 hover:bg-orange-50 transition ml-auto"
            >
              Clear ✕
            </button>
          )}
        </div>
      </div>

      {/* ====== PRODUCT GRID ====== */}
      <div className="bg-[#f8f7f4] py-12 px-4 sm:px-6 md:px-12 lg:px-24 min-h-screen font-sans text-slate-900">

        {/* Results count */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <p className="text-xs text-gray-400 tracking-widest uppercase">
            Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> of {products.length} styles
          </p>
          {activeFilter !== "All" && (
            <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {activeFilter}
            </span>
          )}
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-10 sm:gap-y-14 md:gap-y-20 mb-16">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group cursor-pointer relative"
                onClick={() => handleOpenProduct(p)}
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-white transition-all duration-1000 group-hover:shadow-2xl group-hover:-translate-y-3 rounded-[16px] sm:rounded-[24px]">
                  <img
                    src={p.images[0]}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    alt={p.name}
                  />
                  <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-1.5 text-[7px] sm:text-[8px] font-black uppercase tracking-widest rounded-full">
                    {p.tag}
                  </div>
                  {/* Fabric badge */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/70 text-white px-2 py-0.5 text-[7px] sm:text-[8px] uppercase tracking-wider rounded-full font-bold">
                    {p.fabric}
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 md:mt-8 space-y-1 sm:space-y-2 px-1 text-center md:text-left">
                  <p className="text-[8px] sm:text-[9px] text-orange-800 font-bold uppercase tracking-[0.2em] opacity-50">{p.sub}</p>
                  <h3 className="text-[12px] sm:text-[13px] md:text-[14px] font-bold tracking-wide uppercase group-hover:text-orange-700 leading-tight">{p.name}</h3>
                  <p className="font-medium text-sm sm:text-base md:text-lg tracking-tight text-slate-700">
                    ₹{p.price.toLocaleString()}
                    <span className="text-slate-300 line-through ml-2 text-[11px] sm:text-[13px]">₹{p.oldPrice.toLocaleString()}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">👕</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">No products found for "{activeFilter}"</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-6 px-6 py-2 bg-slate-900 text-white text-xs uppercase tracking-widest rounded-full hover:bg-orange-600 transition"
            >
              View All
            </button>
          </div>
        )}
      </div>

      {/* ====== MODAL ====== */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center animate-in fade-in duration-300"
          style={{ padding: '120px 25px 25px 25px' }}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={handleClose}
            style={{ zIndex: -1 }}
          ></div>

          <div className="relative bg-white w-full max-w-7xl h-full md:h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[20px] md:rounded-[40px] animate-in zoom-in-95 duration-500 ring-1 ring-slate-100">

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-[95] w-9 h-9 flex items-center justify-center bg-white hover:bg-slate-100 rounded-full text-slate-600 hover:text-black transition-all shadow-lg text-base font-bold"
            >✕</button>

            {/* LEFT: Images */}
            <div className="md:w-3/5 bg-[#f3f2ee] flex flex-row h-[62vh] md:h-full relative overflow-hidden">
              {/* Thumbnails */}
              <div
                className="flex flex-col gap-2 p-2 z-10 w-1/4 justify-center overflow-y-auto"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {selectedProduct.images.map((img, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveImgIndex(i)}
                    onClick={() => setActiveImgIndex(i)}
                    className={`w-full h-14 md:h-20 cursor-pointer overflow-hidden transition-all duration-500 rounded-lg ${
                      activeImgIndex === i
                        ? 'ring-2 ring-orange-500 shadow-xl scale-105'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </div>
                ))}
              </div>

              {/* Main image */}
              <div className="relative w-3/4 h-full overflow-hidden">
                <img
                  key={selectedProduct.id + activeImgIndex}
                  src={selectedProduct.images[activeImgIndex]}
                  className="w-full h-full object-cover transition-all duration-700"
                  alt=""
                />
              </div>
            </div>

            {/* RIGHT: Info */}
            <div className="md:w-2/5 p-6 sm:p-10 md:p-16 overflow-y-auto flex flex-col bg-[#f4f3f0] border-l border-slate-100">
              <div className="mb-auto">
                <p className="text-orange-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-3">{selectedProduct.sub}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-slate-950 leading-tight uppercase mb-6">{selectedProduct.name}</h2>

                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
                  <span className="text-[11px] font-bold bg-slate-950 text-white px-4 py-1.5 rounded-full">★ {selectedProduct.rating}</span>
                  <span className="text-slate-500 text-[10px] font-bold tracking-widest">{selectedProduct.reviews} REVIEWS</span>
                </div>

                <div className="flex items-baseline gap-4 mb-6 sm:mb-10">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tighter text-slate-950">₹{selectedProduct.price.toLocaleString()}</span>
                  <span className="text-slate-300 line-through text-lg sm:text-xl">₹{selectedProduct.oldPrice.toLocaleString()}</span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  {Object.entries(selectedProduct.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-[13px] border-b border-slate-200/60 pb-2 sm:pb-3 group/item">
                      <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold group-hover/item:text-slate-800 transition-colors">{key}</span>
                      <span className="text-slate-950 font-bold text-sm">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-[13px] pt-2">
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Base Color</span>
                    <span className="text-black font-bold border-b-2 border-orange-500 pb-1">{selectedProduct.color}</span>
                  </div>
                </div>

                {/* Size selector */}
                <div className="mb-8 sm:mb-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 sm:mb-5">Select Size</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {getSizes().map(s => {
                      const cartQty = getCartQuantity(selectedProduct.id, s);
                      return (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`h-10 sm:h-12 min-w-[55px] sm:min-w-[65px] text-[11px] font-bold transition-all rounded-2xl border ${
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

              {/* Action buttons */}
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-slate-200/60">
                {getCartQuantity(selectedProduct.id, selectedSize) > 0 ? (
                  <div className="flex items-center gap-3 h-14 sm:h-16 animate-in slide-in-from-bottom-2">
                    <div className="flex items-center justify-between bg-slate-100/50 h-full px-5 sm:px-8 flex-1 max-w-[140px] sm:max-w-[160px] rounded-full border border-slate-200/60 shadow-inner">
                      <button
                        onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, -1)}
                        className="text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                      >−</button>
                      <span className="font-bold text-lg text-slate-950">
                        {getCartQuantity(selectedProduct.id, selectedSize)}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, 1)}
                        className="text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                      >+</button>
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
                    className={`w-full border-2 border-slate-950 text-slate-950 font-bold h-14 sm:h-16 text-[11px] uppercase tracking-[0.3em] rounded-full transition-all transform active:scale-95 ${
                      isAddingToCart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-950 hover:text-white'
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
                  className="w-full bg-slate-950 text-white font-bold h-14 sm:h-16 text-[11px] uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-black transition-all transform active:scale-95 disabled:opacity-50"
                >
                  {isAddingToCart ? 'Adding...' : 'Buy Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CasualShirtMenFashionProducts;