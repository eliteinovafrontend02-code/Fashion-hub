import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ScrollButton from './ScrollButton';

const Home = () => {

  const banners = [
    {
      id: 1,
      image: "/hbanner1.png",
      title: "Flat 50% OFF 🔥",
      subtitle: "On all fashion collections",
      button: "Shop Now"
    },
    {
      id: 2,
      image: "/hbanner2.png",
      title: "Redefining Everyday Fashion ✨",
      subtitle: "Step into a world of fashion where style meets comfort. Explore our latest arrivals crafted with attention to detail and modern trends. Whether you're dressing up or keeping it casual, find pieces that express your personality and make every moment stylish.",
      button: "Explore"
    },
    {
      id: 3,
      image: "/hbanner3.png",
      title: "Trendy Accessories✨",
      button: "Shop Now"
    }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [banners.length])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  }

  // ✅ CORRECT CATEGORY STRUCTURE
  const categories = [
    { name: "Fashion", path: "/fashion" },
    { name: "Men", path: "/fashion/men" },
    { name: "Women", path: "/fashion/women" },
    { name: "Kids", path: "/fashion/kids" },

    { name: "Accessories", path: "/accessories" },
    { name: "Watches", path: "/accessories/watches" },
    { name: "Bags", path: "/accessories/bags" },
    { name: "Sunglasses", path: "/accessories/sunglasses" },

    { name: "Footwear", path: "/footwear" },

    { name: "Beauty", path: "/beauty" },
    { name: "Makeup", path: "/beauty/makeup" },
    { name: "Skincare", path: "/beauty/skincare" },
    { name: "Haircare", path: "/beauty/haircare" },

    { name: "Jewellery", path: "/jewellery" },
    { name: "Earrings", path: "/jewellery/earrings" },
    { name: "Necklace", path: "/jewellery/necklace" },
    { name: "Bangles", path: "/jewellery/bangles" }
  ]


  const bestSellers = [
    {
      id: 1,
      name: "Casual Shirt",
      category: "Fashion",
      price: 1499,
      oldPrice: 2499,
      image: "hproduct1.png",
      tag: "Trending"
    },
    {
      id: 2,
      name: "Classic Wrist Watch",
      category: "Accessories",
      price: 999,
      oldPrice: 1599,
      image: "hproduct2.png",
      tag: "Best Seller"
    },
    {
      id: 3,
      name: "Stylish Heels",
      category: "Footwear",
      price: 1299,
      oldPrice: 1999,
      image: "/hproduct3.png",
      tag: "Hot"
    },
    {
      id: 4,
      name: "Matte Lipstick Set",
      category: "Beauty",
      price: 699,
      oldPrice: 999,
      image: "hproduct4.png",
      tag: "New"
    }
  ]

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px scroll pannalae button theriya aarambikkum
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
{/* 🔥 SLIDER */}
<div className="mt-5 px-3 md:px-6 lg:px-16 relative z-0">
  <div className="relative rounded-xl overflow-visible">

    <img 
      src={banners[current].image}
      alt="banner"
      className="w-full h-[200px] xs:h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] object-cover object-center"
    />

    {/* Dark Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

    {/* TEXT - Positioned properly */}
    <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Fixed width - text will not overlap image - DECREASED WIDTH FOR BANNER 2 */}
      <div className={`${
        current === 1 
          ?  'w-full sm:w-[38%] md:w-[33%] lg:w-[30%] xl:w-[28%]'
          : 'w-full sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%]'
      }`}>
        
        <h1 className={`text-black font-bold drop-shadow-md ${
          current === 1
            ? 'text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight'
            : 'text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight'
        }`}>
          {current === 1 ? (
            <>
              Redefining Everyday<br className="block sm:hidden" /> Fashion ✨
            </>
          ) : (
            banners[current].title
          )}
        </h1>

        <p className={`text-black/90 mt-1 sm:mt-2 md:mt-3 leading-tight sm:leading-relaxed drop-shadow-sm ${
          current === 1
            ? 'hidden sm:block text-xs sm:text-sm md:text-base lg:text-base'
            : 'hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg'
        }`}>
          {banners[current].subtitle}
        </p>

        <button className={`mt-2 sm:mt-3 md:mt-4 bg-black text-white rounded-lg hover:bg-black hover:text-white transition font-medium shadow-md ${
          current === 1
            ? 'px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-sm'
            : 'px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base'
        }`}>
          {banners[current].button}
        </button>
        
      </div>
    </div>

    {/* ⬅ LEFT ARROW - Hidden on mobile */}
    <button 
      onClick={prevSlide}
      className="hidden md:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1.5 sm:p-2 rounded-full transition z-20 text-sm sm:text-xl backdrop-blur-sm"
    >
      ‹
    </button>

    {/* ➡ RIGHT ARROW - Hidden on mobile */}
    <button 
      onClick={nextSlide}
      className="hidden md:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1.5 sm:p-2 rounded-full transition z-20 text-sm sm:text-xl backdrop-blur-sm"
    >
      ›
    </button>

    {/* DOTS - Responsive */}
    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 md:gap-2 z-20">
      {banners.map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrent(index)}
          className={`cursor-pointer transition-all duration-300 ${
            current === index
              ? "w-4 sm:w-6 md:w-8 h-0.5 sm:h-1 bg-white shadow-md rounded-full"
              : "w-1.5 sm:w-2 h-0.5 sm:h-1 bg-white/40 rounded-full hover:bg-white/70"
          }`}
        />
      ))}
    </div>

  </div>
</div>
      {/* 🔥 CONTINUOUS CATEGORY SCROLL */}
      <div className="mt-10 overflow-hidden bg-gray-100 py-3">

        <div className="flex animate-scroll whitespace-nowrap">

          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-6">

              {categories.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow hover:bg-black hover:text-white transition"
                >
                  <span className="w-2 h-2 bg-red-300 rounded-full"></span>
                  {item.name}
                </Link>
              ))}

            </div>
          ))}

        </div>

      </div>

      {/* 🔥 SHOP BY CATEGORIES */}
      <div className="mt-14 px-6 md:px-16">

        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Shop by Categories
        </h2>

        <div className="flex justify-center gap-14 flex-wrap">

          {[
            { name: "Fashion", path: "/fashion", image: "/cfashion.png" },
            { name: "Accessories", path: "/accessories", image: "caccessories.png" },
            { name: "Footwear", path: "/footwear", image: "cfootwear.png" },
            { name: "Beauty", path: "/beauty", image: "cbeauty.png" },
            { name: "Jewellery", path: "/jewellery", image: "cjewellery.png" }
          ].map((item, index) => (

            <Link to={item.path} key={index} className="group text-center">

              {/* 🔥 BIG CIRCLE */}
              <div className="
                w-46 h-46 md:w-54 md:h-54 
                rounded-full 
                p-[3px] 
                bg-gradient-to-r from-black to-black
              ">

                <div className="
                  w-full h-full 
                  rounded-full 
                  flex items-center justify-center 
                  bg-gradient-to-br from-purple-100 via-amber-100 to-blue-100
                  group-hover:scale-105 transition duration-300
                ">

                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-70 h-40 md:w-84 md:h-45 object-cover"
                  />

                </div>

              </div>

              {/* 🔥 TEXT */}
              <p className="mt-4 text-gray-700 font-medium group-hover:text-black">
                {item.name}
              </p>

            </Link>

          ))}

        </div>

      </div>

      {/* 🔥 ABOUT PREVIEW SECTION */}
      <div className="w-full bg-[#f5eadf] py-20 px-6 md:px-20 mt-5 flex items-center justify-center">

        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center">

          {/* 🔴 LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 leading-snug">
              PREMIUM FASHION EXPERIENCE
            </h2>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              Fashion Hub is your ultimate destination for modern style and everyday elegance. 
              From trendy fashion collections for men, women, and kids to carefully curated accessories, 
              we bring everything you need to elevate your wardrobe.
            </p>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Explore stylish footwear, premium beauty essentials including makeup, skincare, 
              and haircare, and complete your look with elegant jewellery collections.
            </p>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              We focus on quality, affordability, and the latest trends — helping you step out 
              with confidence every day.
            </p>

            {/* 🔥 BUTTON */}
            <button
              onClick={() => window.location.href = "/about"}
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full shadow-md text-lg transition transform hover:scale-105"
            >
              Explore Our Story
            </button>
          </div>

          {/* 🔴 RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="bg-[#e9dccb] p-6 rounded-3xl shadow-xl overflow-hidden group transition duration-500 hover:shadow-2xl hover:-translate-y-2">

              <img
                src="/abanner.png"
                alt="about"
                className="w-[420px] md:w-[580px] h-[420px] md:h-[520px] object-cover rounded-2xl transition duration-500 group-hover:scale-110"
              />

            </div>

          </div>

        </div>

      </div>

      <div className="bg-gray-200 min-h-screen">

        {/* 🔥 BEST SELLERS SECTION */}
        <section className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">

            {/* 🔥 HEADER */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif tracking-[0.2em] text-gray-900 uppercase">
                Best Sellers
              </h2>

              <div className="h-[2px] w-24 bg-orange-800 mx-auto mt-6"></div>

              <p className="text-gray-500 mt-6 font-light italic tracking-widest">
                Handpicked favorites for your collection
              </p>
            </div>

            {/* 🔥 PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

              {bestSellers.map((product) => (

                <div key={product.id} className="group cursor-pointer">

                  {/* ✅ UPDATED LINK: Pointing to /products with ID query */}
                  <Link to={`/products?id=${product.id}`} className="block">

                    <div className="relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">

                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />
                      </div>

                      <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded">
                        {product.tag}
                      </span>

                      <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-500">
                        <button
                          onClick={(e) => e.preventDefault()}
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-xs uppercase tracking-[0.3em] font-bold rounded transition"
                        >
                          Add to Bag
                        </button>
                      </div>

                    </div>

                  </Link>

                  <div className="mt-6 text-center px-2">
                    <p className="text-[11px] text-orange-700 uppercase tracking-[0.2em] font-bold mb-2">
                      {product.category}
                    </p>

                    <h3 className="text-sm md:text-base font-serif text-gray-800 group-hover:text-orange-600 transition">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex justify-center items-center gap-3">
                      <span className="text-gray-400 line-through text-xs">
                        ₹{product.oldPrice}
                      </span>

                      <span className="text-black font-bold text-lg">
                        ₹{product.price}
                      </span>
                    </div>
                  </div>

                </div>

              ))}

            </div>

          {/* 🔥 VIEW ALL - Three Color Linear Gradient Version */}
<div className="mt-20 text-center">
  <Link to="/products">
    <button className="bg-gradient-to-r from-orange-500 via-pink-400 to-orange-600 text-white px-12 py-4 rounded-full text-sm uppercase tracking-[0.3em] font-extrabold shadow-xl hover:shadow-pink-500/40 transition-all duration-500 transform hover:scale-105 active:scale-95 border-none">
      View All Products
    </button>
  </Link>
</div>

          </div>
        </section>

      </div>

      {/* 🔥 HOME PAGE SERVICE PREVIEW SECTION */}
<section className="py-20 px-6 md:px-16 overflow-hidden bg-orange-50 relative">

  {/* ✨ LIGHT GLOW EFFECT */}
  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,200,150,0.2),transparent)]"></div>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    
    {/* 📸 LEFT SIDE: SERVICE IMAGE */}
    <div className="w-full md:w-1/2 relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-pink-200 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
      <img 
        src="/sbanner.png"
        alt="Our Services" 
        className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transform transition duration-500 group-hover:scale-[1.02]"
      />
    </div>

    {/* 📝 RIGHT SIDE: CONTENT */}
    <div className="w-full md:w-1/2 space-y-6">
      <h4 className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm">
        Our Commitment
      </h4>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        Experience Seamless <br /> Shopping & Care
      </h2>
      
      <p className="text-gray-600 text-lg leading-relaxed">
        We don't just sell fashion; we provide an experience. From express delivery and 
        secure transactions to our premium fashion consultancy, we ensure every step 
        of your journey is effortless.
      </p>

      {/* QUICK POINTS */}
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">Express Delivery</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">24/7 Priority Support</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">Global Shipping</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">Easy Returns</span>
        </div>
      </div>

      {/* 🔥 BUTTON */}
      <div className="pt-4">
        <Link to="/services">
          <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-extrabold shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
            Explore All Services
          </button>
        </Link>
      </div>
    </div>

  </div>
</section>

{/* 🔥 PREMIUM NEWSLETTER SECTION */}
<section className="py-20 px-6 md:px-16 bg-white">
  <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gray-900 py-16 px-8 md:px-20">
    
    {/* ✨ BACKGROUND DECORATION (Subtle Glows) */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>

    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* 📝 TEXT CONTENT */}
      <div className="text-center lg:text-left space-y-4 max-w-xl">
        <h4 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs">
          Exclusive Access
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Join the Club & Get <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
            20% OFF Your First Order
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Be the first to know about new collections, sales, and fashion trends.
        </p>
      </div>

      {/* 📧 INPUT FORM */}
      <div className="w-full max-w-md">
        <form className="relative group" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full bg-white/5 border border-white/10 text-white px-8 py-5 rounded-full outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-500"
          />
          <button className="mt-4 md:mt-0 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-extrabold px-10 py-3 md:py-3.5 rounded-full text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20">
            Subscribe
          </button>
        </form>
        <p className="text-center lg:text-left text-gray-500 text-xs mt-4 italic">
          *By subscribing, you agree to our Privacy Policy. No spam, we promise!
        </p>
      </div>

    </div>
  </div>
</section>

{/* 🔥 MODERN SPLIT CONTACT SECTION (Reversed with Updated Button) */}
<section className="py-24 px-6 md:px-16 bg-[#fafafa]">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100">
    
    {/* 📝 LEFT SIDE: CONTACT DETAILS */}
    <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col bg-black/10 justify-center">
      <h4 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">
        Connect with us
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Let's make your shopping effortless.
      </h2>

      <div className="space-y-8">
        {/* Support Option 1 */}
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
            💬
          </div>
          <div>
            <h5 className="font-bold text-gray-900">Live Chat Support</h5>
            <p className="text-gray-500 text-sm mt-1">
              Available 24/7 on WhatsApp: +91 98765 43210
            </p>
          </div>
        </div>

        {/* Support Option 2 */}
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
            📧
          </div>
          <div>
            <h5 className="font-bold text-gray-900">Email Inquiries</h5>
            <p className="text-gray-500 text-sm mt-1">
              Response within 2 hours: care@fashionhub.com
            </p>
          </div>
        </div>

        {/* Support Option 3 */}
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
            🏬
          </div>
          <div>
            <h5 className="font-bold text-gray-900">Experience Center</h5>
            <p className="text-gray-500 text-sm mt-1">
              Visit us at: vadapalani, Chennai - 600040
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Link to="/contact">
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all transform active:scale-95 shadow-lg whitespace-nowrap">
            Visit Contact Page
          </button>
        </Link>
      </div>
    </div>

    {/* 📸 RIGHT SIDE: BRAND IMAGE */}
    <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
      <img 
        src="/cbanner.png" 
        alt="Customer Support" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute bottom-10 left-10 text-white p-6  rounded-xl backdrop-blur-sm">
        <h3 className="text-3xl font-bold">We’re here to help.</h3>
        <p className="text-gray-200 mt-2">
          Always available for your fashion needs.
        </p>
      </div>
    </div>

  </div>
</section>


<Footer />

<ScrollButton/>

    </>
  )
}

export default Home