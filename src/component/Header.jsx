import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
const Headerr = () => {
  const Cart = useSelector((state) => state.mycart.cart);
  const Mylen = Cart.length;
  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: "100%" }}>
        <div id="header">
         
        </div>
      </div>
    </>
  );
};

export default Headerr;
