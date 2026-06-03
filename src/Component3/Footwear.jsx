// Footwear.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

const Footwear = () => {
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

  const banners = [
    {
      id: 1,
      image: "/Footwear/fbanner1.png",
      titlePart1: "Step Into",
      titlePart2: "Comfort",
      subtitle: "PREMIUM FOOTWEAR COLLECTION",
      cta: "SHOP MEN",
      link: "/footwear/men"
    },
    {
      id: 2,
      image: "/Footwear/fbanner2.png",
      titlePart1: "Elevate Your",
      titlePart2: "Style",
      subtitle: "LUXURY WOMEN'S FOOTWEAR",
      cta: "SHOP WOMEN",
      link: "/footwear/women"
    },
    {
      id: 3,
      image: "/Footwear/fbanner3.png",
      titlePart1: "Little Feet",
      titlePart2: "Big Dreams",
      subtitle: "KIDS FOOTWEAR COLLECTION",
      cta: "SHOP KIDS",
      link: "/footwear/kids"
    }
  ];

  const categories = [
    {
      id: 1,
      title: "Men",
      tag: "CLASSICS",
      image: "/Footwear/fmen.png",
      link: "/footwear/men"
    },
    {
      id: 2,
      title: "Women",
      tag: "ELEGANCE",
      image: "/Footwear/fwomen.png",
      link: "/footwear/women"
    },
    {
      id: 3,
      title: "Kids",
      tag: "COMFORT",
      image: "/Footwear/fkids.png",
      link: "/footwear/kids"
    }
  ];

  // Featured Products Data
  const featuredProducts = [
    // MEN - SHOES (Casual)
    { 
      id: 401, 
      name: "Men's Casual Sneakers", 
      category: "Footwear", 
      sub: "Men • Shoes • Casual", 
      price: 2499, 
      oldPrice: 3999, 
      images: ["/Footwear/Products/fp1.png", "/Footwear/Products/fp1_1.png", "/Footwear/Products/fp1_2.png","/Footwear/Products/fp1_3.png","/Footwear/Products/fp1_4.png"],
      tag: "Trending", 
      color: "White/Grey", 
      rating: "4.7", 
      reviews: "3.2k",
      path: "/footwear/men/shoes/casual",
      details: { "Material": "Premium Synthetic", "Sole": "EVA Foam", "Closure": "Lace-up", "Insole": "Memory Foam" }
    },

    // WOMEN - HEELS (Party)
    { 
      id: 402, 
      name: "Women's Stiletto Party Heels", 
      category: "Footwear", 
      sub: "Women • Heels • Party", 
      price: 3499, 
      oldPrice: 5499, 
      images: ["/Footwear/Products/fp2.png", "/Footwear/Products/fp2_1.png", "/Footwear/Products/fp2_2.png","/Footwear/Products/fp2_3.png","/Footwear/Products/fp2_4.png"],
      tag: "Trending", 
      color: "Red", 
      rating: "4.8", 
      reviews: "2.1k",
      path: "/footwear/women/heels/party",
      details: { "Material": "Satin", "Heel Height": "4 inches", "Toe Style": "Pointed", "Closure": "Ankle Strap" }
    },

    // KIDS - BOY (Shoes - School)
    { 
      id: 403, 
      name: "Boy's School Shoes", 
      category: "Footwear", 
      sub: "Kids • Boy • Shoes • School", 
      price: 1499, 
      oldPrice: 2299, 
      images: ["/Footwear/Products/fp3.png", "/Footwear/Products/fp3_1.png", "/Footwear/Products/fp3_2.png","/Footwear/Products/fp3_3.png","/Footwear/Products/fp3_4.png"],
      tag: "Best Seller", 
      color: "Black", 
      rating: "4.7", 
      reviews: "2.8k",
      path: "/footwear/kids/boy/shoes/school",
      details: { "Material": "PU Leather", "Sole": "TPR", "Closure": "Velcro Strap", "Size Range": "EU 28-35" }
    },

    // KIDS - GIRL (Sandals - Soft)
    { 
      id: 404, 
      name: "Girl's Soft Comfort Sandals", 
      category: "Footwear", 
      sub: "Kids • Girl • Sandals • Soft", 
      price: 899, 
      oldPrice: 1399, 
      images: ["/Footwear/Products/fp4.png", "/Footwear/Products/fp4_1.png", "/Footwear/Products/fp4_2.png","/Footwear/Products/fp4_3.png","/Footwear/Products/fp4_4.png"],
      tag: "Trending", 
      color: "Purple", 
      rating: "4.7", 
      reviews: "1.6k",
      path: "/footwear/kids/girl/sandals/soft",
      details: { "Material": "Soft PU", "Sole": "Flexible EVA", "Closure": "Velcro", "Size Range": "EU 27-33" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ====== HERO SECTION - TEXT AT BOTTOM RIGHT ====== */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {banners.map((banner, idx) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
              idx === currentSlide ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-105 invisible'
            }`}
          >
            <img 
              src={banner.image} 
              alt={banner.titlePart2} 
              className="w-full h-full object-cover"
            />
            
            {/* Dark Gradient Overlay at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Content - Bottom Right Aligned */}
            <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-12 md:px-32 items-end">
              <div className={`max-w-2xl text-white text-right transition-all duration-1000 delay-300 transform ${
                idx === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}>
                
                {/* Gold Accent Subtitle */}
                <p className="text-amber-400/90 tracking-[0.3em] text-[15px] font-dark uppercase mb-3">
                  {banner.subtitle}
                </p>
                
                {/* Elegant Title */}
                <h1 className="flex flex-col space-y-1 mb-6 items-end">
                  <span className="text-xl md:text-2xl font-light italic opacity-90 font-serif">
                    {banner.titlePart1}
                  </span>
                  <span className="text-3xl md:text-5xl font-serif tracking-[0.02em] capitalize leading-tight font-light">
                    {banner.titlePart2}
                  </span>
                </h1>
                
                {/* Gold Divider - Right Aligned */}
                <div className="h-[1px] w-12 bg-amber-400/50 mb-6 ml-auto"></div>
                
                {/* Button - Right Aligned */}
                <div className="flex justify-end">
                  <Link to={banner.link}>
                    <button className="group relative border border-white/40 px-8 py-3 overflow-hidden text-[10px] tracking-[0.3em] font-light transition-all duration-500 text-white hover:border-amber-400/50">
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
        <div className="absolute bottom-6 w-full flex justify-center gap-4 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-700 rounded-full ${
                idx === currentSlide 
                  ? 'w-14 h-[2px] bg-amber-400' 
                  : 'w-6 h-[1px] bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Side Navigation Arrows */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition duration-300 z-20 text-2xl"
        >
          ‹
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition duration-300 z-20 text-2xl"
        >
          ›
        </button>
      </section>

      {/* ====== CIRCULAR CATEGORY SECTION - MEN | WOMEN | KIDS ====== */}
      <section className="py-24 px-6 md:px-12 bg-[#f0ecdd] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-[0.2em] text-gray-900 mb-4">
              SHOP BY CATEGORIES
            </h2>
            <div className="h-[1px] w-12 bg-amber-500 mx-auto"></div>
            <p className="text-gray-500 mt-6 text-sm tracking-wider">Discover our curated collection of premium footwear</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
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

                <div className="mt-10 text-center">
                  <span className="text-[10px] tracking-[0.5em] text-amber-600 font-medium uppercase mb-3 block opacity-80">
                    {cat.tag}
                  </span>
                  <h3 className="text-2xl font-serif font-light text-gray-800 tracking-wider mb-4 transition-colors duration-300 group-hover:text-amber-700">
                    {cat.title}
                  </h3>
                  
                  <div className="relative h-[1px] w-12 bg-gray-300 mx-auto overflow-hidden">
                    <div className="absolute inset-0 bg-amber-500 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ====== THE ELITE FOOTWEAR HUB - PROFESSIONAL BRAND NARRATIVE ====== */}
      <section className="py-14 px-6 md:px-16 bg-[#F5F1ED] flex items-center justify-center overflow-hidden">
        <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="order-2 lg:order-1 space-y-6 py-4">
            <div className="space-y-2">
              <h4 className="text-[#A67C52] font-bold tracking-[0.5em] uppercase text-[9px]">
                The Walk Edit
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2D241E] leading-tight font-light">
                Where Comfort <br />
                <span className="italic text-[#8B4513]">Meets Style</span>
              </h2>
            </div>

            <div className="space-y-5 text-[#544A42] text-base md:text-lg leading-relaxed font-light">
              <p>
                At <strong className="text-[#2D241E] font-medium">Fashion Hub Footwear</strong>, we believe every step should be a statement. From premium leather shoes to comfortable everyday wear, our collection is crafted for those who value both style and comfort.
              </p>

              <p>
                Discover our curated collection of <strong>Men's Formal & Casual Shoes</strong>, <strong>Women's Heels & Flats</strong>, and <strong>Kids' Comfort Footwear</strong> – designed for every occasion and every stride.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-amber-900/30"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A67C52]">Est. MMXXVI</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] aspect-[16/10] bg-[#EBE2D7] p-3 md:p-5 rounded-[30px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] group transition-all duration-700 hover:shadow-amber-200/30">
              
              <div className="absolute inset-0 border-[10px] border-white/40 rounded-[30px] pointer-events-none transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/60"></div>

              <div className="w-full h-full overflow-hidden rounded-[20px]">
                <img
                  src="/Footwear/fbanner.png"
                  alt="Luxury Footwear Collection"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-white/80 backdrop-blur-lg shadow-xl rounded-lg border border-white hidden md:block">
                <p className="text-[#8B4513] font-serif italic text-sm tracking-wide">Walk in Style</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 FEATURED COLLECTIONS - PREMIUM FOOTWEAR */}
      <section className="py-24 px-6 md:px-16 bg-[#EAE3DB]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-orange-700 text-[10px] tracking-[0.5em] uppercase font-bold">
              Curated Selection
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-[0.2em] text-gray-900 uppercase mt-3">
              Signature Footwear
            </h2>
            <div className="h-[2px] w-20 bg-orange-800 mx-auto mt-6"></div>
            <p className="text-gray-500 mt-6 font-light italic tracking-widest text-sm">
              Premium footwear for every step of your journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                
                 <Link 
                  to="/footwear/fproducts" 
                  state={{ defaultSelectedProductId: product.id }} 
                  className="relative block overflow-hidden..."
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                  </div>

                  <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-sm shadow-lg">
                    {product.tag}
                  </span>

                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm shadow-xl transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </Link>

                <div className="mt-8 text-center px-2">
                  <p className="text-[10px] text-orange-800 uppercase tracking-[0.3em] font-bold mb-2">
                    {product.sub}
                  </p>

                  <h3 className="text-base font-serif text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex justify-center items-center gap-4">
                    <span className="text-gray-400 line-through text-[13px] font-light">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                    <span className="text-black font-bold text-lg tracking-tight">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/footwear/fproducts">
              <button className="group relative px-12 py-4 rounded-full overflow-hidden transition-all duration-500 shadow-md hover:shadow-orange-500/40">
                
                <span className="absolute inset-0 p-[1px] rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-red-600">
                  <span className="block w-full h-full bg-[#e9e0cc] rounded-full group-hover:bg-transparent transition-colors duration-500"></span>
                </span>

                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 via-amber-500 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] bg-gradient-to-r from-orange-800 to-red-900 bg-clip-text text-transparent group-hover:text-white transition-colors duration-500">
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

export default Footwear;