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
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 20px",
        flexWrap: "wrap",
        textAlign: "center",
        borderTop: "3px solid #ff9800",
      }}
    >
      <div
        style={{
          maxWidth: "50%",
          minWidth: "300px",
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#ff9800",
          }}
        >
          Sneaky Heads
        </p>
        <p>
          <FaMapMarkerAlt style={{ marginRight: "8px", color: "#ff9800" }} />{" "}
          123 Sneaker Street, Shoe City, SH 12345
        </p>
        <p>
          <FaPhone style={{ marginRight: "8px", color: "#ff9800" }} /> +1 987
          654 3210
        </p>
        <p>
          <FaEnvelope style={{ marginRight: "8px", color: "#ff9800" }} />{" "}
          support@sneakyheads.com
        </p>
        <p>
          <FaClock style={{ marginRight: "8px", color: "#ff9800" }} /> Mon -
          Fri: 10:00 AM - 8:00 PM
        </p>
        <p style={{ marginTop: "15px", fontSize: "14px", opacity: "0.8" }}>
          &copy; 2025 Sneaky Heads. All Rights Reserved.
        </p>
      </div>
      <div style={{ textAlign: "center", minWidth: "200px" }}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#ff9800",
          }}
        >
          Follow Us
        </p>
        <div>
          <a
            href="#"
            style={{
              margin: "0 15px",
              color: "white",
              fontSize: "24px",
              transition: "0.3s",
            }}
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            style={{
              margin: "0 15px",
              color: "white",
              fontSize: "24px",
              transition: "0.3s",
            }}
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            style={{
              margin: "0 15px",
              color: "white",
              fontSize: "24px",
              transition: "0.3s",
            }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
