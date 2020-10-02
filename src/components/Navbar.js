import React from "react";

import "./styles/Navbar.css";

import logo from "../images/navbar_logo.png";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    function handleClick(id = 0) {
      console.log(id);
    }

    return (
      <div className="navbar">
        <div className="navbar__flex">
          <Link className="navbar__brand link" to="/">
            <img className="navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-bold">Fundación Sonrisa</span>
          </Link>
          <div className="navbar__menu">
            <Link
              className="navbar__menu-link"
              to="/fundacionsonrisa/"
              onClick={() => handleClick(1)}
            >
              INICIO
            </Link>
            <Link
              className="navbar__menu-link"
              to="/fundacionsonrisa/quienessomos"
              onClick={() => handleClick(2)}
            >
              QUIÉNES SOMOS
            </Link>
            <Link
              className="navbar__menu-link"
              to="/fundacionsonrisa/programas"
              onClick={() => handleClick(3)}
            >
              PROGRAMAS
            </Link>
            <Link
              className="navbar__menu-link"
              to="/fundacionsonrisa/contacto"
              onClick={() => handleClick(4)}
            >
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
