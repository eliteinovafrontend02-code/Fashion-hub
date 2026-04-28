import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Fashion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      image: "/Fashion/fbanner1.png", 
      titlePart1: "The Art of",
      titlePart2: "Modern Classics",
      subtitle: "ESTABLISHED • MMXXVI",
      cta: "EXPLORE THE EDIT",
      link: "/fashion/men",
      align: "items-start",
      textAlign: "text-left",
      color: "from-black/70 via-black/30 to-transparent"
    },
    {
      id: 2,
      image: "/Fashion/fbanner2.png",
      titlePart1: "Ethereal",
      titlePart2: "Winter Silhouettes",
      subtitle: "PREMIUM HAUTE COUTURE",
      cta: "VIEW COLLECTION",
      link: "/fashion/women",
      align: "items-center",
      textAlign: "text-center",
      color: "from-black/50 via-transparent to-black/50"
    },
    {
      id: 3,
      image: "/Fashion/fbanner3.png",
      titlePart1: "Gentle",
      titlePart2: "Junior Beginnings",
      subtitle: "CURATED JUNIOR LINE",
      cta: "SHOP THE LINE",
      link: "/fashion/kids",
      align: "items-end",
      textAlign: "text-right",
      color: "from-transparent via-black/30 to-black/70"
    }
  ];

  const categories = [
    {
      id: 1,
      title: "Men's Wear",
      tag: "TAILORED",
      image: "/Fashion/fmen.png", // Change this to your image path
      link: "/fashion/men"
    },
    {
      id: 2,
      title: "Women's Wear",
      tag: "ESSENTIALS",
      image: "/Fashion/fwomen.png", // Change this to your image path
      link: "/fashion/women"
    },
    {
      id: 3,
      title: "Kids Wear",
      tag: "DISCOVER",
      image: "/Fashion/fkids.png", // Change this to your image path
      link: "/fashion/kids"
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

      {/* ====== HERO SECTION - OPTIMIZED FOR ALL SYSTEMS ====== */}
<section className="relative h-[75vh] w-full overflow-hidden bg-black"> 
  {/* h-[75vh] banner height-ah 25% kammi pannum, screen size-ku yetha maadhiri adjustment aagum */}
  
  {banners.map((banner, idx) => (
    <div
      key={banner.id}
      className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
        idx === currentSlide ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-105 invisible'
      }`}
    >
      {/* Background Image - Object Cover ensures no distortion */}
      <img 
        src={banner.image} 
        alt={banner.titlePart2} 
        className="w-full h-full object-cover object-center" 
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${banner.color}`}></div>

      {/* Content Container - Flexbox handles the alignment perfectly on any screen */}
      <div className="absolute inset-0 flex items-center">
        <div className={`container mx-auto px-6 md:px-20 lg:px-32 flex flex-col ${banner.align}`}>
          
          <div className={`max-w-2xl text-white ${banner.textAlign} transition-all duration-1000 delay-300 transform ${
            idx === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            
            {/* Subtitle */}
            <p className="text-amber-400/90 tracking-[0.5em] text-[10px] md:text-[11px] font-light uppercase mb-4">
              {banner.subtitle}
            </p>
            
            {/* Title */}
            <h1 className="flex flex-col space-y-1 md:space-y-2 mb-8 md:mb-10">
              <span className="text-xl md:text-2xl font-light italic opacity-90 font-serif">
                {banner.titlePart1}
              </span>
              <span className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight font-light">
                {banner.titlePart2}
              </span>
            </h1>
            
            {/* Divider */}
            <div className={`h-[1px] w-12 md:w-16 bg-amber-400/50 mb-8 md:mb-10 ${
              banner.align === 'items-center' ? 'mx-auto' : banner.align === 'items-end' ? 'ml-auto' : ''
            }`}></div>
            
            {/* CTA Button */}
            <div>
              <Link to={banner.link}>
                <button className="group relative border border-white/40 px-8 md:px-10 py-3 md:py-3.5 overflow-hidden text-[10px] md:text-[11px] tracking-[0.3em] font-light transition-all duration-500 text-white hover:border-amber-400/50">
                  <span className="absolute inset-0 w-0 bg-amber-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-black">{banner.cta}</span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  ))}

  {/* Side Arrows - Positioning is fixed to screen edges */}
  <button 
    onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition duration-300 z-20 text-2xl"
  >
    ‹
  </button>
  <button 
    onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition duration-300 z-20 text-2xl"
  >
    ›
  </button>
</section>
      {/* ====== CIRCULAR CATEGORY SECTION - GRADIENT STYLE ====== */}
<section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-gray-50 to-amber-50/20">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-serif font-light tracking-[0.2em] text-gray-900 mb-4">
        THE COLLECTIONS
      </h2>
      <div className="h-[1px] w-12 bg-amber-500 mx-auto"></div>
    </div>

    {/* Circles Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
      {categories.map((cat) => (
        <Link 
          key={cat.id} 
          to={cat.link} 
          className="group flex flex-col items-center"
        >
          {/* Animated Border Wrapper */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-black via-transparent to-black transition-all duration-1000 group-hover:rotate-180">
            
            {/* Main Circle Image Container - Changed bg-white to bg-gradient */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[3px] border-white shadow-2xl transition-transform duration-1000 group-hover:rotate-[-180deg] bg-gradient-to-br from-green-100 via-amber-50 to-green-200">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-10 text-center">
            <span className="text-[10px] tracking-[0.5em] text-amber-600 font-medium uppercase mb-3 block opacity-80">
              {cat.tag}
            </span>
            <h3 className="text-2xl font-serif font-light text-gray-800 tracking-wider mb-4 transition-colors duration-300 group-hover:text-amber-700">
              {cat.title}
            </h3>
            
            {/* Aesthetic Underline */}
            <div className="relative h-[1px] w-12 bg-gray-300 mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-amber-500 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700"></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
        
       
    </div>
  );
};

export default Fashion;