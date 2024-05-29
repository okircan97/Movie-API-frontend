import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import "./Styles/Header.css";
import logoImage from "./Images/moviez-logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="headerImg" src={logoImage} alt="Home" />
      </Link>
    </header>
  );
};

export default Header;
