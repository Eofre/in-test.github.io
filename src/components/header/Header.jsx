import React, { Children } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import cl from "./Header.module.scss";
import logo from "../../assets/image/rocket.svg";

function Header({ children }) {
  return (
    <header className={cl.header}>
      <div className="conteiner">
        <div className={cl.headerInner}>
          <Link to="/" className={cl.headerLogo}>
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
