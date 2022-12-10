import React from "react";
import "./Navbar.css";
import logo from "../../asset/images/Logo.gif";

const Navbar = () => {
  return (
    <div>
      <section className="navbarContainer">
        <div className="logoContainer">
          <img id="logo" src={logo} alt="" height="50px" />
        </div>
        <div className="linkContainer">
          <a href="https://github.com/Daganx" rel="external">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://discordapp.com/users/1023919893084647496"
            rel="external"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://www.linkedin.com/in/letotdagan/" rel="external">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="mediaContainer">
          <i className="fa-brands fa-reddit"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
