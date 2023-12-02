import React from "react";
import { Link } from "react-router-dom";
import './menu.component.css'
const Menu = () => {
  return (
    <div className="menu">
      <label>
        <Link to="/" className="menu-item">
          HOME
        </Link>
      </label>

      <label>
        <Link to="/user" className="menu-item">
         USER
        </Link>
      </label>

      <label>
        <Link to="/country" className="menu-item">
         COUNTRY
        </Link>
      </label>
      <label>
        <Link to="/state" className="menu-item">
         STATE
        </Link>
      </label>
    </div>
  );
};

export default Menu;
