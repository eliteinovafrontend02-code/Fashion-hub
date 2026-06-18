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
import PrintedShirtMenFashionProducts from './Component1/PrintedShirtMenFashionProducts'
import CasualSareeWomenFashionProducts from './Component1/CasualSareeWomenFashionProducts'
import JeanPantsMenFashionProducts from './Component1/JeanPantsMenFashionProducts'
import FormalPantsMenFashionProducts from './Component1/FormalPantsMenFashionProducts'
import PartySareeWomenFashionProducts from './Component1/PartySareeWomenFashionProducts'
import ShortDressesWomenFashionProducts from './Component1/ShortDressesWomenFashionProducts'
import LongDressesWomenFashionProducts from './Component1/LongDressesWomenFashionProducts'
import ShirtBoyKidsFashionProducts from './Component1/ShirtBoyKidsFashionProducts'
import SetBoyKidsFashionProducts from './Component1/SetBoyKidsFashionProducts'
import FrockGirlKidsFashionProducts from './Component1/FrockGirlKidsFashionProducts'
import SetGirlKidsFashionProducts from './Component1/SetGirlKidsFashionProducts'
import CasualWatchesAccessoriesProducts from './Component2/CasualWatchesAccessoriesProducts'
import FormalWatchesAccessoriesProducts from './Component2/FormalWatchesAccessoriesProducts'
import HandbagBagsAccessoriesProducts from './Component2/HandbagBagsAccessoriesProducts'
import SlingBagsAccessoriesProducts from './Component2/SlingBagsAccessoriesProducts'
import RoundSunglassesAccessoriesProducts from './Component2/RoundSunglassesAccessoriesProducts'
import SquareSunglassesAccessoriesProducts from './Component2/SquareSunglassesAccessoriesProducts'
import CasualShoesMenFootwearProducts from './Component3/CasualShoesMenFootwearProducts'
import FormalShoesMenFootwearProducts from './Component3/FormalShoesMenFootwearProducts'
import SportsSandalsMenFootwearProducts from './Component3/SportsSandalsMenFootwearProducts'
import FlatSandalsMenFootwearProducts from './Component3/FlatSandalsMenFootwearProducts'
import PartyHeelsWomenFootwearProducts from './Component3/PartyHeelsWomenFootwearProducts'
import CasualHeelsWomenFootwearProducts from './Component3/CasualHeelsWomenFootwearProducts'
import BallerinaFlatWomenFootwearProducts from './Component3/BallerinaFlatWomenFootwearProducts'
import EthnicFlatWomenFootwearProducts from './Component3/EthnicFlatWomenFootwearProducts'
import ShoesBoyKidsFootwearProducts from './Component3/ShoesBoyKidsFootwearProducts'
import SandalsBoyKidsFootwearProducts from './Component3/SandalsBoyKidsFootwearProducts'
import ShoesGirlKidsFootwearProducts from './Component3/ShoesGirlKidsFootwearProducts'
import SandalsGirlKidsFootwearProducts from './Component3/SandalsGirlKidsFootwearProducts'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import FaceMakeUpBeautyProducts from './Component4/FaceMakeUpBeautyProducts'
import LipsMakeupBeautyProducts from './Component4/LipsMakeupBeautyProducts'
import SunscreenSkincareBeautyProducts from './Component4/SunscreenSkincareBeautyProducts'
import MoisturizerSkincareBeautyProducts from './Component4/MoisturizerSkincareBeautyProducts'
import ShampooHaircareBeautyProducts from './Component4/ShampooHaircareBeautyProducts'
import OilHaircareBeautyProducts from './Component4/OilHaircareBeautyProducts'
import StudEarringsJewelleryProducts from './Component5/StudEarringsJewelleryProducts'
import JhumkaEarringsJewelleryProducts from './Component5/JhumkaEarringsJewelleryProducts'
import ChainNecklaceJewelleryProducts from './Component5/ChainNecklaceJewelleryProducts'
import ChokerNecklaceJewelleryProducts from './Component5/ChokerNecklaceJewelleryProducts'
import TraditionalBanglesJewelleryProducts from './Component5/TraditionalBanglesJewelleryProducts'
import ModelBanglesJewelleryProducts from './Component5/ModelBanglesJewelleryProducts'

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
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>

        {/* fashion routes */}
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/fashion/fproducts' element={<FashionProducts/>}/>

        <Route path='/fashion/men' element={<MenFashion/>}/>
        <Route path='/fashion/men/products' element={<MenFashionProducts/>}/>
        <Route path='/fashion/men/shirts' element={<ShirtsMenFashion/>}/>
        <Route path='/fashion/men/shirts/products' element={<ShirtsMenFashionProducts/>}/>
        <Route path='/fashion/men/shirts/casual' element={<CasualShirtMenFashionProducts/>}/>
        <Route path='/fashion/men/shirts/printed' element={<PrintedShirtMenFashionProducts/>}/>
        <Route path='/fashion/men/pants' element={<PantsMenFashion/>}/>
        <Route path='/fashion/men/pants/products' element={<PantsMenFashionProducts/>}/>
        <Route path='/fashion/men/pants/jean' element={<JeanPantsMenFashionProducts/>}/>
        <Route path='/fashion/men/pants/formal' element={<FormalPantsMenFashionProducts/>}/>

        <Route path='/fashion/women' element={<WomenFashion/>}/>
        <Route path='/fashion/women/products' element={<WomenFashionProducts/>}/>
        <Route path='/fashion/women/saree' element={<SareeWomenFashion/>}/>
        <Route path='/fashion/women/saree/products' element={<SareeWomenFashionProducts/>}/>
        <Route path='/fashion/women/saree/casual' element={<CasualSareeWomenFashionProducts/>}/>
        <Route path='/fashion/women/saree/party' element={<PartySareeWomenFashionProducts/>}/>
        <Route path='/fashion/women/dresses' element={<DressesWomenFashion/>}/>
        <Route path='/fashion/women/dresses/products' element={<DressesWomenFashionProducts/>}/>
        <Route path='/fashion/women/dresses/short' element={<ShortDressesWomenFashionProducts/>}/>
        <Route path='/fashion/women/dresses/long' element={<LongDressesWomenFashionProducts/>}/>


        <Route path='/fashion/kids' element={<KidsFashion/>}/>
        <Route path='/fashion/kids/products' element={<KidsFashionProducts/>}/>
        <Route path='/fashion/kids/boy' element={<BoyKidsFashion/>}/>
        <Route path='/fashion/kids/boy/products' element={<BoyKidsFashionProducts/>}/>
        <Route path='/fashion/kids/boy/shirt' element={<ShirtBoyKidsFashionProducts/>}/>
        <Route path='/fashion/kids/boy/set' element={<SetBoyKidsFashionProducts/>}/>
        <Route path='/fashion/kids/girl' element={<GirlKidsFashion/>}/>
        <Route path='/fashion/kids/girl/products' element={<GirlKidsFashionProducts/>}/>
        <Route path='/fashion/kids/girl/frock' element={<FrockGirlKidsFashionProducts/>}/>
        <Route path='/fashion/kids/girl/set' element={<SetGirlKidsFashionProducts/>}/>

        
        {/* accessories routes */}
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/accessories/aproducts' element={<AccessoriesProducts/>}/>
        <Route path='/accessories/watches' element={<WatchesAccessories/>}/>
        <Route path='/accessories/watches/aproducts' element={<WatchesAccessoriesProducts/>}/>
        <Route path='/accessories/watches/casual' element={<CasualWatchesAccessoriesProducts/>}/>
        <Route path='/accessories/watches/formal' element={<FormalWatchesAccessoriesProducts/>}/>

        <Route path='/accessories/bags' element={<BagsAccessories/>}/>
        <Route path='/accessories/bags/aproducts' element={<BagsAccessoriesProducts/>}/>
        <Route path='/accessories/bags/handbag' element={<HandbagBagsAccessoriesProducts/>}/>
        <Route path='/accessories/bags/sling' element={<SlingBagsAccessoriesProducts/>}/>

        <Route path='/accessories/sunglasses' element={<SunglassesAccessories/>}/>
        <Route path='/accessories/sunglasses/aproducts' element={<SunglassesAccessoriesProducts/>}/>
        <Route path='/accessories/sunglasses/round' element={<RoundSunglassesAccessoriesProducts/>}/>
        <Route path='/accessories/sunglasses/square' element={<SquareSunglassesAccessoriesProducts/>}/>

        {/* footwear routes */}
        <Route path='/footwear' element={<Footwear/>}/>
        <Route path='/footwear/fproducts' element={<FootwearProducts/>}/>

        <Route path='/footwear/men' element={<MenFootwear/>}/>
        <Route path='/footwear/men/fproducts' element={<MenFootwearProducts/>}/>
        <Route path='/footwear/men/shoes' element={<ShoesMenFootwear/>}/>
        <Route path='/footwear/men/shoes/fproducts' element={<ShoesMenFootwearProducts/>}/>
        <Route path='/footwear/men/shoes/casual' element={<CasualShoesMenFootwearProducts/>}/>
        <Route path='/footwear/men/shoes/formal' element={<FormalShoesMenFootwearProducts/>}/>
        <Route path='/footwear/men/sandals' element={<SandalsMenFootwear/>}/>
        <Route path='/footwear/men/sandals/fproducts' element={<SandalsMenFootwearProducts/>}/>
        <Route path='/footwear/men/sandals/sports' element={<SportsSandalsMenFootwearProducts/>}/>
        <Route path='/footwear/men/sandals/flat' element={<FlatSandalsMenFootwearProducts/>}/>

        <Route path='/footwear/women' element={<WomenFootwear/>}/>
        <Route path='/footwear/women/fproducts' element={<WomenFootwearProducts/>}/>
        <Route path='/footwear/women/heels' element={<HeelsWomenFootwear/>}/>
        <Route path='/footwear/women/heels/fproducts' element={<HeelsWomenFootwearProducts/>}/>
        <Route path='/footwear/women/heels/party' element={<PartyHeelsWomenFootwearProducts/>}/>
        <Route path='/footwear/women/heels/casual' element={<CasualHeelsWomenFootwearProducts/>}/>
        <Route path='/footwear/women/flats' element={<FlatsWomenFootwear/>}/>
        <Route path='/footwear/women/flats/fproducts' element={<FlatsWomenFootwearProducts/>}/>
        <Route path='/footwear/women/flats/ballerina' element={<BallerinaFlatWomenFootwearProducts/>}/>
        <Route path='/footwear/women/flats/ethnic' element={<EthnicFlatWomenFootwearProducts/>}/>

        <Route path='/footwear/kids' element={<KidsFootwear/>}/>
        <Route path='/footwear/kids/fproducts' element={<KidsFootwearProducts/>}/>
        <Route path='/footwear/kids/boy' element={<BoyKidsFootwear/>}/>
        <Route path='/footwear/kids/boy/fproducts' element={<BoyKidsFootwearProducts/>}/>
        <Route path='/footwear/kids/boy/shoes' element={<ShoesBoyKidsFootwearProducts/>}/>
        <Route path='/footwear/kids/boy/sandals' element={<SandalsBoyKidsFootwearProducts/>}/>
        <Route path='/footwear/kids/girl' element={<GirlKidsFootwear/>}/>
        <Route path='/footwear/kids/girl/fproducts' element={<GirlKidsFootwearProducts/>}/>
        <Route path='/footwear/kids/girl/shoes' element={<ShoesGirlKidsFootwearProducts/>}/>
        <Route path='/footwear/kids/girl/sandals' element={<SandalsGirlKidsFootwearProducts/>}/>

        {/* Beauty routes */}
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/beauty/bproducts' element={<BeautyProducts/>}/>
        <Route path='/beauty/makeup' element={<MakeupBeauty/>}/>
        <Route path='/beauty/makeup/bproducts' element={<MakeupBeautyProducts/>}/>
        <Route path='/beauty/makeup/face' element={<FaceMakeUpBeautyProducts/>}/> 
        <Route path='/beauty/makeup/lips' element={<LipsMakeupBeautyProducts/>}/> 

        <Route path='/beauty/skincare' element={<SkincareBeauty/>}/>
        <Route path='/beauty/skincare/bproducts' element={<SkincareBeautyProducts/>}/>
        <Route path='/beauty/skincare/sunscreen' element={<SunscreenSkincareBeautyProducts />} />
        <Route path='/beauty/skincare/moisturizer' element={<MoisturizerSkincareBeautyProducts />} />

        <Route path='/beauty/haircare' element={<HaircareBeauty/>}/>
        <Route path='/beauty/haircare/bproducts' element={<HaircareBeautyProducts/>}/>
        <Route path='/beauty/haircare/shampoo' element={<ShampooHaircareBeautyProducts/>}/>
        <Route path='/beauty/haircare/oil' element={<OilHaircareBeautyProducts/>}/>

        {/* Jewellery routes */}
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/jewellery/jproducts' element={<JewelleryProducts/>}/>
        <Route path='/jewellery/earrings' element={<EarringsJewellery/>}/>
        <Route path='/jewellery/earrings/jproducts' element={<EarringsJewelleryProducts/>}/>
        <Route path='/jewellery/earrings/stud' element={<StudEarringsJewelleryProducts/>}/>
        <Route path='/jewellery/earrings/jhumka' element={<JhumkaEarringsJewelleryProducts/>}/>

        <Route path='/jewellery/necklace' element={<NecklaceJewellery/>}/>
        <Route path='/jewellery/necklace/jproducts' element={<NecklaceJewelleryProducts/>}/>
        <Route path='/jewellery/necklace/chain' element={<ChainNecklaceJewelleryProducts/>}/>
        <Route path='/jewellery/necklace/choker' element={<ChokerNecklaceJewelleryProducts/>}/>

        <Route path='/jewellery/bangles' element={<BanglesJewellery/>}/>
        <Route path='/jewellery/bangles/jproducts' element={<BanglesJewelleryProducts/>}/>
        <Route path='/jewellery/bangles/traditional' element={<TraditionalBanglesJewelleryProducts/>}/>
        <Route path='/jewellery/bangles/model' element={<ModelBanglesJewelleryProducts/>}/>

      </Routes>
      
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
