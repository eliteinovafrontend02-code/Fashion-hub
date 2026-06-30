// Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollButton from './ScrollButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-[#f5eadf]">
        
        {/* 🏆 LUXURY HERO SECTION - Mobile Optimized */}
        <section className="relative w-full h-[30vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mt-5">
          <div className="absolute inset-0">
            <img 
              src="/contactbanner.webp" 
              alt="Contact Us" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-black/60"></div>
            {/* Decorative Gold Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,100,0.1),transparent)]"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-20">
            <div className="text-center max-w-5xl animate-fadeInUp">
              <div className="inline-block mb-3 sm:mb-4 md:mb-6">
                <span className="inline-block border-2 border-orange-400/50 text-orange-200 px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase backdrop-blur-sm">
                  Connect With Elegance
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Connect</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-orange-100/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-2">
                We're here to elevate your fashion experience. Reach out and let's create something extraordinary together.
              </p>
              {/* Decorative Line */}
              <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
                <div className="w-20 sm:w-24 md:w-32 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden sm:block">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* 📞 CONTACT SECTION - Mobile Optimized */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
              <span className="text-orange-600 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">Contact Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-900 mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">
                We're Here to <span className="text-orange-500">Help</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-5 md:mt-6 max-w-2xl mx-auto px-2">
                Have questions, feedback, or need assistance? Our team is ready to assist you with any inquiries.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* 📍 CONTACT INFO CARDS - Mobile Optimized */}
              <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                {[
                  { 
                    icon: "📍", 
                    title: "Visit Us", 
                    detail: "No.78,1st Street,Kumaran Colony,vadapalani, Chennai - 600026",
                    sub: "Mon-Sat: 10:00 AM - 8:00 PM"
                  },
                  { 
                    icon: "📞", 
                    title: "Call Us", 
                    detail: "+91 7397260093",
                    sub: "Available 24/7 for support"
                  },
                  { 
                    icon: "✉️", 
                    title: "Email Us", 
                    detail: "care@eliteinovafashionhub.com",
                    sub: "Response within 2 hours"
                  },
                  { 
                    icon: "💬", 
                    title: "Live Chat", 
                    detail: "WhatsApp Support",
                    sub: "Click to chat with us"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/10 rounded-full flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{item.title}</h3>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1 break-words">{item.detail}</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 📝 CONTACT FORM - Mobile Optimized */}
              <div className="lg:col-span-2 animate-fadeInUp">
                <div className="bg-white p-5 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">Send Us a Message</h3>
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 sm:px-6 py-3 sm:py-4 rounded-xl mb-4 sm:mb-6 animate-fadeInUp text-sm sm:text-base">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4 sm:rows-5"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-orange-500/30"
                    >
                      Send Message →
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🎯 LUXURY CTA SECTION - Mobile Optimized */}
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/contact.webp" alt="CTA Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-black/80"></div>
            {/* Decorative Gold Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,100,0.05),transparent)]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center animate-fadeInUp">
            <span className="inline-block border border-orange-400/30 text-orange-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase backdrop-blur-sm mb-4 sm:mb-6">
              Join Our Community
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Stay Connected With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Fashion Hub</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-light tracking-wide px-2">
              Follow us for daily fashion inspiration, exclusive offers, and behind-the-scenes style tips.
            </p>
            
            {/* Social Media Icons - Mobile Optimized */}
            <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
              {[
                { platform: "Instagram", icon: "📸", color: "from-pink-500 to-purple-500", hover: "hover:shadow-pink-500/40" },
                { platform: "Facebook", icon: "👍", color: "from-blue-600 to-blue-700", hover: "hover:shadow-blue-600/40" },
                { platform: "YouTube", icon: "▶️", color: "from-red-600 to-red-700", hover: "hover:shadow-red-600/40" },
                { platform: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500", hover: "hover:shadow-blue-400/40" }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`bg-gradient-to-r ${social.color} hover:scale-110 transition-all duration-300 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold shadow-2xl ${social.hover} flex items-center gap-2 sm:gap-3 group text-xs sm:text-sm md:text-base`}
                >
                  <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">{social.icon}</span>
                  <span className="hidden xs:inline-block">{social.platform}</span>
                </button>
              ))}
            </div>

            {/* Decorative Line */}
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
              <div className="w-20 sm:w-24 md:w-32 h-[2px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
            </div>
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
            transform: translateY(40px);
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

        /* Custom breakpoint for extra small screens */
        @media (max-width: 480px) {
          .animate-fadeInUp {
            animation-duration: 0.6s;
          }
        }

        /* Hide social platform text on very small screens */
        @media (max-width: 360px) {
          .xs\\:inline-block {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;