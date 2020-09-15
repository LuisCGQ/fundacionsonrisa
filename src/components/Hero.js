import React from "react";

import "./styles/Hero.css";

import logo from "../images/logo.png";
import foto from "../images/foto.png";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero container">
        <img classname="hero__logo" src={logo} alt="" />
        <img classname="hero__foto" src={foto} alt="" />
      </div>
    );
  }
}

export default Hero;
