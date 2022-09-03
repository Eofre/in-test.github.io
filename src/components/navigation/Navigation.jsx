import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Главная
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/tests" className="navigation__link">
            Тесты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
