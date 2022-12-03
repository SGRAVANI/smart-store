import React from 'react'
import OrderNotFound from"./order-not-found.png";
import "./EmptyOrder.css"
import { useNavigate } from 'react-router-dom';
export default function EmptyOrder() {
  let navigate=useNavigate();
  function handleExplore()
  {
  navigate("/products")
  }
  return (
    <div className='outerDivSetting'>
       <div style={{position:"relative",height:"80vh" }}>
      <img  className="OrderNotFoundSetting img-fluid"src={OrderNotFound} style={{boxShadow:"0 0 30px 5px gray"}}/>
       <h1 className='lead fw-bold text-center heading-set'>ORDER NOT FOUND</h1>
       <div className='lead text-center text-set-empty-order'>Looks like you haven't made your order yet</div>
       <div className='text-center'>
       <button className='btn btn-primary empty-button-setting ' onClick={handleExplore}>Explore Products</button>
       </div>
             </div> 
      
    </div>
  )
}
