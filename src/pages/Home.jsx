import Carousel from "react-bootstrap/Carousel";
import b1 from "../images/b1.jpeg";
import b2 from "../images/b2.jpeg";
import b3 from "../images/b3.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [prodata, setProData] = useState([]);
  const [ratings, setRatings] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const productApi = "http://localhost:3000/products";
      const reviewApi = "http://localhost:3000/userreviews";

      const [productRes, reviewRes] = await Promise.all([
        axios.get(productApi),
        axios.get(reviewApi),
      ]);

      const reviews = reviewRes.data;
      const ratingMap = {};

      for (let review of reviews) {
        if (!ratingMap[review.productid]) {
          ratingMap[review.productid] = { total: 0, count: 0 };
        }
        ratingMap[review.productid].total += review.point;
        ratingMap[review.productid].count++;
      }

      const avgRatings = {};
      for (let productId in ratingMap) {
        avgRatings[productId] = (
          ratingMap[productId].total / ratingMap[productId].count
        ).toFixed(1);
      }

      setProData(productRes.data);
      setRatings(avgRatings);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const renderStars = (rating) => {
    let stars = "";
    if (rating) {
      for (let i = 0; i < Math.round(rating); i++) {
        stars += "⭐";
      }
    }
    return stars;
  };

  return (
    <>
      <Carousel>
        {[b1, b2, b3].map((banner, index) => (
          <Carousel.Item key={index}>
            <img
              src={banner}
              width="100%"
              height="500"
              alt={`Banner ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>Slide {index + 1}</h3>
              <p>Some description here.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 align="center">Our Products</h2>

      <div
        id="cardData"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {prodata.map((product) => (
          <Card key={product.id} style={{ width: "16rem", marginTop: "20px" }}>
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "300px", cursor: "pointer" }}
              onClick={() => navigate(`/prodetail/${product.id}`)}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <p>{product.description}</p>
                <h4>Price: {product.price}</h4>

                {/* Display Rating */}
                <h5>
                  Rating:{" "}
                  {ratings[product.id] ? ratings[product.id] : "No Ratings"}
                </h5>
                <div style={{ fontSize: "18px", color: "#FFD700" }}>
                  {ratings[product.id] ? renderStars(ratings[product.id]) : ""}
                </div>
              </Card.Text>

              <Button
                variant="primary"
                onClick={() =>
                  dispatch(
                    addtoCart({
                      id: product.id,
                      name: product.name,
                      desc: product.description,
                      price: product.price,
                      image: product.image,
                      qnty: 1,
                    })
                  )
                }
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
