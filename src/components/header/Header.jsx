import React, { Children } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./Header.scss";
import logo from "../../assets/image/rocket.svg";

function Header({ children }) {
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <img src={logo} alt="логотип" />
            YouTest
          </Link>
          {children}
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
