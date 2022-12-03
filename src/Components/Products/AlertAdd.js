import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertAdd(props) {
  const [show, setShow] = useState(true);
   useEffect(()=>{
   setShow(true)
   },[props.data])
  if (show) {
    return (
      <Alert  variant={props.variant} onClose={() => setShow(false)} dismissible>
         <Alert.Heading>{props.message}</Alert.Heading> 
         {/* <p>
         Item is added to your cart!
        </p>   */}
      </Alert>
    );
  }
 
}
export default AlertAdd;

// render(<AlertDismissibleExample />);