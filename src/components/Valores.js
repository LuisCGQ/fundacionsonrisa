import React from "react";

import "./styles/Valores.css";

class Valores extends React.Component {
  render() {
    return (
      <div className="Valores container">
        <h2>
          Nuestros <span>Valores</span>
        </h2>
        <p className="Valores__valor">
          <span>Inclusión:</span> celebrar nuestra diversidad y nuestras
          diferencias con respeto y gratitud.
        </p>
        <p className="Valores__valor">
          <span> Respeto a la diversidad y a los derechos humanos</span>,
          comprendiendo y valorando a los demás. Solidaridad: Esfuerzo para
          mejorar las condiciones de vida de las personas
        </p>
        <p className="Valores__valor">
          <span>Transformación Social:</span> Ciudadanía Activa.
        </p>
        <p className="Valores__valor">
          <span>Empoderamiento:</span> Que los usuarios se sientan agentes de
          desarrollo de manera personal así como social.
        </p>
      </div>
    );
  }
}

export default Valores;
