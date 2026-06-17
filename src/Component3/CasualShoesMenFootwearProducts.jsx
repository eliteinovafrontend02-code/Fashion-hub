// CasualShoesMenFootwear.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { useCart } from '../CartContext';


const CasualShoesMenFootwear = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('8');
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const navigate = useNavigate();
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const casualShoesProducts = [
    {
      id: 1,
      name: "Classic Leather Sneakers",
      fabric: "Leather",
      price: 2499,
      oldPrice: 3999,
      rating: 4.8,
      reviews: 2345,
      tag: "Bestseller",
      sub: "Premium Leather",
      description: "Timeless classic leather sneakers with a comfortable fit. The premium leather construction and cushioned sole make them perfect for daily wear, casual outings, and weekend adventures.",
      features: ["Premium Leather", "Cushioned Sole", "Lace-up Closure", "Breathable Lining", "Durable"],
      color: "White",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp1_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp1_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp1_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp1_4.png"
      ]
    },
    {
      id: 2,
      name: "Suede Loafers",
      fabric: "Suede",
      price: 2999,
      oldPrice: 4699,
      rating: 4.7,
      reviews: 1876,
      tag: "Trending",
      sub: "Premium Suede",
      description: "Elegant suede loafers with a sophisticated design. The premium suede material and comfortable fit make them perfect for casual office wear, parties, and smart-casual occasions.",
      features: ["Premium Suede", "Slip-on Style", "Comfortable Fit", "Durable Sole", "Versatile"],
      color: "Brown",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp2_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp2_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp2_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp2_4.png"
      ]
    },
    {
      id: 3,
      name: "Canvas Casual Sneakers",
      fabric: "Canvas",
      price: 1799,
      oldPrice: 2899,
      rating: 4.6,
      reviews: 1567,
      tag: "Popular",
      sub: "Durable Canvas",
      description: "Lightweight canvas sneakers perfect for everyday wear. The breathable canvas material and flexible sole make them ideal for casual outings, travel, and summer days.",
      features: ["Durable Canvas", "Lightweight", "Lace-up Closure", "Flexible Sole", "Breathable"],
      color: "Navy",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp3_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp3_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp3_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp3_4.png"
      ]
    },
    {
      id: 4,
      name: "Leather Oxford Shoes",
      fabric: "Leather",
      price: 3499,
      oldPrice: 5499,
      rating: 4.5,
      reviews: 1234,
      tag: "Classic",
      sub: "Premium Leather",
      description: "Classic leather Oxford shoes with a refined look. The premium leather and elegant design make them perfect for formal events, office wear, and special occasions.",
      features: ["Premium Leather", "Oxford Style", "Lace-up Closure", "Cushioned Insole", "Formal Look"],
      color: "Black",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp4.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp4_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp4_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp4_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp4_4.png"
      ]
    },
    {
      id: 5,
      name: "Suede Desert Boots",
      fabric: "Suede",
      price: 3299,
      oldPrice: 5199,
      rating: 4.8,
      reviews: 987,
      tag: "Premium",
      sub: "Luxury Suede",
      description: "Stylish suede desert boots with a rugged yet refined look. The premium suede and comfortable fit make them perfect for casual outings, travel, and weekend getaways.",
      features: ["Premium Suede", "Boot Style", "Lace-up Closure", "Cushioned Sole", "Versatile"],
      color: "Tan",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp5.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp5_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp5_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp5_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp5_4.png"
      ]
    },
    {
      id: 6,
      name: "Canvas Slip-ons",
      fabric: "Canvas",
      price: 1599,
      oldPrice: 2599,
      rating: 4.4,
      reviews: 876,
      tag: "Essential",
      sub: "Soft Canvas",
      description: "Comfortable canvas slip-ons for effortless style. The soft canvas material and easy slip-on design make them perfect for casual days, beach trips, and summer outings.",
      features: ["Soft Canvas", "Slip-on Style", "Comfortable Fit", "Lightweight", "Casual Look"],
      color: "Grey",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp6.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp6_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp6_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp6_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp6_4.png"
      ]
    },
    {
      id: 7,
      name: "Leather Chelsea Boots",
      fabric: "Leather",
      price: 3799,
      oldPrice: 5999,
      rating: 4.7,
      reviews: 1123,
      tag: "Bestseller",
      sub: "Premium Leather",
      description: "Sophisticated leather Chelsea boots with a sleek design. The premium leather and elastic side panels make them perfect for casual and semi-formal occasions.",
      features: ["Premium Leather", "Chelsea Style", "Elastic Side Panels", "Cushioned Sole", "Versatile"],
      color: "Brown",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp7.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp7_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp7_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp7_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp7_4.png"
      ]
    },
    {
      id: 8,
      name: "Suede Penny Loafers",
      fabric: "Suede",
      price: 2799,
      oldPrice: 4399,
      rating: 4.6,
      reviews: 654,
      tag: "New",
      sub: "Premium Suede",
      description: "Elegant suede penny loafers with a classic design. The premium suede and timeless style make them perfect for casual office wear, parties, and smart-casual events.",
      features: ["Premium Suede", "Penny Loafer Style", "Slip-on", "Comfortable Fit", "Classic Look"],
      color: "Navy",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp8.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp8_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp8_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp8_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp8_4.png"
      ]
    },
    {
      id: 9,
      name: "Canvas High Tops",
      fabric: "Canvas",
      price: 1999,
      oldPrice: 3199,
      rating: 4.5,
      reviews: 789,
      tag: "Trending",
      sub: "Durable Canvas",
      description: "Stylish canvas high-top sneakers with a modern look. The durable canvas and high-top design make them perfect for streetwear, casual outings, and fashion-forward looks.",
      features: ["Durable Canvas", "High-top Style", "Lace-up Closure", "Comfortable Sole", "Streetwear"],
      color: "Black",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp9.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp9_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp9_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp9_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp9_4.png"
      ]
    },
    {
      id: 10,
      name: "Leather Moccasins",
      fabric: "Leather",
      price: 2699,
      oldPrice: 4299,
      rating: 4.4,
      reviews: 1345,
      tag: "Essential",
      sub: "Premium Leather",
      description: "Comfortable leather moccasins with a relaxed style. The premium leather and soft sole make them perfect for casual days, driving, and weekend relaxation.",
      features: ["Premium Leather", "Moccasin Style", "Slip-on", "Soft Sole", "Comfortable"],
      color: "Tan",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp10.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp10_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp10_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp10_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp10_4.png"
      ]
    },
    {
      id: 11,
      name: "Suede Chukka Boots",
      fabric: "Suede",
      price: 3599,
      oldPrice: 5699,
      rating: 4.9,
      reviews: 567,
      tag: "Premium",
      sub: "Luxury Suede",
      description: "Exquisite suede chukka boots with a sophisticated design. The premium suede and refined style make them perfect for casual formal events, office wear, and special occasions.",
      features: ["Premium Suede", "Chukka Style", "Lace-up Closure", "Cushioned Insole", "Elegant Design"],
      color: "Brown",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp11.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp11_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp11_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp11_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp11_4.png"
      ]
    },
    {
      id: 12,
      name: "Canvas Espadrilles",
      fabric: "Canvas",
      price: 1299,
      oldPrice: 2099,
      rating: 4.3,
      reviews: 2345,
      tag: "Sale",
      sub: "Soft Canvas",
      description: "Lightweight canvas espadrilles with a summer-ready design. The soft canvas and jute sole make them perfect for beach days, vacations, and casual summer outings.",
      features: ["Soft Canvas", "Espadrille Style", "Slip-on", "Jute Sole", "Summer Essential"],
      color: "Beige",
      images: [
        "/Footwear/Men/Shoes/Casual/Products/csmfp12.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp12_1.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp12_2.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp12_3.png",
        "/Footwear/Men/Shoes/Casual/Products/csmfp12_4.png"
      ]
    }
  ];

  const filters = ['all', 'Leather', 'Suede', 'Canvas'];
  const filteredProducts = activeFilter === 'all'
    ? casualShoesProducts
    : casualShoesProducts.filter(p => p.fabric === activeFilter);

  // Shoe sizes
  const getSizes = () => ["6", "7", "8", "9", "10", "11", "12"];

  // Get cart quantity for a product
  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item => 
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  // Open full product modal (click on product card)
  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
    setActiveImgIndex(0);
    setIsPaused(false);
    setSelectedSize('8');
  };

  // Close full product modal
  const handleCloseProduct = () => {
    setSelectedProduct(null);
    setActiveImgIndex(0);
    setSelectedSize('8');
    setIsPaused(false);
  };

  const discount = (p) => Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

  // Add to cart function using CartContext
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
  const handleGoToCart = async (product, size) => {
    const currentQuantity = getCartQuantity(product.id, size);
    
    if (currentQuantity === 0) {
      await handleAddToCart(product, size);
    }
    navigate('/cart');
  };

  // Handle "Buy Now"
  const handleBuyNow = async (product, size) => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    
    const currentQuantity = getCartQuantity(product.id, size);
    
    if (currentQuantity === 0) {
      addToCart(product, 1, size, product.color);
    }
    navigate('/checkout');
  };

  // Handle update quantity
  const handleUpdateQuantity = (productId, size, delta, color) => {
    const currentQty = getCartQuantity(productId, size);
    const newQty = currentQty + delta;
    
    if (newQty <= 0) {
      removeItem(productId, size, color);
    } else {
      updateQuantity(productId, newQty, size, color);
    }
  };

  // Effect for slideshow in full modal
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

  return (
    <>
      <Navbar />
      <div className="bg-[#faf8f5] min-h-screen font-sans">
        
        {/* Hero Section */}
        <section className="relative h-[30vh] md:h-[55vh] overflow-hidden">
          <img
            src="/Footwear/Men/Shoes/Casual"
            alt="Men's Casual Shoes Collection"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = "/Footwear/Men/Shoes/Casual/csmfbanner.png"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 md:pb-20">
            <div className="text-center text-white px-4">
              <p className="text-amber-300 tracking-[0.2em] text-[8px] md:text-xs mb-2 md:mb-3 font-semibold">12 STYLISH SHOES</p>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide">The Casual Shoe Edit</h1>
              <div className="h-[1px] w-8 md:w-12 bg-amber-400 mx-auto mt-3 md:mt-4 mb-3 md:mb-4"></div>
              <p className="text-xs md:text-base font-light tracking-wide max-w-lg mx-auto">Step up your style with premium casual footwear</p>
            </div>
          </div>
        </section>

        {/* Filter Pills */}
        <div className="sticky top-0 z-20 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-gray-200 py-3 md:py-4 px-3 md:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-3">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 md:px-6 py-1 md:py-2 text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] rounded-full transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'bg-transparent text-gray-600 border border-gray-300 hover:border-black hover:text-black'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>
            <p className="text-center text-[9px] md:text-[10px] text-gray-400 mt-2 md:mt-3 tracking-wide">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'shoe' : 'shoes'} available
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <section className="py-8 md:py-16 px-3 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => handleOpenProduct(product)}
              >
                <div className="relative overflow-hidden bg-[#f0ebe3] rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-sm px-1.5 md:px-2.5 py-0.5 md:py-1 text-[7px] md:text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {product.tag}
                  </span>
                  {/* Quick View button - Desktop only */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button
                      className="bg-white text-black px-3 md:px-5 py-1.5 md:py-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] rounded-full hover:bg-black hover:text-white transition-colors shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenProduct(product);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-2 md:mt-3 px-0.5 md:px-1">
                  <p className="text-[7px] md:text-[9px] text-amber-700 uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold mb-0.5">Shoes · {product.fabric}</p>
                  <h3 className="text-[11px] md:text-sm font-bold text-gray-800 uppercase tracking-wide group-hover:text-amber-700 transition-colors leading-tight truncate">{product.name}</h3>
                  <div className="mt-1 md:mt-1.5 flex items-center gap-1.5 md:gap-2 flex-wrap">
                    <span className="text-gray-800 font-bold text-[11px] md:text-sm">₹{product.price.toLocaleString()}</span>
                    <span className="text-gray-400 line-through text-[9px] md:text-xs">₹{product.oldPrice.toLocaleString()}</span>
                    <span className="text-[8px] md:text-[10px] font-bold text-green-600 bg-green-50 px-1.5 md:px-2 py-0.5 rounded-full">
                      {discount(product)}% OFF
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== PRODUCT MODAL ====== */}
        {selectedProduct && (
          <div 
            className="fixed inset-0 z-[90] flex items-center justify-center animate-in fade-in duration-300" style={{padding: isMobile ? '120px 25px 25px 25px' : '240px 40px 20px 40px'}} >
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={handleCloseProduct} style={{ zIndex: -1 }}></div>
            
            <div className="relative bg-white w-full max-w-7xl h-full md:h-[75vh] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[20px] md:rounded-[40px] animate-in zoom-in-95 duration-500 ring-1 ring-slate-100">
              
              {/* Close Button */}
              <button 
                onClick={handleCloseProduct} 
                className="absolute top-3 right-3 z-[95] w-9 h-9 flex items-center justify-center bg-white hover:bg-slate-100 rounded-full text-slate-600 hover:text-black transition-all shadow-lg text-base font-bold"
              >
                ✕
              </button>

              {/* LEFT SIDE: Image Gallery */}
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
                      className={`w-full h-14 md:h-28 cursor-pointer overflow-hidden transition-all duration-500 rounded-lg ${
                        activeImgIndex === i ? 'ring-2 ring-orange-500 shadow-xl scale-105' : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                </div>
                
                {/* Main Image */}
                <div className="relative w-3/4 h-full overflow-hidden">
                  <img 
                    key={selectedProduct.id + activeImgIndex} 
                    src={selectedProduct.images[activeImgIndex]} 
                    className="w-full h-full object-cover transition-all duration-700" 
                    alt={selectedProduct.name} 
                  />
                  
                  {/* Tag Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full shadow">
                    {selectedProduct.tag}
                  </span>
                  
                  {/* Discount Badge */}
                  <span className="absolute bottom-4 left-4 bg-green-500 text-white text-[8px] md:text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {discount(selectedProduct)}% OFF
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE: Product Info */}
              <div className="md:w-2/5 p-6 md:p-12 overflow-y-auto flex flex-col bg-[#f4f3f0] md:border-l border-slate-100">
                <div className="mb-auto">
                  <p className="text-orange-700 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-4">
                    Casual Shoes · {selectedProduct.fabric}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-serif italic text-slate-950 leading-tight uppercase mb-4 md:mb-6">
                    {selectedProduct.name}
                  </h2>
                  
                  <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8">
                    <span className="text-[10px] md:text-[11px] font-bold bg-slate-950 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                      ★ {selectedProduct.rating}
                    </span>
                    <span className="text-slate-500 text-[8px] md:text-[10px] font-bold tracking-widest">
                      {selectedProduct.reviews.toLocaleString()} REVIEWS
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3 md:gap-4 mb-4 md:mb-8 flex-wrap">
                    <span className="text-3xl md:text-5xl font-light tracking-tighter text-slate-950">
                      ₹{selectedProduct.price.toLocaleString()}
                    </span>
                    <span className="text-slate-300 line-through text-lg md:text-xl">
                      ₹{selectedProduct.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2 md:space-y-4 mb-4 md:mb-8">
                    <div className="flex justify-between text-xs md:text-[13px] border-b border-slate-200/60 pb-2 md:pb-3">
                      <span className="text-slate-500 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Material</span>
                      <span className="text-slate-950 font-bold">{selectedProduct.fabric}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-[13px] border-b border-slate-200/60 pb-2 md:pb-3">
                      <span className="text-slate-500 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Color</span>
                      <span className="text-black font-bold border-b-2 border-orange-500 pb-0.5 md:pb-1">{selectedProduct.color}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-[13px] border-b border-slate-200/60 pb-2 md:pb-3">
                      <span className="text-slate-500 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Style</span>
                      <span className="text-slate-950 font-bold">Casual</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                    {selectedProduct.description}
                  </p>

                  {/* Size Selection - Shoe Sizes */}
                  <div className="mb-4 md:mb-8">
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500 mb-2 md:mb-4">
                      Select Size (UK)
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-3">
                      {getSizes().map(s => {
                        const cartQty = getCartQuantity(selectedProduct.id, s);
                        return (
                          <button 
                            key={s} 
                            onClick={() => setSelectedSize(s)} 
                            className={`h-10 md:h-12 min-w-[45px] md:min-w-[55px] text-[10px] md:text-[11px] font-bold transition-all rounded-xl md:rounded-2xl border ${
                              selectedSize === s 
                                ? 'bg-slate-950 text-white border-slate-950 shadow-lg -translate-y-0.5 md:-translate-y-1' 
                                : 'border-slate-200/80 bg-white/50 text-slate-500 hover:border-slate-950 hover:text-slate-950 hover:bg-white'
                            }`}
                          >
                            {s}
                            {cartQty > 0 && selectedSize === s && (
                              <span className="ml-0.5 md:ml-1 text-[8px] md:text-xs">({cartQty})</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <p className="text-[8px] md:text-[9px] text-slate-400 mt-2">UK sizes - fits true to size</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-slate-200/60">
                  {getCartQuantity(selectedProduct.id, selectedSize) > 0 ? (
                    <div className="flex items-center gap-2 md:gap-3 h-14 md:h-16 animate-in slide-in-from-bottom-2">
                      <div className="flex items-center justify-between bg-slate-100/50 h-full px-5 md:px-8 flex-1 max-w-[120px] md:max-w-[160px] rounded-full border border-slate-200/60 shadow-inner">
                        <button 
                          onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, -1, selectedProduct.color)} 
                          className="text-lg md:text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                        >
                          −
                        </button>
                        <span className="font-bold text-base md:text-lg text-slate-950">
                          {getCartQuantity(selectedProduct.id, selectedSize)}
                        </span>
                        <button 
                          onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, 1, selectedProduct.color)} 
                          className="text-lg md:text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => handleGoToCart(selectedProduct, selectedSize)}
                        className="flex-1 bg-orange-700 text-white font-bold h-full text-[9px] md:text-[11px] uppercase tracking-widest rounded-full hover:bg-orange-800 transition-all shadow-[0_15px_30px_rgba(194,65,12,0.3)]"
                      >
                        Go To Cart
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleAddToCart(selectedProduct, selectedSize)} 
                      disabled={isAddingToCart}
                      className={`w-full border-2 border-slate-950 text-slate-950 font-bold h-14 md:h-16 text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full transition-all transform active:scale-95 ${
                        isAddingToCart 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-slate-950 hover:text-white'
                      }`}
                    >
                      {isAddingToCart ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                          Adding...
                        </span>
                      ) : 'Add to Cart'}
                    </button>
                  )}
                  
                  <button 
                    onClick={() => handleBuyNow(selectedProduct, selectedSize)}
                    disabled={isAddingToCart}
                    className="w-full bg-slate-950 text-white font-bold h-14 md:h-16 text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full shadow-2xl hover:bg-black transition-all transform active:scale-95 disabled:opacity-50"
                  >
                    {isAddingToCart ? 'Adding...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}



        <Footer />
        {/* ScrollButton - Hidden on mobile */}
        {!isMobile && <ScrollButton />}
      </div>
    </>
  );
};

export default CasualShoesMenFootwear;