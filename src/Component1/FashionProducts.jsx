import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../Navbar";
import { useCart } from '../CartContext';  
import { ButtonLoader } from '../LoadingSpinner';

const FashionProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  const products = [
    { 
      id: 201, name: 'Casual Printed Shirt', category: "Fashion", sub: "Men • Essential", price: 2499, oldPrice: 3999, 
      images: ["/Fashion/Products/fp1.png", "/Fashion/Products/fp1_1.png", "/Fashion/Products/fp1_2.png","/Fashion/Products/fp1_3.png","/Fashion/Products/fp1_4.png"],
      tag: "Trending", color: "Vintage Print", rating: "4.7", reviews: "1.2k",
      details: { "Fabric": "Premium Cotton", "Fit": "Slim Fit", "Sleeve": "Full", "Occasion": "Casual", "Wash": "Machine Wash" }
    },
    { 
      id: 202, name: 'Party Wear Saree', category: "Fashion", sub: "Women • Heritage", price: 8999, oldPrice: 12000, 
      images: ["/Fashion/Products/fp2.png", "/Fashion/Products/fp2_1.png", "/Fashion/Products/fp2_2.png","/Fashion/Products/fp2_3.png","/Fashion/Products/fp2_4.png"],
      tag: "Signature", color: "Royal Crimson", rating: "4.9", reviews: "850",
      details: { "Material": "Pure Silk Blend", "Work": "Zari Embroidery", "Length": "6.5 Meters", "Includes": "Unstitched Blouse", "Style": "Traditional" }
    },
    { 
      id: 203, name: 'Designer Girls Frock', category: "Fashion", sub: "Kids • Festive", price: 3299, oldPrice: 4500, 
      images: ["/Fashion/Products/fp3.png", "/Fashion/Products/fp3_1.png", "/Fashion/Products/fp3_2.png","/Fashion/Products/fp3_3.png","/Fashion/Products/fp3_4.png"],
      tag: "New Arrival", color: "Pastel Pink", rating: "4.8", reviews: "420",
      details: { "Fabric": "Soft Tulle & Organza", "Lining": "100% Cotton", "Age": "5-12 Years", "Closure": "Back Zipper", "Feel": "Lightweight" }
    },
    { 
      id: 204, name: 'Slim Fit Formal Pants', category: "Fashion", sub: "Men • Professional", price: 2899, oldPrice: 4200, 
      images: ["/Fashion/Products/fp4.png", "/Fashion/Products/fp4_1.png", "/Fashion/Products/fp4_2.png","/Fashion/Products/fp4_3.png","/Fashion/Products/fp4_4.png"],
      tag: "Bestseller", color: "Charcoal Grey", rating: "4.6", reviews: "2.1k",
      details: { "Material": "Poly-Viscose Stretch", "Fit": "Modern Slim", "Pockets": "4 Utility Pockets", "Rise": "Mid Rise", "Finish": "Crease Resistant" }
    },
    { 
     id: 205, name: 'Boys Shirt', category: "Fashion", sub: "Kids Boy • Essential", price: 15999, oldPrice: 22000, 
     images: ["/Fashion/Products/fp5.png", "/Fashion/Products/fp5_1.png", "/Fashion/Products/fp5_2.png","/Fashion/Products/fp5_3.png","/Fashion/Products/fp5_4.png"],
     tag: "Premium", color: "Midnight Black", rating: "5.0", reviews: "150",
     details: { "Outer": "Italian Wool Blend", "Lapel": "Satin Peak Lapel", "Lining": "Silk Jacquard", "Fit": "Tailored", "Event": "Gala/Wedding" }
   },
   { 
     id: 206, name: 'Long Dress', category: "Fashion", sub: "Women • Haute Couture", price: 12499, oldPrice: 18000, 
     images: ["/Fashion/Products/fp6.png", "/Fashion/Products/fp6_1.png", "/Fashion/Products/fp6_2.png","/Fashion/Products/fp6_3.png","/Fashion/Products/fp6_4.png"],
     tag: "Limited Edit", color: "Deep Emerald", rating: "4.9", reviews: "310",
     details: { "Fabric": "Micro Velvet", "Silhouette": "Floor Length", "Stretch": "Slight", "Neckline": "Sweetheart", "Care": "Dry Clean Only" }
   },
   { 
     id: 207, name: 'Boys Set', category: "Fashion", sub: "Kids Boy • Heritage", price: 24999, oldPrice: 35000, 
     images: ["/Fashion/Products/fp7.png", "/Fashion/Products/fp7_1.png", "/Fashion/Products/fp7_2.png","/Fashion/Products/fp7_3.png","/Fashion/Products/fp7_4.png"],
     tag: "Exclusive", color: "Ivory Gold", rating: "4.9", reviews: "85",
     details: { "Work": "Hand-stitched Zardosi", "Fabric": "Banarasi Silk", "Includes": "Stole & Chudidar", "Feel": "Ultra Luxury", "Weight": "Heavy" }
   },
   { 
     id: 208, name: 'Short Dress', category: "Fashion", sub: "Women • Essentials", price: 4299, oldPrice: 6500, 
     images: ["/Fashion/Products/fp8.png", "/Fashion/Products/fp8_1.png", "/Fashion/Products/fp8_2.png","/Fashion/Products/fp8_3.png","/Fashion/Products/fp8_4.png"],
     tag: "Trending", color: "Floral Peach", rating: "4.7", reviews: "900",
     details: { "Fabric": "Georgette Chiffon", "Pattern": "French Floral", "Lining": "Satin", "Length": "Midi", "Style": "Summer Chic" }
   },
   { 
     id: 209, name: 'Girls Set', category: "Fashion", sub: "Kids Girl • Festive", price: 4599, oldPrice: 6200, 
     images: ["/Fashion/Products/fp9.png", "/Fashion/Products/fp9_1.png", "/Fashion/Products/fp9_2.png","/Fashion/Products/fp9_3.png","/Fashion/Products/fp9_4.png"],
     tag: "Junior Line", color: "Marigold Yellow", rating: "4.8", reviews: "200",
     details: { "Fabric": "Silk Taffeta", "Dupatta": "Net with Border", "Age": "4-10 Years", "Occasion": "Festive", "Comfort": "Cotton Lining" }
   },
   { 
     id: 210, name: 'Jean Pants', category: "Fashion", sub: "Kids • Discover", price: 1999, oldPrice: 2899, 
     images: ["/Fashion/Products/fp10.png", "/Fashion/Products/fp10_1.png", "/Fashion/Products/fp10_2.png","/Fashion/Products/fp10_3.png","/Fashion/Products/fp10_4.png"],
     tag: "Essentials", color: "Acid Wash Blue", rating: "4.5", reviews: "1.1k",
     details: { "Fabric": "Heavy Denim", "Fit": "Regular", "Style": "Unisex", "Wash": "Fade Resistant", "Durability": "High" }
   },
   { 
     id: 211, name: 'Formal Pants', category: "Fashion", sub: "Men • Professional", price: 3499, oldPrice: 4999, 
     images: ["/Fashion/Products/fp11.png", "/Fashion/Products/fp11_1.png", "/Fashion/Products/fp11_2.png","/Fashion/Products/fp11_3.png","/Fashion/Products/fp11_4.png"],
     tag: "Classic", color: "Navy Blue", rating: "4.7", reviews: "3.2k",
     details: { "Fabric": "Lycra Cotton Mix", "Fit": "Modern Straight", "Stretch": "Comfort Stretch", "Iron": "Low Heat", "Waist": "Mid-Rise" }
   },
   { 
     id: 212, name: 'Casual Saree', category: "Fashion", sub: "Women • Heritage", price: 3899, oldPrice: 5200, 
     images: ["/Fashion/Products/fp12.png", "/Fashion/Products/fp12_1.png", "/Fashion/Products/fp12_2.png","/Fashion/Products/fp12_3.png","/Fashion/Products/fp12_4.png"],
     tag: "New Arrival", color: "Mustard Gold", rating: "4.8", reviews: "600",
     details: { "Fabric": "Chanderi Silk", "Emroidery": "Lucknowi Chikankari", "Length": "Calf Length", "Sleeve": "3/4th", "Pairing": "Leggings/Palazzos" }
   }
  ];

  const getSizes = () => ["S", "M", "L", "XL"];

  // Effect to handle slideshow in modal
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
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
  }, [selectedProduct]);

  // Close modal simply by setting state to null
  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = async (product, size) => {
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(product, 1, size, product.color);
    setIsAddingToCart(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#f8f7f4] py-16 px-6 md:px-24 min-h-screen font-sans text-slate-900">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="text-[11px] tracking-[0.7em] uppercase text-orange-600 font-bold mb-5">Season MMXXVI</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">The Gallery</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 mb-32">
          {products.map((p) => (
            <div 
              key={p.id} 
              className="group cursor-pointer relative" 
              onClick={() => {
                // Modal open logic only - No navigation
                setSelectedProduct(p);
                setActiveImgIndex(0);
                const existingItem = cartItems.find(item => item.id === p.id);
                setSelectedSize(existingItem?.selectedSize || getSizes()[0]);
              }}
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-white transition-all duration-1000 group-hover:shadow-2xl group-hover:-translate-y-3 rounded-[24px]">
                <img src={p.images[0]} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={p.name} />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[8px] font-black uppercase tracking-widest rounded-full">{p.tag}</div>
              </div>
              <div className="mt-8 space-y-2 px-1 text-center md:text-left">
                <p className="text-[9px] text-orange-800 font-bold uppercase tracking-[0.2em] opacity-50">{p.sub}</p>
                <h3 className="text-[14px] font-bold tracking-wide uppercase group-hover:text-orange-700">{p.name}</h3>
                <p className="font-medium text-lg tracking-tight text-slate-700">₹{p.price.toLocaleString()} <span className="text-slate-300 line-through ml-2 text-[13px]">₹{p.oldPrice.toLocaleString()}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Logic */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
             <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={handleClose}></div>
             <div className="relative bg-white w-full max-w-7xl h-full md:h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[40px]">
                <button onClick={handleClose} className="absolute top-8 right-10 text-xl z-50 text-slate-400 hover:text-black font-bold">✕</button>
                
                {/* Modal Images */}
                <div className="md:w-3/5 bg-[#f3f2ee] flex h-1/3 md:h-full relative overflow-hidden">
                   <div className="hidden md:flex flex-col gap-4 p-8 z-10">
                      {selectedProduct.images.map((img, i) => (
                        <div key={i} onMouseEnter={() => setActiveImgIndex(i)} className={`w-16 h-20 cursor-pointer rounded-xl overflow-hidden transition-all ${activeImgIndex === i ? 'ring-2 ring-orange-500 shadow-xl scale-105' : 'opacity-40'}`}>
                          <img src={img} className="w-full h-full object-cover" alt="" />
                        </div>
                      ))}
                   </div>
                   <div className="flex-1 relative flex items-center justify-center bg-white m-4 rounded-[30px] overflow-hidden">
                      <img key={activeImgIndex} src={selectedProduct.images[activeImgIndex]} className="w-full h-full object-contain p-12 transition-all duration-700 animate-in fade-in zoom-in-95" alt="" />
                   </div>
                </div>

                {/* Modal Info */}
                <div className="md:w-2/5 p-10 md:p-16 overflow-y-auto flex flex-col bg-[#f4f3f0]">
                   <p className="text-orange-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">{selectedProduct.sub}</p>
                   <h2 className="text-4xl font-serif italic text-slate-950 leading-tight uppercase mb-8">{selectedProduct.name}</h2>
                   <div className="flex items-center gap-6 mb-10">
                      <span className="text-[11px] font-bold bg-slate-950 text-white px-4 py-1.5 rounded-full">★ {selectedProduct.rating}</span>
                      <span className="text-slate-500 text-[10px] font-bold tracking-widest">{selectedProduct.reviews} REVIEWS</span>
                   </div>
                   <div className="flex items-baseline gap-4 mb-10">
                      <span className="text-5xl font-light tracking-tighter text-slate-950">₹{selectedProduct.price.toLocaleString()}</span>
                      <span className="text-slate-300 line-through text-xl">₹{selectedProduct.oldPrice.toLocaleString()}</span>
                   </div>
                   
                   <div className="space-y-4 mb-12">
                      {Object.entries(selectedProduct.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-[13px] border-b border-slate-200/60 pb-3">
                          <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{key}</span>
                          <span className="text-slate-950 font-bold">{value}</span>
                        </div>
                      ))}
                   </div>

                   <div className="mb-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">Select Size</p>
                      <div className="flex flex-wrap gap-3">
                        {getSizes().map(s => (
                          <button key={s} onClick={() => setSelectedSize(s)} className={`h-12 min-w-[65px] text-[11px] font-bold rounded-2xl border transition-all ${selectedSize === s ? 'bg-slate-950 text-white border-slate-950 scale-105' : 'border-slate-200 bg-white hover:border-slate-400'}`}>
                            {s}
                          </button>
                        ))}
                      </div>
                   </div>

                   <button 
                    disabled={isAddingToCart}
                    onClick={() => handleAddToCart(selectedProduct, selectedSize)} 
                    className="w-full border-2 border-slate-950 h-16 rounded-full font-bold uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all active:scale-95 disabled:opacity-50"
                   >
                      {isAddingToCart ? 'Adding to Bag...' : 'Add to Bag'}
                   </button>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* 🏛️ FOOTER */}
      <footer className="bg-gray-950 text-white pt-24 pb-12 px-6 md:px-16 border-t border-gray-800 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tighter italic">
                FASHION<span className="text-orange-500">HUB</span>
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
                <li><Link to="/products" className="hover:text-white transition-colors duration-200">The Gallery (New Arrivals)</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-400 text-sm">Support</h4>
              <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors duration-200">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
                <li><Link to="/shipping" className="hover:text-white transition-colors duration-200">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-white transition-colors duration-200">Returns Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-400 text-sm">Contact</h4>
              <ul className="space-y-5 text-gray-400">
                <li className="flex items-start gap-4">
                  <span className="text-xl">📍</span>
                  <span className="text-sm leading-relaxed font-medium">123 Style Avenue, Vadapalani, <br /> Chennai - 600026</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-xl">📞</span>
                  <span className="text-sm font-medium">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-xl">✉️</span>
                  <span className="text-sm font-medium">support@fashionhub.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-bold">
              © 2026 FASHION HUB. DESIGNED FOR ELEGANCE.
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

export default FashionProducts;