import React from 'react'
import {Marker, Popup} from 'react-leaflet'
import Leaflet from 'leaflet'

export default class EazeMarker extends React.Component {

  render() {
    var iconUrl = 'joint.png'
    if (this.props.status == 'Just dropped it off.') {
      iconUrl = 'roach.png'
    }

    var icon = Leaflet.icon({
      iconUrl: iconUrl,
      iconSize: [12, 60]
    })

    return <Marker position={[this.props.location.latitude, this.props.location.longitude]} icon={icon} key={this.props.id}>
      <Popup>
        <span>id: {this.props.id}<br/>status: {this.props.status}</span>
      </Popup>
    </Marker>
  }
}
