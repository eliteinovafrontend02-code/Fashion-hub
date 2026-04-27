import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import { CartProvider } from './CartContext' 
import Products from './Products'
import Fashion from './Fashion'
import Cart from './Cart'

const App = () => {
  return (
    <div>
       <CartProvider>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
