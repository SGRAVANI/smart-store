import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContextData from '../Products/Context/Context'
import { useNavigate } from 'react-router-dom';
import {useContext} from "react"
function DeleteConfirm(props) {
     let navigate=useNavigate();
     let cont=useContext(ContextData);
     function handleCAncelOrder(){
      
        cont.cancelOrder();
        console.log("cart from delete and cancel alert",cont.cart)
        props.onHide();
         navigate("/orderdata")

     }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       <span style={{color:" rgb(255,62,108)"}}> Do you really want to cancel order?</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Are You Sure To Continue With Order?</h4> */}
        <p>
          Your Orderd items will be moved back to cart... Click On "OK" button to continue cancellation and Click on "X" at top to or "CLOSE" button cancel it
        </p>
      </Modal.Body>
      <Modal.Footer>
      <button  style={{backgroundColor:" rgb(255,62,108)",border:"1px solid  rgb(255,62,108)"}}className='btn btn-success btn-md px-4' onClick={handleCAncelOrder}>OK</button>
        <button className='btn btn-danger btn-md' onClick={props.onHide}>CLOSE</button>
      </Modal.Footer>
    </Modal>
  );
}
export default DeleteConfirm;