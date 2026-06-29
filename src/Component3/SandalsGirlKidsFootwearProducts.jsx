// SandalsGirlKidsFootwear.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { useCart } from '../CartContext';

const SandalsGirlKidsFootwear = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('2');
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

  const sandalsGirlProducts = [
    {
    id: 1,
    name: "Classic Leather Baby Sandals",
    fabric: "Leather",
    price: 449,
    oldPrice: 749,
    rating: 4.9,
    reviews: 2345,
    tag: "Bestseller",
    sub: "Premium Soft Leather",
    description: "Classic leather baby sandals with a luxurious feel. The soft leather construction and cushioned footbed make them perfect for summer outings, parties, and elegant everyday wear.",
    features: ["Premium Soft Leather", "Cushioned Footbed", "Adjustable Straps", "Durable", "Luxurious Finish"],
    color: "Red",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp1_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp1_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp1_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp1_4.webp"
    ]
  },
  {
    id: 2,
    name: "Elegant Canvas Baby Bow Sandals",
    fabric: "Canvas",
    price: 299,
    oldPrice: 499,
    rating: 4.8,
    reviews: 1876,
    tag: "Trending",
    sub: "Premium Canvas",
    description: "Elegant canvas bow sandals for babies with a luxury feminine touch. The premium soft canvas and beautiful bow detail make them perfect for parties, outings, and stylish summer wear.",
    features: ["Premium Canvas", "Elegant Bow Detail", "Adjustable Straps", "Cushioned Footbed", "Luxury Feminine Design"],
    color: "Pink",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp2_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp2_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp2_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp2_4.webp"
    ]
  },
  {
    id: 3,
    name: "Luxury Synthetic Baby Glitter Sandals",
    fabric: "Synthetic",
    price: 399,
    oldPrice: 649,
    rating: 4.7,
    reviews: 1567,
    tag: "Popular",
    sub: "Premium Synthetic",
    description: "Luxury synthetic glitter sandals for babies that sparkle with elegance. The premium glitter material and comfortable design make them perfect for parties, celebrations, and special occasions.",
    features: ["Premium Synthetic", "Luxury Glitter Finish", "Adjustable Straps", "Cushioned Footbed", "Party Ready"],
    color: "Silver",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp3_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp3_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp3_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp3_4.webp"
    ]
  },
  {
    id: 4,
    name: "Designer Leather Baby Flower Sandals",
    fabric: "Leather",
    price: 549,
    oldPrice: 899,
    rating: 4.6,
    reviews: 1234,
    tag: "Classic",
    sub: "Premium Soft Leather",
    description: "Designer leather flower sandals for babies with a beautiful luxury design. The premium soft leather and elegant floral embellishments make them perfect for weddings, parties, and special occasions.",
    features: ["Premium Soft Leather", "Elegant Flower Embellishments", "Adjustable Straps", "Cushioned Insole", "Luxury Design"],
    color: "Yellow",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp4.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp4_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp4_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp4_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp4_4.webp"
    ]
  },
  {
    id: 5,
    name: "Colorful Canvas Baby Print Sandals",
    fabric: "Canvas",
    price: 249,
    oldPrice: 399,
    rating: 4.5,
    reviews: 987,
    tag: "Essential",
    sub: "Premium Canvas",
    description: "Colorful canvas print sandals for babies with fun luxury designs. The premium canvas and vibrant prints make them perfect for playdates, beach trips, and stylish summer outings.",
    features: ["Premium Canvas", "Fun Prints", "Adjustable Straps", "Comfortable Fit", "Luxury Playful Design"],
    color: "Multicolor",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp5.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp5_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp5_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp5_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp5_4.webp"
    ]
  },
  {
    id: 6,
    name: "Premium Synthetic Baby Slides",
    fabric: "Synthetic",
    price: 199,
    oldPrice: 349,
    rating: 4.4,
    reviews: 876,
    tag: "Sale",
    sub: "Premium Synthetic",
    description: "Premium synthetic baby slides for easy elegant wear. The lightweight material and slip-on design make them perfect for poolside, beach, and luxury casual summer days.",
    features: ["Premium Synthetic", "Slip-on Style", "Lightweight", "Cushioned Footbed", "Luxury Easy Wear"],
    color: "Lilac",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp6.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp6_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp6_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp6_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp6_4.webp"
    ]
  },
  {
    id: 7,
    name: "Chic Leather Baby Ankle Strap Sandals",
    fabric: "Leather",
    price: 599,
    oldPrice: 999,
    rating: 4.8,
    reviews: 1123,
    tag: "Bestseller",
    sub: "Premium Soft Leather",
    description: "Chic leather ankle strap sandals for babies with a sophisticated luxury look. The premium soft leather and stylish ankle strap make them perfect for parties, outings, and special occasions.",
    features: ["Premium Soft Leather", "Elegant Ankle Strap", "Adjustable Fit", "Cushioned Insole", "Luxury Chic Design"],
    color: "Tan",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp7.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp7_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp7_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp7_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp7_4.webp"
    ]
  },
  {
    id: 8,
    name: "Soft Canvas Baby Flip Flops",
    fabric: "Canvas",
    price: 179,
    oldPrice: 299,
    rating: 4.3,
    reviews: 654,
    tag: "Essential",
    sub: "Premium Canvas",
    description: "Soft canvas baby flip flops for easy luxury summer wear. The lightweight premium material and simple design make them perfect for beach, pool, and casual stylish days.",
    features: ["Premium Canvas", "Flip Flop Style", "Lightweight", "Comfortable Fit", "Luxury Summer Essential"],
    color: "Yellow",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp8.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp8_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp8_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp8_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp8_4.webp"
    ]
  },
  {
    id: 9,
    name: "Luxury Synthetic Baby Pearl Sandals",
    fabric: "Synthetic",
    price: 449,
    oldPrice: 749,
    rating: 4.6,
    reviews: 789,
    tag: "Trending",
    sub: "Premium Synthetic",
    description: "Luxury synthetic pearl sandals for babies with an elegant sophisticated design. The premium material and beautiful pearl embellishments make them perfect for weddings, parties, and special occasions.",
    features: ["Premium Synthetic", "Elegant Pearl Embellishments", "Adjustable Straps", "Cushioned Footbed", "Luxury Elegant Design"],
    color: "Ivory",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp9.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp9_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp9_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp9_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp9_4.webp"
    ]
  },
  {
    id: 10,
    name: "Classic Leather Baby T-Strap Sandals",
    fabric: "Leather",
    price: 499,
    oldPrice: 799,
    rating: 4.7,
    reviews: 1345,
    tag: "Classic",
    sub: "Premium Soft Leather",
    description: "Classic leather T-strap sandals for babies with a timeless luxury design. The premium soft leather and elegant T-strap style make them perfect for parties, outings, and everyday luxury wear.",
    features: ["Premium Soft Leather", "Elegant T-Strap Style", "Adjustable Buckle", "Cushioned Insole", "Luxury Classic Design"],
    color: "Black",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp10.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp10_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp10_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp10_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp10_4.webp"
    ]
  },
  {
    id: 11,
    name: "Elegant Canvas Baby Embellished Sandals",
    fabric: "Canvas",
    price: 349,
    oldPrice: 549,
    rating: 4.5,
    reviews: 567,
    tag: "New",
    sub: "Premium Canvas",
    description: "Elegant canvas embellished sandals for babies with sparkly luxury details. The premium canvas and beautiful embellishments make them perfect for parties, celebrations, and festive occasions.",
    features: ["Premium Canvas", "Elegant Embellished Detail", "Adjustable Straps", "Cushioned Footbed", "Luxury Festive Design"],
    color: "Coral",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp11.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp11_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp11_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp11_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp11_4.webp"
    ]
  },
  {
    id: 12,
    name: "Glowing Synthetic Baby Light-up Sandals",
    fabric: "Synthetic",
    price: 399,
    oldPrice: 649,
    rating: 4.4,
    reviews: 2345,
    tag: "Sale",
    sub: "Premium Synthetic",
    description: "Glowing light-up sandals with a luxury touch that babies will adore. The elegant lights and premium comfortable design make them perfect for parties, playdates, and magical evenings.",
    features: ["Premium Synthetic", "Elegant Light-up Feature", "Adjustable Straps", "Comfortable Fit", "Luxury Playful Design"],
    color: "Purple",
    images: [
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp12.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp12_1.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp12_2.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp12_3.webp",
      "/Footwear/Kids/Girl/Sandals/Products/sgkfp12_4.webp"
    ]
  }
  ];

  const filters = ['all', 'Leather', 'Canvas', 'Synthetic'];
  const filteredProducts = activeFilter === 'all'
    ? sandalsGirlProducts
    : sandalsGirlProducts.filter(p => p.fabric === activeFilter);

  // Kids sandal sizes (UK)
  const getSizes = () => ["1", "2", "3", "4", "5", "6"];

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
    setSelectedSize('2');
  };

  // Close full product modal
  const handleCloseProduct = () => {
    setSelectedProduct(null);
    setActiveImgIndex(0);
    setSelectedSize('2');
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
            src="/Footwear/Kids/Girl/Sandals"
            alt="Girls Sandals Collection"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = "/Footwear/Kids/Girl/Sandals/sgkfbanner.webp"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 md:pb-20">
            <div className="text-center text-white px-4">
              <p className="text-amber-300 tracking-[0.2em] text-[8px] md:text-xs mb-2 md:mb-3 font-semibold">12 PRETTY SANDALS</p>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide">The Girls Sandal Edit</h1>
              <div className="h-[1px] w-8 md:w-12 bg-amber-400 mx-auto mt-3 md:mt-4 mb-3 md:mb-4"></div>
              <p className="text-xs md:text-base font-light tracking-wide max-w-lg mx-auto">Summer style starts with pretty sandals</p>
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
              {filteredProducts.length} {filteredProducts.length === 1 ? 'sandal' : 'sandals'} available
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
                  <p className="text-[7px] md:text-[9px] text-amber-700 uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold mb-0.5">Sandals · {product.fabric}</p>
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
                    Girls Sandals · {selectedProduct.fabric}
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
                      <span className="text-slate-950 font-bold">Kids Sandals</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                    {selectedProduct.description}
                  </p>

                  {/* Size Selection - Kids Sizes */}
                  <div className="mb-4 md:mb-8">
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500 mb-2 md:mb-4">
                      Select Size (UK Kids)
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
                    <p className="text-[8px] md:text-[9px] text-slate-400 mt-2">UK kids sizes - fits true to size</p>
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

export default SandalsGirlKidsFootwear;