import React from "react";

import Quienes from "../components/Quienes";
import Mision from "../components/Mision";
import Valores from "../components/Valores";

class Somos extends React.Component {
  render() {
    return (
      <div className="Somos">
        <Quienes />
        <Mision />
        <Valores />
      </div>
    );
  }
}

export default Somos;
