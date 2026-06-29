// PartyHeelsWomenFootwear.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { useCart } from '../CartContext';


const PartyHeelsWomenFootwear = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('7');
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

const partyHeelsProducts = [
  {
    id: 1,
    name: "Gold Gilded Stiletto Heels",
    fabric: "Leather",
    price: 4499,
    oldPrice: 6499,
    rating: 4.9,
    reviews: 2345,
    tag: "Bestseller",
    sub: "Italian Metallic Leather",
    description: "Exquisite gold gilded stiletto heels crafted from premium Italian metallic Leather. The luxurious gold finish and sculptural stiletto heel create a breathtaking silhouette, perfect for red carpet events, galas, and grand celebrations.",
    features: ["Italian Metallic Leather", "Sculptural Stiletto Heel", "Luxe Ankle Strap", "Memory Foam Insole", "Red Carpet Ready"],
    color: "Gold Gilded",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp1_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp1_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp1_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp1_4.webp"
    ]
  },
  {
    id: 2,
    name: "Crystal Embellished Satin Pumps",
    fabric: "Satin",
    price: 4999,
    oldPrice: 7299,
    rating: 4.9,
    reviews: 1876,
    tag: "Premium",
    sub: "Luxury Silk Satin",
    description: "Opulent silk satin pumps adorned with hand-set Swarovski crystals. The exquisite crystal embellishments and impeccable craftsmanship make these the ultimate choice for black-tie events, luxury weddings, and exclusive receptions.",
    features: ["Luxury Silk Satin", "Swarovski Crystal Embellishments", "Sculptural Pointed Toe", "Plush Cushioned Insole", "Black-Tie Ready"],
    color: "Iridescent Rose Gold",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp2_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp2_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp2_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp2_4.webp"
    ]
  },
  {
    id: 3,
    name: "Royal Velvet Block Heels",
    fabric: "Velvet",
    price: 3999,
    oldPrice: 5899,
    rating: 4.8,
    reviews: 1567,
    tag: "Trending",
    sub: "Premium Italian Velvet",
    description: "Regal Italian velvet block heels with an elegant, commanding presence. The lush velvet texture and sophisticated block heel offer both comfort and opulence, ideal for high-end galas, luxury weddings, and exclusive social events.",
    features: ["Premium Italian Velvet", "Sculptural Block Heel", "Luxe Ankle Strap", "Ultra-Cushioned Insole", "Grand Occasion Wear"],
    color: "Regal Burgundy",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp3_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp3_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp3_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp3_4.webp"
    ]
  },
  {
    id: 4,
    name: "Luxe Leather Peep Toe Heels",
    fabric: "Leather",
    price: 4299,
    oldPrice: 6199,
    rating: 4.7,
    reviews: 1234,
    tag: "Classic",
    sub: "Premium Full-Grain Leather",
    description: "Sophisticated full-grain leather peep toe heels with a refined silhouette. The exquisite leather craftsmanship and chic peep toe design exude timeless luxury, perfect for upscale cocktail events, luxury dinners, and exclusive soirées.",
    features: ["Premium Full-Grain Leather", "Sculptural Peep Toe", "Elegant Stiletto Heel", "Luxe Ankle Strap", "Timeless Elegance"],
    color: "Obsidian Black",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp4.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp4_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp4_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp4_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp4_4.webp"
    ]
  },
  {
    id: 5,
    name: "Luxury Satin Bow Pumps",
    fabric: "Satin",
    price: 4699,
    oldPrice: 6799,
    rating: 4.9,
    reviews: 987,
    tag: "Premium",
    sub: "Luxury Duchess Satin",
    description: "Exquisite Duchess satin pumps featuring an artisanal bow detail. The sumptuous satin and handcrafted bow create an air of refined elegance, making these the perfect choice for destination weddings, luxury galas, and grand celebrations.",
    features: ["Luxury Duchess Satin", "Artisanal Bow Detail", "Sculptural Stiletto Heel", "Elegant Pointed Toe", "Grand Wedding Ready"],
    color: "Champagne Pearl",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp5.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp5_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp5_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp5_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp5_4.webp"
    ]
  },
  {
    id: 6,
    name: "Velvet Strappy Statement Heels",
    fabric: "Velvet",
    price: 3799,
    oldPrice: 5599,
    rating: 4.6,
    reviews: 876,
    tag: "Essential",
    sub: "Premium Luxury Velvet",
    description: "Luxurious velvet strappy heels with a contemporary, bold design. The rich velvet and artistic strappy detailing create a modern statement, perfect for exclusive fashion events, upscale cocktail parties, and luxury nights out.",
    features: ["Premium Luxury Velvet", "Artistic Strappy Design", "Sculptural Block Heel", "Luxe Ankle Strap", "Modern Statement"],
    color: "Midnight Sapphire",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp6.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp6_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp6_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp6_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp6_4.webp"
    ]
  },
  {
    id: 7,
    name: "Grand Leather Platform Heels",
    fabric: "Leather",
    price: 4899,
    oldPrice: 6999,
    rating: 4.9,
    reviews: 1123,
    tag: "Bestseller",
    sub: "Premium Italian Leather",
    description: "Dramatic Italian leather platform heels with a commanding presence. The luxurious leather and architectural platform design make these the ultimate statement for fashion-forward events, red carpet appearances, and grand celebrations.",
    features: ["Premium Italian Leather", "Architectural Platform Sole", "Sculptural Stiletto Heel", "Luxe Ankle Strap", "Fashion Statement"],
    color: "Crimson Velvet",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp7.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp7_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp7_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp7_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp7_4.webp"
    ]
  },
  {
    id: 8,
    name: "Swarovski Crystal Stiletto Heels",
    fabric: "Satin",
    price: 5999,
    oldPrice: 8499,
    rating: 5.0,
    reviews: 654,
    tag: "Premium",
    sub: "Premium Luxury Satin",
    description: "Spectacular Swarovski crystal-embellished stiletto heels, a masterpiece of craftsmanship. The flawless satin and breathtaking crystal detailing create an unforgettable look for the most prestigious red carpet events, royal weddings, and grand celebrations.",
    features: ["Premium Luxury Satin", "Swarovski Crystal Masterpiece", "Sculptural Stiletto Heel", "Elegant Pointed Toe", "Red Carpet Royalty"],
    color: "Platinum Silver",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp8.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp8_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp8_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp8_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp8_4.webp"
    ]
  },
  {
    id: 9,
    name: "Luxe Velvet Ankle Strap Heels",
    fabric: "Velvet",
    price: 3599,
    oldPrice: 5299,
    rating: 4.7,
    reviews: 789,
    tag: "New",
    sub: "Premium Luxury Velvet",
    description: "Sumptuous premium velvet ankle strap heels with an elegant, refined design. The luxurious velvet and sophisticated ankle strap create a polished look, ideal for exclusive cocktail parties, luxury receptions, and high-end events.",
    features: ["Premium Luxury Velvet", "Elegant Ankle Strap", "Sculptural Block Heel", "Luxe Cushioned Insole", "Refined Elegance"],
    color: "Deep Emerald",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp9.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp9_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp9_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp9_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp9_4.webp"
    ]
  },
  {
    id: 10,
    name: "Grand Leather Stiletto Pumps",
    fabric: "Leather",
    price: 4599,
    oldPrice: 6599,
    rating: 4.8,
    reviews: 1345,
    tag: "Classic",
    sub: "Premium Full-Grain Leather",
    description: "Timeless full-grain leather stiletto pumps with impeccable craftsmanship. The exquisite leather and sculptural stiletto heel embody understated luxury, perfect for prestigious formal events, gallery openings, and exclusive soirées.",
    features: ["Premium Full-Grain Leather", "Sculptural Stiletto Heel", "Sophisticated Pointed Toe", "Luxe Cushioned Insole", "Timeless Luxury"],
    color: "Blush Nude",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp10.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp10_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp10_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp10_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp10_4.webp"
    ]
  },
  {
    id: 11,
    name: "Luxury T-Strap Satin Heels",
    fabric: "Satin",
    price: 4799,
    oldPrice: 6999,
    rating: 4.9,
    reviews: 567,
    tag: "Premium",
    sub: "Premium Duchess Satin",
    description: "Exquisite Duchess satin T-strap heels with a vintage-inspired, grand design. The luxurious satin and artful T-strap detailing create a sophisticated look, perfect for luxury vintage events, grand weddings, and exclusive receptions.",
    features: ["Premium Duchess Satin", "Artful T-Strap Design", "Sculptural Stiletto Heel", "Luxe Cushioned Insole", "Grand Vintage Style"],
    color: "Champagne Gold",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp11.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp11_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp11_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp11_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp11_4.webp"
    ]
  },
  {
    id: 12,
    name: "Luxe Velvet Mule Heels",
    fabric: "Velvet",
    price: 3499,
    oldPrice: 5199,
    rating: 4.6,
    reviews: 2345,
    tag: "Sale",
    sub: "Premium Luxury Velvet",
    description: "Luxurious premium velvet mule heels with a contemporary, effortless design. The rich velvet and elegant slip-on silhouette offer refined ease, perfect for upscale social events, luxury gatherings, and grand celebrations.",
    features: ["Premium Luxury Velvet", "Elegant Mule Silhouette", "Sculptural Block Heel", "Effortless Slip-on", "Refined Modern Design"],
    color: "Royal Amethyst",
    images: [
      "/Footwear/Women/Heels/Party/Products/phwfp12.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp12_1.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp12_2.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp12_3.webp",
      "/Footwear/Women/Heels/Party/Products/phwfp12_4.webp"
    ]
  }
];

  const filters = ['all', 'Leather', 'Satin', 'Velvet'];
  const filteredProducts = activeFilter === 'all'
    ? partyHeelsProducts
    : partyHeelsProducts.filter(p => p.fabric === activeFilter);

  // Heel sizes
  const getSizes = () => ["5", "6", "7", "8", "9", "10"];

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
    setSelectedSize('7');
  };

  // Close full product modal
  const handleCloseProduct = () => {
    setSelectedProduct(null);
    setActiveImgIndex(0);
    setSelectedSize('7');
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
            src="/Footwear/Women/Heels/Party/"
            alt="Women's Party Heels Collection"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = "/Footwear/Women/Heels/Party/phwfbanner.webp"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 md:pb-20">
            <div className="text-center text-white px-4">
              <p className="text-amber-300 tracking-[0.2em] text-[8px] md:text-xs mb-2 md:mb-3 font-semibold">12 GLAMOROUS HEELS</p>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide">The Party Heel Edit</h1>
              <div className="h-[1px] w-8 md:w-12 bg-amber-400 mx-auto mt-3 md:mt-4 mb-3 md:mb-4"></div>
              <p className="text-xs md:text-base font-light tracking-wide max-w-lg mx-auto">Step into the spotlight with stunning heels</p>
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
              {filteredProducts.length} {filteredProducts.length === 1 ? 'heel' : 'heels'} available
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
                  <p className="text-[7px] md:text-[9px] text-amber-700 uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold mb-0.5">Heels · {product.fabric}</p>
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
                    Party Heels · {selectedProduct.fabric}
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
                      <span className="text-slate-500 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Heel Type</span>
                      <span className="text-slate-950 font-bold">Party</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                    {selectedProduct.description}
                  </p>

                  {/* Size Selection - Heel Sizes */}
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

export default PartyHeelsWomenFootwear;