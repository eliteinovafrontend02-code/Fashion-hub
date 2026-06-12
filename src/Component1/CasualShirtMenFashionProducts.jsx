// CasualShirtsMenFashion.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

const CasualShirtsMenFashion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showQuickView, setShowQuickView] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');

  // All Casual Shirts (12 products)
  const casualProducts = [
    { 
      id: 1, 
      name: 'Wool Blend Winter Shirt', 
      fabric: 'Wool', 
      price: 1999, 
      oldPrice: 3999, 
      images: ["/Fashion/Men/Shirts/Products/smfp1.png", "/Fashion/Men/Shirts/Products/smfp1_1.png", "/Fashion/Men/Shirts/Products/smfp1_2.png", "/Fashion/Men/Shirts/Products/smfp1_3.png", "/Fashion/Men/Shirts/Products/smfp1_4.png"],
      tag: 'Winter Edit',
      color: 'Charcoal',
      fit: 'Regular Fit',
      rating: 4.9,
      reviews: '1.1k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Wool Blend", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Warmth": "High", "Care": "Dry Clean" }
    },
    { 
      id: 3, 
      name: 'Denim Casual Shirt', 
      fabric: 'Denim', 
      price: 1699, 
      oldPrice: 3299, 
      images: ["/Fashion/Men/Shirts/Products/smfp3.png", "/Fashion/Men/Shirts/Products/smfp3_1.png", "/Fashion/Men/Shirts/Products/smfp3_2.png", "/Fashion/Men/Shirts/Products/smfp3_3.png", "/Fashion/Men/Shirts/Products/smfp3_4.png"],
      tag: 'Trending',
      color: 'Light Blue Denim',
      fit: 'Regular Fit',
      rating: 4.7,
      reviews: '2.3k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Denim", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Style": "Casual", "Wash": "Machine Wash" }
    },
    { 
      id: 5, 
      name: 'Bamboo Cotton Shirt', 
      fabric: 'Cotton', 
      price: 1799, 
      oldPrice: 3599, 
      images: ["/Fashion/Men/Shirts/Products/smfp5.png", "/Fashion/Men/Shirts/Products/smfp5_1.png", "/Fashion/Men/Shirts/Products/smfp5_2.png", "/Fashion/Men/Shirts/Products/smfp5_3.png", "/Fashion/Men/Shirts/Products/smfp5_4.png"],
      tag: 'Eco Friendly',
      color: 'Sage Green',
      fit: 'Relaxed Fit',
      rating: 4.8,
      reviews: '0.8k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Bamboo Cotton", "Fit": "Relaxed Fit", "Sleeve": "Full Sleeve", "Features": "Eco-Friendly", "Wash": "Gentle Cycle" }
    },
    { 
      id: 7, 
      name: 'Soft Flannel Shirt', 
      fabric: 'Flannel', 
      price: 1299, 
      oldPrice: 2499, 
      images: ["/Fashion/Men/Shirts/Products/smfp7.png", "/Fashion/Men/Shirts/Products/smfp7_1.png", "/Fashion/Men/Shirts/Products/smfp7_2.png", "/Fashion/Men/Shirts/Products/smfp7_3.png", "/Fashion/Men/Shirts/Products/smfp7_4.png"],
      tag: 'Cozy',
      color: 'Red Plaid',
      fit: 'Regular Fit',
      rating: 4.8,
      reviews: '2.0k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Cotton Flannel", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Occasion": "Winter Casual", "Wash": "Machine Wash" }
    },
    { 
      id: 9, 
      name: 'Solid Oxford Shirt', 
      fabric: 'Cotton', 
      price: 1499, 
      oldPrice: 2999, 
      images: ["/Fashion/Men/Shirts/Products/smfp9.png", "/Fashion/Men/Shirts/Products/smfp9_1.png", "/Fashion/Men/Shirts/Products/smfp9_2.png", "/Fashion/Men/Shirts/Products/smfp9_3.png", "/Fashion/Men/Shirts/Products/smfp9_4.png"],
      tag: 'Best Seller',
      color: 'Navy Blue',
      fit: 'Classic Fit',
      rating: 4.8,
      reviews: '3.1k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Oxford Cotton", "Fit": "Classic Fit", "Sleeve": "Full Sleeve", "Occasion": "Casual/Office", "Wash": "Machine Wash" }
    },
    { 
      id: 11, 
      name: 'Cotton Linen Shirt', 
      fabric: 'Linen', 
      price: 1399, 
      oldPrice: 2799, 
      images: ["/Fashion/Men/Shirts/Products/smfp11.png", "/Fashion/Men/Shirts/Products/smfp11_1.png", "/Fashion/Men/Shirts/Products/smfp11_2.png", "/Fashion/Men/Shirts/Products/smfp11_3.png", "/Fashion/Men/Shirts/Products/smfp11_4.png"],
      tag: 'Summer Edit',
      color: 'Off White',
      fit: 'Relaxed Fit',
      rating: 4.5,
      reviews: '1.9k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Cotton Linen Blend", "Fit": "Relaxed Fit", "Sleeve": "Half Sleeve", "Occasion": "Beach/Casual", "Wash": "Machine Wash" }
    },
    { 
      id: 13, 
      name: 'Premium Cotton Shirt', 
      fabric: 'Cotton', 
      price: 1599, 
      oldPrice: 3199, 
      images: ["/Fashion/Men/Shirts/Products/smfp1.png", "/Fashion/Men/Shirts/Products/smfp1_1.png", "/Fashion/Men/Shirts/Products/smfp1_2.png", "/Fashion/Men/Shirts/Products/smfp1_3.png", "/Fashion/Men/Shirts/Products/smfp1_4.png"],
      tag: 'Premium',
      color: 'White',
      fit: 'Slim Fit',
      rating: 4.7,
      reviews: '1.2k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Egyptian Cotton", "Fit": "Slim Fit", "Sleeve": "Full Sleeve", "Quality": "Premium", "Wash": "Machine Wash" }
    },
    { 
      id: 14, 
      name: 'Summer Linen Shirt', 
      fabric: 'Linen', 
      price: 1499, 
      oldPrice: 2999, 
      images: ["/Fashion/Men/Shirts/Products/smfp11.png", "/Fashion/Men/Shirts/Products/smfp11_1.png", "/Fashion/Men/Shirts/Products/smfp11_2.png", "/Fashion/Men/Shirts/Products/smfp11_3.png", "/Fashion/Men/Shirts/Products/smfp11_4.png"],
      tag: 'Breezy',
      color: 'Beige',
      fit: 'Relaxed Fit',
      rating: 4.6,
      reviews: '0.9k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Pure Linen", "Fit": "Relaxed Fit", "Sleeve": "Half Sleeve", "Occasion": "Summer Casual", "Wash": "Gentle Cycle" }
    },
    { 
      id: 15, 
      name: 'Classic Denim Shirt', 
      fabric: 'Denim', 
      price: 1799, 
      oldPrice: 3599, 
      images: ["/Fashion/Men/Shirts/Products/smfp3.png", "/Fashion/Men/Shirts/Products/smfp3_1.png", "/Fashion/Men/Shirts/Products/smfp3_2.png", "/Fashion/Men/Shirts/Products/smfp3_3.png", "/Fashion/Men/Shirts/Products/smfp3_4.png"],
      tag: 'Classic',
      color: 'Washed Blue',
      fit: 'Regular Fit',
      rating: 4.7,
      reviews: '1.5k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Denim", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Style": "Classic", "Wash": "Machine Wash" }
    },
    { 
      id: 16, 
      name: 'Washed Flannel Shirt', 
      fabric: 'Flannel', 
      price: 1399, 
      oldPrice: 2799, 
      images: ["/Fashion/Men/Shirts/Products/smfp7.png", "/Fashion/Men/Shirts/Products/smfp7_1.png", "/Fashion/Men/Shirts/Products/smfp7_2.png", "/Fashion/Men/Shirts/Products/smfp7_3.png", "/Fashion/Men/Shirts/Products/smfp7_4.png"],
      tag: 'Weekend Wear',
      color: 'Green Plaid',
      fit: 'Regular Fit',
      rating: 4.7,
      reviews: '1.1k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Cotton Flannel", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Style": "Washed", "Wash": "Machine Wash" }
    },
    { 
      id: 17, 
      name: 'Organic Cotton Shirt', 
      fabric: 'Cotton', 
      price: 1699, 
      oldPrice: 3399, 
      images: ["/Fashion/Men/Shirts/Products/smfp5.png", "/Fashion/Men/Shirts/Products/smfp5_1.png", "/Fashion/Men/Shirts/Products/smfp5_2.png", "/Fashion/Men/Shirts/Products/smfp5_3.png", "/Fashion/Men/Shirts/Products/smfp5_4.png"],
      tag: 'Sustainable',
      color: 'Natural',
      fit: 'Regular Fit',
      rating: 4.9,
      reviews: '0.7k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Organic Cotton", "Fit": "Regular Fit", "Sleeve": "Full Sleeve", "Certified": "GOTS", "Wash": "Machine Wash" }
    },
    { 
      id: 18, 
      name: 'Airy Linen Shirt', 
      fabric: 'Linen', 
      price: 1599, 
      oldPrice: 3199, 
      images: ["/Fashion/Men/Shirts/Products/smfp9.png", "/Fashion/Men/Shirts/Products/smfp9_1.png", "/Fashion/Men/Shirts/Products/smfp9_2.png", "/Fashion/Men/Shirts/Products/smfp9_3.png", "/Fashion/Men/Shirts/Products/smfp9_4.png"],
      tag: 'Bestseller',
      color: 'Sky Blue',
      fit: 'Relaxed Fit',
      rating: 4.6,
      reviews: '2.1k',
      sub: 'Shirts • Casual',
      details: { "Fabric": "Linen Blend", "Fit": "Relaxed Fit", "Sleeve": "Half Sleeve", "Breathability": "High", "Wash": "Gentle Cycle" }
    }
  ];

  const filters = ['all', 'Cotton', 'Linen', 'Denim', 'Flannel', 'Wool'];
  
  const filteredProducts = activeFilter === 'all' 
    ? casualProducts 
    : casualProducts.filter(p => p.fabric === activeFilter);

  // Handle product click - navigates to products page with selected product
  const handleProductClick = (product) => {
    navigate('/fashion/men/shirts/products', { 
      state: { defaultSelectedProductId: product.id } 
    });
  };

  // Get size options
  const getSizes = () => ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img 
          src="/Fashion/Men/Shirts/casual-hero-banner.png"
          alt="Casual Shirts Collection"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src = "/Fashion/Men/Shirts/smfbanner1.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-12 md:pb-20">
          <div className="text-center text-white px-4">
            <p className="text-amber-300 tracking-[0.3em] text-[10px] md:text-xs mb-3 font-semibold">
              12 ESSENTIAL PIECES
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide">
              The Casual Edit
            </h1>
            <div className="h-[1px] w-12 bg-amber-400 mx-auto mt-4 mb-4"></div>
            <p className="text-sm md:text-base font-light tracking-wide max-w-lg mx-auto">
              Curated collection of everyday comfort shirts
            </p>
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <div className="sticky top-0 z-20 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 md:px-6 py-1.5 md:py-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-transparent text-gray-600 border border-gray-300 hover:border-black hover:text-black'
                }`}
              >
                {filter === 'all' ? 'All Shirts' : filter}
              </button>
            ))}
          </div>
          
          {/* Product count */}
          <p className="text-center text-[10px] text-gray-400 mt-3 tracking-wide">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'shirt' : 'shirts'} available
          </p>
        </div>
      </div>

      {/* Product Grid - 3x4 Layout for 12 products */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Tag Badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded">
                  {product.tag}
                </span>
                
                {/* Rating Badge */}
                <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 text-[8px] font-bold text-white rounded-full flex items-center gap-1">
                  ★ {product.rating}
                </span>
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <button 
                    className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowQuickView(product);
                    }}
                  >
                    Quick View
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="mt-4 text-center">
                <p className="text-[9px] text-amber-700 uppercase tracking-[0.2em] font-semibold mb-1">
                  {product.fabric}
                </p>
                <h3 className="text-sm md:text-base font-medium text-gray-800 group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h3>
                <div className="mt-2 flex justify-center items-center gap-2">
                  <span className="text-gray-400 line-through text-xs">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                  <span className="text-black font-bold text-base">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size Guide Banner */}
      <section className="py-16 px-4 bg-[#e8e4db] mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-white rounded-full mb-4 shadow-md">
            <span className="text-2xl">📏</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif mb-3 text-gray-800">Need help with sizing?</h3>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">Check our detailed size guide to find your perfect fit</p>
          <button 
            onClick={() => setShowSizeGuide(true)}
            className="border border-black px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
          >
            View Size Guide
          </button>
        </div>
      </section>

      {/* Back to Shirts Link */}
      <section className="py-12 px-4 text-center">
        <Link to="/fashion/men/shirts">
          <button className="group flex items-center gap-2 mx-auto text-gray-500 hover:text-black transition-colors">
            <span className="text-lg">←</span>
            <span className="text-[10px] uppercase tracking-[0.2em]">Back to All Shirts</span>
          </button>
        </Link>
      </section>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowQuickView(null)}></div>
          
          <div className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowQuickView(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
            >
              ✕
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/2 bg-gray-100">
                <img 
                  src={showQuickView.images[0]} 
                  alt={showQuickView.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Info */}
              <div className="md:w-1/2 p-6 md:p-8">
                <p className="text-amber-700 text-[9px] tracking-[0.3em] uppercase font-bold mb-2">
                  {showQuickView.sub}
                </p>
                <h2 className="text-2xl font-serif mb-3">{showQuickView.name}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold">₹{showQuickView.price.toLocaleString()}</span>
                  <span className="text-gray-400 line-through">₹{showQuickView.oldPrice.toLocaleString()}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Select Size</p>
                  <div className="flex gap-2">
                    {getSizes().map(s => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-10 h-10 text-sm font-medium rounded-full border transition-all ${
                          selectedSize === s 
                            ? 'bg-black text-white border-black' 
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setShowQuickView(null);
                    handleProductClick(showQuickView);
                  }}
                  className="w-full bg-black text-white py-3 text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-gray-800 transition-colors mt-4"
                >
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSizeGuide(false)}></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-serif text-center">Size Guide</h2>
              <button 
                onClick={() => setShowSizeGuide(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Size</th>
                      <th className="text-left py-3 px-2">Chest (in)</th>
                      <th className="text-left py-3 px-2">Shoulder (in)</th>
                      <th className="text-left py-3 px-2">Length (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="py-3 px-2 font-medium">S</td><td className="py-3 px-2">36-38</td><td className="py-3 px-2">16-17</td><td className="py-3 px-2">27-28</td></tr>
                    <tr className="border-b"><td className="py-3 px-2 font-medium">M</td><td className="py-3 px-2">38-40</td><td className="py-3 px-2">17-18</td><td className="py-3 px-2">28-29</td></tr>
                    <tr className="border-b"><td className="py-3 px-2 font-medium">L</td><td className="py-3 px-2">40-42</td><td className="py-3 px-2">18-19</td><td className="py-3 px-2">29-30</td></tr>
                    <tr className="border-b"><td className="py-3 px-2 font-medium">XL</td><td className="py-3 px-2">42-44</td><td className="py-3 px-2">19-20</td><td className="py-3 px-2">30-31</td></tr>
                    <tr><td className="py-3 px-2 font-medium">XXL</td><td className="py-3 px-2">44-46</td><td className="py-3 px-2">20-21</td><td className="py-3 px-2">31-32</td></tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 text-center">Model is 6'0" tall and wearing size M for a regular fit</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default CasualShirtsMenFashion;