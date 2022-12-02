import React from 'react'
import ContextData from '../Products/Context/Context'
import { useContext,useState } from 'react'
import CardCart from './CardCart';
import EmptyCart from './EmptyCart';
import "./Cart.css"
import s from "./EmptyCart.module.css"

export default function Cart() {
//let [cartadd,setCartadd]=useState({});
//let [cartsub,setCartsub]=useState({});
let [cartItems,setCartItems]=useState([])
 let cont=useContext(ContextData);
 let flag=cont.total;
 //let data=cont.displayItems;
 let items=[];
// let x={}
 for (let i of cont.cart)
 {
 let item=cont.displayItems.find((ele)=>{return ele.id===i.id})
 //console.log("cart item detail :",item,typeof item)
//  x=Object.assign(x,item);
//  console.log(x);
//  x.count=i.count;
//  console.log("x after adding count",x)
 //x.count=i.count;
 //console.log("value of item after adding count is ",item);
 let x={count:i.count};
 Object.assign(x,item)
// x=[...item,...y]
console.log(x)
  items=[...items,x];
 }
 //setCartItems(items);
 console.log("items in cart are:",items); 
 console.log("cart :",cont.cart)
//  let list=cont.cart.map((ele)=><p key={ele.id}>item id:{ele.id} item count: {ele.count}</p>) 
 let list= items.map((ele,index)=><CardCart key={index} id={ele.id} count={ele.count} title={ele.title} category={ele.category} price={ele.price} image={ele.image}/>)
 console.log("list is",list);
 function mrpCount()
 { let totalmrp=0;
  for(let  i of items)
  {
    totalmrp+=(i.price*i.count);
    console.log("total mrp is:",totalmrp)
  }
  return Number(totalmrp).toFixed(2);
 }
  return (
    
   <div>
    { (cont.total==0)?<EmptyCart/>: 
    <div style={{paddingTop:"80px"}}>
   
   <div className='container-xxl'>
   <div className='lead'>Total Items : {cont.total}</div>

    <div className='row'>
        <div className='col-md-7 '>
    
          {list} 
  

      </div>
    <div className='col-md-5'>
       <div className=' mx-5 px-5 my-5 my-md-1  text-left ' >
        <div className='lead fw-bold    '>PRICE DETAILS  <span  style={{fontSize:"18px"}}>({cont.total} Items)</span></div>
       <div className='d-flex justify-content-between  align-items-center '>

        <div className='lead mt-2'>Total MRP: </div>
        <div className='lead mt-2'>{mrpCount()} $</div>
        </div>
        <div className='d-flex justify-content-between  align-items-center '>
        <div className='lead'>Convinience Fee:</div>
        <div className='lead'>0</div>
        </div>
         <div> <hr></hr></div>
         <div className='d-flex justify-content-between  align-items-center '>
        <div className='lead fw-bold'>Total Amount:</div>
        <div className='lead'>{mrpCount()} $</div>
        </div>
        <div className='my-4'><button   className={`${s.btN} ${s.btnStyle} ${s.btnLg}`}  >PLACE ORDER</button> </div>
        </div>
    </div>
    </div>
   </div>

    </div>
}
        </div>
  
  )
}
