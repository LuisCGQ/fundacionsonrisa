import React from "react";

import "./styles/Navbar.css";

import logo from "../images/navbar_logo.png";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__flex">
          <Link className="navbar__brand link" to="/">
            <img className="navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-bold">Fundación Sonrisa</span>
          </Link>
          <div className="navbar__menu">
            <Link className="navbar__menu-link navbar__menu-active">
              INICIO
            </Link>
            <Link className="navbar__menu-link">QUIÉNES SOMOS</Link>
            <Link className="navbar__menu-link">PROGRAMAS</Link>
            <Link className="navbar__menu-link">CONTACTO</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
