import React from 'react'
import GoogleMaps from "simple-react-google-maps"

function Maps () {
  return (
    <GoogleMaps
      apiKey = {"AIzaSyDTskY6b9_cd1FJRLqqSGBYwRmajQjN1kg"}
      style={{height: "400px", width: "100%"}}
      zoom={6}
      center={{lat: 37.4224764, lng: -122.0842499}}
      markers={{lat: 37.4224764, lng: -122.0842499}} //optional
    />
  );
}

export default Maps;

