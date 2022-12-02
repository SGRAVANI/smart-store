import React, { useContext } from 'react'
import "./index.css"
import {Link,NavLink} from "react-router-dom"
import st from "./NavBar.module.css";
import DataInContext from './Products/Context/DataInContext';
import {useNavigate} from "react-router-dom";
import ContextData from './Products/Context/Context';
import CartNotification from './Cart/CartNotification';
import { useUserAuth } from './Products/Context/ContextAPI';
import "./NavBar.css";
function NavBar() {
    let navigate=useNavigate();
    let con=useContext(ContextData);
    let {user,LogOut,signupstatus} = useUserAuth();
    console.log(signupstatus);
    let username=""
    
    if(user && signupstatus==false )
    {
    
    console.log("from navbar:",user);
    console.log("from navbar:",user.email);
    
}
 async function handleLogOut()
{
    try{
        await LogOut()
        navigate("/")
    }
    catch(e){
        console.log(e.message)
    }

}
 function handleLogin()
{
navigate("/login")
} 
function handleSubmit(e)
 {
e.preventDefault();
console.log("submitted");
let a=document.forms[0].elements;
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
//console.log(a[0].value);
con.getSearchData(a[0].value);
console.log("after ",con.search);
navigate("/search")
 }


    return (

<section  id="header">
    {/* <!-- navbar-header -->
    <!-- <div classNameName="row justify-content-center mt-1"> --> */}
    <div >
    
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light ">
              <div className="container-xxl" style={{paddingTop:"0",paddingBottom:"0"}}>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation" style={{
                    paddingTop:" 0",
                    paddingBottom: "0px",
                    borderTopWidth: "0px",
                }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand" to="/" style={{paddingTop:"0",
    
    paddingBottom: "0"
}}><img className="img-fluid" src="../e-com-assets/logo-1.png"/></NavLink>


                
              
                
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/products" aria-current="page">Products 
                            {/* <span className="visually-hidden">(current)</span> */}
                            </NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink className="nav-link " to="aboutus" aria-current="page">About Us 
                            {/* <span className="visually-hidden">(current)</span> */}
                            </NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink className="nav-link " to="contact" aria-current="page">Contact Us 
                            {/* <span className="visually-hidden">(current)</span> */}
                            </NavLink>
                        </li> 
                        {/* <!-- <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                        </li> --> */}
                       {(signupstatus || !user )?
                       <li className=" navbar-brand nav-item">
                            <a className="nav-link btn btn-primary text-white d-inline-block px-3 px-m-2 px-lg-3 btn-sm mx-md-1"  aria-current="page"onClick={handleLogin} >Login </a>  
                        </li> 
                        : 
                        <li className=" navbar-brand nav-item">
                            <a className="nav-link btn btn-primary text-white d-inline-block px-3 px-m-2 px-lg-3 btn-sm mx-md-1"  aria-current="page"onClick={handleLogOut} >Logout </a>
                        </li>}
                        
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                
                                <NavLink className="dropdown-item" to="products" style={({isActive})=>isActive?{color:"red"}:{color:""}}>Products</NavLink>
                                <a className="dropdown-item" href="#">Electronics</a>
                                <a className="dropdown-item" href="#">jewellery</a>
                                
                            </div>
                        </li>
                       */}
                        
                    </ul>
                    {/* <!-- <form className="d-flex my-2 my-lg-0"> --> */}
                        <form className="d-flex my-2 my-lg-0" onSubmit={handleSubmit} >
                        <input className="form-control me-2  " type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                    </form>
                   
                </div>
                <div className="d-flex justify-content-end " >
                    <NavLink className="nav-link ms-md-2 " to="cart">
                        <div style={{width:"100px"}} className="d-flex align-items-center justify-content-center"><div style={{position:"relative"}}><i className="fa fa-shopping-cart" style={{fontSize:"36px",marginRight:"5px"}}></i>
                        
                        {
                        // <div style={{position:"absolute",top:"-16px",left:"10px",backgroundColor:"rgb(255,62,108)",color:"white",borderRadius:"50%",width:"30px",height:"30px",verticalAlign:"center",fontWeight:"bold"}}><span>{con.total}</span></div>
                      con.total>0 && user? <CartNotification/>:""
                        }</div><div></div>Cart</div></NavLink>
                </div>
               
                {user && signupstatus==false?
                <div >
                    <span className='user-setting  fs-5 '>Hello </span> <span>
                    { user.email?user.email.split("@")[0]:""}
                    </span>
                </div>
                :"" }
               
                    
                </div>
                
        
        </nav>
        
    {/* <!-- </div> --> */}
    </div>
    </section>



  )
}
export default NavBar;