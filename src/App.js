import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import Products from './Components/Products/Products.js';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Login from './Components/login/Login';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUS/AboutUs';
import DataInContext from './Components/Products/Context/DataInContext';
import ProductsCarousel from './Components/Products/ProductsCarousel';
import SeachPage from './Components/Products/SeachPage';
import ProductDetail from './Components/Products/ProductDetail';
import Cart from './Components/Cart/Cart';
import CardCart from './Components/Cart/CardCart';
import {useEffect, useState} from "react";
import Skeleton from 'react-loading-skeleton';
import {SkeletonTheme} from 'react-loading-skeleton';
import ProductsCarouselSkeleton from './Components/Products/ProductCarouselSkeleton';
import HeroSkeleton from './Components/Hero/HeroSkeleton';
import SignUp from './Components/login/SignUp';
import SliderTest from './Components/Hero/SliderTest';
function App() {
 return (
   

  
   <BrowserRouter basename={process.env.PUBLIC_URL}>
   
  
    <div className="App">
     
      
      <NavBar/>
     
      
    </div>
    <Routes>
      <Route  path="/" exact  element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/plist" element={<ProductsCarousel/>} />
      <Route path="/search" element={<SeachPage/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/productdetail/$:Id" element={<ProductDetail/>}/>
      {/* <Route path="electronics" element={} />
      <Route path="clothing" element={} /> */}

         
    </Routes>
 
    </BrowserRouter>
      
   
)}

export default App;
