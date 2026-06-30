// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
         
      <footer className="bg-gray-950 text-white pt-10 pb-4 px-6 md:px-16 border-t border-gray-800 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tighter italic">
                 <span className="text-orange-500">ELITEINOVA</span> FASHION<span className="text-orange-500">HUB</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Redefining your style with premium garment collections. From everyday essentials to luxury couture, we bring the best trends to your doorstep.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"><span className="text-[10px] font-bold">FB</span></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"><span className="text-[10px] font-bold">IG</span></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"><span className="text-[10px] font-bold">X</span></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-400 text-sm">Shop By</h4>
              <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li><Link to="/fashion/men" className="hover:text-white transition-colors duration-200">Men's Signature Line</Link></li>
                <li><Link to="/fashion/women" className="hover:text-white transition-colors duration-200">Women's Haute Couture</Link></li>
                <li><Link to="/fashion/kids" className="hover:text-white transition-colors duration-200">Kids Festive Wear</Link></li>
                {/* <li><Link to="/products" className="hover:text-white transition-colors duration-200">The Gallery (New Arrivals)</Link></li> */}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-400 text-sm">Support</h4>
              <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors duration-200">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors duration-200">Our Services</Link></li>
                
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-400 text-sm">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-4">
                  <span className="text-xl">📍</span>
                  <span className="text-sm leading-relaxed font-medium">No.78,1st Street,kumaran Colony,Vadapalani, <br /> Chennai - 600026</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-xl">📞</span>
                  <span className="text-sm font-medium">+91 7397260093</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-xl">✉️</span>
                  <span className="text-sm font-medium">support@eliteinovafashionhub.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 pb-3 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-bold">
              © 2026 ELITEINOVA FASHION HUB. DESIGNED FOR ELEGANCE. 
              <span className="text-amber-600/80 text-[10px] tracking-[0.2em] font-semibold uppercase">
                Digital Partner By 
                <span className="text-amber-600/80 text-[13px] tracking-[0.2em] ml-1 font-semibold capitalize">
                   Eliteinova Tech Pvt Ltd
                </span>
              </span>
            </div>
            <div className="flex items-center gap-6 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;