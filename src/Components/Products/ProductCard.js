import React from 'react'
import st from "./ProductCard.module.css";
import bg from "./peakpx.jpg";
import { Navigate, useNavigate } from 'react-router-dom';
export default function ProductCard(props) {
  let navigate=useNavigate();
  function handleClick()
  {
    console.log(props.id);
    navigate(`productdetail/$${props.id}`);
  }
  function titleSetting()
  {
    if(props.title.length>52)
    {
      return props.title.slice(0,52)+"..."
    }
    else{
      return props.title;
    }
  }
  return (
    <div className={st.card} >
   {/* style={{backgroundImage:`url(${bg})` }}  > */}
        {/* My Card Number : {props.cardno}  */}
    <div className='card' style={{border:"none"}}>
    <div className='card-body d-flex align-items-center justify-content-center flex-column '>
    <img src={props.image} style={{ Width:"180px",
     height:"180px",overflow:"hidden",zIndex:"1"}} className={`img-fluid mb-3 ${st.imageMove}`}/>
     <div style={{height:"60px"}} className="lead fs-6 fw-bold text-center" >{titleSetting()}</div>
     <div >
        <div className='fw-bold mb-1' >Price: {props.price}$ </div>
     </div>
     <div >
        <div >{props.rating.rate} <i style={{color:"rgb(49,181,159)"}} className="fa-solid fa-star me-1 mb-3"></i> ({props.rating.count})</div>
     </div>
    <div>
    <button className={`${st.btN} ${st.btnStyle} ${st.btnLg}`}  onClick={handleClick}> BUY NOW  
    <i className="fa-solid fa-cart-shopping ms-2"></i>
    
    </button>
    </div>
    </div>
    </div>
    </div>
  )
}
