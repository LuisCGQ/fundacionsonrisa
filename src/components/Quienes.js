import React from "react";

import "./styles/Quienes.css";
import Somos from "../images/somos.png";

class Quienes extends React.Component {
  render() {
    return (
      <div className="Quienes container">
        <img className="Quienes__img" src={Somos} alt="" />
        <p>
          <span>Somos una A.C.</span> que tiene el objetivo de brindar a las
          personas con discapacidad motora la oportunidad de reinventarse,
          encontrando su autonomía a través de talleres motivacionales y de
          capacitación, así como ser el puente entre el beneficiario y las
          instituciones que requiera según sus necesidades específicas.
        </p>
      </div>
    );
  }
}

export default Quienes;
