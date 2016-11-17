import React from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'

var locations = [ { latitude: 37.7615487, longitude: -122.4191631 },
  { latitude: 37.7924472, longitude: -122.3995004 },
  { latitude: 37.777607, longitude: -122.3909239 },
  { latitude: 37.7613407, longitude: -122.4884015 },
  { latitude: 37.7924472, longitude: -122.3995004 },
  { latitude: 37.7924472, longitude: -122.3995004 },
  { latitude: 37.7928599, longitude: -122.4158524 },
  { latitude: 37.7924472, longitude: -122.3995004 },
  { latitude: 37.7928599, longitude: -122.4158524 },
  { latitude: 37.7615487, longitude: -122.4191631 },
  { latitude: 37.7615487, longitude: -122.4191631 },
  { latitude: 37.777607, longitude: -122.3909239 },
  { latitude: 37.7616335, longitude: -122.3883623 },
  { latitude: 37.7615487, longitude: -122.4191631 },
  { latitude: 37.7852279, longitude: -122.404389 },
  { latitude: 37.76143, longitude: -122.419605 },
  { latitude: 37.7924472, longitude: -122.3995004 },
  { latitude: 37.7256557, longitude: -122.4510586 },
  { latitude: 37.748724, longitude: -122.419976 },
  { latitude: 37.7924472, longitude: -122.3995004 } ]
  .map((i) => {
    return [i.latitude, i.longitude]
  })


const position = [37.7700, -122.3500]
export default class App extends React.Component {
  render() {
    var markers = locations.map((l) => {
      return <Marker position={l}>
        <Popup>
          <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
        </Popup>
      </Marker>
    })


    return (
      <Map center={position} zoom={13.0}>
        <TileLayer
          url='http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}'
          attribution='Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {markers}
      </Map>
    );
  }
}
