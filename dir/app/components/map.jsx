import React from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import Leaflet from 'leaflet'


export default class EazeMap extends React.Component {
  render() {
    var icon = Leaflet.icon({
      iconUrl: 'joint.png',
      iconSize: [12, 60]
    })
    var markers = this.props.orders.map((l) => {
      return <Marker position={l} icon={icon}>
        <Popup>
          <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
        </Popup>
      </Marker>
    })

    return (
      <Map center={this.props.position} zoom={this.props.zoom}>
        <TileLayer
          url='http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}'
          attribution='Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {markers}
      </Map>
    )
  }
}
