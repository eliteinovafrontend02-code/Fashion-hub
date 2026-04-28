import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useCart } from './CartContext';  
import { ButtonLoader } from './LoadingSpinner';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // USE CART CONTEXT INSTEAD of local cartState
   const { cartItems, addToCart, updateQuantity, removeItem, getItemCount } = useCart();

  const products = [
    { 
      id: 1, name: "Casual Shirt", category: "Fashion", sub: "Men", price: 1899, oldPrice: 2999, 
      images: ["/Products/product1.png", "/Products/product1_1.png", "/Products/product1_2.png", "/Products/product1_3.png", "/Products/product1_4.png"],
      tag: "Trending", color: "Indigo Blue", rating: "4.7", reviews: "2.1k",
      details: { "Material": "Raw Denim Cotton", "Fit": "Tailored Fit", "Sleeve": "Full", "Wash": "Deep Indigo Wash", "Quality": "Authentic" }
    },
    { 
      id: 2, name: "Classic Wrist Watch", category: "Accessories", sub: "Watches", price: 2499, oldPrice: 4599, 
      images: ["/Products/product2.png", "/Products/product2_1.png", "/Products/product2_2.png", "/Products/product2_3.png", "/Products/product2_4.png"],
      tag: "Best Seller", color: "Chrome Silver", rating: "4.8", reviews: "850",
      details: { "Type": "Analog", "Strap": "Stainless Steel", "Movement": "Japanese Quartz", "Warranty": "2 Years", "Waterproof": "50M" }
    },
    { 
      id: 3, name: "Stylish Heels", category: "Footwear", sub: "Women", price: 3299, oldPrice: 4999, 
      images: ["/Products/product3.png", "/Products/product3_1.png", "/Products/product3_2.png", "/Products/product3_3.png", "/Products/product3_4.png"],
      tag: "Hot", color: "Nude Beige", rating: "4.6", reviews: "920",
      details: { "Material": "Premium Suede", "Heel": "4 Inches", "Sole": "Anti-Slip Rubber", "Occasion": "Evening Wear", "Care": "Professional Clean" }
    },
    { 
      id: 4, name: "Matte Lipstick Kit", category: "Beauty", sub: "Makeup", price: 899, oldPrice: 1499, 
      images: ["/Products/product4.png", "/Products/product4_1.png", "/Products/product4_2.png", "/Products/product4_3.png", "/Products/product4_4.png"],
      tag: "New", color: "Ruby Red", rating: "4.9", reviews: "3.5k",
      details: { "Finish": "Velvet Matte", "Stay": "24 Hours", "Feature": "Transfer Proof", "Items": "Pack of 3", "Type": "Liquid" }
    },
    { 
      id: 5, name: "Pro Running Shoes", category: "Footwear", sub: "Men", price: 5500, oldPrice: 8000, 
      images: ["/Products/product5.png", "/Products/product5_1.png", "/Products/product5_2.png", "/Products/product5_3.png", "/Products/product5_4.png"],
      tag: "Premium", color: "Neon Blue", rating: "4.7", reviews: "400",
      details: { "Upper": "Engineered Mesh", "Sole": "Cushioned React", "Weight": "190g", "Type": "Pro Marathon", "Grip": "High Traction" }
    },
    { 
      id: 6, name: "Gold Choker Necklace", category: "Jewellery", sub: "Necklace", price: 7200, oldPrice: 9500, 
      images: ["/Products/product6.png", "/Products/product6_1.png", "/Products/product6_2.png", "/Products/product6_3.png", "/Products/product6_4.png"],
      tag: "Traditional", color: "Antique Gold", rating: "4.8", reviews: "1.1k",
      details: { "Metal": "22K Gold Plated", "Stone": "Kundan", "Design": "Bridal Wear", "Includes": "Earrings Pair", "Adjustable": "Thread Back" }
    },
    { 
      id: 7, name: "Slim Fit Indigo Jean", category: "Fashion", sub: "Men", price: 3799, oldPrice: 5999, 
      images: ["/Products/product7.png", "/Products/product7_1.png", "/Products/product7_2.png", "/Products/product7_3.png", "/Products/product7_4.png"],
      tag: "Performance", color: "Dark Indigo", rating: "4.5", reviews: "4.2k",
      details: { "Fabric": "Stretch Denim", "Fit": "Slim Fit", "Rise": "Mid", "Wash": "Vintage Wash", "Stretch": "4% Elastane" }
    },
    { 
      id: 8, name: "Kids Frock", category: "Fashion", sub: "Kids", price: 4499, oldPrice: 6800, 
      images: ["/Products/product8.png", "/Products/product8_1.png", "/Products/product8_2.png", "/Products/product8_3.png", "/Products/product8_4.png"],
      tag: "Cute", color: "Blush Pink", rating: "4.7", reviews: "310",
      details: { "Fabric": "Soft Organza", "Lining": "Pure Cotton", "Occasion": "Party Wear", "Age": "5-12 Years", "Includes": "Sash Belt" }
    },
    { 
      id: 9, name: "Retro Square Sunglasses", category: "Accessories", sub: "Eyewear", price: 2199, oldPrice: 3500, 
      images: ["/Products/product9.png", "/Products/product9_1.png", "/Products/product9_2.png", "/Products/product9_3.png", "/Products/product9_4.png"],
      tag: "Best Value", color: "Tortoise Shell", rating: "4.4", reviews: "5.5k",
      details: { "Lens": "Polarized UV400", "Frame": "Acetate", "Shape": "Square", "Gender": "Unisex", "Weight": "Lightweight" }
    },
    { 
      id: 10, name: "Hydrating Moisturizer", category: "Beauty", sub: "Skincare", price: 1599, oldPrice: 2200, 
      images: ["/Products/product10.png", "/Products/product10_1.png", "/Products/product10_2.png", "/Products/product10_3.png", "/Products/product10_4.png"],
      tag: "New", color: "Clear White", rating: "4.6", reviews: "600",
      details: { "Skin Type": "Dry to Normal", "Main Ingredient": "Hyaluronic Acid", "Volume": "50ml", "Feature": "72H Hydration", "Chemicals": "Paraben Free" }
    },
    { 
      id: 11, name: "Party Wear Heels", category: "Footwear", sub: "Women", price: 1299, oldPrice: 2500, 
      images: ["/Products/product11.png", "/Products/product11_1.png", "/Products/product11_2.png", "/Products/product11_3.png", "/Products/product11_4.png"],
      tag: "Essential", color: "Metallic Silver", rating: "4.3", reviews: "2.8k",
      details: { "Heel": "3 Inches", "Material": "Synthetic Leather", "Sole": "Soft Padded", "Occasion": "Festive", "Style": "Stiletto" }
    },
    { 
      id: 12, name: "Traditional Jhumka", category: "Jewellery", sub: "Earrings", price: 1499, oldPrice: 2250, 
      images: ["/Products/product12.png", "/Products/product12_1.png", "/Products/product12_2.png", "/Products/product12_3.png", "/Products/product12_4.png"],
      tag: "Dermat Tested", color: "Vintage Gold", rating: "4.9", reviews: "6.5k",
      details: { "Material": "Brass with Gold Polish", "Stone": "Pearls & Beads", "Style": "Temple Design", "Weight": "Medium", "Lock": "Push Back" }
    },
    { 
      id: 13, name: "Casual Sling Bag", category: "Accessories", sub: "Bags", price: 2899, oldPrice: 4200, 
      images: ["/Products/product13.png", "/Products/product13_1.png", "/Products/product13_2.png", "/Products/product13_3.png", "/Products/product13_4.png"],
      tag: "Elegant", color: "Tan Brown", rating: "4.7", reviews: "750",
      details: { "Material": "Vegan Leather", "Closure": "Magnet Flap", "Compartments": "2 Main + 1 Zip", "Strap": "Adjustable Gold Chain", "Size": "Small" }
    },
    { 
      id: 14, name: "Nourishing Hair Oil", category: "Beauty", sub: "Haircare", price: 1199, oldPrice: 1900, 
      images: ["/Products/product14.png", "/Products/product14_1.png", "/Products/product14_2.png", "/Products/product14_3.png", "/Products/product14_4.png"],
      tag: "Ethnic", color: "Natural Amber", rating: "4.8", reviews: "520",
      details: { "Ingredients": "15 Organic Herbs", "Benefit": "Hair Growth", "Volume": "200ml", "Usage": "Weekly Twice", "Type": "Non-Sticky" }
    },
    { 
      id: 15, name: "Kids Velcro Sandals", category: "Footwear", sub: "Kids", price: 2999, oldPrice: 4500, 
      images: ["/Products/product15.png", "/Products/product15_1.png", "/Products/product15_2.png", "/Products/product15_3.png", "/Products/product15_4.png"],
      tag: "Modern", color: "Red/Blue", rating: "4.4", reviews: "1.3k",
      details: { "Material": "EVA Lightweight", "Closure": "Velcro Strap", "Sole": "Anti-Slip", "Age": "2-6 Years", "Comfort": "Extra Soft Footbed" }
    },
    { 
      id: 16, name: "Modern Gold Bangles", category: "Jewellery", sub: "Bangles", price: 1899, oldPrice: 2800, 
      images: ["/Products/product16.png", "/Products/product16_1.png", "/Products/product16_2.png", "/Products/product16_3.png", "/Products/product16_4.png"],
      tag: "Minimalist", color: "Yellow Gold", rating: "4.6", reviews: "280",
      details: { "Polish": "High Gloss", "Pattern": "Geometric", "Quantity": "Set of 2", "Metal": "Alloy with Micron Gold", "Style": "Everyday Wear" }
    }
  ];

  // Get cart quantity for a product
  const getCartQuantity = (productId, size) => {
    const cartItem = cartItems.find(item => 
      item.id === productId && item.selectedSize === size
    );
    return cartItem?.quantity || 0;
  };

  const getSizes = (cat) => {
    if (cat === "Fashion") return ["S", "M", "L", "XL"];
    if (cat === "Footwear") return ["UK 7", "UK 8", "UK 9", "UK 10"];
    if (cat === "Jewellery") return ["2.4", "2.6", "2.8", "Adjustable"];
    return ["Standard"];
  };

  // AUTO-OPEN FROM URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get("id");
    if (productId) {
      const product = products.find((p) => p.id === parseInt(productId));
      if (product) {
        setSelectedProduct(product);
        setActiveImgIndex(0);
        const existingItem = cartItems.find(item => item.id === product.id);
        setSelectedSize(existingItem?.selectedSize || getSizes(product.category)[0]);
      }
    }
  }, [location.search, cartItems]);

  // IMAGE SLIDESHOW
  useEffect(() => {
    let interval;
    if (selectedProduct && !isPaused) {
      interval = setInterval(() => {
        setActiveImgIndex((prev) => (prev + 1) % 5);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [selectedProduct, isPaused]);

  // BODY SCROLL LOCK
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

  const handleClose = () => {
    setSelectedProduct(null);
    navigate("/products");
  };

  // Handle add to cart
  const handleAddToCart = async (product, size) => {
  setIsAddingToCart(true);
  // Simulate network delay (looks more realistic)
  await new Promise(resolve => setTimeout(resolve, 500));
  addToCart(product, 1, size, product.color);
  setIsAddingToCart(false);
};

  // Handle update quantity

const handleUpdateQuantity = (productId, size, delta) => {
  const currentQty = getCartQuantity(productId, size);
  const newQty = currentQty + delta;
  
  if (newQty <= 0) {
    // Remove item from cart
    removeItem(productId, size, selectedProduct?.color);
  } else {
    updateQuantity(productId, newQty, size, selectedProduct?.color);
  }
};
  return (
    <>
      <Navbar />
      <div className="bg-[#f8f7f4] py-16 px-6 md:px-24 min-h-screen font-sans text-slate-900 selection:bg-orange-100">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="text-[11px] tracking-[0.7em] uppercase text-orange-600 font-bold mb-5">Season 2026</p>
          <h2 className="text-7xl font-serif italic uppercase tracking-tighter text-slate-800">The Gallery</h2>
          <div className="h-[1px] w-24 bg-slate-300 mx-auto mt-10"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer relative" onClick={() => {
              setSelectedProduct(p);
              setActiveImgIndex(0);
              const existingItem = cartItems.find(item => item.id === p.id);
              setSelectedSize(existingItem?.selectedSize || getSizes(p.category)[0]);
              navigate(`/products?id=${p.id}`);
            }}>
              <div className="relative overflow-hidden aspect-[3/4] bg-white transition-all duration-1000 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group-hover:-translate-y-3 rounded-[24px]">
                <img src={p.images[0]} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" alt={p.name} />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[8px] font-black uppercase tracking-widest rounded-full shadow-sm">{p.tag}</div>
              </div>
              <div className="mt-8 space-y-2 px-1 text-center md:text-left">
                <p className="text-[9px] text-orange-800 font-bold uppercase tracking-[0.2em] opacity-50">{p.sub}</p>
                <h3 className="text-[14px] font-bold tracking-wide uppercase transition-colors group-hover:text-orange-700 text-slate-900">{p.name}</h3>
                <p className="font-medium text-lg tracking-tight text-slate-700">₹{p.price.toLocaleString()} <span className="text-slate-300 line-through ml-2 text-[13px]">₹{p.oldPrice.toLocaleString()}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={handleClose}></div>
            
            <div className="relative bg-white w-full max-w-7xl h-full md:h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[40px] animate-in zoom-in-95 duration-500 ring-1 ring-slate-100">
              
              <button onClick={handleClose} className="absolute top-8 right-10 text-xl z-50 text-slate-400 hover:text-black transition-all">✕</button>

              {/* LEFT SIDE: Images */}
              <div className="md:w-3/5 bg-[#f3f2ee] flex h-1/3 md:h-full relative overflow-hidden">
                <div className="hidden md:flex flex-col gap-4 p-8 z-10 opacity-100 transition-opacity" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                  {selectedProduct.images.map((img, i) => (
                    <div key={i} onMouseEnter={() => setActiveImgIndex(i)} 
                         className={`w-16 h-20 cursor-pointer overflow-hidden transition-all duration-500 rounded-xl ${activeImgIndex === i ? 'ring-2 ring-orange-500 shadow-xl scale-105' : 'opacity-40 hover:opacity-100'}`}>
                      <img src={img} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                </div>
                <div className="flex-1 relative flex items-center justify-center bg-white m-4 rounded-[30px] overflow-hidden shadow-inner ring-1 ring-slate-100">
                  <img key={activeImgIndex} src={selectedProduct.images[activeImgIndex]} className="w-full h-full object-contain p-12 transition-all duration-700 hover:scale-125" alt="" />
                </div>
              </div>

              {/* RIGHT SIDE: Info */}
              <div className="md:w-2/5 p-10 md:p-16 overflow-y-auto flex flex-col bg-[#f4f3f0] border-l border-slate-100">
                <div className="mb-auto">
                  <p className="text-orange-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">{selectedProduct.category}</p>
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
                      <div key={key} className="flex justify-between text-[13px] border-b border-slate-200/60 pb-3 group/item">
                        <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold group-hover/item:text-slate-800 transition-colors">{key}</span>
                        <span className="text-slate-950 font-bold">{value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-[13px] pt-2">
                      <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Base Color</span>
                      <span className="text-black font-bold border-b-2 border-orange-500 pb-1">{selectedProduct.color}</span>
                    </div>
                  </div>

                  <div className="mb-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">Select Size</p>
                    <div className="flex flex-wrap gap-3">
                      {getSizes(selectedProduct.category).map(s => {
                        const cartQty = getCartQuantity(selectedProduct.id, s);
                        return (
                          <button 
                            key={s} 
                            onClick={() => setSelectedSize(s)} 
                            className={`h-12 min-w-[65px] text-[11px] font-bold transition-all rounded-2xl border ${
                              selectedSize === s 
                                ? 'bg-slate-950 text-white border-slate-950 shadow-lg -translate-y-1' 
                                : 'border-slate-200/80 bg-white/50 text-slate-500 hover:border-slate-950 hover:text-slate-950 hover:bg-white'
                            }`}
                          >
                            {s}
                            {cartQty > 0 && selectedSize === s && (
                              <span className="ml-1 text-xs">({cartQty})</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-200/60">
                  {getCartQuantity(selectedProduct.id, selectedSize) > 0 ? (
                    <div className="flex items-center gap-3 h-16 animate-in slide-in-from-bottom-2">
                      <div className="flex items-center justify-between bg-slate-100/50 h-full px-8 flex-1 max-w-[160px] rounded-full border border-slate-200/60 shadow-inner">
                        <button 
                          onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, -1)} 
                          className="text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                        >
                          −
                        </button>
                        <span className="font-bold text-lg text-slate-950">
                          {getCartQuantity(selectedProduct.id, selectedSize)}
                        </span>
                        <button 
                          onClick={() => handleUpdateQuantity(selectedProduct.id, selectedSize, 1)} 
                          className="text-xl text-slate-500 hover:text-orange-600 font-light transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => navigate("/cart")} 
                        className="flex-1 bg-orange-700 text-white font-bold h-full text-[11px] uppercase tracking-widest rounded-full hover:bg-orange-800 transition-all shadow-[0_15px_30px_rgba(194,65,12,0.3)]"
                      >
                        Go To Cart
                      </button>
                    </div>
                  ) : (
                   <button 
    onClick={() => handleAddToCart(selectedProduct, selectedSize)} 
    disabled={isAddingToCart}
    className={`w-full border-2 border-slate-950 text-slate-950 font-bold h-16 text-[11px] uppercase tracking-[0.3em] rounded-full transition-all transform active:scale-95 ${
      isAddingToCart 
        ? 'opacity-50 cursor-not-allowed' 
        : 'hover:bg-slate-950 hover:text-white'
    }`}
  >
   {isAddingToCart ? (
  <span className="flex items-center justify-center gap-2">
    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
    Adding...
  </span>
) : 'Add to Bag'}
  </button>
)}
                  
                  <button 
                    onClick={() => {
                      if (getCartQuantity(selectedProduct.id, selectedSize) === 0) {
                        handleAddToCart(selectedProduct, selectedSize);
                      }
                      navigate("/cart");
                    }} 
                    className="w-full bg-slate-950 text-white font-bold h-16 text-[11px] uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-black transition-all transform active:scale-95"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;