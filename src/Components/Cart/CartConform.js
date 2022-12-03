import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderData from './OrderData';
import { useContext } from 'react';
import ContextData from '../Products/Context/Context';
import { useNavigate } from 'react-router-dom';
function CartConfirm(props) {
  let cont=useContext(ContextData);
    let navigate=useNavigate();
    function handleOrder(){
    //    props.onHide();
    cont.updateCartOrder();
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
       <span style={{color:" rgb(255,62,108)"}}> Are You Sure To Continue With Order?</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Are You Sure To Continue With Order?</h4> */}
        <p>
          Click On "OK" button to continue order and Click on "X" at top to or "CLOSE" button cancel it
        </p>
      </Modal.Body>
      <Modal.Footer>
      <button  style={{backgroundColor:" rgb(255,62,108)",border:"1px solid  rgb(255,62,108)"}}className='btn btn-success btn-md px-4' onClick={handleOrder}>OK</button>
        <button className='btn btn-danger btn-md' onClick={props.onHide}>CLOSE</button>
      </Modal.Footer>
    </Modal>
  );
}
export default CartConfirm;