import React, { useState, useEffect } from "react";
import "./Header.css";
import AccountModal from "../../modals/AccountModal";
import PrivacyPolicy from "../../modals/PrivacyPolicy";
import logo from "../../utils/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen && window.innerWidth <= 767) {
        setIsMenuOpen(false);
      }
    };

    if (window.innerWidth <= 767) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className="nav w-100 p-1">
      <div className="h-100 d-flex align-items-center">
        <img
          style={{ height: "100%", cursor: "pointer" }}
          src={logo}
          alt="logo_img"
        />{" "}
        <span style={{ fontSize: "40px", cursor: "pointer" }}> Sehalo</span>
      </div>
      <div>
        <ul id="navbar" className={`navbar ${!isMenuOpen ? "active" : ""}`}>
          <li>
            <AccountModal />
          </li>
          <li>
            <PrivacyPolicy />
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={toggleMenu}>
        {isMenuOpen ? (
          <i className="fas fa-times fs-1" style={{ color: "white" }}></i>
        ) : (
          <i className="fas fa-bars fs-1" style={{ color: "white" }}></i>
        )}
      </div>
    </div>
  );
};

export default Header;
