// Services.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollButton from './ScrollButton';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      icon: "🚚",
      title: "Express Delivery",
      description: "Get your fashion delivered within 24-48 hours. We partner with premium logistics to ensure your orders reach you swiftly and safely.",
      color: "from-orange-400 to-orange-600",
      bg: "bg-orange-50",
      shadow: "shadow-orange-500/20",
      fullDetails: "Our express delivery service ensures your fashion arrives at your doorstep within 24-48 hours. We've partnered with premium logistics providers to guarantee safe and swift delivery. Track your order in real-time and enjoy peace of mind with our insured shipping. Experience the joy of receiving your favorite fashion pieces faster than ever before.",
      features: ["24-48 hour delivery", "Real-time tracking", "Insured shipping", "Free delivery on orders above ₹999"]
    },
    {
      id: 2,
      icon: "👗",
      title: "Personal Styling",
      description: "Our expert stylists curate looks tailored to your personality, body type, and occasion. Experience fashion that truly represents you.",
      color: "from-pink-400 to-pink-600",
      bg: "bg-pink-50",
      shadow: "shadow-pink-500/20",
      fullDetails: "Our personal styling service connects you with expert fashion consultants who understand your unique style. They curate complete looks based on your personality, body type, occasion, and preferences. From casual wear to formal attire, our stylists ensure you always look your best.",
      features: ["Personalized style consultation", "Curated lookbooks", "Occasion-based styling", "Virtual and in-person sessions"]
    },
    {
      id: 3,
      icon: "🔄",
      title: "Easy Returns",
      description: "Not satisfied? No worries! Enjoy hassle-free returns within 30 days. We believe in complete customer satisfaction.",
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-50",
      shadow: "shadow-blue-500/20",
      fullDetails: "We stand behind every product we sell. Our 30-day return policy ensures you can shop with complete confidence. If you're not satisfied with your purchase, simply initiate a return and we'll handle the rest. No questions asked, no hassle involved.",
      features: ["30-day return window", "Free return shipping", "Full refund or exchange", "Quick processing"]
    },
    {
      id: 4,
      icon: "💳",
      title: "Secure Payments",
      description: "Shop with confidence using our secure payment gateway. Multiple payment options including UPI, cards, and net banking.",
      color: "from-green-400 to-green-600",
      bg: "bg-green-50",
      shadow: "shadow-green-500/20",
      fullDetails: "Your security is our priority. Our payment gateway uses industry-leading encryption to protect your financial information. With multiple payment options available, you can choose the method that works best for you.",
      features: ["256-bit encryption", "Multiple payment options", "UPI, Cards, Net Banking", "Secure checkout process"]
    },
    {
      id: 5,
      icon: "🎁",
      title: "Gift Wrapping",
      description: "Make your presents special with our premium gift wrapping service. Perfect for birthdays, anniversaries, and celebrations.",
      color: "from-purple-400 to-purple-600",
      bg: "bg-purple-50",
      shadow: "shadow-purple-500/20",
      fullDetails: "Make every occasion special with our premium gift wrapping service. Choose from elegant designs and add a personalized message to make your gift truly memorable. Perfect for birthdays, anniversaries, weddings, and all celebrations.",
      features: ["Premium wrapping designs", "Personalized messages", "Ribbon and decoration options", "Eco-friendly materials"]
    },
    {
      id: 6,
      icon: "👔",
      title: "Alteration Service",
      description: "Need the perfect fit? Our professional tailors provide alteration services to ensure your clothing fits you like a dream.",
      color: "from-yellow-400 to-yellow-600",
      bg: "bg-yellow-50",
      shadow: "shadow-yellow-500/20",
      fullDetails: "Our expert tailors ensure your clothing fits perfectly. Whether it's hemming pants, adjusting sleeves, or completely altering a garment, we handle it with precision and care. Your satisfaction is our priority.",
      features: ["Professional tailoring", "Precision measurements", "Quick turnaround", "Satisfaction guaranteed"]
    },
    {
      id: 7,
      icon: "📱",
      title: "Virtual Try-On",
      description: "Experience our augmented reality try-on feature. See how outfits look on you before making a purchase decision.",
      color: "from-indigo-400 to-indigo-600",
      bg: "bg-indigo-50",
      shadow: "shadow-indigo-500/20",
      fullDetails: "Revolutionize your shopping experience with our AR try-on feature. Simply upload your photo and see how different outfits look on you before making a purchase. It's shopping made smarter and more fun.",
      features: ["AR technology", "Realistic previews", "Multiple outfit options", "Easy to use interface"]
    },
    {
      id: 8,
      icon: "👥",
      title: "Loyalty Program",
      description: "Join our exclusive loyalty club and earn rewards with every purchase. Enjoy special discounts, early access, and birthday perks.",
      color: "from-red-400 to-red-600",
      bg: "bg-red-50",
      shadow: "shadow-red-500/20",
      fullDetails: "Our loyalty program rewards you for being a valued customer. Earn points with every purchase, unlock exclusive discounts, and get early access to new collections. Celebrate your birthday with special offers and enjoy member-only benefits.",
      features: ["Earn points per purchase", "Exclusive discounts", "Early access to collections", "Birthday rewards"]
    }
  ];

  const features = [
    {
      icon: "⭐",
      title: "5-Star Service",
      description: "Rated by thousands of satisfied customers"
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Recognized for excellence in fashion retail"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving customers across 50+ countries"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Curated collections from top designers"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-[#f5eadf]">
        
        {/* 🏆 LUXURY HERO SECTION */}
        <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden mt-5">
          <div className="absolute inset-0">
            <img 
              src="/services-hero.jpg" 
              alt="Our Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 to-black/70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,100,0.1),transparent)]"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-20">
            <div className="text-center max-w-5xl animate-fadeInUp">
              <div className="inline-block mb-6">
                <span className="inline-block border-2 border-orange-400/50 text-orange-200 px-8 py-2 rounded-full text-sm font-semibold tracking-[0.3em] uppercase backdrop-blur-sm">
                  Premium Services
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
                Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Luxury</span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-100/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
                Discover our exclusive range of premium services designed to make your fashion journey truly exceptional.
              </p>
              <div className="flex justify-center mt-8">
                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* 🎯 WHY CHOOSE US */}
        <section className="py-20 px-6 md:px-20 bg-white/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-bold text-sm tracking-[0.3em] uppercase">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mt-4 mb-4">
                Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Every Detail</span>
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🌟 OUR SERVICES */}
        <section className="py-20 px-6 md:px-20 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-bold text-sm tracking-[0.3em] uppercase">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mt-4 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Premium Services</span>
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg font-light">
                Every service is crafted with precision and care to ensure you receive nothing but the best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`${service.bg} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp group relative overflow-hidden cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(service)}
                >
                  {/* Decorative Gradient Border */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                  
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl mb-5 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{service.description}</p>
                  
                  {/* Learn More Link */}
                  <div className="mt-4">
                    <button className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all duration-300 hover:text-orange-700">
                      Learn More 
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 📋 HOW IT WORKS */}
        <section className="py-20 px-6 md:px-20 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-bold text-sm tracking-[0.3em] uppercase">Simple Process</span>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mt-4 mb-4">
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Works</span>
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Choose Your Style",
                  description: "Browse our curated collections and select the pieces that speak to your unique style.",
                  icon: "🛍️"
                },
                {
                  step: "02",
                  title: "Personalize It",
                  description: "Use our services to customize, alter, or get styling advice for your perfect look.",
                  icon: "✨"
                },
                {
                  step: "03",
                  title: "Enjoy Luxury",
                  description: "Experience premium delivery, easy returns, and exceptional customer support.",
                  icon: "🎉"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp text-center group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
                    {item.step}
                  </div>
                  
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 💎 TESTIMONIALS */}
        <section className="py-20 px-6 md:px-20 relative">
          <div className="absolute inset-0 bg-orange-900/5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-bold text-sm tracking-[0.3em] uppercase">Client Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mt-4 mb-4">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Clients Say</span>
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Fashion Influencer",
                  quote: "The personal styling service transformed my wardrobe! The team understood my style perfectly and curated pieces I absolutely love.",
                  image: "👩",
                  rating: 5
                },
                {
                  name: "Arjun Mehta",
                  role: "Business Professional",
                  quote: "Express delivery and seamless returns make shopping here a pleasure. The quality is unmatched and the service is impeccable.",
                  image: "👨",
                  rating: 5
                },
                {
                  name: "Riya Patel",
                  role: "Style Enthusiast",
                  quote: "The virtual try-on feature is revolutionary! I can see how outfits look before buying. Absolutely love the innovation.",
                  image: "👩",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-3xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4 text-orange-500 text-xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic font-light leading-relaxed">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🎯 CTA SECTION */}
        <section className="relative py-28 px-6 md:px-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/services-cta-bg.jpg" alt="CTA Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-black/80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,100,0.05),transparent)]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center animate-fadeInUp">
            <span className="inline-block border border-orange-400/30 text-orange-300 px-6 py-2 rounded-full text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-sm mb-6">
              Ready to Experience Luxury
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Fashion Journey</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light tracking-wide">
              Experience our premium services designed to make your fashion experience truly exceptional.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-orange-500/40 flex items-center gap-2">
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </Link>
              <Link to="/">
                <button className="border-2 border-white/50 text-white hover:bg-white hover:text-orange-900 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm">
                  Explore Collections
                </button>
              </Link>
            </div>

            <div className="flex justify-center mt-12">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
            </div>
          </div>
        </section>

      </div>

      {/* 🔥 SERVICE DETAIL MODAL - PERFECTLY CENTERED */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content - Perfectly Centered */}
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl animate-scaleIn mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:rotate-90 z-10"
            >
              ✕
            </button>

            {/* Header */}
            <div className={`p-8 bg-gradient-to-r ${selectedService.color} rounded-t-3xl`}>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-white/80 text-sm font-light mt-1">Premium Service</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">About This Service</h4>
                <p className="text-gray-600 leading-relaxed font-light">
                  {selectedService.fullDetails}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    closeModal();
                    window.location.href = '/contact';
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/30"
                >
                  Get This Service
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollButton />

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
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
      `}</style>
    </>
  );
};

export default Services;