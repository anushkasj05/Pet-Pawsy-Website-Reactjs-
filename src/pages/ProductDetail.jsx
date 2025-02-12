import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ProductDetail = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  // Modal state
  const [show, setShow] = useState(false);

  // Review form states
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [email, setEmail] = useState("");
  const [averageRating, setAverageRating] = useState(null);

  const handleClose = () => {
    setShow(false);
    setReview("");
    setRating(5);
    setEmail("");
  };

  const handleShow = () => setShow(true);

  // Fetch product and reviews
  const loadData = async () => {
    try {
      let productApi = `http://localhost:3000/products/${id}`;
      let reviewApi = `http://localhost:3000/userreviews?productid=${id}`;

      const [productRes, reviewRes] = await Promise.all([
        axios.get(productApi),
        axios.get(reviewApi),
      ]);

      setMydata(productRes.data);
      setReviews(reviewRes.data);

      // Calculate average rating
      if (reviewRes.data.length > 0) {
        const totalRating = reviewRes.data.reduce((acc, review) => acc + review.point, 0);
        setAverageRating((totalRating / reviewRes.data.length).toFixed(1));
      } else {
        setAverageRating(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle review submission
  const handleReviewSubmit = async () => {
    if (review.trim() === "" || email.trim() === "") {
      alert("Please enter your email and a review before submitting.");
      return;
    }

    const newReview = {
      productid: parseInt(id),
      point: rating,
      comment: review,
      email: email,
    };

    try {
      await axios.post(`http://localhost:3000/userreviews`, newReview);
      alert("Review submitted successfully!");
      setReviews([...reviews, newReview]); // Update UI instantly
      handleClose();
      loadData(); // Refresh to update average rating
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review.");
    }
  };

  return (
    <>
      <h1>Product Detail:</h1>
      <div id="myproduct">
        <div>
          <img src={mydata.image} width="300px" height="300px" alt={mydata.name} />
        </div>
        <div>
          <h2>Product Name: {mydata.name}</h2>
          <h3 style={{ color: "red" }}>Price: {mydata.price}</h3>
          <h4>Description: {mydata.description}</h4>
          <h4>Average Rating: {averageRating ? `${averageRating} ⭐` : "No Ratings Yet"}</h4>

          <Button
            variant="primary"
            onClick={() =>
              dispatch(
                addtoCart({
                  id: mydata.id,
                  name: mydata.name,
                  desc: mydata.description,
                  category: mydata.category,
                  price: mydata.price,
                  image: mydata.image,
                  qnty: 1,
                })
              )
            }
          >
            Add to Cart
          </Button>

          <Button variant="warning" onClick={handleShow}>
            Add Review
          </Button>
        </div>
      </div>

      {/* Review List */}
      <div>
        <h3>Customer Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <strong>{review.email}</strong>
              <p>Rating: {review.point.toFixed(1)} ⭐</p>
              <p>Review: {review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Review Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="reviewEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group controlId="reviewRating">
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
              >
                <option value={5}>5 - Excellent</option>
                <option value={4.5}>4.5 - Very Good</option>
                <option value={4}>4 - Good</option>
                <option value={3.5}>3.5 - Decent</option>
                <option value={3}>3 - Average</option>
                <option value={2.5}>2.5 - Below Average</option>
                <option value={2}>2 - Poor</option>
                <option value={1.5}>1.5 - Bad</option>
                <option value={1}>1 - Terrible</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="reviewText">
              <Form.Label>Your Review:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleReviewSubmit}>
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDetail;
