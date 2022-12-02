import React, { useEffect ,useMemo, useState} from 'react'
import ProductCard from './ProductCard';
import style from "./ProductCarousel.module.css";
import ContextData from './Context/Context';
import { useContext } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import "react-loading-skeleton/dist/skeleton.css";
import ProductCarouselSkeleton from './ProductCarouselSkeleton';
export default function ProductsCarousel() {
  let [apiData,setApiData]=useState([]);
  let [f,setF]=useState(true);
  let inComingData=useContext(ContextData);
  
//  let [d,getD]=useState(false);
  let dataofProducts;
  
//  useEffect(()=>{
//     (async function(){
//     dataofProducts=await fetch("https://fakestoreapi.com/products");
//     let data= await dataofProducts.json();
//     //console.log(data);
//     //return data;
//     setApiData((prev)=>[...prev,data])
//     })();
//   },[])


  useEffect(() => {
    
         setTimeout(async ()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const apiData = await response.json();
       // setApiData(apiData);
      setApiData((prev)=> {return [...prev,...apiData] })
      //console.log(typeof apiData);
      console.log(apiData)
    //  setApiData(apiData)
       // getD(!d)
       console.warn("randered again")
      setF(false); 
      },1000);
      },[]);

// let divdata=apiData.map((ele,index)=>{return <div key={index}>{JSON.stringify(ele)}</div>})

let electonics=apiData.filter((ele)=>{return ele.category==="electronics"})
 // console.log(electonics);
let divdata=electonics.map((ele,index)=>{return <ProductCard key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />});




// let electonics=inComingData.displayItems.filter((ele)=>{return ele.category==="electronics"})
//  // console.log(electonics);
// let divdata=electonics.map((ele,index)=>{return <ProductCard key={ele.id} cardno={index+1} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />});
let jewellery=inComingData.displayItems.filter((ele)=>{return ele.category==="jewelery"})
  console.log(jewellery);
let jevdata=jewellery.map((ele,index)=>{return <ProductCard key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price}/>});
// useEffect(()=>{
//   if(jewellery.length<6)
// {
//   document.getElementById("jn").style.display="none";
//   document.getElementById("jp").style.display="none";
// }
// },[]);


let clothes=inComingData.displayItems.filter((ele)=>{return ele.category==="men's clothing"||ele.category==="women's clothing"})
  console.log(jewellery);
  console.log(clothes.length)
let clothdata=clothes.map((ele,index)=>{return <ProductCard key={ele.id} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} price={ele.price} />});
// useEffect(()=>{
//    if((apiData.filter((ele)=>{return ele.category==="men's clothing"||ele.category==="women's clothing"})).length<5)
//  {   document.getElementById("cn").style.display="inline";
//    document.getElementById("cp").style.display="inline";
//  }
// },[apiData]);


//<div key={index}>{JSON.stringify(ele)}</div>})
  //console.log(apiData)
  // await fetch("https://fakestoreapi.com/products");

  //console.log("itemdata  is: ",inComingData.displayItems)
  
 let box=document.getElementsByClassName(style.productContainer);
 
 console.log(box);
 //let box=document.querySelector("#");

  function handleNextJew()
  {
    
 let width=box[1].clientWidth;
 console.log(width);
 box[1].scrollLeft=box[1].scrollLeft+width;
 //cliemtWidth returns element width including padding
  }
  function handlePrevJew()
  {
    let width=box[1].clientWidth;
    //console.log(width);
    box[1].scrollLeft=box[1].scrollLeft-width;
    
  }
  function handleNextElect()
  {
    
 let width=box[0].clientWidth;
 console.log(width);
 box[0].scrollLeft=box[0].scrollLeft+width;
 //cliemtWidth returns element width including padding
  }
  function handlePrevElect()
  {
    let width=box[0].clientWidth;
    //console.log(width);
    box[0].scrollLeft=box[0].scrollLeft-width;
    
  }
  function handleNextCl()
  {
    
 let width=box[2].clientWidth;
 console.log(width);
 box[2].scrollLeft=box[2].scrollLeft+width;
 //cliemtWidth returns element width including padding
  }
  function handlePrevCl()
  {
    let width=box[2].clientWidth;
    //console.log(width);
    box[2].scrollLeft=box[2].scrollLeft-width;
    
  }
  return   f? (<ProductCarouselSkeleton/>):
    (<div>
    <div  className='text-center lead fw-bold fs-4'>BEST SELLING ELECTRONICS ITEMS</div>    
    <div className={style.productCarousel}>
      <button className={style.preBtn} onClick={handlePrevElect}><p>&lt;</p></button>
      <button className={style.nextBtn} onClick={handleNextElect}><p>&gt;</p></button>
      {/* <div className={style.viewAll}>View All</div> */}
      <div id={style.centerProducts}>
      <div className={style.productContainer} >
      
         {divdata}
      </div>
      </div>
       {/* {divdata}  */}

      </div>
      



      <div id="jew" className='text-center lead fw-bold fs-4'>LATEST IN JEWELLERY</div>    
    <div  className={style.productCar2}>
      <button  className={style.preBtn1} onClick={handlePrevJew}><p>&lt;</p></button>
      <button className={style.nextBtn1} onClick={handleNextJew}><p>&gt;</p></button>
      {/* <div className={style.viewAll}>View All</div> */}
      <div id={style.centerProducts}>
      <div className={style.productContainer} >
        
         {jevdata}
      </div>
       {/* {divdata}  */}
       
      </div>
      </div>
      <div  className='text-center lead fw-bold fs-4'>BEST SELLING IN CLOTHING</div>    
    <div id="cloth" className={style.productCarousel}>
      <button id="cp"className={style.preBtn} onClick={handlePrevCl}><p>&lt;</p></button>
      <button id= "cn" className={style.nextBtn} onClick={handleNextCl}><p>&gt;</p></button>
      {/* <div className={style.viewAll}>View All</div> */}
      <div className={style.productContainer} >
        
         
         {clothdata}
      </div>
       
      </div>
      

       {/* skeleton starts from here */}
       


       

      </div>      
      
  )
}
