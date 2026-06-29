// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollButton from './ScrollButton';

const About = () => {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-[#f5eadf]">
        
        {/* 🏆 HERO SECTION - Mobile Optimized with Reduced Height */}
        <section className="relative w-full h-[25vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mt-5">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/aboutbanner.webp" 
              alt="Fashion Hub Hero" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-orange-800/50"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-20">
            <div className="text-center max-w-4xl animate-fadeInUp">
              <span className="inline-block bg-orange-500/20 backdrop-blur-sm text-orange-200 px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider mb-2 sm:mb-4 md:mb-6">
                SINCE 2026
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-2 sm:mb-4 md:mb-6">
                Our <span className="text-orange-400">Fashion</span> Story
              </h1>
              <p className="text-xs sm:text-base md:text-xl lg:text-2xl text-orange-100/90 max-w-3xl mx-auto leading-relaxed px-2">
                Redefining style with premium collections that blend elegance, comfort, and trendsetting designs.
              </p>
            </div>
          </div>

          {/* Decorative Scroll Indicator - Hidden on very small screens */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden sm:block">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* 📖 OUR STORY - Mobile Optimized */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">About Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-900 mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">
                Where Style Meets <span className="text-orange-500">Excellence</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="animate-fadeInUp order-2 md:order-1">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                  Fashion Hub was born from a simple yet powerful vision — to make premium fashion 
                  accessible to everyone. What started as a small boutique has now grown into a 
                  comprehensive fashion destination that celebrates individuality and self-expression.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                  We believe that fashion is more than just clothing; it's a form of art, a way to tell 
                  your story without saying a word. Every piece in our collection is carefully selected 
                  to ensure it meets our high standards of quality, comfort, and style.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Today, Fashion Hub stands as a testament to our commitment to excellence, 
                  serving thousands of satisfied customers who trust us to keep them looking their best.
                </p>
                
                {/* Back to Home Button */}
                <Link to="/">
                  <button className="mt-4 sm:mt-6 md:mt-8 bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full shadow-md text-sm sm:text-base md:text-lg transition transform hover:scale-105 w-full sm:w-auto">
                    ← Back to Home
                  </button>
                </Link>
              </div>

              <div className="relative animate-fadeInUp order-1 md:order-2">
                <div className="bg-[#e9dccb] p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <img 
                    src="/abanner.webp" 
                    alt="Our Story" 
                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-1 sm:-bottom-4 sm:-right-2 md:-bottom-6 md:-right-4 bg-orange-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-xl sm:rounded-2xl shadow-xl">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold">2026</p>
                  <p className="text-[10px] sm:text-xs md:text-sm opacity-90">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 💎 OUR VALUES - Mobile Optimized */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">Core Values</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-900 mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">
                What We Stand <span className="text-orange-500">For</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: "💎", title: "Premium Quality", desc: "Every product meets rigorous quality standards" },
                { icon: "🚚", title: "Fast Delivery", desc: "Swift shipping to get your style quickly" },
                { icon: "🛡️", title: "Trust & Safety", desc: "Secure shopping with guaranteed satisfaction" },
                { icon: "😊", title: "Customer First", desc: "Dedicated support for all your needs" }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-[#f5eadf] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-xl font-bold text-orange-900 mb-1 sm:mb-2 md:mb-3">{value.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 👔 OUR COLLECTIONS - Mobile Optimized */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">Collections</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-900 mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">
                Explore Our <span className="text-orange-500">Categories</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: "👔", label: "Men's Fashion", path: "/fashion/men", bg: "bg-blue-500/10" },
                { icon: "👗", label: "Women's Fashion", path: "/fashion/women", bg: "bg-pink-500/10" },
                { icon: "👕", label: "Kids' Collection", path: "/fashion/kids", bg: "bg-green-500/10" },
                { icon: "👟", label: "Footwear", path: "/footwear", bg: "bg-yellow-500/10" },
                { icon: "💍", label: "Jewellery", path: "/jewellery", bg: "bg-purple-500/10" },
                { icon: "👜", label: "Accessories", path: "/accessories", bg: "bg-indigo-500/10" },
                { icon: "💄", label: "Beauty", path: "/beauty", bg: "bg-red-500/10" }
              ].map((category, index) => (
                <Link to={category.path} key={index}>
                  <div
                    className={`${category.bg} rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fadeInUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl mx-auto mb-1 sm:mb-2 md:mb-3">{category.icon}</div>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-gray-800">{category.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 🌟 TESTIMONIALS - Mobile Optimized */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 bg-orange-900/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">Testimonials</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-900 mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">
                What Our <span className="text-orange-500">Customers Say</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { quote: "Fashion Hub transformed my wardrobe! The quality is unmatched and the styles are always on-trend.", name: "Sarah Johnson", role: "Fashion Blogger" },
                { quote: "I love the variety and the attention to detail. Every piece feels premium and carefully curated.", name: "Michael Chen", role: "Style Enthusiast" },
                { quote: "The best shopping experience online. Fast delivery and excellent customer service every time.", name: "Emma Davis", role: "Loyal Customer" }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex mb-2 sm:mb-3 md:mb-4 text-orange-500 text-sm sm:text-base md:text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-orange-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🎯 CTA SECTION - Mobile Optimized */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/about.webp" alt="CTA Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-800/70"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Ready to Elevate Your <span className="text-orange-400">Style</span>?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-orange-100/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
              Join thousands of fashion enthusiasts who trust Fashion Hub for their everyday style needs.
            </p>
            <Link to="/">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
                Shop Now
              </button>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
      <ScrollButton />

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }

        /* Mobile optimization */
        @media (max-width: 480px) {
          .animate-fadeInUp {
            animation-duration: 0.6s;
          }
        }
      `}</style>
    </>
  );
};

export default About;