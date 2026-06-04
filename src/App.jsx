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
import FashionProducts from './Component1/FashionProducts'
import Accessories from './Component2/Accessories'
import AccessoriesProducts from './Component2/AccessoriesProducts'
import Footwear from './Component3/Footwear'
import FootwearProducts from './Component3/FootwearProducts'
import Beauty from './Component4/Beauty'
import BeautyProducts from './Component4/BeautyProducts'
import Jewellery from './Component5/Jewellery'
import JewelleryProducts from './Component5/JewelleryProducts'
import MenFashion from './Component1/MenFashion'
import MenFashionProducts from './Component1/MenFashionProducts'
import WomenFashion from './Component1/WomenFashion'
import WomenFashionProducts from './Component1/WomenFashionProducts'

const App = () => {
  return (
    <div>
       <CartProvider>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
        <Route path='/order-success' element={<OrderSuccess/>}/>

        {/* fashion routes */}
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/fashion/fproducts' element={<FashionProducts/>}/>
        <Route path='/fashion/men' element={<MenFashion/>}/>
        <Route path='/fashion/men/products' element={<MenFashionProducts/>}/>
         <Route path='/fashion/women' element={<WomenFashion/>}/>
        <Route path='/fashion/women/products' element={<WomenFashionProducts/>}/>

        
        {/* accessories routes */}
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/accessories/aproducts' element={<AccessoriesProducts/>}/>

        {/* footwear routes */}
        <Route path='/footwear' element={<Footwear/>}/>
        <Route path='/footwear/fproducts' element={<FootwearProducts/>}/>

        {/* Beauty routes */}
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/beauty/bproducts' element={<BeautyProducts/>}/>

        {/* Jewellery routes */}
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/jewellery/jproducts' element={<JewelleryProducts/>}/>

      </Routes>
      
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
