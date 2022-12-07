import React, { useContext ,useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ContextData from './Context/Context';
import { useUserAuth } from './Context/ContextAPI';
import "./ProductDetails.css";
import AlertDismissible from './AlertDismissible';
import AlertAdd from "./AlertAdd";
export default function ProductDetail() {
    let cont=useContext(ContextData);
    let navigate=useNavigate();
    let {user} = useUserAuth();
    console.log("context",cont.displayItems);
    let [p,setP]=useState(cont.displayItems);
    let [userStatus,setUserStatus]=useState(false);
    let [setAlert,setAlertOnClick]=useState(false);
    let [propsdata,setPropsData]=useState(false);
    let[alertsToAddItems,setAlertsToAddItems]=useState({show:false,propsdata:false});
    console.log("new p is",p)
    //setP(cont.displayItems);
    const objId=useParams();
     console.log("Id from Product Detail Page",objId.Id,typeof objId.Id);
     let x=Number(objId.Id);
     //console.log("value of x is ",x);
    let targetItem=p.find((ele)=>{
        return ele.id===x
    })
    console.log("product detail ",targetItem);
    useEffect(()=>{
     setUserStatus(user);
     console.log(userStatus)
    },[user])
    function handleAdd()
    {   if(!user)
        {
        console.log("please Login First");
        setAlertOnClick(true);
        setPropsData(!propsdata);
        }
        else {
        let item={id:targetItem.id,count:1}
        console.log("Item is ",item);
        cont.add(item);
        setAlertsToAddItems({show:true,propsdata:!alertsToAddItems.propsdata});
        } 
    }
    function handleCart()
    {
        navigate("/cart",{replace:true})
    }
    //console.log("context in product detail page:",cont.displayItems);
  return (
    <div style={{marginTop:"100px"}}>
       
        <div className="container">
        <div className="lead fw-bold px-3"> Category :<span className="product-category text-left"> {(targetItem.category)}</span></div>
            <div className="row justify-content-center align-items-start  g-2">
                <div className="  col-md-5 col-lg-6 text-left-md py-md-5">
                
                    <img style={{objectFit:"contain"}} src={targetItem.image} height="600" className='imagehover img-fluid'/>
                </div>
                <div className=" col-md-7 col-lg-6">
                <h1 className='lead fw-bold'> {targetItem.title}</h1>
                <br></br>
               <div className='rating-section'> {targetItem.rating.rate} <i style={{color:"rgb(49,181,159)"}} className="fa-solid fa-star me-1"></i><div  style={{width:"3px",height:"15px",backgroundColor:"rgb(212,213,218)",display:"inline-block",position:"relative",top:"3px"}}></div> {targetItem.rating.count} Ratings</div>
                <hr></hr>
                <h1 className='lead fw-bold'> ${targetItem.price} MRP</h1>
                <h6 style={{color:"rgb(49,181,159)"}} className='lead fw-bold'>inclusive of all taxes</h6>
                <br></br>
                <div>
              {setAlert? <AlertDismissible data={propsdata} />:""}
              {alertsToAddItems.show? <AlertAdd data={alertsToAddItems.propsdata} variant="success" message="Item is Added to cart!" />:""}
              <button className=" btN btnStyle btnLg fw-bold margin-setting" onClick={handleAdd}  > ADD TO BAG  <i className="fa-solid fa-bag-shopping ms-2"></i></button>
              <button className="btn btn-primary btn-md   fw-bold" onClick={handleCart} > GO TO CART   <i className="fa-solid fa-cart-shopping ms-1"></i> </button>
              </div>
              <hr></hr>
              <div className="lead fw-bold">PRODUCT DETAILS <i className="fa-regular fa-rectangle-list"></i></div>
              <div className='py-2 fs-6 '>{targetItem.description}</div>
              <hr></hr>
              <div className="lead fw-bold mb-2">POLICY<i className="fa-solid fa-arrow-right-arrow-left ms-2"></i></div>
              <div className='fs-6'> 100% Original Products</div>
              <div className='fs-6'>Cash On Delivery/Pay On Delivery</div>
              <div className='fs-6'>Easy 30 Days Returns & Exchanges</div>



                </div>
                {/* <div class="col">Column</div> */}
            </div>
        </div>
        
        
        
        
        </div>
  )
}
