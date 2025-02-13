import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";
const Sneakers = () => {
  const [prodata, setProData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadData = async () => {
    let api = "http://localhost:3000/products?category=Sneakers";
    const response = await axios.get(api);
    console.log(response.data);
    setProData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = prodata.map((key) => {
    return (
      <>
        <Card style={{ width: "16rem", marginTop: "20px" }}>
          <Card.Img
            variant="top"
            src={key.image}
            style={{ height: "300px" }}
            onClick={() => {
              navigate(`/prodetail/${key.id}`);
            }}
          />
          <Card.Body>
            <Card.Title>{key.name}</Card.Title>
            <Card.Text>
              {key.description}
              <h4> Price : {key.price}</h4>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(
                  addtoCart({
                    id: key.id,
                    name: key.name,
                    desc: key.description,
                    category: key.category,
                    price: key.price,
                    image: key.image,
                    qnty: 1,
                  })
                );
              }}
            >
              add to Cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <h2 align="center"> Sneakers</h2>

      <div id="cardData">{ans}</div>
    </>
  );
};

export default Sneakers;
