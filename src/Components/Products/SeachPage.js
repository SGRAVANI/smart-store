import React, { useContext } from 'react'
import st from "./Products.module.css"
import ContextData from './Context/Context'
import { useState } from 'react'
import CardForProductPage from "./CardForProductPage"
import noresult from "./noresultfound.gif"
export default function SeachPage() {
    let con=useContext(ContextData);
    const itemArray=con.displayItems.filter((ele)=>{return( (ele.category.toLowerCase().trim().includes(con.search.toLowerCase().trim()))|| (ele.title.toLowerCase().trim().includes(con.search.toLowerCase().trim()))||(ele.category.toLowerCase().trim().startsWith(con.search[0].toLowerCase().trim())))})
    //console.log("value of search is :",con.search);
    console.log(itemArray,"type is",typeof itemArray);
   let pcardlist=itemArray.map((ele,index)=>{ return <CardForProductPage key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />});
   let c=itemArray.length;
   if(con.search==="")
   {
    console.log("empty search");
    pcardlist=[<div key="empty-inputparent"style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}><div  style={{color:"red",fontSize:"30px"}}  key="empty-input">Please Enter Valid String In Search Box</div></div>]
    c=0;
   }
   if(itemArray.length===0)
   {
    pcardlist=[<div key="parent-of-no-result">< img src={noresult} key="no-result" alt="No Result Found..."/></div>]
    c=0;
   }
  return (
    <div className={`${st.navSetting} container`}>
    {/* <p> searched data is : {con.search}</p> */}
    {c>0?<h1 style={{color:"rgb(148,145,151)",textTransform:"uppercase"}}className='text-center fw-bolder mb-5'>🔍Search Result</h1>:""}
    <div className='row'>
     {c>0? <div className='lead fw-bolder fs-4 text-center'>Total {c} items Found</div>:""}
    <div className='d-flex align-items-center justify-content-center flex-wrap'>
       {pcardlist} 
    </div>
    </div>
    </div>
  )
}
