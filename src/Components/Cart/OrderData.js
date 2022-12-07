import React, { useEffect } from 'react'
import ContextData from '../Products/Context/Context'
import { useContext,useState } from 'react'
import CardCartOrder from './CardCartOrder';
import EmptyCart from './EmptyCart';
import AlertAdd from '../Products/AlertAdd';
import EmptyOrder from './EmptyOrder';
import "./Cart.css"
import s from "./EmptyCart.module.css"
import DeleteConfirm from "./DeleteConfirm"
import { useNavigate } from 'react-router-dom';
import st from "../Products/Products.module.css"
export default function OrderData() {
//let [cartadd,setCartadd]=useState({});
//let [cartsub,setCartsub]=useState({});

let [cartItems,setCartItems]=useState([])
const [modalShow, setModalShow] = useState(false);
 let cont=useContext(ContextData);
 let flag=cont.orderTotal;
 let date=new Date();
 //let data=cont.displayItems;
 let items=[];
 useEffect(()=>{
  console.log("order details from orderDetail Page")
  console.log(cont.order,cont.orderTotal)
 },[])
// let x={}
 for (let i of cont.order)
 {
 let item=cont.displayItems.find((ele)=>{return ele.id===i.id})
 
 let x={count:i.count};
 Object.assign(x,item)
// x=[...item,...y]
console.log(x)
  items=[...items,x];
 }
 //setCartItems(items);
 console.log("items in cart are:",items); 
 console.log("cart :",cont.order)
//  let list=cont.cart.map((ele)=><p key={ele.id}>item id:{ele.id} item count: {ele.count}</p>) 
 let list= items.map((ele,index)=><CardCartOrder key={index} id={ele.id} count={ele.count} title={ele.title} category={ele.category} price={ele.price} image={ele.image}/>)
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
 function handleCancel()
 {
  setModalShow(true);

 }
  return (
    
   <div >
{cont.order.length==0?<EmptyOrder/>:   
    <div className={st.navSetting}>
    <DeleteConfirm
  show={modalShow}
  onHide={() => setModalShow(false)} /> 
   <div className='container-xxl'>
    <AlertAdd data={true} message="Your Order has been placed Successfully!!!" variant="success" />
    <h1 style={{color:"rgba(0,0,0,0.7)"}}className='text-center lead fw-bold fs-2 py-md-3'>ORDER SUMMARY</h1>
   <div className='lead'>Total Items : {cont.orderTotal}</div>

    <div className='row'>
        <div className='col-md-7 '>
    
          {list} 
  

      </div>
    <div className='col-md-5'>
       <div className=' mx-3  my-5 px-md-3 my-md-1 mx-sm-3 px-sm-5  text-left ' >
        <div className='lead fw-bold    '>PRICE DETAILS  <span  style={{fontSize:"18px"}}>({cont.orderTotal} Items)</span></div>
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
        <div className='d-flex justify-content-between  align-items-center '>
        <div className='lead '>Payment Mode:</div>
        <div className='lead'>Cash On Delivery</div>
  
        </div>
        <div className='d-flex justify-content-between  align-items-center '>
        <div className='lead '>Date of Order:</div>
        <div className='lead'>{date.toDateString()}</div>
  
        </div>
        
        <div className='my-4'><button   className={`${s.btN} ${s.btnStyle} ${s.btnLg}`} onClick={handleCancel} >CANCEL ORDER</button> </div>
        </div>
    </div>
    </div>
   </div>

    </div>
}
        </div>
  
  )
}
