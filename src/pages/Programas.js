import React from "react";

import Programa from "../components/Programa";

import "./styles/Programas.css";
import T1 from "../images/taller1.png";
import T2 from "../images/taller2.png";
import T3 from "../images/taller3.png";
import T4 from "../images/taller4.png";

class Programas extends React.Component {
  render() {
    return (
      <div className="Programas container">
        <div className="Programas__flex">
          <Programa
            image={T1}
            title="Talleres de capacitación laboral"
            description="Con el propósito de que las personas se sientan autosuficientes es importante ofrecerles herramientas para que ellos puedan seguir adelante ya sea autoempleandose o ser aspirantes bien capacitados para algún trabajo. Repostería, elaboración de calzado, asi como administración si desean comercializar sus productos."
          />
          <Programa
            image={T2}
            title="Talleres recreacionales y motivacionales "
            description="Contamos con voluntarios especialistas en temas de autoestima, motivación, empoderamiento, administración del tiempo libre donde pueden interactuar con los demás así con sus mismos cuidadores."
          />
        </div>
        <div className="Programas__flex">
          <Programa
            image={T3}
            title="Talleres de sensibilización"
            description="Es importante que la sociedad se dé cuenta de lo que vive día con día una persona con discapacidad, concientizar a la comunidad es de vital importancia para que sea una sociedad más inclusiva y unida."
          />
          <Programa
            image={T4}
            title="Reclusión de voluntarios al volante."
            description="Nuestros usuarios requieren de personas que le ayuden a poder trasladarse, ya sea para acudir a alguna cita médica y/o rehabilitación así como a alguna entrevista de trabajo o algún otro compromiso y muchas veces no cuentan con recursos económicos para pagar. Por ello es importante poder contar con el apoyo de. Personas de buena fe y apoyen para esta causa."
          />
        </div>
      </div>
    );
  }
}

export default Programas;
