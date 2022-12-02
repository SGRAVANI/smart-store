import React from 'react'
import ContextData from '../Products/Context/Context';
import { useContext } from 'react';
export default function CartNotification() {
    let co=useContext(ContextData);

  return (
    <div className='text-center' style={{position:"absolute",top:"-16px",left:"10px",backgroundColor:"rgb(255,62,108)",color:"white",borderRadius:"50%",width:"30px",height:"30px",verticalAlign:"center",fontWeight:"bold"}}><span>{co.total}</span></div>
  )
}
