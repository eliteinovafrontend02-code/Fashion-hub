// FormalShoesMenFootwear.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { useCart } from '../CartContext';


const FormalShoesMenFootwear = () => {
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

  const formalShoesProducts = [
    {
      id: 1,
      name: "Classic Leather Oxfords",
      fabric: "Leather",
      price: 3999,
      oldPrice: 6499,
      rating: 4.8,
      reviews: 2345,
      tag: "Bestseller",
      sub: "Premium Leather",
      description: "Timeless classic leather Oxford shoes with a refined look. The premium leather construction and elegant design make them perfect for formal events, business meetings, and special occasions.",
      features: ["Premium Leather", "Oxford Style", "Lace-up Closure", "Cushioned Insole", "Formal Look"],
      color: "Black",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp1_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp1_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp1_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp1_4.jpg"
      ]
    },
    {
      id: 2,
      name: "Suede Derby Shoes",
      fabric: "Suede",
      price: 4499,
      oldPrice: 6999,
      rating: 4.7,
      reviews: 1876,
      tag: "Trending",
      sub: "Premium Suede",
      description: "Elegant suede Derby shoes with a sophisticated design. The premium suede material and comfortable fit make them perfect for formal events, office wear, and smart-casual occasions.",
      features: ["Premium Suede", "Derby Style", "Lace-up Closure", "Cushioned Sole", "Versatile"],
      color: "Brown",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp2_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp2_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp2_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp2_4.jpg"
      ]
    },
    {
      id: 3,
      name: "Leather Monk Strap",
      fabric: "Leather",
      price: 4699,
      oldPrice: 7299,
      rating: 4.6,
      reviews: 1567,
      tag: "Premium",
      sub: "Premium Leather",
      description: "Sophisticated leather monk strap shoes with a unique design. The premium leather and distinctive monk strap closure make them perfect for formal events and business meetings.",
      features: ["Premium Leather", "Monk Strap Style", "Buckle Closure", "Cushioned Insole", "Formal Look"],
      color: "Brown",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp3_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp3_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp3_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp3_4.jpg"
      ]
    },
    {
      id: 4,
      name: "Suede Tassel Loafers",
      fabric: "Suede",
      price: 3799,
      oldPrice: 5999,
      rating: 4.5,
      reviews: 1234,
      tag: "Classic",
      sub: "Premium Suede",
      description: "Elegant suede tassel loafers with a classic design. The premium suede and tassel detailing make them perfect for formal events, office wear, and special occasions.",
      features: ["Premium Suede", "Tassel Loafer Style", "Slip-on", "Comfortable Fit", "Classic Look"],
      color: "Navy",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp4.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp4_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp4_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp4_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp4_4.jpg"
      ]
    },
    {
      id: 5,
      name: "Leather Wingtip Brogues",
      fabric: "Leather",
      price: 5199,
      oldPrice: 7999,
      rating: 4.8,
      reviews: 987,
      tag: "Premium",
      sub: "Luxury Leather",
      description: "Exquisite leather wingtip brogues with intricate detailing. The premium leather and classic wingtip design make them perfect for formal events, weddings, and special occasions.",
      features: ["Premium Leather", "Wingtip Style", "Lace-up Closure", "Cushioned Insole", "Intricate Detailing"],
      color: "Tan",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp5.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp5_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp5_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp5_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp5_4.jpg"
      ]
    },
    {
      id: 6,
      name: "Suede Chelsea Boots",
      fabric: "Suede",
      price: 4999,
      oldPrice: 7699,
      rating: 4.4,
      reviews: 876,
      tag: "Trending",
      sub: "Premium Suede",
      description: "Stylish suede Chelsea boots with a sleek design. The premium suede and elastic side panels make them perfect for formal and semi-formal occasions.",
      features: ["Premium Suede", "Chelsea Style", "Elastic Side Panels", "Cushioned Sole", "Versatile"],
      color: "Black",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp6.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp6_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp6_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp6_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp6_4.jpg"
      ]
    },
    {
      id: 7,
      name: "Leather Cap Toe Oxfords",
      fabric: "Leather",
      price: 4299,
      oldPrice: 6699,
      rating: 4.7,
      reviews: 1123,
      tag: "Bestseller",
      sub: "Premium Leather",
      description: "Classic leather cap toe Oxford shoes with a refined look. The premium leather and cap toe design make them perfect for business meetings, formal events, and office wear.",
      features: ["Premium Leather", "Cap Toe Style", "Lace-up Closure", "Cushioned Insole", "Formal Look"],
      color: "Black",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp7.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp7_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp7_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp7_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp7_4.jpg"
      ]
    },
    {
      id: 8,
      name: "Suede Penny Loafers",
      fabric: "Suede",
      price: 3599,
      oldPrice: 5599,
      rating: 4.6,
      reviews: 654,
      tag: "New",
      sub: "Premium Suede",
      description: "Elegant suede penny loafers with a classic design. The premium suede and timeless style make them perfect for formal events, office wear, and smart-casual occasions.",
      features: ["Premium Suede", "Penny Loafer Style", "Slip-on", "Comfortable Fit", "Classic Look"],
      color: "Brown",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp8.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp8_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp8_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp8_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp8_4.jpg"
      ]
    },
    {
      id: 9,
      name: "Leather Double Monk Strap",
      fabric: "Leather",
      price: 5499,
      oldPrice: 8499,
      rating: 4.9,
      reviews: 789,
      tag: "Premium",
      sub: "Luxury Leather",
      description: "Exquisite leather double monk strap shoes with a sophisticated design. The premium leather and double buckle detailing make them perfect for formal events and special occasions.",
      features: ["Premium Leather", "Double Monk Strap", "Buckle Closure", "Cushioned Insole", "Luxury Look"],
      color: "Brown",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp9.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp9_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp9_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp9_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp9_4.jpg"
      ]
    },
    {
      id: 10,
      name: "Suede Wholecut Oxfords",
      fabric: "Suede",
      price: 4799,
      oldPrice: 7499,
      rating: 4.5,
      reviews: 1345,
      tag: "Classic",
      sub: "Premium Suede",
      description: "Elegant suede wholecut Oxford shoes with a seamless design. The premium suede and minimalist style make them perfect for formal events, weddings, and special occasions.",
      features: ["Premium Suede", "Wholecut Style", "Lace-up Closure", "Cushioned Insole", "Minimalist Design"],
      color: "Navy",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp10.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp10_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp10_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp10_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp10_4.jpg"
      ]
    },
    {
      id: 11,
      name: "Leather Dress Boots",
      fabric: "Leather",
      price: 5599,
      oldPrice: 8699,
      rating: 4.8,
      reviews: 567,
      tag: "Premium",
      sub: "Luxury Leather",
      description: "Sophisticated leather dress boots with a refined design. The premium leather and elegant style make them perfect for formal events, business meetings, and special occasions.",
      features: ["Premium Leather", "Dress Boot Style", "Lace-up Closure", "Cushioned Insole", "Formal Look"],
      color: "Black",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp11.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp11_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp11_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp11_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp11_4.jpg"
      ]
    },
    {
      id: 12,
      name: "Suede Opera Pumps",
      fabric: "Suede",
      price: 3299,
      oldPrice: 5199,
      rating: 4.3,
      reviews: 2345,
      tag: "Essential",
      sub: "Premium Suede",
      description: "Classic suede opera pumps with a timeless design. The premium suede and elegant style make them perfect for formal events, parties, and special occasions.",
      features: ["Premium Suede", "Opera Pump Style", "Slip-on", "Comfortable Fit", "Classic Look"],
      color: "Black",
      images: [
        "/Footwear/Men/Shoes/Formal/Products/fsmfp12.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp12_1.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp12_2.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp12_3.jpg",
        "/Footwear/Men/Shoes/Formal/Products/fsmfp12_4.jpg"
      ]
    }
  ];

  const filters = ['all', 'Leather', 'Suede'];
  const filteredProducts = activeFilter === 'all'
    ? formalShoesProducts
    : formalShoesProducts.filter(p => p.fabric === activeFilter);

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
            src="/Footwear/Men/Shoes/Formal"
            alt="Men's Formal Shoes Collection"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = "/Footwear/Men/Shoes/Formal/fsmfbanner.png"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 md:pb-20">
            <div className="text-center text-white px-4">
              <p className="text-amber-300 tracking-[0.2em] text-[8px] md:text-xs mb-2 md:mb-3 font-semibold">12 REFINED SHOES</p>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide">The Formal Shoe Edit</h1>
              <div className="h-[1px] w-8 md:w-12 bg-amber-400 mx-auto mt-3 md:mt-4 mb-3 md:mb-4"></div>
              <p className="text-xs md:text-base font-light tracking-wide max-w-lg mx-auto">Elevate your formal wardrobe with timeless elegance</p>
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
                      <img src={img} className="w-full h-full object-contain" alt="" />
                    </div>
                  ))}
                </div>
                
                {/* Main Image */}
                <div className="relative w-3/4 h-full overflow-hidden">
                  <img 
                    key={selectedProduct.id + activeImgIndex} 
                    src={selectedProduct.images[activeImgIndex]} 
                    className="w-full h-full object-contain transition-all duration-700" 
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
                    Formal Shoes · {selectedProduct.fabric}
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
                      <span className="text-slate-950 font-bold">Formal</span>
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

export default FormalShoesMenFootwear;