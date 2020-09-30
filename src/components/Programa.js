import React from "react";

import "./styles/Programa.css";

class Programa extends React.Component {
  render() {
    return (
      <div className="Programa">
        <img src={this.props.image} alt="imagen" className="Programa__image" />
        <p className="Programa__title">{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Programa;
