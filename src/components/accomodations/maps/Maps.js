import React from "react";
import GoogleMaps from "simple-react-google-maps";
import PropTypes from "prop-types";

function Maps({ latitude, longitude }) {
  return (
    <GoogleMaps
      apiKey={"AIzaSyDTskY6b9_cd1FJRLqqSGBYwRmajQjN1kg"}
      style={{ height: "200px", width: "200px" }}
      zoom={12}
      center={{ lat: latitude, lng: longitude }}
      markers={{ lat: latitude, lng: longitude }}
    />
  );
}

Maps.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Maps;
