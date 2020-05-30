import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">
        <i className="fa fa-bookmark bookmark"></i>
        <i className="fa fa-bookmark bookmark"></i>
        <div className="add"></div>
        <img
          src="https://images.unsplash.com/photo-1590688466449-12394418ecfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="imag-1"
          className="logo"
        />
      </div>
    </div>
  );
}

export default Footer;
