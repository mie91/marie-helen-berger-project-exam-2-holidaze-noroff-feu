import React from 'react'
import GoogleMaps from "simple-react-google-maps"
import PropTypes from "prop-types";

function Maps ({latitude, longitude}) {
  console.log(typeof latitude
  )
  return (
    <GoogleMaps
      apiKey = {"AIzaSyDTskY6b9_cd1FJRLqqSGBYwRmajQjN1kg"}
      style={{height: "300px", width: "300px"}}
      zoom={12}
      center={{lat: (latitude), lng:(longitude)}}
      markers={{lat: (latitude), lng: (longitude)}}
    />
  );
}

    Maps.propTypes = {
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    };


export default Maps;

