import React from 'react'
import bag from "./bag.svg"
import st from './EmptyCart.module.css'
import { useNavigate } from 'react-router-dom'
export default function EmptyCart() {
  let navigate=useNavigate();
  function gotoProducts()
  {
    navigate("/products",{replace:true});
  }
    return (

    <div style={{paddingTop:"75px"}}>
        <div className='container-lg p-5'>
         <div className='text-center'>
          <img src={bag} className="p-4"/>
          <div style={{fontWeight: "600",lineHeight: "1.3",
    marginBottom:" .5rem",
    marginTop: "0"}}
     className='fs-2 lead'>Your shopping cart is empty</div>  
     <div className='m-2 p-2 text-secondary lead'>Looks like you have not added anything to your cart. <br></br>Go ahead & explore our best products.</div>
      <div className='p-3 m-3'>
        <button style={{textTransform:"uppercase"}}className={`${st.btN} ${st.btnStyle} ${st.btnLg}`} onClick={gotoProducts}>Explore Products</button>
      </div>
         </div>
        </div>
    </div>
  )
}
