import React, { useEffect, useState } from 'react'
import st from "./Products.module.css";
import {createContext,useContext} from"react";
import ContextData from './Context/Context';
import CardForProductPage from './CardForProductPage';
import "./Products.css"
import Cat from "./categories.png";
// import { X } from '../../App';
export default function Products() {
  let data=useContext(ContextData);
 // console.log(data)
 const [state1,setState]=useState(new Set());
 const [statedata,setStatedata]=useState("");
 const [pdata,setPdata]=useState([]);
  //const 
 //  console.log(data.displayItems);
  let pd="";
  let s=new Set();
  function handleCheckBox(e)
  {  
    if(e.target.checked)
    {
    
    setState((prev)=>{
     let x= [...prev,e.target.value];
     return new Set(x);
    })
      
    }
    else{
      setState((prev)=>{
        prev.delete(e.target.value);
        let x=[...prev];
       // console.log(x)
     return new Set(x);
      })
  
        
  }
}
  
  let a=new Array(...state1);
  console.log("data type :",typeof a);
  let finald;
  
let final=[];
let c;
  for(let i of a)
  { console.log(i);
  finald=data.displayItems.filter((ele)=>ele.category===i)
  //console.log("final data is : ",finald)
   final=[...finald,...final]
  console.log("final elements are",final)
  
  c=final.length;
  }
  useEffect(()=>{//console.log(state1);
  
  //console.log(finald);
  console.log(final)
  setPdata(final);
  
   },[state1]);
   //console.log("state pdata",pdata)
  
   function handleChange(e)
   {
    
    if(e.target.value==="low"||e.target.value==="high")
    { console.log(e.target.value)
      setStatedata(e.target.value)
    }
    else {
      setStatedata("");
    }
   }

   console.log("state data is :",statedata,"type is ",typeof statedata)
    
  let pcardlist;
  if(statedata)
  {
    if(statedata==="high")
    {
      final.sort((a,b)=>{
      
      
      return Number(b.price)-Number(a.price)})
      // console.log("sorted array is :",final)
    }
    if(statedata==="low")
    {
        final.sort((a,b)=>{
      
        return  Number(a.price)-Number(b.price)})
        //console.log("sorted array is :",final)
    }
  }
  
 

    if(final.length===0 )
    {
      c=data.displayItems.length;
    if(statedata==="")
    {
    pcardlist=data.displayItems.map((ele,index)=>{ return <CardForProductPage key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />});
    c=data.displayItems.length;
    }
    else if(statedata==="low")
    {
     let p=[...data.displayItems];
     p.sort((a,b)=>Number(a.price)-Number(b.price))

     pcardlist=p.map((ele,index)=>{ return <CardForProductPage key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />}); 
    }
    else if(final.length===0 && statedata==="high")
    {
      let p=[...data.displayItems];
      p.sort((a,b)=>Number(b.price)-Number(a.price))
 
      pcardlist=p.map((ele,index)=>{ return <CardForProductPage key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />});
    }
    
  
    
  }

  else{
    pcardlist=final.map((ele,index)=>{ return <CardForProductPage key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />});
    c=pcardlist.length;
  }  
   

   
  return (
    <div  className={`${st.navSetting} container-xxl` } >
    
    <div className='row' 
    //  style={{backgroundColor:"rgb(240,240,240)"}}
     >
         {/* <div style={{backgroundColor:"rgb(240,240,240)"}} > */}
         
        <div  style={{paddingTop:"100px",position:"sticky",top:"1px",height:"100vh",backgroundColor:"rgb(255,255,255)",border:"1px solid rgb(227,230,234)"}} className= "col-5 col-sm-4 col-md-3 col-lg-2 d-flex align-items-left justify-context-center gap-3 flex-column" >
          <div className='text-center category-ani'>
            <img src={Cat} width="80px" height="80"  />
          </div>
          <div  className='lead fw-bold'><span className='add1 pb-2'>CATEGORY FILTER</span></div>
{/*                       
            <div><button className='btn btn-secondary btn-sm me-3 px-2'>Reset</button><button className='btn btn-success btn-sm px-2'>Apply</button></div>
             */}
          
           <div className="form-check">
      
        <label className="form-check-label" htmlFor="electronics">
        Electornics
      </label>
      <input className="form-check-input" type="checkbox" value="electronics"      id="electronics" onClick={handleCheckBox}/>
     <br></br>
      <label className="form-check-label" htmlFor="jewellery">
        Jewellery
      </label>
      <input className="form-check-input" type="checkbox" value="jewelery"  id="jewellery" onClick={handleCheckBox}/>
      <br></br>
      
      <label className="form-check-label" htmlFor="mencloth">
        Men's Wear
      </label>
      
      <input className="form-check-input" type="checkbox" value="men's clothing"      id="mencloth" onClick={handleCheckBox}/>
      <br></br>
      <label className="form-check-label" htmlFor="womencloth">
        Women's Wear
      </label>
      <input className="form-check-input" type="checkbox" value="women's clothing"      id="womencloth"onClick={handleCheckBox}/>
    </div>
           <div className='lead fs-5 fw-bold '> <span className='add2 pb-2'>SORT BY PRICE</span> </div>
      
            <select className="form-select form-select-sm mb-3 " aria-label=".form-select-lg " onChange={handleChange}>
  <option  value="none" >Select Price Range  </option>
  <option value="low">Low To High</option>
  <option value="high">High To Low</option>
  
</select> 

          
        </div>
        {/* </div> */}
        
        <div  className='col-6 col-sm-8 col-md-9 col-lg-10 border '>
        
      <div className='fs-6 fw-bold mt-2 px-3'   style={{textAlign:"right"}}>Total {c} Items Found</div>
    
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
            {pcardlist}
            {/* {pd} */}
            </div>
        </div>
        
    </div>
    
    </div>
    
  )
}
