import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AlertDismissible(props) {
  const [show, setShow] = useState(true);
  const[count,setCount]=useState(true);
   useEffect(()=>{
   //setCount(!count);
   setShow(true);
   },[props.data])
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Please Login</Alert.Heading>
        <p>
         To Add Items In Your Cart Please Login First !!!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => {setShow(false)}} variant="outline-success">
            Close me!
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

// render(<AlertDismissible />);