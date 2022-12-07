import React from 'react'
import Hero from '../Hero/Hero'
import ProductsCarousel from '../Products/ProductsCarousel'
import HeroSkeleton from '../Hero/HeroSkeleton'
import SliderTest from '../Hero/SliderTest'
import { useState,useEffect } from 'react'
import s from "../Products/Products.module.css"
export default function Home() {
  let[f,setF]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
    setF(false)
    },1500)
  })
  function loadHero()
  {
    if(f)
    {
      return <HeroSkeleton/>
    }
    else{
      return  <SliderTest />
      // <Hero/>
    }
  }
  return (
    <div className={s.navSetting}>
         {loadHero()}
        {/* <Hero/> */}
      <ProductsCarousel/>
    </div>
  )
}
