import React from 'react'
import st from "./CardForProductPage.module.css";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import {Navigate} from "react-router-dom";
export default function CardForProductPage(props) {
  let navigate=useNavigate();
  function handleClick()
  {
    console.log(props.id);
    //navigate(`productdetail/$${props.id}`);
    navigate(`../productdetail/$${props.id}`,{replace:true})
    // return <Navigate replace to={`productdetail/$${props.id}`} />
  }
 
 
  let l=props.title;
  let newTitle="";
  if(l.length>=30)
  {
   newTitle=l.slice(0,27);
   newTitle+="...";
  }
  else{
   newTitle=l;
  }

  
    return (

    <div className={st.card} style={{marginBottom:"10px"}} >
   {/* style={{backgroundImage:`url(${bg})` }}  > */}
        {/* My Card Number : {props.cardno}  */}
    <div className='card' style={{border:"none"}}>
    <div className='card-body d-flex align-items-center justify-content-center flex-column '>
    <img src={props.image} style={{ Width:"90px",
     height:"110px",overflow:"hidden",zIndex:"1"}} className={`img-fluid mb-3 ${st.imageMove}`}/>
     <div style={{height:"48px",fontWeight:"600"}} className="text-center mb-1 " >{newTitle}</div>
     <div >
        <div className="fw-bold mb-1" >Price: {props.price}$ </div>
     </div>
     <div >
        <div className='mb-2'>{props.rating.rate} <i style={{color:"rgb(49,181,159)"}} className="fa-solid fa-star me-1"></i> ({props.rating.count})</div>
     </div>
    <div>
    <button className={`${st.btN} ${st.btnStyle} ${st.btnLg}`} onClick={handleClick}> BUY NOW <i className="fa-solid fa-cart-shopping ms-1"></i></button>
    </div>
    </div>
    </div>
    </div>
  )
}
