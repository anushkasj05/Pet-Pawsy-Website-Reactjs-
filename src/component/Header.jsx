import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Headerr = () => {
  const Cart = useSelector((state) => state.mycart.cart);
  const Mylen = Cart.length;
  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: "100%" }}>
        <div id="header">
          <FaShoppingCart
            onClick={() => {
              navigate("/cart");
            }}
          />
          {Mylen}
        </div>
      </div>
    </>
  );
};

export default Headerr;
