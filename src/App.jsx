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
import KidsFashion from './Component1/KidsFashion'
import KidsFashionProducts from './Component1/KidsfashionProducts'
import ShirtsMenFashion from './Component1/ShirtsMenFashion'
import ShirtsMenFashionProducts from './Component1/ShirtsMenFashionProducts'
import PantsMenFashion from './Component1/PantsMenFashion'
import PantsMenFashionProducts from './Component1/PantsMenFashionProducts'
import SareeWomenFashion from './Component1/SareeWomenFashion'
import SareeWomenFashionProducts from './Component1/SareeWomenFashionProducts'
import DressesWomenFashion from './Component1/DressesWomenFashion'
import DressesWomenFashionProducts from './Component1/DressesWomenFashionProducts'

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
        <Route path='/fashion/men/shirts' element={<ShirtsMenFashion/>}/>
        <Route path='/fashion/men/shirts/products' element={<ShirtsMenFashionProducts/>}/>
        <Route path='/fashion/men/pants' element={<PantsMenFashion/>}/>
        <Route path='/fashion/men/pants/products' element={<PantsMenFashionProducts/>}/>

        <Route path='/fashion/women' element={<WomenFashion/>}/>
        <Route path='/fashion/women/products' element={<WomenFashionProducts/>}/>
        <Route path='/fashion/women/saree' element={<SareeWomenFashion/>}/>
        <Route path='/fashion/women/saree/products' element={<SareeWomenFashionProducts/>}/>
        <Route path='/fashion/women/dresses' element={<DressesWomenFashion/>}/>
        <Route path='/fashion/women/dresses/products' element={<DressesWomenFashionProducts/>}/>


        <Route path='/fashion/kids' element={<KidsFashion/>}/>
        <Route path='/fashion/kids/products' element={<KidsFashionProducts/>}/>

        
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
