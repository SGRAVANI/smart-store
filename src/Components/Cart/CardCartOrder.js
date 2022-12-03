import React, { useEffect } from 'react'
import ContextData from '../Products/Context/Context'
import { useContext } from 'react'

// import AlertAdd from '../Products/AlertAdd';
import { useState } from 'react';
export default function CardCartOrder(props) {
    let con=useContext(ContextData);
    let [confirmStatus,setConfirmStatus]=useState("pending") 
    useEffect(()=>{
   setTimeout(()=>{
    setConfirmStatus("Confirmed");
    //console.log(con.order,con.orderTotal)
   },[4000])
    },[])
    function displayOrderStatus()
    {
    if(confirmStatus=="pending")
    {
        return <p className='lead '>Order Status :<span className='text-danger fw-bold'>{confirmStatus}</span></p>
    }        
    else{
        return <p className='lead '>Order Status :<span className='text-success fw-bold'>{confirmStatus}</span></p>
    }
    }
  return (
  
    <div className='border border-secondary mt-2 px-md-2 py-1'>
    <div className='row'>
    <div  className='col-5'>
    
        <div >
          <img src={props.image} style={{objectFit:"contain",width:"110px",height:"150px"}} className="mx-3 "   />
        </div>
    
    </div>
    <div className='col-7'>
     <div>
      <p style={{fontWeight:"400"}}className='lead '>{props.title}</p>
      <p className='lead fw-bold'>Price: {props.price * props.count} $ <span className='lead'>( Per Unit Price: {props.price} $ ) </span></p>
      <p className='lead'>Quantity Selected: {props.count}</p>
      {/* <p className='lead '>Order Status :<span className='text-success'>{confirmStatus}</span></p> */}
      {displayOrderStatus()}
     </div>


    </div>

    </div>
    
    </div>

  )
}
