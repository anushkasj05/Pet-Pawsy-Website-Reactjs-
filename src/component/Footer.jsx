import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-5">
      <Container>
        <Row className="text-center text-md-start">
          {/* About Section */}
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase fw-bold">Sneaky Heads</h5>
            <p className="small">
              The ultimate hub for sneaker lovers. Discover, shop, and collect
              the hottest kicks in the game. Stay fresh, stay fly. 👟🔥
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="footer-link">
                  Shop
                </a>
              </li>
              <li>
                <a href="/releases" className="footer-link">
                  New Releases
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p className="small">
              Email:{" "}
              <a href="mailto:support@sneakyheads.com" className="footer-link">
                support@sneakyheads.com
              </a>
            </p>
            <p className="small">Phone: +1 987 654 3210</p>
            <p className="small">Location: 456 Sneaker Street, Hype City</p>
          </Col>

          {/* Social Media */}
          <Col md={3} className="text-md-end text-center">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="#" className="footer-social">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="footer-social">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="footer-social">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="footer-social">
                <FaTiktok size={24} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <hr className="bg-light opacity-50" />
        <p className="text-center small mb-0">
          &copy; 2025 Sneaky Heads | Stay Fresh, Stay Fly 👟🔥
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
