import ContextData from "./Context";
import { useState,useEffect, useMemo } from "react";
import React from 'react'
import { createPath } from "react-router-dom";
// import DeleteConfirm from "../../Cart/DeleteConfirm";


export default function DataInContext(props) {
    //let s1=[];
   
       const [search,setSearch]=useState("");
    //  const search="";
      const[cart,setCart]=useState([]);
      const[intermediateResult,setIntermediateResult]=useState([])
      const[total,setTotal]=useState(0);
      const[order,setOrder]=useState([]);
      const[orderTotal,setOrderTotal]=useState(0);
      let s2=[];
      const [displayItems,setDisplayItems]=useState(s2);
      let data,fetchedData;
         async function getData()
       {
         data=await fetch("https://fakestoreapi.com/products");
        let iArray=await data.json();
        setDisplayItems((prev)=>{
        let d= [...prev,...iArray];
        let s=new Set(d);
//        console.log(s.id);
         return [...s]
         });
      }
      useEffect(()=>{
       getData();
      },[])
     
      function add(item)
      {
        console.log("reached here",item);
        let id=item.id
       
        if(cart.length==0)
        {
          setCart([item]);
  //        console.log("reached here...",cart)
        }
      
        else if(cart.length>=1)
        {  
          let y=[];
          console.log("reached at duplicate item",item);
          y=cart.filter((ele)=>ele.id===id);
    //      console.log("y is:",y)
            if(y.length>=1)
            {
             setCart((prev)=>{
              //let temp=prev;
              //console.log(temp,typeof temp)
               //console.log(temp[0].id,id)
               for (let i of prev)
               {
              if(i.id===id)
               {  
      //          console.log("id of previous is :",i.id);
                i.count+=1;
        //        console.log("new count is :",i.count)
               }}
          return [...prev]

            });
            }
        else{
        setCart((prev)=>{return [...prev,item]})
        }
    }

    
  }

  function remove(item)
  {
   // console.log("reached here",item);
    let id=item.id
   
    if(cart.length==0)
    {
     // setCart([item]);
     alert("Sorry No item's in Cart to Remove")
     //  console.log("reached here...",cart)
    }
  
    else if(cart.length>=1)
    {  
      let y=[];
     // console.log("reached at duplicate item",item);
      y=cart.filter((ele)=>ele.id===id);
      console.log("y is:",y)
        if(y.length>=1)
        {
         setCart((prev)=>{
          //let temp=prev;
          //console.log(temp,typeof temp)
           //console.log(temp[0].id,id)
           for (let i of prev)
           {
          if(i.id===id)
           {  
       //     console.log("id of previous is :",i.id);
            if(i.count>1)
            {
            i.count-=1;
            }
            else if(i.count===1)
            {
         //     console.log("reached at last item");
              let input=window.confirm(`Only 1 Quntity of This Item Left In your Cart. Do You Want to Remove it?`);
           //   console.log("input is :",input);
              if(input===true)
              {
                i.count-=1;
                // setCart((prev)=>{
                  
                // })
                // let newCart=cart.filter((ele)=>ele.id!==id)
                // setCart(newCart);
                // console.log("new cart is:",cart);
                prev=prev.filter((ele)=>ele.id!==i.id)  
              }
            }
            //console.log("new count is :",i.count)
           }} 
      return [...prev]

        });
       
        }
    // else{
    // setCart((prev)=>{return [...prev,item]})
    // }
}
//console.log("final cart after remove is :",cart);

}

function updateCartOrder()
{
 
  setOrder((prev)=>{
    //return [...prev,...cart]
    let dp;
    let index;
    let a=[];
    for(let i of cart)
    {
    if(prev.length==0)
    {
      prev=[i];
    }
    else{
    dp=prev.find((ele)=>ele.id==i.id);
    let index=prev.findIndex((ele)=>ele.id==i.id);
    if(dp)
    {
    let x={id:dp.id,count:dp.count+i.count};
   // prev=[...prev,x];
   prev[index]=x;
    }
    else{
      prev=[...prev,i];
    }
    dp=undefined;
    }
    }
    return [...prev];
  })
  console.log("order is : ",order)
  
  setOrderTotal((prev)=>{
    return prev+total;}
    )
  setCart([])
  setTotal(0)
}

function cancelOrder()
{   console.log("cancel order executed and order items are:",order)
   setCart((prev)=>
    [...prev,...order]
   )
  
  setTotal((prev)=>{
    return prev+orderTotal;}
    )
    setOrder([]);
    setOrderTotal(0);
}




  useEffect(()=>{
    let sum=0;
    if(cart.length>0)
    {
    for(let i of cart)
    {
      sum=sum+i.count;
    }
    
    }
    setTotal(sum);
    console.log("Total in cart is ",sum)
      
  },[cart]);
  
      // function remove()
      // {
    
      // }
      function getSearchData(inputd)
     {
      setSearch(inputd);
      //console.log(data);
     } 
//     console.log("after addition cart is:",cart);
      //console.log(displayItems);
        return (
        <ContextData.Provider value={{cart,displayItems,add,remove,search,getSearchData,total,order,orderTotal,updateCartOrder,cancelOrder}}>
        {props.children}
        </ContextData.Provider>);
}
