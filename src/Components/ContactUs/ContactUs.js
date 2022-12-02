import React from 'react'
import "./ContactUs.css"
import "../Products/ProductDetails.css"
import { useState } from 'react';
import { useUserAuth } from '../Products/Context/ContextAPI';
export default function ContactUs() {
  const {user}=useUserAuth();
  
  const[email,setEmail]=useState((prev)=>{
    if(user) { return user.email} else{ return ""}
  })
  function handleChange(e)
  {
    if(user)
    {
      setEmail(user.email)
    }
    else{
      setEmail(e.target.value)
    }
    
  }
  return (
    <div style={{paddingTop:"75px"}}>
      <div className='text-center'>
        <p className='py-1 lead fw-bold fs-3 lead'> Feel Free to Contact Us</p>
        </div>
    <div className="container-fluid">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6055779789776!2d72.79171244968438!3d21.207821886949795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dacb46f2c4f%3A0xd34834f216b14fff!2sSmart%20Superstore!5e0!3m2!1sen!2sin!4v1668620613504!5m2!1sen!2sin" width="100%" height="300" 
    style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
      
        <div className="container-xxl mt-5">
          <div className="row text-center">
            <div className="col-sm-7 ">
              
                <form method="post"
                action='https://formspree.io/f/xqkjnnkq'
                >
                  <div className="mb-3 row d-flex align-items-center justify-content-center ">
                    {/* <label for="Name" className="col-4 col-form-label">Name</label> */}
                    <div className="col-9">
                      <input type="text" className="form-control f" name="inputName" id="inputName" placeholder="Enter Your Name" autoComplete='off' required/>
                    </div>
                  </div>
                  <div className="mb-3 row d-flex align-items-center justify-content-center ">
                    {/* <label for="email" className="col-4 col-form-label">Email-Id</label> */}
                    <div className=" col-9" >
                      <input type="email" className="form-control f" name="Email" id="email" placholder="Enter Your Email Address" value={email} onChange={handleChange}required/>
                    </div>
                  </div>
                  <div className="mb-3 row d-flex align-items-center justify-content-center ">
                    {/* <label for="message" className="col-4 col-form-label">Message</label> */}
                    <div className="col-9">
                        <textarea className="form-control f" name="message" id="message" rows="4"  placeholder="Enter Your Message Here" autoComplete='off' required></textarea>
                        </div>
                     
                      
                    
                  </div>
                  {/* <fieldset className="mb-3 row">
                    <legend className="col-form-legend col-4">Group name</legend>
                    <div className="col-8">
                      you can use radio and checkboxes here
                    </div>
                  </fieldset> */}
                 <div className="mb-3 row d-flex align-items-center justify-content-center ">
                    {/* <div className="offset-sm-4 col-sm-8"> */}
                    <div className="col-9">
                      <input type="submit" className="btN btnLg btnStyle px-5" value="SEND"/>
                    </div>
                  </div>
                </form>
              </div>
            
            <div className="col-sm-5 ">
              <div className='d-flex justify-content-center align-items-center gap-5 border-animated'>
                
              <div >
                <div className='lead py-5 fw-bold '><span style={{paddingBottom:"8px"}}className="add"> Registered Office Address</span></div>
                <div>Anand Mahal Rd, beside Gail Tower, Saikrupa Society, Palanpur Patia, Surat, Gujarat 395009</div>
                <div className='fw-bold mb-4'>Telephone: +91-80-61561999</div>
              </div>
              
              </div>
            </div>
            
          </div>
        </div>
      </div>

    
  )
}
