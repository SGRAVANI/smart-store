import React, { useEffect ,useMemo, useState} from 'react'

import sty from "./ProductCarousel.module.css";

import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import ProductCardSkeleton from './ProductCardSkeleton';
export default function ProductCarouselSkeleton() {

  return (
    <div>
    <div  className='text-center lead fw-bold fs-4'>BEST SELLING ELECTRONICS ITEMS</div>    
    <div className={sty.productCarousel}>
     
      {/* <div className={sty.viewAll}>View All</div> */}
      <div id={sty.centerProducts}>
      <div className={sty.productContainer} >
      
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         
      </div>
      </div>
       {/* {divdata}  */}

      </div>
      



      <div id="jew" className='text-center lead fw-bold fs-4'>LATEST IN JEWELLERY</div>    
    <div  className={sty.productCar2}>
      
      {/* <div className={sty.viewAll}>View All</div> */}
      <div id={sty.centerProducts}>
      <div className={sty.productContainer} >
        
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>

      </div>
       {/* {divdata}  */}
       
      </div>
      </div>
      <div  className='text-center lead fw-bold fs-4'>BEST SELLING IN CLOTHING</div>    
    <div id="cloth" >
     
      {/* <div className={sty.viewAll}>View All</div> */}
      <div className={sty.productContainer} >
        
         
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
         <ProductCardSkeleton/>
      </div>
       
      </div>
      

       {/* skeleton starts from here */}
       


       

      </div>      
      
  )
}
