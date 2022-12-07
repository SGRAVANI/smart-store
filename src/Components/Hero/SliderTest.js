import Carousel from 'react-bootstrap/Carousel';
import ClothesModel from "./clothes-model2.png";

//import Model2 from "./clothes.png";
import Qledt from "./QLEDt.png";
import Man from "./man.png";
import st from "./Hero.module.css";
import jew from "./jew.png"
import jew2 from "./jew2.png"
import {useNavigate} from "react-router-dom"
function SliderTest() {
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
  return (
    <Carousel variant="light" interval={2000}>
      <Carousel.Item >
      <div className={st.slide} >
            <div
            onClick={handleClickClothSection}
            ><img src={ClothesModel} style={{objectFit:"contain",position:"relative",top:"10px"}}  width="200px" height="190px"  alt="..."/>  
                 </div>
             
              <div 
             onClick={handleClickClothSection}
              ><h3  className={st.h3Style} style={{color:"white"}} >Exclusive Collection For Him and Her </h3>
               <h5  className={st.h5Style} style={{color:"white"}}>Starting From From 25$</h5>
                 
            </div>
            <div
              onClick={handleClickClothSection}
             ><img src={Man} className={st.imgStyleRight} style={{position:"relative",top:"20px"}}alt="..." /></div>
            
            </div>
      
      
      
      
      
      
      
      
       
      </Carousel.Item>
      <Carousel.Item>
      
        
            
            <div style={{backgroundColor:"#092e2b",width:"100%",height:"200px",textAlign:"center", display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"row",gap:"30px"}} >  
              <div><img src={Qledt} width="200px" height="150px"  alt="..."/> </div>
              <div><h3 className={st.h3Style} style={{color:"white"}} >SAMSUNG QLED Gaming Monitor</h3>
               <h5 className={st.h5Style} style={{color:"white"}}><s>1299.99$ </s>From 999.99$*</h5>
              <h5 className={st.h5Style} style={{color:"white"}}>Super Ultra wide Screen</h5></div>    
            </div>
           
      
      </Carousel.Item>
      <Carousel.Item>
        
        <div  style={{background:"linear-gradient(20deg,#6d0175,#41008e)"}} className={st.slide}>
        <div 
         onClick={handleClickJew}
        ><img src={jew2} style={{objectFit:"contain",position:"relative",top:"30px"}}  width="200px" height="200px"  alt="..."/>  
                 </div>
             
              <div 
               onClick={handleClickJew}
              ><h3  className={st.h3Style}style={{color:"white"}} >Luxurious Jewellery Collection </h3>
               <h5 className={st.h5Style} style={{color:"white"}}>Shine Bright With Our Exclusive Collection</h5>
                 
            </div>
            <div 
             onClick={handleClickJew}
            ><img src={jew} className={st.imgStyleRight} style={{objectFit:"contain",position:"relative",top:"10px",width:"200px",height:"150px"}} alt="..." /></div>
            
            
            
        </div>
      </Carousel.Item>
            
    </Carousel>
  );
}

export default SliderTest;