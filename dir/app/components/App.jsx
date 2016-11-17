import React from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'

const position = [37.7700, -122.3500]
export default class App extends React.Component {
  render() {
    return (
      <Map center={position} zoom={13.0}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
