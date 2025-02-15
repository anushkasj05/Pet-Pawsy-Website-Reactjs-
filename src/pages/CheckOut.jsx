import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";

const CheckOut = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    contact: "",
    email: "",
    pincode: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert("Order placed successfully!");
    navigate("/paycomplete");
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">User Checkout</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contact No</Form.Label>
                <Form.Control
                  type="tel"
                  name="contact"
                  pattern="[0-9]{10}"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                  type="number"
                  name="pincode"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <h4>Select Payment Method</h4>
              <Form.Check
                type="radio"
                label="Cash On Delivery"
                name="paymentMethod"
                value="Cash On Delivery"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Debit/Credit Card"
                name="paymentMethod"
                value="Debit/Credit Card"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Internet Banking"
                name="paymentMethod"
                value="Internet Banking"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="UPI"
                name="paymentMethod"
                value="UPI"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="PhonePe / Google Pay"
                name="paymentMethod"
                value="PhonePe / Google Pay"
                onChange={handleChange}
              />

              <Button variant="primary" type="submit" className="mt-3 w-100">
                Submit Order
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
