import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./Header.scss";

function Header({ userAuthorizationStatus }) {
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            In<span>.TEST</span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
