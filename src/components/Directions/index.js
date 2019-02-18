import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCH-pW2Oz9P2iWWzgZRcpm0J9_IQbdjBro"
    strokeWidth={3}
    strikeColor="#222"
  />
);

export default Directions;
