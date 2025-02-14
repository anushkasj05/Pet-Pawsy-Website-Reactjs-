import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "grey",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        <p
          style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Sneaky Heads
        </p>
        <p>
          <FaMapMarkerAlt style={{ marginRight: "5px" }} /> 123 Sneaker Street,
          Shoe City, SH 12345
        </p>
        <p>
          <FaPhone style={{ marginRight: "5px" }} /> +1 987 654 3210
        </p>
        <p>
          <FaEnvelope style={{ marginRight: "5px" }} /> support@sneakyheads.com
        </p>
        <p>
          <FaClock style={{ marginRight: "5px" }} /> Mon - Fri: 10:00 AM - 8:00
          PM
        </p>
        <p style={{ marginTop: "10px" }}>
          &copy; 2025 Sneaky Heads. All Rights Reserved.
        </p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Follow Us
        </p>
        <a
          href="#"
          style={{ margin: "0 10px", color: "white", fontSize: "22px" }}
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          style={{ margin: "0 10px", color: "white", fontSize: "22px" }}
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          style={{ margin: "0 10px", color: "white", fontSize: "22px" }}
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
