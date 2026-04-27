import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from './CartContext' 

const Navbar = () => {
  const { getItemCount } = useCart();
  const cartCount = getItemCount();
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef(null)
  const navigate = useNavigate()

  // Product database with enhanced search support
  const allProducts = [
    { name: 'Casual Shirt', path: '/fashion/men/shirts/casual', category: 'Shirts', subcategory: 'Men' },
    { name: 'Printed Shirt', path: '/fashion/men/shirts/printed', category: 'Shirts', subcategory: 'Men' },
    { name: 'Jean Pants', path: '/fashion/men/pants/jean', category: 'Pants', subcategory: 'Men' },
    { name: 'Formal Pants', path: '/fashion/men/pants/formal', category: 'Pants', subcategory: 'Men' },
    { name: 'Casual Saree', path: '/fashion/women/saree/casual', category: 'Saree', subcategory: 'Women' },
    { name: 'Party Saree', path: '/fashion/women/saree/party', category: 'Saree', subcategory: 'Women' },
    { name: 'Short Dress', path: '/fashion/women/dresses/short', category: 'Dresses', subcategory: 'Women' },
    { name: 'Long Dress', path: '/fashion/women/dresses/long', category: 'Dresses', subcategory: 'Women' },
    { name: 'Boys Shirt', path: '/fashion/kids/boy/shirt', category: 'Shirts', subcategory: 'Kids Boy' },
    { name: 'Boys Set', path: '/fashion/kids/boy/set', category: 'Sets', subcategory: 'Kids Boy' },
    { name: 'Girls Frock', path: '/fashion/kids/girl/frock', category: 'Frocks', subcategory: 'Kids Girl' },
    { name: 'Girls Set', path: '/fashion/kids/girl/set', category: 'Sets', subcategory: 'Kids Girl' },
    { name: 'Casual Watch', path: '/accessories/watches/casual', category: 'Watches', subcategory: 'Accessories' },
    { name: 'Formal Watch', path: '/accessories/watches/formal', category: 'Watches', subcategory: 'Accessories' },
    { name: 'Handbag', path: '/accessories/bags/handbag', category: 'Bags', subcategory: 'Accessories' },
    { name: 'Sling Bag', path: '/accessories/bags/sling', category: 'Bags', subcategory: 'Accessories' },
    { name: 'Round Sunglasses', path: '/accessories/sunglasses/round', category: 'Sunglasses', subcategory: 'Accessories' },
    { name: 'Square Sunglasses', path: '/accessories/sunglasses/square', category: 'Sunglasses', subcategory: 'Accessories' },
    { name: 'Casual Shoes', path: '/footwear/men/shoes/casual', category: 'Shoes', subcategory: 'Footwear Men' },
    { name: 'Formal Shoes', path: '/footwear/men/shoes/formal', category: 'Shoes', subcategory: 'Footwear Men' },
    { name: 'Sports Sandals', path: '/footwear/men/sandals/sports', category: 'Sandals', subcategory: 'Footwear Men' },
    { name: 'Flat Sandals', path: '/footwear/men/sandals/flat', category: 'Sandals', subcategory: 'Footwear Men' },
    { name: 'Party Heels', path: '/footwear/women/heels/party', category: 'Heels', subcategory: 'Footwear Women' },
    { name: 'Casual Heels', path: '/footwear/women/heels/casual', category: 'Heels', subcategory: 'Footwear Women' },
    { name: 'Ballerina Flats', path: '/footwear/women/flats/ballerina', category: 'Flats', subcategory: 'Footwear Women' },
    { name: 'Ethnic Flats', path: '/footwear/women/flats/ethnic', category: 'Flats', subcategory: 'Footwear Women' },
    { name: 'School Shoes Boy', path: '/footwear/kids/boy/shoes/school', category: 'Shoes', subcategory: 'Footwear Kids' },
    { name: 'Casual Shoes Boy', path: '/footwear/kids/boy/shoes/casual', category: 'Shoes', subcategory: 'Footwear Kids' },
    { name: 'Velcro Sandals Boy', path: '/footwear/kids/boy/sandals/velcro', category: 'Sandals', subcategory: 'Footwear Kids' },
    { name: 'Soft Sandals Boy', path: '/footwear/kids/boy/sandals/soft', category: 'Sandals', subcategory: 'Footwear Kids' },
    { name: 'School Shoes Girl', path: '/footwear/kids/girl/shoes/school', category: 'Shoes', subcategory: 'Footwear Kids' },
    { name: 'Casual Shoes Girl', path: '/footwear/kids/girl/shoes/casual', category: 'Shoes', subcategory: 'Footwear Kids' },
    { name: 'Velcro Sandals Girl', path: '/footwear/kids/girl/sandals/velcro', category: 'Sandals', subcategory: 'Footwear Kids' },
    { name: 'Soft Sandals Girl', path: '/footwear/kids/girl/sandals/soft', category: 'Sandals', subcategory: 'Footwear Kids' },
    { name: 'Face Makeup', path: '/beauty/makeup/face', category: 'Makeup', subcategory: 'Beauty' },
    { name: 'Lipstick', path: '/beauty/makeup/lips', category: 'Makeup', subcategory: 'Beauty' },
    { name: 'Sunscreen', path: '/beauty/skincare/sunscreen', category: 'Skincare', subcategory: 'Beauty' },
    { name: 'Moisturizer', path: '/beauty/skincare/moisturizer', category: 'Skincare', subcategory: 'Beauty' },
    { name: 'Shampoo', path: '/beauty/haircare/shampoo', category: 'Haircare', subcategory: 'Beauty' },
    { name: 'Hair Oil', path: '/beauty/haircare/oil', category: 'Haircare', subcategory: 'Beauty' },
    { name: 'Stud Earrings', path: '/jewellery/earrings/stud', category: 'Earrings', subcategory: 'Jewellery' },
    { name: 'Jhumka Earrings', path: '/jewellery/earrings/jhumka', category: 'Earrings', subcategory: 'Jewellery' },
    { name: 'Chain Necklace', path: '/jewellery/necklace/chain', category: 'Necklace', subcategory: 'Jewellery' },
    { name: 'Choker Necklace', path: '/jewellery/necklace/choker', category: 'Necklace', subcategory: 'Jewellery' },
    { name: 'Traditional Bangles', path: '/jewellery/bangles/traditional', category: 'Bangles', subcategory: 'Jewellery' },
    { name: 'Model Bangles', path: '/jewellery/bangles/model', category: 'Bangles', subcategory: 'Jewellery' },
  ]

  // Enhanced search function with better matching
  const performSearch = (query) => {
    if (query.trim() === '') {
      setSearchResults([])
      setShowResults(false)
      return
    }

    setIsSearching(true)
    
    const searchTerm = query.toLowerCase().trim()
    
    const filtered = allProducts.filter(product => {
      // Search by product name
      const nameMatch = product.name.toLowerCase().includes(searchTerm)
      
      // Search by category
      const categoryMatch = product.category.toLowerCase().includes(searchTerm)
      
      // Search by subcategory
      const subcategoryMatch = product.subcategory.toLowerCase().includes(searchTerm)
      
      // Search by individual words (for better results)
      const words = searchTerm.split(' ')
      const wordMatch = words.some(word => 
        product.name.toLowerCase().includes(word) ||
        product.category.toLowerCase().includes(word)
      )
      
      return nameMatch || categoryMatch || subcategoryMatch || wordMatch
    })
    
    // Sort results by relevance (exact matches first)
    const sortedResults = filtered.sort((a, b) => {
      const aExactMatch = a.name.toLowerCase() === searchTerm
      const bExactMatch = b.name.toLowerCase() === searchTerm
      if (aExactMatch && !bExactMatch) return -1
      if (!aExactMatch && bExactMatch) return 1
      return a.name.localeCompare(b.name)
    })
    
    setSearchResults(sortedResults)
    setShowResults(true)
    setIsSearching(false)
  }

  // Debounced search for better performance
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        performSearch(searchQuery)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery])

  // Click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    performSearch(searchQuery)
  }

  const handleResultClick = (path) => {
    navigate(path)
    setShowResults(false)
    setSearchQuery('')
  }

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path)
  }

  // Highlight matching text in search results
  const highlightMatch = (text, query) => {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="bg-yellow-200 font-bold">{part}</span> : part
    )
  }


  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md">

      {/* OFFER STRIP */}
      <div className="overflow-hidden bg-black py-1">
        <div className="flex animate-scroll whitespace-nowrap text-white text-sm md:text-base">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10 px-6">
              <span>🔥 Flat 50% OFF</span>
              <span>🚚 Free Delivery above ₹199</span>
              <span>💥 New Arrivals Daily</span>
              <span>🎁 Buy 2 Get 1 Free</span>
              <span>✨ Trending Styles</span>
            </div>
          ))}
        </div>
      </div>

      {/* LOGO */}
      <div className='flex flex-col md:flex-row items-center gap-2 justify-center mt-2'>
        <img src="/logo.png" className='w-24 h-24 object-contain' alt="logo" />
        <div className='flex flex-col'>
          <h1
            style={{ fontFamily: 'Cookie, cursive' }}
            className='text-3xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent capitalize'>
            fashion hub
          </h1>
          <p className='capitalize text-sm md:text-lg text-gray-500'>
            trendy styles daily
          </p>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="mt-2 px-3 md:px-13 py-3 bg-orange-100 flex items-center justify-between w-full shadow-sm">
{/* LEFT SIDE */}
        <div className="flex items-center gap-40">

          {/* ENHANCED SEARCH */}
          <div className="relative" ref={searchRef}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products by name, category..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  if (e.target.value === '') {
                    setShowResults(false)
                  }
                }}
                className="w-85 border-2 border-gray-500 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                autoComplete="off"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition"
              >
                {isSearching ? '⏳' : '🔍'}
              </button>
            </form>

            {/* ENHANCED SEARCH RESULTS DROPDOWN */}
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 mt-1 w-96 bg-white shadow-2xl rounded-lg border z-50 max-h-96 overflow-auto">
                <div className="sticky top-0 bg-white p-3 border-b flex justify-between items-center">
                  <h3 className="font-bold text-gray-700">
                    Search Results ({searchResults.length})
                  </h3>
                  <button 
                    onClick={() => setShowResults(false)}
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    ✕
                  </button>
                </div>
                
                {searchResults.length > 0 ? (
                  <div>
                    {searchResults.map((product, index) => (
                      <div
                        key={index}
                        onClick={() => handleResultClick(product.path)}
                        className="p-3 hover:bg-orange-50 cursor-pointer border-b last:border-b-0 transition group"
                      >
                        <p className="font-semibold text-gray-800 group-hover:text-orange-600">
                          {highlightMatch(product.name, searchQuery)}
                        </p>
                        <div className="flex gap-2 mt-1">
                          <p className="text-xs text-gray-500">
                            Category: {product.category}
                          </p>
                          <p className="text-xs text-gray-500">
                            • {product.subcategory}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No products found for "{searchQuery}"</p>
                    <div className="mt-3">
                      <p className="text-sm text-gray-400 mb-2">Try searching for:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['Shirt', 'Watch', 'Shoes', 'Saree', 'Dress', 'Bag'].map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => setSearchQuery(suggestion)}
                            className="text-xs bg-gray-100 hover:bg-orange-100 px-2 py-1 rounded transition"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>


          {/* CATEGORIES */}
          <div className="flex gap-10 text-lg md:text-base">

            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `cursor-pointer text-lg hover:text-orange-500 ${isActive ? "underline underline-offset-4 text-orange-500" : ""}`
              }
            >
              Home
            </NavLink>

            {/* FASHION DROPDOWN */}
            <div className="relative group flex items-center gap-1 cursor-pointer py-2">
              <NavLink 
                to="/fashion" 
                className={({ isActive }) => 
                  `transition duration-200
                   group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4
                   hover:text-orange-500
                   ${isActive ? "underline underline-offset-4 text-orange-500" : ""}`
                }
              >
                Fashion
              </NavLink>
              <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
              
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[200px] z-50">
                {/* MEN */}
                <div className="relative group/item">
                  <NavLink to="/fashion/men" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Men ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px] z-50">
                    <div className="relative group/sub">
                      <NavLink to="/fashion/men/shirts" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Shirts ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/fashion/men/shirts/casual" className="block px-2 py-1 hover:bg-orange-100">Casual</NavLink>
                        <NavLink to="/fashion/men/shirts/printed" className="block px-2 py-1 hover:bg-orange-100">Printed</NavLink>
                      </div>
                    </div>
                    <div className="relative group/sub mt-1">
                      <NavLink to="/fashion/men/pants" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Pants ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/fashion/men/pants/jean" className="block px-2 py-1 hover:bg-orange-100">Jean</NavLink>
                        <NavLink to="/fashion/men/pants/formal" className="block px-2 py-1 hover:bg-orange-100">Formal</NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WOMEN */}
                <div className="relative group/item mt-2">
                  <NavLink to="/fashion/women" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Women ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px] z-50">
                    <div className="relative group/sub">
                      <NavLink to="/fashion/women/saree" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Saree ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/fashion/women/saree/casual" className="block px-2 py-1 hover:bg-orange-100">Casual</NavLink>
                        <NavLink to="/fashion/women/saree/party" className="block px-2 py-1 hover:bg-orange-100">Party</NavLink>
                      </div>
                    </div>
                    <div className="relative group/sub mt-1">
                      <NavLink to="/fashion/women/dresses" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Dresses ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/fashion/women/dresses/short" className="block px-2 py-1 hover:bg-orange-100">Short</NavLink>
                        <NavLink to="/fashion/women/dresses/long" className="block px-2 py-1 hover:bg-orange-100">Long</NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KIDS */}
                <div className="relative group/item mt-2">
                  <NavLink to="/fashion/kids" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Kids ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px] z-50">
                    <div className="relative group/sub">
                      <NavLink to="/fashion/kids/boy" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Boy ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/fashion/kids/boy/shirt" className="block px-2 py-1 hover:bg-orange-100">Shirt</NavLink>
                        <NavLink to="/fashion/kids/boy/set" className="block px-2 py-1 hover:bg-orange-100">Set</NavLink>
                      </div>
                    </div>
                    <div className="relative group/sub mt-1">
                      <NavLink to="/fashion/kids/girl" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Girl ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/fashion/kids/girl/frock" className="block px-2 py-1 hover:bg-orange-100">Frock</NavLink>
                        <NavLink to="/fashion/kids/girl/set" className="block px-2 py-1 hover:bg-orange-100">Set</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACCESSORIES DROPDOWN */}
            <div className="relative group flex items-center gap-1 cursor-pointer py-2">
              <NavLink 
                to="/accessories" 
                className={({ isActive }) => 
                  `transition duration-200
                   group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4
                   hover:text-orange-500
                   ${isActive ? "underline underline-offset-4 text-orange-500" : ""}`
                }
              >
                Accessories
              </NavLink>
              <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[200px] z-50">
                <div className="relative group/item">
                  <NavLink to="/accessories/watches" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Watches ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                    <NavLink to="/accessories/watches/casual" className="block px-2 py-1 hover:bg-orange-100">Casual</NavLink>
                    <NavLink to="/accessories/watches/formal" className="block px-2 py-1 hover:bg-orange-100">Formal</NavLink>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/accessories/bags" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Bags ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                    <NavLink to="/accessories/bags/handbag" className="block px-2 py-1 hover:bg-orange-100">Handbag</NavLink>
                    <NavLink to="/accessories/bags/sling" className="block px-2 py-1 hover:bg-orange-100">Sling</NavLink>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/accessories/sunglasses" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Sunglasses ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                    <NavLink to="/accessories/sunglasses/round" className="block px-2 py-1 hover:bg-orange-100">Round</NavLink>
                    <NavLink to="/accessories/sunglasses/square" className="block px-2 py-1 hover:bg-orange-100">Square</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTWEAR DROPDOWN */}
            <div className="relative group flex items-center gap-1 cursor-pointer py-2">
              <NavLink 
                to="/footwear" 
                className={({ isActive }) => 
                  `transition duration-200
                   group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4
                   hover:text-orange-500
                   ${isActive ? "underline underline-offset-4 text-orange-500" : ""}`
                }
              >
                Footwear
              </NavLink>
              <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[200px] z-50">
                <div className="relative group/item">
                  <NavLink to="/footwear/men" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Men ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px] z-50">
                    <div className="relative group/sub">
                      <NavLink to="/footwear/men/shoes" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Shoes ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/footwear/men/shoes/casual" className="block px-2 py-1 hover:bg-orange-100">Casual</NavLink>
                        <NavLink to="/footwear/men/shoes/formal" className="block px-2 py-1 hover:bg-orange-100">Formal</NavLink>
                      </div>
                    </div>
                    <div className="relative group/sub mt-1">
                      <NavLink to="/footwear/men/sandals" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Sandals ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/footwear/men/sandals/sports" className="block px-2 py-1 hover:bg-orange-100">Sports</NavLink>
                        <NavLink to="/footwear/men/sandals/flat" className="block px-2 py-1 hover:bg-orange-100">Flat</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/footwear/women" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Women ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px] z-50">
                    <div className="relative group/sub">
                      <NavLink to="/footwear/women/heels" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Heels ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/footwear/women/heels/party" className="block px-2 py-1 hover:bg-orange-100">Party</NavLink>
                        <NavLink to="/footwear/women/heels/casual" className="block px-2 py-1 hover:bg-orange-100">Casual</NavLink>
                      </div>
                    </div>
                    <div className="relative group/sub mt-1">
                      <NavLink to="/footwear/women/flats" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Flats ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                        <NavLink to="/footwear/women/flats/ballerina" className="block px-2 py-1 hover:bg-orange-100">Ballerina</NavLink>
                        <NavLink to="/footwear/women/flats/ethnic" className="block px-2 py-1 hover:bg-orange-100">Ethnic</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/footwear/kids" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Kids ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px] z-50">
                    <div className="relative group/sub">
                      <NavLink to="/footwear/kids/boy" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Boy ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[180px] z-50">
                        <div className="relative group/mini">
                          <NavLink to="/footwear/kids/boy/shoes" className="block px-2 py-1 hover:bg-orange-100 rounded">
                            Shoes ▸
                          </NavLink>
                          <div className="absolute left-full top-0 hidden group-hover/mini:block bg-white shadow-md p-2 min-w-[160px] z-50">
                            <NavLink to="/footwear/kids/boy/shoes/school" className="block px-2 py-1 hover:bg-orange-100">School</NavLink>
                            <NavLink to="/footwear/kids/boy/shoes/casual" className="block px-2 py-1 hover:bg-orange-100">Casual</NavLink>
                          </div>
                        </div>
                        <div className="relative group/mini mt-1">
                          <NavLink to="/footwear/kids/boy/sandals" className="block px-2 py-1 hover:bg-orange-100 rounded">
                            Sandals ▸
                          </NavLink>
                          <div className="absolute left-full top-0 hidden group-hover/mini:block bg-white shadow-md p-2 min-w-[160px] z-50">
                            <NavLink to="/footwear/kids/boy/sandals/velcro" className="block px-2 py-1 hover:bg-orange-100">Velcro</NavLink>
                            <NavLink to="/footwear/kids/boy/sandals/soft" className="block px-2 py-1 hover:bg-orange-100">Soft</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative group/sub mt-2">
                      <NavLink to="/footwear/kids/girl" className="block px-2 py-1 hover:bg-orange-100 rounded">
                        Girl ▸
                      </NavLink>
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[180px] z-50">
                        <div className="relative group/mini">
                          <NavLink to="/footwear/kids/girl/shoes" className="block px-2 py-1 hover:bg-orange-100 rounded">
                            Shoes ▸
                          </NavLink>
                          <div className="absolute left-full top-0 hidden group-hover/mini:block bg-white shadow-md p-2 min-w-[160px] z-50">
                            <NavLink to="/footwear/kids/girl/shoes/school" className="block px-2 py-1 hover:bg-orange-100">School</NavLink>
                            <NavLink to="/footwear/kids/girl/shoes/casual" className="block px-2 py-1 hover:bg-orange-100">Casual</NavLink>
                          </div>
                        </div>
                        <div className="relative group/mini mt-1">
                          <NavLink to="/footwear/kids/girl/sandals" className="block px-2 py-1 hover:bg-orange-100 rounded">
                            Sandals ▸
                          </NavLink>
                          <div className="absolute left-full top-0 hidden group-hover/mini:block bg-white shadow-md p-2 min-w-[160px] z-50">
                            <NavLink to="/footwear/kids/girl/sandals/velcro" className="block px-2 py-1 hover:bg-orange-100">Velcro</NavLink>
                            <NavLink to="/footwear/kids/girl/sandals/soft" className="block px-2 py-1 hover:bg-orange-100">Soft</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BEAUTY DROPDOWN */}
            <div className="relative group flex items-center gap-1 cursor-pointer py-2">
              <NavLink 
                to="/beauty" 
                className={({ isActive }) => 
                  `transition duration-200
                   group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4
                   hover:text-orange-500
                   ${isActive ? "underline underline-offset-4 text-orange-500" : ""}`
                }
              >
                Beauty
              </NavLink>
              <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[200px] z-50">
                <div className="relative group/item">
                  <NavLink to="/beauty/makeup" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Makeup ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px]">
                    <NavLink to="/beauty/makeup/face" className="block px-2 py-1 hover:bg-orange-100">Face</NavLink>
                    <NavLink to="/beauty/makeup/lips" className="block px-2 py-1 hover:bg-orange-100">Lips</NavLink>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/beauty/skincare" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Skincare ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px]">
                    <NavLink to="/beauty/skincare/sunscreen" className="block px-2 py-1 hover:bg-orange-100">Sunscreen</NavLink>
                    <NavLink to="/beauty/skincare/moisturizer" className="block px-2 py-1 hover:bg-orange-100">Moisturizer</NavLink>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/beauty/haircare" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Haircare ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px]">
                    <NavLink to="/beauty/haircare/shampoo" className="block px-2 py-1 hover:bg-orange-100">Shampoo</NavLink>
                    <NavLink to="/beauty/haircare/oil" className="block px-2 py-1 hover:bg-orange-100">Oil</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* JEWELLERY DROPDOWN */}
            <div className="relative group flex items-center gap-1 cursor-pointer py-2">
              <NavLink 
                to="/jewellery" 
                className={({ isActive }) => 
                  `transition duration-200
                   group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4
                   hover:text-orange-500
                   ${isActive ? "underline underline-offset-4 text-orange-500" : ""}`
                }
              >
                Jewellery
              </NavLink>
              <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[200px] z-50">
                <div className="relative group/item">
                  <NavLink to="/jewellery/earrings" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Earrings ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px]">
                    <NavLink to="/jewellery/earrings/stud" className="block px-2 py-1 hover:bg-orange-100">Stud</NavLink>
                    <NavLink to="/jewellery/earrings/jhumka" className="block px-2 py-1 hover:bg-orange-100">Jhumka</NavLink>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/jewellery/necklace" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Necklace ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px]">
                    <NavLink to="/jewellery/necklace/chain" className="block px-2 py-1 hover:bg-orange-100">Chain</NavLink>
                    <NavLink to="/jewellery/necklace/choker" className="block px-2 py-1 hover:bg-orange-100">Choker</NavLink>
                  </div>
                </div>
                <div className="relative group/item mt-2">
                  <NavLink to="/jewellery/bangles" className="block px-2 py-1 hover:bg-orange-100 rounded">
                    Bangles ▸
                  </NavLink>
                  <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[180px]">
                    <NavLink to="/jewellery/bangles/traditional" className="block px-2 py-1 hover:bg-orange-100">Traditional</NavLink>
                    <NavLink to="/jewellery/bangles/model" className="block px-2 py-1 hover:bg-orange-100">Model</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* RIGHT SIDE WITH NAVIGATION */}
          <div className="flex gap-10 text-sm md:text-base items-center mr-20">
            <span 
              onClick={() => navigate('/about')}
              className="cursor-pointer hover:text-orange-500 text-lg transition duration-200"
            >
              About us
            </span>
            <span 
              onClick={() => navigate('/contact')}
              className="cursor-pointer hover:text-orange-500 text-lg transition duration-200"
            >
              Contact
            </span>
            <span 
              onClick={() => navigate('/cart')}
              className="cursor-pointer hover:text-orange-500 text-lg transition duration-200 relative group"
            >
              Cart 🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="h-[200px] md:h-[260px]"></div>
    </>
  )
}

export default Navbar