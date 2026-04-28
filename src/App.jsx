import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import { CartProvider } from './CartContext' 
import Products from './Products'
import Fashion from './Component1/Fashion'  
import Cart from './Cart'
import Checkout from './Checkout'
import OrderConfirmation from './OrderConfirmation'
import OrderSuccess from './OrderSuccess'

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
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
        <Route path='/order-success' element={<OrderSuccess/>}/>

      </Routes>
      
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
