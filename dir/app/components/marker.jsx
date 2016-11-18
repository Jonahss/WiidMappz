import React from 'react'
import {Marker, Popup} from 'react-leaflet'
import Leaflet from 'leaflet'

export default class EazeMarker extends React.Component {

  render() {
    var iconUrl = 'joint.png'
    var iconSize = [12+8, 60+20]

    if (this.props.price > 40) {
      iconUrl = 'j_eaze_blue.png'
    }
    if (this.props.price > 50) {
      iconUrl = 'j_pink.png'
    }
    if (this.props.price > 100) {
      iconUrl = 'j_yellow.png'
    }
    if (this.props.price > 200) {
      iconUrl = 'k_dark_blue.png'
      iconSize = [12*2, 60*2]
    }
    if (this.props.price > 1000) {
      iconSize = [12*10, 60*10]
    }

    if (this.props.status == 'Just dropped it off.') {
      iconUrl = 'roach.png'
    }
    if (this.props.status == "Nevermind, man." || this.props.status == 'Driver like "Nah ..."') {
      iconUrl = 'j_red.jpg'
    }



    var icon = new Leaflet.icon({iconUrl, iconSize})

    return <Marker position={[this.props.location.latitude, this.props.location.longitude]} icon={icon} key={this.props.id}>
      <Popup>
        <span>id: {this.props.id}<br/>status: {this.props.status}<br/>price: {this.props.price}</span>
      </Popup>
    </Marker>
  }
}
