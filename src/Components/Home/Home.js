import React from 'react'
import Hero from '../Hero/Hero'
import ProductsCarousel from '../Products/ProductsCarousel'
import HeroSkeleton from '../Hero/HeroSkeleton'
import SliderTest from '../Hero/SliderTest'
import { useState,useEffect } from 'react'
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
    <div style={{paddingTop:"70px"}}>
         {loadHero()}
        {/* <Hero/> */}
      <ProductsCarousel/>
    </div>
  )
}
