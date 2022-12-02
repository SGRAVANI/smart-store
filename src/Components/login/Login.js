import React, { useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import { useUserAuth } from '../Products/Context/ContextAPI';
import peakpx from "./peakpx.jpg"
//import Google from "../../../public/e-com-assets/google.png"
import "./Login.css"
import SignUpAlert from './SignUpAlert';
//  import GoogleButton from "react-google-button";
//  import 'bootstrap/dist/css/bootstrap.min.css';
import LogoLogin from "./logo-login.png";
import ShoppingLogin from "./shopping-login.png";
import GooglBt from "./google.png";
export default function Login() {
    const[email,setEmail]=useState("");
    const[pwd,setPwd]=useState("")
    const {LogIn,user,SignInWithGoogle,signupstatus}=useUserAuth();
    const [error,setError]=useState("");
    const navigate=useNavigate()
    useEffect(()=>{
      // if(signupstatus)
      // {
      //   console.log(signupstatus)
      // }
    if(user ) 
    {
      if(!signupstatus)
    {
    console.log(user.email);
    navigate("/")
    }    
  }
},[user])
    function handleEmail(e)
    {
     setEmail(e.target.value)
    }
    function handlePwd(e)
    {
   setPwd(e.target.value)
    }
    async function handleSubmit(e)
    {
        e.preventDefault();
        try{
         await LogIn(email,pwd)
         if(user)
          {
          console.log(user.email);
          navigate("/")
          }
        //  else{
        //     navigate("/login")
        //  }
        }
        catch(e){
         setError(e.message)
        }
    }
    // async function handleGoogleSignIn(e)
    // {
    //   e.preventDefault();
    //   try{
    //    await SignInWithGoogle()
    //    navigate("/home")
    //   }
    //   catch(e)
    //   {
    // setError(e.message)
    //   }
      
    //}

    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await SignInWithGoogle();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <main  style={{backgroundColor: "#ffff" ,marginTop:"80px"}} className="padding-body">
    <div className="container-xxl py-5 ">
    
      <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className='col-2 col-sm-3 col-md-4 col-lg-4 col-xl-4 smallDiv' style={{backgroundColor:"rgba(255 ,62, 108,0.8)"}}  >
        <div style={{height:"490px" ,width:"100%",position:"relative"}} className="d-flex flex-column px-2 py-3" >
          <div style={{backgroundColor:"rgba(255,255,255,0.7)",borderRadius:"10px"}} className="d-flex flex-row flex-wrap  py-2 px-1"><img src={LogoLogin}  style={{objectFit:"contain"}} className="w-40 pe-2"/>
          <span className='lead fw-bold fs-3 w-60' style={{color:"rgb(132,131,131)"}}> Smart Store</span></div>
          <div className='pt-5 display-6 fw-bold' style={{color:"white"}}>Login</div>
          <div className='pt-4 fs-3 fw-bold'style={{color:"white"}}>Get access to your cart items</div>
          <div style={{position:"absolute", bottom:"0"}}><img src={ShoppingLogin} className='image-fluid' style={{objectFit:"contain",width:"60%",height:"60%" }} /></div>
        </div>
      </div>
        <div className="col-12 col-sm-8 col-md-7 col-lg-6 col-xl-5">
          
          <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
            <div className="card-body p-5 text-center " >
            { user?<SignUpAlert/>:""}
  
              <h3 className="mb-3">Sign in</h3>
              {error && <div className="alert alert-danger" role="alert">
                <strong>{error}</strong> 
              </div>}
              
              <form onSubmit={handleSubmit}>
              <div className="form-outline mb-2">
                <input type="email" id="typeEmailX-2" className="form-control form-control-md" onChange={handleEmail}/>
                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
              </div>
  
              <div className="form-outline mb-2">
                <input type="password" id="typePasswordX-2" className="form-control form-control-md" onChange={handlePwd} autoComplete="true"/>
                <label className="form-label" htmlFor="typePasswordX-2" >Password</label>
              </div>
  
              
              {/* <div className="form-check d-flex justify-content-start mb-2">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
              </div> */}
  
              <button style={{width:"80%"}} className="btn btn-primary btn-lg btn-block " type="submit">Login</button>
              </form>
              <hr className="my-4"/>
  
               <button style={{width:"80%"}} className="btn btn-lg btn-block btn-danger  me-2 signupbtn" 
                type="submit" onClick={handleGoogleSignIn}>  


                 
   <img src={GooglBt} className='me-2' width="25" height="25" />
                  Sign in with google</button>  
                     {/* <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn} */}
          {/* /> */}
                  
              {/* <button className="btn btn-md btn-block btn-primary " style={{backgroundColor: "#3b5998"}}
             type="submit"   onClick={handleGoogleSignIn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook me-2" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
  </svg>
                  Sign in with facebook</button>
               */}
                  {/* <hr className="my-4"/> */}
                  <div className='fs-5 mt-4'>Don't Have an account? <Link to="/signup" replace >Sign Up</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    )
  }
  
 
