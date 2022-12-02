import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function SignUpAlert(props) {
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
         Your Account is Generated Successfully... Please Login using crediential that you have entered in sign Up 
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