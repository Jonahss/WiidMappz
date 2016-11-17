import ReactDOM from 'react-dom';
import React from 'react';
import EazeMap from 'components/map';

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

var renderView = function(orders) {
  ReactDOM.render(React.createElement(EazeMap, {position, zoom, orders}), document.querySelector('#map-container'));
}

var addOrder = function() {
  console.log('adding order')
  orders.push(potential_orders[orders.length])
  renderView(orders)
}

document.addEventListener('DOMContentLoaded', () => {
  renderView(orders)
  setInterval(addOrder, 1000)
});
