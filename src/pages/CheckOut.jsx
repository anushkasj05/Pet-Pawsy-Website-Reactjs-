import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const CheckOut=()=>{
const navigate= useNavigate();

    const handleSubmit=(e)=>{
         e.preventDefault();
         navigate("/paycomplete");

    }


    return(
        <>
          <h1 align="center"> User Checkout</h1>
          <div id="chkout">
             <div>
               <h2> Enter Cutomer Detail</h2>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact no</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
           
             </div>
             <div> 
             <h2> Select Payment Method</h2>
             <div id="paymethod">
             <Form.Check aria-label="option 1" /> Cash On Delivery
            </div>
            <div id="paymethod">
             <Form.Check aria-label="option 1" /> Debit/Credit Card
             </div>
             <div id="paymethod">
             <Form.Check aria-label="option 1" /> Internet Banking
             </div>
             <div id="paymethod">
             <Form.Check aria-label="option 1" /> UPI
             </div>
             <div id="paymethod">
             <Form.Check aria-label="option 1" /> Phone Pe/ Google Pe
             </div>
             </div>
          </div>
        </>
    )
}
export default CheckOut;