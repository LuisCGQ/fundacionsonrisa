import React from "react";

import markermap from "../images/markermap.png";

import { Map, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "./styles/Map.css";

const icon = new Icon({
  iconUrl: markermap,
  iconSize: [30, 50],
});

class Mapa extends React.Component {
  render() {
    return (
      <div className="Mapa container">
        <h2 className="Mapa__title">Permítenos ayudarte</h2>
        <div className="Mapa__flex">
          <Map
            className="Mapa__leaftlet-container"
            center={[20.682709, -103.285436]}
            zoom={15}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker
              key="Fundación Sonrisa"
              position={[20.682709, -103.285436]}
              icon={icon}
            />
          </Map>
          <div className="Mapa__Ubicacion">
            <h2>
              Nuestra <span>Ubicación</span>
            </h2>
            <p>
              Pedro Sánchez #3446 <br />
              Col. Beatriz Hernández. <br />
              Guadalajara Jal.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mapa;
