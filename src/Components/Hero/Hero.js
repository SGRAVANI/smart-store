import React, { useEffect } from 'react'
import ClothesModel from "./clothes-model2.png";
//import Model2 from "./clothes.png";
import Qledt from "./QLEDt.png";
import Man from "./man.png";
import st from "./Hero.module.css";
import jew from "./jew.png"
import jew2 from "./jew2.png"
import {useNavigate} from "react-router-dom"
// import HeroSkeleton from './HeroSkeleton';
// import {useState} from "react"
export default function Hero() {
  let navigate=useNavigate()
  // let [f,setF]=useState(true);
  function handleClickClothSection(e)
  {
  //  navigate("#cloth");
  e.preventDefault();
  window.location.replace("/#cloth")
  }
  function handleClickJew(e)
  {e.preventDefault();
    window.location.replace("/#jew")
  }
  useEffect(()=>{
// console.log("rendered hero")
// document.getElementsByClassName("carousel")[0].carousel({interval:2000,cycle:true})
  },[]);
// useEffect(()=>{
  // var myCarousel = document.getElementById('carouselExampleDark"')
  
  // myCarousel.carousel({
  //   interval: 3000,
  //   cycle: true
  // });
  // $('#carouselExampleDark').carousel({
  //   interval: 3000,
  //   cycle: true
  // });  
  // },[]);
  
   return ( 
    <div >
      
      <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000" data-bs-cycle="true" data-bs-autoplay="true" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            
            
            <div style={{backgroundColor:"#092e2b",width:"100%",height:"200px",textAlign:"center", display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"row",gap:"30px"}} >  
              <div><img src={Qledt} width="200px" height="150px"  alt="..."/> </div>
              <div><h3 style={{color:"white"}} >SAMSUNG QLED Gaming Monitor</h3>
               <h5 style={{color:"white"}}><s>1299.99$ </s>From 999.99$*</h5>
              <h6 style={{color:"white"}}>Super Ultra wide Screen</h6></div>    
            </div>
              
              <div className="carousel-caption d-none d-md-block">
              
            </div>
            
          </div>
          <div className="carousel-item" data-bs-interval="2000" >
           
            {/* <div style={{backgroundColor:"rgb(227,84,3)",width:"100%",height:"200px",textAlign:"center", display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"row",gap:"30px"}} > */}
            <div className={st.slide} >
            <div onClick={handleClickClothSection}><img src={ClothesModel} style={{objectFit:"contain",position:"relative",top:"10px"}}  width="200px" height="190px"  alt="..."/>  
                 </div>
             
              <div onClick={handleClickClothSection}><h3  className={st.h3Style} style={{color:"white"}} >Exclusive Collection For Him and Her </h3>
               <h5  className={st.h5Style} style={{color:"white"}}>Starting From From 25$</h5>
                 
            </div>
            <div onClick={handleClickClothSection}><img src={Man} className={st.imgStyleRight} style={{position:"relative",top:"20px"}}alt="..." /></div>
            
            </div>
          </div>


         


          <div className="carousel-item">
            
            {/* <div style={{background:"linear-gradient(20deg,#3598d5,#084e7a)"}} className={st.slide}> */}
            <div  style={{background:"linear-gradient(20deg,#6d0175,#41008e)"}} className={st.slide}>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
            <div onClick={handleClickJew}><img src={jew2} style={{objectFit:"contain",position:"relative",top:"30px"}}  width="200px" height="200px"  alt="..."/>  
                 </div>
             
              <div onClick={handleClickJew}><h3  className={st.h3Style}style={{color:"white"}} >Luxurious Jewellery Collection </h3>
               <h5 className={st.h5Style} style={{color:"white"}}>Shine Bright With Our Exclusive Collection</h5>
                 
            </div>
            <div onClick={handleClickJew}><img src={jew} className={st.imgStyleRight} style={{objectFit:"contain",position:"relative",top:"10px",width:"200px",height:"150px"}} alt="..." /></div>
            
            
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
      
      
      
      
      
      
      
      
      
      
      </div>
  )
}
