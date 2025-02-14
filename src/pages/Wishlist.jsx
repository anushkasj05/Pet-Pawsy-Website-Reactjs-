import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "./wishlistSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { addtoCart } from "../cartSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2 align="center">Your Wishlist</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <Card
              key={product.id}
              style={{ width: "16rem", marginTop: "20px" }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "300px", cursor: "pointer" }}
                onClick={() => navigate(`/prodetail/${product.id}`)}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <p>{product.desc}</p>
                  <h4>Price: {product.price}</h4>
                </Card.Text>

                <Button
                  variant="outline-none"
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "24px",
                  }}
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                >
                  <FaHeart color="red" />
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
          ))
        ) : (
          <h4>No items in Wishlist</h4>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
