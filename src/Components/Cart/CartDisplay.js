import React from 'react'
import Cart from './Cart'
import EmptyCart from './EmptyCart'
import { useContext } from 'react'
import ContextData from '../Products/Context/Context'
export default function CartDisplay() {
    let c=useContext(ContextData);
    function cartCheck()
    {
        
    }
  return (
    <div>CartDisplay</div>
  )
}
