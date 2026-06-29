// BagsAccessories.jsx - Text Bottom Right Aligned
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

const BagsAccessories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only TWO banners - Handbags and Sling Bags
  const banners = [
    {
      id: 1,
      image: "/Accessories/Bags/babanner1.webp",
      titlePart1: "Everyday Elegance",
      titlePart2: "Handbags",
      subtitle: "ACCESSORIES • HANDBAGS • STYLE",
      cta: "SHOP HANDBAGS",
      link: "/accessories/bags/handbag"
    },
    {
      id: 2,
      image: "/Accessories/Bags/babanner2.webp",
      titlePart1: "Chic & Compact",
      titlePart2: "Sling Bags",
      subtitle: "ACCESSORIES • SLING • TRENDY",
      cta: "SHOP SLING",
      link: "/accessories/bags/sling"
    }
  ];

  // Only TWO categories - Handbags and Sling Bags
  const categories = [
    {
      id: 1,
      title: "Handbags",
      tag: "ELEGANT",
      image: "/Accessories/Bags/handbag.webp",
      link: "/accessories/bags/handbag"
    },
    {
      id: 2,
      title: "Sling Bags",
      tag: "TRENDY",
      image: "/Accessories/Bags/sling.webp",
      link: "/accessories/bags/sling"
    }
  ];

  // Featured Products for Bags
  const featuredProducts = [
    { 
      id: 1, 
      name: 'Leather Tote Handbag', 
      category: "Accessories", 
      sub: "Bags • Handbag", 
      price: 2499, 
      oldPrice: 4999, 
      images: ["/Accessories/Bags/Products/bap1.webp", "/Accessories/Bags/Products/bap1_1.webp", "/Accessories/Bags/Products/bap1_2.webp", "/Accessories/Bags/Products/bap1_3.webp", "/Accessories/Bags/Products/bap1_4.webp"],
      tag: "Best Seller", 
      color: "Brown", 
      rating: "4.8", 
      reviews: "2.1k",
      details: { "Material": "Genuine Leather", "Type": "Tote Bag", "Capacity": "Laptop, Documents", "Closure": "Zipper", "Warranty": "1 Year" }
    },
    { 
      id: 2, 
      name: 'Chain Strap Sling Bag', 
      category: "Accessories", 
      sub: "Bags • Sling", 
      price: 1299, 
      oldPrice: 2599, 
      images: ["/Accessories/Bags/Products/bap2.webp", "/Accessories/Bags/Products/bap2_1.webp", "/Accessories/Bags/Products/bap2_2.webp", "/Accessories/Bags/Products/bap2_3.webp", "/Accessories/Bags/Products/bap2_4.webp"],
      tag: "Trending", 
      color: "Black & Gold", 
      rating: "4.7", 
      reviews: "3.4k",
      details: { "Material": "PU Leather", "Type": "Chain Sling", "Strap": "Adjustable Chain", "Closure": "Magnetic", "Occasion": "Party/Casual" }
    },
    { 
      id: 3, 
      name: 'Office Formal Handbag', 
      category: "Accessories", 
      sub: "Bags • Handbag", 
      price: 2999, 
      oldPrice: 5999, 
      images: ["/Accessories/Bags/Products/bap3.webp", "/Accessories/Bags/Products/bap3_1.webp", "/Accessories/Bags/Products/bap3_2.webp", "/Accessories/Bags/Products/bap3_3.webp", "/Accessories/Bags/Products/bap3_4.webp"],
      tag: "Premium", 
      color: "Navy Blue", 
      rating: "4.9", 
      reviews: "1.5k",
      details: { "Material": "Synthetic Leather", "Type": "Structured Handbag", "Compartments": "Multiple", "Closure": "Zip & Lock", "Occasion": "Office/Formal" }
    },
    { 
      id: 4, 
      name: 'Mini Sling Bag', 
      category: "Accessories", 
      sub: "Bags • Sling", 
      price: 899, 
      oldPrice: 1799, 
      images: ["/Accessories/Bags/Products/bap4.webp", "/Accessories/Bags/Products/bap4_1.webp", "/Accessories/Bags/Products/bap4_2.webp", "/Accessories/Bags/Products/bap4_3.webp", "/Accessories/Bags/Products/bap4_4.webp"],
      tag: "Best Seller", 
      color: "Pink", 
      rating: "4.6", 
      reviews: "4.2k",
      details: { "Material": "Canvas", "Type": "Mini Sling", "Strap": "Adjustable", "Capacity": "Phone, Wallet, Keys", "Occasion": "Casual/Travel" }
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  useEffect(() => {
    const productId = location?.state?.defaultSelectedProductId;

    if (productId) {
      const productToOpen = featuredProducts.find(
        p => p.id === Number(productId)
      );

      if (productToOpen) {
        setSelectedProduct(productToOpen);
        setActiveImgIndex(0);
        setSelectedSize("One Size");
      }
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ====== BAGS HERO SECTION - TWO BANNERS (HANDBAGS & SLING) ====== */}
      <section className="relative h-auto md:h-screen w-full overflow-hidden bg-black">
        {banners.map((banner, idx) => (
          <div
            key={banner.id}
           className={`relative md:absolute md:inset-0 transition-all duration-[1500ms] ease-out ${
              idx === currentSlide ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-105 invisible hidden md:block'
            }`}
          >
            <div className="relative w-full h-auto md:h-full">
              <div className="block md:hidden w-full">
                <img 
                  src={banner.image} 
                  alt={banner.titlePart2} 
                  className="w-full h-[220px] object-cover object-center"
                />
              </div>
              
              <div className="hidden md:block w-full h-full">
                <img 
                  src={banner.image} 
                  alt={banner.titlePart2} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Gradient Overlay - Bottom only */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content - Bottom Right Aligned */}
            <div className="absolute inset-0 flex flex-col justify-end pb-4 sm:pb-20 md:pb-24 lg:pb-32 px-3 sm:px-8 md:px-12 lg:px-32 items-end">
              <div className={`max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-2xl text-white text-right transition-all duration-1000 delay-300 transform ${
                idx === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-100'
              }`}>
                
                <p className="text-amber-400/90 tracking-[0.2em] sm:tracking-[0.5em] text-[7px] sm:text-[10px] md:text-[11px] font-semibold uppercase mb-1 sm:mb-5">
                  {banner.subtitle}
                </p>
                
                <h1 className="flex flex-col space-y-0.5 sm:space-y-2 mb-3 sm:mb-12 items-end">
                  <span className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-light italic opacity-90 font-serif">
                    {banner.titlePart1}
                  </span>
                 <span className="text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif tracking-[0.02em] capitalize leading-tight font-light">
                    {banner.titlePart2}
                  </span>
                </h1>
                
                <div className="h-[1px] w-6 sm:w-12 md:w-16 bg-amber-400/50 mb-2 sm:mb-8 md:mb-12 ml-auto"></div>
                
                <div className="flex justify-end">
                  <Link to={banner.link}>
                    <button className="group relative border border-white/40 px-5 sm:px-7 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 overflow-hidden text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] font-light transition-all duration-500 text-white hover:border-amber-400/50">
                      <span className="absolute inset-0 w-0 bg-amber-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                      <span className="relative z-10 group-hover:text-black">{banner.cta}</span>
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Premium Indicators */}
        <div className="hidden sm:flex absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 w-full justify-center gap-2 sm:gap-3 md:gap-4 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-700 rounded-full ${
                idx === currentSlide 
                  ? 'w-8 sm:w-10 md:w-12 lg:w-14 h-[2px] bg-amber-400' 
                  : 'w-3 sm:w-4 md:w-5 lg:w-6 h-[1px] bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Side Navigation Arrows */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
          className="hidden sm:flex absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 items-center justify-center text-white/40 hover:text-white transition duration-300 z-20 text-xl sm:text-2xl"
        >
          ‹
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
          className="hidden sm:flex absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 items-center justify-center text-white/40 hover:text-white transition duration-300 z-20 text-xl sm:text-2xl"
        >
          ›
        </button>

      </section>

      {/* ====== CIRCULAR CATEGORY SECTION - HANDBAGS & SLING BAGS ====== */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f0ecdd] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-[0.2em] text-gray-900 mb-4">
              SHOP BY STYLE
            </h2>
            <div className="h-[1px] w-10 sm:w-12 bg-amber-500 mx-auto"></div>
            <p className="text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm tracking-wider">Bag Collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-30 md:gap-40 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={cat.link} 
                className="group flex flex-col items-center"
              >
                <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-black via-transparent to-black transition-all duration-1000 group-hover:rotate-180">
                  
                  <div className="relative w-54 h-54 md:w-62 md:h-62 lg:w-70 lg:h-70 rounded-full overflow-hidden border-[3px] border-white shadow-2xl transition-transform duration-1000 group-hover:rotate-[-180deg] bg-gradient-to-br from-green-100 via-amber-50 to-green-200">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500"></div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 md:mt-10 text-center">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] text-amber-600 font-medium uppercase mb-2 sm:mb-3 block opacity-80">
                    {cat.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-light text-gray-800 tracking-wider mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-amber-700">
                    {cat.title}
                  </h3>
                  
                  <div className="relative h-[1px] w-8 sm:w-10 md:w-12 bg-gray-300 mx-auto overflow-hidden">
                    <div className="absolute inset-0 bg-amber-500 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ====== BAGS BRAND NARRATIVE ====== */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 md:px-16 bg-[#F5F1ED] flex items-center justify-center overflow-hidden">
        <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 py-4">
            <div className="space-y-2">
              <h4 className="text-[#A67C52] font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[8px] sm:text-[9px]">
                The Bag Collection
              </h4>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D241E] leading-tight font-light">
                Style Meets <br />
                <span className="italic text-[#8B4513]">Functionality</span>
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-5 text-[#544A42] text-sm sm:text-base md:text-lg leading-relaxed font-light">
              <p>
                At <strong className="text-[#2D241E] font-medium">Fashion Hub Accessories</strong>, our bag collection combines style with practicality. From elegant handbags to trendy sling bags, find the perfect accessory to complement your look.
              </p>

              <p>
                Explore our range of <strong>Spacious Handbags</strong> and <strong>Compact Sling Bags</strong> – designed for every occasion, from office to party.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <div className="h-[1px] w-8 sm:w-10 md:w-12 bg-amber-900/30"></div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#A67C52]">Est. MMXXVI</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] aspect-[16/10] bg-[#EBE2D7] p-2 sm:p-3 md:p-5 rounded-[20px] sm:rounded-[30px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] group transition-all duration-700 hover:shadow-amber-200/30">
              
              <div className="absolute inset-0 border-[5px] sm:border-[10px] border-white/40 rounded-[20px] sm:rounded-[30px] pointer-events-none transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/60"></div>

              <div className="w-full h-full overflow-hidden rounded-[15px] sm:rounded-[20px]">
                <img
                  src="/Accessories/Bags/babanner.webp"
                  alt="Bags Collection"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-lg shadow-xl rounded-lg border border-white hidden md:block">
                <p className="text-[#8B4513] font-serif italic text-xs sm:text-sm tracking-wide">Premium Quality Bags</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 FEATURED COLLECTIONS - HANDBAGS & SLING BAGS */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 bg-[#EAE3DB]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 sm:mb-16">
            <span className="text-orange-700 text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase font-bold">
              Curated Selection
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-[0.1em] sm:tracking-[0.2em] text-gray-900 uppercase mt-3">
              Bag Collection
            </h2>
            <div className="h-[2px] w-12 sm:w-16 md:w-20 bg-orange-800 mx-auto mt-4 sm:mt-6"></div>
            <p className="text-gray-500 mt-4 sm:mt-6 font-light italic tracking-widest text-xs sm:text-sm">
              Premium bags for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                
                <Link
                  to="/accessories/bags/aproducts"
                  state={{ defaultSelectedProductId: product.id }}
                  className="relative block overflow-hidden bg-white rounded-lg shadow-md group-hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                  </div>

                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black text-white px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold rounded-sm shadow-lg">
                    {product.tag}
                  </span>

                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3 sm:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 sm:py-3 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold rounded-sm shadow-xl transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      Shop Now
                    </button>
                  </div>
                </Link>

                <div className="mt-5 sm:mt-6 md:mt-8 text-center px-2">
                  <p className="text-[9px] sm:text-[10px] text-orange-800 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-2">
                    {product.sub}
                  </p>

                  <h3 className="text-sm sm:text-base font-serif text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="mt-3 sm:mt-4 flex justify-center items-center gap-3 sm:gap-4">
                    <span className="text-gray-400 line-through text-[11px] sm:text-[13px] font-light">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                    <span className="text-black font-bold text-base sm:text-lg tracking-tight">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 text-center">
            <Link to="/accessories/bags/aproducts">
              <button className="group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full overflow-hidden transition-all duration-500 shadow-md hover:shadow-orange-500/40">
                
                <span className="absolute inset-0 p-[1px] rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-red-600">
                  <span className="block w-full h-full bg-[#e9e0cc] rounded-full group-hover:bg-transparent transition-colors duration-500"></span>
                </span>

                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 via-amber-500 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                
                <span className="relative z-10 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] bg-gradient-to-r from-orange-800 to-red-900 bg-clip-text text-transparent group-hover:text-white transition-colors duration-500">
                  View Entire Collection
                </span>

              </button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default BagsAccessories;