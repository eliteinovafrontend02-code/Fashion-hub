// ShirtBoyKidsFashion.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { useCart } from '../CartContext';

const ShirtBoyKidsFashion = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
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

  const shirtBoyProducts = [
    {
      id: 1,
      name: "Classic White Cotton Shirt",
      fabric: "Cotton",
      price: 999,
      oldPrice: 1599,
      rating: 4.8,
      reviews: 2134,
      tag: "Bestseller",
      sub: "Pure Cotton",
      description: "Classic white cotton shirt for boys. Made from soft, breathable cotton fabric that keeps your little one comfortable all day. Perfect for school, parties, and family gatherings.",
      features: ["100% Pure Cotton", "Regular Fit", "Button-down collar", "Machine washable", "Comfortable wear"],
      color: "White",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp1_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp1_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp1_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp1_4.webp"
      ]
    },
    {
      id: 2,
      name: "Blue Linen Summer Shirt",
      fabric: "Linen",
      price: 1299,
      oldPrice: 1999,
      rating: 4.7,
      reviews: 1876,
      tag: "Trending",
      sub: "Pure Linen",
      description: "Lightweight blue linen shirt perfect for summer. The breathable linen fabric keeps your child cool and comfortable while looking stylish. Ideal for vacations and outdoor activities.",
      features: ["100% Pure Linen", "Relaxed Fit", "Classic collar", "Summer essential", "Breathable fabric"],
      color: "Blue",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp2_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp2_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp2_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp2_4.webp"
      ]
    },
    {
      id: 3,
      name: "Denim Casual Shirt",
      fabric: "Denim",
      price: 1499,
      oldPrice: 2299,
      rating: 4.6,
      reviews: 1567,
      tag: "Popular",
      sub: "Soft Denim",
      description: "Stylish denim shirt for boys with a soft, comfortable feel. The durable denim fabric is perfect for active kids who love to play and explore. Versatile for any casual occasion.",
      features: ["100% Cotton Denim", "Regular Fit", "Button front", "Durable fabric", "Machine washable"],
      color: "Blue Denim",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp3_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp3_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp3_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp3_4.webp"
      ]
    },
    {
      id: 4,
      name: "Red Checkered Cotton Shirt",
      fabric: "Cotton",
      price: 1099,
      oldPrice: 1699,
      rating: 4.5,
      reviews: 1234,
      tag: "Classic",
      sub: "Soft Cotton",
      description: "Classic red checkered cotton shirt for boys. The timeless pattern and comfortable cotton fabric make it a wardrobe staple. Perfect for casual outings and family photos.",
      features: ["100% Cotton", "Regular Fit", "Button-down collar", "Checkered pattern", "Machine washable"],
      color: "Red",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp4.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp4_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp4_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp4_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp4_4.webp"
      ]
    },
    {
      id: 5,
      name: "Grey Linen Casual Shirt",
      fabric: "Linen",
      price: 1199,
      oldPrice: 1899,
      rating: 4.4,
      reviews: 987,
      tag: "New",
      sub: "Pure Linen",
      description: "Stylish grey linen shirt for boys with a relaxed fit. The lightweight, breathable fabric is perfect for warm weather and casual occasions. Looks great with shorts or jeans.",
      features: ["100% Pure Linen", "Relaxed Fit", "Classic collar", "Lightweight", "Breathable"],
      color: "Grey",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp5.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp5_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp5_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp5_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp5_4.webp"
      ]
    },
    {
      id: 6,
      name: "Navy Cotton Polo Shirt",
      fabric: "Cotton",
      price: 899,
      oldPrice: 1399,
      rating: 4.5,
      reviews: 876,
      tag: "Essential",
      sub: "Premium Cotton",
      description: "Classic navy polo shirt in premium cotton. The comfortable knit fabric and stylish design make it perfect for school, sports, and casual outings. A must-have in every boy's wardrobe.",
      features: ["100% Premium Cotton", "Regular Fit", "Polo collar", "Button placket", "Versatile wear"],
      color: "Navy",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp6.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp6_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp6_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp6_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp6_4.webp"
      ]
    },
    {
      id: 7,
      name: "Black Denim Shirt",
      fabric: "Denim",
      price: 1599,
      oldPrice: 2499,
      rating: 4.7,
      reviews: 1123,
      tag: "Trending",
      sub: "Soft Denim",
      description: "Sleek black denim shirt for boys with a modern look. The soft, durable denim fabric provides comfort and style. Perfect for parties, outings, and special occasions.",
      features: ["100% Cotton Denim", "Regular Fit", "Button front", "Modern style", "Machine washable"],
      color: "Black",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp7.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp7_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp7_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp7_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp7_4.webp"
      ]
    },
    {
      id: 8,
      name: "pink Linen Shirt",
      fabric: "Linen",
      price: 1299,
      oldPrice: 1999,
      rating: 4.6,
      reviews: 654,
      tag: "Classic",
      sub: "Pure Linen",
      description: "Crisp pink linen shirt for boys with a sophisticated look. The lightweight, breathable linen fabric is perfect for summer weddings, family events, and formal occasions.",
      features: ["100% Pure Linen", "Slim Fit", "Spread collar", "Summer essential", "Dry clean recommended"],
      color: "pink",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp8.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp8_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp8_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp8_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp8_4.webp"
      ]
    },
    {
      id: 9,
      name: "Green Cotton Plaid Shirt",
      fabric: "Cotton",
      price: 999,
      oldPrice: 1599,
      rating: 4.4,
      reviews: 789,
      tag: "Popular",
      sub: "Soft Cotton",
      description: "Stylish green plaid cotton shirt for boys. The classic plaid pattern and comfortable cotton fabric make it perfect for casual wear, school, and family gatherings.",
      features: ["100% Cotton", "Regular Fit", "Button-down collar", "Plaid pattern", "Machine washable"],
      color: "Green",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp9.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp9_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp9_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp9_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp9_4.webp"
      ]
    },
    {
      id: 10,
      name: "Grey Denim Shirt",
      fabric: "Denim",
      price: 1399,
      oldPrice: 2199,
      rating: 4.5,
      reviews: 1345,
      tag: "Bestseller",
      sub: "Soft Denim",
      description: "Grey denim shirt with a casual, relaxed look. The soft denim fabric provides comfort and style for active boys. Perfect for everyday wear and outdoor adventures.",
      features: ["100% Cotton Denim", "Relaxed Fit", "Button front", "Light wash", "Durable fabric"],
      color: "Grey",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp10.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp10_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp10_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp10_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp10_4.webp"
      ]
    },
    {
      id: 11,
      name: "Striped Linen Shirt",
      fabric: "Linen",
      price: 1199,
      oldPrice: 1899,
      rating: 4.3,
      reviews: 567,
      tag: "New",
      sub: "Pure Linen",
      description: "Stylish striped linen shirt for boys with a beachy vibe. The breathable linen fabric and striped pattern make it perfect for summer vacations, beach outings, and casual events.",
      features: ["100% Pure Linen", "Relaxed Fit", "Classic collar", "Striped pattern", "Summer essential"],
      color: "Blue & White",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp11.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp11_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp11_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp11_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp11_4.webp"
      ]
    },
    {
      id: 12,
      name: "Cotton Oxford Shirt",
      fabric: "Cotton",
      price: 1099,
      oldPrice: 1699,
      rating: 4.6,
      reviews: 2345,
      tag: "Essential",
      sub: "Premium Cotton",
      description: "Classic Oxford cotton shirt for boys. The durable, comfortable fabric and timeless design make it perfect for school, family events, and formal occasions. A versatile wardrobe staple.",
      features: ["100% Oxford Cotton", "Regular Fit", "Button-down collar", "Durable fabric", "Machine washable"],
      color: "Light Brown",
      images: [
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp12.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp12_1.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp12_2.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp12_3.webp",
        "/Fashion/Kids/Boy/Shirts/Products/sbkfp12_4.webp"
      ]
    }
  ];

  const filters = ['all', 'Cotton', 'Linen', 'Denim'];
  const filteredProducts = activeFilter === 'all'
    ? shirtBoyProducts
    : shirtBoyProducts.filter(p => p.fabric === activeFilter);

  const getSizes = () => ["XS", "S", "M", "L", "XL"];

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
    setSelectedSize('M');
  };

  // Close full product modal
  const handleCloseProduct = () => {
    setSelectedProduct(null);
    setActiveImgIndex(0);
    setSelectedSize('M');
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
            src="/Fashion/Kids/Boy/Shirts"
            alt="Boys Shirts Collection"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = "/Fashion/Kids/Boy/Shirts/sbkfbanner.webp"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 md:pb-20">
            <div className="text-center text-white px-4">
              <p className="text-amber-300 tracking-[0.2em] text-[8px] md:text-xs mb-2 md:mb-3 font-semibold">12 STYLISH PIECES</p>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide">The Boys Shirt Edit</h1>
              <div className="h-[1px] w-8 md:w-12 bg-amber-400 mx-auto mt-3 md:mt-4 mb-3 md:mb-4"></div>
              <p className="text-xs md:text-base font-light tracking-wide max-w-lg mx-auto">Stylish shirts for every little gentleman</p>
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
              {filteredProducts.length} {filteredProducts.length === 1 ? 'shirt' : 'shirts'} available
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
                  <p className="text-[7px] md:text-[9px] text-amber-700 uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold mb-0.5">Shirt · {product.fabric}</p>
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
                    Boys Shirts · {selectedProduct.fabric}
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
                      <span className="text-slate-500 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Fabric</span>
                      <span className="text-slate-950 font-bold">{selectedProduct.fabric}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-[13px] border-b border-slate-200/60 pb-2 md:pb-3">
                      <span className="text-slate-500 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Color</span>
                      <span className="text-black font-bold border-b-2 border-orange-500 pb-0.5 md:pb-1">{selectedProduct.color}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-[13px] border-b border-slate-200/60 pb-2 md:pb-3">
                      <span className="text-slate-500 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Fit</span>
                      <span className="text-slate-950 font-bold">Regular</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                    {selectedProduct.description}
                  </p>

                  {/* Size Selection */}
                  <div className="mb-4 md:mb-8">
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500 mb-2 md:mb-4">
                      Select Size
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-3">
                      {getSizes().map(s => {
                        const cartQty = getCartQuantity(selectedProduct.id, s);
                        return (
                          <button 
                            key={s} 
                            onClick={() => setSelectedSize(s)} 
                            className={`h-10 md:h-12 min-w-[45px] md:min-w-[65px] text-[10px] md:text-[11px] font-bold transition-all rounded-xl md:rounded-2xl border ${
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

export default ShirtBoyKidsFashion;