import React from 'react'
import st from "./ProductCard.module.css";
import bg from "./peakpx.jpg";
import { Navigate, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
export default function ProductCardSkeleton(props) {
  let navigate=useNavigate();
 
  return (
    <SkeletonTheme baseColor='#F87594' highlightColor='#E6E6E3'>
    <div className={st.card}  >
   
     <div className='card' >
    <div className='text-center '> 
    {/* <img src={props.image} style={{ Width:"180px",
     height:"180px",overflow:"hidden",zIndex:"1"}} className={`img-fluid mb-3 ${st.imageMove}`}/> */}
     <Skeleton circle={true} width={180} height={180}/>
     <Skeleton width={250}height={60}/>
     {/* <div > */}
        <div className=' mb-1' ><Skeleton  width={250} height={35} /> </div>
     {/* </div>
     <div > */}
       <div className=' mb-1' ><Skeleton  width={250} height={35} /> </div>
     {/* </div>
    <div> */}
    <div className=' mb-1' ><Skeleton  width={250} height={35} /> </div>
    {/* </div> */}
    </div> 
     </div>
     </div>
     </SkeletonTheme>
  )
}
