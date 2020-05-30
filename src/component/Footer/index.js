import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">
      <i className="fa fa-home home"></i>
        <i className="fa fa-bookmark bookmark"></i>
        <div className="add"></div>
        <img
           src="../hotel.jpeg"
          alt="imag-1"
          className="logo"
        />
      </div>
    </div>
  );
}

export default Footer;
