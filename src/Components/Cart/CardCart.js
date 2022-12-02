import React from 'react'
import ContextData from '../Products/Context/Context'
import { useContext } from 'react'
export default function CardCart(props) {
    let con=useContext(ContextData);
    function handleAdd()
    {
       // let i=props.id;
       let item={id:props.id,count:1}
        con.add(item)
    }
    function handleRemove()
    {
      let item={id:props.id,count:1}
      con.remove(item);
    }
  return (
   
    <div className='border border-secondary mt-2 px-md-2 py-1'>
    <div className='row'>
    <div  className='col-5'>
    
        <div >
          <img src={props.image} style={{objectFit:"contain",width:"110px",height:"150px"}} className="mx-3 "   />
        </div>
      <div>
        <div style={{borderRadius:"50%" ,display:"inline-block",fontSize:"30px",width:"40px",height:"40px",position:"relative",top:"2px",cursor:"pointer"}} className='me-md-1 button btn-primary text-center fw-bold fs-3' onClick={handleAdd}>+</div>
         <div className=' border border-muted px-3 py-1 me-md-1 fw-bold' style={{display:"inline-block"}}> {props.count}</div>
         <div className='button btn-primary  fw-bold text-center fs-3' style={{borderRadius:"50%" ,display:"inline-block",fontSize:"30px",width:"40px",height:"40px",position:"relative",top:"3px",cursor:"pointer"}} onClick={handleRemove}>-</div>
     </div>
    </div>
    <div className='col-7'>
     <div>
      <p style={{fontWeight:"400"}}className='lead '>{props.title}</p>
      <p className='lead fw-bold'>Price: {props.price * props.count} $ <span className='lead'>( Per Unit Price: {props.price} $ ) </span></p>
      <p className='lead'>Quantity Selected: {props.count}</p>

     </div>


    </div>

    </div>

    </div>

  
  )
}
