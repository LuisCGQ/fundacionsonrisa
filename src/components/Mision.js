import React from "react";
import "./styles/Mision.css";
class Mision extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="Mision">
          <div className="container flex_continer">
            <h2>Misión:</h2>
            <p>
              Promover la integración de las personas con discapacidad motora
              leve a moderada mediante un modelo socioeducativo y terapéutico, y
              así logren ser agentes de desarrollo dentro de la sociedad.{" "}
            </p>
          </div>
        </div>
        <div className="Vision">
          <div className="container flex_continer">
            <h2>Visión:</h2>
            <p>
              Ser una Asociación Civil sólida autosuficiente y reconocida,
              dedicada a las personas con discapacidad; así como en las
              instituciones en materia de inclusión social.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Mision;
