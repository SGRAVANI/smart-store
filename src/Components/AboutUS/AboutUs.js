import React from 'react'
import "./AboutUs.css"
import About1 from"./about-1.png";
import Services from './Services'
import Trusted from './Trusted'
export default function AboutUs() {
  return (
    <div style={{paddingTop:"130px"}}>
  
      <div className="container">
      <div className='row '>
        <div className="col-sm-6 col-md-5">
          <div className=" px-lg-5 image-top-setting ">
            <img src={About1} className=' image-top-size-setting '  />
          </div>
        </div>
        <div className="col-sm-6 col-md-7 my-5 text-break">
          <div className='ps-2 ps-lg-1'>
          <div style={{ color:"rgb(241, 90, 115)"}}>WELCOME TO</div>
          <h1 className='py-2' > Smart Store</h1>
          <p className=' contact-p' style={{textAlign:"justify"}}>Becoming India’s well-known fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Smart Store the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2015 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2017, Smart Store had introduced 100+ Indian and international brands to its platform, and this has only grown in number each passing year.

</p>
< p className=' contact-p' style={{textAlign:"justify"}}>Another reason why Our Potal  is popular amoung all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.</p>
        </div>
       
      </div>
      <Services/>
     
      </div>
      </div>
      <Trusted/>
      </div>
       
  )
}
