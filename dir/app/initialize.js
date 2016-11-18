import ReactDOM from 'react-dom'
import React from 'react'
import EazeMap from 'components/map'
import PubNub from 'pubnub'
import Order from './order.js'

import Ion from 'ion-sound'

var pubnub = new PubNub({
  subscribeKey: 'sub-c-1cdd65fc-ad22-11e6-9ab5-0619f8945a4f'
})

pubnub.subscribe({
  channels: ['hackday_updates']
})

pubnub.addListener({
  message: (message) => {
    console.log('got a message', message.message)
    var order = new Order(message.message)
    addOrder(order)
  }
})

var a = require('react-leaflet')

const position = [37.7700, -122.3500]
const zoom = 13.0

var potential_orders = [ { latitude: 37.7615487, longitude: -122.4191631 },
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

var orders = []

var sounds = ion.sound({
    sounds: [
        {
          name: "The Next Episode",
          alias: "intro",
          ended_callback: () => {
            //addOrder();
            //setInterval(addOrder, 2000)
          }

        },
        {
          name: "dadadadadahhhh",
          alias: "newOrder"
        }
    ],
    volume: 0.5,
    preload: true,
    multiplay: true,
    ready_callback: () => {
      console.log('ion-sound is ready')
    },
    path: "/"
})

var renderView = function(orders) {
  ReactDOM.render(React.createElement(EazeMap, {position, zoom, orders}), document.querySelector('#map-container'));
}

var addOrder = function(order) {
  orders.push(order)
  renderView(orders)
  if (order.status == "Yo, hook me up!" || order.status == "I got ya!"){
    ion.sound.play('newOrder')
    window.leaflet.panTo([order.location.latitude, order.location.longitude], {animate: true})
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ion.sound.play('intro')
  renderView(orders)
  // intro sound ended_callback begins messages coming down
});
