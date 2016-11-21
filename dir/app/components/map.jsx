import React from 'react'
import {Map, TileLayer} from 'react-leaflet'
import Marker from './marker.jsx'
import _ from 'lodash'


export default class EazeMap extends React.Component {
  componentDidUpdate(props, context) {
    var map = this.refs.map.leafletElement
    console.log('refs', this.refs)
    map.panTo([order.location.latitude, order.location.longitude], {animate: true})
  }

  render() {

    var markers = _.values(this.props.orders).map((order) => {
      return React.createElement(Marker, order)
    })

    var map = (
      <Map center={this.props.position} zoom={this.props.zoom}>
        <TileLayer
          url='http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}'
          attribution='Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {markers}
      </Map>
    )

    return map
  }
}
