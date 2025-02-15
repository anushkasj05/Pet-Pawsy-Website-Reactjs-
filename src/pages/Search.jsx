import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { addToWishlist, removeFromWishlist } from "./wishlistSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Search = () => {
  const [mypro, setMypro] = useState("");
  const [prodata, setProData] = useState([]);
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async (e) => {
    setMypro(e.target.value);
    let api = "http://localhost:3000/products";
    const response = await axios.get(api);
    setProData(response.data);
  };

  const ans = prodata.map((product) => {
    const mystr = product.name.toLowerCase();
    const myproduct = mypro.toLowerCase();
    const status = mystr.includes(myproduct);
    const isWishlisted = wishlist.some((item) => item.id === product.id);

    if (status) {
      return (
        <Card style={{ width: "16rem", marginTop: "20px" }} key={product.id}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "300px" }}
            onClick={() => navigate(`/prodetail/${product.id}`)}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
              <h4>Price: {product.price}</h4>
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
      );
    }
  });

  return (
    <>
      <h1>Search Product</h1>
      Enter Product name:{" "}
      <input type="text" value={mypro} onChange={loadData} />
      <hr />
      <div id="cardData">{ans}</div>
    </>
  );
};

export default Search;
