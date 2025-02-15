import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { addToWishlist, removeFromWishlist } from "./wishlistSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Shoes = () => {
  const [prodata, setProData] = useState([]);
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    let api = "http://localhost:3000/products?category=Shoes";
    const response = await axios.get(api);
    setProData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = prodata.map((product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);

    return (
      <Card style={{ width: "16rem", marginTop: "20px" }} key={product.id}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "300px" }}
          onClick={() => {
            navigate(`/prodetail/${product.id}`);
          }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
            <h4> Price: {product.price}</h4>
          </Card.Text>
          <Button
            variant="outline-none"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "24px",
            }}
            onClick={() => {
              if (isWishlisted) {
                dispatch(removeFromWishlist(product.id));
              } else {
                dispatch(
                  addToWishlist({
                    id: product.id,
                    name: product.name,
                    desc: product.description,
                    price: product.price,
                    image: product.image,
                  })
                );
              }
            }}
          >
            {isWishlisted ? (
              <FaHeart color="red" />
            ) : (
              <FaRegHeart color="black" />
            )}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addtoCart({
                  id: product.id,
                  name: product.name,
                  desc: product.description,
                  category: product.category,
                  price: product.price,
                  image: product.image,
                  qnty: 1,
                })
              );
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h2 align="center">Shoes</h2>
      <div id="cardData">{ans}</div>
    </>
  );
};

export default Shoes;
