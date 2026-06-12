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
import BoyKidsFashion from './Component1/BoyKidsFashion'
import BoyKidsFashionProducts from './Component1/BoyKidsFashionProducts'
import GirlKidsFashion from './Component1/GirlKidsFashion'
import GirlKidsFashionProducts from './Component1/GirlKidsFashionProducts'
import WatchesAccessories from './Component2/WatchesAccessories'
import WatchesAccessoriesProducts from './Component2/WatchesAccessoriesProducts'
import BagsAccessories from './Component2/BagsAccessories'
import BagsAccessoriesProducts from './Component2/BagsAccessoriesProducts'
import SunglassesAccessories from './Component2/SunglassesAccessories'
import SunglassesAccessoriesProducts from './Component2/SunglassesAccessoriesProducts'
import MakeupBeauty from './Component4/MakeupBeauty'
import MakeupBeautyProducts from './Component4/MakeupBeautyProducts'
import SkincareBeauty from './Component4/SkincareBeauty'
import SkincareBeautyProducts from './Component4/SkincareBeautyProducts'
import HaircareBeauty from './Component4/HaircareBeauty'
import HaircareBeautyProducts from './Component4/HaircareBeautyProducts'
import EarringsJewellery from './Component5/EarringsJewellery'
import EarringsJewelleryProducts from './Component5/EarringsJewelleryProducts'
import NecklaceJewellery from './Component5/NecklaceJewellery'
import NecklaceJewelleryProducts from './Component5/NecklaceJewelleryProducts'
import BanglesJewellery from './Component5/BanglesJewellery'
import BanglesJewelleryProducts from './Component5/BanglesJwelleryProducts'
import MenFootwear from './Component3/MenFootwear'
import MenFootwearProducts from './Component3/MenFootwearProducts'
import WomenFootwear from './Component3/WomenFootwear'
import WomenFootwearProducts from './Component3/WomenFootwearProducts'
import KidsFootwear from './Component3/KidsFootwear'
import KidsFootwearProducts from './Component3/KidsFootwearProducts'
import CasualShirtMenFashionProducts from './Component1/CasualShirtMenFashionProducts'
import ShoesMenFootwear from './Component3/ShoesMenFootwear'
import ShoesMenFootwearProducts from './Component3/ShoesMenFootwearProducts'
import SandalsMenFootwear from './Component3/SandalsMenFootwear'
import SandalsMenFootwearProducts from './Component3/SandalsMenFootwearProducts'
import HeelsWomenFootwear from './Component3/HeelsWomenFootwear'
import HeelsWomenFootwearProducts from './Component3/HeelsWomenFootwearProducts'
import FlatsWomenFootwear from './Component3/FlatsWomenFootwear'
import FlatsWomenFootwearProducts from './Component3/FlatsWomenFootwearProducts'
import BoyKidsFootwear from './Component3/BoyKidsFootwear'
import BoyKidsFootwearProducts from './Component3/BoyKidsFootwearProducts'
import GirlKidsFootwear from './Component3/GirlKidsFootwear'
import GirlKidsFootwearProducts from './Component3/GirlKidsFootwearProducts'

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
        <Route path='/fashion/men/shirts/casual' element={<CasualShirtMenFashionProducts/>}/>
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
        <Route path='/fashion/kids/boy' element={<BoyKidsFashion/>}/>
        <Route path='/fashion/kids/boy/products' element={<BoyKidsFashionProducts/>}/>
         <Route path='/fashion/kids/girl' element={<GirlKidsFashion/>}/>
        <Route path='/fashion/kids/girl/products' element={<GirlKidsFashionProducts/>}/>

        
        {/* accessories routes */}
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/accessories/aproducts' element={<AccessoriesProducts/>}/>
        <Route path='/accessories/watches' element={<WatchesAccessories/>}/>
        <Route path='/accessories/watches/aproducts' element={<WatchesAccessoriesProducts/>}/>
        <Route path='/accessories/bags' element={<BagsAccessories/>}/>
        <Route path='/accessories/bags/aproducts' element={<BagsAccessoriesProducts/>}/>
        <Route path='/accessories/sunglasses' element={<SunglassesAccessories/>}/>
        <Route path='/accessories/sunglasses/aproducts' element={<SunglassesAccessoriesProducts/>}/>

        {/* footwear routes */}
        <Route path='/footwear' element={<Footwear/>}/>
        <Route path='/footwear/fproducts' element={<FootwearProducts/>}/>

        <Route path='/footwear/men' element={<MenFootwear/>}/>
        <Route path='/footwear/men/fproducts' element={<MenFootwearProducts/>}/>
        <Route path='/footwear/men/shoes' element={<ShoesMenFootwear/>}/>
        <Route path='/footwear/men/shoes/fproducts' element={<ShoesMenFootwearProducts/>}/>
        <Route path='/footwear/men/sandals' element={<SandalsMenFootwear/>}/>
        <Route path='/footwear/men/sandals/fproducts' element={<SandalsMenFootwearProducts/>}/>

        <Route path='/footwear/women' element={<WomenFootwear/>}/>
        <Route path='/footwear/women/fproducts' element={<WomenFootwearProducts/>}/>
        <Route path='/footwear/women/heels' element={<HeelsWomenFootwear/>}/>
        <Route path='/footwear/women/heels/fproducts' element={<HeelsWomenFootwearProducts/>}/>
        <Route path='/footwear/women/flats' element={<FlatsWomenFootwear/>}/>
        <Route path='/footwear/women/flats/fproducts' element={<FlatsWomenFootwearProducts/>}/>

        <Route path='/footwear/kids' element={<KidsFootwear/>}/>
        <Route path='/footwear/kids/fproducts' element={<KidsFootwearProducts/>}/>
        <Route path='/footwear/kids/boy' element={<BoyKidsFootwear/>}/>
        <Route path='/footwear/kids/boy/fproducts' element={<BoyKidsFootwearProducts/>}/>
        <Route path='/footwear/kids/girl' element={<GirlKidsFootwear/>}/>
        <Route path='/footwear/kids/girl/fproducts' element={<GirlKidsFootwearProducts/>}/>

        {/* Beauty routes */}
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/beauty/bproducts' element={<BeautyProducts/>}/>
        <Route path='/beauty/makeup' element={<MakeupBeauty/>}/>
        <Route path='/beauty/makeup/bproducts' element={<MakeupBeautyProducts/>}/>
        <Route path='/beauty/skincare' element={<SkincareBeauty/>}/>
        <Route path='/beauty/skincare/bproducts' element={<SkincareBeautyProducts/>}/>
        <Route path='/beauty/haircare' element={<HaircareBeauty/>}/>
        <Route path='/beauty/haircare/bproducts' element={<HaircareBeautyProducts/>}/>

        {/* Jewellery routes */}
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/jewellery/jproducts' element={<JewelleryProducts/>}/>
        <Route path='/jewellery/earrings' element={<EarringsJewellery/>}/>
        <Route path='/jewellery/earrings/jproducts' element={<EarringsJewelleryProducts/>}/>
        <Route path='/jewellery/necklace' element={<NecklaceJewellery/>}/>
        <Route path='/jewellery/necklace/jproducts' element={<NecklaceJewelleryProducts/>}/>
        <Route path='/jewellery/bangles' element={<BanglesJewellery/>}/>
        <Route path='/jewellery/bangles/jproducts' element={<BanglesJewelleryProducts/>}/>

      </Routes>
      
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
