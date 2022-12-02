import React from 'react'
import "./Services.css"
export default function Services() {
  return (
    <div>
        {/* <div className='d-flex justify-content-center align-items-center'> */}
        {/* <div className='row d-flex align-items-center justify-content-center border text-center ' style={{gap:"1rem"}}>
            
            <div className='col-sm-3' style={{backgroundColor:"#E5E4E2",height:"100%"}}>
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Super Fast and Free Delivery</h3>
            </div>
            <div className='col-sm-5 d-flex align-items-center justify-content-center flex-column'  style={{gap:"1rem"}}>
            <div className='row' style={{backgroundColor:"#E5E4E2"}}>
                <div className='col text-center'>
                <i className="fa-solid fa-user-shield"></i>
                    <h3>Non-Contact Shipping</h3></div>
            </div>
            <div className='row' style={{backgroundColor:"#E5E4E2"}}>
                <div className='col text-center'>
                <i className="fa-solid fa-money-bill-transfer"></i>
                    <h3>Money-back Guaranteed</h3></div>
            </div>
            </div>
            <div className='col-sm-3' style={{backgroundColor:"#E5E4E2"}}>
            <i className="fa-solid fa-file-invoice-dollar"></i>
                <h3>Super Secure Payment System</h3></div>
            </div>
 */}


            <div className='grid-class text-center ' >
            <div style={{backgroundColor:"#E5E4E2",gridRow:"1 span /2",borderRadius:"5px"}} className="py-3 d-flex align-items-center justify-content-center flex-column" id="row1">
            <span style={{display:"inline-block"}} className='icon-wrapper truck'>   
            <i className="fa-solid fa-truck-fast icon-setting-services"></i>
            </span>
                <div style={{color:"white"}}>Super Fast and Free Delivery</div>
            </div>
            

            
            <div style={{gridRow:"1 span /2",borderRadius:"5px"}} id="middle-service-container"  >
            <div style={{gridRow:"1 span /1",gridColumn:"2",borderBottom:"2px solid #E5E4E2",borderRadius:"5px"}} className="text-center py-3" id="row2">
             <span style={{display:"inline-block"}} className='icon-wrapper me-2 bounce'>   
            <i className="fa-solid fa-user-shield icon-setting-services "></i> </span>
                <span style={{color:"white"}} className="moneyBackText">Non-Contact Shipping</span> 
            </div>
            <div style={{backgroundColor:"#E5E4E2",gridRow:"2 /span1" ,gridColumn:"2 "}} id="row3" className="text-center py-3">
            <span style={{display:"inline-block"}} className='icon-wrapper me-2 money-back'>   
            <i className="fa-solid fa-money-bill-transfer icon-setting-services"></i></span>
                <span style={{color:"white"}}  className='moneyBackText'>Money-back Guaranteed</span> 
            </div>
            </div>
            <div style={{backgroundColor:"#E5E4E2", gridRow:"1 span / 2",gridColumn:"3",borderRadius:"5px"}} className="py-3  d-flex align-items-center justify-content-center flex-column" id="row4">
            <span style={{display:"inline-block"}} className='icon-wrapper secure-payment'>   
            <i className="fa-solid fa-file-invoice-dollar icon-setting-services"></i>
            </span>
                <div style={{color:"white"}} >Super Secure Payment System</div> 
            </div>
            </div>
            <div>
            </div>
        </div>
    // </div>
    
  )
}
