import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class WeatherMap extends Component {
  constructor(props) {
    super();

    this.state = {
      zoom: 10,
    };
  }

  render() {
    const position = [this.props.lat, this.props.lon];
    return (
      <Map center={position} zoom={this.state.zoom} style={{ height: 400 }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      </Map>
    );
  }
}

export default WeatherMap;
