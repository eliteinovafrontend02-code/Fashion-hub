import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'


const SidebarLeaf = ({ label, to, navigate, closeSidebar }) => (
  <div
    onClick={() => { navigate(to); closeSidebar() }}
    className="px-10 py-2 text-sm text-gray-600 hover:bg-orange-100 hover:text-orange-600 cursor-pointer transition"
  >
    {label}
  </div>
)

const SidebarLink = ({ label, to, navigate, closeSidebar }) => (
  <div
    onClick={() => { navigate(to); closeSidebar() }}
    className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition border-b border-orange-100"
  >
    {label}
  </div>
)

const SidebarSub = ({ label, to, navigate, closeSidebar, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="flex items-center">
        <div
          onClick={() => { if (to) { navigate(to); closeSidebar() } }}
          className="flex-1 px-6 py-2 text-left text-orange-600 hover:bg-orange-100 transition text-sm cursor-pointer"
        >
          {label}
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="px-3 py-2 text-orange-600 hover:bg-orange-100 transition outline-none border-none focus:outline-none"
        >
          <span className="text-xs transition-transform duration-200" style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
        </button>
      </div>
      {open && <div className="bg-white">{children}</div>}
    </div>
  )
}

const SidebarAccordion = ({ label, to, navigate, closeSidebar, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-orange-200">
      <div className="flex items-center">
        <div
          onClick={() => { if (to) { navigate(to); closeSidebar() } }}
          className="flex-1 px-4 py-3 text-left font-semibold text-orange-800 hover:text-orange-500 transition text-sm cursor-pointer tracking-wide"
        >
          {label}
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="px-3 py-3 text-orange-700 hover:bg-orange-50 transition outline-none border-none focus:outline-none"
        >
          <span className="text-xs transition-transform duration-200" style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
        </button>
      </div>
      {open && <div className="bg-orange-50">{children}</div>}
    </div>
  )
}

const Navbar = () => {
  const { getItemCount, cartItems } = useCart()
  const cartCount = getItemCount()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const searchRef = useRef(null)
  const navigate = useNavigate()

  
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

  const performSearch = (query) => {
    if (query.trim() === '') { setSearchResults([]); setShowResults(false); return }
    setIsSearching(true)
    const searchTerm = query.toLowerCase().trim()
    const filtered = allProducts.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm)
      const categoryMatch = product.category.toLowerCase().includes(searchTerm)
      const subcategoryMatch = product.subcategory.toLowerCase().includes(searchTerm)
      const words = searchTerm.split(' ')
      const wordMatch = words.some(word =>
        product.name.toLowerCase().includes(word) ||
        product.category.toLowerCase().includes(word)
      )
      return nameMatch || categoryMatch || subcategoryMatch || wordMatch
    }).sort((a, b) => {
      const aExact = a.name.toLowerCase() === searchTerm
      const bExact = b.name.toLowerCase() === searchTerm
      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
      return a.name.localeCompare(b.name)
    })
    setSearchResults(filtered)
    setShowResults(true)
    setIsSearching(false)
  }

  useEffect(() => {
  console.log('Cart items in Navbar:', cartItems)
  console.log('Cart count:', cartCount)
}, [cartItems, cartCount])

  useEffect(() => {
    const t = setTimeout(() => { if (searchQuery) performSearch(searchQuery) }, 300)
    return () => clearTimeout(t)
  }, [searchQuery])

  useEffect(() => {
    const h = (e) => { if (searchRef.current && !searchRef.current.contains(e.target)) setShowResults(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  

  const highlightMatch = (text, query) => {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase()
        ? <span key={index} className="bg-yellow-200 font-bold">{part}</span>
        : part
    )
  }

  const closeSidebar = () => setSidebarOpen(false)

  // ── Sidebar accordion ──────────────────────────────────────────────────────
  
  return (
    <>
      {/* ── INLINE STYLES for marquee & sidebar ── */}
      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-track { display:flex; animation:marquee 20s linear infinite; width:max-content; }

        /* sidebar slide */
        .sidebar-panel {
          position:fixed; top:0; left:0; height:100dvh; width:280px;
          background:#fff; z-index:1000;
          transform:translateX(-100%);
          transition:transform 0.3s cubic-bezier(.4,0,.2,1);
          display:flex; flex-direction:column;
          box-shadow: 4px 0 24px rgba(0,0,0,0.15);
        }
        .sidebar-panel.open { transform:translateX(0); }
        .sidebar-overlay {
          position:fixed; inset:0; background:rgba(0,0,0,0.45);
          z-index:999; backdrop-filter:blur(2px);
        }

        /* hamburger - only on mobile/small tablet */
        .hamburger-btn { display:none; }
        @media (max-width:767px) {
          .hamburger-btn { display:flex !important; }
          /* hide full desktop nav on mobile */
          .desktop-nav-row { display:none !important; }
          /* mobile logo row */
          .mobile-logo-row { display:flex !important; }
          .desktop-logo-row { display:none !important; }
        }
        @media (min-width:768px) {
          .mobile-logo-row { display:none !important; }
          .desktop-logo-row { display:flex !important; }
        }

        
        @media (min-width:1101px) and (max-width:1280px) {
          .nav-gap { gap:14px !important; }
          .search-box { width:160px !important; }
        }
      `}</style>

      {/* ── SIDEBAR OVERLAY ── */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}

      {/* ── SIDEBAR PANEL ── */}
      <div className={`sidebar-panel ${sidebarOpen ? 'open' : ''}`} style={{background: 'linear-gradient(180deg, #fff8f0 0%, #fff3e8 50%, #fff8f0 100%)'}}>
        {/* Header */}
        <div className="bg-orange-200 border-b border-orange-300 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <img src="/logo.webp" alt="logo" className="w-9 h-9 object-contain" />
            <span style={{ fontFamily: 'Cookie, cursive' }} className="text-2xl text-orange-600">fashion hub</span>
          </div>
          <button
            onClick={closeSidebar}
            className="text-orange-600 bg-orange-200 hover:bg-orange-300 rounded-full w-7 h-7 flex items-center justify-center text-sm transition"
          >✕</button>
        </div>

        {/* Mobile search */}
       {/* Mobile search */}
<div className="px-3 py-2 bg-white border-b border-orange-100 flex-shrink-0">
  <div className="relative">
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={e => { setSearchQuery(e.target.value); if (e.target.value) performSearch(e.target.value); else setShowResults(false) }}
      className="w-full border-2 border-orange-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
      autoComplete="off"
    />
    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
  </div>

  {/* Mobile Search Results */}
            {showResults && searchQuery && (
              <div className="mt-2 bg-white rounded-lg border border-orange-200 shadow-lg max-h-64 overflow-y-auto">
                <div className="p-2 border-b border-orange-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-600">Results ({searchResults.length})</span>
                  <button onClick={() => setShowResults(false)} className="text-gray-400 text-xs">✕</button>
                </div>
                {searchResults.length > 0 ? (
                  <div>
                    {searchResults.map((product, index) => (
                      <div
                        key={index}
                        onClick={() => { navigate(product.path); setShowResults(false); setSearchQuery(''); closeSidebar() }}
                        className="p-3 hover:bg-orange-50 cursor-pointer border-b border-orange-50 last:border-b-0 transition"
                      >
                        <p className="font-semibold text-gray-800 text-sm">
                          {highlightMatch(product.name, searchQuery)}
                        </p>
                        <div className="flex gap-2 mt-0.5">
                          <p className="text-xs text-gray-400">{product.category}</p>
                          <p className="text-xs text-gray-400">• {product.subcategory}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 text-sm">No results for "{searchQuery}"</p>
                    <div className="mt-2 flex flex-wrap gap-1 justify-center px-2">
                      {['Shirt', 'Watch', 'Shoes', 'Saree', 'Dress', 'Bag'].map(s => (
                        <button key={s} onClick={() => { setSearchQuery(s); performSearch(s) }}
                          className="text-xs bg-orange-100 hover:bg-orange-200 px-2 py-1 rounded transition">{s}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        {/* Body - scrollable */}
        <div className="flex-1 overflow-y-auto">

          {/* Quick links */}
          <SidebarLink label="🏠  Home" to="/" navigate={navigate} closeSidebar={closeSidebar} />
          <SidebarLink label="ℹ️  About Us" to="/about" navigate={navigate} closeSidebar={closeSidebar} />
          <SidebarLink label="📞  Contact" to="/contact" navigate={navigate} closeSidebar={closeSidebar} />
          <SidebarLink label="🛒  Cart" to="/cart" navigate={navigate} closeSidebar={closeSidebar} />


          {/* FASHION */}
              <SidebarAccordion label="👗  Fashion" to="/fashion" navigate={navigate} closeSidebar={closeSidebar}>
                <SidebarSub label="Men" to="/fashion/men" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarSub label="Shirts" to="/fashion/men/shirts" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Casual" to="/fashion/men/shirts/casual" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Printed" to="/fashion/men/shirts/printed" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                  <SidebarSub label="Pants" to="/fashion/men/pants" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Jean" to="/fashion/men/pants/jean" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Formal" to="/fashion/men/pants/formal" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                </SidebarSub>
                <SidebarSub label="Women" to="/fashion/women" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarSub label="Saree" to="/fashion/women/saree" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Casual" to="/fashion/women/saree/casual" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Party" to="/fashion/women/saree/party" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                  <SidebarSub label="Dresses" to="/fashion/women/dresses" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Short" to="/fashion/women/dresses/short" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Long" to="/fashion/women/dresses/long" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                </SidebarSub>
                <SidebarSub label="Kids" to="/fashion/kids" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarSub label="Boy" to="/fashion/kids/boy" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Shirt" to="/fashion/kids/boy/shirt" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Set" to="/fashion/kids/boy/set" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                  <SidebarSub label="Girl" to="/fashion/kids/girl" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Frock" to="/fashion/kids/girl/frock" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Set" to="/fashion/kids/girl/set" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                </SidebarSub>
              </SidebarAccordion>

              {/* ACCESSORIES */}
              <SidebarAccordion label="💎  Accessories" to="/accessories" navigate={navigate} closeSidebar={closeSidebar}>
                <SidebarSub label="Watches" to="/accessories/watches" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Casual" to="/accessories/watches/casual" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Formal" to="/accessories/watches/formal" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
                <SidebarSub label="Bags" to="/accessories/bags" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Handbag" to="/accessories/bags/handbag" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Sling" to="/accessories/bags/sling" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
                <SidebarSub label="Sunglasses" to="/accessories/sunglasses" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Round" to="/accessories/sunglasses/round" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Square" to="/accessories/sunglasses/square" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
              </SidebarAccordion>

              {/* FOOTWEAR */}
              <SidebarAccordion label="👟  Footwear" to="/footwear" navigate={navigate} closeSidebar={closeSidebar}>
                <SidebarSub label="Men" to="/footwear/men" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarSub label="Shoes" to="/footwear/men/shoes" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Casual" to="/footwear/men/shoes/casual" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Formal" to="/footwear/men/shoes/formal" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                  <SidebarSub label="Sandals" to="/footwear/men/sandals" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Sports" to="/footwear/men/sandals/sports" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Flat" to="/footwear/men/sandals/flat" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                </SidebarSub>
                <SidebarSub label="Women" to="/footwear/women" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarSub label="Heels" to="/footwear/women/heels" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Party" to="/footwear/women/heels/party" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Casual" to="/footwear/women/heels/casual" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                  <SidebarSub label="Flats" to="/footwear/women/flats" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Ballerina" to="/footwear/women/flats/ballerina" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Ethnic" to="/footwear/women/flats/ethnic" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                </SidebarSub>
                <SidebarSub label="Kids" to="/footwear/kids" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarSub label="Boy" to="/footwear/kids/boy" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Shoes" to="/footwear/kids/boy/shoes" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Sandals" to="/footwear/kids/boy/sandals" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                  <SidebarSub label="Girl" to="/footwear/kids/girl" navigate={navigate} closeSidebar={closeSidebar}>
                    <SidebarLeaf label="Shoes" to="/footwear/kids/girl/shoes" navigate={navigate} closeSidebar={closeSidebar} />
                    <SidebarLeaf label="Sandals" to="/footwear/kids/girl/sandals" navigate={navigate} closeSidebar={closeSidebar} />
                  </SidebarSub>
                </SidebarSub>
              </SidebarAccordion>

              {/* BEAUTY */}
              <SidebarAccordion label="✨  Beauty" to="/beauty" navigate={navigate} closeSidebar={closeSidebar}>
                <SidebarSub label="Makeup" to="/beauty/makeup" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Face" to="/beauty/makeup/face" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Lips" to="/beauty/makeup/lips" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
                <SidebarSub label="Skincare" to="/beauty/skincare" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Sunscreen" to="/beauty/skincare/sunscreen" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Moisturizer" to="/beauty/skincare/moisturizer" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
                <SidebarSub label="Haircare" to="/beauty/haircare" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Shampoo" to="/beauty/haircare/shampoo" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Oil" to="/beauty/haircare/oil" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
              </SidebarAccordion>

              {/* JEWELLERY */}
              <SidebarAccordion label="💍  Jewellery" to="/jewellery" navigate={navigate} closeSidebar={closeSidebar}>
                <SidebarSub label="Earrings" to="/jewellery/earrings" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Stud" to="/jewellery/earrings/stud" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Jhumka" to="/jewellery/earrings/jhumka" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
                <SidebarSub label="Necklace" to="/jewellery/necklace" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Chain" to="/jewellery/necklace/chain" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Choker" to="/jewellery/necklace/choker" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
                <SidebarSub label="Bangles" to="/jewellery/bangles" navigate={navigate} closeSidebar={closeSidebar}>
                  <SidebarLeaf label="Traditional" to="/jewellery/bangles/traditional" navigate={navigate} closeSidebar={closeSidebar} />
                  <SidebarLeaf label="Model" to="/jewellery/bangles/model" navigate={navigate} closeSidebar={closeSidebar} />
                </SidebarSub>
              </SidebarAccordion>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          FIXED NAVBAR
      ══════════════════════════════════════════════════════════════ */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md">

        {/* OFFER STRIP */}
        <div className="overflow-hidden bg-black py-1">
          <div className="marquee-track whitespace-nowrap text-white text-sm">
            {[...Array(3)].map((_, i) => (
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

        {/* ── MOBILE LOGO ROW ── */}
        <div className="mobile-logo-row items-center justify-between px-3 py-2 bg-white">
          {/* Hamburger */}
          <button
            className="hamburger-btn flex-col gap-1 p-1 bg-orange-100 rounded-lg"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-orange-600 rounded"></span>
            <span className="block w-4 h-0.5 bg-orange-600 rounded"></span>
            <span className="block w-5 h-0.5 bg-orange-600 rounded"></span>
          </button>

          {/* Logo center */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logo.webp" className="w-10 h-10 object-contain" alt="logo" />
            <div className="flex flex-col">
              <h1 style={{ fontFamily: 'Cookie, cursive' }}
                className="text-2xl font-bold tracking-wide bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent capitalize leading-tight">
                fashion hub
              </h1>
              <p className="capitalize text-xs text-gray-500">trendy styles daily</p>
            </div>
          </div>

          {/* Cart */}
          <button
            onClick={() => navigate('/cart')}
            className="relative text-xl text-gray-700 hover:text-orange-500 transition p-1"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* ── DESKTOP LOGO ROW ── */}
        <div className="desktop-logo-row flex-col md:flex-row items-center gap-2 justify-center mt-2">
          <img src="/logo.webp" className="logo-img w-24 h-24 object-contain" alt="logo" />
          <div className="flex flex-col">
            <h1 style={{ fontFamily: 'Cookie, cursive' }}
              className="logo-title text-3xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent capitalize">
              fashion hub
            </h1>
            <p className="logo-sub capitalize text-sm md:text-lg text-gray-500">trendy styles daily</p>
          </div>
        </div>

        {/* ── DESKTOP NAV ROW ── */}
        <div className="desktop-nav-row mt-2 px-3 py-2 bg-orange-100 flex items-center justify-between w-full shadow-sm ">

          {/* LEFT: search + categories */}
          <div className="flex items-center nav-gap gap-4 flex-shrink-0">

            {/* SEARCH */}
            <div className="relative flex-shrink-0" ref={searchRef}>
              <form onSubmit={e => { e.preventDefault(); performSearch(searchQuery) }}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); if (!e.target.value) setShowResults(false) }}
                  className="search-box w-48 md:w-64 lg:w-80 border-2 border-gray-500 rounded-lg px-3 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition text-sm"
                  autoComplete="off"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition">
                  {isSearching ? '⏳' : '🔍'}
                </button>
              </form>

              {/* Search results dropdown */}
              {showResults && searchQuery && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white shadow-2xl rounded-lg border z-50 h-auto">
                  <div className="sticky top-0 bg-white p-3 border-b flex justify-between items-center">
                    <h3 className="font-bold text-gray-700 text-sm">Search Results ({searchResults.length})</h3>
                    <button onClick={() => setShowResults(false)} className="text-gray-400 hover:text-gray-600 transition text-sm">✕</button>
                  </div>
                  {searchResults.length > 0 ? (
                    <div>
                      {searchResults.map((product, index) => (
                        <div
                          key={index}
                          onClick={() => { navigate(product.path); setShowResults(false); setSearchQuery('') }}
                          className="p-3 hover:bg-orange-50 cursor-pointer border-b last:border-b-0 transition group"
                        >
                          <p className="font-semibold text-gray-800 group-hover:text-orange-600 text-sm">
                            {highlightMatch(product.name, searchQuery)}
                          </p>
                          <div className="flex gap-2 mt-1">
                            <p className="text-xs text-gray-500">Category: {product.category}</p>
                            <p className="text-xs text-gray-500">• {product.subcategory}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-gray-500 text-sm">No products found for "{searchQuery}"</p>
                      <div className="mt-3 flex flex-wrap gap-2 justify-center">
                        {['Shirt', 'Watch', 'Shoes', 'Saree', 'Dress', 'Bag'].map(s => (
                          <button key={s} onClick={() => setSearchQuery(s)}
                            className="text-xs bg-gray-100 hover:bg-orange-100 px-2 py-1 rounded transition">{s}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CATEGORIES */}
            <div className="flex nav-gap gap-3 md:gap-4 lg:gap-8 items-center">

              <NavLink to="/"
                className={({ isActive }) =>
                  `nav-link-text cursor-pointer text-sm lg:text-base hover:text-orange-500 whitespace-nowrap ${isActive ? 'underline underline-offset-4 text-orange-500' : ''}`
                }
              >Home</NavLink>

              {/* FASHION */}
              <div className="relative group flex items-center gap-1 cursor-pointer py-2">
                <NavLink to="/fashion"
                  className={({ isActive }) =>
                    `nav-link-text text-sm lg:text-base transition duration-200 group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4 hover:text-orange-500 whitespace-nowrap ${isActive ? 'underline underline-offset-4 text-orange-500' : ''}`
                  }
                >Fashion</NavLink>
                <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[180px] z-50">
                  <div className="relative group/item">
                    <NavLink to="/fashion/men" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Men ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <div className="relative group/sub">
                        <NavLink to="/fashion/men/shirts" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Shirts ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/fashion/men/shirts/casual" className="block px-2 py-1 hover:bg-orange-100 text-sm">Casual</NavLink>
                          <NavLink to="/fashion/men/shirts/printed" className="block px-2 py-1 hover:bg-orange-100 text-sm">Printed</NavLink>
                        </div>
                      </div>
                      <div className="relative group/sub mt-1">
                        <NavLink to="/fashion/men/pants" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Pants ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/fashion/men/pants/jean" className="block px-2 py-1 hover:bg-orange-100 text-sm">Jean</NavLink>
                          <NavLink to="/fashion/men/pants/formal" className="block px-2 py-1 hover:bg-orange-100 text-sm">Formal</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/fashion/women" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Women ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <div className="relative group/sub">
                        <NavLink to="/fashion/women/saree" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Saree ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/fashion/women/saree/casual" className="block px-2 py-1 hover:bg-orange-100 text-sm">Casual</NavLink>
                          <NavLink to="/fashion/women/saree/party" className="block px-2 py-1 hover:bg-orange-100 text-sm">Party</NavLink>
                        </div>
                      </div>
                      <div className="relative group/sub mt-1">
                        <NavLink to="/fashion/women/dresses" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Dresses ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/fashion/women/dresses/short" className="block px-2 py-1 hover:bg-orange-100 text-sm">Short</NavLink>
                          <NavLink to="/fashion/women/dresses/long" className="block px-2 py-1 hover:bg-orange-100 text-sm">Long</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/fashion/kids" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Kids ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <div className="relative group/sub">
                        <NavLink to="/fashion/kids/boy" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Boy ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/fashion/kids/boy/shirt" className="block px-2 py-1 hover:bg-orange-100 text-sm">Shirt</NavLink>
                          <NavLink to="/fashion/kids/boy/set" className="block px-2 py-1 hover:bg-orange-100 text-sm">Set</NavLink>
                        </div>
                      </div>
                      <div className="relative group/sub mt-1">
                        <NavLink to="/fashion/kids/girl" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Girl ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/fashion/kids/girl/frock" className="block px-2 py-1 hover:bg-orange-100 text-sm">Frock</NavLink>
                          <NavLink to="/fashion/kids/girl/set" className="block px-2 py-1 hover:bg-orange-100 text-sm">Set</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACCESSORIES */}
              <div className="relative group flex items-center gap-1 cursor-pointer py-2">
                <NavLink to="/accessories"
                  className={({ isActive }) =>
                    `nav-link-text text-sm lg:text-base transition duration-200 group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4 hover:text-orange-500 whitespace-nowrap ${isActive ? 'underline underline-offset-4 text-orange-500' : ''}`
                  }
                >Accessories</NavLink>
                <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[180px] z-50">
                  <div className="relative group/item">
                    <NavLink to="/accessories/watches" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Watches ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[140px] z-50">
                      <NavLink to="/accessories/watches/casual" className="block px-2 py-1 hover:bg-orange-100 text-sm">Casual</NavLink>
                      <NavLink to="/accessories/watches/formal" className="block px-2 py-1 hover:bg-orange-100 text-sm">Formal</NavLink>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/accessories/bags" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Bags ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[140px] z-50">
                      <NavLink to="/accessories/bags/handbag" className="block px-2 py-1 hover:bg-orange-100 text-sm">Handbag</NavLink>
                      <NavLink to="/accessories/bags/sling" className="block px-2 py-1 hover:bg-orange-100 text-sm">Sling</NavLink>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/accessories/sunglasses" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Sunglasses ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[140px] z-50">
                      <NavLink to="/accessories/sunglasses/round" className="block px-2 py-1 hover:bg-orange-100 text-sm">Round</NavLink>
                      <NavLink to="/accessories/sunglasses/square" className="block px-2 py-1 hover:bg-orange-100 text-sm">Square</NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTWEAR */}
              <div className="relative group flex items-center gap-1 cursor-pointer py-2">
                <NavLink to="/footwear"
                  className={({ isActive }) =>
                    `nav-link-text text-sm lg:text-base transition duration-200 group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4 hover:text-orange-500 whitespace-nowrap ${isActive ? 'underline underline-offset-4 text-orange-500' : ''}`
                  }
                >Footwear</NavLink>
                <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[180px] z-50">
                  <div className="relative group/item">
                    <NavLink to="/footwear/men" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Men ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <div className="relative group/sub">
                        <NavLink to="/footwear/men/shoes" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Shoes ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/footwear/men/shoes/casual" className="block px-2 py-1 hover:bg-orange-100 text-sm">Casual</NavLink>
                          <NavLink to="/footwear/men/shoes/formal" className="block px-2 py-1 hover:bg-orange-100 text-sm">Formal</NavLink>
                        </div>
                      </div>
                      <div className="relative group/sub mt-1">
                        <NavLink to="/footwear/men/sandals" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Sandals ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/footwear/men/sandals/sports" className="block px-2 py-1 hover:bg-orange-100 text-sm">Sports</NavLink>
                          <NavLink to="/footwear/men/sandals/flat" className="block px-2 py-1 hover:bg-orange-100 text-sm">Flat</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/footwear/women" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Women ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <div className="relative group/sub">
                        <NavLink to="/footwear/women/heels" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Heels ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/footwear/women/heels/party" className="block px-2 py-1 hover:bg-orange-100 text-sm">Party</NavLink>
                          <NavLink to="/footwear/women/heels/casual" className="block px-2 py-1 hover:bg-orange-100 text-sm">Casual</NavLink>
                        </div>
                      </div>
                      <div className="relative group/sub mt-1">
                        <NavLink to="/footwear/women/flats" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Flats ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[140px] z-50">
                          <NavLink to="/footwear/women/flats/ballerina" className="block px-2 py-1 hover:bg-orange-100 text-sm">Ballerina</NavLink>
                          <NavLink to="/footwear/women/flats/ethnic" className="block px-2 py-1 hover:bg-orange-100 text-sm">Ethnic</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/footwear/kids" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Kids ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <div className="relative group/sub">
                        <NavLink to="/footwear/kids/boy" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Boy ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                          <div className="relative group/mini">
                            <NavLink to="/footwear/kids/boy/shoes" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Shoes </NavLink>
                            <NavLink to="/footwear/kids/boy/sandals" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Sandals </NavLink>
                          
                          </div>
                        </div>
                      </div>
                      <div className="relative group/sub mt-2">
                        <NavLink to="/footwear/kids/girl" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Girl ▸</NavLink>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-md p-2 min-w-[160px] z-50">
                          <div className="relative group/mini">
                            <NavLink to="/footwear/kids/girl/shoes" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Shoes </NavLink>
                            <NavLink to="/footwear/kids/girl/sandals" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Sandals </NavLink>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BEAUTY */}
              <div className="relative group flex items-center gap-1 cursor-pointer py-2">
                <NavLink to="/beauty"
                  className={({ isActive }) =>
                    `nav-link-text text-sm lg:text-base transition duration-200 group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4 hover:text-orange-500 whitespace-nowrap ${isActive ? 'underline underline-offset-4 text-orange-500' : ''}`
                  }
                >Beauty</NavLink>
                <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[180px] z-50">
                  <div className="relative group/item">
                    <NavLink to="/beauty/makeup" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Makeup ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <NavLink to="/beauty/makeup/face" className="block px-2 py-1 hover:bg-orange-100 text-sm">Face</NavLink>
                      <NavLink to="/beauty/makeup/lips" className="block px-2 py-1 hover:bg-orange-100 text-sm">Lips</NavLink>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/beauty/skincare" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Skincare ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <NavLink to="/beauty/skincare/sunscreen" className="block px-2 py-1 hover:bg-orange-100 text-sm">Sunscreen</NavLink>
                      <NavLink to="/beauty/skincare/moisturizer" className="block px-2 py-1 hover:bg-orange-100 text-sm">Moisturizer</NavLink>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/beauty/haircare" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Haircare ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <NavLink to="/beauty/haircare/shampoo" className="block px-2 py-1 hover:bg-orange-100 text-sm">Shampoo</NavLink>
                      <NavLink to="/beauty/haircare/oil" className="block px-2 py-1 hover:bg-orange-100 text-sm">Oil</NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* JEWELLERY */}
              <div className="relative group flex items-center gap-1 cursor-pointer py-2">
                <NavLink to="/jewellery"
                  className={({ isActive }) =>
                    `nav-link-text text-sm lg:text-base transition duration-200 group-hover:text-orange-500 group-hover:underline group-hover:underline-offset-4 hover:text-orange-500 whitespace-nowrap ${isActive ? 'underline underline-offset-4 text-orange-500' : ''}`
                  }
                >Jewellery</NavLink>
                <span className="text-xs transition duration-200 group-hover:text-orange-500">▼</span>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-3 min-w-[180px] z-50">
                  <div className="relative group/item">
                    <NavLink to="/jewellery/earrings" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Earrings ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <NavLink to="/jewellery/earrings/stud" className="block px-2 py-1 hover:bg-orange-100 text-sm">Stud</NavLink>
                      <NavLink to="/jewellery/earrings/jhumka" className="block px-2 py-1 hover:bg-orange-100 text-sm">Jhumka</NavLink>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/jewellery/necklace" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Necklace ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <NavLink to="/jewellery/necklace/chain" className="block px-2 py-1 hover:bg-orange-100 text-sm">Chain</NavLink>
                      <NavLink to="/jewellery/necklace/choker" className="block px-2 py-1 hover:bg-orange-100 text-sm">Choker</NavLink>
                    </div>
                  </div>
                  <div className="relative group/item mt-2">
                    <NavLink to="/jewellery/bangles" className="block px-2 py-1 hover:bg-orange-100 rounded text-sm">Bangles ▸</NavLink>
                    <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-md p-2 min-w-[160px] z-50">
                      <NavLink to="/jewellery/bangles/traditional" className="block px-2 py-1 hover:bg-orange-100 text-sm">Traditional</NavLink>
                      <NavLink to="/jewellery/bangles/model" className="block px-2 py-1 hover:bg-orange-100 text-sm">Model</NavLink>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: About, Contact, Cart */}
          <div className="flex right-nav-gap gap-3 md:gap-4 lg:gap-8 items-center flex-shrink-0 ml-2">
            <span onClick={() => navigate('/about')}
              className="right-nav-text cursor-pointer hover:text-orange-500 text-sm lg:text-base transition duration-200 whitespace-nowrap">
              About us
            </span>
            <span onClick={() => navigate('/contact')}
              className="right-nav-text cursor-pointer hover:text-orange-500 text-sm lg:text-base transition duration-200 whitespace-nowrap">
              Contact
            </span>
          <span 
            onClick={() => navigate('/cart')}
            className="right-nav-text cursor-pointer hover:text-orange-500 text-sm lg:text-base transition duration-200 relative whitespace-nowrap"
          >
            Cart 🛒
            {cartCount > 0 && (
              <span className="ml-1 bg-orange-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </span>
          </div>

        </div>
      </div>

      {/* Spacer */}
      <div className="h-[72px] md:h-[220px] lg:h-[230px]"></div>
    </>
  )
}

export default Navbar