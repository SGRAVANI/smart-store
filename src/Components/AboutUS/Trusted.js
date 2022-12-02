import React from 'react'
import "./Trusted.css"

export default function Trusted() {
  return (
    <div style={{marginTop:"30px",backgroundColor:"rgba(255,255,255,0.5)"}}>
        <div className='container'>
            <div className='row text-center pt-5 pb-1'>
              <b>Trusted By 100+ Companies</b>
            </div>
            <div className='row pt-3 pb-4 text-center'>
               
                 <div className='col'>
                 <i className="fa-brands fa-sketch icon-font-trusted"></i>
                 </div>
                 <div className='col'><i className="fa-brands fa-blackberry icon-font-trusted"></i></div>
                 <div className='col'><i className="fa-brands fa-bots icon-font-trusted"></i>
</div>
                 <div className='col'><i className="fa-brands fa-empire icon-font-trusted"></i></div>
                 <div className='col'>
                    {/* <i class="fa-brands fa-first-order-alt"></i> */}
                    <i className="fa-brands fa-shirtsinbulk icon-font-trusted"></i>

                 </div>
               
            </div>
        </div>
    </div>
  )
}
