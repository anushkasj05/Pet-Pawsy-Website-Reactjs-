import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const TopNav = () => {
  const Cart = useSelector((state) => state.mycart.cart);
  const Mylen = Cart.length;
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Sneaky Head</Navbar.Brand>

          {/* Left Side Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="shoes">
              Shoes
            </Nav.Link>
            <Nav.Link as={Link} to="sneakers">
              Sneakers
            </Nav.Link>
          </Nav>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center" style={{ gap: "15px" }}>
            <CiHeart
              style={{
                fontSize: "xx-large",
                color: "white",
                cursor: "pointer",
              }}
            />
            <div
              onClick={() => navigate("/cart")}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <FaShoppingCart style={{ fontSize: "larger", color: "white" }} />
              {Mylen > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                  }}
                >
                  {Mylen}
                </span>
              )}
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
